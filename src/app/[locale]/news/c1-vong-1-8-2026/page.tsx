import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb } from '@/components/breadcrumb';
import { FeaturedArticles } from '../featured-articles';
import { getCanonicalUrl, LOCALES, isValidLocale, type Locale } from '@/lib/i18n/config';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanthdev.com';
const SLUG = 'c1-vong-1-8-2026';

function getPageUrl(locale: Locale) {
  return getCanonicalUrl(baseUrl, locale, `/news/${SLUG}`);
}

const OG_IMAGE =
  'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/UEFA_Champions_League_logo_2.svg/1200px-UEFA_Champions_League_logo_2.svg.png';

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
    ? 'Champions League Round of 16 2026 - Man City vs Real Madrid, Chelsea vs PSG'
    : 'C1 vòng 1/8 2026 - Man City gặp Real Madrid, Chelsea vs PSG';
  const description = isEn
    ? 'UEFA Champions League 2025/26 Round of 16 draw: Man City vs Real Madrid, Chelsea vs PSG, Arsenal vs Bayer Leverkusen. First legs 10-11 March, second legs 17-18 March.'
    : 'Bốc thăm C1 vòng 1/8 2025/26: Man City vs Real Madrid, Chelsea vs PSG, Arsenal vs Bayer Leverkusen. Lượt đi 10-11/3, lượt về 17-18/3.';

  return {
    title: isEn
      ? 'Champions League vòng 1/8 2026 - Lịch đấu, kết quả bốc thăm'
      : 'C1 vòng 1/8 2026 - Lịch đấu, kết quả bốc thăm Man City Real Madrid',
    description,
    keywords: isEn
      ? [
          'Champions League',
          'C1 2026',
          'Man City Real Madrid',
          'Chelsea PSG',
          'Arsenal Bayer Leverkusen',
          'UEFA Champions League Round of 16',
        ]
      : [
          'C1 vòng 1/8',
          'Champions League 2026',
          'Man City Real Madrid',
          'Chelsea PSG',
          'kết quả bốc thăm C1',
          'lịch đấu C1',
        ],
    openGraph: { title, description, url: pageUrl, siteName: 'vanthdev.com', type: 'article', locale: locale === 'vi' ? 'vi_VN' : 'en_US', images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Champions League' }] },
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
    headline: isEn ? 'Champions League Round of 16 2026 Draw' : 'C1 vòng 1/8 2026 - Kết quả bốc thăm',
    description: isEn ? 'Man City vs Real Madrid, Chelsea vs PSG in Champions League last 16.' : 'Man City vs Real Madrid, Chelsea vs PSG tại vòng 1/8 C1.',
    url: pageUrl,
    image: OG_IMAGE,
    datePublished: '2026-02-27',
    dateModified: '2026-03-01',
    author: { '@type': 'Organization', name: 'vanthdev.com' },
    publisher: { '@type': 'Organization', name: 'vanthdev.com', url: baseUrl },
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
  };
}

const BREADCRUMB_ITEMS_VI = [
  { href: '/', label: 'Trang chủ' },
  { href: '/news', label: 'Tin tức' },
  { label: 'C1 vòng 1/8 2026' },
];

const BREADCRUMB_ITEMS_EN = [
  { href: '/', label: 'Home' },
  { href: '/news', label: 'News' },
  { label: 'Champions League R16 2026' },
];

export default function C1Vong18Page({ params }: { params: { locale: string } }) {
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
            ⚽ Bóng đá
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] dark:text-white/95 tracking-tight leading-tight">
            {isEn ? 'Champions League vòng 1/8 2026 - Man City vs Real Madrid' : 'C1 vòng 1/8 2026 - Man City gặp Real Madrid, Chelsea vs PSG'}
          </h1>
          <p className="mt-4 text-[#6b6b6b] dark:text-slate-400 text-base md:text-lg">
            {isEn ? 'Bốc thăm 27/2/2026 • Lượt đi 10-11/3 • Chung kết Budapest 30/5' : 'Bốc thăm 27/2/2026 • Lượt đi 10-11/3 • Chung kết Budapest 30/5'}
          </p>

          <figure className="mt-8 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-[#1a1a2e] p-8">
            <Image src={OG_IMAGE} alt="UEFA Champions League" width={1200} height={400} className="w-full h-auto object-contain" priority />
          </figure>
        </header>

        <div className="space-y-6 text-[#1a1a1a] dark:text-slate-300 leading-relaxed">
          {isEn ? (
            <>
              <p className="text-lg leading-relaxed">
                The <strong>UEFA Champions League 2025/26</strong> Round of 16 draw was held on <strong>27 February 2026</strong>, producing several heavyweight clashes. <strong>Manchester City</strong> will face <strong>Real Madrid</strong> for the fourth (or fifth) consecutive season in knockout competition, while <strong>Chelsea</strong> meet <strong>PSG</strong> in a rematch of last year&apos;s Club World Cup final.
              </p>

              <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">Round of 16 pairings</h2>
              <ul className="space-y-2 list-disc pl-6">
                <li><strong>Man City vs Real Madrid</strong></li>
                <li><strong>Chelsea vs PSG</strong></li>
                <li><strong>Arsenal vs Bayer Leverkusen</strong></li>
                <li><strong>Newcastle vs Barcelona</strong></li>
                <li><strong>Tottenham vs Atletico Madrid</strong></li>
                <li><strong>Liverpool vs Galatasaray</strong></li>
              </ul>

              <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">Schedule</h2>
              <p>First legs: <strong>10-11 March 2026</strong>. Second legs: <strong>17-18 March 2026</strong>. The final will be held at the <strong>Puskas Arena, Budapest</strong> on <strong>30 May 2026</strong>.</p>

              <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">Title odds</h2>
              <p>Arsenal (league phase winners) are favourites with ~27% chance. Bayern Munich (~14%) and Liverpool (~13%) follow.</p>

              <p className="mt-10">
                <Link href={getCanonicalUrl(baseUrl, locale, '/champions-league')} className="text-[#c41e3a] dark:text-amber-400 hover:underline font-medium">
                  {isEn ? 'Xem lịch C1 đầy đủ' : 'Xem lịch C1 đầy đủ'}
                </Link>
              </p>
            </>
          ) : (
            <>
              <p className="text-lg leading-relaxed">
                Lễ <strong>bốc thăm vòng 1/8 Champions League 2025/26</strong> diễn ra ngày <strong>27/2/2026</strong>, tạo nên nhiều cặp đấu đỉnh cao. <strong>Manchester City</strong> sẽ gặp <strong>Real Madrid</strong> mùa thứ tư (hoặc năm) liên tiếp tại vòng knock-out, trong khi <strong>Chelsea</strong> đối đầu <strong>PSG</strong> – tái diễn trận chung kết Club World Cup năm ngoái mà Chelsea thắng 3-0.
              </p>

              <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">Các cặp đấu vòng 1/8</h2>
              <ul className="space-y-2 list-disc pl-6">
                <li><strong>Man City vs Real Madrid</strong></li>
                <li><strong>Chelsea vs PSG</strong></li>
                <li><strong>Arsenal vs Bayer Leverkusen</strong></li>
                <li><strong>Newcastle vs Barcelona</strong></li>
                <li><strong>Tottenham vs Atletico Madrid</strong></li>
                <li><strong>Liverpool vs Galatasaray</strong></li>
              </ul>

              <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">Lịch đấu</h2>
              <p>Lượt đi: <strong>10-11/3/2026</strong>. Lượt về: <strong>17-18/3/2026</strong>. Chung kết tại <strong>Puskas Arena, Budapest</strong> ngày <strong>30/5/2026</strong>.</p>

              <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">Tỷ lệ vô địch</h2>
              <p>Arsenal (nhất bảng league phase) được đánh giá cao nhất ~27%. Bayern Munich (~14%) và Liverpool (~13%) theo sau.</p>

              <p className="mt-10">
                <Link href={getCanonicalUrl(baseUrl, locale, '/champions-league')} className="text-[#c41e3a] dark:text-amber-400 hover:underline font-medium">
                  Xem lịch C1 đầy đủ
                </Link>
              </p>
            </>
          )}

          <p className="mt-10 text-[#6b6b6b] dark:text-slate-400 text-sm">
            {isEn ? 'Nguồn: UEFA, BBC Sport, Marca, Al Jazeera' : 'Nguồn: UEFA, BBC Sport, Marca, Al Jazeera'}
          </p>
        </div>
      </article>
      <div className="mt-12 md:mt-16 pb-8">
        <FeaturedArticles excludeHref="/news/c1-vong-1-8-2026" titleVariant="related" locale={locale} />
      </div>
    </div>
  );
}
