import { site } from "@/config/site";
import type { Locale } from "@/i18n/config";

/** Three nested arcs: growth, build and intelligence converging on one point. */
export function BrandGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className} fill="none">
      <path d="M4 26a14 14 0 0 1 24 0" stroke="#ff6a3d" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M8.5 26a9 9 0 0 1 15 0" stroke="#8fb2ff" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M13 26a3.6 3.6 0 0 1 6 0" stroke="#5fe0c6" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function BrandMark({ locale, className = "" }: { locale: Locale; className?: string }) {
  if (site.brand.logo) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={site.brand.logo} alt={site.brand.name[locale]} className={`h-8 w-auto ${className}`} />;
  }
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <BrandGlyph className="size-8 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="text-[1.15rem] font-semibold tracking-[-0.02em]">{site.brand.name[locale]}</span>
        <span className="mt-1 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-mist">
          {site.brand.descriptor[locale]}
        </span>
      </span>
    </span>
  );
}
