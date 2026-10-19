import { site } from "@/config/site";
import type { Locale } from "@/i18n/config";

/** Viral Digital Labs mark: a V sending out a signal, on the violet-to-pink brand gradient. */
export function BrandGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className} fill="none">
      <defs>
        <linearGradient id="vdl-mark" x1="4" y1="44" x2="44" y2="4" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4F2BFF" />
          <stop offset="0.55" stopColor="#B51FE0" />
          <stop offset="1" stopColor="#FF3D7F" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#vdl-mark)" />
      <path d="M10.5 15 19.5 34.5 28.5 15" stroke="#fff" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="34.5" cy="13.5" r="3" fill="#fff" />
      <path className="signal-1" d="M34.5 7.5a6 6 0 0 1 6 6" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" opacity=".85" />
      <path className="signal-2" d="M34.5 3.5a10 10 0 0 1 10 10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" opacity=".5" />
    </svg>
  );
}

export function BrandMark({ locale, className = "" }: { locale: Locale; className?: string }) {
  if (site.brand.logo) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={site.brand.logo} alt={site.brand.name[locale]} className={`h-9 w-auto ${className}`} />;
  }
  return (
    <span className={`group/brand inline-flex items-center gap-2.5 ${className}`}>
      <BrandGlyph className="size-9 shrink-0 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover/brand:-rotate-6 group-hover/brand:scale-105" />
      <span className="flex flex-col leading-none">
        <span className="text-[1.3rem] font-extrabold tracking-[-0.03em]">{site.brand.short[locale]}</span>
        <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-ember">{site.brand.descriptor[locale]}</span>
      </span>
    </span>
  );
}
