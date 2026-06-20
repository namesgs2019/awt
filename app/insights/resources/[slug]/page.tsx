import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ShareMenu } from "@/components/ShareMenu";
import { formatBloggerDate, getBloggerResourceBySlug, getBloggerResourcePosts, RESOURCES_FALLBACK_MESSAGE } from "@/lib/blogger";

type ResourceDetailPageProps = {
  params: {
    slug: string;
  };
};

const UNAVAILABLE_SLUG = "resources-unavailable";

export async function generateStaticParams() {
  const posts = await getBloggerResourcePosts();
  if (posts.length === 0) {
    return [{ slug: UNAVAILABLE_SLUG }];
  }

  return posts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: ResourceDetailPageProps): Promise<Metadata> {
  const post = await getBloggerResourceBySlug(params.slug);

  if (!post) {
    return {
      title: "Resources | AWT Insights"
    };
  }

  return {
    title: `${post.displayTitle} | AWT Resources`,
    description: post.excerpt,
    alternates: {
      canonical: `/insights/resources/${post.slug}`
    },
    openGraph: {
      title: `${post.displayTitle} | AWT Resources`,
      description: post.excerpt,
      images: post.thumbnail ? [post.thumbnail] : undefined
    }
  };
}

export default async function ResourceDetailPage({ params }: ResourceDetailPageProps) {
  const post = await getBloggerResourceBySlug(params.slug);

  if (!post) {
    if (params.slug === UNAVAILABLE_SLUG) {
      return (
        <>
          <section className="page-hero insights-list-hero hero-bg-insights">
            <p>Insights</p>
            <h1>Resources</h1>
            <p>Technical materials and useful resources from AWT.</p>
          </section>

          <section className="band soft">
            <article className="blogger-detail">
              <p className="insights-state">{RESOURCES_FALLBACK_MESSAGE}</p>
              <div className="blogger-detail-footer">
                <Link href="/insights/resources">Back to Resources</Link>
              </div>
            </article>
          </section>
        </>
      );
    }

    notFound();
  }

  return (
    <>
      <section className="page-hero insights-list-hero hero-bg-insights">
        <p>Insights</p>
        <h1>Resources</h1>
        <p>Technical materials and useful resources from AWT.</p>
      </section>

      <section className="band soft">
        <article className="blogger-detail">
          <div className="blogger-detail-meta">
            <span>{formatBloggerDate(post.published)}</span>
            <span>Resource</span>
          </div>

          <div className="blogger-title-row">
            <h2 className="blogger-detail-title">{post.displayTitle}</h2>
            <ShareMenu title={post.displayTitle} />
          </div>

          <div
            className="blogger-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {post.downloadLinks.length > 0 ? (
            <div className="resource-downloads">
              <h3>Downloads</h3>
              <div className="resource-download-list">
                {post.downloadLinks.map((link, index) => (
                  <a href={link} target="_blank" rel="noreferrer" key={link}>
                    Download{post.downloadLinks.length > 1 ? ` ${index + 1}` : ""}
                  </a>
                ))}
              </div>
            </div>
          ) : null}

          <div className="blogger-detail-footer">
            <Link href="/insights/resources">Back to Resources</Link>
            {post.originalUrl ? (
              <a href={post.originalUrl} target="_blank" rel="noreferrer">
                View original Blogger post
              </a>
            ) : null}
          </div>
        </article>
      </section>
    </>
  );
}
