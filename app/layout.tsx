import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "AWT | Advanced Water Technology",
  description:
    "AWT provides advanced water treatment solutions based on ECM technology, ceramic membrane filtration, water reuse, phosphorus removal, and sustainable water management.",
  keywords: [
    "advanced water technology",
    "water treatment",
    "ECM technology",
    "electro-coagulation",
    "ceramic membrane",
    "water reuse",
    "phosphorus removal",
    "wastewater treatment",
    "sustainable water management",
    "AWT"
  ],
  metadataBase: new URL("https://adwatertech.com"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    title: "AWT | Advanced Water Technology",
    description:
      "Advanced water treatment solutions based on ECM technology, water reuse, ceramic membrane filtration, phosphorus removal, and sustainable water management.",
    url: "https://adwatertech.com",
    siteName: "AWT | Advanced Water Technology",
    images: [
      {
        url: "https://adwatertech.com/images/awt_open_graph_Open_img.png",
        width: 1200,
        height: 630,
        alt: "AWT Advanced Water Technology"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AWT | Advanced Water Technology",
    description:
      "Advanced water treatment solutions based on ECM technology, water reuse, ceramic membrane filtration, phosphorus removal, and sustainable water management.",
    images: ["https://adwatertech.com/images/awt_open_graph_Open_img.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
