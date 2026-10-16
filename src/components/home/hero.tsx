import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { href, routes } from "@/lib/routes";
import { Button, WordReveal } from "../ui";
import { HeroVisual } from "./hero-visual";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const h = dict.hero;
  const leadCount = h.titleLead.split(" ").length;
  const accentCount = h.titleAccent.split(" ").length;

  return (
    <section className="grain relative isolate overflow-hidden pt-[calc(var(--header-h)+2rem)]" aria-labelledby="hero-title">
      {/* Architectural guide lines give the composition structure without decoration. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="container-x grid h-full grid-cols-4 lg:grid-cols-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className={`border-s border-line-dark/40 ${i >= 4 ? "hidden lg:block" : ""}`} />
          ))}
        </div>
      </div>

      <div className="container-x relative grid min-h-[calc(100svh-var(--header-h)-2rem)] items-center gap-10 pb-24 lg:grid-cols-12 lg:gap-6">
        <div className="relative z-10 lg:col-span-7">
          <p className="hero-in eyebrow mb-8 flex items-center gap-3 text-mist">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-[ping_2s_ease-out_3] rounded-full bg-ember opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-ember" />
            </span>
            {h.eyebrow}
          </p>

          <h1 id="hero-title" className="display text-[clamp(2.6rem,6.6vw,6.2rem)] [:lang(ar)_&]:text-[clamp(2.3rem,5vw,4.8rem)]">
            <WordReveal immediate text={h.titleLead} />{" "}
            <WordReveal immediate text={h.titleAccent} startIndex={leadCount} className="serif-accent text-ember" />{" "}
            <WordReveal immediate text={h.titleTail} startIndex={leadCount + accentCount} />
          </h1>

          <p
            style={{ ["--i" as string]: 8 }}
            className="hero-in text-pretty mt-8 max-w-xl text-lg leading-relaxed text-mist sm:text-xl"
          >
            {h.body}
          </p>

          <div style={{ ["--i" as string]: 10 }} className="hero-in mt-10 flex flex-wrap items-center gap-4">
            <Button href={href(locale, routes.contact)}>{h.primaryCta}</Button>
            <Button href={href(locale, routes.services)} variant="ghost" className="text-paper">
              {h.secondaryCta}
            </Button>
          </div>

          <p style={{ ["--i" as string]: 12 }} className="hero-in mt-12 max-w-lg text-sm text-mist-2">
            {h.note}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem] lg:col-span-5 lg:max-w-none">
          <HeroVisual label={h.visualLabel} rings={h.rings} chips={h.chips as [string, string, string]} />
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#connected"
        className="group absolute bottom-6 start-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-xs text-mist-2 transition-colors hover:text-paper rtl:translate-x-1/2 md:flex"
      >
        <span className="eyebrow">{dict.common.scroll}</span>
        <span className="relative h-12 w-px overflow-hidden bg-line-dark">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-[scroll-cue_2.4s_var(--ease-in-out-quart)_4] bg-paper" />
        </span>
      </a>
    </section>
  );
}
