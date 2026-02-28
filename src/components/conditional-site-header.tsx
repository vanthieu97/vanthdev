'use client';

import { usePathname } from 'next/navigation';
import { shouldShowSiteLayout } from '@/lib/site-layout';
import { SiteHeader } from './site-header';

export function ConditionalSiteHeader() {
  const pathname = usePathname();
  if (!shouldShowSiteLayout(pathname)) return null;

  const alternateUrls = pathname?.startsWith('/en/champions-league')
    ? { vi: '/champions-league', en: '/en/champions-league' }
    : pathname?.startsWith('/champions-league')
      ? { vi: '/champions-league', en: '/en/champions-league' }
      : undefined;

  return <SiteHeader alternateUrls={alternateUrls} />;
}
