/**
 * Footer translations
 */
import type { Locale } from '@/lib/i18n/config';

export const FOOTER_TRANSLATIONS: Record<
  Locale,
  {
    newsUpdated: string;
    pushNotifications: string;
    news: string;
    championsLeague: string;
    filmReviews: string;
    goldPrice: string;
  }
> = {
  vi: {
    newsUpdated: 'Tin tức được cập nhật liên tục',
    pushNotifications: 'Thông báo đẩy',
    news: 'Tin tức',
    championsLeague: 'Cúp C1',
    filmReviews: 'Review phim',
    goldPrice: 'Giá vàng',
  },
  en: {
    newsUpdated: 'News updated continuously',
    pushNotifications: 'Push notifications',
    news: 'News',
    championsLeague: 'Champions League',
    filmReviews: 'Film Review',
    goldPrice: 'Gold Price',
  },
};

export function getFooterTranslations(locale: Locale) {
  return FOOTER_TRANSLATIONS[locale] ?? FOOTER_TRANSLATIONS.vi;
}
