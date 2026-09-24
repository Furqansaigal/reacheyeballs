import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://reach-eyeballs.furqankamran0010.chatgpt.site', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 }];
}
