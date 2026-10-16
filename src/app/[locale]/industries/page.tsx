import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { pageMetadata } from "@/lib/seo";
import { href, routes } from "@/lib/routes";
import { industries } from "@/content/industries";
import { PageHero } from "@/components/page-hero";
import { IndustryDirectory } from "@/components/industry-directory";
import { ContactBlock } from "@/components/contact-block";

export async function generateMetadata({ params }: PageProps<"/[locale]/industries">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const d = getDictionary(locale);
  return pageMetadata({ locale, path: routes.industries, title: d.meta.industriesTitle, description: d.meta.industriesDescription });
}

export default async function IndustriesPage({ params }: PageProps<"/[locale]/industries">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const p = dict.pages.industries;

  const items = industries.map((i, idx) => ({
    slug: i.slug,
    href: href(locale, routes.industry(i.slug)),
    number: idx + 1,
    name: i[locale].name,
    short: i[locale].short,
    tier: i.tier,
    motif: i.motif,
    hue: i.hue,
    // Search matches either language, so "clinic" finds results on the Arabic page too.
    keywords: [i.en.name, i.en.short, i.ar.name, i.ar.short].join(" ").toLowerCase(),
  }));

  return (
    <>
      <PageHero
        eyebrow={p.eyebrow}
        title={p.title}
        body={p.body}
        crumbLabel={dict.common.breadcrumb}
        crumbs={[
          { name: dict.common.home, href: href(locale) },
          { name: dict.nav.industries, href: href(locale, routes.industries) },
        ]}
      />
      <section className="pb-24 sm:pb-32">
        <div className="container-x">
          <IndustryDirectory
            items={items}
            labels={{
              filterLabel: p.filterLabel,
              filterAll: p.filterAll,
              searchLabel: p.searchLabel,
              searchPlaceholder: p.searchPlaceholder,
              empty: p.empty,
              count: p.count,
              tiers: dict.common.tiers,
            }}
          />
        </div>
      </section>
      <ContactBlock locale={locale} dict={dict} page={routes.industries} />
    </>
  );
}
