import { AlertTriangle } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { href } from "@/lib/routes";
import { Breadcrumbs } from "./page-hero";

type Doc = { title: string; updated: string; sections: { heading: string; body: string[] }[] };

export function LegalPage({ locale, dict, doc, path }: { locale: Locale; dict: Dictionary; doc: Doc; path: string }) {
  const date = new Intl.DateTimeFormat(locale === "ar" ? "ar-AE" : "en-GB", { dateStyle: "long" }).format(new Date(doc.updated));
  return (
    <article className="container-x max-w-4xl pt-[calc(var(--header-h)+2.5rem)] pb-28">
      <Breadcrumbs
        label={dict.common.breadcrumb}
        items={[
          { name: dict.common.home, href: href(locale) },
          { name: doc.title, href: href(locale, path) },
        ]}
      />
      <h1 className="display mt-12 text-5xl sm:text-6xl">{doc.title}</h1>
      <p className="mt-4 text-sm text-mist-2">
        {dict.legal.updated}: <time dateTime={doc.updated}>{date}</time>
      </p>
      <p role="note" className="mt-8 flex gap-3 rounded-2xl border border-ember/50 bg-ember/10 p-5 text-sm leading-relaxed">
        <AlertTriangle className="mt-0.5 size-5 shrink-0 text-ember" aria-hidden="true" />
        {dict.legal.reviewNotice}
      </p>
      <div className="mt-12 space-y-12">
        {doc.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="text-2xl font-semibold">{s.heading}</h2>
            {s.body.map((b) => (
              <p key={b} className="mt-4 leading-relaxed text-mist">
                {b}
              </p>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}
