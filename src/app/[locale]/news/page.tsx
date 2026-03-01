import { VietnamNewsContent } from './vietnam-news-content';
import { isValidLocale, type Locale } from '@/lib/i18n/config';

export const dynamic = 'force-dynamic';
export const revalidate = 300;

export default async function NewsPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : 'vi';
  return <VietnamNewsContent locale={locale} />;
}
