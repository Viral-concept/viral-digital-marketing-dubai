import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { pageMetadata } from "@/lib/seo";
import { href, routes } from "@/lib/routes";
import { Breadcrumbs } from "@/components/page-hero";
import { ContactBlock } from "@/components/contact-block";
import { FaqList } from "@/components/faq-list";

export async function generateMetadata({ params }: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const d = getDictionary(locale);
  return pageMetadata({ locale, path: routes.contact, title: d.meta.contactTitle, description: d.meta.contactDescription });
}

export default async function ContactPage({ params }: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <div className="container-x pt-[calc(var(--header-h)+2.5rem)]">
        <Breadcrumbs
          label={dict.common.breadcrumb}
          items={[
            { name: dict.common.home, href: href(locale) },
            { name: dict.nav.contact, href: href(locale, routes.contact) },
          ]}
        />
      </div>
      <div className="-mt-10">
        <ContactBlock locale={locale} dict={dict} page={routes.contact} headingLevel="h1" />
      </div>
      <section aria-labelledby="contact-faq" className="surface-paper py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <h2 id="contact-faq" className="display text-4xl lg:col-span-4">
            {dict.faq.title}
          </h2>
          <div className="lg:col-span-8">
            <FaqList items={dict.faq.items.slice(2, 5)} tone="light" schema={false} />
          </div>
        </div>
      </section>
    </>
  );
}
