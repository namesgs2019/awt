"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { v2PartnershipTypes } from "@/data/v2";

const partnershipContacts = [
  ["Investment & Project Finance Inquiries", "lazarus@adwatertech.com"],
  ["Technical Partnership & EPC Inquiries", "dk@adwatertech.com"],
  ["HYDRO REPUBLIC Licensing Inquiries", "lazarus@adwatertech.com"]
];

export function PartnershipPageClient() {
  const partners = v2PartnershipTypes;
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const copyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(email);
      window.setTimeout(() => setCopiedEmail((current) => (current === email ? null : current)), 1600);
    } catch {
      setCopiedEmail(null);
    }
  };

  return (
    <>
      <section className="page-hero hero-bg-partnership">
        <p>Partnership</p>
        <h1>Partnership & Investors</h1>
        <p>AWT partners with investors, EPC firms, public-sector organizations, and licensing partners to scale ECM water infrastructure, including MOU-based cooperation in markets such as Vietnam.</p>
      </section>

      <section className="band">
        <SectionTitle title="Partner Types" />
        <div className="grid two">
          {partners.map((partner) => {
            const [title, summary, tags] = partner as [string, string, string[]];

            return (
              <article className="partner-card anchor-card" id={title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")} key={title}>
                <h2>{title}</h2>
                <p>{summary}</p>
                <div className="tag-row">
                  {tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="band soft">
        <SectionTitle
          eyebrow="Contact by Type"
          title="Partnership Inquiry Channels"
          description="Select the channel that best matches your partnership, project finance, licensing, or MOU cooperation context."
        />
        <div className="grid three">
          {partnershipContacts.map(([label, email]) => (
            <article className="partner-contact-card" key={label}>
              <h3>{label}</h3>
              <a
                className="copy-email-link"
                href={`mailto:${email}`}
                onClick={(event) => {
                  event.preventDefault();
                  copyEmail(email);
                }}
              >
                <span className="copy-email-text">{email}</span>
                <span className="copy-email-icon" aria-hidden="true">
                  {copiedEmail === email ? (
                    <svg viewBox="0 0 24 24" role="img">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" role="img">
                      <rect x="9" y="9" width="10" height="10" rx="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1" />
                    </svg>
                  )}
                </span>
                <span className="copy-email-feedback">{copiedEmail === email ? "Copied" : ""}</span>
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
