import { InsightsList } from "@/components/InsightsList";

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
