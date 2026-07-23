import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ShareMenu } from "@/components/ShareMenu";
import {
  formatBloggerDate,
  getBloggerNewsBySlug,
  getBloggerNewsPosts,
  NEWS_FALLBACK_MESSAGE,
} from "@/lib/blogger";

type NewsDetailPageProps = {
  params: {
    slug: string;
  };
};

const UNAVAILABLE_SLUG = "news-unavailable";

export async function generateStaticParams() {
  const posts = await getBloggerNewsPosts();

  if (posts.length === 0) {
    return [{ slug: UNAVAILABLE_SLUG }];
  }

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: NewsDetailPageProps): Promise<Metadata> {
  const post = await getBloggerNewsBySlug(params.slug);

  if (!post) {
    return {
      title: "News | AWT Insights",
      alternates: {
        canonical: "/insights/news/",
      },
    };
  }

  const canonicalPath = `/insights/news/${post.slug}/`;

  return {
    title: `${post.displayTitle} | AWT News`,
    description: post.excerpt,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: `${post.displayTitle} | AWT News`,
      description: post.excerpt,
      url: `https://adwatertech.com${canonicalPath}`,
      images: post.thumbnail
        ? [post.thumbnail]
        : ["https://adwatertech.com/images/awt_logo.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.displayTitle} | AWT News`,
      description: post.excerpt,
      images: post.thumbnail
        ? [post.thumbnail]
        : ["https://adwatertech.com/images/awt_logo.png"],
    },
  };
}

export default async function NewsDetailPage({
  params,
}: NewsDetailPageProps) {
  const post = await getBloggerNewsBySlug(params.slug);

  if (!post) {
    if (params.slug === UNAVAILABLE_SLUG) {
      return (
        <>
          <section className="page-hero insights-list-hero hero-bg-insights">
            <p>Insights</p>
            <h1>News</h1>
            <p>Latest news, announcements, and project updates from AWT.</p>
          </section>

          <section className="band soft">
            <article className="blogger-detail">
              <p className="insights-state">{NEWS_FALLBACK_MESSAGE}</p>
              <div className="blogger-detail-footer">
                <Link href="/insights/news/">Back to News</Link>
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
        <h1>News</h1>
        <p>Latest news, announcements, and project updates from AWT.</p>
      </section>

      <section className="band soft">
        <article className="blogger-detail">
          <div className="blogger-detail-meta">
            <span>{formatBloggerDate(post.published)}</span>
            <span>News</span>
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
            <Link href="/insights/news/">Back to News</Link>
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
