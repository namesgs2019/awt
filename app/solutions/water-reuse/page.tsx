import type { Metadata } from "next";
import { SolutionDetailPage } from "@/components/SolutionDetailPage";

export const metadata: Metadata = {
  title: "Water Reuse & Phosphorus Removal | AWT ECM Solutions",
  description:
    "AWT improves water reuse and phosphorus removal through ECM-based electrocoagulation, ceramic membrane filtration, RO feedwater optimization, and reduced chemical dependency.",
  keywords: [
    "water reuse",
    "phosphorus removal",
    "RO feedwater",
    "brine reduction",
    "ECM technology",
    "electrocoagulation",
    "ceramic membrane filtration",
    "AWT"
  ],
  alternates: {
    canonical: "/solutions/water-reuse/",
    languages: {
      en: "/solutions/water-reuse/",
      ko: "/ko/solutions/water-reuse/",
      "x-default": "/solutions/water-reuse/"
    }
  },
  openGraph: {
    title: "Water Reuse & Phosphorus Removal | AWT",
    description:
      "ECM-based water reuse and phosphorus removal solutions that improve RO feedwater quality and reduce chemical dependency.",
    url: "https://adwatertech.com/solutions/water-reuse/",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Reuse & Phosphorus Removal | AWT",
    description:
      "ECM-based water reuse and phosphorus removal solutions that improve RO feedwater quality and reduce chemical dependency.",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  }
};

export default function WaterReusePage() {
  return <SolutionDetailPage slug="water-reuse" />;
}
