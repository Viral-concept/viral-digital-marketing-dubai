import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { X } from "lucide-react";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { pageMetadata } from "@/lib/seo";
import { href, routes } from "@/lib/routes";
import { PageHero } from "@/components/page-hero";
import { Process } from "@/components/home/process";
import { ContactBlock } from "@/components/contact-block";
import { WordReveal } from "@/components/ui";

export async function generateMetadata({ params }: PageProps<"/[locale]/approach">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const d = getDictionary(locale);
  return pageMetadata({ locale, path: routes.approach, title: d.meta.aboutTitle, description: d.meta.aboutDescription });
}

export default async function ApproachPage({ params }: PageProps<"/[locale]/approach">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const p = dict.pages.about;

  return (
    <>
      <PageHero
        eyebrow={p.eyebrow}
        title={p.title}
        body={p.body}
        crumbLabel={dict.common.breadcrumb}
        crumbs={[
          { name: dict.common.home, href: href(locale) },
          { name: dict.nav.approach, href: href(locale, routes.approach) },
        ]}
      />
      <section aria-labelledby="principles" className="border-t border-line-dark py-24 sm:py-28">
        <div className="container-x">
          <WordReveal as="h2" id="principles" text={p.principlesTitle} className="display text-4xl sm:text-5xl" />
          <ol className="mt-14 grid gap-x-10 gap-y-2 md:grid-cols-2 lg:grid-cols-3">
            {p.principles.map((pr, i) => (
              <li key={pr.title} data-reveal="up" style={{ ["--i" as string]: i % 3 }} className="border-t border-line-dark py-8">
                <span className="font-mono text-sm text-ember">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-2xl font-semibold">{pr.title}</h3>
                <p className="mt-3 leading-relaxed text-mist">{pr.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <Process dict={dict} />
      <section aria-labelledby="not" className="py-24 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <WordReveal as="h2" id="not" text={p.notTitle} className="display text-4xl sm:text-5xl lg:col-span-5" />
          <ul className="lg:col-span-7">
            {p.not.map((n) => (
              <li key={n} data-reveal="end" className="flex items-start gap-4 border-b border-line-dark py-6 text-xl">
                <X className="mt-1 size-5 shrink-0 text-ember" aria-hidden="true" />
                {n}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ContactBlock locale={locale} dict={dict} page={routes.approach} />
    </>
  );
}
