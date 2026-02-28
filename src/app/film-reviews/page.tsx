import type { Metadata } from 'next';
import Link from 'next/link';
import { FilmPoster } from '@/components/film-poster';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanthdev.com';
const pageUrl = `${baseUrl}/film-reviews`;

const REVIEWS = [
  {
    slug: 'thank-you-for-staying-awake-with-me',
    title: 'Cảm ơn người đã thức cùng tôi',
    desc: 'Khúc ca điện ảnh ấm áp tình thân - Đạo diễn Chung Chí Công',
    director: 'Chung Chí Công',
    releaseDate: '27/2/2026',
    youtubeId: 'uf2oOeJ-Z3s',
  },
] as const;

export const metadata: Metadata = {
  title: 'Review phim - Đánh giá phim điện ảnh Việt Nam',
  description:
    'Tổng hợp review phim điện ảnh Việt Nam. Đánh giá, cảm nhận phim mới từ các đạo diễn nổi bật.',
  keywords: ['review phim', 'đánh giá phim', 'phim Việt Nam', 'phim điện ảnh'],
  openGraph: {
    title: 'Review phim - Đánh giá phim điện ảnh Việt Nam',
    description: 'Tổng hợp review phim điện ảnh Việt Nam. Đánh giá, cảm nhận phim mới.',
    url: pageUrl,
    siteName: 'vanthdev.com',
    type: 'website',
    locale: 'vi_VN',
  },
  alternates: {
    canonical: pageUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Review phim', item: pageUrl },
  ],
};

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Review phim điện ảnh Việt Nam',
  description: 'Tổng hợp review phim điện ảnh Việt Nam.',
  numberOfItems: REVIEWS.length,
  itemListElement: REVIEWS.map((r, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Article',
      name: `Review phim ${r.title}`,
      url: `${pageUrl}/${r.slug}`,
      image: `https://img.youtube.com/vi/${r.youtubeId}/hqdefault.jpg`,
    },
  })),
};

export default function FilmReviewsPage() {
  return (
    <div className="bg-[#faf8f5] dark:bg-[#0a0f1a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <div className="max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-[#6b6b6b] dark:text-slate-400">
            <li>
              <Link
                href="/"
                className="hover:text-[#c41e3a] dark:hover:text-amber-400 transition-colors"
              >
                Trang chủ
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-[#1a1a1a] dark:text-white/95">Review phim</li>
          </ol>
        </nav>

        <header className="mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c41e3a]/10 dark:bg-[#c41e3a]/20 text-[#c41e3a] dark:text-amber-400 text-sm font-semibold mb-4">
            🎬 Review phim
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] dark:text-white/95 tracking-tight">
            Review phim
          </h1>
          <p className="mt-4 text-[#6b6b6b] dark:text-slate-400 text-base md:text-lg">
            Tổng hợp đánh giá phim điện ảnh Việt Nam
          </p>
        </header>

        <ul className="space-y-4" role="list">
          {REVIEWS.map(({ slug, title, desc, director, releaseDate, youtubeId }) => (
            <li key={slug}>
              <Link
                href={`/film-reviews/${slug}`}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 p-5 rounded-2xl
                  bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] border border-[#eee]
                  dark:bg-[#2d2d3d]/90 dark:border-[#4a4a5a]/60
                  hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-[#e0e0e0] hover:-translate-y-0.5
                  dark:hover:border-[#5a5a6a] dark:hover:bg-[#333344]/95
                  transition-all duration-300 text-left"
              >
                <div className="relative w-full sm:w-28 h-40 sm:h-28 shrink-0 rounded-xl overflow-hidden bg-[#eee] dark:bg-[#333]">
                  <FilmPoster
                    youtubeId={youtubeId}
                    alt={`Poster ${title}`}
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 112px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="font-semibold text-[#1a1a1a] dark:text-white/95 text-lg group-hover:text-[#c41e3a] dark:group-hover:text-amber-400 transition-colors">
                    {title}
                  </h2>
                  <p className="text-[#6b6b6b] dark:text-slate-400 text-sm mt-0.5">{desc}</p>
                  <p className="text-[#8a8a8a] dark:text-slate-500 text-xs mt-2">
                    {director} • {releaseDate}
                  </p>
                </div>
                <span className="text-[#c41e3a] dark:text-amber-400 text-sm font-medium shrink-0">
                  Đọc review →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
