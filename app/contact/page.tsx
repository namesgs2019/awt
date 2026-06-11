"use client";

import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
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
