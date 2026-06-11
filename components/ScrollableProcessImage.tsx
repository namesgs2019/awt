import type { CSSProperties } from "react";
import { ZoomableImage } from "@/components/ZoomableImage";

export function ScrollableProcessImage({
  src,
  alt,
  minWidth = "1100px"
}: {
  src: string;
  alt: string;
  minWidth?: string;
}) {
  return (
    <div className="scrollable-process-image" style={{ "--process-min-width": minWidth } as CSSProperties}>
      <div className="scrollable-process-image-inner">
        <ZoomableImage src={src} alt={alt} />
      </div>
    </div>
  );
}
