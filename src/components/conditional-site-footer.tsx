'use client';

import { usePathname } from 'next/navigation';

/** Renders children (SiteFooter) except on routes that have their own in layout */
export function ConditionalSiteFooter({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith('/lunar-new-year-countdown')) return null;
  if (pathname === '/solar-system') return null;
  return <>{children}</>;
}
