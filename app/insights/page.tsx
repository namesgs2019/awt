import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Insights | AWT",
  description: "Technical journal and resources on AWT water treatment technologies, ECM, ceramic membrane filtration, and water reuse.",
  alternates: {
    canonical: "/insights/"
  },
  openGraph: {
    title: "Insights | AWT",
    description:
      "Technical journal and resources on AWT water treatment technologies, ECM, ceramic membrane filtration, and water reuse.",
    url: "https://adwatertech.com/insights/",
    images: ["https://adwatertech.com/images/awt_open_graph_Open_img.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights | AWT",
    description:
      "Technical journal and resources on AWT water treatment technologies, ECM, ceramic membrane filtration, and water reuse.",
    images: ["https://adwatertech.com/images/awt_open_graph_Open_img.png"]
  }
};

export default function InsightsPage() {
  redirect("/insights/journal");
}
