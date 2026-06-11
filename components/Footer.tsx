"use client";

import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <Logo />
        <p>Advanced water purification technologies based on Electro-coagulation and Ceramic Membrane systems.</p>
      </div>
      <div className="footer-links">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
