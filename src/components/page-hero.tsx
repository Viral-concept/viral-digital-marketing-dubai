import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { breadcrumbLd } from "@/lib/structured-data";
import { JsonLd } from "./json-ld";
import { Eyebrow, WordReveal } from "./ui";

type Crumb = { name: string; href: string };

export function Breadcrumbs({ items, label }: { items: Crumb[]; label: string }) {
  return (
    <>
      <nav aria-label={label} className="text-sm text-mist-2">
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((c, i) => (
            <li key={c.href} className="flex items-center gap-1.5">
              {i < items.length - 1 ? (
                <>
                  <Link href={c.href} className="link-underline hover:text-paper">
                    {c.name}
                  </Link>
                  <ChevronRight className="flip-rtl size-3.5" aria-hidden="true" />
                </>
              ) : (
                <span aria-current="page" className="text-mist">
                  {c.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={breadcrumbLd(items.map((c) => ({ name: c.name, path: c.href })))} />
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  body,
  crumbs,
  crumbLabel,
  aside,
  children,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  crumbs: Crumb[];
  crumbLabel: string;
  aside?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-[calc(var(--header-h)+2.5rem)] pb-16 sm:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -end-40 -top-40 size-[36rem] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,106,61,0.22), rgba(143,178,255,0.08) 50%, transparent 70%)" }}
      />
      <div className="container-x relative">
        <Breadcrumbs items={crumbs} label={crumbLabel} />
        <div className={`mt-12 grid gap-12 ${aside ? "lg:grid-cols-12 lg:items-end" : ""}`}>
          <div className={aside ? "lg:col-span-7" : "max-w-5xl"}>
            <Eyebrow className="mb-6 text-ember">{eyebrow}</Eyebrow>
            <WordReveal as="h1" text={title} className="display text-[clamp(2.6rem,6vw,5.5rem)] [:lang(ar)_&]:text-[clamp(2.2rem,4.4vw,4.2rem)]" />
            {body ? (
              <p data-reveal="up" style={{ ["--i" as string]: 4 }} className="text-pretty mt-8 max-w-2xl text-lg leading-relaxed text-mist sm:text-xl">
                {body}
              </p>
            ) : null}
            {children}
          </div>
          {aside ? (
            <div data-reveal="end" className="lg:col-span-5">
              {aside}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
