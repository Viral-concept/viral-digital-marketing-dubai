import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Info } from "lucide-react";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { pageMetadata } from "@/lib/seo";
import { href, routes } from "@/lib/routes";
import { familyColor } from "@/lib/families";
import { getIndustry, industries, industriesBySlugs } from "@/content/industries";
import { servicesBySlugs } from "@/content/services";
import { PageHero } from "@/components/page-hero";
import { FaqList } from "@/components/faq-list";
import { ContactBlock } from "@/components/contact-block";
import { IndustryArt } from "@/components/industry-art";
import { Eyebrow, WordReveal } from "@/components/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => industries.map((i) => ({ locale, slug: i.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/industries/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const industry = getIndustry(slug);
  if (!isLocale(locale) || !industry) return {};
  const c = industry[locale];
  return pageMetadata({ locale, path: routes.industry(slug), title: c.metaTitle, description: c.metaDescription });
}

export default async function IndustryPage({ params }: PageProps<"/[locale]/industries/[slug]">) {
  const { locale, slug } = await params;
  const industry = getIndustry(slug);
  if (!isLocale(locale) || !industry) notFound();
  const dict = getDictionary(locale);
  const t = dict.pages.industry;
  const c = industry[locale];
  const accent = `hsl(${industry.hue} 85% 68%)`;
  const number = industries.findIndex((i) => i.slug === slug) + 1;

  return (
    <>
      <PageHero
        eyebrow={`${String(number).padStart(2, "0")} · ${c.name}`}
        title={c.headline}
        body={c.intro}
        crumbLabel={dict.common.breadcrumb}
        crumbs={[
          { name: dict.common.home, href: href(locale) },
          { name: dict.nav.industries, href: href(locale, routes.industries) },
          { name: c.name, href: href(locale, routes.industry(slug)) },
        ]}
        aside={
          <figure>
            <div className="aspect-[4/3] overflow-hidden rounded-[2rem] border border-line-dark">
              <IndustryArt motif={industry.motif} hue={industry.hue} seed={industry.slug} className="size-full" animated title={c.name} />
            </div>
            <figcaption className="mt-4 flex gap-3 text-sm text-mist-2">
              <span className="eyebrow shrink-0 text-mist">{t.visualTitle}</span>
              <span>{c.visualDirection}</span>
            </figcaption>
          </figure>
        }
      >
        <div data-reveal="up" style={{ ["--i" as string]: 6 }} className="mt-10 flex flex-wrap gap-3">
          <Link
            href="#enquire"
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ember px-6 font-semibold text-ink transition-colors hover:bg-paper"
          >
            {dict.common.startProject}
          </Link>
          <span className="inline-flex min-h-12 items-center rounded-full border border-line-dark px-5 text-sm text-mist">
            {dict.common.tiers[industry.tier]}
          </span>
        </div>
      </PageHero>

      {/* Challenges */}
      <section aria-labelledby="ind-challenges" className="surface-paper py-24 sm:py-28">
        <div className="container-x">
          <WordReveal as="h2" id="ind-challenges" text={t.challengesTitle} className="display max-w-3xl text-4xl sm:text-5xl" />
          <ol className="mt-14 grid gap-x-12 md:grid-cols-2">
            {c.challenges.map((ch, i) => (
              <li key={ch.title} data-reveal={i % 2 === 0 ? "start" : "end"} className="grid grid-cols-[auto_1fr] gap-6 border-t border-ink/10 py-8">
                <span className="display text-5xl text-ink/15 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-2xl font-semibold">{ch.title}</h3>
                  <p className="mt-3 leading-relaxed text-stone">{ch.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Marketing vs build: two halves entering from opposite sides */}
      <section aria-label={`${t.marketingTitle} · ${t.solutionsTitle}`} className="py-24 sm:py-28">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          <div data-reveal="start" className="rounded-[2rem] border border-line-dark bg-ink-2/60 p-8 sm:p-10">
            <p className="eyebrow text-ember">{dict.common.families.growth}</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl">{t.marketingTitle}</h2>
            <ul className="mt-8 space-y-6">
              {c.marketing.map((m) => (
                <li key={m.title} className="border-t border-line-dark pt-6">
                  <h3 className="text-lg font-semibold">{m.title}</h3>
                  <p className="mt-2 leading-relaxed text-mist">{m.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal="end" className="rounded-[2rem] border border-line-dark bg-ink-2/60 p-8 sm:p-10">
            <p className="eyebrow">
              <span className="text-sky">{dict.common.families.build}</span>
              <span className="text-mist-2"> + </span>
              <span className="text-lagoon">{dict.common.families.intelligence}</span>
            </p>
            <h2 className="display mt-4 text-3xl sm:text-4xl">{t.solutionsTitle}</h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
              {c.solutions.map((s, i) => (
                <li key={s.title} className="border-t border-line-dark pt-6">
                  <span className={`block size-2 rounded-full ${i % 2 === 0 ? "bg-sky" : "bg-lagoon"}`} aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-mist">{s.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section aria-labelledby="ind-journey" className="border-t border-line-dark py-24 sm:py-28">
        <div className="container-x">
          <Eyebrow className="mb-6">
            <span style={{ color: accent }}>{c.name}</span>
          </Eyebrow>
          <WordReveal as="h2" id="ind-journey" text={t.journeyTitle} className="display max-w-3xl text-4xl sm:text-5xl" />
        </div>
        <ol className="no-scrollbar relative mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[var(--gutter)] pb-4 lg:container-x lg:grid lg:grid-cols-5 lg:overflow-visible">
          {c.journey.map((step, i) => (
            <li key={step.title} data-reveal="start" style={{ ["--i" as string]: i }} className="relative w-[78vw] shrink-0 snap-start sm:w-[22rem] lg:w-auto">
              <div className="flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full font-mono text-sm text-ink" style={{ background: accent }}>
                  {i + 1}
                </span>
                {i < c.journey.length - 1 ? <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-line-dark to-transparent rtl:bg-gradient-to-l" /> : null}
              </div>
              <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-mist">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Services + compliance */}
      <section aria-labelledby="ind-services" className="surface-paper py-24 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 id="ind-services" className="display text-4xl sm:text-5xl">
              {t.servicesTitle}
            </h2>
            <ul className="mt-10 border-t border-ink/10">
              {servicesBySlugs(industry.services).map((s) => (
                <li key={s.slug}>
                  <Link href={href(locale, routes.service(s.slug))} className="group flex items-center justify-between gap-6 border-b border-ink/10 py-5">
                    <span className="flex items-center gap-4">
                      <span className="size-2 rounded-full" style={{ background: familyColor[s.family].deep }} aria-hidden="true" />
                      <span>
                        <span className="block text-xl font-semibold transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5">
                          {s[locale].name}
                        </span>
                        <span className="mt-1 block text-sm text-stone">{s[locale].short}</span>
                      </span>
                    </span>
                    <ArrowUpRight className="flip-rtl size-5 shrink-0 text-stone transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6 lg:col-span-5">
            {c.compliance ? (
              <aside data-reveal="end" className="rounded-[1.5rem] bg-ink p-8 text-paper">
                <p className="flex items-center gap-2 font-semibold">
                  <Info className="size-5 text-ember" aria-hidden="true" />
                  {t.complianceTitle}
                </p>
                <p className="mt-4 leading-relaxed text-mist">{c.compliance}</p>
              </aside>
            ) : null}
            <p data-reveal="end" className="rounded-[1.5rem] border border-ink/10 p-8 leading-relaxed text-stone">
              {t.honesty}
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="ind-faq" className="py-24 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="ind-faq" className="display text-4xl sm:text-5xl">
              {t.faqTitle}
            </h2>
          </div>
          <div className="lg:col-span-8">
            <FaqList items={c.faqs} />
          </div>
        </div>
      </section>

      {/* Industry CTA */}
      <section aria-labelledby="ind-cta" className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] p-10 sm:p-14" style={{ background: `linear-gradient(120deg, hsl(${industry.hue} 70% 22%), #131a28 70%)` }}>
          <div className="relative max-w-3xl">
            <h2 id="ind-cta" className="display text-4xl sm:text-5xl">
              {c.cta.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-mist">{c.cta.body}</p>
            <Link href="#enquire" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-paper px-6 font-semibold text-ink transition-colors hover:bg-ember">
              {dict.common.startProject}
              <ArrowUpRight className="flip-rtl size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="ind-related" className="pt-24">
        <div className="container-x">
          <h2 id="ind-related" className="eyebrow text-mist-2">
            {t.relatedTitle}
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {industriesBySlugs(industry.related).map((r) => (
              <li key={r.slug}>
                <Link href={href(locale, routes.industry(r.slug))} className="group flex items-center gap-4 rounded-2xl border border-line-dark p-3 pe-5 transition-colors duration-500 hover:bg-ink-2">
                  <span className="block size-16 shrink-0 overflow-hidden rounded-xl">
                    <IndustryArt motif={r.motif} hue={r.hue} seed={r.slug} className="size-full" />
                  </span>
                  <span className="font-semibold">{r[locale].name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactBlock locale={locale} dict={dict} page={routes.industry(slug)} />
    </>
  );
}
