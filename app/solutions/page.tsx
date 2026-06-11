import Link from "next/link";
import { BulletCard } from "@/components/Cards";
import { SectionTitle } from "@/components/SectionTitle";
import { solutionPages } from "@/data/solutionPages";

export default function SolutionsPage() {
  return (
    <>
      <section className="page-hero solutions-hero">
        <p>Solutions</p>
        <h1>ECM Solutions by Application</h1>
        <p>AWT organizes water infrastructure into five application categories so partners can quickly identify the right ECM pathway.</p>
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
