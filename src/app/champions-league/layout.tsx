import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
const pageUrl = `${baseUrl}/champions-league`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Kết quả bốc thăm vòng 1/8 Cúp C1 châu Âu 2025/2026',
  description:
    'Kết quả bốc thăm vòng 1/8 UEFA Champions League 2025/2026. Xem các cặp đấu: PSG vs Chelsea, Real Madrid vs Man City, Barcelona vs Newcastle. Chung kết 30.05.2026 tại Puskás Aréna, Budapest.',
  keywords: [
    'Cúp C1',
    'Champions League',
    'UEFA',
    'bốc thăm vòng 1/8',
    '2025 2026',
    'Budapest',
    'PSG Chelsea',
    'Real Madrid Man City',
  ],
  openGraph: {
    title: 'Kết quả bốc thăm vòng 1/8 Cúp C1 châu Âu 2025/2026',
    description: 'Kết quả bốc thăm vòng 1/8 UEFA Champions League 2025/2026. Chung kết tại Puskás Aréna, Budapest.',
    url: pageUrl,
    siteName: 'Champions League 2025/26',
    type: 'website',
    locale: 'vi_VN',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kết quả bốc thăm vòng 1/8 Cúp C1 2025/2026',
    description: 'UEFA Champions League Round of 16 draw - PSG vs Chelsea, Real Madrid vs Man City, và các cặp đấu khác.',
  },
  alternates: {
    canonical: pageUrl,
    languages: {
      'vi-VN': pageUrl,
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
      '@type': 'SportsEvent',
      name: 'UEFA Champions League 2025/26 Round of 16',
      description: 'Kết quả bốc thăm vòng 1/8 UEFA Champions League 2025/2026',
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
