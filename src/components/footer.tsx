import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { site, socialLinks, whatsappHref } from "@/config/site";
import { href, routes } from "@/lib/routes";
import { services } from "@/content/services";
import { featuredIndustries } from "@/content/industries";
import { BrandMark } from "./brand-mark";

const socialLabels = { linkedin: "LinkedIn", instagram: "Instagram", x: "X", behance: "Behance" } as const;

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();
  const wa = whatsappHref();

  return (
    <footer className="relative overflow-hidden border-t border-line-dark bg-ink">
      <div className="container-x pt-20 pb-10 sm:pt-28">
        <div className="flex flex-col items-start justify-between gap-10 border-b border-line-dark pb-16 lg:flex-row lg:items-end">
          <p className="display max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
            {dict.footer.tagline}
          </p>
        </div>

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <BrandMark locale={locale} />
            <p className="mt-6 text-sm leading-relaxed text-mist">{dict.footer.location}</p>
          </div>

          <nav aria-label={dict.footer.servicesTitle}>
            <p className="eyebrow mb-5 text-mist-2">{dict.footer.servicesTitle}</p>
            <ul className="space-y-2.5 text-[0.95rem]">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={href(locale, routes.service(s.slug))} className="link-underline text-mist hover:text-paper">
                    {s[locale].name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={dict.footer.industriesTitle}>
            <p className="eyebrow mb-5 text-mist-2">{dict.footer.industriesTitle}</p>
            <ul className="space-y-2.5 text-[0.95rem]">
              {featuredIndustries.map((i) => (
                <li key={i.slug}>
                  <Link href={href(locale, routes.industry(i.slug))} className="link-underline text-mist hover:text-paper">
                    {i[locale].name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={href(locale, routes.industries)} className="link-underline text-paper">
                  {dict.common.allIndustries}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="space-y-10">
            <nav aria-label={dict.footer.studioTitle}>
              <p className="eyebrow mb-5 text-mist-2">{dict.footer.studioTitle}</p>
              <ul className="space-y-2.5 text-[0.95rem]">
                {([
                  ["about", routes.about],
                  ["approach", routes.approach],
                  ["work", routes.work],
                  ["contact", routes.contact],
                ] as const).map(([key, path]) => (
                  <li key={key}>
                    <Link href={href(locale, path)} className="link-underline text-mist hover:text-paper">
                      {dict.nav[key]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="eyebrow mb-5 text-mist-2">{dict.footer.contactTitle}</p>
              <ul className="space-y-2.5 text-[0.95rem] text-mist">
                {site.contact.email ? (
                  <li>
                    <a href={`mailto:${site.contact.email}`} className="link-underline hover:text-paper">
                      {site.contact.email}
                    </a>
                  </li>
                ) : null}
                {site.contact.phone ? (
                  <li>
                    <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} dir="ltr" className="link-underline hover:text-paper">
                      {site.contact.phone}
                    </a>
                  </li>
                ) : null}
                {wa ? (
                  <li>
                    <a href={wa} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-paper">
                      {dict.common.whatsapp}
                    </a>
                  </li>
                ) : null}
                {!site.contact.email && !site.contact.phone ? <li>{dict.contact.directPending}</li> : null}
                {socialLinks.map(([network, url]) => (
                  <li key={network}>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-paper">
                      {socialLabels[network]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-line-dark pt-8 text-sm text-mist-2 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.brand.name[locale]}. {dict.footer.rights}
            {site.brand.isPlaceholder ? <span className="ms-2">{dict.footer.placeholderNotice}</span> : null}
          </p>
          <nav aria-label={dict.footer.legal} className="flex gap-6">
            <Link href={href(locale, routes.privacy)} className="link-underline hover:text-paper">
              {dict.footer.privacy}
            </Link>
            <Link href={href(locale, routes.terms)} className="link-underline hover:text-paper">
              {dict.footer.terms}
            </Link>
          </nav>
        </div>
      </div>

      {/* Oversized wordmark as a quiet closing gesture. Rendered via CSS content: purely decorative. */}
      <div
        aria-hidden="true"
        data-wordmark={site.brand.short[locale]}
        className="pointer-events-none select-none px-[var(--gutter)] pb-4 text-center text-[22vw] font-semibold leading-[0.8] tracking-[-0.06em] text-ink-3 before:content-[attr(data-wordmark)]"
      />
    </footer>
  );
}
