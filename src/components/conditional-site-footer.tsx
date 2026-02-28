'use client';

import { usePathname } from 'next/navigation';
import { shouldShowSiteLayout } from '@/lib/site-layout';
import { SiteFooter } from './site-footer';

export function ConditionalSiteFooter() {
  const pathname = usePathname();
  if (!shouldShowSiteLayout(pathname)) return null;

  return <SiteFooter />;
}
