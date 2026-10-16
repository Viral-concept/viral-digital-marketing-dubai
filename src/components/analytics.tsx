import Script from "next/script";
import { site } from "@/config/site";

/**
 * Loads Google Analytics 4 only when a measurement ID is configured.
 * Before enabling in production, connect a consent banner/CMP if your
 * privacy assessment requires prior consent for analytics cookies.
 */
export function Analytics() {
  const id = site.analytics.ga4Id;
  if (!id || process.env.NODE_ENV !== "production") return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}
