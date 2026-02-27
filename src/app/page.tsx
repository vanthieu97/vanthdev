import type { Metadata } from 'next';
import VietnamNewsPage from '@/app/news/page';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'Tin tức Việt Nam - Tin nổi bật cập nhật liên tục',
  description:
    'Tin tức Việt Nam mới nhất, tin nổi bật trong ngày. Cập nhật liên tục từ các nguồn uy tín.',
  keywords: ['tin tức Việt Nam', 'tin nổi bật', 'tin trong ngày', 'thời sự', 'news Vietnam'],
  openGraph: {
    title: 'Tin tức Việt Nam - Tin nổi bật cập nhật liên tục',
    description: 'Tin tức Việt Nam mới nhất, tin nổi bật trong ngày. Cập nhật liên tục từ các nguồn uy tín.',
    url: baseUrl,
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
    canonical: baseUrl,
  },
};

export default function Home() {
  return <VietnamNewsPage />;
}
