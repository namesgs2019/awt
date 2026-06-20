import type { BloggerApiPost, BloggerApiResponse, NormalizedBloggerPost } from "@/types/blogger";

const BLOGGER_API_BASE = "https://www.googleapis.com/blogger/v3/blogs";
const JOURNAL_LABELS = ["journal", "Journal"];
const RESOURCE_LABELS = ["resources", "Resources"];
const JOURNAL_PREFIX_PATTERN = /^\s*\[(?:journal|resources?|awt_journal|awt_resources?)\]\s*/i;
const FALLBACK_ERROR_MESSAGE = "Journal updates are temporarily delayed. Existing posts remain available.";
const RESOURCES_FALLBACK_MESSAGE = "Resources are being updated. Please check back soon.";

function getBloggerConfig() {
  return {
    blogId: process.env.BLOGGER_BLOG_ID ?? process.env.NEXT_PUBLIC_BLOGGER_BLOG_ID,
    apiKey: process.env.BLOGGER_API_KEY ?? process.env.NEXT_PUBLIC_BLOGGER_API_KEY
  };
}

function stripHtml(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, "\"")
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function createExcerpt(content: string) {
  const text = stripHtml(content);
  if (text.length <= 180) {
    return text;
  }

  return `${text.slice(0, 177).trim()}...`;
}

function slugify(value: string) {
  const slug = value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 72);

  return slug || "journal-post";
}

function cleanTitle(title: string) {
  return title.replace(JOURNAL_PREFIX_PATTERN, "").replace(/\s+/g, " ").trim() || "Untitled";
}

function extractImageUrls(content: string) {
  const urls = new Set<string>();
  const imagePattern = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let match = imagePattern.exec(content);

  while (match) {
    if (match[1] && !/^javascript:/i.test(match[1])) {
      urls.add(match[1]);
    }
    match = imagePattern.exec(content);
  }

  return Array.from(urls);
}

function extractGoogleDriveLinks(content: string) {
  const links = new Set<string>();
  const linkPattern = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;
  let match = linkPattern.exec(content);

  function addDriveLink(value: string) {
    const decodedValue = value.replace(/&amp;/g, "&");
    const googleRedirectMatch = decodedValue.match(/[?&]q=(https?%3A%2F%2F(?:drive|docs)\.google\.com%2F[^&]+)/i);
    if (googleRedirectMatch) {
      links.add(decodeURIComponent(googleRedirectMatch[1]));
      return;
    }

    if (/^https?:\/\/(?:drive|docs)\.google\.com\//i.test(decodedValue)) {
      links.add(decodedValue);
    }
  }

  while (match) {
    if (match[1]) {
      addDriveLink(match[1]);
    }
    match = linkPattern.exec(content);
  }

  const plainUrlPattern = /https?:\/\/(?:drive|docs)\.google\.com\/[^\s"'<>]+/gi;
  let urlMatch = plainUrlPattern.exec(content);
  while (urlMatch) {
    addDriveLink(urlMatch[0]);
    urlMatch = plainUrlPattern.exec(content);
  }

  return Array.from(links);
}

export function sanitizeBloggerHtml(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<iframe[\s\S]*?<\/iframe>/gi, "")
    .replace(/<object[\s\S]*?<\/object>/gi, "")
    .replace(/<embed[\s\S]*?<\/embed>/gi, "")
    .replace(/<form[\s\S]*?<\/form>/gi, "")
    .replace(/\son\w+=["'][^"']*["']/gi, "")
    .replace(/\son\w+=\{[^}]*\}/gi, "")
    .replace(/\s(?:href|src)=["']javascript:[^"']*["']/gi, "")
    .replace(/\sstyle=["'][^"']*expression\([^"']*["']/gi, "");
}

export function normalizeBloggerPost(post: BloggerApiPost): NormalizedBloggerPost {
  const title = post.title || "Untitled";
  const displayTitle = cleanTitle(title);
  const rawContent = post.content || "";
  const content = sanitizeBloggerHtml(rawContent);
  const apiImages = (post.images || [])
    .map((image) => image.url)
    .filter((url): url is string => Boolean(url));
  const contentImages = extractImageUrls(content);
  const images = Array.from(new Set([...apiImages, ...contentImages]));
  const shortId = post.id ? post.id.slice(-8) : "post";

  return {
    id: post.id,
    slug: `${slugify(displayTitle)}-${shortId}`,
    title,
    displayTitle,
    content,
    excerpt: createExcerpt(content),
    published: post.published || "",
    updated: post.updated || "",
    labels: post.labels || [],
    images,
    thumbnail: images[0] || "",
    originalUrl: post.url || "",
    downloadLinks: extractGoogleDriveLinks(rawContent)
  };
}

async function fetchBloggerPostsByLabel(label: string) {
  const { blogId, apiKey } = getBloggerConfig();
  if (!blogId || !apiKey) {
    console.warn("Blogger environment variables are not configured.");
    return [];
  }

  const params = new URLSearchParams({
    key: apiKey,
    labels: label,
    fetchBodies: "true",
    fetchImages: "true",
    orderBy: "published",
    maxResults: "50"
  });
  const requestUrl = `${BLOGGER_API_BASE}/${encodeURIComponent(blogId)}/posts?${params.toString()}`;

  try {
    const response = await fetch(requestUrl, {
      headers: {
        Referer: "https://adwatertech.com/"
      },
      next: { revalidate: 3600 }
    });
    if (!response.ok) {
      const responseText = await response.text().catch(() => "");
      console.error("Blogger posts fetch failed:", response.status, responseText);
      return [];
    }

    const data = (await response.json()) as BloggerApiResponse;
    return (data.items || []).map(normalizeBloggerPost);
  } catch (error) {
    console.error("Blogger posts fetch error:", error);
    return [];
  }
}

export async function getBloggerPosts() {
  return getBloggerPostsForLabels(JOURNAL_LABELS);
}

export async function getBloggerResourcePosts() {
  return getBloggerPostsForLabels(RESOURCE_LABELS);
}

async function getBloggerPostsForLabels(labels: string[]) {
  const seen = new Set<string>();
  const posts: NormalizedBloggerPost[] = [];

  for (const label of labels) {
    const labelPosts = await fetchBloggerPostsByLabel(label);
    for (const post of labelPosts) {
      if (!seen.has(post.id)) {
        seen.add(post.id);
        posts.push(post);
      }
    }
  }

  return posts.sort((a, b) => {
    const aTime = a.published ? new Date(a.published).getTime() : 0;
    const bTime = b.published ? new Date(b.published).getTime() : 0;
    return bTime - aTime;
  });
}

export async function getBloggerPostBySlug(slug: string) {
  const posts = await getBloggerPosts();
  return posts.find((post) => post.slug === slug) || null;
}

export async function getBloggerResourceBySlug(slug: string) {
  const posts = await getBloggerResourcePosts();
  return posts.find((post) => post.slug === slug) || null;
}

export function formatBloggerDate(value: string) {
  if (!value) {
    return "Date not provided";
  }

  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(new Date(value));
}

export { FALLBACK_ERROR_MESSAGE, RESOURCES_FALLBACK_MESSAGE };
