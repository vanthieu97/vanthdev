import type { Metadata } from 'next';

export const dynamic = 'force-static';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanthdev.com';
const pageUrl = `${baseUrl}/champions-league`;
const enUrl = `${baseUrl}/en/champions-league`;

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
    siteName: 'vanthdev.com',
    type: 'website',
    locale: 'vi_VN',
    alternateLocale: 'en_US',
    images: [{ url: '/og-c1.png', width: 1200, height: 630, alt: 'Kết quả bốc thăm vòng 1/8 Cúp C1 2025/2026' }],
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
      'en-US': enUrl,
      'x-default': pageUrl,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: '/c1-favicon.svg',
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
