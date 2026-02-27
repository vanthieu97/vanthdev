'use client';

import { useLocaleContext } from '@/contexts/LocaleContext';

export type { Locale } from '@/contexts/LocaleContext';

/**
 * Returns current locale from LocaleContext.
 * Locale can be changed via LanguageSwitcher or setLocale from useLocaleContext.
 */
export function useLocale() {
  const { locale } = useLocaleContext();
  return locale;
}
