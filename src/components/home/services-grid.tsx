import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { services } from "@/content/services";
import { familyColor } from "@/lib/families";
import { href, routes } from "@/lib/routes";
import { Button, SectionIntro } from "../ui";

/** Numbered service cards. A family-coloured top rule and glow appear on hover or focus. */
export function ServicesGrid({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section aria-labelledby="services-title" className="bg-ink-2 py-24 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionIntro id="services-title" eyebrow={dict.servicesSection.eyebrow} title={dict.servicesSection.title} body={dict.servicesSection.body} className="[&_p]:text-mist" />
          <Button href={href(locale, routes.services)} variant="dark" className="shrink-0">
            {dict.common.allServices}
          </Button>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s, i) => {
            const c = familyColor[s.family];
            return (
              <li key={s.slug} data-reveal="up" style={{ ["--i" as string]: i % 4, ["--accent" as string]: c.hex }} className={i === 0 || i === services.length - 1 ? "xl:col-span-2" : ""}>
                <Link
                  href={href(locale, routes.service(s.slug))}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line-dark bg-ink p-7 transition-[transform,box-shadow,border-color] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_30px_60px_-30px_var(--accent)] focus-visible:-translate-y-1.5"
                >
                  <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-x-100 rtl:origin-right" />
                  <span aria-hidden="true" className="pointer-events-none absolute -end-16 -top-16 size-44 rounded-full opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-25" style={{ background: c.hex }} />
                  <span className="flex items-center justify-between">
                    <span className="font-mono text-sm tabular-nums text-mist-2">{s.index}</span>
                    <span className="rounded-full px-2.5 py-1 text-xs font-semibold" style={{ color: c.hex, background: `${c.hex}14` }}>
                      {dict.common.families[s.family]}
                    </span>
                  </span>
                  <span className="mt-10 block text-2xl font-semibold leading-tight tracking-[-0.02em]">{s[locale].name}</span>
                  <span className="mt-3 block flex-1 text-[0.95rem] leading-relaxed text-mist">{s[locale].short}</span>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: c.hex }}>
                    {dict.common.viewService}
                    <ArrowUpRight aria-hidden="true" className="flip-rtl size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
