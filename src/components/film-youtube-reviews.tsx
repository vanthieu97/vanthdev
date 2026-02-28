type YouTubeReview = {
  youtubeId: string;
  title: string;
  channel?: string;
};

type FilmYoutubeReviewsProps = {
  reviews: readonly YouTubeReview[];
  filmTitle: string;
};

export function FilmYoutubeReviews({ reviews, filmTitle }: FilmYoutubeReviewsProps) {
  if (!reviews.length) return null;

  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold mb-4 text-[#1a1a1a] dark:text-white/95">
        Review từ YouTube – Tham khảo thêm
      </h2>
      <p className="text-[#6b6b6b] dark:text-slate-400 text-sm mb-6">
        Các video review phim {filmTitle} từ cộng đồng để bạn tham khảo thêm góc nhìn trước khi xem.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map(({ youtubeId, title, channel }) => (
          <div
            key={youtubeId}
            className="rounded-xl overflow-hidden bg-white/50 dark:bg-white/5 border border-[#eee] dark:border-white/10"
          >
            <div className="aspect-video bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="p-3">
              <p className="font-medium text-[#1a1a1a] dark:text-white/95 text-sm line-clamp-2">
                {title}
              </p>
              {channel && (
                <p className="text-xs text-[#6b6b6b] dark:text-slate-400 mt-0.5">{channel}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
