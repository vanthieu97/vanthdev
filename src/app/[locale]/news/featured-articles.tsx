'use client';

import Link from 'next/link';
import { useLocale } from '@/hooks/use-locale';
import { getLocalizedPath } from '@/lib/i18n/config';
import { getNewsTranslations, type Locale } from '@/lib/news-i18n';

export function FeaturedArticles({
  embedded,
  locale: localeProp,
}: {
  embedded?: boolean;
  locale?: Locale;
}) {
  const localeFromHook = useLocale();
  const locale = (localeProp ?? localeFromHook) as Locale;
  const t = getNewsTranslations(locale);

  return (
    <section aria-label={t.featuredTitle}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div
          className={`flex items-baseline gap-3 ${embedded ? 'mb-4' : 'mb-6'}`}
        >
          <span className="inline-block w-1 h-6 bg-[#c41e3a] rounded-full" aria-hidden />
          <h2 className="text-xl md:text-2xl font-bold text-[#1a1a1a] dark:text-white/95 tracking-tight">
            {t.featuredTitle}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {t.featured.map(({ href, title, desc, tag, icon }) => (
            <Link
              key={href}
              href={getLocalizedPath(locale, href)}
              className="group flex flex-col p-3 md:p-4 rounded-xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] border border-[#eee] dark:bg-[#2d2d3d]/90 dark:border-[#4a4a5a]/60 dark:shadow-lg dark:shadow-black/20 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-[#e0e0e0] dark:hover:border-[#5a5a6a] dark:hover:bg-[#333344]/95 hover:-translate-y-0.5 text-left focus:outline-none focus:ring-2 focus:ring-[#c41e3a] focus:ring-offset-2 focus:ring-offset-[#faf8f5] dark:focus:ring-offset-[#0a0f1a] cursor-pointer"
              aria-label={`${t.readArticle}: ${title}`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xl" aria-hidden>
                  {icon}
                </span>
                <span className="text-xs font-semibold text-[#c41e3a] dark:text-amber-400 uppercase tracking-wide">
                  {tag}
                </span>
              </div>
              <h3 className="font-semibold text-[#1a1a1a] dark:text-white/95 text-base leading-tight line-clamp-2 group-hover:text-[#c41e3a] dark:group-hover:text-amber-400 transition-colors">
                {title}
              </h3>
              <p className="text-[#6b6b6b] dark:text-slate-400 text-sm leading-snug line-clamp-1 mt-1">
                {desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
