"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { formatBloggerDate } from "@/lib/blogger";
import type { NormalizedBloggerPost } from "@/types/blogger";

const POSTS_PER_PAGE = 10;

export type ResourceListPost = Pick<
  NormalizedBloggerPost,
  "id" | "slug" | "displayTitle" | "excerpt" | "published" | "labels" | "thumbnail" | "downloadLinks"
>;

function matchesQuery(post: ResourceListPost, query: string) {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) {
    return true;
  }

  const searchableText = [
    post.displayTitle,
    post.excerpt,
    post.labels.join(" ")
  ].join(" ").toLowerCase();

  return searchableText.includes(normalizedQuery);
}

export function BloggerResourcesList({ posts }: { posts: ResourceListPost[] }) {
  const [query, setQuery] = useState("");
  const [activeQuery, setActiveQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const filteredPosts = useMemo(
    () => posts.filter((post) => matchesQuery(post, activeQuery)),
    [activeQuery, posts]
  );
  const displayedPosts = filteredPosts.slice(0, visibleCount);
  const hasMorePosts = visibleCount < filteredPosts.length;

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setActiveQuery(query);
    setVisibleCount(POSTS_PER_PAGE);
  }

  return (
    <div className="insights-browser">
      <form className="insights-search" onSubmit={handleSearch}>
        <label>
          <span className="sr-only">Search resources</span>
          <input
            type="search"
            value={query}
            placeholder="Search resources..."
            onChange={(event) => {
              setQuery(event.target.value);
              setVisibleCount(POSTS_PER_PAGE);
            }}
          />
        </label>
        <button type="submit">Search</button>
      </form>

      {filteredPosts.length === 0 ? <p className="insights-state">Resources are being updated. Please check back soon.</p> : null}

      <div className="insights-list">
        {displayedPosts.map((post) => (
          <article className="insight-card blogger-resource-card" key={post.id}>
            <Link className="insight-card-main" href={`/insights/resources/${post.slug}/`}>
              {post.thumbnail ? (
                <img src={post.thumbnail} alt="" />
              ) : (
                <span className="insight-card-placeholder" aria-hidden="true">AWT</span>
              )}
              <div>
                <h2>{post.displayTitle}</h2>
                <p>{post.excerpt || "Technical resource from Advanced Water Technology."}</p>
                <div className="insight-meta">
                  <span>{formatBloggerDate(post.published)}</span>
                  <span>Resource</span>
                  {post.downloadLinks.length > 0 ? <span>Download available</span> : null}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {hasMorePosts ? (
        <button className="load-more-button" type="button" onClick={() => setVisibleCount((count) => count + POSTS_PER_PAGE)}>
          More
        </button>
      ) : null}
    </div>
  );
}
