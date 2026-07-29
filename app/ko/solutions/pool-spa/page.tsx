import type { Metadata } from "next";
import { KoreanLandingPage } from "@/components/KoreanLandingPage";
import { getKoreanPage } from "@/data/koreanPages";

const page = getKoreanPage("poolSpa");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: {
    canonical: page.path,
    languages: {
      en: page.englishPath,
      ko: page.path,
      "x-default": page.englishPath
    }
  },
  openGraph: {
    title: page.title,
    description: page.description,
    url: `https://adwatertech.com${page.path}`,
    locale: "ko_KR",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: page.title,
    description: page.description,
    images: ["https://adwatertech.com/images/awt_logo.png"]
  }
};

export default function KoreanPoolSpaPage() {
  return <KoreanLandingPage page={page} />;
}
