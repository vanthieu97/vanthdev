import { ChampionsLeagueContent } from '@/components/champions-league-content';
import { isValidLocale, type Locale } from '@/lib/i18n/config';

export default function ChampionsLeaguePage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : 'vi';
  return <ChampionsLeagueContent locale={locale} />;
}
