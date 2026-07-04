import type { Metadata } from "next";
import { ProjectPipeline } from "@/components/ProjectPipeline";
import { v2Projects } from "@/data/v2";

export const metadata: Metadata = {
  title: "Global Projects | AWT",
  description:
    "Explore AWT's global water infrastructure project pipeline for ECM water treatment, desalination, sewage treatment, and water reuse applications.",
  alternates: {
    canonical: "/projects/global/"
  },
  openGraph: {
    title: "Global Projects | AWT",
    description:
      "AWT's global project pipeline covers ECM water treatment, reuse, desalination, and resilient water infrastructure.",
    url: "https://adwatertech.com/projects/global/",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Projects | AWT",
    description:
      "AWT's global project pipeline covers ECM water treatment, reuse, desalination, and resilient water infrastructure.",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  }
};

export default function GlobalProjectsPage() {
  return (
    <>
      <section className="page-hero hero-bg-projects">
        <p>Projects</p>
        <h1>Global Projects</h1>
        <p>Global outreach opportunities for ECM-based water treatment, desalination, and reuse infrastructure.</p>
      </section>
      <section className="band">
        <ProjectPipeline title="Global" rows={v2Projects.global} />
      </section>
    </>
  );
}
