import type { Metadata } from "next";
import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";
import { assetPath } from "@/lib/assetPath";

export const metadata: Metadata = {
  title: "ECM Technology | AWT",
  description:
    "Explore AWT's ECM technology platform combining electrocoagulation, ceramic membrane filtration, water reuse optimization, and AI-based autonomous operation.",
  keywords: [
    "ECM technology",
    "electrocoagulation",
    "ceramic membrane filtration",
    "chemical-free water treatment",
    "water reuse optimization",
    "AI water treatment",
    "AWT"
  ],
  alternates: {
    canonical: "/ecm-technology/"
  },
  openGraph: {
    title: "ECM Technology | AWT",
    description:
      "AWT's ECM technology combines electrocoagulation and ceramic membrane filtration for chemical-free water purification and reuse.",
    url: "https://adwatertech.com/ecm-technology/",
    images: ["https://adwatertech.com/images/awt_open_graph_Open_img.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "ECM Technology | AWT",
    description:
      "AWT's ECM technology combines electrocoagulation and ceramic membrane filtration for chemical-free water purification and reuse.",
    images: ["https://adwatertech.com/images/awt_open_graph_Open_img.png"]
  }
};

const ecmSections = [
  ["What is ECM", "ECM combines electrocoagulation and ceramic membrane filtration to purify and reuse water without relying on chemical coagulants or disposable plastic membranes."],
  ["Electrocoagulation", "Electrical reactions aggregate pollutants, suspended solids, and phosphorus-related contaminants so they can be separated more efficiently."],
  ["Ceramic Membrane Filtration", "High-durability ceramic membranes provide stable filtration, high permeability, and efficient backwashing in demanding water conditions."],
  ["AI-Based Autonomous Operation", "AWT applies AI-based monitoring and control concepts to reduce operational complexity and improve process stability."],
  ["Water Reuse Optimization", "ECM improves RO feedwater quality, reduces fouling burden, and supports lower brine generation in reuse and desalination systems."],
  ["Materials & Components", "AWT develops ceramic membranes, electrodes, activated carbon, zeolite, alumina, and composite filtration materials for ECM systems."],
  ["Vessel-Integrated Ceramic Membrane Module", "A side-stream vessel-integrated module simplifies installation, expansion, maintenance, and operation for high-performance ceramic membrane systems."]
];

const visualEvidence = [
  {
    src: "/images/ecm-process-diagram.png",
    alt: "ECM process illustration showing pollutants, agglomeration, and separation",
    title: "ECM Process Concept"
  },
  {
    src: "/images/ecm-lab-result.png",
    alt: "Lab test comparison of wastewater, electrolyzed water, and ultrafiltrated water",
    title: "Lab Test Result"
  }
];

export default function ECMTechnologyPage() {
  return (
    <>
      <section className="page-hero hero-bg-ecm">
        <p>ECM Technology</p>
        <h1>Electrocoagulation + Ceramic Membrane</h1>
        <p>AWT's core technology platform for chemical-free water purification, reuse, and advanced pretreatment.</p>
      </section>

      <section className="band">
        <SectionTitle title="Technology Building Blocks" />
        <div className="grid two">
          {ecmSections.map(([title, body]) => (
            <article className="data-card" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="band soft">
        <SectionTitle title="Visual Evidence" />
        <div className="visual-evidence-grid">
          {visualEvidence.map((item) => (
            <figure className="visual-evidence-card" key={item.src}>
              <Image src={assetPath(item.src)} alt={item.alt} width={1200} height={760} />
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
