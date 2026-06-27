"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const GA_MEASUREMENT_ID = "G-QSESC357QB";
const DOWNLOAD_EXTENSION_PATTERN = /\.(?:pdf|docx?|pptx?|xlsx?|zip)(?:[?#].*)?$/i;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function getAbsoluteUrl(href: string) {
  try {
    return new URL(href, window.location.href).toString();
  } catch {
    return href;
  }
}

function getFileName(fileUrl: string) {
  try {
    const url = new URL(fileUrl, window.location.href);
    const pathname = decodeURIComponent(url.pathname);
    return pathname.split("/").filter(Boolean).pop() || fileUrl;
  } catch {
    return fileUrl.split("/").filter(Boolean).pop() || fileUrl;
  }
}

export function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    const pagePath = window.location.pathname + window.location.search;

    window.gtag?.("config", GA_MEASUREMENT_ID, {
      page_path: pagePath
    });
  }, [pathname]);

  useEffect(() => {
    function handleDocumentClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (!link) {
        return;
      }

      const fileUrl = getAbsoluteUrl(link.getAttribute("href") || "");
      if (!DOWNLOAD_EXTENSION_PATTERN.test(fileUrl)) {
        return;
      }

      window.gtag?.("event", "file_download", {
        file_name: getFileName(fileUrl),
        file_url: fileUrl,
        page_path: window.location.pathname + window.location.search
      });
    }

    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}
