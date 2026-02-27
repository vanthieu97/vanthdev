'use client';

import { useLocaleContext, type Locale } from '@/contexts/LocaleContext';

const LOCALE_LABELS: Record<Locale, string> = {
  vi: 'Tiếng Việt',
  en: 'English',
};

type LanguageSwitcherProps = {
  /** Optional class for the container */
  className?: string;
  /** Compact: buttons only. Full: labels + buttons */
  variant?: 'compact' | 'full';
};

export function LanguageSwitcher({ className = '', variant = 'full' }: LanguageSwitcherProps) {
  const { locale, setLocale } = useLocaleContext();

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 p-1 ${className}`}
      role="group"
      aria-label="Switch language"
    >
      {(['vi', 'en'] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          className={`
            rounded-md px-2.5 py-1 text-xs font-medium transition-colors
            ${locale === l
              ? 'bg-amber-500/20 text-amber-400'
              : 'text-slate-400 hover:bg-white/5 hover:text-white/80'
            }
          `}
          aria-pressed={locale === l}
          aria-label={LOCALE_LABELS[l]}
        >
          {variant === 'full' ? LOCALE_LABELS[l] : l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
