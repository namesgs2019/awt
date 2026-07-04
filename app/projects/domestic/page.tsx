import type { Metadata } from "next";
import { ProjectPipeline } from "@/components/ProjectPipeline";
import { v2Projects } from "@/data/v2";

export const metadata: Metadata = {
  title: "Domestic Projects | AWT",
  description:
    "Explore AWT's domestic project pipeline for ECM water treatment, industrial wastewater reuse, smart city water systems, and decentralized infrastructure.",
  alternates: {
    canonical: "/projects/domestic/"
  },
  openGraph: {
    title: "Domestic Projects | AWT",
    description:
      "AWT's domestic project pipeline covers ECM water treatment, reuse, smart city water systems, and decentralized infrastructure.",
    url: "https://adwatertech.com/projects/domestic/",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Domestic Projects | AWT",
    description:
      "AWT's domestic project pipeline covers ECM water treatment, reuse, smart city water systems, and decentralized infrastructure.",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  }
};

export default function DomesticProjectsPage() {
  return (
    <>
      <section className="page-hero hero-bg-projects">
        <p>Projects</p>
        <h1>Domestic Projects</h1>
        <p>Domestic under-discussion projects for ECM water treatment, reuse, and smart city infrastructure.</p>
      </section>
      <section className="band">
        <ProjectPipeline title="Domestic" rows={v2Projects.domestic} />
      </section>
    </>
  );
}
