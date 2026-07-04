import type { Metadata } from "next";
import { ProjectDetailClient } from "@/components/ProjectDetailClient";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    return {
      title: "Project | AWT",
      description: "AWT project record and water treatment application data.",
      alternates: {
        canonical: "/projects/"
      }
    };
  }

  const url = `https://adwatertech.com/projects/${project.slug}/`;

  return {
    title: `${project.title} | AWT Projects`,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}/`
    },
    openGraph: {
      title: `${project.title} | AWT Projects`,
      description: project.summary,
      url,
      images: ["https://adwatertech.com/images/awt_logo.png"]
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | AWT Projects`,
      description: project.summary,
      images: ["https://adwatertech.com/images/awt_logo.png"]
    }
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  return <ProjectDetailClient slug={params.slug} />;
}
