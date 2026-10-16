import { site, socialLinks } from "@/config/site";
import type { Locale } from "@/i18n/config";
import { absoluteUrl } from "./seo";

/** Organisation data built only from configured, verified details. */
export function organizationLd(locale: Locale) {
  const a = site.contact.address;
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#organization`,
    name: site.brand.name[locale],
    url: absoluteUrl(`/${locale}`),
    description: site.brand.descriptor[locale],
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    availableLanguage: ["en", "ar"],
    ...(site.contact.email ? { email: site.contact.email } : {}),
    ...(site.contact.phone ? { telephone: site.contact.phone } : {}),
    ...(a
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: a.street[locale],
            addressLocality: a.city[locale],
            addressCountry: a.country,
          },
        }
      : {}),
    ...(socialLinks.length ? { sameAs: socialLinks.map(([, url]) => url) } : {}),
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
