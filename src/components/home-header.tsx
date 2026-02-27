'use client';

import { useTheme } from '@/contexts/theme-context';
import { LanguageSwitcher } from './language-switcher';

export function HomeHeader() {
  const { theme } = useTheme();
  return (
    <div className="flex justify-end mb-4">
      <LanguageSwitcher variant="full" theme={theme} showThemeToggle />
    </div>
  );
}
