'use client';

import { useEffect } from 'react';
import { ChampionsLeagueContent } from '@/components/champions-league-content';
import { useLocaleContext } from '@/contexts/locale-context';

export default function EnChampionsLeaguePage() {
  const { setLocale } = useLocaleContext();

  useEffect(() => {
    setLocale('en');
  }, [setLocale]);

  return <ChampionsLeagueContent locale="en" />;
}
