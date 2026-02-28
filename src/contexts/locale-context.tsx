'use client';

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';

const COOKIE_NAME = 'locale';
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 year in seconds

export type Locale = 'vi' | 'en';

function getBrowserLocale(): Locale {
  if (typeof navigator === 'undefined') return 'en';
  const lang = navigator.language ?? navigator.languages?.[0] ?? 'en';
  return lang.toLowerCase().startsWith('vi') ? 'vi' : 'en';
}

function getLocaleFromCookie(): Locale | null {
  if (typeof document === 'undefined') return null;
  try {
    const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`));
    const value = match ? decodeURIComponent(match[1]) : null;
    if (value === 'vi' || value === 'en') return value;
  } catch {
    /* ignore */
  }
  return null;
}

function setLocaleCookie(locale: Locale): void {
  if (typeof document === 'undefined') return;
  try {
    document.cookie = `${COOKIE_NAME}=${encodeURIComponent(locale)}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
  } catch {
    /* ignore */
  }
}

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

type LocaleProviderProps = {
  children: ReactNode;
  /** Server-read locale from cookie; avoids flash of wrong language on first load */
  initialLocale?: Locale | null;
};

export function LocaleProvider({ children, initialLocale = null }: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(() => initialLocale ?? 'en');

  useEffect(() => {
    if (initialLocale != null) return;
    setLocaleState(getLocaleFromCookie() ?? getBrowserLocale());
  }, [initialLocale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    setLocaleCookie(next);
  }, []);

  const value: LocaleContextValue = { locale, setLocale };

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocaleContext(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error('useLocaleContext must be used within LocaleProvider');
  }
  return ctx;
}
