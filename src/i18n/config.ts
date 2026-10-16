export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeMeta: Record<Locale, { dir: "ltr" | "rtl"; label: string; hreflang: string; ogLocale: string }> = {
  en: { dir: "ltr", label: "English", hreflang: "en-AE", ogLocale: "en_AE" },
  ar: { dir: "rtl", label: "العربية", hreflang: "ar-AE", ogLocale: "ar_AE" },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
