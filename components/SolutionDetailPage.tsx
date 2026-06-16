"use client";

import { ScrollableProcessImage } from "@/components/ScrollableProcessImage";
import { WaterReuseProcessVisuals } from "@/components/WaterReuseRemovalPhosphorus";
import { getSolutionPage, type SolutionSlug } from "@/data/solutionPages";

export function SolutionDetailPage({ slug }: { slug: SolutionSlug }) {
  const solution = getSolutionPage(slug);

  if (!solution) {
    return null;
  }

  return (
    <>
      <section className="page-hero solutions-hero hero-bg-solutions">
        <p>Solutions</p>
        <h1>{solution.title}</h1>
        <p>{solution.intro}</p>
        <div className="pill-list hero-pill-list">
          {solution.points.map((point) => <span key={point}>{point}</span>)}
        </div>
      </section>

      <section className="band solution-menu-stack">
        <article className="solution-menu-section anchor-card">
          {solution.image ? (
            <div className="solution-process-visual">
              <ScrollableProcessImage src={solution.image.src} alt={solution.image.alt} />
            </div>
          ) : null}

          {solution.slug === "water-reuse" ? (
            <div className="solution-process-visual">
              <WaterReuseProcessVisuals />
            </div>
          ) : null}

          {solution.related ? (
            <div className="solution-related-panel">
              <h2>{solution.related.title}</h2>
              <p>{solution.related.body}</p>
            </div>
          ) : null}
        </article>
      </section>
    </>
  );
}
