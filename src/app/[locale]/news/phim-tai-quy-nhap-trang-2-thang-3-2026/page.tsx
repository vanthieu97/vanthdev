import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/breadcrumb';
import { FeaturedArticles } from '../featured-articles';
import { getCanonicalUrl, LOCALES, isValidLocale, type Locale } from '@/lib/i18n/config';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanthdev.com';
const SLUG = 'phim-tai-quy-nhap-trang-2-thang-3-2026';

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
    ? 'Phim Tài Mỹ Tâm, Quỷ nhập tràng 2 tháng 3/2026'
    : 'Phim Tài Mỹ Tâm, Quỷ nhập tràng 2 tháng 3/2026';
  const description = isEn
    ? '"Tài" (Mỹ Tâm - Mai Tài Phến) 6/3, "Quỷ nhập tràng 2" 13/3. Phim Việt hot tháng 3.'
    : '"Tài" (Mỹ Tâm - Mai Tài Phến) khởi chiếu 6/3, "Quỷ nhập tràng 2" 13/3. Phim Việt hot tháng 3/2026.';

  return {
    title: isEn ? 'Phim Tài, Quỷ nhập tràng 2 - Tháng 3/2026' : 'Phim Tài Mỹ Tâm, Quỷ nhập tràng 2 - Tháng 3/2026',
    description,
    keywords: isEn
      ? ['phim Tài', 'Mỹ Tâm Mai Tài Phến', 'Quỷ nhập tràng 2', 'phim Việt tháng 3']
      : ['phim Tài', 'Mỹ Tâm Mai Tài Phến', 'Quỷ nhập tràng 2', 'phim Việt tháng 3 2026'],
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
    headline: isEn ? 'Phim Tài, Quỷ nhập tràng 2 March 2026' : 'Phim Tài Mỹ Tâm, Quỷ nhập tràng 2 tháng 3/2026',
    description: isEn ? 'Tài (6/3), Quỷ nhập tràng 2 (13/3) - Vietnamese films March 2026.' : 'Tài (6/3), Quỷ nhập tràng 2 (13/3) - Phim Việt tháng 3/2026.',
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
  { label: 'Phim Tài, Quỷ nhập tràng 2 tháng 3/2026' },
];

const BREADCRUMB_ITEMS_EN = [
  { href: '/', label: 'Home' },
  { href: '/news', label: 'News' },
  { label: 'Phim Tài, Quỷ nhập tràng 2 March 2026' },
];

export default function PhimTaiQuyNhapTrang2Page({ params }: { params: { locale: string } }) {
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
            🎬 Giải trí
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] dark:text-white/95 tracking-tight leading-tight">
            {isEn ? 'Phim Tài Mỹ Tâm, Quỷ nhập tràng 2 - Phim Việt hot tháng 3/2026' : 'Phim Tài Mỹ Tâm, Quỷ nhập tràng 2 - Phim Việt hot tháng 3/2026'}
          </h1>
          <p className="mt-4 text-[#6b6b6b] dark:text-slate-400 text-base md:text-lg">
            {isEn ? 'Khởi chiếu 6/3 và 13/3 • Mỹ Tâm - Mai Tài Phến tái hợp • Quỷ nhập tràng 2' : 'Khởi chiếu 6/3 và 13/3 • Mỹ Tâm - Mai Tài Phến tái hợp • Quỷ nhập tràng 2'}
          </p>
        </header>

        <div className="space-y-6 text-[#1a1a1a] dark:text-slate-300 leading-relaxed">
          {isEn ? (
            <>
              <p className="text-lg leading-relaxed">
                March 2026 brings two major Vietnamese releases: <strong>&quot;Tài&quot;</strong> (My Tam - Mai Tai Phen) on <strong>6 March</strong> and <strong>&quot;Quỷ nhập tràng 2&quot;</strong> (Demon Possession 2) on <strong>13 March</strong>.
              </p>

              <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">&quot;Tài&quot; - Mỹ Tâm, Mai Tài Phến</h2>
              <p>
                <strong>Release: 6 March 2026.</strong> Mai Tai Phen directs and stars; My Tam produces. The couple reunite on screen six years after &quot;Chị trợ lý của anh&quot; (2019). The film follows a man struggling in the river region with a complex past.
              </p>

              <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">&quot;Quỷ nhập tràng 2&quot;</h2>
              <p>
                <strong>Release: 13 March 2026.</strong> Horror sequel directed by Pom Nguyen. The first film grossed 150 billion VND. Cast includes Khả Như, Quang Tuấn, Doãn Quốc Đam, Vân Dung.
              </p>

              <p className="mt-10">
                <Link href={getCanonicalUrl(baseUrl, locale, '/film-reviews')} className="text-[#c41e3a] dark:text-amber-400 hover:underline font-medium">Review phim</Link>
              </p>
            </>
          ) : (
            <>
              <p className="text-lg leading-relaxed">
                Tháng 3/2026 có hai phim Việt đáng chú ý: <strong>&quot;Tài&quot;</strong> (Mỹ Tâm - Mai Tài Phến) khởi chiếu <strong>6/3</strong> và <strong>&quot;Quỷ nhập tràng 2&quot;</strong> ngày <strong>13/3</strong>.
              </p>

              <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">&quot;Tài&quot; - Mỹ Tâm, Mai Tài Phến</h2>
              <p>
                <strong>Khởi chiếu: 6/3/2026.</strong> Mai Tài Phến đạo diễn và đóng chính; Mỹ Tâm tham gia sản xuất. Cặp đôi tái hợp sau 6 năm kể từ &quot;Chị trợ lý của anh&quot; (2019). Phim kể về người đàn ông mưu sinh ở miền sông nước với quá khứ phức tạp.
              </p>

              <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">&quot;Quỷ nhập tràng 2&quot;</h2>
              <p>
                <strong>Khởi chiếu: 13/3/2026.</strong> Phim kinh dị phần 2 do đạo diễn Pom Nguyễn thực hiện. Phần 1 từng đạt 150 tỷ đồng phòng vé. Diễn viên: Khả Như, Quang Tuấn, Doãn Quốc Đam, Vân Dung.
              </p>

              <p className="mt-10">
                <Link href={getCanonicalUrl(baseUrl, locale, '/film-reviews')} className="text-[#c41e3a] dark:text-amber-400 hover:underline font-medium">Review phim</Link>
              </p>
            </>
          )}

          <p className="mt-10 text-[#6b6b6b] dark:text-slate-400 text-sm">
            {isEn ? 'Nguồn: VnExpress, Tiin' : 'Nguồn: VnExpress, Tiin'}
          </p>
        </div>
      </article>
      <div className="mt-12 md:mt-16 pb-8">
        <FeaturedArticles excludeHref="/news/phim-tai-quy-nhap-trang-2-thang-3-2026" titleVariant="related" locale={locale} />
      </div>
    </div>
  );
}
