import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { DEFAULT_LOCALE, isValidLocale } from '@/lib/i18n/config';

const COOKIE_NAME = 'locale';

function getLocaleFromRequest(request: NextRequest): string {
  const cookie = request.cookies.get(COOKIE_NAME)?.value;
  if (cookie && isValidLocale(cookie)) return cookie;
  const acceptLang = request.headers.get('accept-language') ?? '';
  const preferred = acceptLang.split(',')[0]?.split('-')[0]?.toLowerCase();
  return preferred === 'en' ? 'en' : DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.includes('.') // static files
  ) {
    return NextResponse.next();
  }

  const segs = pathname.split('/').filter(Boolean);
  const first = segs[0];

  if (first === 'vi') {
    const pathWithoutVi = segs.length === 1 ? '/' : '/' + segs.slice(1).join('/');
    const url = request.nextUrl.clone();
    url.pathname = pathWithoutVi;
    return NextResponse.redirect(url);
  }

  if (first === 'en') {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-locale', 'en');
    const res = NextResponse.next({ request: { headers: requestHeaders } });
    res.cookies.set(COOKIE_NAME, 'en', { path: '/', maxAge: 365 * 24 * 60 * 60 });
    return res;
  }

  const locale = getLocaleFromRequest(request);
  if (locale === DEFAULT_LOCALE) {
    const rewritePath = `/vi${pathname === '/' ? '' : pathname}`;
    const url = request.nextUrl.clone();
    url.pathname = rewritePath;
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-locale', 'vi');
    const res = NextResponse.rewrite(url, { request: { headers: requestHeaders } });
    res.cookies.set(COOKIE_NAME, 'vi', { path: '/', maxAge: 365 * 24 * 60 * 60 });
    return res;
  }

  const newUrl = new URL(`/en${pathname === '/' ? '' : pathname}`, request.url);
  newUrl.search = request.nextUrl.search;
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|apple-icon|icon|og-news).*)'],
};
