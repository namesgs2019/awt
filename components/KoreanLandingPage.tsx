import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import type { KoreanPageData } from "@/data/koreanPages";

export function KoreanLandingPage({ page }: { page: KoreanPageData }) {
  return (
    <article lang="ko">
      <section className="page-hero hero-bg-ecm">
        <p>{page.eyebrow}</p>
        <h1>{page.h1}</h1>
        <p>{page.intro}</p>
        <div className="pill-list hero-pill-list" aria-label="Language links">
          <Link href={page.englishPath}>View English page</Link>
        </div>
      </section>

      <section className="band">
        <SectionTitle title="핵심 내용" description={page.description} />
        <div className="grid two">
          {page.sections.map((section) => (
            <article className="data-card" key={section.title}>
              <h3>{section.title}</h3>
              <p>{section.body}</p>
              {section.href && section.linkLabel ? <Link href={section.href}>{section.linkLabel}</Link> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="band contact-cta-band">
        <SectionTitle
          eyebrow="Project Inquiry"
          title="프로젝트 상담"
          description="원수 수질, 처리 목표, 적용 지역, 처리용량을 공유해 주시면 AWT가 적용 가능성을 검토합니다."
        />
        <div className="section-cta">
          <Link href="/contact">Contact AWT</Link>
        </div>
      </section>
    </article>
  );
}
