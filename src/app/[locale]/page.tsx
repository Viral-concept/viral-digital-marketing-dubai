import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { pageMetadata } from "@/lib/seo";
import { href, routes } from "@/lib/routes";
import { organizationLd } from "@/lib/structured-data";
import { featuredIndustries, getIndustry } from "@/content/industries";
import { servicesBySlugs } from "@/content/services";
import type { Family, IndustrySlug } from "@/content/types";
import { Hero } from "@/components/home/hero";
import { Positioning } from "@/components/home/positioning";
import { ServicesGrid } from "@/components/home/services-grid";
import { IndustryExplorer } from "@/components/home/industry-explorer";
import { JourneyDemo } from "@/components/home/journey-demo";
import { WorkGallery } from "@/components/home/work-gallery";
import { HowItWorks } from "@/components/home/how-it-works";
import { WhyUs } from "@/components/home/why-us";
import { Comparison } from "@/components/home/comparison";
import { TechSection } from "@/components/home/tech-section";
import { FaqList } from "@/components/faq-list";
import { ContactBlock } from "@/components/contact-block";
import { JsonLd } from "@/components/json-ld";
import { Button, Eyebrow, SectionIntro, WordReveal } from "@/components/ui";

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const d = getDictionary(locale);
  return pageMetadata({ locale, path: "", title: d.meta.homeTitle, description: d.meta.homeDescription });
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const isRtl = locale === "ar";

  const explorerItems = featuredIndustries.map((i) => ({
    slug: i.slug,
    href: href(locale, routes.industry(i.slug)),
    name: i[locale].name,
    headline: i[locale].headline,
    intro: i[locale].intro,
    challenges: i[locale].challenges.slice(0, 3).map((c) => c.title),
    services: servicesBySlugs(i.services.slice(0, 4)).map((s) => s[locale].name),
    motif: i.motif,
    hue: i.hue,
  }));

  const projects = dict.work.projects.map((p) => ({
    slug: p.slug,
    title: p.title,
    summary: p.summary,
    focus: p.focus,
    family: p.family as Family,
    industryName: getIndustry(p.industry as IndustrySlug)?.[locale].name ?? "",
  }));

  return (
    <>
      <JsonLd data={organizationLd(locale)} />
      <Hero locale={locale} dict={dict} />
      <Positioning dict={dict} isRtl={isRtl} />
      <ServicesGrid locale={locale} dict={dict} />

      <section aria-labelledby="industries-title" className="surface-paper py-24 sm:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionIntro
              id="industries-title"
              eyebrow={dict.industriesSection.eyebrow}
              title={dict.industriesSection.title}
              body={dict.industriesSection.body}
              className="[&_p]:text-stone"
            />
            <Button href={href(locale, routes.industries)} variant="dark" className="shrink-0">
              {dict.common.allIndustries}
            </Button>
          </div>
          <div className="mt-16">
            <IndustryExplorer
              items={explorerItems}
              isRtl={isRtl}
              labels={{
                challengesLabel: dict.industriesSection.challengesLabel,
                servicesLabel: dict.industriesSection.servicesLabel,
                explore: dict.industriesSection.explore,
                tablist: dict.industriesSection.eyebrow,
              }}
            />
          </div>
        </div>
      </section>

      <WhyUs dict={dict} />
      <Comparison dict={dict} />

      <section aria-labelledby="demo-title" className="py-24 sm:py-32">
        <div className="container-x">
          <SectionIntro id="demo-title" eyebrow={dict.demo.eyebrow} title={dict.demo.title} body={dict.demo.body} className="[&_p]:text-mist" />
          <div className="mt-14">
            <JourneyDemo dict={dict} isRtl={isRtl} />
          </div>
        </div>
      </section>

      <section aria-labelledby="work-title" className="border-t border-line-dark pt-24 pb-24 sm:pt-32">
        <div className="container-x">
          <SectionIntro id="work-title" eyebrow={dict.work.eyebrow} title={dict.work.title} body={dict.work.body} className="[&_p]:text-mist" />
        </div>
        <div className="mt-10">
          <WorkGallery
            projects={projects}
            isRtl={isRtl}
            labels={{ concept: dict.common.concept, previous: dict.common.previous, next: dict.common.next, gallery: dict.work.galleryLabel }}
          />
        </div>
        <p className="container-x mt-6 text-sm text-mist-2">{dict.work.conceptNote}</p>
      </section>

      <HowItWorks locale={locale} dict={dict} />
      <TechSection dict={dict} />

      <section aria-labelledby="faq-title" className="bg-ink-2 py-24 sm:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow className="mb-6 text-mist">{dict.faq.eyebrow}</Eyebrow>
            <WordReveal as="h2" id="faq-title" text={dict.faq.title} className="display text-4xl sm:text-5xl" />
          </div>
          <div className="lg:col-span-8">
            <FaqList items={dict.faq.items} />
          </div>
        </div>
      </section>

      <ContactBlock locale={locale} dict={dict} page="/" />
    </>
  );
}
