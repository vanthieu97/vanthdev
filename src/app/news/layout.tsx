import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
const newsUrl = `${baseUrl}/news`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Tin tức Việt Nam - Tin nổi bật cập nhật liên tục',
    template: '%s | Tin tức Việt Nam',
  },
  description:
    'Tin tức Việt Nam mới nhất, tin nổi bật trong ngày. Cập nhật liên tục từ các nguồn uy tín.',
  keywords: ['tin tức Việt Nam', 'tin nổi bật', 'tin trong ngày', 'thời sự', 'news Vietnam'],
  openGraph: {
    title: 'Tin tức Việt Nam - Tin nổi bật cập nhật liên tục',
    description: 'Tin tức Việt Nam mới nhất, tin nổi bật trong ngày. Cập nhật liên tục từ các nguồn uy tín.',
    url: newsUrl,
    siteName: 'Tin tức Việt Nam',
    type: 'website',
    locale: 'vi_VN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tin tức Việt Nam - Tin nổi bật cập nhật liên tục',
    description: 'Tin tức Việt Nam mới nhất, tin nổi bật trong ngày.',
  },
  alternates: {
    canonical: newsUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
