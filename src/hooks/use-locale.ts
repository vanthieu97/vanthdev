'use client';

import { useLocaleContext } from '@/contexts/locale-context';

export type { Locale } from '@/contexts/locale-context';

/**
 * Returns current locale from LocaleContext.
 * Locale can be changed via LanguageSwitcher or setLocale from useLocaleContext.
 */
export function useLocale() {
  const { locale } = useLocaleContext();
  return locale;
}
