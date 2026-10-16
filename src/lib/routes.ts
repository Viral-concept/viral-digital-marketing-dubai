import type { Locale } from "@/i18n/config";

export const routes = {
  home: "",
  services: "/services",
  service: (slug: string) => `/services/${slug}`,
  industries: "/industries",
  industry: (slug: string) => `/industries/${slug}`,
  work: "/work",
  approach: "/approach",
  about: "/about",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
} as const;

export function href(locale: Locale, path: string = "") {
  return `/${locale}${path}`;
}
