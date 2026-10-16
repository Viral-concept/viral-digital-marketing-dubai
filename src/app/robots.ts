import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { isPreviewDomain } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  // Until a real domain is configured, ask crawlers not to index preview deployments.
  if (isPreviewDomain) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
