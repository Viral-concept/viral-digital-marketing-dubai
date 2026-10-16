import type { Family } from "@/content/types";
import { familyColor } from "@/lib/families";

/**
 * Code-built concept visuals: abstract product interfaces, not screenshots of real work.
 * Layers sit at different depths and separate on hover (desktop) for a controlled parallax.
 */
export function ProjectArt({ slug, family }: { slug: string; family: Family }) {
  const accent = familyColor[family].hex;
  const back = "transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:-translate-y-2 group-hover:scale-[1.02]";
  const front = "transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:-translate-y-5 group-hover:translate-x-3 rtl:group-hover:-translate-x-3";

  return (
    <div aria-hidden="true" className="absolute inset-0">
      <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 80% 10%, ${accent}40, transparent 55%), radial-gradient(circle at 0% 100%, #8fb2ff1f, transparent 50%)` }} />
      {/* Back layer: browser window */}
      <div className={`absolute inset-x-[8%] top-[14%] bottom-[-6%] rounded-t-2xl border border-line-dark bg-ink shadow-2xl ${back}`}>
        <div className="flex items-center gap-1.5 border-b border-line-dark px-4 py-3">
          <span className="size-2 rounded-full bg-line-dark" />
          <span className="size-2 rounded-full bg-line-dark" />
          <span className="size-2 rounded-full bg-line-dark" />
          <span className="ms-4 h-2 w-1/3 rounded bg-ink-3" />
        </div>
        <Screen slug={slug} accent={accent} />
      </div>
      {/* Front layer: a phone or floating module */}
      <div className={`absolute bottom-[8%] end-[6%] w-[30%] rounded-2xl border border-line-dark bg-ink-2 p-3 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] ${front}`}>
        <Floating slug={slug} accent={accent} />
      </div>
    </div>
  );
}

function Bar({ w, className = "" }: { w: string; className?: string }) {
  return <div className={`h-2 rounded bg-ink-3 ${className}`} style={{ width: w }} />;
}

function Screen({ slug, accent }: { slug: string; accent: string }) {
  switch (slug) {
    case "off-plan-launch":
      return (
        <div className="grid grid-cols-5 gap-2 p-4">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-md border border-line-dark"
              style={i % 4 === 1 ? { background: `${accent}55`, borderColor: accent } : undefined}
            />
          ))}
          <div className="col-span-5 mt-2 flex gap-2">
            <Bar w="30%" />
            <Bar w="20%" />
          </div>
        </div>
      );
    case "ac-service-booking":
      return (
        <div className="grid grid-cols-3 gap-3 p-4">
          {["08", "10", "12", "14", "16", "18"].map((t, i) => (
            <div key={t} className="rounded-lg border border-line-dark p-2 text-[0.6rem] text-mist" style={i === 2 ? { background: accent, color: "#0c111c", borderColor: accent } : undefined}>
              {t}:00
            </div>
          ))}
          <div className="col-span-3 mt-1 space-y-2">
            <Bar w="70%" />
            <Bar w="45%" />
          </div>
        </div>
      );
    case "clinic-journey":
      return (
        <div className="p-4">
          <div className="h-16 rounded-lg" style={{ background: `linear-gradient(120deg, ${accent}66, transparent)` }} />
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="space-y-1.5 rounded-lg border border-line-dark p-2">
                <div className="size-4 rounded-full" style={{ background: i === 0 ? accent : "#263049" }} />
                <Bar w="80%" />
                <Bar w="50%" />
              </div>
            ))}
          </div>
        </div>
      );
    case "saas-assistant":
      return (
        <div className="grid grid-cols-[1fr_2fr] gap-3 p-4">
          <div className="space-y-2">
            {[0, 1, 2, 3].map((i) => (
              <Bar key={i} w={`${90 - i * 12}%`} />
            ))}
          </div>
          <div className="space-y-2">
            <div className="h-14 rounded-lg border border-line-dark" />
            <div className="flex h-20 items-end gap-1.5">
              {[30, 50, 40, 70, 60, 85].map((h, i) => (
                <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i === 5 ? accent : "#263049" }} />
              ))}
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div className="grid grid-cols-3 gap-3 p-4" dir="rtl">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="space-y-1.5">
              <div className="aspect-square rounded-lg" style={{ background: i === 1 ? `${accent}66` : "#1c2436" }} />
              <Bar w="70%" />
            </div>
          ))}
        </div>
      );
  }
}

function Floating({ slug, accent }: { slug: string; accent: string }) {
  if (slug === "ac-service-booking" || slug === "saas-assistant") {
    return (
      <div className="space-y-2">
        <div className="ms-auto h-5 w-3/4 rounded-lg bg-ink-3" />
        <div className="h-8 w-5/6 rounded-lg" style={{ background: `${accent}55` }} />
        <div className="ms-auto h-5 w-1/2 rounded-lg bg-ink-3" />
      </div>
    );
  }
  return (
    <div className="space-y-2">
      <div className="aspect-[4/3] rounded-lg" style={{ background: `linear-gradient(140deg, ${accent}80, transparent)` }} />
      <Bar w="80%" />
      <div className="h-5 rounded-full" style={{ background: accent }} />
    </div>
  );
}
