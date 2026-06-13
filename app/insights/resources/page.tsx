import { InsightsList } from "@/components/InsightsList";

export default function ResourcesPage() {
  return (
    <>
      <section className="page-hero insights-list-hero">
        <nav className="insights-breadcrumb" aria-label="Breadcrumb">
          <span>Home</span>
          <span>Insights</span>
          <strong>Resources</strong>
        </nav>
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
