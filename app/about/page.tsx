import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "About AWT | Advanced Water Technology",
  description:
    "Learn about AWT (Advanced Water Technology), a South Korean ECM water treatment company developing electrocoagulation and ceramic membrane systems for water reuse, industrial water, and municipal applications.",
  keywords: [
    "AWT",
    "Advanced Water Technology",
    "about AWT",
    "ECM water treatment",
    "electrocoagulation",
    "ceramic membrane",
    "water reuse",
    "industrial water treatment"
  ],
  alternates: {
    canonical: "/about/"
  },
  openGraph: {
    title: "About AWT | Advanced Water Technology",
    description:
      "AWT develops ECM water treatment systems for water reuse, industrial water, and municipal infrastructure applications.",
    url: "https://adwatertech.com/about/",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "About AWT | Advanced Water Technology",
    description:
      "AWT develops ECM water treatment systems for water reuse, industrial water, and municipal infrastructure applications.",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  }
};

const aboutBlocks = [
  {
    title: "Company Overview",
    body:
      "AWT (Advanced Water Technology) is a South Korean deep-tech company developing ECM — Electrocoagulation + Ceramic Membrane — water purification and reuse systems for industrial and municipal applications."
  },
  {
    title: "Our Technology",
    body:
      "AWT's ECM system integrates electrocoagulation with high-performance ceramic membrane filtration to support chemical-reducing, high-efficiency water treatment with reduced reliance on disposable plastic membranes and chemical coagulants."
  },
  {
    title: "Where We Work",
    body:
      "We develop water infrastructure solutions for water-stressed regions across Central Asia, Southeast Asia, Sub-Saharan Africa, and the Pacific — markets where water security is a critical challenge and ECM technology can deliver meaningful impact."
  },
  {
    title: "Who We Work With",
    body:
      "Municipal governments · Industrial facilities · Impact investors · EPC firms · International development organizations"
  }
];

const team = [
  ["Name", "Chief Executive Officer", "Leads corporate strategy and global partnerships."],
  ["Name", "Chief Technology Officer", "Leads ECM technology development and system integration."],
  ["Name", "Chief Operating Officer", "Leads project execution, operations, and deployment."],
  ["Name", "Business Development Director", "Leads market development, partnerships, and strategic collaboration."]
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <p>About AWT</p>
        <h1>About AWT</h1>
        <p>Deep-tech water purification and reuse systems for industrial and municipal applications.</p>
      </section>

      <section className="band about-band">
        <SectionTitle title="About AWT" description="Deep-tech water purification and reuse systems for industrial and municipal applications." />
        <div className="about-grid">
          {aboutBlocks.map((block) => (
            <article className="about-card" key={block.title}>
              <h3>{block.title}</h3>
              <p>{block.body}</p>
            </article>
          ))}
        </div>
        <div className="team-section">
          <div className="section-title team-title">
            <span>Leadership Team</span>
            <h2>Leadership Team</h2>
            <p>A multidisciplinary team leading technology development, global partnerships, project execution, and business strategy.</p>
          </div>
          <div className="team-grid">
            {team.map(([name, role, description]) => (
              <article className="team-card" key={role}>
                <div className="team-avatar" aria-hidden="true">
                  {name.slice(0, 1)}
                </div>
                <h3>{name}</h3>
                <strong>{role}</strong>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
