import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Fragment, type ComponentProps, type ReactNode } from "react";

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "ghost" | "dark";
  children: ReactNode;
};

const variants = {
  primary: "bg-ember text-ink hover:bg-paper",
  ghost: "border border-current/25 text-current hover:border-current/70 hover:bg-current/[0.06]",
  dark: "bg-ink text-paper hover:bg-ember hover:text-ink",
};

/** Pill button: arrow slides out and back in on hover; label never hides. */
export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <Link
      {...props}
      className={`group/btn relative inline-flex min-h-12 items-center gap-3 overflow-hidden rounded-full px-6 py-3 text-[0.95rem] font-semibold transition-colors duration-300 ease-[var(--ease-out-expo)] ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      <span className="relative grid size-5 place-items-center overflow-hidden" aria-hidden="true">
        <ArrowUpRight className="flip-rtl size-5 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover/btn:-translate-y-5 group-hover/btn:translate-x-5 rtl:group-hover/btn:-translate-x-5" />
        <ArrowUpRight className="flip-rtl absolute size-5 -translate-x-5 translate-y-5 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover/btn:translate-x-0 group-hover/btn:translate-y-0 rtl:translate-x-5 rtl:group-hover/btn:translate-x-0" />
      </span>
    </Link>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`eyebrow flex items-center gap-3 ${className}`}>
      <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />
      {children}
    </p>
  );
}

/** Splits a headline into masked words for the staggered upward reveal. */
export function WordReveal({
  text,
  as: Tag = "span",
  className = "",
  delay = 0,
  startIndex = 0,
  id,
  immediate = false,
}: {
  id?: string;
  /** Animate on first paint with CSS only (for above-the-fold LCP text). */
  immediate?: boolean;
  text: string;
  as?: "span" | "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
  startIndex?: number;
}) {
  const words = text.split(" ");
  return (
    <Tag id={id} className={`${immediate ? "hero-words" : "word-reveal"} ${className}`} style={{ ["--delay" as string]: `${delay}ms` }}>
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span className="mask">
            <span className="w" style={{ ["--i" as string]: i + startIndex }}>
              {word}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  body,
  className = "",
  titleClassName = "",
  id,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  body?: string;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
      <WordReveal as="h2" id={id} text={title} className={`display text-4xl sm:text-5xl lg:text-6xl ${titleClassName}`} />
      {body ? (
        <p data-reveal="up" style={{ ["--i" as string]: 3 }} className="text-pretty mt-6 max-w-2xl text-lg leading-relaxed opacity-75">
          {body}
        </p>
      ) : null}
    </div>
  );
}
