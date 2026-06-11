"use client";

import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export function Logo() {
  return (
    <Link className="brand" href="/" aria-label="AWT home">
      <span className="brand-image-wrap">
        <img src={assetPath("/images/logo.png")} alt="AWT" />
      </span>
      <span className="brand-copy">
        <strong>Advanced Water Technology</strong>
        <small>ECM Water Solutions</small>
      </span>
    </Link>
  );
}
