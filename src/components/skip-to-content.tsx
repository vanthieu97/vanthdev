const LABELS: Record<string, string> = {
  vi: 'Chuyển đến nội dung chính',
  en: 'Skip to main content',
};

export function SkipToContent({ locale = 'vi' }: { locale?: string }) {
  const label = LABELS[locale === 'en' ? 'en' : 'vi'];
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#c41e3a] focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-[#c41e3a] focus:ring-offset-2 dark:focus:bg-amber-500 dark:focus:text-[#1a1a1a]"
    >
      {label}
    </a>
  );
}
