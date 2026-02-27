/**
 * Kết quả bốc thăm vòng 1/8 Cúp C1 châu Âu 2025/2026
 * Cấu trúc bracket: trái 4 cặp, phải 4 cặp, QF, SF, Final
 */

export type Fixture = {
  home: string;
  away: string;
};

/** Logo đội bóng (crest) - football-data.org + Wikimedia */
const CREST = 'https://crests.football-data.org';
const WIKI = 'https://upload.wikimedia.org/wikipedia/commons';
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
};

// Nửa trái bracket (đường đến SF1)
export const BRACKET_LEFT: Fixture[] = [
  { home: 'PSG', away: 'Chelsea' },
  { home: 'Galatasaray', away: 'Liverpool' },
  { home: 'Real Madrid', away: 'Man City' },
  { home: 'Atalanta', away: 'Bayern München' },
];

// Nửa phải bracket (đường đến SF2)
export const BRACKET_RIGHT: Fixture[] = [
  { home: 'Newcastle', away: 'Barcelona' },
  { home: 'Atleti', away: 'Tottenham' },
  { home: 'Bodø/Glimt', away: 'Sporting CP' },
  { home: 'Leverkusen', away: 'Arsenal' },
];

// Toàn bộ vòng 1/8 (giữ cho tương thích)
export const ROUND_OF_16: Fixture[] = [...BRACKET_LEFT, ...BRACKET_RIGHT];
