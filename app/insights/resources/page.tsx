import type { Metadata } from "next";
import { BloggerResourcesList } from "@/components/BloggerResourcesList";
import { getBloggerResourcePosts, RESOURCES_FALLBACK_MESSAGE } from "@/lib/blogger";

export const metadata: Metadata = {
  title: "Resources | AWT Insights",
  description: "Technical materials, references, and resources from AWT.",
  alternates: {
    canonical: "/insights/resources/"
  },
  openGraph: {
    title: "Resources | AWT Insights",
    description: "Technical materials, references, and resources from AWT.",
    url: "https://adwatertech.com/insights/resources/",
    images: ["https://adwatertech.com/images/awt_open_graph_Open_img.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources | AWT Insights",
    description: "Technical materials, references, and resources from AWT.",
    images: ["https://adwatertech.com/images/awt_open_graph_Open_img.png"]
  }
};

export default async function ResourcesPage() {
  const posts = await getBloggerResourcePosts();
  const listPosts = posts.map(({ id, slug, displayTitle, excerpt, published, labels, thumbnail, downloadLinks }) => ({
    id,
    slug,
    displayTitle,
    excerpt,
    published,
    labels,
    thumbnail,
    downloadLinks
  }));

  return (
    <>
      <section className="page-hero insights-list-hero hero-bg-insights">
        <p>Insights</p>
        <h1>Resources</h1>
        <p>Technical materials and useful resources from AWT.</p>
      </section>

      <section className="band soft">
        {posts.length === 0 ? (
          <div className="insights-browser">
            <p className="insights-state">{RESOURCES_FALLBACK_MESSAGE}</p>
          </div>
        ) : (
          <BloggerResourcesList posts={listPosts} />
        )}
      </section>
    </>
  );
}
