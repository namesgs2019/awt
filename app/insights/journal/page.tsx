import type { Metadata } from "next";
import { BloggerJournalList } from "@/components/BloggerJournalList";
import { FALLBACK_ERROR_MESSAGE, getBloggerPosts } from "@/lib/blogger";

export const metadata: Metadata = {
  title: "Journal | AWT Insights",
  description: "Latest technical articles and research from AWT on water treatment, ECM technology, water reuse, and ceramic membrane solutions.",
  alternates: {
    canonical: "/insights/journal/"
  },
  openGraph: {
    title: "Journal | AWT Insights",
    description:
      "Latest technical articles and research from AWT on water treatment, ECM technology, water reuse, and ceramic membrane solutions.",
    url: "https://adwatertech.com/insights/journal/",
    images: ["https://adwatertech.com/images/awt_open_graph_Open_img.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Journal | AWT Insights",
    description:
      "Latest technical articles and research from AWT on water treatment, ECM technology, water reuse, and ceramic membrane solutions.",
    images: ["https://adwatertech.com/images/awt_open_graph_Open_img.png"]
  }
};

export default async function JournalPage() {
  const posts = await getBloggerPosts();
  const listPosts = posts.map(({ id, slug, displayTitle, excerpt, published, labels, thumbnail }) => ({
    id,
    slug,
    displayTitle,
    excerpt,
    published,
    labels,
    thumbnail
  }));

  return (
    <>
      <section className="page-hero insights-list-hero hero-bg-insights">
        <p>Insights</p>
        <h1>Journal</h1>
        <p>Latest technical articles and research from AWT.</p>
      </section>

      <section className="band soft">
        {posts.length === 0 ? (
          <div className="insights-browser">
            <p className="insights-state">{FALLBACK_ERROR_MESSAGE}</p>
          </div>
        ) : (
          <BloggerJournalList posts={listPosts} />
        )}
      </section>
    </>
  );
}
