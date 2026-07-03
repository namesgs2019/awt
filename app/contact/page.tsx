import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact AWT | Advanced Water Technology",
  description:
    "Contact AWT to discuss ECM water treatment solutions, technical specifications, pilot applications, partnerships, and project opportunities.",
  keywords: [
    "contact AWT",
    "water treatment inquiry",
    "ECM technology contact",
    "water reuse project",
    "ceramic membrane partnership",
    "AWT"
  ],
  alternates: {
    canonical: "/contact/"
  },
  openGraph: {
    title: "Contact AWT | Advanced Water Technology",
    description:
      "Contact AWT for ECM water treatment solutions, pilot applications, partnerships, and project discussions.",
    url: "https://adwatertech.com/contact/",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact AWT | Advanced Water Technology",
    description:
      "Contact AWT for ECM water treatment solutions, pilot applications, partnerships, and project discussions.",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  }
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero hero-bg-contact">
        <p>Contact</p>
        <h1>Contact AWT</h1>
        <p>Send your inquiry to the AWT team through the form below.</p>
      </section>
      <section className="band contact-band">
        <ContactForm />
      </section>
    </>
  );
}
