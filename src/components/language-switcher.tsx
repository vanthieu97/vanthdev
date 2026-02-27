'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocaleContext, type Locale } from '@/contexts/locale-context';
import { ThemeToggle } from './theme-toggle';

const LOCALE_LABELS: Record<Locale, string> = {
  vi: 'Tiếng Việt',
  en: 'English',
};

type LanguageSwitcherProps = {
  /** Optional class for the container */
  className?: string;
  /** Compact: buttons only. Full: labels + buttons */
  variant?: 'compact' | 'full';
  /** When set, use Link for SEO-friendly language URLs instead of client toggle */
  alternateUrls?: { vi: string; en: string };
  /** Light theme for light backgrounds (e.g. home page) */
  theme?: 'dark' | 'light';
  /** Show theme toggle in same container (same size as locale buttons) */
  showThemeToggle?: boolean;
};

export function LanguageSwitcher({ className = '', variant = 'full', alternateUrls, theme = 'dark', showThemeToggle = false }: LanguageSwitcherProps) {
  const { locale, setLocale } = useLocaleContext();
  const pathname = usePathname();

  const useLinks = alternateUrls && (pathname === alternateUrls.vi || pathname === alternateUrls.en);
  const activeLocale: Locale = useLinks
    ? pathname === alternateUrls.en
      ? 'en'
      : 'vi'
    : locale;

  const isLight = theme === 'light';
  const containerClass = isLight
    ? 'inline-flex items-center gap-1 rounded-lg border border-[#e0e0e0] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] p-1'
    : 'inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 p-1';

  return (
    <div
      className={`${containerClass} ${className}`}
      role="group"
      aria-label="Switch language and theme"
    >
      {showThemeToggle && (
        <>
          <ThemeToggle />
          <span className="w-px h-4 bg-[#e0e0e0] dark:bg-white/20 shrink-0" aria-hidden />
        </>
      )}
      {(['vi', 'en'] as const).map((l) => {
        const isActive = activeLocale === l;
        const baseClass = isLight
          ? `rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
              isActive
                ? 'bg-[#c41e3a]/10 text-[#c41e3a]'
                : 'text-[#6b6b6b] hover:bg-[#f5f5f5] hover:text-[#1a1a1a]'
            }`
          : `rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
              isActive
                ? 'bg-amber-500/20 text-amber-400'
                : 'text-slate-400 hover:bg-white/5 hover:text-white/80'
            }`;

        if (useLinks && alternateUrls) {
          const href = alternateUrls[l];
          const isCurrentPage = pathname === href;
          return (
            <Link
              key={l}
              href={href}
              className={baseClass}
              aria-current={isCurrentPage ? 'page' : undefined}
              aria-label={LOCALE_LABELS[l]}
            >
              {variant === 'full' ? LOCALE_LABELS[l] : l.toUpperCase()}
            </Link>
          );
        }

        return (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            className={baseClass}
            aria-pressed={isActive}
            aria-label={LOCALE_LABELS[l]}
          >
            {variant === 'full' ? LOCALE_LABELS[l] : l.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
