'use client';

import Link from 'next/link';
import { useLocale, type Locale } from '@/hooks/use-locale';
import { getLocalizedPath } from '@/lib/i18n/config';

const ENTRY_POINTS: Record<
  Locale,
  Array<{ href: string; icon: string; title: string; desc: string }>
> = {
  vi: [
    {
      href: '/champions-league',
      icon: '⚽',
      title: 'Cúp C1',
      desc: 'Kết quả bốc thăm vòng 1/8 Champions League',
    },
    {
      href: '/film-reviews',
      icon: '🎬',
      title: 'Review phim',
      desc: 'Đánh giá phim điện ảnh Việt Nam',
    },
    {
      href: '/gia-vang',
      icon: '🥇',
      title: 'Giá vàng',
      desc: 'Giá vàng SJC, DOJI, PNJ hôm nay',
    },
  ],
  en: [
    {
      href: '/champions-league',
      icon: '⚽',
      title: 'Champions League',
      desc: 'Round of 16 draw results',
    },
    {
      href: '/film-reviews',
      icon: '🎬',
      title: 'Film Review',
      desc: 'Vietnamese film reviews and ratings',
    },
    {
      href: '/gia-vang',
      icon: '🥇',
      title: 'Gold Price',
      desc: 'Live gold prices SJC, DOJI, PNJ',
    },
  ],
};

const SECTION_LABELS: Record<Locale, string> = {
  vi: 'Khám phá',
  en: 'Explore',
};

export function HomeEntryPoints() {
  const locale = useLocale();
  const points = ENTRY_POINTS[locale] ?? ENTRY_POINTS.en;
  const sectionLabel = SECTION_LABELS[locale] ?? SECTION_LABELS.en;

  return (
    <section className="mb-2 md:mb-3" aria-label={sectionLabel}>
      <h2 className="sr-only">{sectionLabel}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {points.map(({ href, icon, title, desc }) => (
          <Link
            key={href}
            href={getLocalizedPath(locale, href)}
            className="group flex items-start gap-4 p-4 md:p-5 rounded-xl
              bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] border border-[#eee]
              dark:bg-[#2d2d3d]/90 dark:border-[#4a4a5a]/60 dark:shadow-lg dark:shadow-black/20
              transition-all duration-300
              hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-[#e0e0e0] hover:-translate-y-0.5
              dark:hover:border-[#5a5a6a] dark:hover:bg-[#333344]/95
              text-left focus:outline-none focus:ring-2 focus:ring-[#c41e3a] focus:ring-offset-2 focus:ring-offset-[#faf8f5] dark:focus:ring-offset-[#0a0f1a] cursor-pointer"
          >
            <span className="text-3xl shrink-0" aria-hidden>
              {icon}
            </span>
            <div className="min-w-0">
              <h3 className="font-semibold text-[#1a1a1a] dark:text-white/95 text-lg leading-tight group-hover:text-[#c41e3a] dark:group-hover:text-amber-400 transition-colors">
                {title}
              </h3>
              <p className="text-[#6b6b6b] dark:text-slate-400 text-sm leading-snug line-clamp-2 mt-1">{desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
