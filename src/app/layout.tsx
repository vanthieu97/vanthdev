import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { LocaleProvider } from '@/contexts/LocaleContext';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lunar New Year Countdown',
  description: 'Countdown to Lunar New Year with country and timezone support.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  icons: {
    icon: '/lunar-favicon.svg',
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('locale')?.value;
  const initialLocale = localeCookie === 'vi' || localeCookie === 'en' ? localeCookie : null;

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <LocaleProvider initialLocale={initialLocale}>
          {children}
          {gaId && <GoogleAnalytics gaId={gaId} />}
          <Analytics />
          <SpeedInsights />
        </LocaleProvider>
      </body>
    </html>
  );
}
