import type { Metadata } from "next";
import { BulletCard } from "@/components/Cards";
import { SectionTitle } from "@/components/SectionTitle";
import { slugify } from "@/data/navigation";
import { materials } from "@/data/materials";

export const metadata: Metadata = {
  title: "Materials | AWT Ceramic Membranes and Components",
  description:
    "Learn about AWT's ceramic membranes, electrodes, activated carbon, zeolite, alumina, and composite filtration materials for ECM water treatment systems.",
  keywords: [
    "ceramic membrane",
    "water treatment materials",
    "electrodes",
    "activated carbon",
    "zeolite filtration",
    "alumina",
    "ECM components",
    "AWT"
  ],
  alternates: {
    canonical: "/materials/"
  },
  openGraph: {
    title: "Materials | AWT",
    description:
      "AWT develops ceramic membranes, electrodes, and composite filtration materials for ECM water treatment systems.",
    url: "https://adwatertech.com/materials/",
    images: ["https://adwatertech.com/images/awt_open_graph_Open_img.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Materials | AWT",
    description:
      "AWT develops ceramic membranes, electrodes, and composite filtration materials for ECM water treatment systems.",
    images: ["https://adwatertech.com/images/awt_open_graph_Open_img.png"]
  }
};

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
