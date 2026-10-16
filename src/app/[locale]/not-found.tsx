import Link from "next/link";
import { locale as rootLocale } from "next/root-params";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { href, routes } from "@/lib/routes";

/** Rendered for notFound() inside a locale. */
export default async function NotFound() {
  const value = await rootLocale();
  const locale = value && isLocale(value) ? value : "en";
  const dict = getDictionary(locale);
  const links = [
    [dict.common.home, href(locale)],
    [dict.nav.services, href(locale, routes.services)],
    [dict.nav.industries, href(locale, routes.industries)],
    [dict.nav.contact, href(locale, routes.contact)],
  ] as const;
  return (
    <section className="container-x grid min-h-[80svh] place-items-center pt-[var(--header-h)] text-center">
      <div>
        <p className="font-mono text-sm text-ember">404</p>
        <h1 className="display mx-auto mt-6 max-w-3xl text-5xl sm:text-6xl">{dict.pages.notFound.title}</h1>
        <p className="mt-6 text-lg text-mist">{dict.pages.notFound.body}</p>
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {links.map(([label, to]) => (
            <li key={to}>
              <Link href={to} className="inline-flex min-h-11 items-center rounded-full border border-line-dark px-5 hover:border-paper">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
