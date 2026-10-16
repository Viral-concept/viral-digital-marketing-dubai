import { Plus } from "lucide-react";
import type { Faq } from "@/content/types";
import { JsonLd } from "./json-ld";

/** Native <details> accordion: keyboard and screen-reader friendly with zero JavaScript. */
export function FaqList({ items, tone = "dark", schema = true }: { items: Faq[]; tone?: "dark" | "light"; schema?: boolean }) {
  const line = tone === "dark" ? "border-line-dark" : "border-ink/10";
  const muted = tone === "dark" ? "text-mist" : "text-stone";
  return (
    <>
      <div className={`border-t ${line}`}>
        {items.map((item) => (
          <details key={item.q} className={`group border-b ${line}`}>
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-lg font-semibold sm:text-xl [&::-webkit-details-marker]:hidden">
              <span>{item.q}</span>
              <span className={`mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border ${line} transition-all duration-500 ease-[var(--ease-out-expo)] group-open:rotate-45 group-open:border-ember group-open:bg-ember group-open:text-ink`}>
                <Plus className="size-4" aria-hidden="true" />
              </span>
            </summary>
            <p className={`max-w-3xl pb-7 pe-14 leading-relaxed ${muted}`}>{item.a}</p>
          </details>
        ))}
      </div>
      {schema ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
          }}
        />
      ) : null}
    </>
  );
}
