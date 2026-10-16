import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { privacy } from "@/content/legal";
import { LegalPage } from "@/components/legal-page";

export async function generateMetadata({ params }: PageProps<"/[locale]/privacy">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const d = getDictionary(locale);
  // Legal templates stay out of search until completed by a legal adviser.
  return pageMetadata({ locale, path: routes.privacy, title: d.meta.privacyTitle, description: privacy[locale].sections[0].body[0], noindex: true });
}

export default async function PrivacyPage({ params }: PageProps<"/[locale]/privacy">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <LegalPage locale={locale} dict={getDictionary(locale)} doc={privacy[locale]} path={routes.privacy} />;
}
