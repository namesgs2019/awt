"use client";

import { useEffect, useState } from "react";
import { assetPath } from "@/lib/assetPath";

type ZoomableImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function ZoomableImage({ src, alt, className }: ZoomableImageProps) {
  const [open, setOpen] = useState(false);
  const resolvedSrc = assetPath(src);

  useEffect(() => {
    if (!open) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button className={className ? `zoomable-image-trigger ${className}` : "zoomable-image-trigger"} type="button" onClick={() => setOpen(true)}>
        <img src={resolvedSrc} alt={alt} />
      </button>
      {open ? (
        <div className="image-modal" role="dialog" aria-modal="true" aria-label={alt} onClick={() => setOpen(false)}>
          <button className="image-modal-close" type="button" onClick={() => setOpen(false)} aria-label="Close image preview">
            Close
          </button>
          <img className="image-modal-img" src={resolvedSrc} alt={alt} onClick={(event) => event.stopPropagation()} />
        </div>
      ) : null}
    </>
  );
}
