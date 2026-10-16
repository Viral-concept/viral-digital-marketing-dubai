import type { Dictionary } from "@/i18n/dictionaries/en";
import { SectionIntro } from "../ui";

/**
 * A meaningful diagram instead of a wall of logos: channels → AI layer → systems, with a
 * human review step. Connector lines carry a slow "signal" dash to show direction of flow.
 */
export function TechSection({ dict }: { dict: Dictionary }) {
  const t = dict.tech;
  return (
    <section aria-labelledby="tech-title" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-x">
        <SectionIntro id="tech-title" eyebrow={t.eyebrow} title={t.title} body={t.body} className="text-paper [&_p]:text-mist" />

        <figure className="mt-16" aria-label={t.diagramLabel}>
          <div className="grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1.2fr_auto_1fr]">
            <Column title={t.channels.title} items={t.channels.items} tone="ember" reveal="start" />
            <Connector />
            <div data-reveal="scale" style={{ ["--i" as string]: 2 }} className="relative overflow-hidden rounded-3xl border border-lagoon/40 bg-ink-2 p-7">
              <div aria-hidden="true" className="absolute -end-20 -top-20 size-56 rounded-full bg-lagoon/15 blur-3xl" />
              <p className="eyebrow text-lagoon">{t.agent.title}</p>
              <ul className="mt-5 space-y-3">
                {t.agent.items.map((item, i) => (
                  <li key={item} className="flex items-center gap-3 rounded-2xl border border-line-dark bg-ink px-4 py-3.5">
                    <span className="font-mono text-xs text-lagoon">0{i + 1}</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 flex items-start gap-3 rounded-2xl border border-dashed border-ember/50 px-4 py-3 text-sm text-mist">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-ember" aria-hidden="true" />
                {t.human}
              </p>
            </div>
            <Connector />
            <Column title={t.systems.title} items={t.systems.items} tone="sky" reveal="end" />
          </div>
        </figure>

        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {t.principles.map((p, i) => (
            <div key={p.title} data-reveal="up" style={{ ["--i" as string]: i }} className="border-t border-line-dark pt-6">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-mist">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-line-dark p-6 sm:p-8">
          <h3 className="eyebrow text-mist-2">{t.stackTitle}</h3>
          <dl className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-5">
            {t.stack.map((s) => (
              <div key={s.label}>
                <dt className="font-semibold">{s.label}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-mist">{s.items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Column({ title, items, tone, reveal }: { title: string; items: string[]; tone: "ember" | "sky"; reveal: "start" | "end" }) {
  return (
    <div data-reveal={reveal} className="rounded-3xl border border-line-dark bg-ink-2/50 p-7">
      <p className={`eyebrow ${tone === "ember" ? "text-ember" : "text-sky"}`}>{title}</p>
      <ul className="mt-5 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3 text-mist">
            <span className={`size-1.5 rounded-full ${tone === "ember" ? "bg-ember" : "bg-sky"}`} aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Connector() {
  return (
    <div aria-hidden="true" className="flex items-center justify-center py-1 lg:px-1 lg:py-0">
      <svg viewBox="0 0 60 20" className="h-5 w-14 rotate-90 lg:rotate-0 rtl:lg:-scale-x-100">
        <path d="M0 10 H54" stroke="#5fe0c6" strokeWidth="1.5" strokeDasharray="4 6" className="animate-dash" fill="none" />
        <path d="M50 5 L57 10 L50 15" stroke="#5fe0c6" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  );
}
