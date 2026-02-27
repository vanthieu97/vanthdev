'use client';

import { ChampionsLeagueContent } from '@/components/champions-league-content';
import { useLocale } from '@/hooks/useLocale';

export default function ChampionsLeaguePage() {
  const locale = useLocale();
  return <ChampionsLeagueContent locale={locale} useUrlSwitcher />;
}
