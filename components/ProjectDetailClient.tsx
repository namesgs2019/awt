"use client";

import { projects } from "@/data/projects";

export function ProjectDetailClient({ slug }: { slug: string }) {
  const sourceProject = projects.find((item) => item.slug === slug);

  if (!sourceProject) {
    return (
      <section className="page-hero">
        <p>Projects</p>
        <h1>Project not found</h1>
      </section>
    );
  }

  return (
    <>
      <section className="page-hero">
        <p>Projects</p>
        <h1>{sourceProject.title}</h1>
        {sourceProject.status ? <span className="status-badge project-status-badge">{sourceProject.status}</span> : null}
        <p>{sourceProject.summary}</p>
      </section>
      <section className="band">
        <article className="project-detail-card anchor-card">
          <div className="project-detail-copy">
            {sourceProject.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {sourceProject.performanceData ? (
            <section className="project-detail-section">
              <h2>Performance Data</h2>
              <div className="table-wrap">
                <table className="project-performance-table">
                  <thead>
                    <tr>
                      <th>Parameter</th>
                      <th>Verified Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sourceProject.performanceData.map((row) => (
                      <tr key={row.parameter}>
                        <th scope="row">{row.parameter}</th>
                        <td>{row.result}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ) : null}

          <section className="project-detail-section">
            <h2>Project Scope</h2>
            <div className="grid two">
              <div className="project-detail-list">
                <h3>Application Areas</h3>
                <ul>
                  {sourceProject.areas.map((area) => <li key={area}>{area}</li>)}
                </ul>
              </div>
              <div className="project-detail-list">
                <h3>Technology</h3>
                <ul>
                  {sourceProject.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </div>
            </div>
          </section>

          <section className="project-detail-section">
            <h2>{sourceProject.projectTags ? "Project Tags" : "Key Value"}</h2>
            <div className="tag-row project-tag-row">
              {(sourceProject.projectTags ?? sourceProject.values).map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </section>
        </article>
      </section>
    </>
  );
}
