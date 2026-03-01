import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { getCanonicalUrl, isValidLocale, type Locale } from '@/lib/i18n/config';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanthdev.com';

function getPageUrl(locale: Locale) {
  return getCanonicalUrl(baseUrl, locale, '/champions-league');
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : 'vi';
  const pageUrl = getPageUrl(locale);
  const viUrl = getPageUrl('vi');
  const enUrl = getPageUrl('en');

  return {
    metadataBase: new URL(baseUrl),
    title: 'Cúp C1 2025/2026 - Kết quả bốc thăm vòng 1/8 Champions League',
    description:
      'Cúp C1 Champions League 2025/2026: Lịch thi đấu, kết quả vòng 1/8. PSG vs Chelsea, Real Madrid vs Man City, Barcelona vs Newcastle. Chung kết 30.05.2026 tại Puskás Aréna, Budapest.',
    keywords: [
      'Cúp C1',
      'Cup C1',
      'Champions League',
      'UEFA',
      'lịch thi đấu C1',
      'kết quả C1',
      'bốc thăm vòng 1/8',
      '2025 2026',
      'Budapest',
      'PSG Chelsea',
      'Real Madrid Man City',
      'Barcelona Newcastle',
    ],
    openGraph: {
      title: 'Cúp C1 2025/2026 - Lịch thi đấu & Kết quả vòng 1/8 Champions League',
      description:
        'Cúp C1 Champions League: Lịch đấu, kết quả vòng 1/8. PSG vs Chelsea, Real vs Man City. Chung kết 30.05.2026 Budapest.',
      url: pageUrl,
      siteName: 'vanthdev.com',
      type: 'website',
      locale: locale === 'vi' ? 'vi_VN' : 'en_US',
      alternateLocale: locale === 'vi' ? 'en_US' : 'vi_VN',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Cúp C1 2025/2026 - Lịch thi đấu & Kết quả vòng 1/8',
      description:
        'Cúp C1 Champions League: PSG vs Chelsea, Real vs Man City, Barcelona vs Newcastle. Chung kết Budapest 30.05.2026.',
    },
    alternates: {
      canonical: pageUrl,
      languages: {
        'vi-VN': viUrl,
        'en-US': enUrl,
        'x-default': viUrl,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

function buildJsonLd(locale: Locale) {
  const pageUrl = getPageUrl(locale);
  const homeUrl = getCanonicalUrl(baseUrl, locale, '/');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: homeUrl },
          { '@type': 'ListItem', position: 2, name: 'Cúp C1 2025/2026', item: pageUrl },
        ],
      },
      {
        '@type': 'SportsEvent',
        name: 'Cúp C1 Champions League 2025/26 - Vòng 1/8',
        alternateName: 'UEFA Champions League 2025/26 Round of 16',
        description:
          'Kết quả bốc thăm vòng 1/8 Cúp C1 Champions League 2025/2026. Lịch thi đấu, kết quả các cặp đấu PSG vs Chelsea, Real Madrid vs Man City.',
        startDate: '2026-03-10',
        endDate: '2026-05-30',
        location: {
          '@type': 'Place',
          name: 'Puskás Aréna',
          address: { '@type': 'PostalAddress', addressLocality: 'Budapest', addressCountry: 'HU' },
        },
        organizer: { '@type': 'Organization', name: 'UEFA', url: 'https://www.uefa.com' },
        url: pageUrl,
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Chung kết C1 2026 diễn ra khi nào?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Chung kết UEFA Champions League 2025/26 diễn ra ngày 30.05.2026 tại Puskás Aréna, Budapest, Hungary.',
            },
          },
          {
            '@type': 'Question',
            name: 'Thể thức vòng 1/8 như thế nào?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Mỗi cặp đấu đá hai lượt (đi – về). Đội ghi nhiều bàn thắng hơn sau hai lượt đi tiếp. Các đội đá lượt về trên sân nhà.',
            },
          },
          {
            '@type': 'Question',
            name: 'Các cặp đấu vòng 1/8 C1 2025/26?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'PSG vs Chelsea, Galatasaray vs Liverpool, Real Madrid vs Man City, Atalanta vs Bayern München, Newcastle vs Barcelona, Atleti vs Tottenham, Bodø/Glimt vs Sporting CP, Leverkusen vs Arsenal.',
            },
          },
        ],
      },
    ],
  };
}

const BREADCRUMB_ITEMS = [
  { href: '/', label: 'Trang chủ' },
  { label: 'Cúp C1 2025/2026' },
];

export default function ChampionsLeagueLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : 'vi';
  const pageUrl = getPageUrl(locale);
  const jsonLd = buildJsonLd(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-6xl mx-auto px-4 pt-6 md:px-6 md:pt-8">
        <Breadcrumb
          items={BREADCRUMB_ITEMS}
          currentPageUrl={pageUrl}
          locale={locale}
        />
      </div>
      {children}
    </>
  );
}
