'use client';

import { useTheme } from '@/contexts/theme-context';

type ThemeToggleProps = {
  /** When true, wrap in container (for standalone use e.g. news page) */
  standalone?: boolean;
};

export function ThemeToggle({ standalone = false }: ThemeToggleProps = {}) {
  const { theme, toggleTheme } = useTheme();

  const button = (
    <button
      type="button"
      onClick={toggleTheme}
      className="cursor-pointer rounded-md px-2.5 py-1 text-xs font-medium transition-colors inline-flex items-center justify-center
        text-[#6b6b6b] hover:bg-[#f5f5f5] hover:text-[#1a1a1a]
        dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white/80"
      aria-label={theme === 'dark' ? 'Bật sáng' : 'Bật tối'}
      title={theme === 'dark' ? 'Chế độ sáng' : 'Chế độ tối'}
    >
      <span aria-hidden>{theme === 'dark' ? '☀️' : '🌙'}</span>
    </button>
  );

  if (standalone) {
    return (
      <div className="inline-flex items-center gap-1 rounded-lg border border-[#e0e0e0] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] p-1 dark:border-white/10 dark:bg-white/5">
        {button}
      </div>
    );
  }

  return button;
}
