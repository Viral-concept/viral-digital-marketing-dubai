"use client";

import Link from "next/link";
import { startTransition, useActionState, useEffect, useRef, useState, type FormEvent } from "react";
import { AlertCircle, ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { submitEnquiry } from "@/actions/enquiry";
import type { EnquiryField, EnquiryState } from "@/lib/enquiry-schema";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

type Props = {
  locale: Locale;
  dict: Dictionary["form"];
  services: { value: string; label: string }[];
  privacyHref: string;
  defaultService?: string;
  page: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Light client checks for instant feedback; the server action re-validates everything. */
function validate(form: HTMLFormElement): EnquiryField[] {
  const v = (name: string) => String(new FormData(form).get(name) ?? "").trim();
  const errors: EnquiryField[] = [];
  if (v("name").length < 2) errors.push("name");
  if (!EMAIL.test(v("email"))) errors.push("email");
  if (v("company").length < 2) errors.push("company");
  if (v("phone") && !/^[+()\d\s-]{6,30}$/.test(v("phone"))) errors.push("phone");
  if (!v("service")) errors.push("service");
  if (v("message").length < 20) errors.push("message");
  if (!(form.elements.namedItem("consent") as HTMLInputElement)?.checked) errors.push("consent");
  return errors;
}

export function EnquiryForm({ locale, dict, services, privacyHref, defaultService = "", page }: Props) {
  const [state, action, pending] = useActionState<EnquiryState, FormData>(submitEnquiry, { status: "idle" });
  const [clientErrors, setClientErrors] = useState<EnquiryField[]>([]);
  const startedRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Timestamp for the "filled too fast" spam check, written straight to the DOM after hydration.
  useEffect(() => {
    if (startedRef.current) startedRef.current.value = String(Date.now());
  }, []);

  const v = state.status !== "idle" && state.status !== "success" ? (state.values ?? {}) : {};
  const errors = clientErrors.length ? clientErrors : state.status === "invalid" ? state.fields : [];

  useEffect(() => {
    if (state.status !== "idle" && state.status !== "invalid") statusRef.current?.focus();
    if (state.status === "success") formRef.current?.reset();
  }, [state]);

  // With JavaScript we dispatch the action ourselves: React only auto-resets a form whose
  // `action` prop handled the submit, so typed details survive a failed send. Without
  // JavaScript the `action` prop still submits the form natively.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const found = validate(form);
    setClientErrors(found);
    if (found.length) {
      (form.elements.namedItem(found[0]) as HTMLElement | null)?.focus();
      return;
    }
    const data = new FormData(form);
    startTransition(() => action(data));
  };

  const has = (f: EnquiryField) => errors.includes(f);
  const describedBy = (f: EnquiryField, hint?: string) => [has(f) ? `${f}-error` : null, hint].filter(Boolean).join(" ") || undefined;

  if (state.status === "success") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="rounded-3xl border border-lagoon/40 bg-ink-2 p-8 outline-none sm:p-10">
        <CheckCircle2 className="size-10 text-lagoon" aria-hidden="true" />
        <h3 className="mt-5 text-2xl font-semibold">{dict.successTitle}</h3>
        <p className="mt-3 text-mist">{dict.successBody}</p>
      </div>
    );
  }

  const field =
    "mt-2 block w-full rounded-xl border bg-ink px-4 py-3.5 text-paper placeholder:text-mist-2 transition-colors duration-300 focus:border-paper focus:outline-none focus-visible:outline-2 focus-visible:outline-ember";
  const ok = "border-line-dark hover:border-mist-2";
  const select =
    "appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20fill=%22none%22%20stroke=%22%23a7b0c3%22%20stroke-width=%222%22%3E%3Cpath%20d=%22m4%206%204%204%204-4%22/%3E%3C/svg%3E')] bg-no-repeat bg-[position:right_1rem_center] pe-11 rtl:bg-[position:left_1rem_center]";
  const bad = "border-ember";
  const label = "text-sm font-medium text-paper";
  const err = (f: EnquiryField) =>
    has(f) ? (
      <p id={`${f}-error`} className="mt-2 flex items-center gap-1.5 text-sm text-ember">
        <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
        {dict.errors[f as keyof typeof dict.errors]}
      </p>
    ) : null;

  return (
    <form
      ref={formRef}
      action={action}
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-line-dark bg-ink-2/70 p-6 sm:p-10"
      aria-describedby={errors.length ? "form-errors" : undefined}
    >
      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="page" value={page} />
      <input ref={startedRef} type="hidden" name="startedAt" defaultValue="0" />
      {/* Honeypot: hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute -start-[9999px] size-px overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {(state.status === "error" || state.status === "not_configured" || state.status === "rate_limited") && (
        <div ref={statusRef} tabIndex={-1} role="alert" className="mb-8 rounded-2xl border border-ember/60 bg-ember/10 p-5 outline-none">
          <p className="flex items-center gap-2 font-semibold text-paper">
            <AlertCircle className="size-5 text-ember" aria-hidden="true" />
            {dict.errorTitle}
          </p>
          <p className="mt-2 text-sm text-mist">
            {state.status === "not_configured" ? dict.notConfigured : state.status === "rate_limited" ? dict.rateLimited : dict.errorBody}
          </p>
        </div>
      )}
      {errors.length > 0 && (
        <p id="form-errors" role="alert" className="mb-6 text-sm font-medium text-ember">
          {dict.fixErrors}
        </p>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            {dict.name} <span className="text-ember" aria-hidden="true">*</span>
          </label>
          <input id="name" name="name" defaultValue={v.name} autoComplete="name" required aria-invalid={has("name")} aria-describedby={describedBy("name")} className={`${field} ${has("name") ? bad : ok}`} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="email" className={label}>
            {dict.email} <span className="text-ember" aria-hidden="true">*</span>
          </label>
          <input id="email" name="email" defaultValue={v.email} type="email" dir="ltr" autoComplete="email" inputMode="email" required aria-invalid={has("email")} aria-describedby={describedBy("email")} className={`${field} ${has("email") ? bad : ok} rtl:text-right`} />
          {err("email")}
        </div>
        <div>
          <label htmlFor="company" className={label}>
            {dict.company} <span className="text-ember" aria-hidden="true">*</span>
          </label>
          <input id="company" name="company" defaultValue={v.company} autoComplete="organization" required aria-invalid={has("company")} aria-describedby={describedBy("company")} className={`${field} ${has("company") ? bad : ok}`} />
          {err("company")}
        </div>
        <div>
          <label htmlFor="phone" className={label}>
            {dict.phone}
          </label>
          <input id="phone" name="phone" defaultValue={v.phone} type="tel" dir="ltr" autoComplete="tel" inputMode="tel" aria-invalid={has("phone")} aria-describedby={describedBy("phone")} className={`${field} ${has("phone") ? bad : ok} rtl:text-right`} />
          {err("phone")}
        </div>
        <div>
          <label htmlFor="service" className={label}>
            {dict.service} <span className="text-ember" aria-hidden="true">*</span>
          </label>
          <select id="service" name="service" required defaultValue={v.service ?? defaultService} aria-invalid={has("service")} aria-describedby={describedBy("service")} className={`${field} ${has("service") ? bad : ok} ${select}`}>
            <option value="" disabled>
              {dict.servicePlaceholder}
            </option>
            {services.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
            <option value="unsure">{dict.serviceUnsure}</option>
          </select>
          {err("service")}
        </div>
        <div>
          <label htmlFor="budget" className={label}>
            {dict.budget}
          </label>
          <select id="budget" name="budget" defaultValue={v.budget ?? ""} className={`${field} ${ok} ${select}`}>
            <option value="">{dict.budgetPlaceholder}</option>
            {dict.budgets.map((b) => (
              <option key={b.value} value={b.value}>
                {b.label}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={label}>
            {dict.message} <span className="text-ember" aria-hidden="true">*</span>
          </label>
          <textarea id="message" name="message" defaultValue={v.message} rows={5} required minLength={20} aria-invalid={has("message")} aria-describedby={describedBy("message", "message-hint")} className={`${field} ${has("message") ? bad : ok} resize-y`} />
          <p id="message-hint" className="mt-2 text-sm text-mist-2">
            {dict.messageHint}
          </p>
          {err("message")}
        </div>
        <div className="sm:col-span-2">
          <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-mist">
            <input type="checkbox" name="consent" required defaultChecked={v.consent === "on"} aria-invalid={has("consent")} aria-describedby={describedBy("consent")} className="mt-1 size-5 shrink-0 accent-ember" />
            <span>
              {dict.consent}{" "}
              <Link href={privacyHref} className="text-paper underline underline-offset-4">
                {dict.privacyLink}
              </Link>
            </span>
          </label>
          {err("consent")}
        </div>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="group mt-8 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-ember px-8 text-lg font-semibold text-ink transition-colors duration-300 hover:bg-paper disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {pending ? (
          <>
            <Loader2 className="size-5 animate-spin" aria-hidden="true" />
            {dict.submitting}
          </>
        ) : (
          <>
            {dict.submit}
            <ArrowUpRight className="flip-rtl size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
