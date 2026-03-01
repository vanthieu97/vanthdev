/**
 * i18n config for [locale] routing
 * Vietnamese (default): no prefix - /news, /film-reviews
 * English: /en prefix - /en/news, /en/film-reviews
 */
export const LOCALES = ['vi', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'vi';

export function isValidLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

/** Path with locale: vi = no prefix, en = /en prefix */
export function getLocalizedPath(locale: Locale, path: string): string {
  if (locale === 'vi') return path === '/' ? '/' : path;
  const base = path === '/' ? '' : path;
  return `/en${base}`;
}

/** Strip locale prefix from path. /en/news → /news, /vi/news → /news, /news → /news */
export function getPathWithoutLocale(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments[0] === 'vi' || segments[0] === 'en') {
    segments.shift();
    return segments.length ? '/' + segments.join('/') : '/';
  }
  return pathname || '/';
}

/** Full canonical URL. vi = baseUrl/path, en = baseUrl/en/path */
export function getCanonicalUrl(baseUrl: string, locale: Locale, path: string): string {
  const p = getLocalizedPath(locale, path);
  return `${baseUrl}${p === '/' ? '' : p}`;
}
