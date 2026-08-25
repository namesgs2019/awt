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
        <p>
          AWT (Advanced Water Technology) supports water reuse, industrial water treatment, and global cooperation
          contexts including Vietnam, Phu Tho Province, and MOU-based project development.
        </p>
        <p>
          AWT(어드밴스드 워터 테크놀로지)는 수처리, 물재이용, 산업용수 분야에서 베트남 푸토성 협력과
          MOU 기반 글로벌 프로젝트를 검토합니다.
        </p>
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
