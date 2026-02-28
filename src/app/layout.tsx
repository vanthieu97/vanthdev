import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { LocaleProvider } from '@/contexts/locale-context';
import { ThemeProvider } from '@/contexts/theme-context';
import { ThemeInitScript } from '@/components/theme-init-script';
import { ScrollToTop } from '@/components/scroll-to-top';
import { ConditionalSiteFooter } from '@/components/conditional-site-footer';
import { ConditionalSiteHeader } from '@/components/conditional-site-header';
import { PwaInstallPrompt } from '@/components/pwa-install-prompt';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lunar New Year Countdown',
  description: 'Countdown to Lunar New Year with country and timezone support.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanthdev.com'),
  openGraph: {
    siteName: 'vanthdev.com',
  },
  // Favicon via app/icon.png, apple via app/apple-icon.png (Next.js file convention)
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeInitScript />
        <ThemeProvider>
          <LocaleProvider>
            <ConditionalSiteHeader />
            {children}
            <ConditionalSiteFooter />
            {gaId && <GoogleAnalytics gaId={gaId} />}
            <ScrollToTop />
            <PwaInstallPrompt />
            <Analytics />
            <SpeedInsights />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
