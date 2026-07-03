import type { Metadata } from "next";
import { HomePageClient } from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "AWT | Advanced Water Technology",
  description: "Advanced water treatment solutions for water reuse, wastewater treatment, ECM technology, and sustainable water management.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "AWT | Advanced Water Technology",
    description:
      "Advanced water treatment solutions for water reuse, wastewater treatment, ECM technology, and sustainable water management.",
    url: "https://adwatertech.com/",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "AWT | Advanced Water Technology",
    description:
      "Advanced water treatment solutions for water reuse, wastewater treatment, ECM technology, and sustainable water management.",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  }
};

export default function HomePage() {
  return <HomePageClient />;
}
