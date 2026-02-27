'use client';

import { useEffect } from 'react';
import { ChampionsLeagueContent } from '@/components/champions-league-content';
import { useLocaleContext } from '@/contexts/locale-context';

export default function ChampionsLeaguePage() {
  const { setLocale } = useLocaleContext();

  useEffect(() => {
    setLocale('vi');
  }, [setLocale]);

  return <ChampionsLeagueContent locale="vi" useUrlSwitcher />;
}
