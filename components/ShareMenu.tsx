"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type ShareMenuProps = {
  title: string;
};

export function ShareMenu({ title }: ShareMenuProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const encodedTitle = useMemo(() => encodeURIComponent(title), [title]);
  const encodedUrl = useMemo(() => encodeURIComponent(currentUrl), [currentUrl]);
  const emailHref = `mailto:?subject=${encodedTitle}&body=${encodedUrl}`;
  const linkedInHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      console.error("Unable to copy share link:", error);
      setCopied(false);
    }
  }

  return (
    <div className="share-menu" ref={wrapperRef}>
      <button
        className="share-menu-trigger"
        type="button"
        aria-expanded={open}
        aria-label="Share this page"
        onClick={() => setOpen((value) => !value)}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M18 8a3 3 0 1 0-2.83-4H15a3 3 0 0 0 1.24 2.43l-7.1 4.06a3 3 0 1 0 0 3.02l7.1 4.06A3 3 0 1 0 17 16a3 3 0 0 0-1.83.63l-7.1-4.06a3.2 3.2 0 0 0 0-1.14l7.1-4.06A2.99 2.99 0 0 0 18 8Z" />
        </svg>
        <span>Share</span>
      </button>

      {open ? (
        <div className="share-menu-panel">
          <button type="button" onClick={copyLink}>
            Copy link
          </button>
          <a href={emailHref}>Email</a>
          <a href={linkedInHref} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      ) : null}

      {copied ? <span className="share-menu-feedback">Link copied</span> : null}
    </div>
  );
}
