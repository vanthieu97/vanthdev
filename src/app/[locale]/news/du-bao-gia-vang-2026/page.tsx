import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb } from '@/components/breadcrumb';
import { getCanonicalUrl, LOCALES, isValidLocale, type Locale } from '@/lib/i18n/config';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanthdev.com';
const SLUG = 'du-bao-gia-vang-2026';

function getPageUrl(locale: Locale) {
  return getCanonicalUrl(baseUrl, locale, `/news/${SLUG}`);
}

const OG_IMAGE = 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=1200&h=630&fit=crop';

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
    ? 'Gold price forecast 2026 - UBS 6,200 USD, banks raise predictions'
    : 'Dự báo giá vàng 2026 - UBS 6.200 USD, ngân hàng nâng dự báo';
  const description = isEn
    ? 'Gold above 5,300 USD. UBS forecasts 6,200 USD, ANZ 5,800 USD. Goldman, JP Morgan, Morgan Stanley latest predictions. Should you buy gold now?'
    : 'Vàng vượt 5.300 USD. UBS dự báo 6.200 USD, ANZ 5.800 USD. Goldman, JP Morgan, Morgan Stanley cập nhật mới nhất. Nên mua vàng lúc này?';

  return {
    title: isEn ? 'Gold forecast 2026 - UBS 6200, bank predictions' : 'Dự báo giá vàng 2026 - UBS 6200, ngân hàng nâng dự báo',
    description,
    keywords: isEn
      ? ['gold forecast 2026', 'UBS gold', 'gold 6200', 'gold price prediction', 'buy gold 2026']
      : ['dự báo giá vàng 2026', 'UBS vàng', 'vàng 6200', 'giá vàng 2026', 'nên mua vàng 2026'],
    openGraph: { title, description, url: pageUrl, siteName: 'vanthdev.com', type: 'article', locale: locale === 'vi' ? 'vi_VN' : 'en_US', images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Dự báo giá vàng 2026' }] },
    twitter: { card: 'summary_large_image', title, description },
    alternates: { canonical: pageUrl, languages },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

function buildNewsArticleJsonLd(locale: Locale, isEn: boolean) {
  const pageUrl = getPageUrl(locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: isEn ? 'Gold price forecast 2026 - Banks raise predictions' : 'Dự báo giá vàng 2026 - Ngân hàng nâng dự báo',
    description: isEn ? 'UBS 6,200 USD, ANZ 5,800 USD. Gold above 5,300 USD.' : 'UBS 6.200 USD, ANZ 5.800 USD. Vàng vượt 5.300 USD.',
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
  { label: 'Dự báo giá vàng 2026' },
];

const BREADCRUMB_ITEMS_EN = [
  { href: '/', label: 'Home' },
  { href: '/news', label: 'News' },
  { label: 'Gold forecast 2026' },
];

export default function DuBaoGiaVang2026Page({ params }: { params: { locale: string } }) {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : 'vi';
  const isEn = locale === 'en';
  const pageUrl = getPageUrl(locale);
  const newsArticleJsonLd = buildNewsArticleJsonLd(locale, isEn);
  const breadcrumbItems = isEn ? BREADCRUMB_ITEMS_EN : BREADCRUMB_ITEMS_VI;

  return (
    <div className="bg-[#faf8f5] dark:bg-[#0a0f1a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleJsonLd) }} />
      <article className="max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12">
        <Breadcrumb items={breadcrumbItems} currentPageUrl={pageUrl} locale={locale} />

        <header className="mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 text-sm font-semibold mb-4">
            🥇 Tài chính
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] dark:text-white/95 tracking-tight leading-tight">
            {isEn ? 'Dự báo giá vàng 2026 - UBS 6.200 USD, ngân hàng nâng dự báo' : 'Dự báo giá vàng 2026 - UBS 6.200 USD, ngân hàng nâng dự báo'}
          </h1>
          <p className="mt-4 text-[#6b6b6b] dark:text-slate-400 text-base md:text-lg">
            {isEn ? 'Cập nhật 2/3/2026 • Vàng vượt 5.300 USD • Phân tích từ UBS, Goldman, JP Morgan' : 'Cập nhật 2/3/2026 • Vàng vượt 5.300 USD • Phân tích từ UBS, Goldman, JP Morgan'}
          </p>

          <figure className="mt-8 rounded-xl overflow-hidden shadow-lg">
            <Image src={OG_IMAGE} alt="Vàng" width={1200} height={630} className="w-full aspect-video object-cover" priority />
          </figure>
        </header>

        <div className="space-y-6 text-[#1a1a1a] dark:text-slate-300 leading-relaxed">
          {isEn ? (
            <>
              <p className="text-lg leading-relaxed">
                Gold topped <strong>5,300 USD/ounce</strong> in early March 2026. Major banks have raised their forecasts. <strong>UBS</strong> expects <strong>6,200 USD</strong> by mid-year, <strong>ANZ</strong> 5,800 USD in Q2. Here&apos;s the latest from Goldman Sachs, JP Morgan, Morgan Stanley and Commerzbank.
              </p>

              <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">Bank forecasts</h2>
              <ul className="space-y-2 list-disc pl-6">
                <li><strong>UBS</strong>: 6,200 USD (mid-2026)</li>
                <li><strong>ANZ</strong>: 5,800 USD (Q2)</li>
                <li><strong>Goldman Sachs</strong>: 5,400 USD (year-end)</li>
                <li><strong>JP Morgan</strong>: 5,055 USD (Q4)</li>
                <li><strong>Commerzbank</strong>: 4,900 USD</li>
                <li><strong>Morgan Stanley</strong>: 4,500 USD (mid-year)</li>
              </ul>

              <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">Drivers</h2>
              <p>Central bank buying, Fed rate-cut expectations, geopolitical risk, and US debt concerns support prices.</p>

              <p className="mt-10">
                <Link href={getCanonicalUrl(baseUrl, locale, '/gia-vang')} className="text-[#c41e3a] dark:text-amber-400 hover:underline font-medium">Giá vàng hôm nay</Link>
              </p>
            </>
          ) : (
            <>
              <p className="text-lg leading-relaxed">
                Giá vàng thế giới vượt <strong>5.300 USD/ounce</strong> đầu tháng 3/2026. Các ngân hàng lớn đồng loạt nâng dự báo. <strong>UBS</strong> kỳ vọng <strong>6.200 USD</strong> giữa năm, <strong>ANZ</strong> 5.800 USD quý II. Dưới đây là cập nhật từ Goldman Sachs, JP Morgan, Morgan Stanley và Commerzbank.
              </p>

              <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">Dự báo của các ngân hàng</h2>
              <ul className="space-y-2 list-disc pl-6">
                <li><strong>UBS</strong>: 6.200 USD (giữa năm 2026)</li>
                <li><strong>ANZ</strong>: 5.800 USD (quý II)</li>
                <li><strong>Goldman Sachs</strong>: 5.400 USD (cuối năm)</li>
                <li><strong>JP Morgan</strong>: 5.055 USD (quý IV)</li>
                <li><strong>Commerzbank</strong>: 4.900 USD</li>
                <li><strong>Morgan Stanley</strong>: 4.500 USD (giữa năm)</li>
              </ul>

              <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">Yếu tố hỗ trợ</h2>
              <p>Ngân hàng trung ương mua vàng, kỳ vọng Fed cắt lãi suất, rủi ro địa chính trị và nợ công Mỹ tiếp tục hỗ trợ giá.</p>

              <p className="mt-10">
                <Link href={getCanonicalUrl(baseUrl, locale, '/gia-vang')} className="text-[#c41e3a] dark:text-amber-400 hover:underline font-medium">Giá vàng hôm nay</Link>
              </p>
            </>
          )}

          <p className="mt-10 text-[#6b6b6b] dark:text-slate-400 text-sm">
            {isEn ? 'Nguồn: 24h, VietnamPlus, PetroTimes, Kinh tế đô thị' : 'Nguồn: 24h, VietnamPlus, PetroTimes, Kinh tế đô thị'}
          </p>
        </div>
      </article>
    </div>
  );
}
