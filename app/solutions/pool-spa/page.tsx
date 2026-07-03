import type { Metadata } from "next";
import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Pool & Spa Water Purification | AWT ECM Mini",
  description:
    "AWT provides chemical-free pool and spa water purification using ECM Mini, electrocoagulation, ceramic membrane filtration, and closed-loop water recirculation for private pools, indoor facilities, resorts, and wellness environments.",
  keywords: [
    "pool water purification",
    "spa water treatment",
    "chemical-free pool treatment",
    "chlorine-free pool",
    "ECM Mini",
    "electrocoagulation",
    "ceramic membrane filtration",
    "closed-loop water recirculation",
    "pool water reuse",
    "AWT"
  ],
  alternates: {
    canonical: "/solutions/pool-spa/"
  },
  openGraph: {
    title: "Pool & Spa Water Purification | AWT",
    description:
      "Chemical-free pool and spa water purification powered by ECM Mini, combining electrocoagulation, ceramic membrane filtration, and closed-loop recirculation.",
    url: "https://adwatertech.com/solutions/pool-spa/",
    images: ["https://adwatertech.com/images/awt_open_graph_Open_img.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pool & Spa Water Purification | AWT",
    description:
      "Chemical-free pool and spa water purification powered by ECM Mini, combining electrocoagulation, ceramic membrane filtration, and closed-loop recirculation.",
    images: ["https://adwatertech.com/images/awt_open_graph_Open_img.png"]
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
  "Chemical-free Treatment",
  "ECM Mini",
  "Pool Water Purification",
  "Closed-loop Recirculation",
  "Ceramic Membrane",
  "Water Reuse"
];

const galleryItems = [
  {
    image: "/images/solutions/Pool_indoor.jpg",
    category: "Private Pool (Indoor)",
    title: "Residential Indoor Pool",
    description: "Enclosed space - Chemical-free purification"
  },
  {
    image: "/images/solutions/Pool_lap.jpg",
    category: "Lap & Fitness Pool",
    title: "Athletic & Training Pool",
    description: "Daily use - Skin-safe water for swimmers"
  },
  {
    image: "/images/solutions/Pool_spa.jpg",
    category: "Resort & Spa",
    title: "Resort-Scale Outdoor Pool",
    description: "Large volume - Zero chemical dosing"
  },
  {
    image: "/images/solutions/Pool_outdoor.jpg",
    category: "Private Pool (Outdoor)",
    title: "Luxury Lifestyle Pool",
    description: "Wellness-driven - Closed-loop water recirculation"
  }
];

const processSteps: { image: string; alt: string; title: string; description: string }[] = [
  {
    image: "/images/solutions/Related_EC.png",
    alt: "Electrocoagulation process illustration for pool water treatment",
    title: "Electrocoagulation (EC)",
    description:
      "Uses low-voltage current to destabilise and aggregate suspended particles, bacteria, and organic contaminants without chemical dosing."
  },
  {
    image: "/images/solutions/Related_CMF.png",
    alt: "Ceramic membrane filtration process illustration for pool water treatment",
    title: "Ceramic Membrane Filtration",
    description:
      "Durable ceramic membrane filtration removes remaining solids and helps maintain cleaner, clearer pool water quality."
  },
  {
    image: "/images/solutions/Related_CWR.png",
    alt: "Closed-loop water recirculation process illustration for pool water reuse",
    title: "Closed-loop Water Recirculation",
    description:
      "Purified water is continuously recirculated to reduce water loss and support efficient, sustainable pool operation."
  }
];

const features: { icon: PoolIconName; title: string; description: string }[] = [
  {
    icon: "chemicalFree",
    title: "Chemical-free Treatment",
    description: "No chlorine or chemical dosing for safer pool and spa water."
  },
  {
    icon: "clarity",
    title: "Crystal Clear Water",
    description: "Improves water clarity and supports stable water quality."
  },
  {
    icon: "maintenance",
    title: "Low Maintenance",
    description: "Reduces cleaning frequency and simplifies daily operation."
  },
  {
    icon: "cost",
    title: "Reduced Chemical Cost",
    description: "Helps reduce recurring chemical purchasing and handling costs."
  },
  {
    icon: "skinEyes",
    title: "Safe for Skin & Eyes",
    description: "Gentle and comfortable water experience for swimmers of all ages."
  },
  {
    icon: "compact",
    title: "Compact ECM MINI",
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
  ["Water Treatment", "Chemical dosing", "Chemical-free treatment"],
  ["Maintenance", "Frequent maintenance", "Lower maintenance"],
  ["Sludge", "Higher sludge generation", "Reduced sludge generation"],
  ["Water Discharge", "Large volume discharge", "Closed-loop recirculation"],
  ["Health Impact", "Irritation risk", "Safer for skin & eyes"]
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
        <h1>Pool & Spa</h1>
        <p>
          Chemical-free pool and spa water purification for private residences, indoor facilities, and resort-scale
          applications - powered by ECM Mini. No chlorine, no plastics, and zero water discharged through continuous
          closed-loop recirculation.
        </p>
        <div className="pill-list hero-pill-list">
          {heroTags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </section>

      <section className="band solution-menu-stack pool-category-band">
        <article className="solution-menu-section anchor-card">
          <div className="grid four pool-gallery-grid">
            {galleryItems.map((item) => (
              <article className="card pool-photo-card" key={item.title}>
                <img src={item.image} alt={item.title} />
                <div className="pool-photo-card-body">
                  <span className="pool-card-category">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="pool-mini-badge">ECM MINI</span>
                </div>
              </article>
            ))}
          </div>

          <div className="solution-related-panel pool-intro-panel">
            <p>
              ECM Mini applies the same advanced electrocoagulation and ceramic membrane technology used in industrial
              water treatment - optimized for modern pool and spa environments.
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
        <div className="pool-decision-grid">
          <div className="pool-comparison-column">
            <SectionTitle title="Why ECM for Pools?" />
            <div className="pool-comparison-card">
              <div className="pool-comparison-table-wrap">
                <table className="pool-comparison-table">
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Conventional</th>
                      <th>ECM Mini</th>
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
            <h2>Interested in ECM Mini for your pool?</h2>
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
