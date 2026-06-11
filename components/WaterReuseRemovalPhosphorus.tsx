"use client";

import { ZoomableImage } from "@/components/ZoomableImage";

const processBoards = [
  {
    title: "General Process (Chemical Coagulation+RO)",
    label: "Conventional water reuse process",
    src: "/images/solutions/general-process-board.png",
    alt:
      "General Process board showing effluent branching to chemical coagulation, RO, water reuse, and Brine 30,000m3/d"
  },
  {
    title: "Proposed Process (ECM+RO)",
    label: "AWT proposed ECM process",
    src: "/images/solutions/proposed-process-board.png",
    alt:
      "Proposed Process board showing sedimentation branching to electro-coagulation, ceramic membrane ultrafiltration, RO, water reuse, nitrogen removal, and effluent"
  }
];

function ScrollableImageBoard({ title, label, src, alt }: { title: string; label?: string; src: string; alt: string }) {
  return (
    <article className="wrp-image-board">
      <div className="wrp-image-board-header">
        {label ? <span>{label}</span> : null}
        <h3>{title}</h3>
      </div>
      <div className="wrp-scroll-area">
        <div className="wrp-scroll-inner">
          <ZoomableImage src={src} alt={alt} />
        </div>
      </div>
    </article>
  );
}

export function WaterReuseProcessVisuals() {
  return (
    <div className="water-reuse-process-visuals">
      <div className="wrp-process-compare">
        {processBoards.map((board) => (
          <ScrollableImageBoard key={board.title} {...board} />
        ))}
      </div>

      <div className="wrp-wide-section">
        <div className="wrp-section-title wrp-compact">
          <h2>Conventional Phosphorus-Removal Method and Its Limitations</h2>
        </div>
        <ScrollableImageBoard
          title="Chemical dosing, residual ions, and sludge burden"
          label="Conventional limitations"
          src="/images/solutions/conventional-phosphorus-limitations.png"
          alt="Conventional phosphorus-removal limitations board showing activated sludge process, phosphorus removal process, chemical input, residual ions, and excessive sludge generation"
        />
      </div>

      <div className="wrp-wide-section">
        <div className="wrp-section-title wrp-compact">
          <h2>AWT Optimized Water Reuse Process</h2>
        </div>
        <ScrollableImageBoard
          title="AWT Optimized Water Reuse Process"
          label="ECM + ceramic membrane"
          src="/images/solutions/awt-optimized-water-reuse-process.png"
          alt="AWT optimized water reuse process board showing activated sludge, electro-coagulation and ceramic membrane filtration, optimized water reuse, and minimum sludge discharge"
        />
      </div>
    </div>
  );
}
