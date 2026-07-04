import { SectionTitle } from "@/components/SectionTitle";

export function ProjectPipeline({ title, rows }: { title: string; rows: string[][] }) {
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
