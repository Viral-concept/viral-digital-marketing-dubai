import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { routes } from "@/lib/routes";
import { absoluteUrl, languageAlternates } from "@/lib/seo";
import { services } from "@/content/services";
import { industries } from "@/content/industries";

/** One entry per language per page, each listing its hreflang alternates. Legal templates are excluded until finalised. */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
    { path: routes.home, priority: 1, changeFrequency: "weekly" },
    { path: routes.services, priority: 0.9, changeFrequency: "monthly" },
    { path: routes.industries, priority: 0.9, changeFrequency: "monthly" },
    { path: routes.work, priority: 0.6, changeFrequency: "monthly" },
    { path: routes.about, priority: 0.7, changeFrequency: "monthly" },
    { path: routes.approach, priority: 0.6, changeFrequency: "monthly" },
    { path: routes.contact, priority: 0.8, changeFrequency: "monthly" },
    ...services.map((s) => ({ path: routes.service(s.slug), priority: 0.8, changeFrequency: "monthly" as const })),
    ...industries.map((i) => ({ path: routes.industry(i.slug), priority: i.tier === 1 ? 0.8 : 0.7, changeFrequency: "monthly" as const })),
  ];
  const lastModified = new Date();

  return paths.flatMap(({ path, priority, changeFrequency }) =>
    locales.map((locale) => ({
      url: absoluteUrl(`/${locale}${path}`),
      lastModified,
      changeFrequency,
      priority,
      alternates: { languages: languageAlternates(path) },
    })),
  );
}
