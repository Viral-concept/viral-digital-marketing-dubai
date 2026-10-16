import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { pageMetadata } from "@/lib/seo";
import { href, routes } from "@/lib/routes";
import { familyColor } from "@/lib/families";
import { getIndustry } from "@/content/industries";
import type { Family, IndustrySlug } from "@/content/types";
import { PageHero } from "@/components/page-hero";
import { ProjectArt } from "@/components/project-art";
import { ContactBlock } from "@/components/contact-block";

export async function generateMetadata({ params }: PageProps<"/[locale]/work">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const d = getDictionary(locale);
  return pageMetadata({ locale, path: routes.work, title: d.meta.workTitle, description: d.meta.workDescription });
}

export default async function WorkPage({ params }: PageProps<"/[locale]/work">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const p = dict.pages.work;

  return (
    <>
      <PageHero
        eyebrow={p.eyebrow}
        title={p.title}
        body={p.body}
        crumbLabel={dict.common.breadcrumb}
        crumbs={[
          { name: dict.common.home, href: href(locale) },
          { name: dict.nav.work, href: href(locale, routes.work) },
        ]}
      />
      <section className="pb-24">
        <div className="container-x space-y-24 sm:space-y-32">
          {dict.work.projects.map((project, i) => {
            const fam = project.family as Family;
            const industry = getIndustry(project.industry as IndustrySlug);
            const flip = i % 2 === 1;
            return (
              <article key={project.slug} aria-labelledby={`p-${project.slug}`} className="group grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                <div data-reveal={flip ? "end" : "start"} className={`relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-ink-2 lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                  <ProjectArt slug={project.slug} family={fam} />
                  <span className="absolute start-5 top-5 rounded-full bg-ink/80 px-3 py-1 text-xs font-medium backdrop-blur">
                    {dict.common.concept}
                  </span>
                </div>
                <div data-reveal={flip ? "start" : "end"} className="lg:col-span-5">
                  <p className="eyebrow" style={{ color: familyColor[fam].hex }}>
                    {String(i + 1).padStart(2, "0")} · {dict.common.families[fam]}
                  </p>
                  <h2 id={`p-${project.slug}`} className="display mt-4 text-4xl sm:text-5xl">
                    {project.title}
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-mist">{project.summary}</p>
                  <h3 className="eyebrow mt-8 text-mist-2">{p.focus}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.focus.map((f) => (
                      <li key={f} className="rounded-full border border-line-dark px-3 py-1 text-sm text-mist">
                        {f}
                      </li>
                    ))}
                  </ul>
                  {industry ? (
                    <Link href={href(locale, routes.industry(industry.slug))} className="link-underline mt-8 inline-block font-semibold">
                      {industry[locale].name}
                    </Link>
                  ) : null}
                </div>
              </article>
            );
          })}
          <p className="border-t border-line-dark pt-6 text-sm text-mist-2">{dict.work.conceptNote}</p>
        </div>
      </section>
      <ContactBlock locale={locale} dict={dict} page={routes.work} />
    </>
  );
}
