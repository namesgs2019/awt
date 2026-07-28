"use client";

import { useEffect, useMemo, useState } from "react";

type ElysianCard = {
  image: string;
  alt: string;
  title: string;
  summary: string;
  subtitle: string;
  body: string;
  keyPoints: string[];
  note?: string;
  quote?: string;
  stages?: {
    title: string;
    description: string;
  }[];
};

const elysianCards: ElysianCard[] = [
  {
    image: "/images/solutions/elysian1.png",
    alt: "Elysian chemical-free private pool water purification concept",
    title: "Open Your Eyes Underwater. Feel Nothing But Water.",
    summary: "Water pure enough to open your eyes in - chemical-free purification for private wellness pools.",
    subtitle: "A private pool experience without the sting, smell, or compromise.",
    body:
      "Elysian delivers chemical-free pool and spa water purification for private residences, indoor facilities, and estate-scale wellness environments. No chlorine. No plastics. No compromise - water pure enough to open your eyes in, sustained through continuous closed-loop recirculation.",
    keyPoints: [
      "Chemical-free purification experience",
      "Designed for private residential wellness pools",
      "Supports clear, comfortable water quality",
      "Sustained through closed-loop recirculation"
    ],
    note: "Concept visualization - AI-generated image, not an actual installed system."
  },
  {
    image: "/images/solutions/elysian2.png",
    alt: "Elysian residential indoor and outdoor luxury lifestyle pool concept",
    title: "Residential Indoor Pool / Luxury Lifestyle Pool",
    summary: "Invisible by design - Elysian disappears into private architecture, indoors and outdoors.",
    subtitle: "Invisible by design, indoors and outdoors.",
    body:
      "Elysian was designed for private estate environments where advanced water technology must not disrupt architectural beauty. For indoor and outdoor residential pools, the system is intended to blend into the surrounding design rather than appear as utility equipment.",
    keyPoints: [
      "Enclosed indoor spaces with discreet integration",
      "Outdoor lifestyle pools with architectural harmony",
      "Designed to reduce visible equipment impact",
      "Supports closed-loop purification without the equipment look"
    ],
    note: "Concept visualization - AI-generated images, not actual installed systems."
  },
  {
    image: "/images/solutions/elysian3.png",
    alt: "Elysian AOP electro-coagulation and ceramic membrane closed-loop process concept",
    title: "How Elysian Works - Three Core Stages",
    summary:
      "AOP, Electro-Coagulation, and Ceramic Membrane Filtration work together in a continuous closed-loop cycle.",
    subtitle: "AOP + EC + EM in one continuous closed-loop cycle.",
    body:
      "Elysian's A-ECM platform purifies pool and spa water through three sequential stages, continuously recirculated in a closed loop.",
    stages: [
      {
        title: "AOP (Advanced Oxidation Process)",
        description:
          "Generates powerful oxidative reactions that break down fine organic contaminants before they reach the next stage."
      },
      {
        title: "EC (Electro-Coagulation)",
        description:
          "Microscopic electrical impulses bind together suspended contaminants - no chemical dosing required."
      },
      {
        title: "EM (Ceramic Membrane Filtration / Ultrafiltration)",
        description:
          "A dense ceramic membrane physically filters out the coagulated solids - a chemical-free physical barrier."
      }
    ],
    keyPoints: [
      "Three-stage purification architecture",
      "No chemical dosing required in the Elysian treatment process",
      "Ceramic membrane physical barrier",
      "Continuous closed-loop recirculation"
    ]
  },
  {
    image: "/images/solutions/elysian4.png",
    alt: "Elysian private pool ownership chemical-dosing-free water concept",
    title: "Why Private Ownership Changes Everything",
    summary:
      "Private pool ownership may offer the clearest path to chemical-dosing-free water, subject to local regulations.",
    subtitle: "Chemical-dosing-free water is not only a technology issue. It can also be a regulatory category.",
    body:
      "Complete freedom from chlorine chemistry is not simply a premium upgrade that can be applied to every pool. In many jurisdictions, public and commercial pools may be required to maintain a minimum chemical disinfectant residual. A privately owned, single-family pool is different because it serves only its owner and invited guests, and may fall outside those same requirements.",
    keyPoints: [
      "Private ownership may offer greater treatment flexibility",
      "Public and commercial pools may be subject to local health-code requirements",
      "Elysian is engineered specifically for private pool environments",
      "Application should always be reviewed against local regulations"
    ],
    quote:
      "Owning a private pool was always a mark of exclusivity. Now, in a growing number of jurisdictions, it is also the only legal path to water this pure.",
    note: "Subject to local regulations."
  }
];

export function ElysianPoolCards() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeCard = useMemo(
    () => (activeIndex === null ? null : elysianCards[activeIndex] ?? null),
    [activeIndex]
  );

  useEffect(() => {
    if (!activeCard) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeCard]);

  return (
    <>
      <div className="grid four pool-gallery-grid">
        {elysianCards.map((item, index) => (
          <button
            className="card pool-photo-card elysian-card-button"
            key={item.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-haspopup="dialog"
          >
            <img src={item.image} alt={item.alt} />
            <div className="pool-photo-card-body">
              <span className="pool-card-category">ELYSIAN</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <span className="pool-mini-badge">ELYSIAN</span>
            </div>
          </button>
        ))}
      </div>

      {activeCard ? (
        <div className="elysian-modal-backdrop" role="presentation" onMouseDown={() => setActiveIndex(null)}>
          <section
            className="elysian-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="elysian-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="elysian-modal-close"
              type="button"
              aria-label="Close Elysian detail modal"
              onClick={() => setActiveIndex(null)}
            >
              X
            </button>
            <div className="elysian-modal-media">
              <img src={activeCard.image} alt={activeCard.alt} />
            </div>
            <div className="elysian-modal-content">
              <span className="pool-mini-badge">ELYSIAN</span>
              <h2 id="elysian-modal-title">{activeCard.title}</h2>
              <p className="elysian-modal-subtitle">{activeCard.subtitle}</p>
              <p>{activeCard.body}</p>

              {activeCard.stages ? (
                <ol className="elysian-modal-stages" aria-label="Elysian purification stages">
                  {activeCard.stages.map((stage) => (
                    <li key={stage.title}>
                      <strong>{stage.title}</strong>
                      <span>{stage.description}</span>
                    </li>
                  ))}
                </ol>
              ) : null}

              <h3>Key points</h3>
              <ul className="elysian-modal-points">
                {activeCard.keyPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              {activeCard.quote ? <blockquote className="elysian-modal-quote">{activeCard.quote}</blockquote> : null}
              {activeCard.note ? <p className="elysian-modal-note">{activeCard.note}</p> : null}
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
