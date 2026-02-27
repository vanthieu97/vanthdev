'use client';

import Image from 'next/image';
import { BRACKET_LEFT, BRACKET_RIGHT, TEAM_LOGOS } from '@/lib/champions-league';
import { getC1Translations } from '@/lib/c1-i18n';
import type { Locale } from '@/lib/c1-i18n';
import { LanguageSwitcher } from '@/components/language-switcher';

function R16Match({
  home,
  away,
  variant,
}: {
  home: string;
  away: string;
  variant: 'left' | 'right';
}) {
  const isLeft = variant === 'left';
  return (
    <div
      className={`
        grid grid-cols-[1fr_auto_1fr] items-center gap-3 min-h-12 rounded-xl px-4 py-3
        border backdrop-blur-sm transition-all duration-200 hover:scale-[1.01]
        ${
          isLeft
            ? 'bg-[#2d2d3d]/90 border-[#4a4a5a]/60 hover:border-[#5a5a6a] hover:bg-[#333344]/95 shadow-lg shadow-black/20'
            : 'bg-[#1e3a4a]/90 border-[#2a5a6a]/60 hover:border-[#3a6a7a] hover:bg-[#224455]/95 shadow-lg shadow-black/20'
        }
      `}
    >
      <span className="font-semibold text-white/95 text-sm tracking-tight text-left whitespace-nowrap overflow-visible flex items-center gap-2">
        {TEAM_LOGOS[home] ? (
          <Image
            src={TEAM_LOGOS[home]}
            alt=""
            width={20}
            height={20}
            className="shrink-0 rounded-full object-contain"
            unoptimized
          />
        ) : null}
        {home}
      </span>
      <span className="text-amber-400 font-bold text-xs px-2 py-0.5 rounded bg-white/10 justify-self-center shrink-0">
        VS
      </span>
      <span className="font-semibold text-white/95 text-sm tracking-tight text-right whitespace-nowrap overflow-visible flex items-center gap-2 justify-end">
        {away}
        {TEAM_LOGOS[away] ? (
          <Image
            src={TEAM_LOGOS[away]}
            alt=""
            width={20}
            height={20}
            className="shrink-0 rounded-full object-contain"
            unoptimized
          />
        ) : null}
      </span>
    </div>
  );
}

type ChampionsLeagueContentProps = {
  locale: Locale;
  /** When true, LanguageSwitcher uses URL links for SEO (vi/en pages) */
  useUrlSwitcher?: boolean;
};

export function ChampionsLeagueContent({ locale, useUrlSwitcher = false }: ChampionsLeagueContentProps) {
  const t = getC1Translations(locale);

  return (
    <div className="min-h-screen flex flex-col overflow-y-auto relative">
      {/* Gradient background */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: 'linear-gradient(160deg, #0a0f1a 0%, #0f1525 35%, #121a2e 70%, #0d1220 100%)',
        }}
      />
      {/* Subtle grid + glow */}
      <div
        className="fixed inset-0 -z-10 opacity-[0.12]"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(120,180,255,0.3) 0%, transparent 50%),
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)
          `,
          backgroundSize: '100% 100%, 20px 20px',
        }}
      />

      <div className="flex-1 flex flex-col justify-center min-h-screen relative max-w-6xl mx-auto px-4 py-8 md:py-12 w-full">
        {/* Language switcher - in flow on mobile, absolute on desktop (top-12 = 48px to match home) */}
        <div className="flex justify-end mb-4 md:absolute md:top-12 md:right-6 md:mb-0">
          <LanguageSwitcher
            variant="full"
            alternateUrls={useUrlSwitcher ? { vi: '/champions-league', en: '/en/champions-league' } : undefined}
          />
        </div>

        {/* Header: ROAD TO BUDAPEST 26 */}
        <header className="text-center mb-6 md:mb-8">
          <p className="text-blue-200/70 text-xs font-semibold tracking-[0.3em] uppercase mb-2">
            {t.roadTo}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200 bg-clip-text text-transparent drop-shadow-sm">
              {t.budapest26}
            </span>
          </h1>
          <p className="text-white/50 text-xs mt-2 tracking-widest uppercase">
            {t.subtitle}
          </p>
          <p className="text-slate-400 text-sm mt-4 max-w-xl mx-auto leading-relaxed">
            {t.intro}
          </p>
        </header>

        {/* Bracket - Desktop */}
        <section className="relative">
          <div className="hidden lg:grid grid-cols-[1fr_80px_1fr] gap-4 items-start w-full max-w-6xl mx-auto">
            {/* Left half */}
            <div className="flex flex-col items-end gap-0 pr-2">
              <div className="flex flex-col w-full min-w-0 gap-2">
                <R16Match home={BRACKET_LEFT[0].home} away={BRACKET_LEFT[0].away} variant="left" />
                <R16Match home={BRACKET_LEFT[1].home} away={BRACKET_LEFT[1].away} variant="left" />
                <R16Match home={BRACKET_LEFT[2].home} away={BRACKET_LEFT[2].away} variant="left" />
                <R16Match home={BRACKET_LEFT[3].home} away={BRACKET_LEFT[3].away} variant="left" />
              </div>
            </div>

            {/* Center: bracket lines + trophy */}
            <div className="flex flex-col items-center justify-end pb-4 pt-8">
              <svg
                viewBox="0 0 80 120"
                className="w-16 h-32 text-slate-500/70 shrink-0"
                preserveAspectRatio="xMidYMax meet"
              >
                <path d="M 40 0 L 40 90" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M 15 20 L 40 20 L 65 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M 15 20 L 15 55 L 40 55"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M 65 20 L 65 55 L 40 55"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path d="M 40 55 L 40 90" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <div className="relative">
                <div className="absolute inset-0 blur-xl bg-amber-400/20 rounded-full scale-150" />
                <span className="relative text-5xl md:text-7xl drop-shadow-[0_0_12px_rgba(251,191,36,0.4)]">
                  🏆
                </span>
              </div>
            </div>

            {/* Right half */}
            <div className="flex flex-col items-start gap-0 pl-2">
              <div className="flex flex-col w-full min-w-0 gap-2">
                <R16Match
                  home={BRACKET_RIGHT[0].home}
                  away={BRACKET_RIGHT[0].away}
                  variant="right"
                />
                <R16Match
                  home={BRACKET_RIGHT[1].home}
                  away={BRACKET_RIGHT[1].away}
                  variant="right"
                />
                <R16Match
                  home={BRACKET_RIGHT[2].home}
                  away={BRACKET_RIGHT[2].away}
                  variant="right"
                />
                <R16Match
                  home={BRACKET_RIGHT[3].home}
                  away={BRACKET_RIGHT[3].away}
                  variant="right"
                />
              </div>
            </div>
          </div>

          {/* Mobile: vertical layout - full width for full team names */}
          <div className="lg:hidden flex flex-col gap-8">
            <div className="flex justify-center">
              <span className="text-5xl drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]">🏆</span>
            </div>
            <div className="space-y-4">
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                {t.bracketLeft}
              </p>
              {BRACKET_LEFT.map((f, i) => (
                <R16Match key={i} home={f.home} away={f.away} variant="left" />
              ))}
            </div>
            <div className="space-y-4">
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                {t.bracketRight}
              </p>
              {BRACKET_RIGHT.map((f, i) => (
                <R16Match key={i} home={f.home} away={f.away} variant="right" />
              ))}
            </div>
          </div>
        </section>

        <p className="text-slate-500 text-[10px] text-center mt-10 uppercase tracking-widest">
          {t.teamsPlay2ndLegAtHome}
        </p>

        {/* Key dates */}
        <section className="mt-12 pt-8 border-t border-white/10">
          <h2 className="text-slate-400 text-xs font-bold uppercase tracking-wider text-center mb-4">
            {t.keyDates}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
            <div className="bg-white/5 rounded-lg px-3 py-2.5 border border-white/5">
              <p className="text-amber-400/90 text-[10px] font-bold uppercase">{t.r16}</p>
              <p className="text-white/80 text-xs mt-0.5">{t.r16Dates}</p>
            </div>
            <div className="bg-white/5 rounded-lg px-3 py-2.5 border border-white/5">
              <p className="text-amber-400/90 text-[10px] font-bold uppercase">{t.qf}</p>
              <p className="text-white/80 text-xs mt-0.5">{t.qfDates}</p>
            </div>
            <div className="bg-white/5 rounded-lg px-3 py-2.5 border border-white/5">
              <p className="text-amber-400/90 text-[10px] font-bold uppercase">{t.sf}</p>
              <p className="text-white/80 text-xs mt-0.5">{t.sfDates}</p>
            </div>
            <div className="bg-white/5 rounded-lg px-3 py-2.5 border border-white/5">
              <p className="text-amber-400/90 text-[10px] font-bold uppercase">{t.final}</p>
              <p className="text-white/80 text-xs mt-0.5">{t.finalDate}</p>
              <p className="text-slate-500 text-[10px] mt-1">{t.finalVenue}</p>
            </div>
          </div>
          <p className="text-slate-600 text-[10px] text-center mt-4">
            {t.source}:{' '}
            <a
              href="https://www.uefa.com/uefachampionsleague/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-amber-400/80 transition-colors"
            >
              {t.uefa}
            </a>
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-12 pt-8 border-t border-white/10 max-w-2xl mx-auto">
          <h2 className="text-slate-400 text-xs font-bold uppercase tracking-wider text-center mb-4">
            {t.faqTitle}
          </h2>
          <dl className="space-y-4">
            <div>
              <dt className="text-white/90 text-sm font-semibold mb-1">{t.faq1Q}</dt>
              <dd className="text-slate-400 text-sm">{t.faq1A}</dd>
            </div>
            <div>
              <dt className="text-white/90 text-sm font-semibold mb-1">{t.faq2Q}</dt>
              <dd className="text-slate-400 text-sm">{t.faq2A}</dd>
            </div>
            <div>
              <dt className="text-white/90 text-sm font-semibold mb-1">{t.faq3Q}</dt>
              <dd className="text-slate-400 text-sm">{t.faq3A}</dd>
            </div>
          </dl>
        </section>

      </div>
    </div>
  );
}
