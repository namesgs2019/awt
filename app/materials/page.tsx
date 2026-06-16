"use client";

import { BulletCard } from "@/components/Cards";
import { SectionTitle } from "@/components/SectionTitle";
import { slugify } from "@/data/navigation";
import { materials } from "@/data/materials";

const materialIcons = ["layers", "atom", "zap", "cpu"];

export default function MaterialsPage() {
  return (
    <>
      <section className="page-hero materials-hero hero-bg-materials">
        <p>Materials</p>
        <h1>Ceramic Membranes, Electrodes, and Composite Filtration Materials</h1>
        <p>AWT develops core materials, components, and modules that support ECM water treatment systems.</p>
      </section>
      <section className="band">
        <SectionTitle title="Materials & Components" />
        <div className="grid two">
          {materials.map((material, index) => (
            <div id={slugify(material.title)} key={material.title} className="anchor-card">
              <BulletCard title={material.title} summary={material.summary} points={material.points} icon={materialIcons[index]} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
