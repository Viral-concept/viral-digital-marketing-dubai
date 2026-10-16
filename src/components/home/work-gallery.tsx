"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Family } from "@/content/types";
import { familyColor } from "@/lib/families";
import { ProjectArt } from "../project-art";

export type GalleryProject = {
  slug: string;
  title: string;
  summary: string;
  focus: string[];
  family: Family;
  industryName: string;
};

type Labels = { concept: string; previous: string; next: string; gallery: string };

/**
 * Horizontal gallery built on native scroll-snap: touch swipe, trackpad and keyboard work
 * without a carousel library. Buttons scroll by one card; position is announced to screen readers.
 */
export function WorkGallery({ projects, labels, isRtl }: { projects: GalleryProject[]; labels: Labels; isRtl: boolean }) {
  const track = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    // scrollLeft is negative in RTL in modern browsers.
    const pos = Math.abs(el.scrollLeft);
    setAtStart(pos < 8);
    setAtEnd(pos + el.clientWidth >= el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    update();
    const el = track.current;
    el?.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el?.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    const amount = (card?.clientWidth ?? 400) + 24;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: amount * dir * (isRtl ? -1 : 1), behavior: reduce ? "auto" : "smooth" });
  };

  const Prev = isRtl ? ArrowRight : ArrowLeft;
  const Next = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div>
      <div className="container-x mb-8 flex justify-end gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          disabled={atStart}
          aria-label={labels.previous}
          className="grid size-12 place-items-center rounded-full border border-line-dark transition-colors hover:border-paper disabled:opacity-30"
        >
          <Prev className="size-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          disabled={atEnd}
          aria-label={labels.next}
          className="grid size-12 place-items-center rounded-full border border-line-dark transition-colors hover:border-paper disabled:opacity-30"
        >
          <Next className="size-5" aria-hidden="true" />
        </button>
      </div>

      <ul
        ref={track}
        aria-label={labels.gallery}
        tabIndex={0}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-[var(--gutter)] px-[var(--gutter)] pb-4 focus-visible:outline-offset-[-2px]"
      >
        {projects.map((p, i) => (
          <li
            key={p.slug}
            data-reveal="end"
            style={{ ["--i" as string]: i }}
            className="group w-[85vw] shrink-0 snap-start sm:w-[30rem] lg:w-[36rem]"
          >
            <article aria-labelledby={`project-${p.slug}`}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-ink-2">
                <ProjectArt slug={p.slug} family={p.family} />
                <span className="absolute start-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-xs font-medium text-paper backdrop-blur">
                  {labels.concept} · {p.industryName}
                </span>
              </div>
              <div className="mt-6 flex items-start gap-4">
                <span className="mt-2.5 size-2 shrink-0 rounded-full" style={{ background: familyColor[p.family].hex }} aria-hidden="true" />
                <div>
                  <h3 id={`project-${p.slug}`} className="text-2xl font-semibold tracking-[-0.02em]">
                    {p.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-mist">{p.summary}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.focus.map((f) => (
                      <li key={f} className="rounded-full border border-line-dark px-3 py-1 text-xs text-mist">
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
