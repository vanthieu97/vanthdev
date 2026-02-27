'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { trackArticleClick, trackLoadMoreClick } from '@/lib/ga';

const TZ_VIETNAM = 'Asia/Ho_Chi_Minh';

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('vi-VN', {
      timeZone: TZ_VIETNAM,
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return dateStr;
  }
}

function isToday(dateStr: string): boolean {
  try {
    const d = new Date(dateStr);
    const dLocal = new Date(d.toLocaleString('en-US', { timeZone: TZ_VIETNAM }));
    const today = new Date(new Date().toLocaleString('en-US', { timeZone: TZ_VIETNAM }));
    return (
      dLocal.getDate() === today.getDate() &&
      dLocal.getMonth() === today.getMonth() &&
      dLocal.getFullYear() === today.getFullYear()
    );
  } catch {
    return false;
  }
}

type NewsArticle = {
  article_id: string;
  link: string;
  title: string;
  description: string;
  image_url: string | null;
  source_name: string;
  pubDate: string;
  creator: string[] | null;
};

type Props = {
  initialArticles: NewsArticle[];
  initialNextPage: string | null;
};

function ArticleCard({ article }: { article: NewsArticle }) {
  return (
    <Link
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackArticleClick(article.article_id, article.title, article.source_name)
      }
      className="group bg-white rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06)] border border-[#eee] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] hover:border-[#e0e0e0] hover:-translate-y-1 flex flex-col text-left focus:outline-none focus:ring-2 focus:ring-[#c41e3a] focus:ring-offset-2 focus:ring-offset-[#faf8f5]"
      aria-label={`Đọc bài: ${article.title}`}
    >
      <div className="aspect-[16/10] overflow-hidden bg-[#e8e6e3]">
        {article.image_url ? (
          <img
            src={article.image_url}
            alt=""
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#e0ddda] to-[#d4d1cd] flex items-center justify-center">
            <span className="text-[#999] text-4xl">📰</span>
          </div>
        )}
      </div>
      <div className="p-5 md:p-6 flex-1 flex flex-col">
        <h2 className="text-[1.0625rem] font-semibold text-[#1a1a1a] mb-2 leading-[1.4] line-clamp-2 group-hover:text-[#c41e3a] transition-colors">
          {article.title}
        </h2>
        {article.description && (
          <p className="text-[#5c5c5c] text-[0.9375rem] leading-[1.55] mb-4 line-clamp-2">
            {article.description}
          </p>
        )}
        <div className="flex justify-between items-center gap-3 mt-auto pt-3 border-t border-[#f0f0f0]">
          <span className="text-xs font-medium text-[#c41e3a] uppercase tracking-wide">
            {article.source_name}
          </span>
          <span
            className={`text-xs tabular-nums ${
              isToday(article.pubDate)
                ? 'font-semibold text-[#c41e3a] bg-[#fff0f2] px-2 py-0.5 rounded'
                : 'text-[#8a8a8a]'
            }`}
          >
            {isToday(article.pubDate) ? '● ' : ''}
            {formatDate(article.pubDate)}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function NewsList({ initialArticles, initialNextPage }: Props) {
  const [articles, setArticles] = useState<NewsArticle[]>(initialArticles);
  const [nextPage, setNextPage] = useState<string | null>(initialNextPage);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const nextPageRef = useRef(initialNextPage);
  const loadingRef = useRef(false);

  nextPageRef.current = nextPage;

  const handleLoadMore = () => {
    const pageToFetch = nextPageRef.current;
    if (!pageToFetch || loadingRef.current) return;
    trackLoadMoreClick();
    loadingRef.current = true;
    setLoading(true);
    setError(null);
    fetch(`/api/news?page=${encodeURIComponent(pageToFetch)}`)
      .then((res) => res.json().then((data) => ({ ok: res.ok, data })))
      .then(({ ok, data }) => {
        if (!ok) throw new Error(data?.error ?? 'Failed to load');
        const newArticles = data?.results ?? [];
        const next = data?.nextPage ?? data?.next_page ?? null;
        setArticles((prev) => [...prev, ...newArticles]);
        setNextPage(next);
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : 'Không thể tải thêm');
        console.error('Load more error:', err);
      })
      .finally(() => {
        loadingRef.current = false;
        setLoading(false);
      });
  };

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </div>
      {nextPage && (
        <div className="py-8 flex flex-col items-center justify-center gap-2">
          {error && <p className="text-red-600 text-sm">{error}</p>}
          {loading ? (
            <p className="text-[#8a8a8a] text-sm">Đang tải thêm...</p>
          ) : (
            <button
              type="button"
              onClick={handleLoadMore}
              className="px-4 py-2 text-sm font-medium text-[#c41e3a] border border-[#c41e3a] rounded-lg hover:bg-[#fff0f2] transition-colors disabled:opacity-50"
            >
              Tải thêm tin
            </button>
          )}
        </div>
      )}
    </>
  );
}
