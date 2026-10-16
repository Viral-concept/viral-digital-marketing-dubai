import type { Metadata } from "next";
import { site } from "@/config/site";
import { localeMeta, locales, type Locale } from "@/i18n/config";

/** True until a real production domain is configured; keeps preview deployments out of search. */
export const isPreviewDomain = site.url.includes("example.com");

export function absoluteUrl(path: string) {
  return `${site.url}${path}`;
}

export function languageAlternates(path: string) {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[localeMeta[l].hreflang] = absoluteUrl(`/${l}${path}`);
  languages["x-default"] = absoluteUrl(`/en${path}`);
  return languages;
}

type PageMetaInput = {
  locale: Locale;
  /** Path without the locale prefix, e.g. "/services/seo". "" for home. */
  path: string;
  title: string;
  description: string;
  /** Use the title as-is, without the brand template. */
  absoluteTitle?: boolean;
  noindex?: boolean;
};

export function pageMetadata({ locale, path, title, description, absoluteTitle, noindex }: PageMetaInput): Metadata {
  const url = absoluteUrl(`/${locale}${path}`);
  const brand = site.brand.name[locale];
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: "website",
      url,
      title: absoluteTitle ? title : `${title} | ${brand}`,
      description,
      siteName: brand,
      locale: localeMeta[locale].ogLocale,
      alternateLocale: locales.filter((l) => l !== locale).map((l) => localeMeta[l].ogLocale),
    },
    twitter: { card: "summary_large_image", title, description },
    robots: isPreviewDomain ? { index: false, follow: false } : noindex ? { index: false, follow: true } : undefined,
  };
}
