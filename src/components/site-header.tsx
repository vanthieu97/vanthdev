'use client';

import Link from 'next/link';
import { useTheme } from '@/contexts/theme-context';
import { useLocale } from '@/hooks/use-locale';
import { getLocalizedPath } from '@/lib/i18n/config';
import { LanguageSwitcher } from './language-switcher';

function getSiteDisplayName(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanthdev.com';
  const hostname = new URL(url).hostname;
  return hostname.replace(/^www\./, '') || hostname;
}

export function SiteHeader() {
  const { theme } = useTheme();
  const locale = useLocale();
  const siteDisplayName = getSiteDisplayName();

  return (
    <header
      className="sticky top-0 z-20 border-b border-[#e8e6e3] dark:border-white/10 bg-[#faf8f5]/95 dark:bg-[#0a0f1a]/95 backdrop-blur-sm"
      role="banner"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 md:px-6 flex items-center justify-between gap-4">
        <span className="vanthdev-btn-wrap inline-block shrink-0">
          <Link
            href={getLocalizedPath(locale, '/')}
            className="vanthdev-btn-inner inline-flex cursor-pointer items-center gap-1.5 px-3 py-1.5 font-semibold text-sm no-underline text-[#1a1a1a] hover:text-[#c41e3a] transition-colors dark:text-white/95 dark:hover:text-amber-400"
          >
            <img src="/vanthdev-logo.svg" alt="" width={28} height={28} className="shrink-0" />
            {siteDisplayName}
          </Link>
        </span>
        <LanguageSwitcher
          variant="full"
          theme={theme}
          showThemeToggle
        />
      </div>
    </header>
  );
}
