"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Eyebrow, WordReveal } from "../ui";

/**
 * The intro stays pinned beside the steps while a progress line fills with scroll.
 * Steps themselves scroll naturally, so the visitor is never held in place.
 */
export function Process({ dict }: { dict: Dictionary }) {
  const p = dict.process;
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section aria-labelledby="process-title" className="surface-paper py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+3rem)]">
            <Eyebrow className="mb-6 text-stone">{p.eyebrow}</Eyebrow>
            <h2 id="process-title">
              <WordReveal text={p.title} className="display text-4xl sm:text-5xl lg:text-6xl" />
            </h2>
            <p data-reveal="up" className="mt-6 max-w-md text-lg leading-relaxed text-stone">
              {p.body}
            </p>
          </div>
        </div>

        <ol ref={ref} className="relative lg:col-span-7">
          <div aria-hidden="true" className="absolute start-[1.2rem] top-2 bottom-2 w-px bg-ink/10" />
          <motion.div
            aria-hidden="true"
            className="absolute start-[1.2rem] top-2 bottom-2 w-px origin-top bg-ember-deep"
            style={{ scaleY: reduce ? 1 : progress }}
          />
          {p.steps.map((step, i) => (
            <li key={step.title} data-reveal="up" className="relative grid grid-cols-[2.4rem_1fr] gap-6 pb-14 last:pb-0">
              <span className="relative z-10 grid size-10 place-items-center rounded-full border border-ink/15 bg-paper font-mono text-sm tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pt-1">
                <h3 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">{step.title}</h3>
                <p className="mt-3 max-w-lg text-lg leading-relaxed text-stone">{step.body}</p>
                <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-paper-2 px-3.5 py-1.5 text-sm font-medium">
                  <span className="size-1.5 rounded-full bg-ember-deep" aria-hidden="true" />
                  {step.output}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
