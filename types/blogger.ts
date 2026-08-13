export type BloggerImage = {
  url?: string;
};

export type BloggerApiPost = {
  id: string;
  title?: string;
  content?: string;
  published?: string;
  updated?: string;
  labels?: string[];
  url?: string;
  images?: BloggerImage[];
};

export type BloggerApiResponse = {
  items?: BloggerApiPost[];
  nextPageToken?: string;
};

export type NormalizedBloggerPost = {
  id: string;
  slug: string;
  title: string;
  displayTitle: string;
  content: string;
  excerpt: string;
  published: string;
  updated: string;
  labels: string[];
  images: string[];
  thumbnail: string;
  originalUrl: string;
  downloadLinks: string[];
};
