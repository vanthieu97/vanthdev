import type { Metadata } from 'next';

export const dynamic = 'force-static';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
const pageUrl = `${baseUrl}/en/champions-league`;
const viUrl = `${baseUrl}/champions-league`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'UEFA Champions League 2025/26 Round of 16 Draw Results',
  description:
    'UEFA Champions League 2025/26 Round of 16 draw results. Fixtures: PSG vs Chelsea, Real Madrid vs Man City, Barcelona vs Newcastle. Final 30 May 2026 at Puskás Aréna, Budapest.',
  keywords: [
    'Champions League',
    'UEFA',
    'Round of 16 draw',
    '2025 2026',
    'Budapest',
    'PSG Chelsea',
    'Real Madrid Man City',
  ],
  openGraph: {
    title: 'UEFA Champions League 2025/26 Round of 16 Draw Results',
    description: 'UEFA Champions League 2025/26 Round of 16 draw results. Final at Puskás Aréna, Budapest.',
    url: pageUrl,
    siteName: 'Champions League 2025/26',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'vi_VN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UEFA Champions League 2025/26 Round of 16 Draw',
    description: 'Round of 16 draw - PSG vs Chelsea, Real Madrid vs Man City, and more fixtures.',
  },
  alternates: {
    canonical: pageUrl,
    languages: {
      'vi-VN': viUrl,
      'en-US': pageUrl,
      'x-default': viUrl,
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
      description: 'UEFA Champions League 2025/26 Round of 16 draw results',
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
          name: 'When is the 2026 Champions League final?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The 2025/26 UEFA Champions League final takes place on 30 May 2026 at Puskás Aréna, Budapest, Hungary.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does the Round of 16 format work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Each tie is played over two legs (home and away). The team with more goals on aggregate advances. Teams play the second leg at home.',
          },
        },
      ],
    },
  ],
};

export default function EnChampionsLeagueLayout({ children }: { children: React.ReactNode }) {
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
