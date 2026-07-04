import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Pilots & Applications | AWT Verification Data",
  description:
    "AWT pilot and application records are available at the canonical Pilots & Applications page.",
  alternates: {
    canonical: "/pilots/"
  },
  openGraph: {
    title: "Pilots & Applications | AWT Verification Data",
    description:
      "AWT pilot and application records are available at the canonical Pilots & Applications page.",
    url: "https://adwatertech.com/pilots/",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilots & Applications | AWT Verification Data",
    description:
      "AWT pilot and application records are available at the canonical Pilots & Applications page.",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  }
};

export default function PilotsApplicationsRedirectPage() {
  redirect("/pilots/");
}
