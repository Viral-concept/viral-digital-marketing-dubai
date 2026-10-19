/**
 * Central business configuration.
 *
 * Everything a client must confirm before launch lives here. Values marked
 * PLACEHOLDER are not real and are hidden from the UI until replaced, so the
 * site never presents invented contact details as genuine.
 *
 * Contact, social and analytics values can also be supplied through public
 * environment variables (see .env.example) so they can change per deployment
 * without a code change.
 */

/** Env vars are read with static `process.env.X` access so Next can inline public values at build time. */
const env = (value: string | undefined) => (value && value.trim().length > 0 ? value.trim() : undefined);

export const site = {
  brand: {
    name: { en: "Viral Digital Labs", ar: "فايرال ديجيتال لابز" },
    /** The wordmark sets the first word large and the rest as a descriptor. */
    short: { en: "Viral", ar: "فايرال" },
    descriptor: { en: "Digital Labs", ar: "ديجيتال لابز" },
    isPlaceholder: false,
    /** Path to a logo file in /public. When undefined, the built-in SVG mark and wordmark are used. */
    logo: undefined as string | undefined,
  },

  /** Production origin, used for canonical URLs, hreflang, sitemap and Open Graph. */
  url: (env(process.env.NEXT_PUBLIC_SITE_URL) ?? "https://www.example.com").replace(/\/$/, ""),

  contact: {
    email: env(process.env.NEXT_PUBLIC_CONTACT_EMAIL) ?? "alfaizbadar21@gmail.com",
    /** International format, e.g. +9714XXXXXXX. */
    phone: env(process.env.NEXT_PUBLIC_CONTACT_PHONE) ?? "+971 54 587 2158",
    /** Digits only in international format. Every WhatsApp button opens a chat with this number. */
    whatsapp: env(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER) ?? "971545872158",
    /** Only publish a verified, licensed office address. */
    address: undefined as
      | undefined
      | { street: { en: string; ar: string }; city: { en: string; ar: string }; country: "AE"; mapUrl?: string },
    hours: { en: "Sunday to Friday by appointment", ar: "من الأحد إلى الجمعة بموعد مسبق" },
  },

  /** Leave a network undefined to hide it. */
  social: {
    linkedin: env(process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN),
    instagram: env(process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM),
    x: env(process.env.NEXT_PUBLIC_SOCIAL_X),
    behance: env(process.env.NEXT_PUBLIC_SOCIAL_BEHANCE),
  },

  /** Tracking stays off until a real identifier is configured. */
  analytics: {
    ga4Id: env(process.env.NEXT_PUBLIC_GA4_ID),
    gtmId: env(process.env.NEXT_PUBLIC_GTM_ID),
    metaPixelId: env(process.env.NEXT_PUBLIC_META_PIXEL_ID),
  },
} as const;

export const socialLinks = (Object.entries(site.social) as [keyof typeof site.social, string | undefined][])
  .filter((entry): entry is [keyof typeof site.social, string] => Boolean(entry[1]));

export function whatsappHref(message?: string) {
  if (!site.contact.whatsapp) return undefined;
  const digits = site.contact.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${digits}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
}
