"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "motion/react";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { familyColor } from "@/lib/families";
import type { Family } from "@/content/types";
import { Eyebrow, WordReveal } from "../ui";

/**
 * Scroll-driven story (desktop): three separate rings, one per supplier, drift together into a
 * single concentric system while the three steps are read in order. The section is only ~2.4
 * viewports tall and content stays in normal flow, so nothing is hijacked. On mobile and with
 * reduced motion it becomes a simple static sequence.
 */
export function Positioning({ dict, isRtl }: { dict: Dictionary; isRtl: boolean }) {
  const p = dict.positioning;
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(2, Math.floor(v * 3.2)));
  });

  const dir = isRtl ? -1 : 1;
  const spread = useTransform(scrollYProgress, [0.05, 0.75], [1, 0]);
  const xOuter = useTransform(spread, (s) => -170 * s * dir);
  const xInner = useTransform(spread, (s) => 170 * s * dir);
  const scaleOuter = useTransform(spread, [1, 0], [0.55, 1]);
  const scaleMid = useTransform(spread, [1, 0], [0.55, 0.68]);
  const scaleInner = useTransform(spread, [1, 0], [0.55, 0.36]);
  const gapOpacity = useTransform(spread, [1, 0.3], [1, 0]);
  const coreOpacity = useTransform(scrollYProgress, [0.6, 0.85], [0, 1]);

  const ringKeys: Family[] = ["growth", "build", "intelligence"];

  return (
    <section id="connected" aria-labelledby="connected-title" className="surface-paper relative">
      <div ref={ref} className="relative lg:h-[240vh]">
        <div className="container-x grid gap-14 py-24 sm:py-32 lg:sticky lg:top-0 lg:min-h-svh lg:grid-cols-12 lg:items-center lg:gap-8 lg:pt-[calc(var(--header-h)+1rem)] lg:pb-8">
          <div className="lg:col-span-6">
            <Eyebrow className="mb-6 text-stone">{p.eyebrow}</Eyebrow>
            <WordReveal as="h2" text={p.title} className="display text-4xl sm:text-5xl lg:text-[clamp(2.4rem,3.6vw,3.2rem)]" />
            <p data-reveal="up" className="text-pretty mt-5 max-w-xl text-lg leading-relaxed text-stone lg:text-base">
              {p.body}
            </p>

            <ol className="mt-8 space-y-1">
              {p.steps.map((step, i) => {
                const fam = step.key as Family;
                const on = reduce || active >= i;
                return (
                  <li
                    key={step.key}
                    className={`grid grid-cols-[auto_1fr] gap-x-5 rounded-2xl border p-5 transition-all lg:p-4 duration-700 ease-[var(--ease-out-expo)] ${
                      active === i && !reduce
                        ? "border-ink/15 bg-paper-2"
                        : "border-transparent"
                    }`}
                  >
                    <span
                      className="mt-1 grid size-9 place-items-center rounded-full border-2 text-sm font-semibold text-ink transition-colors duration-700"
                      style={{ borderColor: familyColor[fam].hex, background: on ? familyColor[fam].hex : "transparent" }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className="eyebrow" style={{ color: familyColor[fam].deep }}>
                        {step.label}
                      </p>
                      <h3 className="mt-1.5 text-xl font-semibold">{step.title}</h3>
                      <p className="mt-1 leading-relaxed text-stone lg:text-[0.95rem]">{step.body}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="relative hidden lg:col-span-6 lg:block" aria-hidden="true">
            <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
              {ringKeys.map((key, i) => {
                const x = i === 0 ? xOuter : i === 2 ? xInner : undefined;
                const scale = i === 0 ? scaleOuter : i === 1 ? scaleMid : scaleInner;
                return (
                  <motion.div
                    key={key}
                    className="absolute inset-0 grid place-items-center"
                    style={reduce ? undefined : { x, scale }}
                  >
                    <div
                      className="grid aspect-square w-full place-items-center rounded-full border-2"
                      style={{
                        borderColor: familyColor[key].deep,
                        background: `radial-gradient(circle, ${familyColor[key].hex}22, transparent 70%)`,
                      }}
                    >
                      <motion.span
                        className="eyebrow rounded-full bg-paper px-3 py-1"
                        style={{ color: familyColor[key].deep, opacity: reduce ? 0 : gapOpacity }}
                      >
                        {dict.common.families[key]}
                      </motion.span>
                    </div>
                  </motion.div>
                );
              })}
              <motion.div
                className="absolute inset-0 grid place-items-center"
                style={{ opacity: reduce ? 1 : coreOpacity }}
              >
                <div className="grid size-24 place-items-center rounded-full bg-ink text-center text-xs font-semibold leading-tight text-paper shadow-2xl">
                  <span className="px-3">{p.closing.split(",")[0].split("،")[0]}</span>
                </div>
              </motion.div>
            </div>
            <p className="mt-10 text-center text-lg font-medium">{p.closing}</p>
          </div>

          <p className="text-lg font-medium lg:hidden">{p.closing}</p>
        </div>
      </div>
    </section>
  );
}
