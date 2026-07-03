import type { Metadata } from "next";
import { SolutionDetailPage } from "@/components/SolutionDetailPage";

export const metadata: Metadata = {
  title: "Desalination Pretreatment | AWT ECM Solutions",
  description:
    "AWT supports desalination and high-salinity water treatment with ECM pretreatment and ceramic membrane filtration for improved feedwater quality and brine-oriented applications.",
  keywords: [
    "desalination",
    "desalination pretreatment",
    "brine treatment",
    "high salinity water",
    "Caspian desalination",
    "ECM technology",
    "ceramic membrane filtration",
    "AWT"
  ],
  alternates: {
    canonical: "/solutions/desalination/"
  },
  openGraph: {
    title: "Desalination Pretreatment | AWT",
    description:
      "ECM pretreatment and ceramic membrane filtration for desalination, brine management, and high-salinity water applications.",
    url: "https://adwatertech.com/solutions/desalination/",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Desalination Pretreatment | AWT",
    description:
      "ECM pretreatment and ceramic membrane filtration for desalination, brine management, and high-salinity water applications.",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  }
};

export default function DesalinationPage() {
  return <SolutionDetailPage slug="desalination" />;
}
