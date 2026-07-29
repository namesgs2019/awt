import type { Metadata } from "next";
import { SolutionDetailPage } from "@/components/SolutionDetailPage";

export const metadata: Metadata = {
  title: "Industrial Wastewater Treatment | AWT ECM Solutions",
  description:
    "AWT provides industrial wastewater treatment and reuse solutions for complex wastewater streams using ECM pretreatment, electrocoagulation, and ceramic membrane filtration.",
  keywords: [
    "industrial wastewater treatment",
    "wastewater reuse",
    "oil sands produced water",
    "livestock wastewater",
    "plasma wastewater treatment",
    "ECM technology",
    "ceramic membrane filtration",
    "AWT"
  ],
  alternates: {
    canonical: "/solutions/industrial-wastewater/",
    languages: {
      en: "/solutions/industrial-wastewater/",
      ko: "/ko/solutions/industrial-wastewater/",
      "x-default": "/solutions/industrial-wastewater/"
    }
  },
  openGraph: {
    title: "Industrial Wastewater Treatment | AWT",
    description:
      "Advanced ECM-based industrial wastewater treatment and reuse solutions for complex industrial water streams.",
    url: "https://adwatertech.com/solutions/industrial-wastewater/",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Wastewater Treatment | AWT",
    description:
      "Advanced ECM-based industrial wastewater treatment and reuse solutions for complex industrial water streams.",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  }
};

export default function IndustrialWastewaterPage() {
  return <SolutionDetailPage slug="industrial-wastewater" />;
}
