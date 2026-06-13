import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Insights | AWT",
  description: "Technical journal and resources on AWT water treatment technologies, ECM, ceramic membrane filtration, and water reuse.",
  alternates: {
    canonical: "/insights"
  }
};

export default function InsightsPage() {
  redirect("/insights/journal");
}
