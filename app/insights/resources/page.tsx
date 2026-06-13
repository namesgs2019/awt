import type { Metadata } from "next";
import { InsightsList } from "@/components/InsightsList";

export const metadata: Metadata = {
  title: "Resources | AWT Insights",
  description: "Technical materials, references, and resources from AWT.",
  alternates: {
    canonical: "/insights/resources"
  }
};

export default function ResourcesPage() {
  return (
    <>
      <section className="page-hero insights-list-hero">
        <p>Insights</p>
        <h1>Resources</h1>
        <p>Technical materials and useful resources from AWT.</p>
      </section>

      <section className="band soft">
        <InsightsList kind="resources" />
      </section>
    </>
  );
}
