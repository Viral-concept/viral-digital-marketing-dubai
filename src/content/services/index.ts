import type { Service, ServiceSlug } from "../types";
import digitalMarketing from "./digital-marketing";
import seo from "./seo";
import socialMedia from "./social-media";
import branding from "./branding";
import webDesign from "./web-design-development";
import webApps from "./web-applications";
import mobileApps from "./mobile-apps";
import ecommerce from "./ecommerce";
import aiAutomation from "./ai-automation";
import aiChatbots from "./ai-chatbots";

export const services: Service[] = [
  digitalMarketing,
  seo,
  socialMedia,
  branding,
  webDesign,
  webApps,
  mobileApps,
  ecommerce,
  aiAutomation,
  aiChatbots,
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function servicesBySlugs(slugs: ServiceSlug[]): Service[] {
  return slugs.map((slug) => services.find((s) => s.slug === slug)).filter((s): s is Service => Boolean(s));
}
