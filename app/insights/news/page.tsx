import type { Metadata } from "next";
import { BloggerNewsList } from "@/components/BloggerNewsList";
import {
  getBloggerNewsPosts,
  NEWS_FALLBACK_MESSAGE,
} from "@/lib/blogger";

export const metadata: Metadata = {
  title: "News | AWT Insights",
  description:
    "Latest news, announcements, and project updates from Advanced Water Technology.",
  alternates: {
    canonical: "/insights/news/",
  },
  openGraph: {
    title: "News | AWT Insights",
    description:
      "Latest news, announcements, and project updates from Advanced Water Technology.",
    url: "https://adwatertech.com/insights/news/",
    images: ["https://adwatertech.com/images/awt_logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "News | AWT Insights",
    description:
      "Latest news, announcements, and project updates from Advanced Water Technology.",
    images: ["https://adwatertech.com/images/awt_logo.png"],
  },
};

export default async function NewsPage() {
  const posts = await getBloggerNewsPosts();

  const listPosts = posts.map(
    ({
      id,
      slug,
      displayTitle,
      excerpt,
      published,
      labels,
      thumbnail,
      downloadLinks,
    }) => ({
      id,
      slug,
      displayTitle,
      excerpt,
      published,
      labels,
      thumbnail,
      downloadLinks,
    }),
  );

  return (
    <>
      <section className="page-hero insights-list-hero hero-bg-insights">
        <p>Insights</p>
        <h1>News</h1>
        <p>Latest news, announcements, and project updates from AWT.</p>
      </section>

      <section className="band soft">
        {posts.length === 0 ? (
          <div className="insights-browser">
            <p className="insights-state">
              {NEWS_FALLBACK_MESSAGE}
            </p>
          </div>
        ) : (
          <BloggerNewsList posts={listPosts} />
        )}
      </section>
    </>
  );
}