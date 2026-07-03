import type { Metadata } from "next";
import Link from "next/link";
import { BulletCard } from "@/components/Cards";
import { SectionTitle } from "@/components/SectionTitle";
import { solutionPages } from "@/data/solutionPages";

export const metadata: Metadata = {
  title: "Solutions | AWT ECM Water Treatment",
  description:
    "Browse AWT ECM solution categories for tap water, sewage treatment, industrial wastewater, water reuse, desalination, and pool and spa water purification.",
  keywords: [
    "AWT solutions",
    "ECM water treatment",
    "tap water purification",
    "sewage treatment",
    "industrial wastewater",
    "water reuse",
    "desalination",
    "pool water purification"
  ],
  alternates: {
    canonical: "/solutions/"
  },
  openGraph: {
    title: "Solutions | AWT ECM Water Treatment",
    description:
      "Explore AWT ECM solution categories for municipal, industrial, reuse, desalination, and pool and spa water treatment applications.",
    url: "https://adwatertech.com/solutions/",
    images: ["https://adwatertech.com/images/awt_open_graph_Open_img.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions | AWT ECM Water Treatment",
    description:
      "Explore AWT ECM solution categories for municipal, industrial, reuse, desalination, and pool and spa water treatment applications.",
    images: ["https://adwatertech.com/images/awt_open_graph_Open_img.png"]
  }
};

export default function SolutionsPage() {
  return (
    <>
      <section className="page-hero solutions-hero hero-bg-solutions">
        <p>Solutions</p>
        <h1>ECM Solutions by Application</h1>
        <p>AWT organizes water infrastructure into application categories so partners can quickly identify the right ECM pathway.</p>
      </section>

      <section className="band soft">
        <SectionTitle title="Solution Categories" />
        <div className="grid five v2-card-grid">
          {solutionPages.map((solution) => (
            <Link className="solution-landing-card" href={`/solutions/${solution.slug}`} key={solution.slug}>
              <BulletCard title={solution.title} summary={solution.summary} points={solution.points} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
