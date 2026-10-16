import type { Locale } from "@/i18n/config";
import type { Industry, Service } from "@/content/types";

export type NavData = {
  services: { slug: string; name: string; short: string; family: Service["family"]; index: string }[];
  industries: { slug: string; name: string; tier: Industry["tier"] }[];
};

/** Slim, serialisable menu data for the client-side header. */
export function navData(locale: Locale, services: Service[], industries: Industry[]): NavData {
  return {
    services: services.map((s) => ({ slug: s.slug, name: s[locale].name, short: s[locale].short, family: s.family, index: s.index })),
    industries: industries.map((i) => ({ slug: i.slug, name: i[locale].name, tier: i.tier })),
  };
}
