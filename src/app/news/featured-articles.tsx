import Link from 'next/link';

const FEATURED_ARTICLES = [
  {
    href: '/news/israel-tan-cong-iran',
    title: 'Israel tấn công Iran',
    desc: 'Khamenei thiệt mạng, Mỹ-Israel không kích Iran 28/2, đợt tấn công mới 1/3/2026',
    tag: 'Thế giới',
    icon: '🔥',
  },
  {
    href: '/news/luat-ai-viet-nam-2026',
    title: 'Luật AI Việt Nam 2026',
    desc: 'Luật Trí tuệ nhân tạo có hiệu lực 1/3/2026: 8 chương, 35 điều, phân loại rủi ro',
    tag: 'Công nghệ',
    icon: '🤖',
  },
  {
    href: '/news/blackpink-100-trieu-subscribers',
    title: 'BLACKPINK 100 triệu subscribers',
    desc: 'Kỷ lục lịch sử YouTube, Red Diamond Award, album DEADLINE 27/2/2026',
    tag: 'Giải trí',
    icon: '🎵',
  },
  {
    href: '/news/iphone-18-pro-max',
    title: 'iPhone 18 Pro Max',
    desc: 'Chip A20 Pro 2nm, camera 48MP, màn hình 6.9 inch, Face ID ẩn dưới màn hình',
    tag: 'Công nghệ',
    icon: '📱',
  },
] as const;

export function FeaturedArticles({ embedded }: { embedded?: boolean }) {
  return (
    <section aria-label="Bài viết nổi bật">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div
          className={`flex items-baseline gap-3 ${embedded ? 'mb-4' : 'mb-6'}`}
        >
          <span className="inline-block w-1 h-6 bg-[#c41e3a] rounded-full" aria-hidden />
          <h2 className="text-xl md:text-2xl font-bold text-[#1a1a1a] dark:text-white/95 tracking-tight">
            Bài viết nổi bật
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {FEATURED_ARTICLES.map(({ href, title, desc, tag, icon }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col p-3 md:p-4 rounded-xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] border border-[#eee] dark:bg-[#2d2d3d]/90 dark:border-[#4a4a5a]/60 dark:shadow-lg dark:shadow-black/20 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-[#e0e0e0] dark:hover:border-[#5a5a6a] dark:hover:bg-[#333344]/95 hover:-translate-y-0.5 text-left focus:outline-none focus:ring-2 focus:ring-[#c41e3a] focus:ring-offset-2 focus:ring-offset-[#faf8f5] dark:focus:ring-offset-[#0a0f1a] cursor-pointer"
              aria-label={`Đọc bài: ${title}`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xl" aria-hidden>
                  {icon}
                </span>
                <span className="text-xs font-semibold text-[#c41e3a] dark:text-amber-400 uppercase tracking-wide">
                  {tag}
                </span>
              </div>
              <h3 className="font-semibold text-[#1a1a1a] dark:text-white/95 text-base leading-tight line-clamp-2 group-hover:text-[#c41e3a] dark:group-hover:text-amber-400 transition-colors">
                {title}
              </h3>
              <p className="text-[#6b6b6b] dark:text-slate-400 text-sm leading-snug line-clamp-1 mt-1">
                {desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
