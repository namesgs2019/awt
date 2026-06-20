import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ShareMenu } from "@/components/ShareMenu";
import { FALLBACK_ERROR_MESSAGE, formatBloggerDate, getBloggerPostBySlug, getBloggerPosts } from "@/lib/blogger";

type JournalDetailPageProps = {
  params: {
    slug: string;
  };
};

const UNAVAILABLE_SLUG = "journal-unavailable";

export async function generateStaticParams() {
  const posts = await getBloggerPosts();
  if (posts.length === 0) {
    return [{ slug: UNAVAILABLE_SLUG }];
  }

  return posts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: JournalDetailPageProps): Promise<Metadata> {
  const post = await getBloggerPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Journal | AWT Insights"
    };
  }

  return {
    title: `${post.displayTitle} | AWT Journal`,
    description: post.excerpt,
    alternates: {
      canonical: `/insights/journal/${post.slug}`
    },
    openGraph: {
      title: `${post.displayTitle} | AWT Journal`,
      description: post.excerpt,
      images: post.thumbnail ? [post.thumbnail] : undefined
    }
  };
}

export default async function JournalDetailPage({ params }: JournalDetailPageProps) {
  const post = await getBloggerPostBySlug(params.slug);

  if (!post) {
    if (params.slug === UNAVAILABLE_SLUG) {
      return (
        <>
          <section className="page-hero insights-list-hero hero-bg-insights">
            <p>AWT Journal</p>
            <h1>Journal</h1>
            <p>Latest technical articles and research from AWT.</p>
          </section>

          <section className="band soft">
            <article className="blogger-detail">
              <p className="insights-state">{FALLBACK_ERROR_MESSAGE}</p>
              <div className="blogger-detail-footer">
                <Link href="/insights/journal">Back to Journal</Link>
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
        <h1>Journal</h1>
        <p>Latest technical articles and research from AWT.</p>
      </section>

      <section className="band soft">
        <article className="blogger-detail">
          <div className="blogger-detail-meta">
            <span>{formatBloggerDate(post.published)}</span>
            <span>Journal</span>
          </div>

          <div className="blogger-title-row">
            <h2 className="blogger-detail-title">{post.displayTitle}</h2>
            <ShareMenu title={post.displayTitle} />
          </div>

          <div
            className="blogger-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="blogger-detail-footer">
            <Link href="/insights/journal">Back to Journal</Link>
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
