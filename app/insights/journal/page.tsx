import type { Metadata } from "next";
import { InsightsList } from "@/components/InsightsList";

export const metadata: Metadata = {
  title: "Journal | AWT Insights",
  description: "Latest technical articles and research from AWT on water treatment, ECM technology, water reuse, and ceramic membrane solutions.",
  alternates: {
    canonical: "/insights/journal"
  }
};

export default function JournalPage() {
  return (
    <>
      <section className="page-hero insights-list-hero">
        <p>Insights</p>
        <h1>Journal</h1>
        <p>Latest technical articles and research from AWT.</p>
      </section>

      <section className="band soft">
        <InsightsList kind="journal" />
      </section>
    </>
  );
}
