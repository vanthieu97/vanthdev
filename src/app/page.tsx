import type { Metadata } from 'next';
import { VietnamNewsContent } from '@/app/news/vietnam-news-content';
import { HomeEntryPoints } from '@/components/home-entry-points';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanthdev.com';

export const metadata: Metadata = {
  title: 'Tin tức Việt Nam - Tin nổi bật cập nhật liên tục',
  description:
    'Tin tức Việt Nam mới nhất, tin nổi bật trong ngày. Cập nhật liên tục từ các nguồn uy tín.',
  keywords: ['tin tức Việt Nam', 'tin nổi bật', 'tin trong ngày', 'thời sự', 'news Vietnam'],
  openGraph: {
    title: 'Tin tức Việt Nam - Tin nổi bật cập nhật liên tục',
    description:
      'Tin tức Việt Nam mới nhất, tin nổi bật trong ngày. Cập nhật liên tục từ các nguồn uy tín.',
    url: baseUrl,
    siteName: 'vanthdev.com',
    type: 'website',
    locale: 'vi_VN',
    images: [{ url: '/og-news.png', width: 1200, height: 630, alt: 'Tin tức Việt Nam' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tin tức Việt Nam - Tin nổi bật cập nhật liên tục',
    description: 'Tin tức Việt Nam mới nhất, tin nổi bật trong ngày.',
  },
  alternates: {
    canonical: baseUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'vanthdev.com',
  url: baseUrl,
  description: 'Tin tức Việt Nam, đếm ngược Tết, Cúp C1 Champions League.',
};

export default function Home() {
  return (
    <div className="bg-[#faf8f5] dark:bg-[#0a0f1a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-0 md:px-6 md:pt-12">
        <HomeEntryPoints />
      </div>
      <VietnamNewsContent embedded />
    </div>
  );
}
