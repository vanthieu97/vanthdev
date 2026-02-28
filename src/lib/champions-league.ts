/**
 * Kết quả bốc thăm vòng 1/8 Cúp C1 châu Âu 2025/2026
 * Cấu trúc bracket: trái 4 cặp, phải 4 cặp, QF, SF, Final
 */

export type MatchSlot = {
  date: string; // dd/mm
  time: string; // HH:mm
};

export type Fixture = {
  home: string;
  away: string;
  leg1: MatchSlot;
  leg2: MatchSlot;
};

/** Logo đội bóng (crest) - football-data.org + Wikimedia */
const CREST = 'https://crests.football-data.org';
const WIKI = 'https://upload.wikimedia.org/wikipedia/commons';

/** CDN 24h.com.vn - icon đội bóng từ trang livescore (ổn định hơn khi football-data lỗi) */
const CDN_24H = 'https://cdn.24h.com.vn/upload/livescore/2-2021/kytq1/2021-05-17';
const TEAM_LOGOS_24H: Record<string, string> = {
  PSG: `${CDN_24H}/paris-saint-germain_35x35.png`,
  Chelsea: `${CDN_24H}/chelsea_35x35.png`,
  Galatasaray: `${CDN_24H}/galatasaray_35x35.png`,
  Liverpool: `${CDN_24H}/liverpool_35x35.png`,
  'Real Madrid': `${CDN_24H}/real-madrid_35x35.png`,
  'Man City': `${CDN_24H}/manchester-city_35x35.png`,
  Atalanta: `${CDN_24H}/atalanta_35x35.png`,
  'Bayern München': `${CDN_24H}/bayern-munich_35x35.png`,
  Newcastle: `${CDN_24H}/newcastle-united_35x35.png`,
  Barcelona: `${CDN_24H}/barcelona_35x35.png`,
  Atleti: `${CDN_24H}/atletico-madrid_35x35.png`,
  Tottenham: `${CDN_24H}/tottenham_35x35.png`,
  'Bodø/Glimt': `${CDN_24H}/bodo-glimt_35x35.png`,
  'Sporting CP': `${CDN_24H}/sporting-cp_35x35.png`,
  Leverkusen: `${CDN_24H}/bayer-leverkusen_35x35.png`,
  Arsenal: `${CDN_24H}/arsenal_35x35.png`,
  Benfica: `${CDN_24H}/benfica_35x35.png`,
  Monaco: `${CDN_24H}/monaco_35x35.png`,
  Juventus: `${CDN_24H}/juventus_35x35.png`,
  'Borussia Dortmund': `${CDN_24H}/borussia-dortmund_35x35.png`,
  'Inter Milan': `${CDN_24H}/inter-milan_35x35.png`,
  Qarabağ: `${CDN_24H}/qarabag_35x35.png`,
  'Olympiakos Piraeus': `${CDN_24H}/olympiakos_35x35.png`,
  'Club Brugge': `${CDN_24H}/club-brugge_35x35.png`,
  'Union Saint-Gilloise': `${CDN_24H}/union-saint-gilloise_35x35.png`,
  Pafos: `${CDN_24H}/pafos_35x35.png`,
  'Slavia Praha': `${CDN_24H}/slavia-praha_35x35.png`,
  'Olympique Marseille': `${CDN_24H}/olympique-marseille_35x35.png`,
  'Athletic Club': `${CDN_24H}/athletic-bilbao_35x35.png`,
  Ajax: `${CDN_24H}/ajax_35x35.png`,
  Kairat: `${CDN_24H}/kairat_35x35.png`,
  Villarreal: `${CDN_24H}/villarreal_35x35.png`,
  'Eintracht Frankfurt': `${CDN_24H}/eintracht-frankfurt_35x35.png`,
  Copenhagen: `${CDN_24H}/fc-copenhagen_35x35.png`,
  Napoli: `${CDN_24H}/napoli_35x35.png`,
  PSV: `${CDN_24H}/psv_35x35.png`,
};

export const TEAM_LOGOS: Record<string, string> = {
  PSG: `${CREST}/524.png`,
  Chelsea: `${CREST}/61.png`,
  Galatasaray: `${WIKI}/a/ab/Galatasaray_logo_%28three_gold_stars%29.png`,
  Liverpool: `${CREST}/64.png`,
  'Real Madrid': `${CREST}/86.png`,
  'Man City': `${CREST}/65.png`,
  Atalanta: `${CREST}/448.png`,
  'Bayern München': `${CREST}/5.png`,
  Newcastle: `${CREST}/67.png`,
  Barcelona: `${CREST}/81.png`,
  Atleti: `${CREST}/78.png`,
  Tottenham: `${CREST}/73.png`,
  'Bodø/Glimt': `${CREST}/576.png`,
  'Sporting CP': `${CREST}/503.png`,
  Leverkusen: `${CREST}/527.png`,
  Arsenal: `${CREST}/57.png`,
  // Play-off teams
  Benfica: `${CREST}/495.png`,
  Monaco: `${CREST}/548.png`,
  Juventus: `${CREST}/109.png`,
  'Borussia Dortmund': `${CREST}/4.png`,
  'Inter Milan': `${CREST}/505.png`,
  Qarabağ: `${CREST}/529.png`,
  'Olympiakos Piraeus': `${CREST}/553.png`,
  'Club Brugge': `${CREST}/851.png`,
  // Group stage teams
  'Union Saint-Gilloise': `${CREST}/2287.png`,
  Pafos: `${CREST}/8873.png`,
  'Slavia Praha': `${CREST}/571.png`,
  'Olympique Marseille': `${CREST}/81.png`,
  'Athletic Club': `${CREST}/559.png`,
  Ajax: `${CREST}/678.png`,
  Kairat: `${CREST}/5276.png`,
  Villarreal: `${CREST}/450.png`,
  'Eintracht Frankfurt': `${CREST}/19.png`,
  Copenhagen: `${CREST}/191.png`,
  Napoli: `${CREST}/113.png`,
  PSV: `${CREST}/674.png`,
};

/** Ưu tiên icon 24h (ổn định), fallback football-data khi 24h lỗi. Trả về [primary, fallback] để component thử lần lượt. */
export function getTeamLogoUrls(team: string): string[] {
  const urls: string[] = [];
  if (TEAM_LOGOS_24H[team]) urls.push(TEAM_LOGOS_24H[team]);
  if (TEAM_LOGOS[team] && TEAM_LOGOS[team] !== TEAM_LOGOS_24H[team]) urls.push(TEAM_LOGOS[team]);
  return urls;
}

export function getTeamLogoUrl(team: string): string | null {
  return getTeamLogoUrls(team)[0] ?? null;
}

// Nửa trái bracket (đường đến SF1) – kèm lịch thi đấu lượt 1 & 2
export const BRACKET_LEFT: Fixture[] = [
  {
    home: 'PSG',
    away: 'Chelsea',
    leg1: { date: '12/03', time: '03:00' },
    leg2: { date: '19/03', time: '03:00' },
  },
  {
    home: 'Galatasaray',
    away: 'Liverpool',
    leg1: { date: '11/03', time: '00:45' },
    leg2: { date: '18/03', time: '03:00' },
  },
  {
    home: 'Real Madrid',
    away: 'Man City',
    leg1: { date: '12/03', time: '03:00' },
    leg2: { date: '19/03', time: '03:00' },
  },
  {
    home: 'Atalanta',
    away: 'Bayern München',
    leg1: { date: '11/03', time: '03:00' },
    leg2: { date: '18/03', time: '03:00' },
  },
];

// Nửa phải bracket (đường đến SF2)
export const BRACKET_RIGHT: Fixture[] = [
  {
    home: 'Newcastle',
    away: 'Barcelona',
    leg1: { date: '11/03', time: '03:00' },
    leg2: { date: '18/03', time: '03:00' },
  },
  {
    home: 'Atleti',
    away: 'Tottenham',
    leg1: { date: '11/03', time: '03:00' },
    leg2: { date: '18/03', time: '03:00' },
  },
  {
    home: 'Bodø/Glimt',
    away: 'Sporting CP',
    leg1: { date: '12/03', time: '03:00' },
    leg2: { date: '19/03', time: '03:00' },
  },
  {
    home: 'Leverkusen',
    away: 'Arsenal',
    leg1: { date: '12/03', time: '00:45' },
    leg2: { date: '19/03', time: '03:00' },
  },
];

// Toàn bộ vòng 1/8 (giữ cho tương thích)
export const ROUND_OF_16: Fixture[] = [...BRACKET_LEFT, ...BRACKET_RIGHT];

/** Một trận đấu cụ thể (lượt 1 hoặc 2) để hiển thị theo ngày */
export type ScheduleEntry = {
  date: string; // dd/mm
  time: string;
  home: string;
  away: string;
  leg: 1 | 2;
  /** ISO sort key: YYYY-MM-DD */
  sortKey: string;
};

/** Chuyển đổi dd/mm -> sortKey */
function toSortKey(date: string, year = '2026'): string {
  const [d, m] = date.split('/');
  return `${year}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`;
}

/** Lịch thi đấu phẳng, sắp xếp theo ngày tăng dần */
export function getScheduleByDate(): ScheduleEntry[] {
  const all: ScheduleEntry[] = [];
  for (const f of ROUND_OF_16) {
    all.push({
      date: f.leg1.date,
      time: f.leg1.time,
      home: f.home,
      away: f.away,
      leg: 1,
      sortKey: toSortKey(f.leg1.date),
    });
    all.push({
      date: f.leg2.date,
      time: f.leg2.time,
      home: f.away, // lượt về: đội away đá sân nhà
      away: f.home,
      leg: 2,
      sortKey: toSortKey(f.leg2.date),
    });
  }
  all.sort((a, b) => {
    const d = a.sortKey.localeCompare(b.sortKey);
    return d !== 0 ? d : a.time.localeCompare(b.time);
  });
  return all;
}

/** Nhóm theo ngày, keys đã sort: ["11/03", "12/03", "18/03", "19/03"] */
export function getScheduleGroupedByDate(): { date: string; entries: ScheduleEntry[] }[] {
  const entries = getScheduleByDate();
  const map = new Map<string, ScheduleEntry[]>();
  for (const e of entries) {
    const list = map.get(e.date) ?? [];
    list.push(e);
    map.set(e.date, list);
  }
  const sortedDates = Array.from(map.keys()).sort((a, b) =>
    toSortKey(a).localeCompare(toSortKey(b))
  );
  return sortedDates.map((date) => ({ date, entries: map.get(date)! }));
}

/** Thứ trong tuần cho header (vi: Thứ 4, en: Wed) */
export const DATE_WEEKDAYS: Record<string, { vi: string; en: string }> = {
  '11/03': { vi: 'Thứ 4', en: 'Wed' },
  '12/03': { vi: 'Thứ 5', en: 'Thu' },
  '16/09': { vi: 'Thứ 3', en: 'Tue' },
  '17/09': { vi: 'Thứ 4', en: 'Wed' },
  '18/09': { vi: 'Thứ 5', en: 'Thu' },
  '19/09': { vi: 'Thứ 6', en: 'Fri' },
  '30/09': { vi: 'Thứ 3', en: 'Tue' },
  '01/10': { vi: 'Thứ 4', en: 'Wed' },
  '02/10': { vi: 'Thứ 5', en: 'Thu' },
  '21/10': { vi: 'Thứ 3', en: 'Tue' },
  '22/10': { vi: 'Thứ 4', en: 'Wed' },
  '23/10': { vi: 'Thứ 5', en: 'Thu' },
  '05/11': { vi: 'Thứ 4', en: 'Wed' },
  '06/11': { vi: 'Thứ 5', en: 'Thu' },
  '26/11': { vi: 'Thứ 4', en: 'Wed' },
  '27/11': { vi: 'Thứ 5', en: 'Thu' },
  '09/12': { vi: 'Thứ 3', en: 'Tue' },
  '10/12': { vi: 'Thứ 4', en: 'Wed' },
  '11/12': { vi: 'Thứ 5', en: 'Thu' },
  '20/01': { vi: 'Thứ 3', en: 'Tue' },
  '21/01': { vi: 'Thứ 4', en: 'Wed' },
  '22/01': { vi: 'Thứ 5', en: 'Thu' },
  '29/01': { vi: 'Thứ 5', en: 'Thu' },
  '18/02': { vi: 'Thứ 4', en: 'Wed' },
  '19/02': { vi: 'Thứ 5', en: 'Thu' },
  '25/02': { vi: 'Thứ 5', en: 'Thu' },
  '26/02': { vi: 'Thứ 6', en: 'Fri' },
  '18/03': { vi: 'Thứ 4', en: 'Wed' },
  '19/03': { vi: 'Thứ 5', en: 'Thu' },
  '07/04': { vi: 'Thứ 3', en: 'Tue' },
  '08/04': { vi: 'Thứ 4', en: 'Wed' },
  '14/04': { vi: 'Thứ 3', en: 'Tue' },
  '15/04': { vi: 'Thứ 4', en: 'Wed' },
  '28/04': { vi: 'Thứ 3', en: 'Tue' },
  '29/04': { vi: 'Thứ 4', en: 'Wed' },
  '05/05': { vi: 'Thứ 3', en: 'Tue' },
  '06/05': { vi: 'Thứ 4', en: 'Wed' },
  '30/05': { vi: 'Thứ 7', en: 'Sat' },
};

/** Trận đấu empty (chưa xác định đội) - Tứ kết, Bán kết, Chung kết */
export type EmptyScheduleSlot = {
  date: string;
  time: string;
  stage: 'qf' | 'sf' | 'final';
};

/** Lịch Tứ kết - 4 trận lượt 1 (07/04) + 4 trận lượt 2 (14/04) */
export const QF_SCHEDULE: EmptyScheduleSlot[] = [
  { date: '07/04', time: '07:00', stage: 'qf' },
  { date: '07/04', time: '07:00', stage: 'qf' },
  { date: '07/04', time: '07:00', stage: 'qf' },
  { date: '07/04', time: '07:00', stage: 'qf' },
  { date: '14/04', time: '07:00', stage: 'qf' },
  { date: '14/04', time: '07:00', stage: 'qf' },
  { date: '14/04', time: '07:00', stage: 'qf' },
  { date: '14/04', time: '07:00', stage: 'qf' },
];

/** Lịch Bán kết - 2 trận lượt 1 (28/04) + 2 trận lượt 2 (05/05) */
export const SF_SCHEDULE: EmptyScheduleSlot[] = [
  { date: '28/04', time: '07:00', stage: 'sf' },
  { date: '28/04', time: '07:00', stage: 'sf' },
  { date: '05/05', time: '07:00', stage: 'sf' },
  { date: '05/05', time: '07:00', stage: 'sf' },
];

/** Lịch Chung kết - 1 trận (30/05) */
export const FINAL_SCHEDULE: EmptyScheduleSlot[] = [
  { date: '30/05', time: '07:00', stage: 'final' },
];

/** Kết quả trận đấu (đã có tỉ số) */
export type MatchResult = {
  date: string;
  time: string;
  home: string;
  away: string;
  homeScore: number;
  awayScore: number;
  broadcast?: string;
  /** Năm cho sort (mặc định 2026) */
  year?: string;
};

/** Kết quả Knockout Play-off (vòng play-off trước R16) - sắp xếp mới nhất trước */
export const PLAYOFF_RESULTS: MatchResult[] = [
  {
    date: '26/02',
    time: '03:00',
    home: 'Real Madrid',
    away: 'Benfica',
    homeScore: 2,
    awayScore: 1,
  },
  { date: '26/02', time: '03:00', home: 'PSG', away: 'Monaco', homeScore: 2, awayScore: 2 },
  {
    date: '26/02',
    time: '03:00',
    home: 'Juventus',
    away: 'Galatasaray',
    homeScore: 3,
    awayScore: 2,
  },
  {
    date: '26/02',
    time: '03:00',
    home: 'Atalanta',
    away: 'Borussia Dortmund',
    homeScore: 4,
    awayScore: 1,
  },
  {
    date: '25/02',
    time: '03:00',
    home: 'Inter Milan',
    away: 'Bodø/Glimt',
    homeScore: 1,
    awayScore: 2,
  },
  { date: '25/02', time: '03:00', home: 'Newcastle', away: 'Qarabağ', homeScore: 3, awayScore: 2 },
  {
    date: '25/02',
    time: '03:00',
    home: 'Leverkusen',
    away: 'Olympiakos Piraeus',
    homeScore: 0,
    awayScore: 0,
  },
  { date: '25/02', time: '03:00', home: 'Atleti', away: 'Club Brugge', homeScore: 4, awayScore: 1 },
  {
    date: '19/02',
    time: '03:00',
    home: 'Bodø/Glimt',
    away: 'Inter Milan',
    homeScore: 3,
    awayScore: 1,
  },
  { date: '19/02', time: '03:00', home: 'Club Brugge', away: 'Atleti', homeScore: 3, awayScore: 3 },
  {
    date: '19/02',
    time: '03:00',
    home: 'Olympiakos Piraeus',
    away: 'Leverkusen',
    homeScore: 0,
    awayScore: 2,
  },
  { date: '19/02', time: '03:00', home: 'Qarabağ', away: 'Newcastle', homeScore: 1, awayScore: 6 },
  {
    date: '18/02',
    time: '03:00',
    home: 'Borussia Dortmund',
    away: 'Atalanta',
    homeScore: 2,
    awayScore: 0,
  },
  {
    date: '18/02',
    time: '03:00',
    home: 'Benfica',
    away: 'Real Madrid',
    homeScore: 0,
    awayScore: 1,
  },
  { date: '18/02', time: '03:00', home: 'Monaco', away: 'PSG', homeScore: 2, awayScore: 3 },
  {
    date: '18/02',
    time: '03:00',
    home: 'Galatasaray',
    away: 'Juventus',
    homeScore: 5,
    awayScore: 2,
  },
];

/** Kết quả vòng bảng (group stage) - nguồn: 24h.com.vn */
export const GROUP_STAGE_RESULTS: MatchResult[] = [
  // 29/01/2026
  {
    date: '29/01',
    time: '03:00',
    home: 'Union Saint-Gilloise',
    away: 'Atalanta',
    homeScore: 1,
    awayScore: 0,
    year: '2026',
  },
  {
    date: '29/01',
    time: '03:00',
    home: 'Pafos',
    away: 'Slavia Praha',
    homeScore: 4,
    awayScore: 1,
    year: '2026',
  },
  {
    date: '29/01',
    time: '03:00',
    home: 'Club Brugge',
    away: 'Olympique Marseille',
    homeScore: 3,
    awayScore: 0,
    year: '2026',
  },
  {
    date: '29/01',
    time: '03:00',
    home: 'Athletic Club',
    away: 'Sporting CP',
    homeScore: 2,
    awayScore: 3,
    year: '2026',
  },
  {
    date: '29/01',
    time: '03:00',
    home: 'Ajax',
    away: 'Olympiakos Piraeus',
    homeScore: 1,
    awayScore: 2,
    year: '2026',
  },
  {
    date: '29/01',
    time: '03:00',
    home: 'Monaco',
    away: 'Juventus',
    homeScore: 0,
    awayScore: 0,
    year: '2026',
  },
  {
    date: '29/01',
    time: '03:00',
    home: 'Arsenal',
    away: 'Kairat',
    homeScore: 3,
    awayScore: 2,
    year: '2026',
  },
  {
    date: '29/01',
    time: '03:00',
    home: 'Atleti',
    away: 'Bodø/Glimt',
    homeScore: 1,
    awayScore: 2,
    year: '2026',
  },
  {
    date: '29/01',
    time: '03:00',
    home: 'Leverkusen',
    away: 'Villarreal',
    homeScore: 3,
    awayScore: 0,
    year: '2026',
  },
  {
    date: '29/01',
    time: '03:00',
    home: 'Borussia Dortmund',
    away: 'Inter Milan',
    homeScore: 0,
    awayScore: 2,
    year: '2026',
  },
  {
    date: '29/01',
    time: '03:00',
    home: 'Eintracht Frankfurt',
    away: 'Tottenham',
    homeScore: 0,
    awayScore: 2,
    year: '2026',
  },
  {
    date: '29/01',
    time: '03:00',
    home: 'Barcelona',
    away: 'Copenhagen',
    homeScore: 4,
    awayScore: 1,
    year: '2026',
  },
  {
    date: '29/01',
    time: '03:00',
    home: 'Liverpool',
    away: 'Qarabağ',
    homeScore: 6,
    awayScore: 0,
    year: '2026',
  },
  {
    date: '29/01',
    time: '03:00',
    home: 'Man City',
    away: 'Galatasaray',
    homeScore: 2,
    awayScore: 0,
    year: '2026',
  },
  {
    date: '29/01',
    time: '03:00',
    home: 'PSG',
    away: 'Newcastle',
    homeScore: 1,
    awayScore: 1,
    year: '2026',
  },
  {
    date: '29/01',
    time: '03:00',
    home: 'PSV',
    away: 'Bayern München',
    homeScore: 1,
    awayScore: 2,
    year: '2026',
  },
  {
    date: '29/01',
    time: '03:00',
    home: 'Benfica',
    away: 'Real Madrid',
    homeScore: 4,
    awayScore: 2,
    year: '2026',
  },
  {
    date: '29/01',
    time: '03:00',
    home: 'Napoli',
    away: 'Chelsea',
    homeScore: 2,
    awayScore: 3,
    year: '2026',
  },
  // 22/01/2026
  {
    date: '22/01',
    time: '03:00',
    home: 'Newcastle',
    away: 'PSV',
    homeScore: 3,
    awayScore: 0,
    year: '2026',
  },
  {
    date: '22/01',
    time: '03:00',
    home: 'Atalanta',
    away: 'Athletic Club',
    homeScore: 2,
    awayScore: 3,
    year: '2026',
  },
  {
    date: '22/01',
    time: '03:00',
    home: 'Chelsea',
    away: 'Pafos',
    homeScore: 1,
    awayScore: 0,
    year: '2026',
  },
  {
    date: '22/01',
    time: '03:00',
    home: 'Bayern München',
    away: 'Union Saint-Gilloise',
    homeScore: 2,
    awayScore: 0,
    year: '2026',
  },
  {
    date: '22/01',
    time: '03:00',
    home: 'Juventus',
    away: 'Benfica',
    homeScore: 2,
    awayScore: 0,
    year: '2026',
  },
  {
    date: '22/01',
    time: '03:00',
    home: 'Olympique Marseille',
    away: 'Liverpool',
    homeScore: 0,
    awayScore: 3,
    year: '2026',
  },
  {
    date: '22/01',
    time: '03:00',
    home: 'Slavia Praha',
    away: 'Barcelona',
    homeScore: 2,
    awayScore: 4,
    year: '2026',
  },
  {
    date: '22/01',
    time: '00:45',
    home: 'Qarabağ',
    away: 'Eintracht Frankfurt',
    homeScore: 3,
    awayScore: 2,
    year: '2026',
  },
  {
    date: '22/01',
    time: '00:45',
    home: 'Galatasaray',
    away: 'Atleti',
    homeScore: 1,
    awayScore: 1,
    year: '2026',
  },
  // 21/01/2026
  {
    date: '21/01',
    time: '03:00',
    home: 'Villarreal',
    away: 'Ajax',
    homeScore: 1,
    awayScore: 2,
    year: '2026',
  },
  {
    date: '21/01',
    time: '03:00',
    home: 'Copenhagen',
    away: 'Napoli',
    homeScore: 1,
    awayScore: 1,
    year: '2026',
  },
  {
    date: '21/01',
    time: '03:00',
    home: 'Inter Milan',
    away: 'Arsenal',
    homeScore: 1,
    awayScore: 3,
    year: '2026',
  },
  {
    date: '21/01',
    time: '03:00',
    home: 'Olympiakos Piraeus',
    away: 'Leverkusen',
    homeScore: 2,
    awayScore: 0,
    year: '2026',
  },
  {
    date: '21/01',
    time: '03:00',
    home: 'Real Madrid',
    away: 'Monaco',
    homeScore: 6,
    awayScore: 1,
    year: '2026',
  },
  {
    date: '21/01',
    time: '03:00',
    home: 'Sporting CP',
    away: 'PSG',
    homeScore: 2,
    awayScore: 1,
    year: '2026',
  },
  {
    date: '21/01',
    time: '03:00',
    home: 'Tottenham',
    away: 'Borussia Dortmund',
    homeScore: 2,
    awayScore: 0,
    year: '2026',
  },
  {
    date: '21/01',
    time: '00:45',
    home: 'Bodø/Glimt',
    away: 'Man City',
    homeScore: 3,
    awayScore: 1,
    year: '2026',
  },
  // 20/01/2026
  {
    date: '20/01',
    time: '22:30',
    home: 'Kairat',
    away: 'Club Brugge',
    homeScore: 1,
    awayScore: 4,
    year: '2026',
  },
  // 11/12/2025
  {
    date: '11/12',
    time: '03:00',
    home: 'Borussia Dortmund',
    away: 'Bodø/Glimt',
    homeScore: 2,
    awayScore: 2,
    year: '2025',
  },
  {
    date: '11/12',
    time: '03:00',
    home: 'Leverkusen',
    away: 'Newcastle',
    homeScore: 2,
    awayScore: 2,
    year: '2025',
  },
  {
    date: '11/12',
    time: '03:00',
    home: 'Athletic Club',
    away: 'PSG',
    homeScore: 0,
    awayScore: 0,
    year: '2025',
  },
  {
    date: '11/12',
    time: '03:00',
    home: 'Club Brugge',
    away: 'Arsenal',
    homeScore: 0,
    awayScore: 3,
    year: '2025',
  },
  {
    date: '11/12',
    time: '03:00',
    home: 'Juventus',
    away: 'Pafos',
    homeScore: 2,
    awayScore: 0,
    year: '2025',
  },
  {
    date: '11/12',
    time: '03:00',
    home: 'Real Madrid',
    away: 'Man City',
    homeScore: 1,
    awayScore: 2,
    year: '2025',
  },
  {
    date: '11/12',
    time: '03:00',
    home: 'Benfica',
    away: 'Napoli',
    homeScore: 2,
    awayScore: 0,
    year: '2025',
  },
  {
    date: '11/12',
    time: '00:45',
    home: 'Villarreal',
    away: 'Copenhagen',
    homeScore: 2,
    awayScore: 3,
    year: '2025',
  },
  {
    date: '11/12',
    time: '00:45',
    home: 'Qarabağ',
    away: 'Ajax',
    homeScore: 2,
    awayScore: 4,
    year: '2025',
  },
  // 10/12/2025
  {
    date: '10/12',
    time: '03:00',
    home: 'Union Saint-Gilloise',
    away: 'Olympique Marseille',
    homeScore: 2,
    awayScore: 3,
    year: '2025',
  },
  {
    date: '10/12',
    time: '03:00',
    home: 'Monaco',
    away: 'Galatasaray',
    homeScore: 1,
    awayScore: 0,
    year: '2025',
  },
  {
    date: '10/12',
    time: '03:00',
    home: 'Atalanta',
    away: 'Chelsea',
    homeScore: 2,
    awayScore: 1,
    year: '2025',
  },
  {
    date: '10/12',
    time: '03:00',
    home: 'Barcelona',
    away: 'Eintracht Frankfurt',
    homeScore: 2,
    awayScore: 1,
    year: '2025',
  },
  {
    date: '10/12',
    time: '03:00',
    home: 'Inter Milan',
    away: 'Liverpool',
    homeScore: 0,
    awayScore: 1,
    year: '2025',
  },
  {
    date: '10/12',
    time: '03:00',
    home: 'PSV',
    away: 'Atleti',
    homeScore: 2,
    awayScore: 3,
    year: '2025',
  },
  {
    date: '10/12',
    time: '03:00',
    home: 'Tottenham',
    away: 'Slavia Praha',
    homeScore: 3,
    awayScore: 0,
    year: '2025',
  },
  {
    date: '10/12',
    time: '00:45',
    home: 'Bayern München',
    away: 'Sporting CP',
    homeScore: 3,
    awayScore: 1,
    year: '2025',
  },
  // 09/12/2025
  {
    date: '09/12',
    time: '22:30',
    home: 'Kairat',
    away: 'Olympiakos Piraeus',
    homeScore: 0,
    awayScore: 1,
    year: '2025',
  },
  // 27/11/2025
  {
    date: '27/11',
    time: '03:00',
    home: 'Sporting CP',
    away: 'Club Brugge',
    homeScore: 3,
    awayScore: 0,
    year: '2025',
  },
  {
    date: '27/11',
    time: '03:00',
    home: 'Eintracht Frankfurt',
    away: 'Atalanta',
    homeScore: 0,
    awayScore: 3,
    year: '2025',
  },
  {
    date: '27/11',
    time: '03:00',
    home: 'Arsenal',
    away: 'Bayern München',
    homeScore: 3,
    awayScore: 1,
    year: '2025',
  },
  {
    date: '27/11',
    time: '03:00',
    home: 'Atleti',
    away: 'Inter Milan',
    homeScore: 2,
    awayScore: 1,
    year: '2025',
  },
  {
    date: '27/11',
    time: '03:00',
    home: 'Liverpool',
    away: 'PSV',
    homeScore: 1,
    awayScore: 4,
    year: '2025',
  },
  {
    date: '27/11',
    time: '03:00',
    home: 'Olympiakos Piraeus',
    away: 'Real Madrid',
    homeScore: 3,
    awayScore: 4,
    year: '2025',
  },
  {
    date: '27/11',
    time: '03:00',
    home: 'PSG',
    away: 'Tottenham',
    homeScore: 5,
    awayScore: 3,
    year: '2025',
  },
  {
    date: '27/11',
    time: '00:45',
    home: 'Copenhagen',
    away: 'Kairat',
    homeScore: 3,
    awayScore: 2,
    year: '2025',
  },
  {
    date: '27/11',
    time: '00:45',
    home: 'Pafos',
    away: 'Monaco',
    homeScore: 2,
    awayScore: 2,
    year: '2025',
  },
  // 26/11/2025
  {
    date: '26/11',
    time: '03:00',
    home: 'Slavia Praha',
    away: 'Athletic Club',
    homeScore: 0,
    awayScore: 0,
    year: '2025',
  },
  {
    date: '26/11',
    time: '03:00',
    home: 'Borussia Dortmund',
    away: 'Villarreal',
    homeScore: 4,
    awayScore: 0,
    year: '2025',
  },
  {
    date: '26/11',
    time: '03:00',
    home: 'Chelsea',
    away: 'Barcelona',
    homeScore: 3,
    awayScore: 0,
    year: '2025',
  },
  {
    date: '26/11',
    time: '03:00',
    home: 'Bodø/Glimt',
    away: 'Juventus',
    homeScore: 2,
    awayScore: 3,
    year: '2025',
  },
  {
    date: '26/11',
    time: '03:00',
    home: 'Man City',
    away: 'Leverkusen',
    homeScore: 0,
    awayScore: 2,
    year: '2025',
  },
  {
    date: '26/11',
    time: '03:00',
    home: 'Olympique Marseille',
    away: 'Newcastle',
    homeScore: 2,
    awayScore: 1,
    year: '2025',
  },
  {
    date: '26/11',
    time: '03:00',
    home: 'Napoli',
    away: 'Qarabağ',
    homeScore: 2,
    awayScore: 0,
    year: '2025',
  },
  {
    date: '26/11',
    time: '00:45',
    home: 'Galatasaray',
    away: 'Union Saint-Gilloise',
    homeScore: 0,
    awayScore: 1,
    year: '2025',
  },
  {
    date: '26/11',
    time: '00:45',
    home: 'Ajax',
    away: 'Benfica',
    homeScore: 0,
    awayScore: 2,
    year: '2025',
  },
  // 06/11/2025
  {
    date: '06/11',
    time: '03:00',
    home: 'Olympique Marseille',
    away: 'Atalanta',
    homeScore: 0,
    awayScore: 1,
    year: '2025',
  },
  {
    date: '06/11',
    time: '03:00',
    home: 'Newcastle',
    away: 'Athletic Club',
    homeScore: 2,
    awayScore: 0,
    year: '2025',
  },
  {
    date: '06/11',
    time: '03:00',
    home: 'Ajax',
    away: 'Galatasaray',
    homeScore: 0,
    awayScore: 3,
    year: '2025',
  },
  {
    date: '06/11',
    time: '03:00',
    home: 'Club Brugge',
    away: 'Barcelona',
    homeScore: 3,
    awayScore: 3,
    year: '2025',
  },
  {
    date: '06/11',
    time: '03:00',
    home: 'Inter Milan',
    away: 'Kairat',
    homeScore: 2,
    awayScore: 1,
    year: '2025',
  },
  {
    date: '06/11',
    time: '03:00',
    home: 'Man City',
    away: 'Borussia Dortmund',
    homeScore: 4,
    awayScore: 1,
    year: '2025',
  },
  {
    date: '06/11',
    time: '03:00',
    home: 'Benfica',
    away: 'Leverkusen',
    homeScore: 0,
    awayScore: 1,
    year: '2025',
  },
  {
    date: '06/11',
    time: '00:45',
    home: 'Pafos',
    away: 'Villarreal',
    homeScore: 1,
    awayScore: 0,
    year: '2025',
  },
  {
    date: '06/11',
    time: '00:45',
    home: 'Qarabağ',
    away: 'Chelsea',
    homeScore: 2,
    awayScore: 2,
    year: '2025',
  },
  // 05/11/2025
  {
    date: '05/11',
    time: '03:00',
    home: 'Olympiakos Piraeus',
    away: 'PSV',
    homeScore: 1,
    awayScore: 1,
    year: '2025',
  },
  {
    date: '05/11',
    time: '03:00',
    home: 'Atleti',
    away: 'Union Saint-Gilloise',
    homeScore: 3,
    awayScore: 1,
    year: '2025',
  },
  {
    date: '05/11',
    time: '03:00',
    home: 'Bodø/Glimt',
    away: 'Monaco',
    homeScore: 0,
    awayScore: 1,
    year: '2025',
  },
  {
    date: '05/11',
    time: '03:00',
    home: 'Juventus',
    away: 'Sporting CP',
    homeScore: 1,
    awayScore: 1,
    year: '2025',
  },
  {
    date: '05/11',
    time: '03:00',
    home: 'Liverpool',
    away: 'Real Madrid',
    homeScore: 1,
    awayScore: 0,
    year: '2025',
  },
  {
    date: '05/11',
    time: '03:00',
    home: 'PSG',
    away: 'Bayern München',
    homeScore: 1,
    awayScore: 2,
    year: '2025',
  },
  {
    date: '05/11',
    time: '03:00',
    home: 'Tottenham',
    away: 'Copenhagen',
    homeScore: 4,
    awayScore: 0,
    year: '2025',
  },
  {
    date: '05/11',
    time: '00:45',
    home: 'Slavia Praha',
    away: 'Arsenal',
    homeScore: 0,
    awayScore: 3,
    year: '2025',
  },
  {
    date: '05/11',
    time: '00:45',
    home: 'Napoli',
    away: 'Eintracht Frankfurt',
    homeScore: 0,
    awayScore: 0,
    year: '2025',
  },
  // 23/10/2025
  {
    date: '23/10',
    time: '02:00',
    home: 'Sporting CP',
    away: 'Olympique Marseille',
    homeScore: 2,
    awayScore: 1,
    year: '2025',
  },
  {
    date: '23/10',
    time: '02:00',
    home: 'Monaco',
    away: 'Tottenham',
    homeScore: 0,
    awayScore: 0,
    year: '2025',
  },
  {
    date: '23/10',
    time: '02:00',
    home: 'Atalanta',
    away: 'Slavia Praha',
    homeScore: 0,
    awayScore: 0,
    year: '2025',
  },
  {
    date: '23/10',
    time: '02:00',
    home: 'Chelsea',
    away: 'Ajax',
    homeScore: 5,
    awayScore: 1,
    year: '2025',
  },
  {
    date: '23/10',
    time: '02:00',
    home: 'Eintracht Frankfurt',
    away: 'Liverpool',
    homeScore: 1,
    awayScore: 5,
    year: '2025',
  },
  {
    date: '23/10',
    time: '02:00',
    home: 'Bayern München',
    away: 'Club Brugge',
    homeScore: 4,
    awayScore: 0,
    year: '2025',
  },
  {
    date: '23/10',
    time: '02:00',
    home: 'Real Madrid',
    away: 'Juventus',
    homeScore: 1,
    awayScore: 0,
    year: '2025',
  },
  // 22/10/2025
  {
    date: '22/10',
    time: '23:45',
    home: 'Galatasaray',
    away: 'Bodø/Glimt',
    homeScore: 3,
    awayScore: 1,
    year: '2025',
  },
  {
    date: '22/10',
    time: '23:45',
    home: 'Athletic Club',
    away: 'Qarabağ',
    homeScore: 3,
    awayScore: 1,
    year: '2025',
  },
  {
    date: '22/10',
    time: '02:00',
    home: 'Leverkusen',
    away: 'PSG',
    homeScore: 2,
    awayScore: 7,
    year: '2025',
  },
  {
    date: '22/10',
    time: '02:00',
    home: 'Arsenal',
    away: 'Atleti',
    homeScore: 4,
    awayScore: 0,
    year: '2025',
  },
  {
    date: '22/10',
    time: '02:00',
    home: 'Copenhagen',
    away: 'Borussia Dortmund',
    homeScore: 2,
    awayScore: 4,
    year: '2025',
  },
  {
    date: '22/10',
    time: '02:00',
    home: 'Newcastle',
    away: 'Benfica',
    homeScore: 3,
    awayScore: 0,
    year: '2025',
  },
  {
    date: '22/10',
    time: '02:00',
    home: 'PSV',
    away: 'Napoli',
    homeScore: 6,
    awayScore: 2,
    year: '2025',
  },
  {
    date: '22/10',
    time: '02:00',
    home: 'Union Saint-Gilloise',
    away: 'Inter Milan',
    homeScore: 0,
    awayScore: 4,
    year: '2025',
  },
  {
    date: '22/10',
    time: '02:00',
    home: 'Villarreal',
    away: 'Man City',
    homeScore: 0,
    awayScore: 2,
    year: '2025',
  },
  // 21/10/2025
  {
    date: '21/10',
    time: '23:45',
    home: 'Kairat',
    away: 'Pafos',
    homeScore: 0,
    awayScore: 0,
    year: '2025',
  },
  {
    date: '21/10',
    time: '23:45',
    home: 'Barcelona',
    away: 'Olympiakos Piraeus',
    homeScore: 6,
    awayScore: 1,
    year: '2025',
  },
  // 02/10/2025
  {
    date: '02/10',
    time: '02:00',
    home: 'Arsenal',
    away: 'Olympiakos Piraeus',
    homeScore: 2,
    awayScore: 0,
    year: '2025',
  },
  {
    date: '02/10',
    time: '02:00',
    home: 'Monaco',
    away: 'Man City',
    homeScore: 2,
    awayScore: 2,
    year: '2025',
  },
  {
    date: '02/10',
    time: '02:00',
    home: 'Leverkusen',
    away: 'PSV',
    homeScore: 1,
    awayScore: 1,
    year: '2025',
  },
  {
    date: '02/10',
    time: '02:00',
    home: 'Borussia Dortmund',
    away: 'Athletic Club',
    homeScore: 4,
    awayScore: 1,
    year: '2025',
  },
  {
    date: '02/10',
    time: '02:00',
    home: 'Barcelona',
    away: 'PSG',
    homeScore: 1,
    awayScore: 2,
    year: '2025',
  },
  {
    date: '02/10',
    time: '02:00',
    home: 'Napoli',
    away: 'Sporting CP',
    homeScore: 2,
    awayScore: 1,
    year: '2025',
  },
  {
    date: '02/10',
    time: '02:00',
    home: 'Villarreal',
    away: 'Juventus',
    homeScore: 2,
    awayScore: 2,
    year: '2025',
  },
  // 01/10/2025
  {
    date: '01/10',
    time: '23:45',
    home: 'Union Saint-Gilloise',
    away: 'Newcastle',
    homeScore: 0,
    awayScore: 4,
    year: '2025',
  },
  {
    date: '01/10',
    time: '23:45',
    home: 'Qarabağ',
    away: 'Copenhagen',
    homeScore: 2,
    awayScore: 0,
    year: '2025',
  },
  {
    date: '01/10',
    time: '02:00',
    home: 'Olympique Marseille',
    away: 'Ajax',
    homeScore: 4,
    awayScore: 0,
    year: '2025',
  },
  {
    date: '01/10',
    time: '02:00',
    home: 'Atleti',
    away: 'Eintracht Frankfurt',
    homeScore: 5,
    awayScore: 1,
    year: '2025',
  },
  {
    date: '01/10',
    time: '02:00',
    home: 'Chelsea',
    away: 'Benfica',
    homeScore: 1,
    awayScore: 0,
    year: '2025',
  },
  {
    date: '01/10',
    time: '02:00',
    home: 'Inter Milan',
    away: 'Slavia Praha',
    homeScore: 3,
    awayScore: 0,
    year: '2025',
  },
  {
    date: '01/10',
    time: '02:00',
    home: 'Bodø/Glimt',
    away: 'Tottenham',
    homeScore: 2,
    awayScore: 2,
    year: '2025',
  },
  {
    date: '01/10',
    time: '02:00',
    home: 'Galatasaray',
    away: 'Liverpool',
    homeScore: 1,
    awayScore: 0,
    year: '2025',
  },
  {
    date: '01/10',
    time: '02:00',
    home: 'Pafos',
    away: 'Bayern München',
    homeScore: 1,
    awayScore: 5,
    year: '2025',
  },
  // 30/09/2025
  {
    date: '30/09',
    time: '23:45',
    home: 'Atalanta',
    away: 'Club Brugge',
    homeScore: 2,
    awayScore: 1,
    year: '2025',
  },
  {
    date: '30/09',
    time: '23:45',
    home: 'Kairat',
    away: 'Real Madrid',
    homeScore: 0,
    awayScore: 5,
    year: '2025',
  },
  // 19/09/2025
  {
    date: '19/09',
    time: '02:00',
    home: 'Eintracht Frankfurt',
    away: 'Galatasaray',
    homeScore: 5,
    awayScore: 1,
    year: '2025',
  },
  {
    date: '19/09',
    time: '02:00',
    home: 'Man City',
    away: 'Napoli',
    homeScore: 2,
    awayScore: 0,
    year: '2025',
  },
  {
    date: '19/09',
    time: '02:00',
    home: 'Newcastle',
    away: 'Barcelona',
    homeScore: 1,
    awayScore: 2,
    year: '2025',
  },
  {
    date: '19/09',
    time: '02:00',
    home: 'Sporting CP',
    away: 'Kairat',
    homeScore: 4,
    awayScore: 1,
    year: '2025',
  },
  // 18/09/2025
  {
    date: '18/09',
    time: '23:45',
    home: 'Club Brugge',
    away: 'Monaco',
    homeScore: 4,
    awayScore: 1,
    year: '2025',
  },
  {
    date: '18/09',
    time: '23:45',
    home: 'Copenhagen',
    away: 'Leverkusen',
    homeScore: 2,
    awayScore: 2,
    year: '2025',
  },
  {
    date: '18/09',
    time: '02:00',
    home: 'Ajax',
    away: 'Inter Milan',
    homeScore: 0,
    awayScore: 2,
    year: '2025',
  },
  {
    date: '18/09',
    time: '02:00',
    home: 'Bayern München',
    away: 'Chelsea',
    homeScore: 3,
    awayScore: 1,
    year: '2025',
  },
  {
    date: '18/09',
    time: '02:00',
    home: 'Liverpool',
    away: 'Atleti',
    homeScore: 3,
    awayScore: 2,
    year: '2025',
  },
  {
    date: '18/09',
    time: '02:00',
    home: 'PSG',
    away: 'Atalanta',
    homeScore: 4,
    awayScore: 0,
    year: '2025',
  },
  // 17/09/2025
  {
    date: '17/09',
    time: '23:45',
    home: 'Slavia Praha',
    away: 'Bodø/Glimt',
    homeScore: 2,
    awayScore: 2,
    year: '2025',
  },
  {
    date: '17/09',
    time: '23:45',
    home: 'Olympiakos Piraeus',
    away: 'Pafos',
    homeScore: 0,
    awayScore: 0,
    year: '2025',
  },
  {
    date: '17/09',
    time: '02:00',
    home: 'Benfica',
    away: 'Qarabağ',
    homeScore: 2,
    awayScore: 3,
    year: '2025',
  },
  {
    date: '17/09',
    time: '02:00',
    home: 'Juventus',
    away: 'Borussia Dortmund',
    homeScore: 4,
    awayScore: 4,
    year: '2025',
  },
  {
    date: '17/09',
    time: '02:00',
    home: 'Real Madrid',
    away: 'Olympique Marseille',
    homeScore: 2,
    awayScore: 1,
    year: '2025',
  },
  {
    date: '17/09',
    time: '02:00',
    home: 'Tottenham',
    away: 'Villarreal',
    homeScore: 1,
    awayScore: 0,
    year: '2025',
  },
  // 16/09/2025
  {
    date: '16/09',
    time: '23:45',
    home: 'PSV',
    away: 'Union Saint-Gilloise',
    homeScore: 1,
    awayScore: 3,
    year: '2025',
  },
  {
    date: '16/09',
    time: '23:45',
    home: 'Athletic Club',
    away: 'Arsenal',
    homeScore: 0,
    awayScore: 2,
    year: '2025',
  },
];

/** Nhóm kết quả theo ngày, mới nhất trước */
export function getResultsGroupedByDate(
  results: MatchResult[]
): { date: string; entries: MatchResult[]; year: string }[] {
  const map = new Map<string, { entries: MatchResult[]; year: string }>();
  for (const r of results) {
    const key = `${r.date}-${r.year ?? '2026'}`;
    const existing = map.get(key);
    if (existing) {
      existing.entries.push(r);
    } else {
      map.set(key, { entries: [r], year: r.year ?? '2026' });
    }
  }
  return Array.from(map.entries())
    .sort(([, a], [, b]) =>
      toSortKey(b.entries[0].date, b.year).localeCompare(toSortKey(a.entries[0].date, a.year))
    )
    .map(([key, { entries, year }]) => {
      const date = key.split('-')[0];
      return { date, entries, year };
    });
}

/** Nhóm empty slots theo ngày */
export function groupEmptySlotsByDate(
  slots: EmptyScheduleSlot[]
): { date: string; slots: EmptyScheduleSlot[] }[] {
  const map = new Map<string, EmptyScheduleSlot[]>();
  for (const s of slots) {
    const list = map.get(s.date) ?? [];
    list.push(s);
    map.set(s.date, list);
  }
  return Array.from(map.keys())
    .sort((a, b) => toSortKey(a).localeCompare(toSortKey(b)))
    .map((date) => ({ date, slots: map.get(date)! }));
}
