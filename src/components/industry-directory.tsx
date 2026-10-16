"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import type { Motif } from "@/content/types";
import { IndustryArt } from "./industry-art";

export type DirectoryItem = {
  slug: string;
  href: string;
  number: number;
  name: string;
  short: string;
  tier: 1 | 2 | 3;
  motif: Motif;
  hue: number;
  keywords: string;
};

type Labels = {
  filterLabel: string;
  filterAll: string;
  searchLabel: string;
  searchPlaceholder: string;
  empty: string;
  count: string;
  tiers: Record<1 | 2 | 3, string>;
};

/** Filterable directory of all 20 industries. Server-rendered list; filtering is progressive. */
export function IndustryDirectory({ items, labels }: { items: DirectoryItem[]; labels: Labels }) {
  const [tier, setTier] = useState<0 | 1 | 2 | 3>(0);
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((i) => (tier === 0 || i.tier === tier) && (!q || i.keywords.includes(q)));
  }, [items, tier, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-line-dark pb-8 md:flex-row md:items-center md:justify-between">
        <div role="group" aria-label={labels.filterLabel} className="flex flex-wrap gap-2">
          {([0, 1, 2, 3] as const).map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={tier === t}
              onClick={() => setTier(t)}
              className={`min-h-11 rounded-full border px-5 text-sm font-medium transition-colors duration-300 ${
                tier === t ? "border-paper bg-paper text-ink" : "border-line-dark text-mist hover:border-mist-2 hover:text-paper"
              }`}
            >
              {t === 0 ? labels.filterAll : labels.tiers[t]}
            </button>
          ))}
        </div>
        <label className="relative block md:w-80">
          <span className="sr-only">{labels.searchLabel}</span>
          <Search className="pointer-events-none absolute start-4 top-1/2 size-4 -translate-y-1/2 text-mist-2" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={labels.searchPlaceholder}
            className="min-h-11 w-full rounded-full border border-line-dark bg-ink-2 ps-11 pe-4 text-sm text-paper placeholder:text-mist-2 focus:border-paper focus:outline-none"
          />
        </label>
      </div>

      <p className="mt-6 text-sm text-mist-2" aria-live="polite">
        {visible.length} {labels.count}
      </p>

      {visible.length === 0 ? <p className="py-16 text-center text-mist">{labels.empty}</p> : null}

      <ul className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((i, idx) => (
          <li key={i.slug} data-reveal="up" style={{ ["--i" as string]: idx % 3 }}>
            <Link href={i.href} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-ink-2">
                <IndustryArt motif={i.motif} hue={i.hue} seed={i.slug} className="size-full transition-transform duration-[1400ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.06]" />
                <span className="absolute start-4 top-4 rounded-full bg-ink/80 px-3 py-1 font-mono text-xs text-paper backdrop-blur">
                  {String(i.number).padStart(2, "0")}
                </span>
                {i.tier === 1 ? (
                  <span className="absolute end-4 top-4 rounded-full bg-ember px-3 py-1 text-xs font-semibold text-ink">{labels.tiers[1]}</span>
                ) : null}
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold tracking-[-0.01em]">{i.name}</h2>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-mist">{i.short}</p>
                </div>
                <span className="mt-1 grid size-10 shrink-0 place-items-center rounded-full border border-line-dark transition-colors duration-300 group-hover:border-ember group-hover:bg-ember group-hover:text-ink">
                  <ArrowUpRight className="flip-rtl size-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
