import type { Metadata } from "next";
import { PartnershipPageClient } from "@/components/PartnershipPageClient";

export const metadata: Metadata = {
  title: "Partnership & Investors | AWT",
  description:
    "Partner with AWT to scale ECM water infrastructure through impact investment, EPC collaboration, municipal projects, and licensing opportunities.",
  keywords: [
    "AWT partnership",
    "water infrastructure investment",
    "EPC partnership",
    "municipal water projects",
    "licensing partners",
    "impact investors",
    "ECM technology"
  ],
  alternates: {
    canonical: "/partnership/"
  },
  openGraph: {
    title: "Partnership & Investors | AWT",
    description:
      "AWT partners with investors, EPC firms, municipalities, and licensing partners to scale ECM water infrastructure.",
    url: "https://adwatertech.com/partnership/",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Partnership & Investors | AWT",
    description:
      "AWT partners with investors, EPC firms, municipalities, and licensing partners to scale ECM water infrastructure.",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  }
};

export default function PartnershipPage() {
  return <PartnershipPageClient />;
}
