import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { pageMetadata } from "@/lib/seo";
import { href, routes } from "@/lib/routes";
import { familyColor } from "@/lib/families";
import type { Family } from "@/content/types";
import { PageHero } from "@/components/page-hero";
import { WhyUs } from "@/components/home/why-us";
import { Comparison } from "@/components/home/comparison";
import { ContactBlock } from "@/components/contact-block";
import { Button, Eyebrow, WordReveal } from "@/components/ui";

export async function generateMetadata({ params }: PageProps<"/[locale]/about">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const d = getDictionary(locale);
  return pageMetadata({ locale, path: routes.about, title: d.meta.aboutUsTitle, description: d.meta.aboutUsDescription });
}

export default async function AboutPage({ params }: PageProps<"/[locale]/about">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const a = dict.pages.aboutUs;

  return (
    <>
      <PageHero
        eyebrow={a.eyebrow}
        title={a.title}
        body={a.body}
        crumbLabel={dict.common.breadcrumb}
        crumbs={[
          { name: dict.common.home, href: href(locale) },
          { name: dict.nav.about, href: href(locale, routes.about) },
        ]}
      />

      {/* Story: an editorial column with the opening sentence set large. */}
      <section aria-labelledby="story-title" className="surface-paper py-24 sm:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+3rem)]">
              <Eyebrow className="mb-6 text-stone">{a.eyebrow}</Eyebrow>
              <WordReveal as="h2" id="story-title" text={a.storyTitle} className="display text-4xl sm:text-5xl" />
            </div>
          </div>
          <div className="space-y-8 lg:col-span-8">
            {a.story.map((para, i) => (
              <p
                key={i}
                data-reveal="up"
                className={i === 0 ? "text-pretty text-2xl leading-snug font-medium sm:text-3xl" : "max-w-2xl text-lg leading-relaxed text-stone"}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section aria-label={`${a.missionTitle} · ${a.visionTitle}`} className="py-24 sm:py-28">
        <div className="container-x grid gap-px overflow-hidden rounded-[1.75rem] border border-line-dark bg-line-dark md:grid-cols-2">
          {([
            [a.missionTitle, a.mission, "#ff6a3d"],
            [a.visionTitle, a.vision, "#5fe0c6"],
          ] as const).map(([title, body, color], i) => (
            <div key={title} data-reveal="up" style={{ ["--i" as string]: i }} className="relative bg-ink p-10 sm:p-14">
              <p className="eyebrow" style={{ color }}>
                {title}
              </p>
              <p className="display mt-8 text-3xl leading-tight sm:text-4xl">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team model: roles, never invented people. */}
      <section aria-labelledby="team-title" className="border-t border-line-dark py-24 sm:py-32">
        <div className="container-x">
          <div className="max-w-3xl">
            <WordReveal as="h2" id="team-title" text={a.teamTitle} className="display text-4xl sm:text-5xl lg:text-6xl" />
            <p data-reveal="up" className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">
              {a.teamBody}
            </p>
          </div>
          <ul className="mt-16 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {a.team.map((m, i) => {
              const c = familyColor[m.family as Family];
              return (
                <li key={m.role} data-reveal="up" style={{ ["--i" as string]: i % 3 }} className="border-t border-line-dark py-8">
                  <span className="flex items-center gap-3">
                    <span className="size-2.5 rounded-full" style={{ background: c.hex }} aria-hidden="true" />
                    <span className="text-sm text-mist-2">{dict.common.families[m.family as Family]}</span>
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.02em]">{m.role}</h3>
                  <p className="mt-3 leading-relaxed text-mist">{m.body}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <Comparison dict={dict} />
      <WhyUs dict={dict} />

      {/* Promises */}
      <section aria-labelledby="promises-title" className="surface-paper py-24 sm:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <WordReveal as="h2" id="promises-title" text={a.promisesTitle} className="display text-4xl sm:text-5xl" />
            <Button href={href(locale, routes.approach)} variant="dark" className="mt-10">
              {a.approachCta}
            </Button>
          </div>
          <ol className="lg:col-span-7">
            {a.promises.map((p, i) => (
              <li key={p} data-reveal="end" style={{ ["--i" as string]: i }} className="flex items-start gap-5 border-b border-ink/10 py-6 text-xl leading-snug">
                <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-ink text-paper">
                  <Check className="size-4" strokeWidth={2.5} aria-hidden="true" />
                </span>
                {p}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ContactBlock locale={locale} dict={dict} page={routes.about} />
    </>
  );
}
