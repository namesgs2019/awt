"use client";

import { FormEvent, SyntheticEvent, useEffect, useMemo, useState } from "react";
import { assetPath } from "@/lib/assetPath";

type InsightKind = "journal" | "resources";

type InsightItem = {
  title?: string;
  summary?: string;
  link?: string;
  image?: string;
  thumbnail?: string;
  cafeName?: string;
  cafeUrl?: string;
  postdate?: string;
};

type InsightResponse = {
  total?: number;
  naverTotal?: number;
  start?: number;
  display?: number;
  items?: InsightItem[];
};

const API_BASE = "https://awt-insights-api.namesgs.workers.dev";
const FALLBACK_IMAGE = "/images/awt_logo.png";

const config = {
  journal: {
    tag: "[AWT_Journal]",
    endpoint: "journal",
    empty: "No journal posts found.",
    error: "Unable to load journal posts. Please try again later.",
    button: "Read More",
    searchLabel: "Search journal posts",
    searchPlaceholder: "Search journal articles...",
    category: "Journal",
    image: FALLBACK_IMAGE
  },
  resources: {
    tag: "[AWT_Resources]",
    endpoint: "resources",
    empty: "No resources found.",
    error: "Unable to load resources. Please try again later.",
    button: "View Resource",
    searchLabel: "Search resources",
    searchPlaceholder: "Search resources...",
    category: "Resource",
    image: FALLBACK_IMAGE
  }
} satisfies Record<InsightKind, {
  tag: string;
  endpoint: string;
  empty: string;
  error: string;
  button: string;
  searchLabel: string;
  searchPlaceholder: string;
  category: string;
  image: string;
}>;

function cleanTitle(title: string | undefined, tag: string) {
  return (title || "Untitled")
    .replace(tag, "")
    .replace(/\s+/g, " ")
    .trim();
}

function formatPostDate(value: string | undefined) {
  if (!value || !/^\d{8}$/.test(value)) {
    return "";
  }

  return `${value.slice(0, 4)}.${value.slice(4, 6)}.${value.slice(6, 8)}`;
}

function getItemImage(item: InsightItem, fallback: string) {
  return item.image || item.thumbnail || fallback;
}

function handleImageFallback(event: SyntheticEvent<HTMLImageElement>) {
  const fallbackSrc = assetPath(FALLBACK_IMAGE);
  if (event.currentTarget.src !== fallbackSrc) {
    event.currentTarget.src = fallbackSrc;
  }
}

export function InsightsList({ kind }: { kind: InsightKind }) {
  const options = config[kind];
  const [items, setItems] = useState<InsightItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<InsightItem | null>(null);
  const [query, setQuery] = useState("");
  const [activeQuery, setActiveQuery] = useState("");
  const [nextStart, setNextStart] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState("");

  const endpoint = useMemo(() => `${API_BASE}/${options.endpoint}`, [options.endpoint]);

  async function loadPosts({ search, start, append }: { search: string; start: number; append: boolean }) {
    append ? setLoadingMore(true) : setLoading(true);
    setError("");

    try {
      const params = new URLSearchParams();
      if (search.trim()) {
        params.set("query", search.trim());
      }
      if (start > 1) {
        params.set("start", String(start));
      }

      const queryString = params.toString();
      const requestUrl = queryString ? `${endpoint}?${queryString}` : endpoint;
      console.info(`${options.category} fetch URL:`, requestUrl);

      const response = await fetch(requestUrl);
      if (!response.ok) {
        const responseText = await response.text().catch(() => "");
        console.error(`${options.category} fetch failed:`, response.status, responseText);
        throw new Error(`Unable to load insights: ${response.status}`);
      }

      const data = (await response.json()) as InsightResponse;
      const nextItems = data.items ?? [];
      const display = data.display || 10;
      const total = data.total ?? nextItems.length;

      setItems((current) => (append ? [...current, ...nextItems] : nextItems));
      setNextStart(start + display);
      setHasMore(nextItems.length >= display && start + display <= total);
    } catch (error) {
      console.error(`${options.category} fetch error:`, error);
      setError(options.error);
      if (!append) {
        setItems([]);
      }
      setHasMore(false);
    } finally {
      append ? setLoadingMore(false) : setLoading(false);
    }
  }

  useEffect(() => {
    loadPosts({ search: activeQuery, start: 1, append: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeQuery, endpoint]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    }

    if (selectedItem) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setActiveQuery(query);
  }

  return (
    <div className="insights-browser">
      <form className="insights-search" onSubmit={handleSearch}>
        <label>
          <span className="sr-only">{options.searchLabel}</span>
          <input
            type="search"
            value={query}
            placeholder={options.searchPlaceholder}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <button type="submit" disabled={loading || loadingMore}>Search</button>
      </form>

      {loading ? <p className="insights-state">Loading...</p> : null}
      {error ? <p className="insights-state error">{error}</p> : null}
      {!loading && !error && items.length === 0 ? <p className="insights-state">{options.empty}</p> : null}

      <div className="insights-list">
        {items.map((item, index) => {
          const title = cleanTitle(item.title, options.tag);
          const date = formatPostDate(item.postdate);
          const displayDate = date || "Date not provided";
          const key = `${item.link || title}-${index}`;
          const imageSrc = assetPath(getItemImage(item, options.image));

          return (
            <article className="insight-card" key={key}>
              <button className="insight-card-main" type="button" onClick={() => setSelectedItem(item)}>
                <img src={imageSrc} alt="" onError={handleImageFallback} />
                <div>
                  <h2>{title}</h2>
                  <p>{item.summary || "Technical insight from Advanced Water Technology."}</p>
                  <div className="insight-meta">
                    <span>{displayDate}</span>
                    <span>{options.category}</span>
                  </div>
                </div>
              </button>
              <button className="insight-card-action" type="button" onClick={() => setSelectedItem(item)}>
                {options.button}
              </button>
            </article>
          );
        })}
      </div>

      {selectedItem ? (
        <div className="insight-modal-backdrop" role="presentation" onMouseDown={() => setSelectedItem(null)}>
          <article
            className="insight-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="insight-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="insight-modal-close" type="button" aria-label="Close" onClick={() => setSelectedItem(null)}>
              x
            </button>
            <h2 id="insight-modal-title">{cleanTitle(selectedItem.title, options.tag)}</h2>
            <div className="insight-modal-meta">
              <span>{formatPostDate(selectedItem.postdate) || "Date not provided"}</span>
              <span>{options.category}</span>
            </div>
            <img
              className="insight-modal-image"
              src={assetPath(getItemImage(selectedItem, options.image))}
              alt=""
              onError={handleImageFallback}
            />
            <p>{selectedItem.summary || "Technical insight from Advanced Water Technology."}</p>
            {selectedItem.link ? (
              <a className="insight-original-link" href={selectedItem.link} target="_blank" rel="noreferrer">
                View original post
              </a>
            ) : null}
          </article>
        </div>
      ) : null}

      {hasMore ? (
        <button
          className="load-more-button"
          type="button"
          disabled={loadingMore}
          onClick={() => loadPosts({ search: activeQuery, start: nextStart, append: true })}
        >
          {loadingMore ? "Loading..." : "Load More"}
        </button>
      ) : null}
    </div>
  );
}
