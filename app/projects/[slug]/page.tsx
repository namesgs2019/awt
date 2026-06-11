import { ProjectDetailClient } from "@/components/ProjectDetailClient";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  return <ProjectDetailClient slug={params.slug} />;
}

