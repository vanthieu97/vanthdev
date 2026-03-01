'use client';

import { usePathname } from 'next/navigation';
import { shouldShowSiteLayout } from '@/lib/site-layout';
import { SiteHeader } from './site-header';

export function ConditionalSiteHeader() {
  const pathname = usePathname();
  if (!shouldShowSiteLayout(pathname)) return null;

  return <SiteHeader />;
}
