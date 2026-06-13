import type { Metadata } from "next";
import { HomePageClient } from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "AWT | Advanced Water Technology",
  description: "Advanced water treatment solutions for water reuse, wastewater treatment, ECM technology, and sustainable water management.",
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  return <HomePageClient />;
}
