import { z } from "zod";

export const serviceOptions = [
  "digital-marketing",
  "seo",
  "social-media",
  "branding",
  "web-design-development",
  "web-applications",
  "mobile-apps",
  "ecommerce",
  "ai-automation",
  "ai-chatbots",
  "unsure",
] as const;

export const budgetOptions = ["under-15k", "15-40k", "40-100k", "100k-plus", "unsure"] as const;

/** Shared by the browser (instant feedback) and the server action (authoritative). */
export const enquirySchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().toLowerCase().email().max(200),
  company: z.string().trim().min(2).max(160),
  phone: z
    .string()
    .trim()
    .max(30)
    .regex(/^[+()\d\s-]*$/)
    .optional()
    .or(z.literal("")),
  service: z.enum(serviceOptions),
  budget: z.enum(budgetOptions).optional().or(z.literal("")),
  message: z.string().trim().min(20).max(4000),
  consent: z.literal("on"),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
export type EnquiryField = keyof EnquiryInput;

/** Submitted values are echoed back on failure so React's post-action form reset restores them. */
export type EnquiryValues = Partial<Record<EnquiryField, string>>;

export type EnquiryState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "invalid"; fields: EnquiryField[]; values: EnquiryValues }
  | { status: "error" | "not_configured" | "rate_limited"; values?: EnquiryValues };
