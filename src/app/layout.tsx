import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { LocaleProvider } from '@/contexts/locale-context';
import { ThemeProvider } from '@/contexts/theme-context';
import { ThemeInitScript } from '@/components/theme-init-script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lunar New Year Countdown',
  description: 'Countdown to Lunar New Year with country and timezone support.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  icons: {
    icon: '/lunar-favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeInitScript />
        <ThemeProvider>
          <LocaleProvider>
            {children}
            {gaId && <GoogleAnalytics gaId={gaId} />}
            <Analytics />
            <SpeedInsights />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
