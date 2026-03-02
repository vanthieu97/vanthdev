import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb } from '@/components/breadcrumb';
import { FeaturedArticles } from '../featured-articles';
import { getCanonicalUrl, LOCALES, isValidLocale, type Locale } from '@/lib/i18n/config';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanthdev.com';
const SLUG = 'vang-iran-chien-tranh-2026';

function getPageUrl(locale: Locale) {
  return getCanonicalUrl(baseUrl, locale, `/news/${SLUG}`);
}

const OG_IMAGE =
  'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=1200&h=630&fit=crop';
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=1200&h=630&fit=crop';

export const dynamic = 'force-static';

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

  const isEn = locale === 'en';
  const title = isEn
    ? 'Should You Buy or Sell Gold Now? Iran-Israel War Impact March 2026'
    : 'Có nên mua vàng hay bán vàng lúc này? Chiến tranh Iran ảnh hưởng thế nào – 2026';
  const description = isEn
    ? 'Gold hit all-time high above 5,200 USD amid Iran-Israel conflict. Analysts say buy the dip or take profit? Expert views, gold price forecast, and what to do now.'
    : 'Giá vàng vượt 5.200 USD đỉnh lịch sử giữa lúc chiến tranh Iran–Israel leo thang. Chuyên gia nói gì? Nên mua vào hay chốt lời? Dự báo và phân tích thời điểm vàng.';

  return {
    title: isEn
      ? 'Buy or Sell Gold Now - Iran War Impact, Gold Price Forecast 2026'
      : 'Có nên mua vàng hay bán vàng? Chiến tranh Iran, dự báo giá vàng 2026',
    description,
    keywords: isEn
      ? [
          'buy gold',
          'sell gold',
          'gold price',
          'Iran Israel war',
          'gold forecast 2026',
          'gold investment',
          'XAU USD',
          'gold all time high',
          'geopolitical gold',
        ]
      : [
          'có nên mua vàng',
          'có nên bán vàng',
          'giá vàng',
          'chiến tranh Iran',
          'Iran Israel',
          'vàng tăng giá',
          'dự báo giá vàng 2026',
          'đầu tư vàng',
          'mua vàng lúc nào',
          'bán vàng lúc nào',
          'vàng đỉnh lịch sử',
          'vàng vượt 5200',
          'XAU USD',
        ],
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: 'vanthdev.com',
      type: 'article',
      locale: locale === 'vi' ? 'vi_VN' : 'en_US',
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Vàng và chiến tranh Iran' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
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

function buildNewsArticleJsonLd(locale: Locale, isEn: boolean) {
  const pageUrl = getPageUrl(locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: isEn
      ? 'Should You Buy or Sell Gold Now? Iran-Israel War Impact March 2026'
      : 'Có nên mua vàng hay bán vàng lúc này? Chiến tranh Iran ảnh hưởng thế nào – 2026',
    description: isEn
      ? 'Gold hit all-time high above 5,200 USD amid Iran-Israel conflict. Expert analysis on whether to buy or sell.'
      : 'Giá vàng vượt 5.200 USD đỉnh lịch sử giữa lúc chiến tranh Iran–Israel. Phân tích nên mua hay bán vàng.',
    url: pageUrl,
    image: OG_IMAGE,
    datePublished: '2026-03-01',
    dateModified: '2026-03-01',
    author: { '@type': 'Organization', name: 'vanthdev.com' },
    publisher: { '@type': 'Organization', name: 'vanthdev.com', url: baseUrl },
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
  };
}

const BREADCRUMB_ITEMS_VI = [
  { href: '/', label: 'Trang chủ' },
  { href: '/news', label: 'Tin tức' },
  { label: 'Có nên mua vàng hay bán vàng - Chiến tranh Iran' },
];

const BREADCRUMB_ITEMS_EN = [
  { href: '/', label: 'Home' },
  { href: '/news', label: 'News' },
  { label: 'Buy or Sell Gold - Iran War' },
];

export default function VangIranChienTranhPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : 'vi';
  const isEn = locale === 'en';
  const pageUrl = getPageUrl(locale);
  const newsArticleJsonLd = buildNewsArticleJsonLd(locale, isEn);
  const breadcrumbItems = isEn ? BREADCRUMB_ITEMS_EN : BREADCRUMB_ITEMS_VI;

  return (
    <div className="bg-[#faf8f5] dark:bg-[#0a0f1a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleJsonLd) }}
      />
      <article className="max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12">
        <Breadcrumb items={breadcrumbItems} currentPageUrl={pageUrl} locale={locale} />

        <header className="mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 text-sm font-semibold mb-4">
            🥇 Tài chính • Đầu tư
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] dark:text-white/95 tracking-tight leading-tight">
            {isEn
              ? 'Should You Buy or Sell Gold Now? Iran-Israel War Impact'
              : 'Có nên mua vàng hay bán vàng lúc này? Chiến tranh Iran ảnh hưởng thế nào'}
          </h1>
          <p className="mt-4 text-[#6b6b6b] dark:text-slate-400 text-base md:text-lg">
            {isEn ? 'Update: 1/3/2026 • Gold • Iran-Israel • Geopolitics' : 'Cập nhật: 1/3/2026 • Vàng • Iran–Israel • Địa chính trị'}
          </p>

          <figure className="mt-8 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={HERO_IMAGE}
              alt={isEn ? 'Gold bars - safe haven asset' : 'Vàng miếng - tài sản trú ẩn an toàn'}
              width={1200}
              height={630}
              className="w-full aspect-video object-cover"
              priority
            />
            <figcaption className="mt-2 text-sm text-[#6b6b6b] dark:text-slate-400 text-center">
              {isEn ? 'Gold bars. Photo: Unsplash' : 'Vàng miếng. Ảnh: Unsplash'}
            </figcaption>
          </figure>
        </header>

        <div className="space-y-6 text-[#1a1a1a] dark:text-slate-300 leading-relaxed">
          {isEn ? (
            <>
              <p className="text-lg leading-relaxed">
                <strong>Gold hit an all-time high above 5,200 USD/ounce</strong> in early March 2026
                as the Iran–Israel conflict escalated. The US–Israel airstrikes on Iran and Tehran&apos;s
                retaliation have investors rushing into the safe haven. So: <strong>should you buy or
                sell gold right now?</strong> Here&apos;s what the data and experts say.
              </p>

              <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
                Why Gold Is Surging – Iran and Geopolitical Fear
              </h2>
              <p>
                When conflict flares in the Middle East, gold typically rallies. The Iran–Israel
                tensions, the death of Khamenei, and fears of a wider war have driven a sharp
                flight to safety. Central banks continue to buy gold, and retail demand is rising.
                <strong> &quot;Buy the fear&quot;</strong> – some analysts argue that every dip is a
                buying opportunity as long as geopolitical risk stays high.
              </p>

              <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
                The Case for Buying Gold Now
              </h2>
              <p>
                UBS and Bank of America both raised gold forecasts to around <strong>6,000–6,200
                USD</strong> for 2026. If the Iran conflict drags on or spreads, gold could spike
                further. Delaying might mean paying more later. <strong>67% of Wall Street analysts</strong>{' '}
                and <strong>76% of retail investors</strong> in a recent survey expect gold to rise
                in the short term.
              </p>

              <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
                The Case for Selling or Taking Profit
              </h2>
              <p>
                Gold has already rallied heavily. A sudden de-escalation or ceasefire could trigger
                a sharp correction. If you bought low, <strong>locking in some profit</strong> now
                is a valid strategy. Don&apos;t let FOMO push you to buy at the very top – wait for
                a pullback if you&apos;re not yet in.
              </p>

              <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
                What to Do Now – Expert View
              </h2>
              <p>
                Most experts suggest: <strong>don&apos;t go all-in or all-out</strong>. If you hold
                gold, consider taking partial profits. If you&apos;re looking to buy, use dollar-cost
                averaging or wait for a 3–5% pullback. Check{' '}
                <Link
                  href={getCanonicalUrl(baseUrl, locale, '/gia-vang')}
                  className="text-[#c41e3a] dark:text-amber-400 hover:underline font-medium"
                >
                  today&apos;s gold price
                </Link>{' '}
                before deciding. The Iran situation remains fluid – stay informed and avoid rash
                moves.
              </p>
            </>
          ) : (
            <>
              <p className="text-lg leading-relaxed">
                <strong>Giá vàng chạm đỉnh lịch sử trên 5.200 USD/ounce</strong> đầu tháng 3/2026
                khi xung đột Iran–Israel leo thang. Không kích Mỹ–Israel vào Iran và Tehran đáp trả
                khiến nhà đầu tư đổ xô tìm tài sản trú ẩn. Vậy: <strong>có nên mua vàng hay bán
                vàng lúc này?</strong> Dưới đây là góc nhìn dựa trên dữ liệu và ý kiến chuyên gia.
              </p>

              <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
                Vì sao vàng tăng mạnh – Iran và nỗi sợ địa chính trị
              </h2>
              <p>
                Mỗi khi xung đột bùng phát ở Trung Đông, vàng thường tăng giá. Căng thẳng Iran–Israel,
                cái chết của Khamenei và lo ngại chiến tranh mở rộng đã thúc đẩy dòng tiền chạy vào
                tài sản an toàn. Ngân hàng trung ương tiếp tục mua vàng, nhu cầu cá nhân tăng. Câu
                nói <strong>&quot;mua khi sợ hãi&quot;</strong> – một số nhà phân tích cho rằng mỗi
                đợt điều chỉnh là cơ hội mua vào khi rủi ro địa chính trị còn cao.
              </p>

              <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
                Lý do nên mua vàng lúc này
              </h2>
              <p>
                UBS và Bank of America đều nâng dự báo giá vàng lên khoảng <strong>6.000–6.200
                USD</strong> trong năm 2026. Nếu xung đột Iran kéo dài hoặc lan rộng, vàng có thể
                còn tăng mạnh. Trì hoãn có thể đồng nghĩa với việc phải mua đắt hơn sau này.{' '}
                <strong>67% chuyên gia Wall Street</strong> và <strong>76% nhà đầu tư cá nhân</strong>{' '}
                trong một khảo sát gần đây kỳ vọng vàng tiếp tục tăng trong ngắn hạn.
              </p>

              <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
                Lý do nên bán hoặc chốt lời
              </h2>
              <p>
                Vàng đã tăng rất mạnh. Một đàm phán hòa giải hoặc ngừng bắn bất ngờ có thể kéo giá
                lao dốc. Nếu bạn đã mua ở vùng thấp, <strong>chốt một phần lời</strong> hiện tại là
                chiến lược hợp lý. Đừng để FOMO thôi thúc mua ở đỉnh – hãy chờ điều chỉnh 3–5% nếu
                chưa vào lệnh.
              </p>

              <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
                Nên làm gì – Góc nhìn chuyên gia
              </h2>
              <p>
                Đa số chuyên gia khuyên: <strong>không nên all-in hay all-out</strong>. Nếu đang
                giữ vàng, cân nhắc chốt lời một phần. Nếu muốn mua, dùng chiến lược trung bình giá
                hoặc chờ vàng giảm 3–5% rồi vào. Xem{' '}
                <Link
                  href={getCanonicalUrl(baseUrl, locale, '/gia-vang')}
                  className="text-[#c41e3a] dark:text-amber-400 hover:underline font-medium"
                >
                  giá vàng hôm nay
                </Link>{' '}
                trước khi quyết định. Tình hình Iran còn biến động – cập nhật tin tức và tránh
                hành động theo cảm tính.
              </p>
            </>
          )}

          <p className="mt-10 text-[#6b6b6b] dark:text-slate-400 text-sm">
            {isEn
              ? 'Reference: Reuters, Bloomberg, UBS, Bank of America, Kitco'
              : 'Nguồn tham khảo: Reuters, Bloomberg, UBS, Bank of America, Kitco'}
          </p>
        </div>
      </article>
      <div className="mt-12 md:mt-16 pb-8">
        <FeaturedArticles excludeHref="/news/vang-iran-chien-tranh-2026" titleVariant="related" locale={locale} />
      </div>
    </div>
  );
}
