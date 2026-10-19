import { ArrowUpRight, Megaphone, MonitorSmartphone, Sparkles } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { whatsappHref } from "@/config/site";
import { href, routes } from "@/lib/routes";
import { BrandGlyph } from "../brand-mark";
import { WhatsAppIcon } from "../whatsapp-button";
import { Button, WordReveal } from "../ui";

/** Light hero: CSS-only entrance (never delays LCP) and a code-built collage of the three services at work. */
export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const h = dict.hero;
  const v = h.visual;
  const leadCount = h.titleLead.split(" ").length;
  const wa = whatsappHref(dict.common.whatsappMessage);
  const chipIcons = [Megaphone, MonitorSmartphone, Sparkles];

  return (
    <section className="relative isolate overflow-hidden pt-[calc(var(--header-h)+1.5rem)]" aria-labelledby="hero-title">
      {/* Soft brand-gradient light, plus a faint dot grid for texture. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-glow absolute -top-40 end-[-10%] size-[46rem] rounded-full opacity-60 blur-3xl" style={{ background: "radial-gradient(circle, rgba(181,31,224,0.28), rgba(91,46,255,0.16) 45%, transparent 70%)" }} />
        <div className="hero-glow absolute -bottom-40 start-[-15%] size-[36rem] rounded-full opacity-50 blur-3xl [animation-delay:-6s]" style={{ background: "radial-gradient(circle, rgba(255,61,127,0.2), transparent 65%)" }} />
        <div className="absolute inset-0 opacity-[0.5] [background-image:radial-gradient(rgba(18,14,43,0.09)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      <div className="container-x grid min-h-[calc(100svh-var(--header-h)-1.5rem)] items-center gap-14 pb-20 pt-6 lg:grid-cols-12 lg:gap-8">
        <div className="relative z-10 lg:col-span-7">
          <p className="hero-in mb-7 inline-flex items-center gap-2.5 rounded-full border border-line-dark bg-ink/70 px-4 py-2 text-sm font-medium text-mist backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-[ping_2s_ease-out_3] rounded-full bg-ember opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-ember" />
            </span>
            {h.eyebrow}
          </p>

          <h1 id="hero-title" className="display text-[clamp(2.4rem,4.9vw,4.7rem)] [:lang(ar)_&]:text-[clamp(2.1rem,4.2vw,3.9rem)]">
            <WordReveal immediate text={h.titleLead} />{" "}
            <WordReveal immediate text={h.titleAccent} startIndex={leadCount} className="text-gradient" />
          </h1>

          <p style={{ ["--i" as string]: 8 }} className="hero-in text-pretty mt-7 max-w-xl text-lg leading-relaxed text-mist sm:text-xl">
            {h.body}
          </p>

          <div style={{ ["--i" as string]: 10 }} className="hero-in mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
            <Button href={href(locale, routes.contact)}>{h.primaryCta}</Button>
            {wa ? (
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2.5 rounded-full border border-whatsapp/40 bg-whatsapp/10 px-6 py-3 text-[0.95rem] font-semibold text-[#0b7a3b] transition-colors duration-300 hover:bg-whatsapp hover:text-white"
              >
                <WhatsAppIcon className="size-5" />
                {h.whatsappCta}
              </a>
            ) : null}
          </div>

          <ul style={{ ["--i" as string]: 12 }} className="hero-in mt-10 flex flex-wrap gap-2.5">
            {h.chips.map((chip, i) => {
              const Icon = chipIcons[i];
              return (
                <li key={chip} className="inline-flex items-center gap-2 rounded-full bg-ink-2 px-3.5 py-2 text-sm font-medium text-paper">
                  <Icon className="size-4 text-ember" aria-hidden="true" />
                  {chip}
                </li>
              );
            })}
          </ul>
          <p style={{ ["--i" as string]: 13 }} className="hero-in mt-6 text-sm text-mist-2">
            {h.note}
          </p>
        </div>

        {/* Collage: campaign card, website card and WhatsApp AI chat. Purely illustrative. */}
        <div role="img" aria-label={v.label} className="relative mx-auto aspect-[5/5.4] w-full max-w-[32rem] lg:col-span-5 lg:max-w-none">
          <div style={{ ["--i" as string]: 6 }} className="hero-in absolute inset-x-[8%] top-[4%] bottom-[16%]">
            <div className="float-slow relative h-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#4f2bff] via-[#b51fe0] to-[#ff3d7f] p-6 text-white shadow-[0_40px_80px_-30px_rgba(91,46,255,0.6)]">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold backdrop-blur">
                  <span className="size-1.5 rounded-full bg-white" />
                  {v.campaign}
                </span>
                <span className="rounded-full bg-white px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-[#b51fe0]">{v.live}</span>
              </div>
              <BrandGlyph className="absolute -bottom-10 -end-10 size-64 rotate-[-12deg] opacity-25" />
              <div className="absolute inset-x-6 bottom-6 space-y-2">
                <span className="block h-3 w-3/4 rounded-full bg-white/80" />
                <span className="block h-3 w-1/2 rounded-full bg-white/50" />
              </div>
            </div>
          </div>

          <div style={{ ["--i" as string]: 9 }} className="hero-in absolute start-0 top-[34%] w-[58%]">
            <div className="float-mid rounded-2xl border border-line-dark bg-ink p-3 shadow-[0_30px_60px_-25px_rgba(18,14,43,0.35)]">
              <div className="flex gap-1.5 px-1 pb-2.5">
                <span className="size-2 rounded-full bg-[#ff5f57]" />
                <span className="size-2 rounded-full bg-[#febc2e]" />
                <span className="size-2 rounded-full bg-[#28c840]" />
              </div>
              <div className="rounded-xl bg-ink-2 p-4">
                <p className="text-xs font-semibold text-mist">{v.site}</p>
                <span className="mt-3 block h-2.5 w-4/5 rounded-full bg-paper/80" />
                <span className="mt-2 block h-2.5 w-3/5 rounded-full bg-paper/30" />
                <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-ember px-3 py-1.5 text-[0.7rem] font-semibold text-ink">
                  {v.siteCta}
                  <ArrowUpRight className="flip-rtl size-3" aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>

          <div style={{ ["--i" as string]: 12 }} className="hero-in absolute end-0 bottom-0 w-[66%]">
            <div className="float-fast rounded-2xl border border-line-dark bg-ink p-4 shadow-[0_30px_60px_-25px_rgba(18,14,43,0.35)]">
              <p className="flex items-center gap-2 text-xs font-semibold">
                <span className="grid size-6 place-items-center rounded-full bg-whatsapp text-white">
                  <WhatsAppIcon className="size-3.5" />
                </span>
                {v.chatTitle}
              </p>
              <p className="mt-3 ms-auto w-fit max-w-[85%] rounded-2xl rounded-se-sm bg-[#d9fdd3] px-3 py-2 text-[0.8rem] leading-snug text-[#111b21]">{v.chatUser}</p>
              <p className="mt-2 w-fit max-w-[90%] rounded-2xl rounded-ss-sm bg-ink-2 px-3 py-2 text-[0.8rem] leading-snug">{v.chatBot}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
