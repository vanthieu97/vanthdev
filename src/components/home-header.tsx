'use client';

import { LanguageSwitcher } from './language-switcher';

export function HomeHeader() {
  return (
    <div className="flex justify-end mb-4">
      <LanguageSwitcher variant="full" theme="light" />
    </div>
  );
}
