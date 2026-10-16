import type { Metadata } from "next";
import Link from "next/link";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const sans = Inter_Tight({ subsets: ["latin"], variable: "--font-sans-latin" });

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

/** Shown for URLs outside any locale. Bilingual because we cannot know the visitor's language. */
export default function GlobalNotFound() {
  return (
    <html lang="en" className={sans.variable}>
      <body className="grid min-h-dvh place-items-center bg-ink p-8 text-paper">
        <main className="max-w-xl text-center">
          <p className="font-mono text-sm text-ember">404</p>
          <h1 className="display mt-4 text-5xl">This page does not exist.</h1>
          <p lang="ar" dir="rtl" className="mt-4 text-xl text-mist">
            هذه الصفحة غير موجودة.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/en" className="rounded-full bg-paper px-6 py-3 font-semibold text-ink">
              English
            </Link>
            <Link href="/ar" lang="ar" className="rounded-full border border-line-dark px-6 py-3 font-semibold">
              العربية
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
