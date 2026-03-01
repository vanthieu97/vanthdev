import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { getGoldPriceData } from '@/lib/gold-price';
import { GoldPriceClient } from './gold-price-client';
import { getCanonicalUrl, LOCALES, isValidLocale, type Locale } from '@/lib/i18n/config';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanthdev.com';

function getPageUrl(locale: Locale) {
  return getCanonicalUrl(baseUrl, locale, '/gia-vang');
}

export const revalidate = 300;

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : 'vi';
  const pageUrl = getPageUrl(locale);
  const languages: Record<string, string> = {};
  for (const loc of LOCALES) {
    languages[loc === 'vi' ? 'vi-VN' : 'en-US'] = getPageUrl(loc);
  }
  languages['x-default'] = getPageUrl('vi');

  return {
  title: 'Giá vàng hôm nay - Bảng giá vàng SJC, DOJI, PNJ, 9999, 24K mới nhất 2026',
  description:
    'Giá vàng hôm nay cập nhật liên tục. Bảng giá vàng SJC, DOJI, PNJ, Bảo Tín Minh Châu, vàng miếng, vàng nhẫn 9999, vàng 24K, giá vàng thế giới XAU/USD vượt 5.000 USD. Dự báo giá vàng tuần tới, nên mua vàng lúc nào, cách mua vàng đầu tư 2026.',
  keywords: [
    'giá vàng hôm nay',
    'giá vàng SJC',
    'giá vàng DOJI',
    'giá vàng PNJ',
    'giá vàng 9999',
    'giá vàng 24k',
    'giá vàng 18k',
    'giá vàng miếng',
    'giá vàng nhẫn',
    'giá vàng Bảo Tín Minh Châu',
    'giá vàng Mi Hồng',
    'giá vàng Phú Quý',
    'bảng giá vàng',
    'bảng giá vàng hôm nay',
    'giá vàng thế giới',
    'giá vàng thế giới hôm nay',
    'XAU/USD',
    'giá vàng mới nhất',
    'giá vàng trực tuyến',
    'giá vàng tăng hay giảm',
    'dự báo giá vàng',
    'dự báo giá vàng tuần tới',
    'nên mua vàng lúc nào',
    'có nên mua vàng',
    'cách mua vàng đầu tư',
    'mua vàng ở đâu',
    'mua bán vàng',
    'đầu tư vàng 2026',
    'vàng tăng giá',
    'vàng vượt 5000 USD',
    'gold price today',
    'gold price Vietnam',
  ],
  openGraph: {
    title: 'Giá vàng hôm nay - Bảng giá vàng SJC, DOJI, PNJ, 9999 mới nhất',
    description:
      'Cập nhật giá vàng hôm nay: SJC, DOJI, PNJ, vàng miếng, vàng nhẫn 9999, vàng 24K, giá vàng thế giới vượt 5.000 USD. Dự báo và phân tích xu hướng.',
    url: pageUrl,
    siteName: 'vanthdev.com',
    type: 'website',
    locale: 'vi_VN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Giá vàng hôm nay - Bảng giá vàng SJC, DOJI, PNJ mới nhất',
    description: 'Giá vàng hôm nay cập nhật liên tục. SJC, DOJI, PNJ, vàng 9999, 24K. Giá vàng thế giới vượt 5.000 USD.',
  },
  alternates: {
    canonical: pageUrl,
    languages,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  };
}

const BREADCRUMB_ITEMS = [
  { href: '/', label: 'Trang chủ' },
  { label: 'Giá vàng hôm nay' },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Giá vàng SJC hôm nay bao nhiêu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Giá vàng SJC miếng hôm nay dao động quanh 182-185 triệu đồng/lượng. Giá cập nhật liên tục trong ngày.',
      },
    },
    {
      '@type': 'Question',
      name: 'Giá vàng thế giới hôm nay bao nhiêu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Giá vàng thế giới (XAU/USD) đang giao dịch quanh mức 5.200-5.300 USD/ounce, tăng mạnh 7 tháng liên tiếp.',
      },
    },
    {
      '@type': 'Question',
      name: 'Có nên mua vàng thời điểm này không?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vàng đã vượt 5.000 USD/ounce. UBS dự báo 6.200 USD, Bank of America dự báo 6.000 USD trong năm 2026. Đà tăng được hỗ trợ bởi ngân hàng trung ương mua ròng và bất ổn địa chính trị.',
      },
    },
    {
      '@type': 'Question',
      name: 'Nên mua vàng miếng hay vàng nhẫn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vàng miếng SJC có tính thanh khoản cao và được NHNN quản lý. Vàng nhẫn 9999 có giá mềm hơn và chênh lệch mua-bán thấp hơn, phù hợp đầu tư nhỏ lẻ.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mua vàng ở đâu uy tín?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nên mua tại các thương hiệu lớn: SJC, DOJI, PNJ, Bảo Tín Minh Châu, Mi Hồng, Phú Quý. Luôn yêu cầu hóa đơn và giấy kiểm định khi mua.',
      },
    },
    {
      '@type': 'Question',
      name: 'Dự báo giá vàng tuần tới tăng hay giảm?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '67% chuyên gia Wall Street và 76% nhà đầu tư cá nhân dự đoán giá vàng tiếp tục tăng trong ngắn hạn. Nếu vượt 5.250 USD có thể tiến tới 5.500 USD/ounce.',
      },
    },
    {
      '@type': 'Question',
      name: 'Giá vàng 24K và 18K khác gì vàng 9999?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vàng 9999 (99.99% vàng nguyên chất) tương đương vàng 24K, dùng cho đầu tư. Vàng 18K (75% vàng) chủ yếu dùng làm trang sức, giá thấp hơn đáng kể.',
      },
    },
  ],
};

function buildWebPageJsonLd(locale: Locale) {
  const pageUrl = getPageUrl(locale);
  return {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Giá vàng hôm nay',
  description: 'Bảng giá vàng SJC, DOJI, PNJ cập nhật liên tục. Giá vàng thế giới XAU/USD.',
  url: pageUrl,
  isPartOf: { '@type': 'WebSite', url: getCanonicalUrl(baseUrl, locale, '/'), name: 'vanthdev.com' },
  about: {
    '@type': 'Thing',
    name: 'Giá vàng hôm nay',
    alternateName: [
      'Gold Price',
      'Gold Price Today',
      'Giá vàng',
      'Vàng SJC',
      'Vàng 9999',
      'Vàng 24K',
      'XAU/USD',
      'Bảng giá vàng',
      'Giá vàng thế giới',
      'Giá vàng mới nhất',
      'Mua vàng đầu tư',
    ],
  },
  };
}

export default async function GoldPricePage({ params }: { params: { locale: string } }) {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : 'vi';
  const pageUrl = getPageUrl(locale);
  const data = await getGoldPriceData();
  const webPageJsonLd = buildWebPageJsonLd(locale);

  return (
    <div className="bg-[#faf8f5] dark:bg-[#0a0f1a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12">
        <Breadcrumb items={BREADCRUMB_ITEMS} currentPageUrl={pageUrl} locale={locale} />

        <GoldPriceClient initialData={data} />
      </div>
    </div>
  );
}
