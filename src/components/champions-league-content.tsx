'use client';

import { useMemo } from 'react';
import {
  getScheduleGroupedByDate,
  getResultsGroupedByDate,
  DATE_WEEKDAYS,
  QF_SCHEDULE,
  SF_SCHEDULE,
  FINAL_SCHEDULE,
  PLAYOFF_RESULTS,
  GROUP_STAGE_RESULTS,
  groupEmptySlotsByDate,
  type ScheduleEntry,
  type EmptyScheduleSlot,
  type MatchResult,
} from '@/lib/champions-league';
import { TeamLogo } from '@/components/team-logo';
import { getC1Translations } from '@/lib/c1-i18n';
import type { Locale } from '@/lib/c1-i18n';

function ResultMatchCard({ result }: { result: MatchResult }) {
  const { home, away, homeScore, awayScore, time, date } = result;
  const homeWins = homeScore > awayScore;
  const awayWins = awayScore > homeScore;
  const isDraw = homeScore === awayScore;

  return (
    <div
      className="rounded-xl px-4 py-3 border backdrop-blur-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-xl
        bg-white/95 dark:bg-[#1e2a35]/95 border-[#e0e0e0] dark:border-[#3d4a5a]
        hover:border-amber-400/50 dark:hover:border-amber-400/40
        shadow-md shadow-black/5 dark:shadow-black/30"
    >
      <p className="text-[10px] text-[#6b6b6b] dark:text-slate-400 mb-2 font-medium">
        {time} {date}
      </p>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <span
          className={`font-semibold text-sm truncate flex items-center gap-1.5 transition-colors ${
            homeWins
              ? 'text-emerald-700 dark:text-emerald-300'
              : isDraw
                ? 'text-[#1a1a1a] dark:text-white/95'
                : 'text-[#1a1a1a] dark:text-white/70'
          }`}
        >
          <TeamLogo team={home} size={20} />
          {home}
        </span>
        <span className="px-3 py-1 rounded-lg bg-linear-to-br from-amber-500/20 to-amber-600/30 dark:from-amber-400/20 dark:to-amber-500/30 text-amber-800 dark:text-amber-200 font-bold text-sm shrink-0 border border-amber-400/30">
          {homeScore}–{awayScore}
        </span>
        <span
          className={`font-semibold text-sm truncate flex items-center gap-1.5 justify-end transition-colors ${
            awayWins
              ? 'text-emerald-700 dark:text-emerald-300'
              : isDraw
                ? 'text-[#1a1a1a] dark:text-white/95'
                : 'text-[#1a1a1a] dark:text-white/70'
          }`}
        >
          {away}
          <TeamLogo team={away} size={20} />
        </span>
      </div>
    </div>
  );
}

function EmptyScheduleCard({ slot, tbdLabel }: { slot: EmptyScheduleSlot; tbdLabel: string }) {
  return (
    <div
      className="rounded-xl px-4 py-3 border backdrop-blur-sm
        bg-white/90 dark:bg-[#2d2d3d]/90 border-[#e0e0e0] dark:border-[#4a4a5a]/60
        shadow-lg shadow-black/10 dark:shadow-black/20"
    >
      <p className="text-[10px] text-[#6b6b6b] dark:text-slate-400 mb-2">
        {slot.time} {slot.date}
      </p>
      <div className="flex items-center justify-center gap-2">
        <span className="text-2xl opacity-60" aria-hidden>
          🏆
        </span>
        <span className="text-amber-600 dark:text-amber-400 font-bold text-xs">–</span>
        <span className="text-2xl opacity-60" aria-hidden>
          🏆
        </span>
      </div>
      <p className="text-[10px] text-[#8a8a8a] dark:text-slate-500 mt-1 text-center">{tbdLabel}</p>
    </div>
  );
}

function ScheduleMatchCard({
  entry,
  leg1Label,
  leg2Label,
}: {
  entry: ScheduleEntry;
  leg1Label: string;
  leg2Label: string;
}) {
  const { home, away, time, leg } = entry;
  const legLabel = leg === 1 ? leg1Label : leg2Label;
  return (
    <div
      className="rounded-xl px-4 py-3 border backdrop-blur-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-xl
        bg-white/95 dark:bg-[#1e2a35]/95 border-[#e0e0e0] dark:border-[#3d4a5a]
        hover:border-amber-400/50 dark:hover:border-amber-400/40
        shadow-md shadow-black/5 dark:shadow-black/30"
    >
      <p className="text-[10px] text-[#6b6b6b] dark:text-slate-400 mb-2 font-medium">
        {time} • {legLabel}
      </p>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <span className="font-semibold text-[#1a1a1a] dark:text-white/95 text-sm truncate flex items-center gap-1.5">
          <TeamLogo team={home} size={20} />
          {home}
        </span>
        <span className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-400/20 text-amber-700 dark:text-amber-300 font-bold text-xs shrink-0">
          VS
        </span>
        <span className="font-semibold text-[#1a1a1a] dark:text-white/95 text-sm truncate flex items-center gap-1.5 justify-end">
          {away}
          <TeamLogo team={away} size={20} />
        </span>
      </div>
    </div>
  );
}

function SectionHeader({
  icon,
  title,
  className = '',
}: {
  icon: string;
  title: string;
  className?: string;
}) {
  return (
    <h2
      className={`flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider mb-6 ${className}`}
    >
      <span className="text-lg" aria-hidden>
        {icon}
      </span>
      <span className="text-[#6b6b6b] dark:text-slate-400">{title}</span>
    </h2>
  );
}

const FINAL_DATE = new Date('2026-05-30T20:00:00Z'); // 30.05.2026 21:00 VN

function useCountdown(target: Date) {
  return useMemo(() => {
    const now = new Date();
    const diff = target.getTime() - now.getTime();
    if (diff <= 0) return { days: 0, hours: 0, mins: 0, isPast: true };
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return { days, hours, mins, isPast: false };
  }, [target]);
}

type ChampionsLeagueContentProps = {
  locale: Locale;
};

export function ChampionsLeagueContent({ locale }: ChampionsLeagueContentProps) {
  const t = getC1Translations(locale);
  const countdown = useCountdown(FINAL_DATE);

  return (
    <div className="min-h-screen flex flex-col overflow-y-auto relative bg-linear-to-b from-[#f5f3ef] via-[#faf8f5] to-[#f0ede8] dark:from-[#0a0f1a] dark:via-[#0d1320] dark:to-[#0a0f1a]">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="flex-1 flex flex-col justify-center min-h-screen relative max-w-6xl mx-auto px-4 py-8 md:py-12 w-full">
        {/* Hero */}
        <header className="text-center mb-8 md:mb-10">
          <p className="text-[#1a237e]/90 dark:text-blue-400/80 text-xs font-semibold tracking-[0.35em] uppercase mb-2">
            {t.roadTo}
          </p>
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight">
            <span className="bg-linear-to-r from-amber-600 via-amber-500 to-amber-600 dark:from-amber-300 dark:via-amber-200 dark:to-amber-300 bg-clip-text text-transparent drop-shadow-md">
              {t.budapest26}
            </span>
          </h1>
          <p className="sr-only">
            {locale === 'vi'
              ? 'Cúp C1 Champions League 2025/2026 - Lịch thi đấu & Kết quả vòng 1/8'
              : 'Champions League 2025/2026 - Round of 16 schedule & results'}
          </p>
          <p className="text-[#6b6b6b] dark:text-white/50 text-xs mt-2 tracking-widest uppercase">
            {t.subtitle}
          </p>
          <p className="text-[#5c5c5c] dark:text-slate-400 text-sm mt-4 max-w-xl mx-auto leading-relaxed">
            {t.intro}
          </p>
        </header>

        {/* Trophy */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 blur-2xl bg-amber-400/30 dark:bg-amber-400/20 rounded-full scale-150 animate-pulse" />
            <span
              className="relative text-6xl md:text-8xl block animate-bounce"
              style={{ animationDuration: '2s' }}
            >
              🏆
            </span>
          </div>
        </div>

        {/* Venue + Countdown */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 flex-wrap">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 dark:bg-[#1e2a35]/90 border border-amber-400/30 shadow-md">
            <span className="text-lg" aria-hidden>
              🏟️
            </span>
            <span className="text-sm font-medium text-[#1a1a1a] dark:text-white/90">
              {t.finalVenue} • {t.finalDate}
            </span>
          </div>
          {!countdown.isPast && (
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-amber-500/15 dark:bg-amber-400/10 border border-amber-400/40">
              <span className="text-sm text-amber-800 dark:text-amber-200 font-semibold">
                {locale === 'vi' ? 'Còn' : 'In'}{' '}
                <span className="tabular-nums font-bold">{countdown.days}</span>{' '}
                {locale === 'vi' ? 'ngày' : 'days'} {locale === 'vi' ? 'đến chung kết' : 'to final'}
              </span>
            </div>
          )}
        </div>

        {/* Quick nav */}
        <nav
          className="flex flex-wrap justify-center gap-2 mb-8"
          aria-label={locale === 'vi' ? 'Điều hướng nhanh' : 'Quick navigation'}
        >
          {[
            { id: 'schedule-r16', label: locale === 'vi' ? 'Lịch 1/8' : 'R16', icon: '📅' },
            { id: 'schedule-qf', label: locale === 'vi' ? 'Tứ kết' : 'QF', icon: '🏆' },
            { id: 'schedule-final', label: locale === 'vi' ? 'Chung kết' : 'Final', icon: '🏆' },
            { id: 'results', label: locale === 'vi' ? 'Kết quả' : 'Results', icon: '📊' },
            { id: 'faq', label: 'FAQ', icon: '❓' },
          ].map(({ id, label, icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
                bg-white/80 dark:bg-white/10 border border-[#eee] dark:border-white/10
                text-[#1a1a1a] dark:text-white/90
                hover:bg-amber-100 dark:hover:bg-amber-400/20 hover:border-amber-400/40 transition-colors"
            >
              <span aria-hidden>{icon}</span>
              {label}
            </a>
          ))}
        </nav>

        {/* Lịch thi đấu vòng 1/8 */}
        <section id="schedule-r16" className="scroll-mt-24">
          <SectionHeader icon="📅" title={t.scheduleTitle} />
          <div className="space-y-8">
            {getScheduleGroupedByDate().map(({ date, entries }) => {
              const weekday = DATE_WEEKDAYS[date]?.[locale === 'vi' ? 'vi' : 'en'] ?? date;
              const dateLabel =
                locale === 'vi' ? `${weekday}, ngày ${date}/2026` : `${weekday}, ${date}/2026`;
              return (
                <div key={date}>
                  <p className="text-[#8a8a8a] dark:text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3 px-3 py-2 rounded-lg bg-white/80 dark:bg-white/5 border border-[#eee] dark:border-white/10">
                    {dateLabel}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {entries.map((entry, i) => (
                      <ScheduleMatchCard
                        key={`${date}-${i}-${entry.home}-${entry.away}`}
                        entry={entry}
                        leg1Label={t.leg1}
                        leg2Label={t.leg2}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Lịch Tứ kết */}
        <section
          id="schedule-qf"
          className="mt-12 pt-8 border-t border-[#e8e6e3] dark:border-white/10 scroll-mt-24"
        >
          <SectionHeader icon="🏆" title={t.scheduleQf} />
          <div className="space-y-8">
            {groupEmptySlotsByDate(QF_SCHEDULE).map(({ date, slots }) => {
              const weekday = DATE_WEEKDAYS[date]?.[locale === 'vi' ? 'vi' : 'en'] ?? date;
              const dateLabel =
                locale === 'vi' ? `${weekday}, ngày ${date}/2026` : `${weekday}, ${date}/2026`;
              return (
                <div key={date}>
                  <p className="text-[#8a8a8a] dark:text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3 px-3 py-2 rounded-lg bg-white/80 dark:bg-white/5 border border-[#eee] dark:border-white/10">
                    {dateLabel}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {slots.map((slot, i) => (
                      <EmptyScheduleCard key={`qf-${date}-${i}`} slot={slot} tbdLabel={t.teamTbd} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Lịch Bán kết */}
        <section className="mt-12 pt-8 border-t border-[#e8e6e3] dark:border-white/10">
          <SectionHeader icon="🏆" title={t.scheduleSf} />
          <div className="space-y-8">
            {groupEmptySlotsByDate(SF_SCHEDULE).map(({ date, slots }) => {
              const weekday = DATE_WEEKDAYS[date]?.[locale === 'vi' ? 'vi' : 'en'] ?? date;
              const dateLabel =
                locale === 'vi' ? `${weekday}, ngày ${date}/2026` : `${weekday}, ${date}/2026`;
              return (
                <div key={date}>
                  <p className="text-[#8a8a8a] dark:text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3 px-3 py-2 rounded-lg bg-white/80 dark:bg-white/5 border border-[#eee] dark:border-white/10">
                    {dateLabel}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {slots.map((slot, i) => (
                      <EmptyScheduleCard key={`sf-${date}-${i}`} slot={slot} tbdLabel={t.teamTbd} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Lịch Chung kết - special styling */}
        <section
          id="schedule-final"
          className="mt-12 pt-8 border-t border-[#e8e6e3] dark:border-white/10 scroll-mt-24"
        >
          <SectionHeader icon="🏆" title={t.scheduleFinal} />
          <div className="space-y-8">
            {groupEmptySlotsByDate(FINAL_SCHEDULE).map(({ date, slots }) => {
              const weekday = DATE_WEEKDAYS[date]?.[locale === 'vi' ? 'vi' : 'en'] ?? date;
              const dateLabel =
                locale === 'vi' ? `${weekday}, ngày ${date}/2026` : `${weekday}, ${date}/2026`;
              return (
                <div key={date}>
                  <p className="text-[#8a8a8a] dark:text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3 px-3 py-2 rounded-lg bg-white/80 dark:bg-white/5 border border-[#eee] dark:border-white/10">
                    {dateLabel}
                  </p>
                  <div className="grid grid-cols-1 max-w-md mx-auto">
                    {slots.map((slot, i) => (
                      <div
                        key={`final-${date}-${i}`}
                        className="rounded-2xl px-6 py-5 border-2 border-amber-400/40 dark:border-amber-400/30
                          bg-linear-to-br from-amber-50/90 to-white dark:from-amber-950/30 dark:to-[#1e2a35]/95
                          shadow-xl shadow-amber-900/10 dark:shadow-amber-900/20"
                      >
                        <p className="text-[10px] text-[#6b6b6b] dark:text-slate-400 mb-3 font-medium">
                          {slot.time} {slot.date}
                        </p>
                        <div className="flex items-center justify-center gap-4">
                          <span className="text-4xl opacity-80" aria-hidden>
                            🏆
                          </span>
                          <span className="text-amber-600 dark:text-amber-400 font-bold text-sm px-3 py-1 rounded-lg bg-amber-100 dark:bg-amber-400/20">
                            FINAL
                          </span>
                          <span className="text-4xl opacity-80" aria-hidden>
                            🏆
                          </span>
                        </div>
                        <p className="text-[10px] text-[#8a8a8a] dark:text-slate-500 mt-2 text-center">
                          {t.teamTbd}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Kết quả thi đấu */}
        <section
          id="results"
          className="mt-12 pt-8 border-t border-[#e8e6e3] dark:border-white/10 scroll-mt-24"
        >
          <SectionHeader icon="📊" title={t.resultsTitle} />

          <h3 className="text-[#1a1a1a] dark:text-white/90 text-sm font-bold mb-4 flex items-center gap-2">
            <span className="text-base">⚽</span>
            {t.resultsPlayoff}
          </h3>
          <div className="space-y-8 mb-10">
            {getResultsGroupedByDate(PLAYOFF_RESULTS).map(({ date, entries, year }) => {
              const weekday = DATE_WEEKDAYS[date]?.[locale === 'vi' ? 'vi' : 'en'] ?? date;
              const dateLabel =
                locale === 'vi'
                  ? `${weekday}, ngày ${date}/${year}`
                  : `${weekday}, ${date}/${year}`;
              return (
                <div key={date}>
                  <p className="text-[#8a8a8a] dark:text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3 px-3 py-2 rounded-lg bg-white/80 dark:bg-white/5 border border-[#eee] dark:border-white/10">
                    {dateLabel}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {entries.map((result, i) => (
                      <ResultMatchCard
                        key={`${date}-${i}-${result.home}-${result.away}`}
                        result={result}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <h3 className="text-[#1a1a1a] dark:text-white/90 text-sm font-bold mb-4 flex items-center gap-2">
            <span className="text-base">⚽</span>
            {t.resultsGroupStage}
          </h3>
          <div className="space-y-8">
            {getResultsGroupedByDate(GROUP_STAGE_RESULTS).map(({ date, entries, year }) => {
              const weekday = DATE_WEEKDAYS[date]?.[locale === 'vi' ? 'vi' : 'en'] ?? date;
              const dateLabel =
                locale === 'vi'
                  ? `${weekday}, ngày ${date}/${year}`
                  : `${weekday}, ${date}/${year}`;
              return (
                <div key={`gs-${date}-${year}`}>
                  <p className="text-[#8a8a8a] dark:text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3 px-3 py-2 rounded-lg bg-white/80 dark:bg-white/5 border border-[#eee] dark:border-white/10">
                    {dateLabel}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {entries.map((result, i) => (
                      <ResultMatchCard
                        key={`gs-${date}-${i}-${result.home}-${result.away}`}
                        result={result}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <p className="text-[#8a8a8a] dark:text-slate-600 text-[10px] text-center mt-12">
          {t.source}:{' '}
          <a
            href="https://www.uefa.com/uefachampionsleague/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6b6b6b] dark:text-slate-400 hover:text-[#c41e3a] dark:hover:text-amber-400/80 transition-colors"
          >
            {t.uefa}
          </a>
        </p>

        {/* FAQ */}
        <section
          id="faq"
          className="mt-12 pt-8 border-t border-[#e8e6e3] dark:border-white/10 max-w-2xl mx-auto scroll-mt-8"
        >
          <SectionHeader icon="❓" title={t.faqTitle} />
          <dl className="space-y-4">
            <div className="rounded-xl p-4 bg-white/80 dark:bg-white/5 border border-[#eee] dark:border-white/10">
              <dt className="text-[#1a1a1a] dark:text-white/90 text-sm font-semibold mb-1">
                {t.faq1Q}
              </dt>
              <dd className="text-[#5c5c5c] dark:text-slate-400 text-sm">{t.faq1A}</dd>
            </div>
            <div className="rounded-xl p-4 bg-white/80 dark:bg-white/5 border border-[#eee] dark:border-white/10">
              <dt className="text-[#1a1a1a] dark:text-white/90 text-sm font-semibold mb-1">
                {t.faq2Q}
              </dt>
              <dd className="text-[#5c5c5c] dark:text-slate-400 text-sm">{t.faq2A}</dd>
            </div>
            <div className="rounded-xl p-4 bg-white/80 dark:bg-white/5 border border-[#eee] dark:border-white/10">
              <dt className="text-[#1a1a1a] dark:text-white/90 text-sm font-semibold mb-1">
                {t.faq3Q}
              </dt>
              <dd className="text-[#5c5c5c] dark:text-slate-400 text-sm">{t.faq3A}</dd>
            </div>
          </dl>
        </section>
      </div>
    </div>
  );
}
