'use client';

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
  return (
    <div
      className="rounded-xl px-4 py-3 border backdrop-blur-sm transition-all duration-200 hover:scale-[1.01]
        bg-white/90 dark:bg-[#2d2d3d]/90 border-[#e0e0e0] dark:border-[#4a4a5a]/60
        hover:border-[#c41e3a]/30 dark:hover:border-[#5a5a6a] shadow-lg shadow-black/10 dark:shadow-black/20"
    >
      <p className="text-[10px] text-[#6b6b6b] dark:text-slate-400 mb-2">
        {time} {date}
      </p>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
        <span className="font-semibold text-[#1a1a1a] dark:text-white/95 text-sm truncate flex items-center gap-1.5">
          <TeamLogo team={home} size={18} />
          {home}
        </span>
        <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 font-bold text-xs shrink-0">
          {homeScore}–{awayScore}
        </span>
        <span className="font-semibold text-[#1a1a1a] dark:text-white/95 text-sm truncate flex items-center gap-1.5 justify-end">
          {away}
          <TeamLogo team={away} size={18} />
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
        <span className="text-2xl opacity-60" aria-hidden>🏆</span>
        <span className="text-amber-600 dark:text-amber-400 font-bold text-xs">–</span>
        <span className="text-2xl opacity-60" aria-hidden>🏆</span>
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
      className="rounded-xl px-4 py-3 border backdrop-blur-sm transition-all duration-200 hover:scale-[1.01]
        bg-white/90 dark:bg-[#2d2d3d]/90 border-[#e0e0e0] dark:border-[#4a4a5a]/60
        hover:border-[#c41e3a]/30 dark:hover:border-[#5a5a6a] shadow-lg shadow-black/10 dark:shadow-black/20"
    >
      <p className="text-[10px] text-[#6b6b6b] dark:text-slate-400 mb-2">
        {time} • {legLabel}
      </p>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
        <span className="font-semibold text-[#1a1a1a] dark:text-white/95 text-sm truncate flex items-center gap-1.5">
          <TeamLogo team={home} size={18} />
          {home}
        </span>
        <span className="text-amber-600 dark:text-amber-400 font-bold text-xs shrink-0">–</span>
        <span className="font-semibold text-[#1a1a1a] dark:text-white/95 text-sm truncate flex items-center gap-1.5 justify-end">
          {away}
          <TeamLogo team={away} size={18} />
        </span>
      </div>
    </div>
  );
}

type ChampionsLeagueContentProps = {
  locale: Locale;
};

export function ChampionsLeagueContent({ locale }: ChampionsLeagueContentProps) {
  const t = getC1Translations(locale);

  return (
    <div className="min-h-screen flex flex-col overflow-y-auto relative bg-[#faf8f5] dark:bg-[#0a0f1a]">
      <div className="flex-1 flex flex-col justify-center min-h-screen relative max-w-6xl mx-auto px-4 py-8 md:py-12 w-full">
        {/* Header: ROAD TO BUDAPEST 26 */}
        <header className="text-center mb-6 md:mb-8">
          <p className="text-[#1a237e]/80 dark:text-blue-200/70 text-xs font-semibold tracking-[0.3em] uppercase mb-2">
            {t.roadTo}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 dark:from-amber-200 dark:via-amber-100 dark:to-amber-200 bg-clip-text text-transparent drop-shadow-sm">
              {t.budapest26}
            </span>
          </h1>
          <p className="text-[#6b6b6b] dark:text-white/50 text-xs mt-2 tracking-widest uppercase">
            {t.subtitle}
          </p>
          <p className="text-[#5c5c5c] dark:text-slate-400 text-sm mt-4 max-w-xl mx-auto leading-relaxed">
            {t.intro}
          </p>
        </header>

        {/* Trophy - đưa lên trên */}
        <div className="flex justify-center mb-8">
          <div className="relative c1-trophy">
            <div className="absolute inset-0 blur-xl bg-amber-400/20 dark:bg-amber-400/20 rounded-full scale-150 animate-pulse" />
            <span className="relative text-5xl md:text-7xl block">🏆</span>
          </div>
        </div>

        {/* Lịch thi đấu theo ngày tăng dần, 2 cặp 1 dòng */}
        <section>
          <h2 className="text-[#6b6b6b] dark:text-slate-400 text-xs font-bold uppercase tracking-wider text-center mb-6">
            {t.scheduleTitle}
          </h2>
          <div className="space-y-8">
            {getScheduleGroupedByDate().map(({ date, entries }) => {
              const weekday = DATE_WEEKDAYS[date]?.[locale === 'vi' ? 'vi' : 'en'] ?? date;
              const dateLabel = locale === 'vi' ? `${weekday}, ngày ${date}/2026` : `${weekday}, ${date}/2026`;
              return (
                <div key={date}>
                  <p className="text-[#8a8a8a] dark:text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3 px-1 py-2 rounded bg-[#eee] dark:bg-white/5">
                    {dateLabel}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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

        {/* Lịch Tứ kết - empty */}
        <section className="mt-12 pt-8 border-t border-[#e8e6e3] dark:border-white/10">
          <h2 className="text-[#6b6b6b] dark:text-slate-400 text-xs font-bold uppercase tracking-wider text-center mb-6">
            {t.scheduleQf}
          </h2>
          <div className="space-y-8">
            {groupEmptySlotsByDate(QF_SCHEDULE).map(({ date, slots }) => {
              const weekday = DATE_WEEKDAYS[date]?.[locale === 'vi' ? 'vi' : 'en'] ?? date;
              const dateLabel = locale === 'vi' ? `${weekday}, ngày ${date}/2026` : `${weekday}, ${date}/2026`;
              return (
                <div key={date}>
                  <p className="text-[#8a8a8a] dark:text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3 px-1 py-2 rounded bg-[#eee] dark:bg-white/5">
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

        {/* Lịch Bán kết - empty */}
        <section className="mt-12 pt-8 border-t border-[#e8e6e3] dark:border-white/10">
          <h2 className="text-[#6b6b6b] dark:text-slate-400 text-xs font-bold uppercase tracking-wider text-center mb-6">
            {t.scheduleSf}
          </h2>
          <div className="space-y-8">
            {groupEmptySlotsByDate(SF_SCHEDULE).map(({ date, slots }) => {
              const weekday = DATE_WEEKDAYS[date]?.[locale === 'vi' ? 'vi' : 'en'] ?? date;
              const dateLabel = locale === 'vi' ? `${weekday}, ngày ${date}/2026` : `${weekday}, ${date}/2026`;
              return (
                <div key={date}>
                  <p className="text-[#8a8a8a] dark:text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3 px-1 py-2 rounded bg-[#eee] dark:bg-white/5">
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

        {/* Lịch Chung kết - empty */}
        <section className="mt-12 pt-8 border-t border-[#e8e6e3] dark:border-white/10">
          <h2 className="text-[#6b6b6b] dark:text-slate-400 text-xs font-bold uppercase tracking-wider text-center mb-6">
            {t.scheduleFinal}
          </h2>
          <div className="space-y-8">
            {groupEmptySlotsByDate(FINAL_SCHEDULE).map(({ date, slots }) => {
              const weekday = DATE_WEEKDAYS[date]?.[locale === 'vi' ? 'vi' : 'en'] ?? date;
              const dateLabel = locale === 'vi' ? `${weekday}, ngày ${date}/2026` : `${weekday}, ${date}/2026`;
              return (
                <div key={date}>
                  <p className="text-[#8a8a8a] dark:text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3 px-1 py-2 rounded bg-[#eee] dark:bg-white/5">
                    {dateLabel}
                  </p>
                  <div className="grid grid-cols-1 max-w-md mx-auto">
                    {slots.map((slot, i) => (
                      <EmptyScheduleCard key={`final-${date}-${i}`} slot={slot} tbdLabel={t.teamTbd} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Kết quả thi đấu */}
        <section className="mt-12 pt-8 border-t border-[#e8e6e3] dark:border-white/10">
          <h2 className="text-[#6b6b6b] dark:text-slate-400 text-xs font-bold uppercase tracking-wider text-center mb-6">
            {t.resultsTitle}
          </h2>

          {/* Knockout Play-off trước (gần thời gian hơn) */}
          <h3 className="text-[#1a1a1a] dark:text-white/90 text-sm font-bold mb-4">
            {t.resultsPlayoff}
          </h3>
          <div className="space-y-8 mb-10">
            {getResultsGroupedByDate(PLAYOFF_RESULTS).map(({ date, entries, year }) => {
              const weekday = DATE_WEEKDAYS[date]?.[locale === 'vi' ? 'vi' : 'en'] ?? date;
              const dateLabel = locale === 'vi' ? `${weekday}, ngày ${date}/${year}` : `${weekday}, ${date}/${year}`;
              return (
                <div key={date}>
                  <p className="text-[#8a8a8a] dark:text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3 px-1 py-2 rounded bg-[#eee] dark:bg-white/5">
                    {dateLabel}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {entries.map((result, i) => (
                      <ResultMatchCard key={`${date}-${i}-${result.home}-${result.away}`} result={result} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Vòng bảng sau */}
          <h3 className="text-[#1a1a1a] dark:text-white/90 text-sm font-bold mb-4">
            {t.resultsGroupStage}
          </h3>
          <div className="space-y-8">
            {getResultsGroupedByDate(GROUP_STAGE_RESULTS).map(({ date, entries, year }) => {
              const weekday = DATE_WEEKDAYS[date]?.[locale === 'vi' ? 'vi' : 'en'] ?? date;
              const dateLabel = locale === 'vi' ? `${weekday}, ngày ${date}/${year}` : `${weekday}, ${date}/${year}`;
              return (
                <div key={`gs-${date}-${year}`}>
                  <p className="text-[#8a8a8a] dark:text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3 px-1 py-2 rounded bg-[#eee] dark:bg-white/5">
                    {dateLabel}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {entries.map((result, i) => (
                      <ResultMatchCard key={`gs-${date}-${i}-${result.home}-${result.away}`} result={result} />
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
        <section className="mt-12 pt-8 border-t border-[#e8e6e3] dark:border-white/10 max-w-2xl mx-auto">
          <h2 className="text-[#6b6b6b] dark:text-slate-400 text-xs font-bold uppercase tracking-wider text-center mb-4">
            {t.faqTitle}
          </h2>
          <dl className="space-y-4">
            <div>
              <dt className="text-[#1a1a1a] dark:text-white/90 text-sm font-semibold mb-1">{t.faq1Q}</dt>
              <dd className="text-[#5c5c5c] dark:text-slate-400 text-sm">{t.faq1A}</dd>
            </div>
            <div>
              <dt className="text-[#1a1a1a] dark:text-white/90 text-sm font-semibold mb-1">{t.faq2Q}</dt>
              <dd className="text-[#5c5c5c] dark:text-slate-400 text-sm">{t.faq2A}</dd>
            </div>
            <div>
              <dt className="text-[#1a1a1a] dark:text-white/90 text-sm font-semibold mb-1">{t.faq3Q}</dt>
              <dd className="text-[#5c5c5c] dark:text-slate-400 text-sm">{t.faq3A}</dd>
            </div>
          </dl>
        </section>

      </div>
    </div>
  );
}
