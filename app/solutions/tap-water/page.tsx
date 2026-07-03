import type { Metadata } from "next";
import { SolutionDetailPage } from "@/components/SolutionDetailPage";

export const metadata: Metadata = {
  title: "Tap Water Purification | AWT ECM Solutions",
  description:
    "AWT provides ECM-based tap water purification, surface water treatment, groundwater treatment, and portable water treatment solutions using electrocoagulation and ceramic membrane filtration.",
  keywords: [
    "tap water purification",
    "surface water treatment",
    "groundwater treatment",
    "portable water treatment",
    "ECM technology",
    "electrocoagulation",
    "ceramic membrane filtration",
    "AWT"
  ],
  alternates: {
    canonical: "/solutions/tap-water/"
  },
  openGraph: {
    title: "Tap Water Purification | AWT",
    description:
      "ECM-based tap water purification and surface water treatment solutions using electrocoagulation and ceramic membrane filtration.",
    url: "https://adwatertech.com/solutions/tap-water/",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Tap Water Purification | AWT",
    description:
      "ECM-based tap water purification and surface water treatment solutions using electrocoagulation and ceramic membrane filtration.",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  }
};

export default function TapWaterPage() {
  return <SolutionDetailPage slug="tap-water" />;
}
