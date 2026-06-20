"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { formatBloggerDate } from "@/lib/blogger";
import type { NormalizedBloggerPost } from "@/types/blogger";

const POSTS_PER_PAGE = 10;

export type JournalListPost = Pick<
  NormalizedBloggerPost,
  "id" | "slug" | "displayTitle" | "excerpt" | "published" | "labels" | "thumbnail"
>;

function matchesQuery(post: JournalListPost, query: string) {
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

export function BloggerJournalList({ posts }: { posts: JournalListPost[] }) {
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
          <span className="sr-only">Search journal posts</span>
          <input
            type="search"
            value={query}
            placeholder="Search journal articles..."
            onChange={(event) => {
              setQuery(event.target.value);
              setVisibleCount(POSTS_PER_PAGE);
            }}
          />
        </label>
        <button type="submit">Search</button>
      </form>

      {filteredPosts.length === 0 ? <p className="insights-state">No journal posts found.</p> : null}

      <div className="insights-list">
        {displayedPosts.map((post) => (
          <article className="insight-card blogger-journal-card" key={post.id}>
            <Link className="insight-card-main" href={`/insights/journal/${post.slug}/`}>
              {post.thumbnail ? (
                <img src={post.thumbnail} alt="" />
              ) : (
                <span className="insight-card-placeholder" aria-hidden="true">AWT</span>
              )}
              <div>
                <h2>{post.displayTitle}</h2>
                <p>{post.excerpt || "Technical insight from Advanced Water Technology."}</p>
                <div className="insight-meta">
                  <span>{formatBloggerDate(post.published)}</span>
                  <span>Journal</span>
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
