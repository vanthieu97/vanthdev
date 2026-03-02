import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/breadcrumb';
import { getCanonicalUrl, LOCALES, isValidLocale, type Locale } from '@/lib/i18n/config';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanthdev.com';
const SLUG = 'lich-tet-2026';

function getPageUrl(locale: Locale) {
  return getCanonicalUrl(baseUrl, locale, `/news/${SLUG}`);
}

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
    ? 'Lịch nghỉ Tết 2026 - Mùng 1 Tết Bính Ngọ ngày nào'
    : 'Lịch nghỉ Tết 2026 - Mùng 1 Tết Bính Ngọ ngày nào';
  const description = isEn
    ? 'Tết 2026 (Bính Ngọ) bắt đầu 17/2 (mùng 1). Lịch nghỉ Tết, ngày đẹp xông đất. Đếm ngược Tết 2026.'
    : 'Tết 2026 (Bính Ngọ) bắt đầu 17/2 (mùng 1). Lịch nghỉ Tết, ngày đẹp xông đất. Đếm ngược Tết 2026.';

  return {
    title: isEn ? 'Lịch Tết 2026 - Mùng 1 Tết Bính Ngọ' : 'Lịch nghỉ Tết 2026 - Mùng 1 Tết Bính Ngọ ngày nào',
    description,
    keywords: isEn
      ? ['Tết 2026', 'mùng 1 Tết 2026', 'lịch nghỉ Tết', 'Tết Bính Ngọ', 'còn bao nhiêu ngày đến Tết']
      : ['Tết 2026', 'mùng 1 Tết 2026', 'lịch nghỉ Tết 2026', 'Tết Bính Ngọ', 'còn bao nhiêu ngày đến Tết'],
    openGraph: { title, description, url: pageUrl, siteName: 'vanthdev.com', type: 'article', locale: locale === 'vi' ? 'vi_VN' : 'en_US' },
    twitter: { card: 'summary', title, description },
    alternates: { canonical: pageUrl, languages },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

function buildNewsArticleJsonLd(locale: Locale, isEn: boolean) {
  const pageUrl = getPageUrl(locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: isEn ? 'Lịch Tết 2026 - Mùng 1 Tết Bính Ngọ' : 'Lịch nghỉ Tết 2026 - Mùng 1 Tết Bính Ngọ ngày nào',
    description: isEn ? 'Tết 2026 starts 17 Feb. Holiday schedule.' : 'Tết 2026 bắt đầu 17/2. Lịch nghỉ Tết Bính Ngọ.',
    url: pageUrl,
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
  { label: 'Lịch Tết 2026' },
];

const BREADCRUMB_ITEMS_EN = [
  { href: '/', label: 'Home' },
  { href: '/news', label: 'News' },
  { label: 'Tet 2026 schedule' },
];

export default function LichTet2026Page({ params }: { params: { locale: string } }) {
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
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c41e3a]/10 dark:bg-[#c41e3a]/20 text-[#c41e3a] dark:text-amber-400 text-sm font-semibold mb-4">
            🧧 Văn hóa
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] dark:text-white/95 tracking-tight leading-tight">
            {isEn ? 'Lịch nghỉ Tết 2026 - Mùng 1 Tết Bính Ngọ ngày nào' : 'Lịch nghỉ Tết 2026 - Mùng 1 Tết Bính Ngọ ngày nào'}
          </h1>
          <p className="mt-4 text-[#6b6b6b] dark:text-slate-400 text-base md:text-lg">
            {isEn ? 'Tết Bính Ngọ 2026 • Mùng 1: 17/2 • Đếm ngược Tết' : 'Tết Bính Ngọ 2026 • Mùng 1: 17/2 • Đếm ngược Tết'}
          </p>
        </header>

        <div className="space-y-6 text-[#1a1a1a] dark:text-slate-300 leading-relaxed">
          {isEn ? (
            <>
              <p className="text-lg leading-relaxed">
                <strong>Tết 2026</strong> (Tết Bính Ngọ) falls on <strong>Tuesday, 17 February 2026</strong>. The first day of Lunar New Year (mùng 1 Tết) is 17/2. Vietnam typically has a 5-7 day holiday.
              </p>

              <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">Tết 2026 key dates</h2>
              <ul className="space-y-2 list-disc pl-6">
                <li><strong>23 tháng Chạp</strong> (ông Công ông Táo): 13/2/2026</li>
                <li><strong>30 Tết</strong> (giao thừa): 16/2/2026</li>
                <li><strong>Mùng 1 Tết</strong>: 17/2/2026 (Tuesday)</li>
                <li><strong>Mùng 2, Mùng 3</strong>: 18-19/2/2026</li>
              </ul>

              <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">Lịch nghỉ Tết 2026 (dự kiến)</h2>
              <p>
                Thường nghỉ từ 30 Tết đến hết mùng 3 (hoặc mùng 4). Công chức: khoảng 16/2 - 20/2 (5 ngày). Doanh nghiệp có thể linh hoạt hơn.
              </p>

              <p className="mt-10">
                <Link href={getCanonicalUrl(baseUrl, locale, '/lunar-new-year-countdown')} className="text-[#c41e3a] dark:text-amber-400 hover:underline font-medium">
                  Đếm ngược Tết 2026
                </Link>
              </p>
            </>
          ) : (
            <>
              <p className="text-lg leading-relaxed">
                <strong>Tết 2026</strong> (Tết Bính Ngọ) rơi vào <strong>Thứ Ba, 17 tháng 2 năm 2026</strong>. Mùng 1 Tết là ngày 17/2. Việt Nam thường nghỉ 5-7 ngày.
              </p>

              <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">Các ngày quan trọng Tết 2026</h2>
              <ul className="space-y-2 list-disc pl-6">
                <li><strong>23 tháng Chạp</strong> (ông Công ông Táo): 13/2/2026</li>
                <li><strong>30 Tết</strong> (giao thừa): 16/2/2026</li>
                <li><strong>Mùng 1 Tết</strong>: 17/2/2026 (Thứ Ba)</li>
                <li><strong>Mùng 2, Mùng 3</strong>: 18-19/2/2026</li>
              </ul>

              <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">Lịch nghỉ Tết 2026 (dự kiến)</h2>
              <p>
                Thường nghỉ từ 30 Tết đến hết mùng 3 (hoặc mùng 4). Công chức: khoảng 16/2 - 20/2 (5 ngày). Doanh nghiệp có thể linh hoạt hơn.
              </p>

              <p className="mt-10">
                <Link href={getCanonicalUrl(baseUrl, locale, '/lunar-new-year-countdown')} className="text-[#c41e3a] dark:text-amber-400 hover:underline font-medium">
                  Đếm ngược Tết 2026
                </Link>
              </p>
            </>
          )}

          <p className="mt-10 text-[#6b6b6b] dark:text-slate-400 text-sm">
            {isEn ? 'Lịch âm lịch có thể điều chỉnh. Tham khảo chính thức từ Chính phủ.' : 'Lịch âm lịch có thể điều chỉnh. Tham khảo chính thức từ Chính phủ.'}
          </p>
        </div>
      </article>
    </div>
  );
}
