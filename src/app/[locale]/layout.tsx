import type { ReactNode } from 'react';
import { LocaleProvider } from '@/contexts/locale-context';
import { ConditionalSiteHeader } from '@/components/conditional-site-header';
import { ConditionalSiteFooter } from '@/components/conditional-site-footer';
import { ScrollToTop } from '@/components/scroll-to-top';
import { PwaInstallPrompt } from '@/components/pwa-install-prompt';
import { isValidLocale, type Locale } from '@/lib/i18n/config';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function LocaleLayout({ children, params }: Props) {
  const localeParam = params.locale;
  const locale: Locale = isValidLocale(localeParam) ? localeParam : 'vi';

  return (
    <LocaleProvider initialLocale={locale}>
      <div className="flex min-h-screen flex-col">
        <ConditionalSiteHeader />
        <main className="flex flex-1 flex-col">
          <div className="flex-1 flex flex-col min-h-0 bg-[#faf8f5] dark:bg-[#0a0f1a]">
            {children}
          </div>
        </main>
        <ConditionalSiteFooter />
      </div>
      <ScrollToTop />
      <PwaInstallPrompt />
    </LocaleProvider>
  );
}
