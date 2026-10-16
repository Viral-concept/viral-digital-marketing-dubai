"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, Bot, CalendarCheck, CheckCircle2, Search, User } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Family } from "@/content/types";
import { familyColor } from "@/lib/families";

type Stage = Dictionary["demo"]["stages"][number];

/**
 * Interactive, clearly-labelled illustrative scenario. Visitors step through six stages; each
 * stage shows a small product mock so the abstract "system" becomes concrete. No autoplay.
 */
export function JourneyDemo({ dict, isRtl }: { dict: Dictionary; isRtl: boolean }) {
  const d = dict.demo;
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const id = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const stage = d.stages[index];
  const family = stage.family as Family;

  const go = (next: number) => setIndex(Math.max(0, Math.min(d.stages.length - 1, next)));

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const forward = isRtl ? "ArrowLeft" : "ArrowRight";
    const back = isRtl ? "ArrowRight" : "ArrowLeft";
    let next = index;
    if (e.key === forward) next = Math.min(d.stages.length - 1, index + 1);
    else if (e.key === back) next = Math.max(0, index - 1);
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = d.stages.length - 1;
    else return;
    e.preventDefault();
    go(next);
    tabs.current[next]?.focus();
  };

  const Prev = isRtl ? ArrowRight : ArrowLeft;
  const Next = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="rounded-[2rem] border border-line-dark bg-ink-2/60 p-4 sm:p-6 lg:p-8">
      {/* Stage rail */}
      <div role="tablist" aria-label={d.eyebrow} className="relative grid grid-cols-6 gap-1 sm:gap-2">
        <div aria-hidden="true" className="absolute inset-x-[8%] top-5 h-px bg-line-dark" />
        <div
          aria-hidden="true"
          className="absolute start-[8%] top-5 h-px bg-paper transition-[width] duration-700 ease-[var(--ease-out-expo)]"
          style={{ width: `${(index / (d.stages.length - 1)) * 84}%` }}
        />
        {d.stages.map((s, i) => {
          const fam = s.family as Family;
          const selected = i === index;
          return (
            <button
              key={s.key}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              role="tab"
              id={`${id}-tab-${i}`}
              aria-selected={selected}
              aria-controls={`${id}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => go(i)}
              onKeyDown={onKeyDown}
              className="group relative z-10 flex flex-col items-center gap-3 rounded-xl py-1 text-center"
            >
              <span
                className={`grid size-10 place-items-center rounded-full border text-sm font-semibold tabular-nums transition-all duration-500 ${
                  i <= index ? "border-transparent text-ink" : "border-line-dark bg-ink text-mist group-hover:border-mist"
                }`}
                style={i <= index ? { background: familyColor[fam].hex } : undefined}
              >
                {i + 1}
              </span>
              <span className={`hidden text-xs font-medium sm:block ${selected ? "text-paper" : "text-mist-2"}`}>{s.label}</span>
            </button>
          );
        })}
      </div>

      <div
        id={`${id}-panel`}
        role="tabpanel"
        aria-labelledby={`${id}-tab-${index}`}
        aria-live="polite"
        className="mt-8 grid min-h-[26rem] gap-8 overflow-hidden lg:grid-cols-2 lg:gap-12"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={stage.key}
            initial={{ opacity: 0, y: reduce ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : -12 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <p className="eyebrow" style={{ color: familyColor[family].hex }}>
              {d.stageLabel} {index + 1} {d.of} {d.stages.length} · {dict.common.families[family]}
            </p>
            <h3 className="display mt-4 text-3xl sm:text-4xl">{stage.title}</h3>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-mist">{stage.body}</p>
            <div className="mt-auto flex items-center gap-3 pt-8">
              <button
                type="button"
                onClick={() => go(index - 1)}
                disabled={index === 0}
                aria-label={dict.common.previous}
                className="grid size-12 place-items-center rounded-full border border-line-dark transition-colors hover:border-paper disabled:opacity-30"
              >
                <Prev className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                disabled={index === d.stages.length - 1}
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-paper px-5 font-semibold text-ink transition-colors hover:bg-ember disabled:opacity-30"
              >
                {dict.common.next}
                <Next className="size-4" aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${stage.key}-ui`}
            initial={{ opacity: 0, scale: reduce ? 1 : 0.97, x: reduce ? 0 : 24 * (isRtl ? -1 : 1) }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: reduce ? 1 : 0.98 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="relative grid place-items-center rounded-3xl bg-ink p-6 sm:p-10"
            aria-hidden="true"
          >
            <div
              className="absolute inset-0 rounded-3xl opacity-60"
              style={{ background: `radial-gradient(circle at 70% 20%, ${familyColor[family].hex}2e, transparent 60%)` }}
            />
            <div className="relative w-full max-w-sm">
              <StageMock stage={stage} accent={familyColor[family].hex} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="mt-6 border-t border-line-dark pt-5 text-sm text-mist-2">{d.disclaimer}</p>
    </div>
  );
}

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-line-dark bg-ink-2 p-5 shadow-2xl ${className}`}>{children}</div>;
}

function StageMock({ stage, accent }: { stage: Stage; accent: string }) {
  const ui = stage.ui as Record<string, unknown>;
  switch (stage.key) {
    case "discovery":
      return (
        <div className="space-y-3">
          <Card className="flex items-center gap-3 py-3.5">
            <Search className="size-4 text-mist" />
            <span dir="rtl" className="text-paper">{ui.query as string}</span>
          </Card>
          <Card>
            <p className="font-semibold text-paper">{ui.result as string}</p>
            <p className="mt-1 text-sm text-mist">{ui.meta as string}</p>
            <div className="mt-3 flex gap-1" style={{ color: accent }}>
              {"★★★★★".split("").map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
          </Card>
        </div>
      );
    case "marketing":
      return (
        <Card className="overflow-hidden p-0">
          <div className="h-28" style={{ background: `linear-gradient(135deg, ${accent}55, transparent)` }} />
          <div className="p-5">
            <p className="text-xl font-semibold text-paper">{ui.headline as string}</p>
            <div className="mt-3 space-y-2">
              <div className="h-2 w-full rounded bg-line-dark" />
              <div className="h-2 w-4/5 rounded bg-line-dark" />
            </div>
            <span className="mt-5 inline-block rounded-full px-4 py-2 text-sm font-semibold text-ink" style={{ background: accent }}>
              {ui.cta as string}
            </span>
          </div>
        </Card>
      );
    case "capture":
      return (
        <Card>
          {(ui.fields as string[]).map((f) => (
            <div key={f} className="mb-3">
              <p className="mb-1 text-xs text-mist">{f}</p>
              <div className="h-10 rounded-lg border border-line-dark bg-ink" />
            </div>
          ))}
          <div className="mt-4 flex items-center gap-2 rounded-lg p-3 text-sm font-medium text-ink" style={{ background: accent }}>
            <CalendarCheck className="size-4" /> {ui.slot as string}
          </div>
        </Card>
      );
    case "qualification":
      return (
        <div className="space-y-3">
          <div className="flex justify-end">
            <p dir="rtl" className="max-w-[80%] rounded-2xl rounded-se-sm bg-ink-3 px-4 py-2.5 text-paper">
              {ui.incoming as string}
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="grid size-8 shrink-0 place-items-center rounded-full text-ink" style={{ background: accent }}>
              <Bot className="size-4" />
            </span>
            <p className="max-w-[85%] rounded-2xl rounded-ss-sm border border-line-dark bg-ink-2 px-4 py-2.5 text-sm leading-relaxed text-paper">
              {ui.reply as string}
            </p>
          </div>
          <p className="flex items-center gap-2 rounded-full border border-dashed border-line-dark px-4 py-2 text-xs text-mist">
            <User className="size-3.5" /> {ui.handover as string}
          </p>
        </div>
      );
    case "followup":
      return (
        <Card>
          <div className="flex items-center justify-between">
            <p className="font-semibold text-paper">{ui.task as string}</p>
            <span className="size-2.5 rounded-full" style={{ background: accent }} />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {(ui.tags as string[]).map((t) => (
              <span key={t} className="rounded-full border border-line-dark px-3 py-1 text-xs text-mist">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-5 space-y-2">
            <div className="h-2 w-full rounded bg-line-dark" />
            <div className="h-2 w-2/3 rounded bg-line-dark" />
          </div>
        </Card>
      );
    default:
      return (
        <Card className="text-center">
          <CheckCircle2 className="mx-auto size-10" style={{ color: accent }} />
          <p className="mt-3 text-xl font-semibold text-paper">{ui.label as string}</p>
          <p className="mt-3 text-sm text-mist">{ui.attribution as string}</p>
        </Card>
      );
  }
}
