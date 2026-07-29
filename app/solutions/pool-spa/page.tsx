import type { Metadata } from "next";
import Link from "next/link";
import { ElysianPoolCards } from "@/components/ElysianPoolCards";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Elysian Pool & Spa Water Purification | AWT",
  description:
    "Elysian combines advanced oxidation, electrocoagulation, and ceramic membrane filtration concepts for private pool, indoor pool, resort, wellness, and spa water purification.",
  keywords: [
    "pool water purification",
    "spa water treatment",
    "private pool water treatment",
    "indoor pool water treatment",
    "Elysian Pool & Spa",
    "electrocoagulation",
    "ceramic membrane filtration",
    "closed-loop water recirculation",
    "pool water reuse",
    "AWT"
  ],
  alternates: {
    canonical: "/solutions/pool-spa/",
    languages: {
      en: "/solutions/pool-spa/",
      ko: "/ko/solutions/pool-spa/",
      "x-default": "/solutions/pool-spa/"
    }
  },
  openGraph: {
    title: "Elysian Pool & Spa Water Purification | AWT",
    description:
      "Elysian combines advanced oxidation, electrocoagulation, and ceramic membrane filtration concepts for private pool, indoor pool, resort, wellness, and spa water purification.",
    url: "https://adwatertech.com/solutions/pool-spa/",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Elysian Pool & Spa Water Purification | AWT",
    description:
      "Elysian combines advanced oxidation, electrocoagulation, and ceramic membrane filtration concepts for private pool, indoor pool, resort, wellness, and spa water purification.",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  }
};

type PoolIconName =
  | "chemicalFree"
  | "clarity"
  | "maintenance"
  | "cost"
  | "skinEyes"
  | "compact"
  | "reuse"
  | "energy";

const heroTags = [
  "Reduced Chemical Dosing",
  "Elysian",
  "Pool Water Purification",
  "Closed-loop Recirculation",
  "Ceramic Membrane",
  "Water Reuse"
];

const processSteps: { image: string; alt: string; title: string; description: string }[] = [
  {
    image: "/images/solutions/Related_CWR.png",
    alt: "Advanced oxidation process stage illustration for Elysian pool water treatment",
    title: "AOP (Advanced Oxidation Process)",
    description:
      "Initiates oxidative reactions that break down fine organic contaminants before closed-loop water reaches the electro-coagulation stage."
  },
  {
    image: "/images/solutions/Related_EC.png",
    alt: "Electro-coagulation stage illustration for Elysian pool water treatment",
    title: "Electro-Coagulation (EC)",
    description:
      "Low-voltage electrical impulses aggregate suspended contaminants while reducing reliance on conventional chemical dosing."
  },
  {
    image: "/images/solutions/Related_CMF.png",
    alt: "Ceramic membrane filtration stage illustration for Elysian pool water treatment",
    title: "EM / Ceramic Membrane",
    description:
      "Ceramic membrane filtration forms the physical barrier, polishing water before continuous closed-loop recirculation."
  }
];

const features: { icon: PoolIconName; title: string; description: string }[] = [
  {
    icon: "chemicalFree",
    title: "Reduced Chemical Dosing",
    description: "Designed to reduce direct exposure to conventional pool and spa chemical dosing."
  },
  {
    icon: "clarity",
    title: "Crystal Clear Water",
    description: "Improves water clarity and supports stable water quality."
  },
  {
    icon: "maintenance",
    title: "Lower-Maintenance Design",
    description: "Designed to simplify routine operation when site water conditions are suitable."
  },
  {
    icon: "cost",
    title: "Reduced Chemical Handling",
    description: "May reduce recurring chemical handling requirements depending on site conditions."
  },
  {
    icon: "skinEyes",
    title: "Comfort-Oriented Water",
    description: "Supports a more comfortable swimming experience by reducing direct chemical exposure."
  },
  {
    icon: "compact",
    title: "Compact Elysian System",
    description: "Space-saving system design for easier installation in pool facilities."
  },
  {
    icon: "reuse",
    title: "Sustainable Water Reuse",
    description: "Closed-loop recirculation helps minimize water loss and waste."
  },
  {
    icon: "energy",
    title: "Energy Efficient",
    description: "Designed to support efficient and eco-conscious pool water operation."
  }
];

const comparisonRows = [
  ["Water Treatment", "Chemical dosing", "Reduced chemical dosing"],
  ["Maintenance", "Frequent maintenance", "Lower maintenance"],
  ["Sludge", "Higher sludge generation", "Reduced sludge generation"],
  ["Water Discharge", "Large volume discharge", "Closed-loop recirculation"],
  ["Swimmer Comfort", "Potential irritation from chemical exposure", "Designed for a more comfortable water experience"]
];

function PoolIcon({ name }: { name: PoolIconName }) {
  const commonProps = {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true
  };

  switch (name) {
    case "chemicalFree":
      return (
        <svg {...commonProps}>
          <path d="M18 7h12" />
          <path d="M21 7v10L13 34a5 5 0 0 0 4.5 7h13a5 5 0 0 0 4.5-7l-8-17V7" />
          <path d="m14 14 20 20" />
          <path d="M19 31h10" />
        </svg>
      );
    case "clarity":
      return (
        <svg {...commonProps}>
          <path d="M24 6c-5 7-10 12.5-10 19a10 10 0 0 0 20 0C34 18.5 29 13 24 6Z" />
          <path d="M36 8v8M32 12h8M12 31v6M9 34h6" />
        </svg>
      );
    case "maintenance":
      return (
        <svg {...commonProps}>
          <circle cx="24" cy="24" r="6" />
          <path d="M24 8v5M24 35v5M8 24h5M35 24h5M12.5 12.5l3.5 3.5M32 32l3.5 3.5M35.5 12.5 32 16M16 32l-3.5 3.5" />
        </svg>
      );
    case "cost":
      return (
        <svg {...commonProps}>
          <path d="M16 11h16a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V15a4 4 0 0 1 4-4Z" />
          <path d="M24 16v16M29 19h-7a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-7" />
          <path d="M10 10 38 38" />
        </svg>
      );
    case "skinEyes":
      return (
        <svg {...commonProps}>
          <path d="M6 24s7-10 18-10 18 10 18 10-7 10-18 10S6 24 6 24Z" />
          <circle cx="24" cy="24" r="5" />
          <path d="M16 38c4 3 12 3 16 0" />
        </svg>
      );
    case "compact":
      return (
        <svg {...commonProps}>
          <rect x="13" y="8" width="22" height="32" rx="4" />
          <path d="M18 15h12M18 22h12M18 29h7" />
          <circle cx="30" cy="31" r="2" />
        </svg>
      );
    case "reuse":
      return (
        <svg {...commonProps}>
          <path d="M16 18a12 12 0 0 1 20 7" />
          <path d="M36 25h-6M36 25v-6" />
          <path d="M32 30a12 12 0 0 1-20-7" />
          <path d="M12 23h6M12 23v6" />
          <path d="M24 18c-3 4-5 6-5 9a5 5 0 0 0 10 0c0-3-2-5-5-9Z" />
        </svg>
      );
    case "energy":
      return (
        <svg {...commonProps}>
          <path d="M19 31h10" />
          <path d="M20 37h8" />
          <path d="M17 22a7 7 0 1 1 14 0c0 4-3 6-4 9h-6c-1-3-4-5-4-9Z" />
          <path d="M26 8 21 21h7l-5 11" />
        </svg>
      );
  }
}

function PoolVisualIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <span className="pool-visual-icon">
      <img src={src} alt={alt} />
    </span>
  );
}

function PoolFeatureIcon({ name }: { name: PoolIconName }) {
  return (
    <span className="pool-feature-icon">
      <PoolIcon name={name} />
    </span>
  );
}

export default function PoolSpaPage() {
  return (
    <>
      <section className="page-hero solutions-hero hero-bg-solutions">
        <p>Solutions</p>
        <h1>Elysian Pool & Spa</h1>
        <p>
          Elysian Pool & Spa applies advanced oxidation, electro-coagulation, and ceramic membrane filtration concepts
          to private residences, indoor facilities, wellness pools, and spa water purification. Site-specific water
          testing and local regulation review are recommended before application.
        </p>
        <div className="pill-list hero-pill-list">
          {heroTags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </section>

      <section className="band solution-menu-stack pool-category-band">
        <article className="solution-menu-section anchor-card">
          <ElysianPoolCards />

          <div className="solution-related-panel pool-intro-panel">
            <p>
              Elysian applies AOP, electro-coagulation, and ceramic membrane filtration in a continuous closed-loop
              cycle - optimized for private pool and spa environments.
            </p>
          </div>
        </article>
      </section>

      <section className="band soft">
        <SectionTitle title="Related Process Direction" />
        <div className="pool-process-grid">
          {processSteps.map((step, index) => (
            <article className="card pool-process-card" key={step.title}>
              <PoolVisualIcon src={step.image} alt={step.alt} />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < processSteps.length - 1 ? <span className="pool-process-arrow" aria-hidden="true">{"\u2192"}</span> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="band">
        <SectionTitle title="Key Features" />
        <div className="grid four pool-feature-grid">
          {features.map((feature) => (
            <article className="card pool-feature-card" key={feature.title}>
              <PoolFeatureIcon name={feature.icon} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="band soft">
        <article className="card pool-private-panel">
          <div>
            <p className="section-eyebrow">Private Ownership</p>
            <h2>Why Private Ownership Changes Everything</h2>
            <p>
              Complete freedom from chlorine chemistry is not simply a premium upgrade you can buy for any pool. In
              many jurisdictions, public and commercial pools may be required by health codes to maintain a minimum
              chemical disinfectant residual, regardless of which treatment technology is used.
            </p>
            <p>
              A privately owned, single-family pool is different: because it serves only its owner and invited guests,
              it may fall outside those same requirements. Elysian was engineered specifically for that category.
            </p>
          </div>
          <blockquote>
            Owning a private pool was always a mark of exclusivity. Now, in a growing number of jurisdictions, it is
            also the only legal path to water this pure.
          </blockquote>
        </article>
      </section>

      <section className="band soft">
        <div className="pool-decision-grid">
          <div className="pool-comparison-column">
            <SectionTitle title="Why Elysian for Pools?" />
            <div className="pool-comparison-card">
              <div className="pool-comparison-table-wrap">
                <table className="pool-comparison-table">
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Conventional</th>
              <th>Elysian</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map(([category, conventional, ecmMini]) => (
                      <tr key={category}>
                        <th scope="row">{category}</th>
                        <td>{conventional}</td>
                        <td className="pool-ecm-cell">{ecmMini}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <aside className="pool-cta-panel">
            <h2>Interested in Elysian for your pool?</h2>
            <p>Contact AWT to discuss pilot applications, technical specifications, and partnership opportunities in your market.</p>
            <Link className="primary-link" href="/contact">
              Get in touch {"\u2192"}
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
