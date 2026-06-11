import { SectionTitle } from "@/components/SectionTitle";

const aboutBlocks = [
  {
    title: "Company Overview",
    body:
      "AWT (Advanced Water Technology) is a South Korean deep-tech company developing ECM — Electrocoagulation + Ceramic Membrane — water purification and reuse systems for industrial and municipal applications."
  },
  {
    title: "Our Technology",
    body:
      "AWT's ECM system integrates electrocoagulation with high-performance ceramic membrane filtration to deliver chemical-free, high-efficiency water treatment — without disposable plastic membranes, without chemical coagulants, and with significantly lower energy consumption than conventional systems."
  },
  {
    title: "Where We Work",
    body:
      "We develop water infrastructure solutions for water-stressed regions across Central Asia, Southeast Asia, Sub-Saharan Africa, and the Pacific — markets where water security is a critical challenge and where ECM technology delivers the most transformative impact."
  },
  {
    title: "Who We Work With",
    body:
      "Municipal governments · Industrial facilities · Impact investors · EPC firms · International development organizations"
  }
];

const team = [
  ["Name", "Chief Executive Officer", "Leads corporate strategy and global partnerships."],
  ["Name", "Chief Technology Officer", "Leads ECM technology development and system integration."],
  ["Name", "Chief Operating Officer", "Leads project execution, operations, and deployment."],
  ["Name", "Business Development Director", "Leads market development, partnerships, and strategic collaboration."]
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <p>About AWT</p>
        <h1>About AWT</h1>
        <p>Deep-tech water purification and reuse systems for industrial and municipal applications.</p>
      </section>

      <section className="band about-band">
        <SectionTitle title="About AWT" description="Deep-tech water purification and reuse systems for industrial and municipal applications." />
        <div className="about-grid">
          {aboutBlocks.map((block) => (
            <article className="about-card" key={block.title}>
              <h3>{block.title}</h3>
              <p>{block.body}</p>
            </article>
          ))}
        </div>
        <div className="team-section">
          <div className="section-title team-title">
            <span>Leadership Team</span>
            <h2>Leadership Team</h2>
            <p>A multidisciplinary team leading technology development, global partnerships, project execution, and business strategy.</p>
          </div>
          <div className="team-grid">
            {team.map(([name, role, description]) => (
              <article className="team-card" key={role}>
                <div className="team-avatar" aria-hidden="true">
                  {name.slice(0, 1)}
                </div>
                <h3>{name}</h3>
                <strong>{role}</strong>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
