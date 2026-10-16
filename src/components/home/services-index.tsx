import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { services } from "@/content/services";
import { families, familyColor } from "@/lib/families";
import { href, routes } from "@/lib/routes";
import { Button, SectionIntro } from "../ui";

/**
 * An editorial index rather than a card grid. Each family is a chapter; rows slide in from
 * alternating sides and a colour wash sweeps in from the reading direction on hover/focus.
 */
export function ServicesIndex({ locale, dict, standalone = false }: { locale: Locale; dict: Dictionary; standalone?: boolean }) {
  return (
    <section aria-labelledby={standalone ? undefined : "services-title"} className="relative py-24 sm:py-32">
      <div className="container-x">
        {!standalone ? (
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionIntro
              id="services-title"
              eyebrow={dict.servicesSection.eyebrow}
              title={dict.servicesSection.title}
              body={dict.servicesSection.body}
              className="text-paper [&_p]:text-mist"
            />
            <Button href={href(locale, routes.services)} variant="ghost" className="shrink-0 text-paper">
              {dict.common.allServices}
            </Button>
          </div>
        ) : null}

        <div className={standalone ? "" : "mt-20"}>
          {families.map((family, fi) => (
            <div key={family} className="grid gap-6 border-t border-line-dark py-10 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-3" data-reveal="up">
                <p className={`eyebrow ${familyColor[family].text}`}>
                  0{fi + 1} · {dict.common.families[family]}
                </p>
                <p className="mt-3 max-w-56 text-mist">{dict.common.familyDescriptions[family]}</p>
              </div>
              <ul className="lg:col-span-9">
                {services
                  .filter((s) => s.family === family)
                  .map((s, i) => (
                    <li key={s.slug} data-reveal={i % 2 === 0 ? "start" : "end"} style={{ ["--i" as string]: i }}>
                      <Link
                        href={href(locale, routes.service(s.slug))}
                        className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-x-5 gap-y-1 overflow-hidden border-b border-line-dark/70 py-6 sm:gap-x-8"
                      >
                        {/* Hover wash */}
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 -z-10 origin-left scale-x-0 transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-x-100 group-focus-visible:scale-x-100 rtl:origin-right"
                          style={{ background: `linear-gradient(90deg, ${familyColor[family].hex}1f, transparent 80%)` }}
                        />
                        <span className="w-8 font-mono text-sm text-mist-2 tabular-nums">{s.index}</span>
                        <span className="min-w-0">
                          <span className="block text-2xl font-semibold tracking-[-0.02em] transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-2 sm:text-3xl lg:text-4xl rtl:group-hover:-translate-x-2">
                            {s[locale].name}
                          </span>
                          <span className="mt-2 block max-w-2xl text-[0.95rem] leading-relaxed text-mist">{s[locale].short}</span>
                        </span>
                        <span
                          className={`relative grid size-12 shrink-0 place-items-center rounded-full border border-line-dark transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:border-transparent group-hover:text-ink ${familyColor[family].text}`}
                        >
                          <span
                            aria-hidden="true"
                            className={`absolute size-12 scale-0 rounded-full transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-100 ${familyColor[family].bg}`}
                          />
                          <ArrowUpRight
                            aria-hidden="true"
                            className="flip-rtl relative size-5 transition-transform duration-500 group-hover:rotate-45"
                          />
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
