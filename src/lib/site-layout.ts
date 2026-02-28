/**
 * Routes that use their own full-page layout (no shared header/footer).
 * Header and footer are hidden on these paths.
 */
export const SITE_LAYOUT_IGNORE_PATHS = [
  '/lunar-new-year-countdown',
  '/solar-system',
] as const;

export function shouldShowSiteLayout(pathname: string | null): boolean {
  if (!pathname) return false;
  return !SITE_LAYOUT_IGNORE_PATHS.some((p) => pathname.startsWith(p));
}
