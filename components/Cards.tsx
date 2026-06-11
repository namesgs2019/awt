import Link from "next/link";
import type { ReactNode } from "react";
import { IconBadge } from "@/components/IconBadge";
import type { Project } from "@/data/projects";

export function FeatureCard({ title, children, icon }: { title: string; children: ReactNode; icon?: string }) {
  return (
    <article className="card">
      <IconBadge icon={icon} />
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}

export function BulletCard({ title, summary, points, icon }: { title: string; summary: string; points: string[]; icon?: string }) {
  return (
    <article className="card">
      <IconBadge icon={icon} />
      <h3>{title}</h3>
      <p>{summary}</p>
      <ul>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card project-card">
      <IconBadge icon="layers" />
      <span>Projects</span>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <Link href={`/projects/${project.slug}`}>View overview</Link>
    </article>
  );
}
