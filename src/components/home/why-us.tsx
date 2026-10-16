import { BadgeCheck, Bot, KeyRound, Languages, Layers, LineChart } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Family } from "@/content/types";
import { familyColor } from "@/lib/families";
import { SectionIntro } from "../ui";

const icons = [Layers, Languages, LineChart, Bot, KeyRound, BadgeCheck];

/** Differentiators, anchored by one sourced research finding instead of invented stats. */
export function WhyUs({ dict }: { dict: Dictionary }) {
  const w = dict.whyUs;
  return (
    <section aria-labelledby="why-title" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -start-48 top-1/3 size-[40rem] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(95,224,198,0.16), rgba(143,178,255,0.06) 55%, transparent 70%)" }}
      />
      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <SectionIntro id="why-title" eyebrow={w.eyebrow} title={w.title} body={w.body} className="lg:col-span-8 [&_p]:text-mist" />
          <figure
            data-reveal="scale"
            className="relative overflow-hidden rounded-[1.75rem] border border-line-dark bg-ink-2 p-8 lg:col-span-4"
          >
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember to-transparent" />
            <p className="serif-accent text-7xl leading-none text-ember sm:text-8xl">{w.stat.value}</p>
            <p className="mt-5 text-lg leading-snug text-paper">{w.stat.label}</p>
            <figcaption className="mt-4 text-sm leading-relaxed text-mist-2">{w.stat.note}</figcaption>
          </figure>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-[1.75rem] border border-line-dark bg-line-dark sm:grid-cols-2 lg:grid-cols-3">
          {w.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const c = familyColor[item.family as Family];
            return (
              <li
                key={item.title}
                data-reveal="up"
                style={{ ["--i" as string]: i % 3, ["--accent" as string]: c.hex }}
                className="group relative bg-ink p-8 transition-colors duration-500 hover:bg-ink-2 sm:p-10"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 origin-[var(--line-origin,left)] scale-x-0 bg-[var(--accent)] transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-x-100 rtl:origin-right"
                />
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-full border border-line-dark" style={{ color: c.hex }}>
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-sm tabular-nums text-mist-2">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-10 text-2xl font-semibold tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-mist">{item.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
