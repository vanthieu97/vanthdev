import type { Metadata } from 'next';
import { Suspense } from 'react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Lunar New Year Countdown 2026 – Chinese New Year & Tet Countdown Timer',
  description:
    'Live countdown to Lunar New Year 2026 with timezone support. Track Chinese New Year, Tet holiday, and Spring Festival countdown instantly.',
  openGraph: {
    title: 'Lunar New Year Countdown',
    description: 'Countdown to Lunar New Year with country & timezone support.',
    type: 'website',
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
};

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
