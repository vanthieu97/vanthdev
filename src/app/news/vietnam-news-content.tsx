import { fetchVietnamNews } from '@/lib/news';
import { Breadcrumb } from '@/components/breadcrumb';
import { FeaturedArticles } from './featured-articles';
import NewsList from './news-list';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanthdev.com';

function getTodayFormatted(): string {
  return new Date().toLocaleDateString('vi-VN', {
    timeZone: 'Asia/Ho_Chi_Minh',
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export async function VietnamNewsContent(props: { embedded?: boolean }) {
  const { embedded = false } = props ?? {};
  let data: Awaited<ReturnType<typeof fetchVietnamNews>> | null = null;
  let apiError: string | null = null;

  try {
    data = await fetchVietnamNews();
  } catch (err) {
    apiError = err instanceof Error ? err.message : 'Failed to load news';
  }

  const articles = data?.results ?? [];
  const nextPage = data?.nextPage ?? null;
  const totalResults = data?.totalResults ?? articles.length;

  const jsonLd = apiError
    ? null
    : {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Tin tức Việt Nam - Tin nổi bật',
        description: 'Tin tức Việt Nam mới nhất, tin nổi bật trong ngày.',
        numberOfItems: totalResults,
        itemListElement: articles.slice(0, 10).map(
          (
            article: {
              article_id: string;
              link: string;
              title: string;
              description?: string;
              image_url?: string | null;
              pubDate: string;
              creator?: string[] | null;
              source_name: string;
            },
            index: number
          ) => ({
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
          })
        ),
      };

  return (
    <div className={`bg-[#faf8f5] dark:bg-[#0a0f1a] ${embedded ? '' : 'min-h-screen'}`}>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <div
        className={
          embedded
            ? 'pt-4 md:pt-6 pb-8 md:pb-12'
            : 'pt-8 md:pt-12 pb-12 md:pb-16'
        }
      >
        {!embedded && (
          <div className="max-w-6xl mx-auto px-4 md:px-6 mb-6">
            <Breadcrumb
              items={[{ href: '/', label: 'Trang chủ' }, { label: 'Tin tức Việt Nam' }]}
              currentPageUrl={`${BASE_URL}/news`}
            />
          </div>
        )}
        <FeaturedArticles embedded={embedded} />

        <section
          className={embedded ? 'mt-6 md:mt-8' : 'mt-12 md:mt-16'}
          aria-label="Tin tức từ API"
        >
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className={embedded ? 'mb-6 md:mb-8' : 'mb-10 md:mb-12'}>
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c41e3a] text-white text-sm font-semibold ${embedded ? 'mb-3' : 'mb-4'}`}
              >
                <span>📅</span>
                <span>Hôm nay — {getTodayFormatted()}</span>
              </div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="inline-block w-1 h-8 bg-[#c41e3a] rounded-full" aria-hidden />
                {embedded ? (
                  <h2 className="text-xl md:text-2xl font-bold text-[#1a1a1a] dark:text-white/95 tracking-tight">
                    Tin tức Việt Nam
                  </h2>
                ) : (
                  <h1 className="text-xl md:text-2xl font-bold text-[#1a1a1a] dark:text-white/95 tracking-tight">
                    Tin tức Việt Nam
                  </h1>
                )}
              </div>
              <p className="text-[#6b6b6b] dark:text-slate-400 text-sm md:text-base ml-4">
                Tin nổi bật
                {!apiError && ` · ${totalResults} bài viết`}
              </p>
            </div>

            {apiError ? (
              <div className="py-12 px-4 text-center rounded-2xl bg-white/50 dark:bg-[#1a1a2e]/30 border border-[#eee] dark:border-[#4a4a5a]/60">
                <p className="text-red-600 dark:text-red-400 font-medium">{apiError}</p>
                <p className="mt-2 text-sm text-[#6b6b6b] dark:text-slate-400">
                  Các bài viết nổi bật phía trên vẫn hiển thị bình thường.
                </p>
              </div>
            ) : (
              <NewsList
                initialArticles={articles}
                initialNextPage={nextPage}
                embedded={embedded}
              />
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
