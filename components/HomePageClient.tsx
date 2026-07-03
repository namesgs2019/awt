"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FeatureCard } from "@/components/Cards";
import { SectionTitle } from "@/components/SectionTitle";
import { v2CoreFeatures, v2Home, v2PartnershipTypes, v2Projects, v2Solutions, v2Team } from "@/data/v2";
import { assetPath } from "@/lib/assetPath";

const featureIcons = ["droplet", "waves", "recycle", "cpu"];

export function HomePageClient() {
  const home = v2Home;
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const features = v2CoreFeatures;
  const solutions = v2Solutions;
  const partners = v2PartnershipTypes;
  const team = v2Team;
  const featuredProjects = [...v2Projects.global.slice(0, 3), ...v2Projects.domestic.slice(0, 1)];
  const heroHighlight = home.heroHighlight;
  const heroIntro = home.heroIntro;
  const heroVideoCta = home.heroVideoCta;
  const coreTitle = "Core Message";
  const coreDescription = "This section remains unchanged from the current homepage. The four feature cards are retained as-is.";

  useEffect(() => {
    if (!isVideoOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsVideoOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVideoOpen]);

  return (
    <>
      <section className="hero v2-hero">
        <Image src={assetPath("/images/awt-hero-water-technology.png")} alt="Advanced water treatment facility" fill priority />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="sr-only">Advanced Water Technology for Chemical-free Water Treatment</h1>
          <p>Advanced Water Technology</p>
          <strong className="hero-highlight">{heroHighlight}</strong>
          {heroIntro.map((paragraph) => (
            <p className="hero-copy" key={paragraph}>{paragraph}</p>
          ))}
          <div className="hero-actions">
            <Link href="/ecm-technology">{home.primaryCta}</Link>
            <Link href="/partnership">{home.secondaryCta}</Link>
          </div>
          <button className="video-cta" type="button" onClick={() => setIsVideoOpen(true)}>
            {heroVideoCta}
          </button>
        </div>
      </section>

      <section className="mobile-hero-copy-panel" aria-label="Advanced Water Technology introduction">
        <strong>{heroHighlight}</strong>
        {heroIntro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      {isVideoOpen ? (
        <div className="video-modal" role="dialog" aria-modal="true" aria-label="Ceramic membrane backwashing video" onClick={() => setIsVideoOpen(false)}>
          <div className="video-modal-panel" onClick={(event) => event.stopPropagation()}>
            <button className="video-modal-close" type="button" onClick={() => setIsVideoOpen(false)} aria-label="Close video">
              Close
            </button>
            <video autoPlay muted playsInline controls className="video-modal-player">
              <source src="/movie/backwashing.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      ) : null}

      <section className="band">
        <SectionTitle eyebrow="Core Message" title={coreTitle} description={coreDescription} />
        <div className="grid four">
          {features.map(([title, description], index) => (
            <FeatureCard key={title} title={title} icon={featureIcons[index]}>
              {description}
            </FeatureCard>
          ))}
        </div>
      </section>

      <section className="band soft">
        <SectionTitle eyebrow="Solutions" title={home.solutionsTitle} description="Five application categories organize AWT's ECM systems by water infrastructure need." />
        <div className="grid five v2-card-grid">
          {solutions.map((solution) => (
            <Link className="v2-summary-card" href={`/solutions/${solution.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`} key={solution.title}>
              <h3>{solution.title}</h3>
              <p>{solution.summary}</p>
              <span>{solution.points.slice(0, 3).join(" · ")}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="band">
        <SectionTitle eyebrow="Projects" title={home.projectsTitle} description="A ten-project pipeline spanning global outreach and domestic under-discussion opportunities." />
        <div className="grid four">
          {featuredProjects.map(([region, project, status, category, description]) => (
            <article className="pipeline-card" key={`${region}-${project}`}>
              <span className="status-badge">{status}</span>
              <h3>{project}</h3>
              <p>{description}</p>
              <small>{region} · {category}</small>
            </article>
          ))}
        </div>
        <div className="section-cta">
          <Link href="/projects">View project pipeline</Link>
        </div>
      </section>

      <section className="band soft">
        <SectionTitle eyebrow="Partnership" title={home.partnershipTitle} description="AWT works with finance, engineering, public-sector, and licensing partners to scale ECM systems." />
        <div className="grid four">
          {partners.map((partner) => {
            const [title, summary, tags] = partner as [string, string, string[]];

            return (
              <article className="partner-card" key={title}>
                <h3>{title}</h3>
                <p>{summary}</p>
                <div className="tag-row">
                  {tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            );
          })}
        </div>
        <div className="section-cta">
          <Link href="/partnership">Partner with AWT</Link>
        </div>
      </section>

      <section className="band">
        <SectionTitle eyebrow="Team" title={home.teamTitle} description="AWT combines core ECM invention, applied engineering, finance, and global project development." />
        <div className="grid two">
          {team.map((member) => (
            <article className="team-profile-card" key={member.name}>
              <h3>{member.name}</h3>
              <strong>{member.role}</strong>
              <p>{member.summary}</p>
            </article>
          ))}
        </div>
        <div className="section-cta">
          <Link href="/team">Meet the team</Link>
        </div>
      </section>

      <section className="band contact-cta-band">
        <SectionTitle eyebrow="Contact" title={home.contactTitle} description="Use the contact form to share project details, technical requirements, or partnership context." />
        <div className="section-cta">
          <Link href="/contact">Contact AWT</Link>
        </div>
      </section>
    </>
  );
}

