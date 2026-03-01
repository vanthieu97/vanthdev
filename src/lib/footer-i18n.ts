/**
 * Footer translations
 */
import type { Locale } from '@/lib/i18n/config';

export const FOOTER_TRANSLATIONS: Record<
  Locale,
  {
    newsUpdated: string;
    pushNotifications: string;
  }
> = {
  vi: {
    newsUpdated: 'Tin tức được cập nhật liên tục',
    pushNotifications: 'Thông báo đẩy',
  },
  en: {
    newsUpdated: 'News updated continuously',
    pushNotifications: 'Push notifications',
  },
};

export function getFooterTranslations(locale: Locale) {
  return FOOTER_TRANSLATIONS[locale] ?? FOOTER_TRANSLATIONS.vi;
}
