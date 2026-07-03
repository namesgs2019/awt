import type { Metadata } from "next";
import { SolutionDetailPage } from "@/components/SolutionDetailPage";

export const metadata: Metadata = {
  title: "Sewage Treatment | AWT ECM Solutions",
  description:
    "AWT delivers ECM-based sewage treatment solutions for municipal sewage, decentralized facilities, hospital wastewater, and pilot-scale applications.",
  keywords: [
    "sewage treatment",
    "municipal wastewater",
    "decentralized sewage treatment",
    "hospital wastewater",
    "ECM technology",
    "electrocoagulation",
    "ceramic membrane",
    "AWT"
  ],
  alternates: {
    canonical: "/solutions/sewage-treatment/"
  },
  openGraph: {
    title: "Sewage Treatment | AWT",
    description:
      "ECM-based sewage treatment for municipal, decentralized, hospital, and pilot-scale water infrastructure.",
    url: "https://adwatertech.com/solutions/sewage-treatment/",
    images: ["https://adwatertech.com/images/awt_open_graph_Open_img.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sewage Treatment | AWT",
    description:
      "ECM-based sewage treatment for municipal, decentralized, hospital, and pilot-scale water infrastructure.",
    images: ["https://adwatertech.com/images/awt_open_graph_Open_img.png"]
  }
};

export default function SewageTreatmentPage() {
  return <SolutionDetailPage slug="sewage-treatment" />;
}
