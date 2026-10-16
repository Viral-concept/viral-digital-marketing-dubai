import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { pageMetadata, absoluteUrl } from "@/lib/seo";
import { href, routes } from "@/lib/routes";
import { familyColor } from "@/lib/families";
import { site } from "@/config/site";
import { getService, services, servicesBySlugs } from "@/content/services";
import { industriesBySlugs } from "@/content/industries";
import { PageHero } from "@/components/page-hero";
import { FaqList } from "@/components/faq-list";
import { ContactBlock } from "@/components/contact-block";
import { IndustryArt } from "@/components/industry-art";
import { JsonLd } from "@/components/json-ld";
import { Eyebrow, WordReveal } from "@/components/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => services.map((s) => ({ locale, slug: s.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/services/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getService(slug);
  if (!isLocale(locale) || !service) return {};
  const c = service[locale];
  return pageMetadata({ locale, path: routes.service(slug), title: c.metaTitle, description: c.metaDescription });
}

export default async function ServicePage({ params }: PageProps<"/[locale]/services/[slug]">) {
  const { locale, slug } = await params;
  const service = getService(slug);
  if (!isLocale(locale) || !service) notFound();
  const dict = getDictionary(locale);
  const t = dict.pages.service;
  const c = service[locale];
  const color = familyColor[service.family];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: c.name,
          description: c.metaDescription,
          serviceType: c.name,
          url: absoluteUrl(href(locale, routes.service(slug))),
          areaServed: { "@type": "Country", name: "United Arab Emirates" },
          provider: { "@id": `${site.url}/#organization`, name: site.brand.name[locale] },
          inLanguage: locale,
        }}
      />
      <PageHero
        eyebrow={`${service.index} · ${dict.common.families[service.family]}`}
        title={c.headline}
        body={c.intro}
        crumbLabel={dict.common.breadcrumb}
        crumbs={[
          { name: dict.common.home, href: href(locale) },
          { name: dict.nav.services, href: href(locale, routes.services) },
          { name: c.name, href: href(locale, routes.service(slug)) },
        ]}
        aside={
          <div className="relative overflow-hidden rounded-[2rem] border border-line-dark bg-ink-2 p-8">
            <div aria-hidden="true" className="absolute -end-16 -top-16 size-56 rounded-full blur-3xl" style={{ background: `${color.hex}33` }} />
            <p className="eyebrow relative" style={{ color: color.hex }}>
              {t.outcomesTitle}
            </p>
            <ul className="relative mt-6 space-y-4">
              {c.outcomes.map((o) => (
                <li key={o} className="flex gap-3">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full text-ink" style={{ background: color.hex }}>
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="leading-relaxed">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        }
      />

      {/* Deliverables: editorial numbered list */}
      <section aria-labelledby="deliverables" className="border-t border-line-dark py-24 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow className="mb-6">
              <span style={{ color: color.hex }}>{c.name}</span>
            </Eyebrow>
            <WordReveal as="h2" id="deliverables" text={t.deliverablesTitle} className="display text-4xl sm:text-5xl" />
          </div>
          <ol className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
            {c.deliverables.map((d, i) => (
              <li key={d.title} data-reveal="up" style={{ ["--i" as string]: i % 2 }} className="border-t border-line-dark py-7">
                <span className="font-mono text-sm" style={{ color: color.hex }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-semibold">{d.title}</h3>
                <p className="mt-2 leading-relaxed text-mist">{d.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Process: horizontal progression */}
      <section aria-labelledby="svc-process" className="surface-paper py-24 sm:py-28">
        <div className="container-x">
          <WordReveal as="h2" id="svc-process" text={t.processTitle} className="display text-4xl sm:text-5xl" />
          <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
            <div aria-hidden="true" className="absolute inset-x-0 top-5 hidden h-px bg-ink/15 md:block" />
            {c.process.map((step, i) => (
              <li key={step.title} data-reveal="start" style={{ ["--i" as string]: i }} className="relative">
                <span className="relative grid size-10 place-items-center rounded-full font-mono text-sm text-ink" style={{ background: color.hex }}>
                  {i + 1}
                </span>
                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-stone">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Fit + industries */}
      <section aria-labelledby="svc-fit" className="py-24 sm:py-28">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <WordReveal as="h2" id="svc-fit" text={t.fitTitle} className="display text-4xl sm:text-5xl" />
            <ul className="mt-10 space-y-4">
              {c.fit.map((f) => (
                <li key={f} data-reveal="up" className="flex gap-4 border-b border-line-dark pb-4 text-lg">
                  <span className="mt-2.5 size-2 shrink-0 rounded-full" style={{ background: color.hex }} aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <h2 className="eyebrow text-mist-2">{t.industriesTitle}</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {industriesBySlugs(service.industries).map((ind, i) => (
                <li key={ind.slug} data-reveal="end" style={{ ["--i" as string]: i }}>
                  <Link href={href(locale, routes.industry(ind.slug))} className="group block overflow-hidden rounded-2xl border border-line-dark bg-ink-2">
                    <div className="aspect-[16/9] overflow-hidden">
                      <IndustryArt motif={ind.motif} hue={ind.hue} seed={ind.slug} className="size-full transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-105" />
                    </div>
                    <div className="flex items-center justify-between gap-3 p-5">
                      <span className="font-semibold">{ind[locale].name}</span>
                      <ArrowUpRight className="flip-rtl size-4 shrink-0 text-mist transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" aria-hidden="true" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="svc-faq" className="surface-paper py-24 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="svc-faq" className="display text-4xl sm:text-5xl">
              {t.faqTitle} {c.name}
            </h2>
          </div>
          <div className="lg:col-span-8">
            <FaqList items={c.faqs} tone="light" />
          </div>
        </div>
      </section>

      <section aria-labelledby="svc-related" className="py-20">
        <div className="container-x">
          <h2 id="svc-related" className="eyebrow text-mist-2">
            {t.relatedTitle}
          </h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {servicesBySlugs(service.related).map((r) => (
              <li key={r.slug}>
                <Link
                  href={href(locale, routes.service(r.slug))}
                  className="group flex h-full flex-col justify-between gap-6 rounded-2xl border border-line-dark p-6 transition-colors duration-500 hover:border-mist-2 hover:bg-ink-2"
                >
                  <span className="eyebrow" style={{ color: familyColor[r.family].hex }}>
                    {r.index} · {dict.common.families[r.family]}
                  </span>
                  <span>
                    <span className="block text-xl font-semibold">{r[locale].name}</span>
                    <span className="mt-2 block text-sm leading-relaxed text-mist">{r[locale].short}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactBlock locale={locale} dict={dict} defaultService={slug} page={routes.service(slug)} />
    </>
  );
}
