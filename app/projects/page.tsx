"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { v2Projects } from "@/data/v2";

function ProjectPipeline({ title, rows }: { title: string; rows: string[][] }) {
  return (
    <section className="project-pipeline anchor-card" id={title.toLowerCase()}>
      <SectionTitle title={title} />
      <div className="grid two">
        {rows.map(([region, project, status, category, description]) => (
          <article className="pipeline-card" key={`${region}-${project}`}>
            <div className="pipeline-card-top">
              <span>{region}</span>
              <strong className="status-badge">{status}</strong>
            </div>
            <h3>{project}</h3>
            <p>{description}</p>
            <small>{category}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <p>Projects</p>
        <h1>Project Pipeline</h1>
        <p>AWT organizes its active pipeline by global outreach and domestic under-discussion opportunities.</p>
      </section>
      <section className="band">
        <ProjectPipeline title="Global" rows={v2Projects.global} />
        <ProjectPipeline title="Domestic" rows={v2Projects.domestic} />
      </section>
    </>
  );
}
