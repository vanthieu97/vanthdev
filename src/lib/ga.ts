/**
 * Google Analytics 4 event helpers.
 * Use in client components only.
 */

declare global {
  interface Window {
    gtag?: (
      command: 'event',
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

export function trackEvent(
  action: string,
  params?: Record<string, unknown>
): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, params);
  }
}

/** Track article click (user clicked to read) */
export function trackArticleClick(
  articleId: string,
  title: string,
  source: string
): void {
  trackEvent('article_click', {
    article_id: articleId,
    article_title: title,
    source_name: source,
  });
}

/** Track load more button click */
export function trackLoadMoreClick(): void {
  trackEvent('load_more_click');
}
