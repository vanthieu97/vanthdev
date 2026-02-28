import type { Metadata } from 'next';

export const dynamic = 'force-static';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanthdev.com';
const pageUrl = `${baseUrl}/champions-league`;
const enUrl = `${baseUrl}/en/champions-league`;

export const metadata: Metadata = {
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
    description: 'Cúp C1 Champions League: Lịch đấu, kết quả vòng 1/8. PSG vs Chelsea, Real vs Man City. Chung kết 30.05.2026 Budapest.',
    url: pageUrl,
    siteName: 'vanthdev.com',
    type: 'website',
    locale: 'vi_VN',
    alternateLocale: 'en_US',
    // OG image via opengraph-image.tsx
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cúp C1 2025/2026 - Lịch thi đấu & Kết quả vòng 1/8',
    description: 'Cúp C1 Champions League: PSG vs Chelsea, Real vs Man City, Barcelona vs Newcastle. Chung kết Budapest 30.05.2026.',
  },
  alternates: {
    canonical: pageUrl,
    languages: {
      'vi-VN': pageUrl,
      'en-US': enUrl,
      'x-default': pageUrl,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Cúp C1 2025/2026', item: pageUrl },
      ],
    },
    {
      '@type': 'SportsEvent',
      name: 'Cúp C1 Champions League 2025/26 - Vòng 1/8',
      alternateName: 'UEFA Champions League 2025/26 Round of 16',
      description: 'Kết quả bốc thăm vòng 1/8 Cúp C1 Champions League 2025/2026. Lịch thi đấu, kết quả các cặp đấu PSG vs Chelsea, Real Madrid vs Man City.',
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

export default function ChampionsLeagueLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
