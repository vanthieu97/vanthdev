import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ThemeProvider } from '@/contexts/theme-context';
import { ThemeInitScript } from '@/components/theme-init-script';
import { isValidLocale } from '@/lib/i18n/config';
import './globals.css';

export const metadata: Metadata = {
  title: 'vanthdev.com',
  description: 'Tin tức Việt Nam, Cúp C1 Champions League, giá vàng, review phim.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanthdev.com'),
  openGraph: {
    siteName: 'vanthdev.com',
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const headersList = await headers();
  const localeHeader = headersList.get('x-locale');
  const lang = localeHeader && isValidLocale(localeHeader) ? localeHeader : 'vi';

  return (
    <html lang={lang} suppressHydrationWarning>
      <body>
        <ThemeInitScript />
        <ThemeProvider>
          {children}
          {gaId && <GoogleAnalytics gaId={gaId} />}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
