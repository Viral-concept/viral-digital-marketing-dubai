import { ImageResponse } from "next/og";
import { site } from "@/config/site";
import { locales } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const alt = "Marketing, software and AI, engineered as one growth system.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social share image. Uses Latin text only, because the OG renderer does not shape Arabic
 * reliably; the Arabic page title and description still come from page metadata.
 */
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0c111c",
          color: "#f4efe7",
          padding: 72,
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <svg width="560" height="560" viewBox="0 0 600 600" style={{ position: "absolute", right: -60, top: 35 }}>
          <circle cx="300" cy="300" r="270" fill="none" stroke="#ff6a3d" strokeWidth="3" strokeDasharray="4 18" />
          <circle cx="300" cy="300" r="185" fill="#131a28" stroke="#8fb2ff" strokeWidth="3" />
          <circle cx="300" cy="300" r="100" fill="#0c111c" stroke="#5fe0c6" strokeWidth="3" />
          <circle cx="300" cy="300" r="14" fill="#f4efe7" />
          <circle cx="570" cy="300" r="12" fill="#ff6a3d" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 700 }}>
          <div style={{ display: "flex", fontSize: 30, letterSpacing: -0.5 }}>
            {site.brand.name.en} · {site.brand.descriptor.en}
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 76, lineHeight: 1.02, letterSpacing: -2.5, fontWeight: 700 }}>
            <span>Marketing, software and AI,</span>
            <span style={{ color: "#ff6a3d" }}>one growth system.</span>
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#a7b0c3" }}>Dubai · United Arab Emirates · English and Arabic</div>
        </div>
      </div>
    ),
    size,
  );
}
