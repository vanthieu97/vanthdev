'use client';

import Link from 'next/link';
import { useLocale, type Locale } from '@/hooks/use-locale';

const ENTRY_POINTS: Record<
  Locale,
  Array<{ href: string; icon: string; title: string; desc: string }>
> = {
  vi: [
    {
      href: '/lunar-new-year-countdown',
      icon: '🎆',
      title: 'Đếm ngược Tết',
      desc: 'Đếm ngược đến Giao thừa Tết Nguyên đán',
    },
    {
      href: '/solar-system',
      icon: '🪐',
      title: 'Hệ Mặt Trời',
      desc: 'Khám phá các hành tinh quay quanh Mặt Trời',
    },
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
  ],
  en: [
    {
      href: '/lunar-new-year-countdown',
      icon: '🎆',
      title: 'Lunar New Year Countdown',
      desc: 'Countdown to Lunar New Year Eve',
    },
    {
      href: '/solar-system',
      icon: '🪐',
      title: 'Solar System',
      desc: 'Explore the planets orbiting the Sun',
    },
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
    <section className="mb-4 md:mb-6" aria-label={sectionLabel}>
      <h2 className="sr-only">{sectionLabel}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {points.map(({ href, icon, title, desc }) => (
          <Link
            key={href}
            href={href}
            className="group flex items-start gap-4 p-5 md:p-6 rounded-2xl
              bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] border border-[#eee]
              dark:bg-[#2d2d3d]/90 dark:border-[#4a4a5a]/60 dark:shadow-lg dark:shadow-black/20
              transition-all duration-300
              hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-[#e0e0e0] hover:-translate-y-0.5
              dark:hover:border-[#5a5a6a] dark:hover:bg-[#333344]/95
              text-left"
          >
            <span className="text-3xl md:text-4xl shrink-0" aria-hidden>
              {icon}
            </span>
            <div className="min-w-0">
              <h3 className="font-semibold text-[#1a1a1a] dark:text-white/95 text-base md:text-lg mb-0.5 group-hover:text-[#c41e3a] dark:group-hover:text-amber-400 transition-colors">
                {title}
              </h3>
              <p className="text-[#6b6b6b] dark:text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
