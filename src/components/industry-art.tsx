import type { Motif } from "@/content/types";

/** Small deterministic PRNG so each industry gets a stable, distinct composition. */
function seeded(seed: string) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

type Props = {
  motif: Motif;
  hue: number;
  seed: string;
  className?: string;
  /** Adds slow ambient motion to a couple of elements. Use for the one focal artwork per view. */
  animated?: boolean;
  title?: string;
};

/**
 * Original abstract artwork used as each industry's visual direction.
 * Pure SVG: no network requests, crisp at any size, and tinted per industry.
 */
export function IndustryArt({ motif, hue, seed, className = "", animated = false, title }: Props) {
  // Precompute the numbers so rendering stays pure (StrictMode/hydration render twice).
  const pool = (() => {
    const next = seeded(seed);
    return Array.from({ length: 48 }, () => next());
  })();
  const stroke = `hsl(${hue} 85% 68%)`;
  const soft = `hsl(${hue} 60% 60% / 0.18)`;
  const faint = `hsl(${hue} 30% 70% / 0.14)`;
  const id = `g-${seed}`;

  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id={`${id}-glow`} cx="70%" cy="30%" r="80%">
          <stop offset="0%" stopColor={`hsl(${hue} 80% 55% / 0.35)`} />
          <stop offset="60%" stopColor={`hsl(${hue} 60% 30% / 0.05)`} />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id={`${id}-fade`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.9" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="#160f35" />
      <rect width="400" height="300" fill={`url(#${id}-glow)`} />

      {motif === "grid" ? <GridMotif pool={pool} stroke={stroke} soft={soft} faint={faint} animated={animated} /> : null}
      {motif === "arc" ? <ArcMotif pool={pool} stroke={stroke} soft={soft} faint={faint} animated={animated} /> : null}
      {motif === "wave" ? <WaveMotif pool={pool} stroke={stroke} soft={soft} faint={faint} animated={animated} /> : null}
      {motif === "stack" ? <StackMotif pool={pool} stroke={stroke} soft={soft} faint={faint} animated={animated} /> : null}
      {motif === "orbit" ? <OrbitMotif pool={pool} stroke={stroke} soft={soft} faint={faint} animated={animated} /> : null}
      {motif === "route" ? <RouteMotif pool={pool} stroke={stroke} soft={soft} faint={faint} animated={animated} /> : null}
    </svg>
  );
}

type MotifProps = { pool: number[]; stroke: string; soft: string; faint: string; animated: boolean };

function GridMotif({ pool, stroke, soft, faint }: MotifProps) {
  let cursor = 0;
  const rand = () => pool[cursor++ % pool.length];
  // Isometric floor plates, like an architectural massing study.
  const floors = 7;
  const cells: { x: number; y: number }[] = [];
  for (let f = 0; f < floors; f++) if (rand() > 0.45) cells.push({ x: Math.floor(rand() * 4), y: f });
  return (
    <g transform="translate(200 250)">
      {Array.from({ length: floors }).map((_, f) => (
        <g key={f} transform={`translate(0 ${-f * 28})`}>
          <path d="M-120 0 L0 -40 L120 0 L0 40 Z" fill={f === floors - 1 ? soft : "none"} stroke={faint} />
          {[1, 2, 3].map((k) => (
            <path key={k} d={`M${-120 + k * 30} ${-k * 10} L${k * 30} ${40 - k * 10}`} stroke={faint} />
          ))}
        </g>
      ))}
      {cells.map((c, i) => (
        <path
          key={i}
          transform={`translate(${-90 + c.x * 30} ${-c.y * 28 - 10 + c.x * 10})`}
          d="M0 0 L30 -10 L60 0 L30 10 Z"
          fill={stroke}
          opacity={0.75}
        />
      ))}
      <path d="M-120 0 L-120 -168 M120 0 L120 -168 M0 40 L0 -128" stroke={faint} strokeDasharray="2 6" />
    </g>
  );
}

function ArcMotif({ pool, stroke, faint, animated }: MotifProps) {
  let cursor = 0;
  const rand = () => pool[cursor++ % pool.length];
  const cx = 120 + rand() * 160;
  return (
    <g fill="none">
      {Array.from({ length: 9 }).map((_, i) => (
        <path
          key={i}
          d={`M${cx - 30 - i * 26} 300 A ${30 + i * 26} ${30 + i * 26} 0 0 1 ${cx + 30 + i * 26} 300`}
          stroke={i === 3 ? stroke : faint}
          strokeWidth={i === 3 ? 2 : 1}
        />
      ))}
      <circle cx={cx} cy={300 - (30 + 3 * 26)} r="5" fill={stroke} className={animated ? "animate-[pulse-dot_3s_ease-in-out_3]" : undefined} />
      <path d={`M${cx} 300 L${cx} 40`} stroke={faint} strokeDasharray="2 6" />
    </g>
  );
}

function WaveMotif({ pool, stroke, faint, animated }: MotifProps) {
  let cursor = 0;
  const rand = () => pool[cursor++ % pool.length];
  const amp = 14 + rand() * 12;
  const freq = 0.018 + rand() * 0.01;
  const lines = Array.from({ length: 10 }).map((_, i) => {
    const y0 = 60 + i * 20;
    let d = `M0 ${y0}`;
    for (let x = 0; x <= 400; x += 10) d += ` L${x} ${(y0 + Math.sin(x * freq + i * 0.5) * amp * (0.4 + i / 14)).toFixed(1)}`;
    return d;
  });
  return (
    <g fill="none">
      {lines.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke={i === 5 ? stroke : faint}
          strokeWidth={i === 5 ? 2 : 1}
          strokeDasharray={i === 5 && animated ? "6 10" : undefined}
          className={i === 5 && animated ? "animate-dash" : undefined}
        />
      ))}
    </g>
  );
}

function StackMotif({ pool, stroke, soft, faint }: MotifProps) {
  let cursor = 0;
  const rand = () => pool[cursor++ % pool.length];
  const cols = 5;
  return (
    <g>
      {Array.from({ length: cols }).map((_, c) => {
        const h = 2 + Math.floor(rand() * 5);
        return (
          <g key={c} transform={`translate(${50 + c * 64} 260)`}>
            {Array.from({ length: h }).map((_, r) => (
              <rect
                key={r}
                x="0"
                y={-(r + 1) * 30}
                width="52"
                height="24"
                rx="3"
                fill={r === h - 1 && c % 2 === 0 ? stroke : r === h - 1 ? soft : "none"}
                stroke={faint}
                opacity={r === h - 1 && c % 2 === 0 ? 0.85 : 1}
              />
            ))}
          </g>
        );
      })}
      <path d="M30 262 H370" stroke={faint} />
    </g>
  );
}

function OrbitMotif({ pool, stroke, faint, animated }: MotifProps) {
  let cursor = 0;
  const rand = () => pool[cursor++ % pool.length];
  const cx = 200 + (rand() - 0.5) * 80;
  const cy = 150;
  const radii = [40, 78, 116, 154];
  return (
    <g fill="none">
      {radii.map((r, i) => (
        <circle key={r} cx={cx} cy={cy} r={r} stroke={i === 1 ? stroke : faint} strokeWidth={i === 1 ? 1.6 : 1} />
      ))}
      <g className={animated ? "animate-orbit" : undefined} style={{ transformOrigin: `${cx}px ${cy}px` }}>
        {radii.map((r, i) => {
          const a = rand() * Math.PI * 2;
          return <circle key={i} cx={cx + Math.cos(a) * r} cy={cy + Math.sin(a) * r} r={i === 1 ? 6 : 3.5} fill={i === 1 ? stroke : faint} />;
        })}
      </g>
      <circle cx={cx} cy={cy} r="10" fill={stroke} />
    </g>
  );
}

function RouteMotif({ pool, stroke, faint, animated }: MotifProps) {
  let cursor = 0;
  const rand = () => pool[cursor++ % pool.length];
  const pts = Array.from({ length: 6 }).map((_, i) => ({ x: 30 + i * 68, y: 60 + rand() * 180 }));
  const d = pts.reduce((acc, p, i) => {
    if (i === 0) return `M${p.x} ${p.y}`;
    const prev = pts[i - 1];
    const mx = (prev.x + p.x) / 2;
    return `${acc} C${mx} ${prev.y} ${mx} ${p.y} ${p.x} ${p.y}`;
  }, "");
  return (
    <g fill="none">
      {Array.from({ length: 9 }).map((_, i) => (
        <path key={i} d={`M0 ${30 + i * 30} H400`} stroke={faint} strokeDasharray="1 7" />
      ))}
      <path d={d} stroke={faint} strokeWidth="6" strokeLinecap="round" />
      <path
        d={d}
        stroke={stroke}
        strokeWidth="2"
        strokeDasharray={animated ? "8 10" : undefined}
        className={animated ? "animate-dash" : undefined}
      />
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={i === 0 || i === pts.length - 1 ? 7 : 4} fill={i === pts.length - 1 ? stroke : "#131a28"} stroke={stroke} strokeWidth="2" />
      ))}
    </g>
  );
}
