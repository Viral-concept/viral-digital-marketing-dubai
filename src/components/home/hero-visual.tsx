"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  label: string;
  rings: { growth: string; build: string; intelligence: string };
  chips: [string, string, string];
};

/**
 * The hero's single dominant idea: three capability rings converging on one core.
 * Layers enter from opposing directions (CSS), then respond gently to the pointer on desktop.
 * Ambient rotation pauses when the hero leaves the viewport.
 */
export function HeroVisual({ label, rings, chips }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setPaused(!entry.isIntersecting));
    io.observe(el);

    const fine = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      if (!fine.matches) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        el.style.setProperty("--px", x.toFixed(3));
        el.style.setProperty("--py", y.toFixed(3));
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  const layer = (depth: number) => ({
    transform: `translate3d(calc(var(--px, 0) * ${depth}px), calc(var(--py, 0) * ${depth}px), 0)`,
    transition: "transform 900ms var(--ease-out-expo)",
  });

  return (
    <div ref={ref} data-paused={paused} className="relative aspect-square w-full" role="img" aria-label={label}>
      {/* Soft light behind the composition */}
      <div
        aria-hidden="true"
        className="absolute inset-[8%] rounded-full opacity-70 blur-3xl"
        style={{ background: "radial-gradient(circle at 60% 40%, rgba(255,106,61,0.28), rgba(143,178,255,0.12) 45%, transparent 70%)" }}
      />

      <svg viewBox="0 0 600 600" className="absolute inset-0 size-full overflow-visible" aria-hidden="true">
        <defs>
          <radialGradient id="hero-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f4efe7" />
            <stop offset="35%" stopColor="#5fe0c6" />
            <stop offset="100%" stopColor="#5fe0c6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hero-signal" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#ff6a3d" stopOpacity="0" />
            <stop offset="50%" stopColor="#ff6a3d" />
            <stop offset="100%" stopColor="#5fe0c6" />
          </linearGradient>
        </defs>

        {/* Outer ring: growth. Enters from the inline start. */}
        <g data-reveal="start" style={{ ["--i" as string]: 2 }}>
          <g style={layer(-18)}>
            <circle cx="300" cy="300" r="270" fill="none" stroke="#263049" strokeWidth="1" />
            <g className="animate-orbit">
              <circle cx="300" cy="300" r="270" fill="none" stroke="#ff6a3d" strokeWidth="1.5" strokeDasharray="2 14" opacity="0.9" />
              <circle cx="570" cy="300" r="7" fill="#ff6a3d" />
              <circle cx="109" cy="109" r="4" fill="#ff6a3d" opacity="0.6" />
            </g>
          </g>
        </g>

        {/* Middle ring: build. Enters from the inline end. */}
        <g data-reveal="end" style={{ ["--i" as string]: 4 }}>
          <g style={layer(10)}>
            <circle cx="300" cy="300" r="185" fill="rgba(19,26,40,0.55)" stroke="#8fb2ff" strokeOpacity="0.55" strokeWidth="1.2" />
            <g className="animate-orbit-rev">
              <rect x="285" y="100" width="30" height="30" rx="6" fill="#131a28" stroke="#8fb2ff" strokeWidth="1.5" />
              <rect x="294" y="109" width="12" height="12" rx="2" fill="#8fb2ff" />
              <circle cx="140" cy="390" r="5" fill="#8fb2ff" />
            </g>
          </g>
        </g>

        {/* Inner ring: intelligence. Scales in last. */}
        <g data-reveal="scale" style={{ ["--i" as string]: 6 }}>
          <g style={layer(24)}>
            <circle cx="300" cy="300" r="100" fill="rgba(12,17,28,0.9)" stroke="#5fe0c6" strokeOpacity="0.8" strokeWidth="1.2" />
            <circle cx="300" cy="300" r="60" fill="url(#hero-core)" opacity="0.55" />
            <circle cx="300" cy="300" r="9" fill="#f4efe7" />
          </g>
        </g>

        {/* A lead travelling inward through all three layers */}
        <g data-reveal="up" style={{ ["--i" as string]: 8 }}>
          <path
            d="M40 560 C 160 470, 210 430, 230 380 S 280 320, 300 300"
            fill="none"
            stroke="url(#hero-signal)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="6 9"
            className="animate-dash"
          />
        </g>
      </svg>

      {/* Ring labels */}
      <span
        data-reveal="up"
        style={{ ["--i" as string]: 9, ...layer(-18) }}
        className="eyebrow absolute start-[4%] top-[14%] text-ember"
      >
        {rings.growth}
      </span>
      <span
        data-reveal="up"
        style={{ ["--i" as string]: 10, ...layer(10) }}
        className="eyebrow absolute end-[16%] top-[30%] text-sky"
      >
        {rings.build}
      </span>
      <span
        data-reveal="up"
        style={{ ["--i" as string]: 11, ...layer(24) }}
        className="eyebrow absolute start-1/2 top-[61%] -translate-x-1/2 text-lagoon rtl:translate-x-1/2"
      >
        {rings.intelligence}
      </span>

      {/* Context chips: what each layer actually does */}
      <div className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden="true">
        {chips.map((chip, i) => (
          <span
            key={chip}
            data-reveal={i === 1 ? "end" : "start"}
            style={{ ["--i" as string]: 12 + i, ...layer(i === 1 ? 30 : -26) }}
            className={`absolute rounded-full border border-line-dark bg-ink-2/80 px-3.5 py-1.5 text-xs text-mist backdrop-blur ${
              ["start-[-4%] bottom-[22%]", "end-[-2%] top-[52%]", "start-[22%] bottom-[2%]"][i]
            }`}
          >
            <span className={`me-2 inline-block size-1.5 rounded-full align-middle ${["bg-ember", "bg-sky", "bg-lagoon"][i]}`} />
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}
