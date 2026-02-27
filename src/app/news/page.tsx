import Link from 'next/link';
import { fetchVietnamNews } from '@/lib/news';
import NewsList from './NewsList';

export const dynamic = 'force-dynamic';
export const revalidate = 300;

function getTodayFormatted(): string {
  return new Date().toLocaleDateString('vi-VN', {
    timeZone: 'Asia/Ho_Chi_Minh',
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default async function VietnamNewsPage() {
  let data;
  let error: string | null = null;

  try {
    data = await fetchVietnamNews();
  } catch (err) {
    error = err instanceof Error ? err.message : 'Failed to load news';
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#faf8f5] p-6 md:p-8">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#1a1a1a] tracking-tight">Tin tức Việt Nam</h1>
        </header>
        <div className="text-center py-16 px-4">
          <p className="text-red-600 font-medium">{error}</p>
        </div>
      </div>
    );
  }

  const articles = data?.results ?? [];
  const nextPage = data?.nextPage ?? null;
  const totalResults = data?.totalResults ?? articles.length;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Tin tức Việt Nam - Tin nổi bật',
    description: 'Tin tức Việt Nam mới nhất, tin nổi bật trong ngày.',
    numberOfItems: totalResults,
    itemListElement: articles.slice(0, 10).map((article, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'NewsArticle',
        headline: article.title,
        description: article.description ?? undefined,
        url: article.link,
        image: article.image_url ?? undefined,
        datePublished: article.pubDate,
        author: article.creator?.[0]
          ? { '@type': 'Person', name: article.creator[0] }
          : { '@type': 'Organization', name: article.source_name },
        publisher: {
          '@type': 'Organization',
          name: article.source_name,
        },
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12">
        <header className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c41e3a] text-white text-sm font-semibold mb-4">
            <span>📅</span>
            <span>Hôm nay — {getTodayFormatted()}</span>
          </div>
          <div className="flex items-baseline gap-3 mb-2">
            <span className="inline-block w-1 h-8 bg-[#c41e3a] rounded-full" />
            <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] tracking-tight">
              Tin tức Việt Nam
            </h1>
          </div>
          <p className="text-[#6b6b6b] text-sm md:text-base ml-4">
            Tin nổi bật · {data?.totalResults ?? 0} bài viết
          </p>
        </header>

        <main>
          <NewsList initialArticles={articles} initialNextPage={nextPage} />
        </main>

        <footer className="mt-20 pt-12 pb-6 border-t border-[#e8e6e3]">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/champions-league"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 shadow-[0_1px_3px_rgba(0,0,0,0.06)] border border-[#eee] text-[#1a1a1a] font-medium text-sm no-underline hover:border-[#1a237e]/30 hover:text-[#1a237e] transition-all duration-300"
              >
                ⚽ C1 Champions League
              </Link>
              <Link
                href="https://vanthdev.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 shadow-[0_1px_3px_rgba(0,0,0,0.06)] border border-[#eee] text-[#1a1a1a] font-semibold text-sm no-underline hover:border-[#c41e3a]/30 hover:text-[#c41e3a] hover:shadow-[0_4px_12px_rgba(196,30,58,0.08)] transition-all duration-300"
              >
                <span className="text-base">✦</span>
                vanthdev.com
              </Link>
            </div>
            <p className="text-[#999] text-xs tracking-wide">Tin tức được cập nhật liên tục</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
