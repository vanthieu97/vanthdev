/**
 * C1 bracket page translations
 * vi: Vietnamese, en: English (default when browser is not vi)
 */

export type Locale = 'vi' | 'en';

export const C1_TRANSLATIONS = {
  vi: {
    roadTo: 'Đường đến',
    budapest26: 'Budapest 26',
    subtitle: 'UEFA Champions League • Vòng 1/8',
    bracketLeft: 'Bracket trái',
    bracketRight: 'Bracket phải',
    teamsPlay2ndLegAtHome: 'Các đội đá lượt về trên sân nhà',
    news: 'Tin tức',
    keyDates: 'Lịch thi đấu',
    r16: 'Vòng 1/8',
    r16Dates: '10–11 & 17–18.03.2026',
    qf: 'Tứ kết',
    qfDates: '7–8 & 14–15.04.2026',
    sf: 'Bán kết',
    sfDates: '28–29.04 & 5–6.05.2026',
    final: 'Chung kết',
    finalDate: '30.05.2026',
    finalVenue: 'Puskás Aréna, Budapest',
    source: 'Nguồn',
    uefa: 'UEFA.com',
    intro: 'Kết quả bốc thăm vòng 1/8 UEFA Champions League 2025/2026. 8 cặp đấu loại trực tiếp hai lượt, đội thắng đi tiếp vào tứ kết.',
    faqTitle: 'Câu hỏi thường gặp',
    faq1Q: 'Chung kết C1 2026 diễn ra khi nào?',
    faq1A: 'Chung kết UEFA Champions League 2025/26 diễn ra ngày 30.05.2026 tại Puskás Aréna, Budapest, Hungary.',
    faq2Q: 'Thể thức vòng 1/8 như thế nào?',
    faq2A: 'Mỗi cặp đấu đá hai lượt (đi – về). Đội ghi nhiều bàn thắng hơn sau hai lượt đi tiếp. Các đội đá lượt về trên sân nhà.',
    faq3Q: 'Các cặp đấu vòng 1/8 C1 2025/26?',
    faq3A: 'PSG vs Chelsea, Galatasaray vs Liverpool, Real Madrid vs Man City, Atalanta vs Bayern München, Newcastle vs Barcelona, Atleti vs Tottenham, Bodø/Glimt vs Sporting CP, Leverkusen vs Arsenal.',
  },
  en: {
    roadTo: 'Road to',
    budapest26: 'Budapest 26',
    subtitle: 'UEFA Champions League • Round of 16',
    bracketLeft: 'Left bracket',
    bracketRight: 'Right bracket',
    teamsPlay2ndLegAtHome: 'Teams play 2nd leg at home',
    news: 'News',
    keyDates: 'Key dates',
    r16: 'Round of 16',
    r16Dates: '10–11 & 17–18 Mar 2026',
    qf: 'Quarter-finals',
    qfDates: '7–8 & 14–15 Apr 2026',
    sf: 'Semi-finals',
    sfDates: '28–29 Apr & 5–6 May 2026',
    final: 'Final',
    finalDate: '30 May 2026',
    finalVenue: 'Puskás Aréna, Budapest',
    source: 'Source',
    uefa: 'UEFA.com',
    intro: 'UEFA Champions League 2025/26 Round of 16 draw results. 8 two-legged knockout ties; winners advance to the quarter-finals.',
    faqTitle: 'FAQ',
    faq1Q: 'When is the 2026 Champions League final?',
    faq1A: 'The 2025/26 UEFA Champions League final takes place on 30 May 2026 at Puskás Aréna, Budapest, Hungary.',
    faq2Q: 'How does the Round of 16 format work?',
    faq2A: 'Each tie is played over two legs (home and away). The team with more goals on aggregate advances. Teams play the second leg at home.',
    faq3Q: 'What are the Round of 16 fixtures?',
    faq3A: 'PSG vs Chelsea, Galatasaray vs Liverpool, Real Madrid vs Man City, Atalanta vs Bayern München, Newcastle vs Barcelona, Atleti vs Tottenham, Bodø/Glimt vs Sporting CP, Leverkusen vs Arsenal.',
  },
} as const;

export function getC1Translations(locale: Locale) {
  return C1_TRANSLATIONS[locale] ?? C1_TRANSLATIONS.en;
}
