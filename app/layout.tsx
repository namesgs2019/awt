import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "AWT | ECM Water Treatment & Water Reuse Technology",
  description:
    "AWT develops ECM water treatment systems combining electrocoagulation and ceramic membrane filtration for industrial water, wastewater, water reuse, RO pretreatment, pools, and spas.",
  metadataBase: new URL("https://adwatertech.com"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ko: "/ko/",
      "x-default": "/"
    }
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico"
  },
  openGraph: {
    type: "website",
    title: "AWT | ECM Water Treatment & Water Reuse Technology",
    description:
      "AWT develops ECM water treatment systems combining electrocoagulation and ceramic membrane filtration for industrial water, wastewater, water reuse, RO pretreatment, pools, and spas.",
    url: "https://adwatertech.com",
    siteName: "AWT | Advanced Water Technology",
    images: [
      {
        url: "https://adwatertech.com/images/awt_logo.png",
        width: 1200,
        height: 630,
        alt: "AWT Advanced Water Technology logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AWT | Advanced Water Technology",
    description:
      "AWT develops ECM water treatment systems combining electrocoagulation and ceramic membrane filtration for industrial water, wastewater, water reuse, RO pretreatment, pools, and spas.",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  }
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://adwatertech.com/#organization",
  name: "AWT",
  alternateName: "Advanced Water Technology",
  url: "https://adwatertech.com",
  logo: "https://adwatertech.com/images/awt_logo.png",
  description:
    "AWT (Advanced Water Technology) develops ECM-based water treatment systems that combine electrocoagulation and ceramic membrane filtration for water purification, industrial water, wastewater treatment, water reuse, desalination pretreatment, and pool and spa applications.",
  knowsAbout: [
    "ECM water treatment",
    "Electrocoagulation",
    "Ceramic membrane filtration",
    "Industrial water treatment",
    "Industrial wastewater treatment",
    "Water reuse",
    "RO pretreatment",
    "Pool and spa water treatment"
  ]
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://adwatertech.com/#website",
  name: "AWT",
  alternateName: "Advanced Water Technology",
  url: "https://adwatertech.com",
  publisher: {
    "@id": "https://adwatertech.com/#organization"
  },
  inLanguage: "en"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationJsonLd, websiteJsonLd]) }}
        />
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
