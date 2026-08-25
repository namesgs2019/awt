import type { Metadata } from "next";
import { HomePageClient } from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "AWT | ECM Water Treatment & Water Reuse Technology",
  description:
    "AWT (Advanced Water Technology) develops ECM water treatment systems for industrial water, wastewater, water reuse, RO pretreatment, pools, spas, and global cooperation including Vietnam and Phu Tho Province.",
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
      "AWT develops ECM water treatment systems for industrial water, wastewater, water reuse, RO pretreatment, pools, spas, and global cooperation including Vietnam and Phu Tho Province.",
    url: "https://adwatertech.com/",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "AWT | ECM Water Treatment & Water Reuse Technology",
    description:
      "AWT develops ECM water treatment systems for industrial water, wastewater, water reuse, RO pretreatment, pools, spas, and global cooperation including Vietnam and Phu Tho Province.",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  }
};

export default function HomePage() {
  return <HomePageClient />;
}
