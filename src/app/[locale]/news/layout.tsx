import type { Metadata } from 'next';
import { getCanonicalUrl, LOCALES, isValidLocale, type Locale } from '@/lib/i18n/config';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanthdev.com';

function getNewsUrl(locale: Locale) {
  return getCanonicalUrl(baseUrl, locale, '/news');
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : 'vi';
  const newsUrl = getNewsUrl(locale);
  const languages: Record<string, string> = {};
  for (const loc of LOCALES) {
    languages[loc === 'vi' ? 'vi-VN' : 'en-US'] = getNewsUrl(loc);
  }
  languages['x-default'] = getNewsUrl('vi');

  return {
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
      description:
        'Tin tức Việt Nam mới nhất, tin nổi bật trong ngày. Cập nhật liên tục từ các nguồn uy tín.',
      url: newsUrl,
      siteName: 'vanthdev.com',
      type: 'website',
      locale: locale === 'vi' ? 'vi_VN' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Tin tức Việt Nam - Tin nổi bật cập nhật liên tục',
      description: 'Tin tức Việt Nam mới nhất, tin nổi bật trong ngày.',
    },
    alternates: {
      canonical: newsUrl,
      languages,
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
}

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
