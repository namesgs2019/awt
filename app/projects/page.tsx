import type { Metadata } from "next";
import { ProjectPipeline } from "@/components/ProjectPipeline";
import { v2Projects } from "@/data/v2";

export const metadata: Metadata = {
  title: "Projects | AWT Global and Domestic Water Infrastructure",
  description:
    "Review AWT's global and domestic project pipeline for ECM water treatment, wastewater reuse, desalination, decentralized water infrastructure, and Vietnam Phu Tho Province cooperation contexts.",
  keywords: [
    "AWT projects",
    "water infrastructure",
    "ECM water treatment projects",
    "wastewater reuse",
    "desalination projects",
    "decentralized sewage treatment",
    "Vietnam water cooperation",
    "Phu Tho Province",
    "MOU water project"
  ],
  alternates: {
    canonical: "/projects/"
  },
  openGraph: {
    title: "Projects | AWT",
    description:
      "AWT's project pipeline covers global and domestic applications for ECM water treatment, reuse, desalination, decentralized infrastructure, and MOU-based cooperation.",
    url: "https://adwatertech.com/projects/",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | AWT",
    description:
      "AWT's project pipeline covers global and domestic applications for ECM water treatment, reuse, desalination, decentralized infrastructure, and MOU-based cooperation.",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  }
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero hero-bg-projects">
        <p>Projects</p>
        <h1>Project Pipeline</h1>
        <p>AWT organizes its active pipeline by global outreach, including Vietnam and Phu Tho Province cooperation contexts, and domestic under-discussion opportunities.</p>
      </section>
      <section className="band">
        <ProjectPipeline title="Global" rows={v2Projects.global} />
        <ProjectPipeline title="Domestic" rows={v2Projects.domestic} />
      </section>
    </>
  );
}
