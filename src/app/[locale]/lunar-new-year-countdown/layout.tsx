import type { Metadata } from 'next';
import { Suspense } from 'react';
import { getCanonicalUrl, LOCALES, isValidLocale, type Locale } from '@/lib/i18n/config';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanthdev.com';

export const dynamic = 'force-static';

function getPageUrl(locale: Locale) {
  return getCanonicalUrl(baseUrl, locale, '/lunar-new-year-countdown');
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : 'vi';
  const pageUrl = getPageUrl(locale);
  const languages: Record<string, string> = {};
  for (const loc of LOCALES) {
    languages[loc === 'vi' ? 'vi-VN' : 'en-US'] = getPageUrl(loc);
  }
  languages['x-default'] = getPageUrl('vi');

  return {
    title: 'Lunar New Year Countdown 2026 – Chinese New Year & Tet Countdown Timer',
    description:
      'Live countdown to Lunar New Year 2026 with timezone support. Track Chinese New Year, Tet holiday, and Spring Festival countdown instantly.',
    openGraph: {
      title: 'Lunar New Year Countdown',
      description: 'Countdown to Lunar New Year with country & timezone support.',
      url: pageUrl,
      type: 'website',
      locale: locale === 'vi' ? 'vi_VN' : 'en_US',
      images: [
        { url: '/lunar-og-image.png', width: 1200, height: 630, alt: 'Lunar New Year Countdown' },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Lunar New Year Countdown',
      description: 'Countdown to Lunar New Year with country & timezone support.',
      images: ['/lunar-og-image.png'],
    },
    alternates: { canonical: pageUrl, languages },
  };
}

export default function LunarNewYearCountdownLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <div className="min-h-0 flex-1 overflow-y-auto">
        <Suspense fallback={<div className="bg-pattern min-h-screen" aria-hidden="true" />}>
          {children}
        </Suspense>
      </div>
    </div>
  );
}
