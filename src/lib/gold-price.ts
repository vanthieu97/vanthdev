export interface GoldBrand {
  name: string;
  buyPrice: number;
  sellPrice: number;
  change: number;
  changePercent: number;
}

export interface GoldWorldPrice {
  usdPerOunce: number;
  usdPerGram: number;
  vndPerLuong: number;
  change24h: number;
  changePercent24h: number;
}

export interface GoldPriceData {
  updatedAt: string;
  brands: GoldBrand[];
  world: GoldWorldPrice;
}

interface VangTodayPrice {
  name: string;
  buy: number;
  sell: number;
  change_buy: number;
  change_sell: number;
  currency: string;
}

interface VangTodayResponse {
  success: boolean;
  timestamp: number;
  time: string;
  date: string;
  prices: Record<string, VangTodayPrice>;
}

const USD_TO_VND = 25_850;
const LUONG_TO_GRAM = 37.5;
const OZ_TO_GRAM = 31.1035;

const BRAND_MAP: Array<{ code: string; label: string }> = [
  { code: 'SJL1L10', label: 'SJC Miếng 9999' },
  { code: 'SJ9999', label: 'SJC Nhẫn 9999' },
  { code: 'DOHNL', label: 'DOJI Hà Nội' },
  { code: 'DOHCML', label: 'DOJI HCM' },
  { code: 'PQHN24NTT', label: 'PNJ 24K' },
  { code: 'BT9999NTT', label: 'Bảo Tín Minh Châu' },
];

function getVietnamTime(): string {
  return new Date().toLocaleString('vi-VN', {
    timeZone: 'Asia/Ho_Chi_Minh',
    hour: '2-digit',
    minute: '2-digit',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

export async function fetchGoldPriceData(): Promise<GoldPriceData> {
  const res = await fetch('https://www.vang.today/api/prices', {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error(`vang.today API error: ${res.status}`);
  }

  const json: VangTodayResponse = await res.json();

  if (!json.success || !json.prices) {
    throw new Error('Invalid response from vang.today');
  }

  const brands: GoldBrand[] = BRAND_MAP.filter(({ code }) => json.prices[code]).map(
    ({ code, label }) => {
      const p = json.prices[code];
      const avgPrice = (p.buy + p.sell) / 2;
      const changeAvg = (p.change_buy + p.change_sell) / 2;
      return {
        name: label,
        buyPrice: p.buy,
        sellPrice: p.sell,
        change: changeAvg,
        changePercent: avgPrice > 0 ? (changeAvg / (avgPrice - changeAvg)) * 100 : 0,
      };
    }
  );

  const xau = json.prices.XAUUSD;
  const worldUSD = xau?.buy ?? 0;
  const usdPerGram = worldUSD / OZ_TO_GRAM;
  const vndPerLuong = Math.round(usdPerGram * LUONG_TO_GRAM * USD_TO_VND);

  return {
    updatedAt: getVietnamTime(),
    brands,
    world: {
      usdPerOunce: worldUSD,
      usdPerGram: Math.round(usdPerGram * 100) / 100,
      vndPerLuong,
      change24h: xau?.change_buy ?? 0,
      changePercent24h:
        worldUSD > 0 ? ((xau?.change_buy ?? 0) / (worldUSD - (xau?.change_buy ?? 0))) * 100 : 0,
    },
  };
}

const FALLBACK_DATA: GoldPriceData = {
  updatedAt: getVietnamTime(),
  brands: [
    { name: 'SJC Miếng 9999', buyPrice: 184_000_000, sellPrice: 187_000_000, change: 0, changePercent: 0 },
    { name: 'SJC Nhẫn 9999', buyPrice: 183_800_000, sellPrice: 186_800_000, change: 0, changePercent: 0 },
    { name: 'DOJI Hà Nội', buyPrice: 184_000_000, sellPrice: 187_000_000, change: 0, changePercent: 0 },
    { name: 'DOJI HCM', buyPrice: 184_000_000, sellPrice: 187_000_000, change: 0, changePercent: 0 },
    { name: 'PNJ 24K', buyPrice: 184_000_000, sellPrice: 187_000_000, change: 0, changePercent: 0 },
    { name: 'Bảo Tín Minh Châu', buyPrice: 184_000_000, sellPrice: 187_000_000, change: 0, changePercent: 0 },
  ],
  world: {
    usdPerOunce: 5280,
    usdPerGram: 169.77,
    vndPerLuong: 164_600_000,
    change24h: 0,
    changePercent24h: 0,
  },
};

export async function getGoldPriceData(): Promise<GoldPriceData> {
  try {
    return await fetchGoldPriceData();
  } catch (err) {
    console.error('Failed to fetch gold prices, using fallback:', err);
    return { ...FALLBACK_DATA, updatedAt: getVietnamTime() };
  }
}
