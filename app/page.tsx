import type { Metadata } from "next";
import { HomePageClient } from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "AWT | ECM Water Treatment & Water Reuse Technology",
  description:
    "AWT develops ECM water treatment systems combining electrocoagulation and ceramic membrane filtration for industrial water, wastewater, water reuse, RO pretreatment, pools, and spas.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ko: "/ko/",
      "x-default": "/"
    }
  },
  openGraph: {
    title: "AWT | ECM Water Treatment & Water Reuse Technology",
    description:
      "AWT develops ECM water treatment systems combining electrocoagulation and ceramic membrane filtration for industrial water, wastewater, water reuse, RO pretreatment, pools, and spas.",
    url: "https://adwatertech.com/",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "AWT | ECM Water Treatment & Water Reuse Technology",
    description:
      "AWT develops ECM water treatment systems combining electrocoagulation and ceramic membrane filtration for industrial water, wastewater, water reuse, RO pretreatment, pools, and spas.",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  }
};

export default function HomePage() {
  return <HomePageClient />;
}
