"use server";

import { headers } from "next/headers";
import { enquirySchema, type EnquiryField, type EnquiryInput, type EnquiryState, type EnquiryValues } from "@/lib/enquiry-schema";

/**
 * Best-effort in-memory rate limit. Fine for a single server; on serverless or multi-instance
 * hosting, replace with a shared store (e.g. Upstash Redis) - see README.
 */
const attempts = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 5;

function rateLimited(key: string) {
  const now = Date.now();
  const recent = (attempts.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  attempts.set(key, recent);
  return recent.length > MAX_ATTEMPTS;
}

const MIN_FILL_MS = 2500;

const FIELDS: EnquiryField[] = ["name", "email", "company", "phone", "service", "budget", "message", "consent"];

export async function submitEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const values = Object.fromEntries(FIELDS.map((k) => [k, String(formData.get(k) ?? "").slice(0, 4000)])) as EnquiryValues;

  // Spam protection 1: honeypot field humans never see.
  if (String(formData.get("website") ?? "").length > 0) return { status: "success" };

  // Spam protection 2: forms completed implausibly fast are bots.
  const startedAt = Number(formData.get("startedAt"));
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_MS) {
    return { status: "error", values };
  }

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
  if (rateLimited(ip)) return { status: "rate_limited", values };

  const raw = Object.fromEntries(FIELDS.map((k) => [k, formData.get(k) ?? undefined]));
  const parsed = enquirySchema.safeParse(raw);
  if (!parsed.success) {
    const fields = [...new Set(parsed.error.issues.map((i) => i.path[0] as EnquiryField))];
    return { status: "invalid", fields, values };
  }

  const locale = formData.get("locale") === "ar" ? "ar" : "en";
  const page = String(formData.get("page") ?? "").slice(0, 200);

  try {
    const delivered = await deliver(parsed.data, { locale, page });
    return delivered ? { status: "success" } : { status: "not_configured", values };
  } catch (error) {
    console.error("[enquiry] delivery failed", error instanceof Error ? error.message : error);
    return { status: "error", values };
  }
}

/** Returns false when no delivery channel is configured. Throws if a configured channel fails. */
async function deliver(data: EnquiryInput, meta: { locale: string; page: string }): Promise<boolean> {
  let delivered = false;
  const payload = { ...data, consent: true, ...meta, receivedAt: new Date().toISOString() };

  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...(process.env.ENQUIRY_WEBHOOK_SECRET ? { authorization: `Bearer ${process.env.ENQUIRY_WEBHOOK_SECRET}` } : {}),
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    delivered = true;
  }

  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;
  const from = process.env.ENQUIRY_FROM_EMAIL;
  if (resendKey && to && from) {
    const lines = Object.entries(payload).map(([k, v]) => `${k}: ${String(v ?? "")}`);
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { authorization: `Bearer ${resendKey}`, "content-type": "application/json" },
      body: JSON.stringify({
        from,
        to: to.split(",").map((s) => s.trim()),
        reply_to: data.email,
        subject: `New enquiry: ${data.company} (${data.service})`,
        text: lines.join("\n"),
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`Resend responded ${res.status}`);
    delivered = true;
  }

  // Local development only: opt in to logging instead of delivering.
  if (!delivered && process.env.NODE_ENV !== "production" && process.env.ENQUIRY_DEV_LOG === "true") {
    console.info("[enquiry] DEV_LOG (not delivered)", payload);
    return true;
  }

  return delivered;
}
