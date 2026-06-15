"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { dropdownItems, type DropdownKey } from "@/data/navigation";
import { navItems } from "@/data/site";

const dropdownKeys = new Set(["solutions", "projects", "insights"]);

export function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<DropdownKey | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setActiveDropdown(null);
        setOpen(false);
        setExpanded(null);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setOpen(false);
        setExpanded(null);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function closeMenus() {
    setActiveDropdown(null);
    setOpen(false);
    setExpanded(null);
  }

  return (
    <header className="site-header" ref={headerRef}>
      <Logo />
      <div className="header-actions">
        <nav className="primary-nav" aria-label="Primary navigation">
          {navItems.map((item) => {
            const hasDropdown = dropdownKeys.has(item.key);
            const key = item.key as DropdownKey;
            const isOpen = activeDropdown === key;

            return (
              <div
                className="nav-item"
                key={item.href}
                onMouseEnter={() => (hasDropdown ? setActiveDropdown(key) : setActiveDropdown(null))}
                onMouseLeave={() => (hasDropdown ? setActiveDropdown(null) : undefined)}
              >
                <Link
                  className={pathname === item.href ? "active" : ""}
                  href={item.href}
                  onFocus={() => (hasDropdown ? setActiveDropdown(key) : setActiveDropdown(null))}
                  onClick={() => setActiveDropdown(null)}
                >
                  <span>{item.label}</span>
                  {hasDropdown ? <span className={isOpen ? "nav-chevron open" : "nav-chevron"}>v</span> : null}
                </Link>
                {hasDropdown ? (
                  <div className={isOpen ? "dropdown-panel open" : "dropdown-panel"}>
                    {dropdownItems[key].map((child) =>
                      (child.status as string) === "soon" ? (
                        <span key={child.href} className="dropdown-link disabled" aria-disabled="true">
                          <span>{child.label}</span>
                          <span className="soon-badge">Soon</span>
                        </span>
                      ) : (
                        <Link key={child.href} className="dropdown-link" href={child.href} onClick={closeMenus}>
                          <span>{child.label}</span>
                        </Link>
                      )
                    )}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => {
            setOpen((value) => !value);
            setActiveDropdown(null);
          }}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={open ? "mobile-menu open" : "mobile-menu"}>
        {navItems.map((item) => {
          const hasDropdown = dropdownKeys.has(item.key);
          const key = item.key as DropdownKey;

          if (!hasDropdown) {
            return (
              <Link key={item.href} className="mobile-menu-link" href={item.href} onClick={closeMenus}>
                {item.label}
              </Link>
            );
          }

          return (
            <div className="mobile-accordion" key={item.href}>
              <button
                type="button"
                onClick={() => setExpanded((value) => (value === key ? null : key))}
                aria-expanded={expanded === key}
              >
                {item.label}
                <span className={expanded === key ? "accordion-chevron open" : "accordion-chevron"}>v</span>
              </button>
              <div className={expanded === key ? "mobile-submenu open" : "mobile-submenu"}>
                {dropdownItems[key].map((child) =>
                  (child.status as string) === "soon" ? (
                    <span key={child.href} className="mobile-submenu-item disabled" aria-disabled="true">
                      <span>{child.label}</span>
                      <span className="soon-badge">Soon</span>
                    </span>
                  ) : (
                    <Link key={child.href} href={child.href} onClick={closeMenus}>
                      <span>{child.label}</span>
                    </Link>
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>
    </header>
  );
}
