import type { Locale } from "@/i18n/config";

export type ServiceSlug =
  | "digital-marketing"
  | "seo"
  | "social-media"
  | "web-design-development"
  | "web-applications"
  | "mobile-apps"
  | "ai-automation"
  | "ai-chatbots"
  | "ecommerce"
  | "branding";

export type IndustrySlug =
  | "real-estate"
  | "construction"
  | "hvac-mep"
  | "interior-design-fit-out"
  | "automotive"
  | "healthcare"
  | "dental-aesthetic"
  | "hospitality"
  | "restaurants-cafes"
  | "logistics"
  | "ecommerce-retail"
  | "luxury-fashion-jewellery"
  | "education"
  | "finance-fintech-insurance"
  | "technology-saas"
  | "facilities-management"
  | "tourism-travel"
  | "professional-legal"
  | "manufacturing-industrial"
  | "events-exhibitions";

export type Titled = { title: string; body: string };
export type Faq = { q: string; a: string };

/** The three capability families the whole site is organised around. */
export type Family = "growth" | "build" | "intelligence";

export type ServiceCopy = {
  name: string;
  /** One sentence used on cards and menus. */
  short: string;
  headline: string;
  intro: string;
  /** Business goals the service is designed to support (never claimed results). */
  outcomes: string[];
  deliverables: Titled[];
  process: Titled[];
  /** Who the service is a good fit for. */
  fit: string[];
  faqs: Faq[];
  metaTitle: string;
  metaDescription: string;
};

export type Service = {
  slug: ServiceSlug;
  family: Family;
  /** Two-digit index shown in editorial layouts. */
  index: string;
  industries: IndustrySlug[];
  related: ServiceSlug[];
} & Record<Locale, ServiceCopy>;

/** Abstract SVG motif used as the industry's visual direction. */
export type Motif = "grid" | "arc" | "wave" | "stack" | "orbit" | "route";

export type IndustryCopy = {
  name: string;
  short: string;
  headline: string;
  intro: string;
  challenges: Titled[];
  /** How growth/marketing services apply to this industry. */
  marketing: Titled[];
  /** Development, product and automation solutions for this industry. */
  solutions: Titled[];
  /** The industry-specific enquiry / acquisition journey, in order. */
  journey: Titled[];
  faqs: Faq[];
  /** Optional regulatory or compliance note, phrased carefully. */
  compliance?: string;
  /** One line describing the art direction for this industry. */
  visualDirection: string;
  cta: Titled;
  metaTitle: string;
  metaDescription: string;
};

export type Industry = {
  slug: IndustrySlug;
  /** 1 = featured on the homepage, 2 = strong fit, 3 = selective fit. */
  tier: 1 | 2 | 3;
  motif: Motif;
  /** Hue (0-360) used to tint this industry's artwork. */
  hue: number;
  services: ServiceSlug[];
  related: IndustrySlug[];
} & Record<Locale, IndustryCopy>;
