"use client";

import Link from "next/link";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Motif } from "@/content/types";
import { IndustryArt } from "../industry-art";

export type ExplorerItem = {
  slug: string;
  href: string;
  name: string;
  headline: string;
  intro: string;
  challenges: string[];
  services: string[];
  motif: Motif;
  hue: number;
};

type Labels = { challengesLabel: string; servicesLabel: string; explore: string; tablist: string };

/** Accessible tabs: arrow keys move between industries, panel content transitions directionally. */
export function IndustryExplorer({ items, labels, isRtl }: { items: ExplorerItem[]; labels: Labels; isRtl: boolean }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduce = useReducedMotion();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();
  const item = items[index];

  const select = (next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const forward = isRtl ? "ArrowLeft" : "ArrowRight";
    const back = isRtl ? "ArrowRight" : "ArrowLeft";
    let next = index;
    if (e.key === forward || e.key === "ArrowDown") next = (index + 1) % items.length;
    else if (e.key === back || e.key === "ArrowUp") next = (index - 1 + items.length) % items.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = items.length - 1;
    else return;
    e.preventDefault();
    select(next);
    tabs.current[next]?.focus();
  };

  const travel = reduce ? 0 : 48 * direction * (isRtl ? -1 : 1);

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
      <div role="tablist" aria-label={labels.tablist} aria-orientation="vertical" className="flex gap-2 overflow-x-auto pb-2 no-scrollbar lg:col-span-4 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0">
        {items.map((it, i) => {
          const selected = i === index;
          return (
            <button
              key={it.slug}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              role="tab"
              id={`${id}-tab-${i}`}
              aria-selected={selected}
              aria-controls={`${id}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(i)}
              onKeyDown={onKeyDown}
              className={`group relative flex shrink-0 items-center gap-4 rounded-full border px-5 py-3 text-start transition-colors duration-500 lg:rounded-none lg:border-0 lg:border-b lg:border-ink/10 lg:px-0 lg:py-5 ${
                selected ? "border-ink bg-ink text-paper lg:bg-transparent lg:text-ink" : "border-ink/15 text-stone hover:text-ink"
              }`}
            >
              <span className="hidden font-mono text-xs tabular-nums text-stone lg:inline">0{i + 1}</span>
              <span className="whitespace-nowrap text-[0.95rem] font-medium lg:whitespace-normal lg:text-2xl lg:font-semibold lg:tracking-[-0.02em]">
                {it.name}
              </span>
              <span
                aria-hidden="true"
                className={`absolute bottom-[-1px] start-0 hidden h-0.5 bg-ember transition-all duration-700 ease-[var(--ease-out-expo)] lg:block ${
                  selected ? "w-full" : "w-0 group-hover:w-8"
                }`}
              />
            </button>
          );
        })}
      </div>

      <div
        id={`${id}-panel`}
        role="tabpanel"
        aria-labelledby={`${id}-tab-${index}`}
        className="relative min-h-[34rem] overflow-hidden rounded-[2rem] bg-ink text-paper lg:col-span-8"
      >
        <AnimatePresence mode="popLayout" initial={false} custom={travel}>
          <motion.div
            key={item.slug}
            custom={travel}
            initial={{ opacity: 0, x: travel }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -travel }}
            transition={{ duration: reduce ? 0.2 : 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="grid h-full md:grid-cols-2"
          >
            <div className="relative min-h-56 overflow-hidden md:min-h-full">
              <motion.div
                initial={{ scale: reduce ? 1 : 1.12 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <IndustryArt motif={item.motif} hue={item.hue} seed={item.slug} className="size-full" animated />
              </motion.div>
            </div>
            <div className="flex flex-col p-8 sm:p-10">
              <h3 className="display text-3xl sm:text-4xl">{item.headline}</h3>
              <p className="mt-4 leading-relaxed text-mist">{item.intro}</p>
              <p className="eyebrow mt-8 text-mist-2">{labels.challengesLabel}</p>
              <ul className="mt-3 space-y-2">
                {item.challenges.map((c) => (
                  <li key={c} className="flex gap-3 text-[0.95rem]">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ember" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
              <p className="eyebrow mt-8 text-mist-2">{labels.servicesLabel}</p>
              <p className="mt-2 text-[0.95rem] text-mist">{item.services.join(" · ")}</p>
              <Link
                href={item.href}
                className="group mt-auto inline-flex items-center gap-2 pt-8 font-semibold text-paper"
              >
                <span className="link-underline">{labels.explore}</span>
                <ArrowUpRight aria-hidden="true" className="flip-rtl size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
