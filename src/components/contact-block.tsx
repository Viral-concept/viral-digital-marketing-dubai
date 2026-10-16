import { Mail, Phone, ShieldCheck } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { site } from "@/config/site";
import { services } from "@/content/services";
import { href, routes } from "@/lib/routes";
import { EnquiryForm } from "./enquiry-form";
import { Eyebrow, WordReveal } from "./ui";

export function ContactBlock({
  locale,
  dict,
  defaultService,
  page,
  headingLevel = "h2",
}: {
  locale: Locale;
  dict: Dictionary;
  defaultService?: string;
  page: string;
  headingLevel?: "h1" | "h2";
}) {
  const c = dict.contact;
  return (
    <section id="enquire" aria-labelledby="enquire-title" className="relative py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Eyebrow className="mb-6 text-ember">{c.eyebrow}</Eyebrow>
          <WordReveal as={headingLevel} id="enquire-title" text={c.title} className="display text-4xl sm:text-5xl lg:text-6xl" />
          <p data-reveal="up" className="mt-6 max-w-md text-lg leading-relaxed text-mist">
            {c.body}
          </p>

          <div data-reveal="up" className="mt-12">
            <h3 className="eyebrow text-mist-2">{c.next.title}</h3>
            <ol className="mt-5 space-y-4">
              {c.next.steps.map((s, i) => (
                <li key={s} className="flex gap-4">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full border border-line-dark font-mono text-xs">{i + 1}</span>
                  <span className="pt-1 text-mist">{s}</span>
                </li>
              ))}
            </ol>
          </div>

          <div data-reveal="up" className="mt-12 rounded-2xl border border-line-dark p-6">
            <p className="font-semibold">{c.direct}</p>
            {site.contact.email || site.contact.phone ? (
              <ul className="mt-4 space-y-3 text-mist">
                {site.contact.email ? (
                  <li className="flex items-center gap-3">
                    <Mail className="size-4" aria-hidden="true" />
                    <a className="link-underline hover:text-paper" href={`mailto:${site.contact.email}`}>
                      {site.contact.email}
                    </a>
                  </li>
                ) : null}
                {site.contact.phone ? (
                  <li className="flex items-center gap-3">
                    <Phone className="size-4" aria-hidden="true" />
                    <a className="link-underline hover:text-paper" dir="ltr" href={`tel:${site.contact.phone.replace(/\s/g, "")}`}>
                      {site.contact.phone}
                    </a>
                  </li>
                ) : null}
                <li className="text-sm text-mist-2">
                  {c.hoursLabel}: {site.contact.hours[locale]}
                </li>
              </ul>
            ) : (
              <p className="mt-3 text-sm text-mist">{c.directPending}</p>
            )}
            <p className="mt-5 flex gap-3 border-t border-line-dark pt-5 text-sm text-mist-2">
              <ShieldCheck className="mt-0.5 size-4 shrink-0 text-lagoon" aria-hidden="true" />
              {c.official}
            </p>
          </div>
        </div>

        <div className="lg:col-span-7" data-reveal="up">
          <EnquiryForm
            locale={locale}
            dict={dict.form}
            services={services.map((s) => ({ value: s.slug, label: s[locale].name }))}
            privacyHref={href(locale, routes.privacy)}
            defaultService={defaultService}
            page={page}
          />
        </div>
      </div>
    </section>
  );
}
