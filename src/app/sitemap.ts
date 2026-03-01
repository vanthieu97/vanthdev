import type { MetadataRoute } from 'next';
import { getCanonicalUrl, LOCALES, type Locale } from '@/lib/i18n/config';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanthdev.com';

const ROUTES: Array<{ path: string; changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly'; priority: number }> = [
  { path: '', changeFrequency: 'daily', priority: 1 },
  { path: '/lunar-new-year-countdown', changeFrequency: 'yearly', priority: 1 },
  { path: '/smash-glass', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/solar-system', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/news', changeFrequency: 'daily', priority: 0.95 },
  { path: '/news/israel-tan-cong-iran', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/champions-league', changeFrequency: 'weekly', priority: 0.95 },
  { path: '/film-reviews', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/film-reviews/cam-on-nguoi-da-thuc-cung-toi', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/film-reviews/nha-ba-toi-mot-phong', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/film-reviews/tho-oi', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/film-reviews/mui-pho', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/gia-vang', changeFrequency: 'daily', priority: 0.95 },
  { path: '/news/luat-ai-viet-nam-2026', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/news/iphone-18-pro-max', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/news/blackpink-100-trieu-subscribers', changeFrequency: 'weekly', priority: 0.85 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();

  for (const locale of LOCALES) {
    for (const { path, changeFrequency, priority } of ROUTES) {
      entries.push({
        url: getCanonicalUrl(baseUrl, locale as Locale, path || '/'),
        lastModified: now,
        changeFrequency,
        priority,
      });
    }
  }

  return entries;
}
