import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { href, routes } from "@/lib/routes";
import { Button, SectionIntro } from "../ui";

const accents = ["#a3361a", "#3457b8", "#0f6b5c", "#0c111c"];

/** Client-facing engagement in four stages. A rule draws across the steps in reading order. */
export function HowItWorks({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const h = dict.howItWorks;
  return (
    <section aria-labelledby="how-title" className="surface-paper relative py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionIntro id="how-title" eyebrow={h.eyebrow} title={h.title} body={h.body} className="[&_p]:text-stone" />
          <Button href={href(locale, routes.contact)} variant="dark" className="shrink-0">
            {h.cta}
          </Button>
        </div>

        <div className="relative mt-20">
          <div aria-hidden="true" className="absolute start-0 end-[calc(25%-3.375rem)] top-6 hidden h-px bg-ink/10 lg:block" />
          <div
            aria-hidden="true"
            data-reveal="line"
            className="absolute start-0 end-[calc(25%-3.375rem)] top-6 hidden h-px bg-gradient-to-r from-ember-deep via-sky-deep to-lagoon-deep lg:block rtl:bg-gradient-to-l"
          />
          <ol className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {h.steps.map((s, i) => (
              <li key={s.title} data-reveal="up" style={{ ["--i" as string]: i + 2 }} className="relative">
                <span
                  className="relative z-10 grid size-12 place-items-center rounded-full border bg-paper font-mono text-sm tabular-nums"
                  style={{ borderColor: accents[i], color: accents[i] }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.02em] sm:text-[1.7rem]">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-stone">{s.body}</p>
                <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-paper-2 px-3.5 py-1.5 text-sm font-medium">
                  <span className="size-1.5 rounded-full" style={{ background: accents[i] }} aria-hidden="true" />
                  {s.output}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
