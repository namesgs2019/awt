"use client";

import { DataTable } from "@/components/DataTable";
import { SectionTitle } from "@/components/SectionTitle";
import { industrialPilotKeywords, pilots } from "@/data/pilots";

const pilotIds = ["ministry-verification", "hospital-wastewater", "phosphorus-water-reuse", "surface-water-purification"];

export default function PilotsApplicationsPage() {
  return (
    <>
      <section className="page-hero hero-bg-pilots">
        <p>Pilots & Applications</p>
        <h1>Verification Data and Application Records</h1>
        <p>AWT pilot content is organized around measured before/after data and application keywords from the PDF source.</p>
      </section>
      <section className="band">
        <div className="pilot-stack">
          {pilots.map((pilot, index) => (
            <article className="data-card" id={pilotIds[index]} key={pilot.title}>
              <span className="icon-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M5 19H19V21H3V3H5V19ZM7 17V11H10V17H7ZM12 17V7H15V17H12ZM17 17V13H20V17H17Z" /></svg>
              </span>
              <SectionTitle title={pilot.title} description={pilot.description} />
              <DataTable columns={pilot.columns} rows={pilot.rows} />
            </article>
          ))}
        </div>
      </section>
      <section className="band soft" id="industrial-wastewater-treatment">
        <SectionTitle title="Industrial Wastewater Treatment" description="Pilot process keywords from the source material." />
        <div className="pill-list">
          {industrialPilotKeywords.map((keyword) => (
            <span key={keyword}>{keyword}</span>
          ))}
        </div>
      </section>
    </>
  );
}
