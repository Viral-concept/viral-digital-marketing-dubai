import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { pageMetadata } from "@/lib/seo";
import { href, routes } from "@/lib/routes";
import { PageHero } from "@/components/page-hero";
import { ServicesIndex } from "@/components/home/services-index";
import { JourneyDemo } from "@/components/home/journey-demo";
import { SectionIntro } from "@/components/ui";
import { ContactBlock } from "@/components/contact-block";

export async function generateMetadata({ params }: PageProps<"/[locale]/services">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const d = getDictionary(locale);
  return pageMetadata({ locale, path: routes.services, title: d.meta.servicesTitle, description: d.meta.servicesDescription });
}

export default async function ServicesPage({ params }: PageProps<"/[locale]/services">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const p = dict.pages.services;

  return (
    <>
      <PageHero
        eyebrow={p.eyebrow}
        title={p.title}
        body={p.body}
        crumbLabel={dict.common.breadcrumb}
        crumbs={[
          { name: dict.common.home, href: href(locale) },
          { name: dict.nav.services, href: href(locale, routes.services) },
        ]}
      />
      <ServicesIndex locale={locale} dict={dict} standalone />
      <section aria-labelledby="demo-title" className="border-t border-line-dark py-24 sm:py-32">
        <div className="container-x">
          <SectionIntro id="demo-title" eyebrow={dict.demo.eyebrow} title={dict.demo.title} body={dict.demo.body} className="[&_p]:text-mist" />
          <div className="mt-14">
            <JourneyDemo dict={dict} isRtl={locale === "ar"} />
          </div>
        </div>
      </section>
      <ContactBlock locale={locale} dict={dict} page={routes.services} />
    </>
  );
}
