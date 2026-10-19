import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { IBM_Plex_Sans_Arabic, Instrument_Serif, Inter_Tight } from "next/font/google";
import "../globals.css";
import { isLocale, localeMeta, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { site } from "@/config/site";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { RevealObserver } from "@/components/reveal-observer";
import { Analytics } from "@/components/analytics";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { navData } from "@/lib/nav-data";

const sansLatin = Inter_Tight({ subsets: ["latin"], variable: "--font-sans-latin", display: "swap" });
const serifLatin = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif-latin",
  display: "swap",
});
const sansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-arabic",
  display: "swap",
  preload: false,
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const brand = site.brand.name[locale];
  return {
    metadataBase: new URL(site.url),
    title: { default: brand, template: `%s | ${brand}` },
    applicationName: brand,
    formatDetection: { telephone: false },
  };
}

const noJsStyles =
  ".js [data-reveal],.js .word-reveal .w{opacity:1!important;transform:none!important;clip-path:none!important}";

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const { dir } = localeMeta[locale];

  return (
    <html
      lang={locale}
      dir={dir}
      className={`js ${sansLatin.variable} ${serifLatin.variable} ${sansArabic.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Reveal animations start hidden under html.js. Without JavaScript the browser renders this
            noscript style, so all content stays visible. No inline script needed, which React would
            warn about when the layout re-renders on the client (for example when switching language). */}
        <noscript>
          <style>{noJsStyles}</style>
        </noscript>
      </head>
      <body className="min-h-dvh overflow-x-clip">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-paper focus:px-5 focus:py-3 focus:text-ink"
        >
          {dict.common.skipToContent}
        </a>
        <Header locale={locale} dict={dict} nav={navData(locale, services, industries)} />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer locale={locale} dict={dict} />
        <WhatsAppButton label={dict.common.whatsapp} message={dict.common.whatsappMessage} />
        <RevealObserver />
        <Analytics />
      </body>
    </html>
  );
}
