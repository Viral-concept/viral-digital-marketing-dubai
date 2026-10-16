import { Check, Minus } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { SectionIntro } from "../ui";

/** "The usual setup" versus the connected model. A real table on desktop, stacked cards on mobile. */
export function Comparison({ dict, tone = "paper" }: { dict: Dictionary; tone?: "paper" | "ink" }) {
  const c = dict.compare;
  const paper = tone === "paper";
  const muted = paper ? "text-stone" : "text-mist";
  const line = paper ? "border-ink/10" : "border-line-dark";

  return (
    <section aria-labelledby="compare-title" className={`${paper ? "surface-paper" : "border-t border-line-dark"} py-24 sm:py-32`}>
      <div className="container-x">
        <SectionIntro id="compare-title" eyebrow={c.eyebrow} title={c.title} body={c.body} className={paper ? "[&_p]:text-stone" : "[&_p]:text-mist"} />

        {/* Desktop table: the "with us" column is a raised ink panel. */}
        <table data-reveal="up" className="mt-16 hidden w-full border-separate border-spacing-0 text-start md:table">
          <caption className="sr-only">{c.title}</caption>
          <thead>
            <tr>
              <th scope="col" className={`w-[22%] pb-6 text-start align-bottom eyebrow ${muted}`}>{c.topicLabel}</th>
              <th scope="col" className={`w-[36%] pb-6 pe-8 text-start align-bottom eyebrow ${muted}`}>{c.usualLabel}</th>
              <th scope="col" className="w-[42%] rounded-t-[1.75rem] bg-ink px-10 pt-8 pb-6 text-start align-bottom text-paper">
                <span className="eyebrow text-ember">{c.usLabel}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {c.rows.map((r, i) => {
              const last = i === c.rows.length - 1;
              return (
                <tr key={r.topic} className="group">
                  <th scope="row" className={`border-t ${line} py-7 pe-6 text-start align-top text-lg font-semibold`}>
                    {r.topic}
                  </th>
                  <td className={`border-t ${line} py-7 pe-8 align-top ${muted}`}>
                    <span className="flex items-start gap-3">
                      <Minus className="mt-1 size-4 shrink-0 opacity-60" aria-hidden="true" />
                      {r.usual}
                    </span>
                  </td>
                  <td className={`border-t border-line-dark bg-ink px-10 py-7 align-top text-paper ${last ? "rounded-b-[1.75rem] pb-10" : ""}`}>
                    <span className="flex items-start gap-3 text-lg leading-snug">
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-ember text-ink">
                        <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                      </span>
                      {r.us}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Mobile: one card per topic. */}
        <ul className="mt-12 space-y-4 md:hidden">
          {c.rows.map((r, i) => (
            <li key={r.topic} data-reveal="up" style={{ ["--i" as string]: i % 2 }} className={`overflow-hidden rounded-3xl border ${line}`}>
              <p className="px-6 pt-6 text-lg font-semibold">{r.topic}</p>
              <p className={`flex items-start gap-3 px-6 pt-3 pb-5 text-[0.95rem] ${muted}`}>
                <Minus className="mt-1 size-4 shrink-0 opacity-60" aria-hidden="true" />
                <span>
                  <span className="sr-only">{c.usualLabel}: </span>
                  {r.usual}
                </span>
              </p>
              <p className="flex items-start gap-3 bg-ink px-6 py-5 text-paper">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-ember text-ink">
                  <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                <span>
                  <span className="sr-only">{c.usLabel}: </span>
                  {r.us}
                </span>
              </p>
            </li>
          ))}
        </ul>

        <p className={`mt-8 text-sm ${muted}`}>{c.footnote}</p>
      </div>
    </section>
  );
}
