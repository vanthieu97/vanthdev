/**
 * Lunar New Year countdown: data and pure logic (timezone, LNY dates, strings).
 */

export const LNY_DATES = [
  '2025-01-29', '2026-02-17', '2027-02-06', '2028-01-26', '2029-02-13', '2030-02-03',
  '2031-01-23', '2032-02-11', '2033-01-31', '2034-02-19', '2035-02-08', '2036-01-28',
];

export interface Country {
  id: string;
  name: string;
  nameLocal: string;
  zone: string;
  offset: number;
  lang: string;
}

export const COUNTRIES: Country[] = [
  { id: 'CN', name: 'China', nameLocal: '中国', zone: 'Asia/Shanghai', offset: 8, lang: 'zh' },
  { id: 'HK', name: 'Hong Kong', nameLocal: '香港', zone: 'Asia/Hong_Kong', offset: 8, lang: 'zh-Hant' },
  { id: 'TW', name: 'Taiwan', nameLocal: '台灣', zone: 'Asia/Taipei', offset: 8, lang: 'zh-Hant' },
  { id: 'VN', name: 'Vietnam', nameLocal: 'Việt Nam', zone: 'Asia/Ho_Chi_Minh', offset: 7, lang: 'vi' },
  { id: 'KR', name: 'South Korea', nameLocal: '한국', zone: 'Asia/Seoul', offset: 9, lang: 'ko' },
  { id: 'SG', name: 'Singapore', nameLocal: '新加坡', zone: 'Asia/Singapore', offset: 8, lang: 'en' },
  { id: 'MY', name: 'Malaysia', nameLocal: 'Malaysia', zone: 'Asia/Kuala_Lumpur', offset: 8, lang: 'en' },
  { id: 'ID', name: 'Indonesia', nameLocal: 'Indonesia', zone: 'Asia/Jakarta', offset: 7, lang: 'en' },
  { id: 'MN', name: 'Mongolia', nameLocal: 'Монгол Улс', zone: 'Asia/Ulaanbaatar', offset: 8, lang: 'mn' },
  { id: 'TH', name: 'Thailand', nameLocal: 'ประเทศไทย', zone: 'Asia/Bangkok', offset: 7, lang: 'th' },
  { id: 'PH', name: 'Philippines', nameLocal: 'Pilipinas', zone: 'Asia/Manila', offset: 8, lang: 'en' },
  { id: 'BN', name: 'Brunei', nameLocal: 'Brunei', zone: 'Asia/Brunei', offset: 8, lang: 'en' },
];

export interface LNYInfo {
  timestamp: number;
  dateStr: string;
  year: string;
}

export interface StringsLocale {
  title: string;
  titleSub: string;
  subtitle: string;
  celebrateIn: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  weeksUntil: (weeks: number, year: string) => string;
  weeksUntilNext: (weeks: number, year: string) => string;
  nextLNY: (year: string) => string;
  targetDate: (year: string, dateStr: string) => string;
  firstDay: string;
  secondDay: string;
  thirdDay: string;
  dayOfLNY: string;
  day1Cn: string;
  day2Cn: string;
  day3Cn: string;
  happyLNY: string;
  happyLNYSub: string;
  footer: string;
}

const en: StringsLocale = {
  title: 'Lunar New Year',
  titleSub: '新年快樂',
  subtitle: 'Countdown to the next celebration',
  celebrateIn: 'Celebrate in',
  days: 'Days',
  hours: 'Hours',
  minutes: 'Minutes',
  seconds: 'Seconds',
  weeksUntil: (w, y) => `${w} weeks until Lunar New Year ${y}`,
  weeksUntilNext: (w, y) => `${w} weeks until next Lunar New Year (${y})`,
  nextLNY: (y) => `Next Lunar New Year: ${y}`,
  targetDate: (y, d) => `Lunar New Year ${y} — ${d}`,
  firstDay: 'First',
  secondDay: 'Second',
  thirdDay: 'Third',
  dayOfLNY: 'day of Lunar New Year',
  day1Cn: '初一',
  day2Cn: '初二',
  day3Cn: '初三',
  happyLNY: 'Happy Lunar New Year!',
  happyLNYSub: '新年快樂 · 恭喜發財',
  footer: 'Lunar New Year is celebrated in many East and Southeast Asian countries.',
};

const zh: StringsLocale = {
  ...en,
  title: '春节',
  titleSub: '新年快樂',
  subtitle: '距離下次慶祝',
  celebrateIn: '慶祝地區',
  days: '天', hours: '時', minutes: '分', seconds: '秒',
  weeksUntil: (w, y) => `距${y}年春節還有 ${w} 週`,
  weeksUntilNext: (w, y) => `距下個春節（${y}年）還有 ${w} 週`,
  nextLNY: (y) => `下一個春節：${y}年`,
  targetDate: (y, d) => `${y}年春節 — ${d}`,
  firstDay: '初一', secondDay: '初二', thirdDay: '初三',
  dayOfLNY: '春節',
  happyLNY: '春節快樂！',
  footer: '春節在許多東亞與東南亞國家慶祝。',
};

const zhHant: StringsLocale = {
  ...en,
  title: '農曆新年',
  titleSub: '新年快樂',
  subtitle: '距離下次慶祝',
  celebrateIn: '慶祝地區',
  days: '天', hours: '時', minutes: '分', seconds: '秒',
  weeksUntil: (w, y) => `距${y}年農曆新年還有 ${w} 週`,
  weeksUntilNext: (w, y) => `距下個農曆新年（${y}年）還有 ${w} 週`,
  nextLNY: (y) => `下一個農曆新年：${y}年`,
  targetDate: (y, d) => `${y}年農曆新年 — ${d}`,
  firstDay: '初一', secondDay: '初二', thirdDay: '初三',
  dayOfLNY: '農曆新年',
  happyLNY: '農曆新年快樂！',
  footer: '農曆新年在許多東亞與東南亞國家慶祝。',
};

const vi: StringsLocale = {
  ...en,
  title: 'Tết Nguyên Đán',
  titleSub: 'Chúc mừng năm mới',
  subtitle: 'Đếm ngược đến dịp Tết',
  celebrateIn: 'Đón Tết tại',
  days: 'Ngày', hours: 'Giờ', minutes: 'Phút', seconds: 'Giây',
  weeksUntil: (w, y) => `Còn ${w} tuần đến Tết ${y}`,
  weeksUntilNext: (w, y) => `Còn ${w} tuần đến Tết năm sau (${y})`,
  nextLNY: (y) => `Tết năm sau: ${y}`,
  targetDate: (y, d) => `Tết ${y} — ${d}`,
  firstDay: 'Mùng 1', secondDay: 'Mùng 2', thirdDay: 'Mùng 3',
  dayOfLNY: 'Tết Nguyên Đán',
  happyLNY: 'Chúc mừng năm mới!',
  happyLNYSub: 'Tết vui vẻ · An khang thịnh vượng',
  footer: 'Tết được tổ chức tại nhiều quốc gia Đông Á và Đông Nam Á.',
};

const ko: StringsLocale = {
  ...en,
  title: '설날',
  titleSub: '새해 복 많이 받으세요',
  subtitle: '다음 명절까지 카운트다운',
  celebrateIn: '축하 지역',
  days: '일', hours: '시간', minutes: '분', seconds: '초',
  weeksUntil: (w, y) => `${y}년 설날까지 ${w}주`,
  weeksUntilNext: (w, y) => `다음 설날(${y}년)까지 ${w}주`,
  nextLNY: (y) => `다음 설날: ${y}년`,
  targetDate: (y, d) => `${y}년 설날 — ${d}`,
  firstDay: '첫날', secondDay: '둘째 날', thirdDay: '셋째 날',
  dayOfLNY: '설날',
  happyLNY: '새해 복 많이 받으세요!',
  happyLNYSub: '설날 축하합니다',
  footer: '설날은 많은 동아시아 및 동남아시아 국가에서 축하합니다.',
};

const th: StringsLocale = {
  ...en,
  title: 'ตรุษจีน',
  titleSub: 'สวัสดีปีใหม่',
  subtitle: 'นับถอยหลังถึงเทศกาล',
  celebrateIn: 'ฉลองที่',
  days: 'วัน', hours: 'ชม.', minutes: 'นาที', seconds: 'วินาที',
  weeksUntil: (w, y) => `อีก ${w} สัปดาห์ถึงตรุษจีน ${y}`,
  weeksUntilNext: (w, y) => `อีก ${w} สัปดาห์ถึงตรุษจีนปีหน้า (${y})`,
  nextLNY: (y) => `ตรุษจีนปีหน้า: ${y}`,
  targetDate: (y, d) => `ตรุษจีน ${y} — ${d}`,
  firstDay: 'วันแรก', secondDay: 'วันสอง', thirdDay: 'วันสาม',
  dayOfLNY: 'ตรุษจีน',
  happyLNY: 'สวัสดีปีใหม่!',
  happyLNYSub: '恭喜發財',
  footer: 'ตรุษจีนจัดในหลายประเทศในเอเชียตะวันออกและตะวันออกเฉียงใต้',
};

const mn: StringsLocale = {
  ...en,
  title: 'Tsagaan Sar',
  titleSub: 'Сар шинийн мэнд хүргэе',
  subtitle: 'Дараагийн баяраар хүртэл',
  celebrateIn: 'Тэмдэглэх улс',
  days: 'Өдөр', hours: 'Цаг', minutes: 'Минут', seconds: 'Секунд',
  weeksUntil: (w, y) => `${y} он Цагаан сар хүртэл ${w} долоо хоног`,
  weeksUntilNext: (w, y) => `Дараагийн Цагаан сар (${y}) хүртэл ${w} долоо хоног`,
  nextLNY: (y) => `Дараагийн Цагаан сар: ${y}`,
  targetDate: (y, d) => `Цагаан сар ${y} — ${d}`,
  firstDay: 'Нэгдүгээр', secondDay: 'Хоёрдугаар', thirdDay: 'Гуравдугаар',
  dayOfLNY: 'Цагаан сар',
  happyLNY: 'Сар шинийн мэнд хүргэе!',
  happyLNYSub: 'Цагаан сар баяр хүргэе',
  footer: 'Цагаан сарыг Зүүн болон Зүүн Өмнөด Азийн олон улс тэмдэглэнэ.',
};

export const STRINGS: Record<string, StringsLocale> = {
  en,
  zh,
  'zh-Hant': zhHant,
  vi,
  ko,
  th,
  mn,
};

export const TZ_TO_COUNTRY: Record<string, string> = {
  'Asia/Saigon': 'VN',
  'Asia/Chongqing': 'CN',
  'Asia/Chungking': 'CN',
  'Asia/Harbin': 'CN',
  'Asia/Ulan_Bator': 'MN',
};

export function midnightInTimezone(dateStr: string, offsetHours: number): number {
  const [y, m, d] = dateStr.split('-').map(Number);
  const utcMidnight = Date.UTC(y, m - 1, d, 0, 0, 0, 0);
  return utcMidnight - offsetHours * 60 * 60 * 1000;
}

export function getNextLNY(
  nowUtc: number,
  offsetHours: number,
  testMidnightTimestamp: number | null
): LNYInfo | null {
  if (testMidnightTimestamp != null && nowUtc < testMidnightTimestamp) {
    return { timestamp: testMidnightTimestamp, dateStr: '2026-02-17', year: '2026' };
  }
  for (const dateStr of LNY_DATES) {
    const ts = midnightInTimezone(dateStr, offsetHours);
    if (ts > nowUtc) return { timestamp: ts, dateStr, year: dateStr.split('-')[0] };
  }
  return null;
}

export function getCurrentLNYMidnight(
  nowUtc: number,
  offsetHours: number,
  testMidnightTimestamp: number | null
): LNYInfo | null {
  if (testMidnightTimestamp != null && nowUtc >= testMidnightTimestamp) {
    return { timestamp: testMidnightTimestamp, dateStr: '2026-02-17', year: '2026' };
  }
  let last: LNYInfo | null = null;
  for (const dateStr of LNY_DATES) {
    const ts = midnightInTimezone(dateStr, offsetHours);
    if (ts <= nowUtc) last = { timestamp: ts, dateStr, year: dateStr.split('-')[0] };
    else break;
  }
  return last;
}

export function getLNYDay(
  nowUtc: number,
  offsetHours: number,
  testMidnightTimestamp: number | null
): number {
  const lny = getCurrentLNYMidnight(nowUtc, offsetHours, testMidnightTimestamp);
  if (!lny) return 0;
  const oneDay = 24 * 60 * 60 * 1000;
  const dayIndex = Math.floor((nowUtc - lny.timestamp) / oneDay);
  if (dayIndex < 0) return 0;
  if (dayIndex >= 3) return 4;
  return dayIndex + 1;
}

export function isLNYMidnightMoment(
  nowUtc: number,
  offsetHours: number,
  testMidnightTimestamp: number | null,
  windowSeconds = 15
): boolean {
  if (testMidnightTimestamp != null) {
    const diff = (nowUtc - testMidnightTimestamp) / 1000;
    return diff >= 0 && diff <= windowSeconds;
  }
  const lny = getCurrentLNYMidnight(nowUtc, offsetHours, testMidnightTimestamp);
  if (!lny) return false;
  const diff = (nowUtc - lny.timestamp) / 1000;
  return diff >= 0 && diff <= windowSeconds;
}

export function getNowUtc(
  realNow: number,
  testMode: string | null,
  country: Country,
  testMidnightTimestamp: number | null
): number {
  if (!testMode) return realNow;
  if (testMode === 'midnight') return realNow;
  const lnyStr = '2026-02-17';
  const midnight = midnightInTimezone(lnyStr, country.offset);
  if (testMode === 'day1') return midnight + 12 * 60 * 60 * 1000;
  if (testMode === 'day2') return midnight + 36 * 60 * 60 * 1000;
  if (testMode === 'day3') return midnight + 60 * 60 * 60 * 1000;
  return realNow;
}

export function getStrings(country: Country): StringsLocale {
  const lang = country.lang || 'en';
  return STRINGS[lang] || STRINGS.en;
}

export function normalizeTz(s: string): string {
  return s.replace(/\s+/g, '_').toLowerCase();
}

export function detectCountryId(): string | null {
  if (typeof Intl === 'undefined') return null;
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (!tz) return null;
    const tzNorm = normalizeTz(tz);
    return (
      TZ_TO_COUNTRY[tz] ||
      COUNTRIES.find((c) => c.zone === tz)?.id ||
      COUNTRIES.find((c) => normalizeTz(c.zone) === tzNorm)?.id ||
      null
    );
  } catch {
    return null;
  }
}

export function formatTwo(n: number): string {
  return String(Math.max(0, Math.floor(n))).padStart(2, '0');
}
