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
    "zero discharge",
    "ECM technology",
    "ceramic membrane filtration",
    "AWT"
  ],
  alternates: {
    canonical: "/solutions/industrial-wastewater/"
  },
  openGraph: {
    title: "Industrial Wastewater Treatment | AWT",
    description:
      "Advanced ECM-based industrial wastewater treatment and reuse solutions for complex industrial water streams.",
    url: "https://adwatertech.com/solutions/industrial-wastewater/",
    images: ["https://adwatertech.com/images/awt_open_graph_Open_img.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Wastewater Treatment | AWT",
    description:
      "Advanced ECM-based industrial wastewater treatment and reuse solutions for complex industrial water streams.",
    images: ["https://adwatertech.com/images/awt_open_graph_Open_img.png"]
  }
};

export default function IndustrialWastewaterPage() {
  return <SolutionDetailPage slug="industrial-wastewater" />;
}
