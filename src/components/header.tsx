"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { NavData } from "@/lib/nav-data";
import { href, routes } from "@/lib/routes";
import { families, familyColor } from "@/lib/families";
import { BrandMark } from "./brand-mark";

type MenuKey = "services" | "industries" | null;

export function Header({ locale, dict, nav }: { locale: Locale; dict: Dictionary; nav: NavData }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const menuId = useId();

  const otherLocale: Locale = locale === "en" ? "ar" : "en";
  const switchHref = pathname.replace(new RegExp(`^/${locale}(?=/|$)`), `/${otherLocale}`) || `/${otherLocale}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything after navigation (state adjusted during render, per React guidance).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const openWithIntent = useCallback((key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(key);
  }, []);
  const closeWithDelay = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 160);
  }, []);

  const isActive = (path: string) => pathname === href(locale, path) || pathname.startsWith(`${href(locale, path)}/`);
  const solid = scrolled || open !== null || mobileOpen;

  return (
    <>
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        solid ? "border-b border-line-dark/70 bg-ink/85 backdrop-blur-xl" : "border-b border-transparent"
      }`}
      onMouseLeave={closeWithDelay}
    >
      <div className="container-x flex h-[var(--header-h)] items-center justify-between gap-6">
        <Link href={href(locale)} className="shrink-0 rounded-md" aria-label={dict.common.home}>
          <BrandMark locale={locale} />
        </Link>

        <nav aria-label={dict.nav.primary} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {(["services", "industries"] as const).map((key) => (
              <li key={key} onMouseEnter={() => openWithIntent(key)}>
                <button
                  type="button"
                  aria-expanded={open === key}
                  aria-controls={`${menuId}-${key}`}
                  onClick={() => setOpen(open === key ? null : key)}
                  className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.95rem] transition-colors duration-300 hover:text-paper ${
                    open === key || isActive(routes[key]) ? "text-paper" : "text-mist"
                  }`}
                >
                  {dict.nav[key]}
                  <ChevronDown
                    aria-hidden="true"
                    className={`size-4 transition-transform duration-300 ${open === key ? "rotate-180" : ""}`}
                  />
                </button>
              </li>
            ))}
            {([
              ["work", routes.work],
              ["about", routes.about],
            ] as const).map(([key, path]) => (
              <li key={key} onMouseEnter={() => openWithIntent(null)}>
                <Link
                  href={href(locale, path)}
                  aria-current={isActive(path) ? "page" : undefined}
                  className={`link-underline mx-4 py-1 text-[0.95rem] transition-colors duration-300 hover:text-paper ${
                    isActive(path) ? "text-paper" : "text-mist"
                  }`}
                >
                  {dict.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href={switchHref}
            hrefLang={otherLocale}
            lang={otherLocale}
            aria-label={dict.common.switchToLabel}
            className="rounded-full px-3 py-2 text-[0.95rem] text-mist transition-colors hover:text-paper"
            onClick={() => {
              try {
                localStorage.setItem("preferred-locale", otherLocale);
              } catch {}
            }}
          >
            {dict.common.switchTo}
          </Link>
          <Link
            href={href(locale, routes.contact)}
            className="group hidden min-h-11 items-center gap-2 rounded-full bg-paper px-5 text-[0.92rem] font-semibold text-ink transition-colors duration-300 hover:bg-ember sm:inline-flex"
          >
            {dict.common.startProject}
            <ArrowUpRight
              aria-hidden="true"
              className="flip-rtl size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
            />
          </Link>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-line-dark lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls={mobileOpen ? `${menuId}-mobile` : undefined}
            aria-label={mobileOpen ? dict.common.closeMenu : dict.common.openMenu}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Desktop mega menus */}
      <div
        id={`${menuId}-services`}
        hidden={open !== "services"}
        onMouseEnter={() => openWithIntent("services")}
        className="absolute inset-x-0 top-full hidden animate-[menu-in_450ms_var(--ease-out-expo)] border-b border-line-dark bg-ink shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)] lg:block"
      >
        <div className="container-x grid grid-cols-[1fr_3fr] gap-12 py-10">
          <div>
            <p className="max-w-56 text-lg leading-snug text-mist">{dict.nav.menuServicesIntro}</p>
            <Link href={href(locale, routes.services)} className="link-underline mt-6 inline-block text-paper">
              {dict.common.allServices}
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {families.map((family) => (
              <div key={family}>
                <p className={`eyebrow mb-4 ${familyColor[family].text}`}>{dict.common.families[family]}</p>
                <ul className="space-y-1">
                  {nav.services
                    .filter((s) => s.family === family)
                    .map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={href(locale, routes.service(s.slug))}
                          className="group block rounded-xl px-3 py-2.5 -mx-3 transition-colors duration-300 hover:bg-ink-3"
                        >
                          <span className="block font-medium text-paper">{s.name}</span>
                          <span className="mt-0.5 block text-sm leading-snug text-mist-2 group-hover:text-mist">
                            {s.short}
                          </span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        id={`${menuId}-industries`}
        hidden={open !== "industries"}
        onMouseEnter={() => openWithIntent("industries")}
        className="absolute inset-x-0 top-full hidden animate-[menu-in_450ms_var(--ease-out-expo)] border-b border-line-dark bg-ink shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)] lg:block"
      >
        <div className="container-x grid grid-cols-[1fr_3fr] gap-12 py-10">
          <div>
            <p className="max-w-56 text-lg leading-snug text-mist">{dict.nav.menuIndustriesIntro}</p>
            <Link href={href(locale, routes.industries)} className="link-underline mt-6 inline-block text-paper">
              {dict.common.allIndustries}
            </Link>
          </div>
          <ul className="grid grid-cols-3 gap-x-8 gap-y-1">
            {nav.industries.map((i) => (
              <li key={i.slug}>
                <Link
                  href={href(locale, routes.industry(i.slug))}
                  className="flex items-center justify-between gap-3 rounded-lg px-3 py-2 -mx-3 text-[0.95rem] text-mist transition-colors duration-300 hover:bg-ink-3 hover:text-paper"
                >
                  {i.name}
                  {i.tier === 1 ? <span className="size-1.5 shrink-0 rounded-full bg-ember" aria-hidden="true" /> : null}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </header>
      {/* Dim the page while a mega menu is open */}
      <div
        aria-hidden="true"
        onMouseEnter={closeWithDelay}
        className={`fixed inset-0 top-[var(--header-h)] z-40 hidden bg-ink/60 transition-opacity duration-500 lg:block ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile menu */}
      {mobileOpen ? (
      <div
        id={`${menuId}-mobile`}
        className="fixed inset-x-0 bottom-0 top-[var(--header-h)] z-40 overflow-y-auto bg-ink lg:hidden"
      >
        <nav aria-label={dict.nav.primary} className="container-x flex min-h-full flex-col py-8">
          <details className="group border-b border-line-dark py-2" open>
            <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-2xl font-semibold">
              {dict.nav.services}
              <ChevronDown className="size-5 transition-transform group-open:rotate-180" aria-hidden="true" />
            </summary>
            <ul className="pb-4">
              {nav.services.map((s) => (
                <li key={s.slug}>
                  <Link href={href(locale, routes.service(s.slug))} className="flex items-center gap-3 py-2.5 text-mist">
                    <span className={`size-1.5 rounded-full ${familyColor[s.family].bg}`} aria-hidden="true" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
          <details className="group border-b border-line-dark py-2">
            <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-2xl font-semibold">
              {dict.nav.industries}
              <ChevronDown className="size-5 transition-transform group-open:rotate-180" aria-hidden="true" />
            </summary>
            <ul className="pb-4">
              {nav.industries.map((i) => (
                <li key={i.slug}>
                  <Link href={href(locale, routes.industry(i.slug))} className="block py-2.5 text-mist">
                    {i.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={href(locale, routes.industries)} className="mt-2 block py-2.5 font-medium text-paper">
                  {dict.common.allIndustries}
                </Link>
              </li>
            </ul>
          </details>
          {([
            ["work", routes.work],
            ["about", routes.about],
            ["approach", routes.approach],
            ["contact", routes.contact],
          ] as const).map(([key, path]) => (
            <Link key={key} href={href(locale, path)} className="border-b border-line-dark py-5 text-2xl font-semibold">
              {dict.nav[key]}
            </Link>
          ))}
          <div className="mt-auto pt-10">
            <Link
              href={href(locale, routes.contact)}
              className="flex min-h-14 items-center justify-center gap-2 rounded-full bg-ember text-lg font-semibold text-ink"
            >
              {dict.common.startProject}
              <ArrowUpRight className="flip-rtl size-5" aria-hidden="true" />
            </Link>
          </div>
        </nav>
      </div>
      ) : null}
    </>
  );
}
