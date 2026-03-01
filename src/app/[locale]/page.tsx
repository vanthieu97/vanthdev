import type { Metadata } from 'next';
import { VietnamNewsContent } from './news/vietnam-news-content';
import { HomeEntryPoints } from '@/components/home-entry-points';
import { getCanonicalUrl, LOCALES, isValidLocale, type Locale } from '@/lib/i18n/config';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanthdev.com';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : 'vi';
  const pageUrl = getCanonicalUrl(baseUrl, locale, '/');
  const languages: Record<string, string> = {};
  for (const loc of LOCALES) {
    languages[loc === 'vi' ? 'vi-VN' : 'en-US'] = getCanonicalUrl(baseUrl, loc, '/');
  }
  languages['x-default'] = getCanonicalUrl(baseUrl, 'vi', '/');

  return {
    title: 'Tin tức Việt Nam - Tin nổi bật cập nhật liên tục',
    description:
      'Tin tức Việt Nam mới nhất, tin nổi bật trong ngày. Cập nhật liên tục từ các nguồn uy tín.',
    keywords: ['tin tức Việt Nam', 'tin nổi bật', 'tin trong ngày', 'thời sự', 'news Vietnam'],
    openGraph: {
      title: 'Tin tức Việt Nam - Tin nổi bật cập nhật liên tục',
      description:
        'Tin tức Việt Nam mới nhất, tin nổi bật trong ngày. Cập nhật liên tục từ các nguồn uy tín.',
      url: pageUrl,
      siteName: 'vanthdev.com',
      type: 'website',
      locale: locale === 'vi' ? 'vi_VN' : 'en_US',
      images: [{ url: '/og-news.png', width: 1200, height: 630, alt: 'Tin tức Việt Nam' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Tin tức Việt Nam - Tin nổi bật cập nhật liên tục',
      description: 'Tin tức Việt Nam mới nhất, tin nổi bật trong ngày.',
    },
    alternates: {
      canonical: pageUrl,
      languages,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export default function Home({ params }: { params: { locale: string } }) {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : 'vi';
  const pageUrl = getCanonicalUrl(baseUrl, locale, '/');
  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'vanthdev.com',
    url: pageUrl,
    description: 'Tin tức Việt Nam, đếm ngược Tết, Cúp C1 Champions League.',
  };

  return (
    <div className="bg-[#faf8f5] dark:bg-[#0a0f1a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <div className="max-w-6xl mx-auto px-4 pt-6 pb-0 md:px-6 md:pt-8">
        <HomeEntryPoints />
      </div>
      <VietnamNewsContent embedded locale={locale} />
    </div>
  );
}
