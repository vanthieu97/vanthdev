import type { Metadata } from 'next';
import Link from 'next/link';
import { FilmPoster } from '@/components/film-poster';
import { FilmYoutubeReviews } from '@/components/film-youtube-reviews';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanthdev.com';
const pageUrl = `${baseUrl}/film-reviews/mui-pho`;
const TRAILER_YOUTUBE_ID = '7L5qkIkkcY8';
const POSTER_URL =
  'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/7/0/700x1000-mp.jpg';

const YOUTUBE_REVIEWS: { youtubeId: string; title: string; channel?: string }[] = [];

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Review phim Mùi phở - Hơi ấm gia đình trong tô phở đầu năm',
  description:
    'Review phim Mùi phở của đạo diễn Minh Beta. Phim gia đình hài với Xuân Hinh, Thu Trang. Ông Mùi truyền nghề phở cho cháu, xung đột thế hệ. Khởi chiếu 17/2/2026.',
  keywords: [
    'review phim Mùi phở',
    'phim Minh Beta',
    'phim Tết 2026',
    'phim Xuân Hinh',
    'phim Thu Trang',
  ],
  openGraph: {
    title: 'Review phim Mùi phở - Hơi ấm gia đình trong tô phở đầu năm',
    description:
      'Review phim Mùi phở – phim điện ảnh đầu tay của Minh Beta. Câu chuyện gia đình xoay quanh món phở.',
    url: pageUrl,
    siteName: 'vanthdev.com',
    type: 'article',
    locale: 'vi_VN',
    images: [{ url: POSTER_URL, width: 700, height: 1000, alt: 'Mùi phở' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Review phim Mùi phở',
    description: 'Phim gia đình của Minh Beta – hơi ấm tình thân trong tô phở.',
  },
  alternates: {
    canonical: pageUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const movieJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Movie',
  name: 'Mùi phở',
  alternateName: 'The Scent Of Phở',
  description:
    'Phim chính kịch – hài của Minh Beta. Xoay quanh ông Mùi – nghệ nhân phở gia truyền, xung đột thế hệ khi truyền nghề cho cháu.',
  image: POSTER_URL,
  genre: ['Chính kịch', 'Hài', 'Gia đình'],
  director: { '@type': 'Person', name: 'Minh Beta' },
  datePublished: '2026-02-17',
  inLanguage: 'vi',
  countryOfOrigin: { '@type': 'Country', name: 'Vietnam' },
};

const reviewJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: { '@type': 'Movie', name: 'Mùi phở' },
  reviewBody:
    'Review phim Mùi phở – phim điện ảnh đầu tay của Minh Beta. Câu chuyện gia đình ấm áp lấy phở làm biểu tượng văn hóa Việt, khám phá xung đột thế hệ và va chạm Bắc – Nam.',
  author: { '@type': 'Organization', name: 'vanthdev.com' },
  publisher: { '@type': 'Organization', name: 'vanthdev.com', url: baseUrl },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Review phim', item: `${baseUrl}/film-reviews` },
    { '@type': 'ListItem', position: 3, name: 'Mùi phở', item: pageUrl },
  ],
};

export default function MuiPhoPage() {
  return (
    <div className="bg-[#faf8f5] dark:bg-[#0a0f1a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(movieJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <article className="max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-[#6b6b6b] dark:text-slate-400">
            <li>
              <Link href="/" className="hover:text-[#c41e3a] dark:hover:text-amber-400 transition-colors">
                Trang chủ
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link
                href="/film-reviews"
                className="hover:text-[#c41e3a] dark:hover:text-amber-400 transition-colors"
              >
                Review phim
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-[#1a1a1a] dark:text-white/95">Mùi phở</li>
          </ol>
        </nav>

        <header className="mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c41e3a]/10 dark:bg-[#c41e3a]/20 text-[#c41e3a] dark:text-amber-400 text-sm font-semibold mb-4">
            🎬 Review phim
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] dark:text-white/95 tracking-tight leading-tight">
            Review phim Mùi phở – Hơi ấm gia đình trong tô phở đầu năm
          </h1>
          <p className="mt-4 text-[#6b6b6b] dark:text-slate-400 text-base md:text-lg">
            Đạo diễn Minh Beta • Thể loại: Chính kịch, Hài, Gia đình • Khởi chiếu 17/2/2026 (mùng 1 Tết)
          </p>

          <div className="mt-8 flex flex-col md:flex-row gap-6">
            <div className="relative w-full md:w-64 h-96 md:h-80 shrink-0 rounded-xl overflow-hidden bg-[#eee] dark:bg-[#333] shadow-lg">
              <FilmPoster
                youtubeId={TRAILER_YOUTUBE_ID}
                posterUrl={POSTER_URL}
                alt="Poster phim Mùi phở"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-semibold text-[#1a1a1a] dark:text-white/95 mb-3">
                Trailer chính thức
              </h2>
              <div className="aspect-video rounded-xl overflow-hidden bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${TRAILER_YOUTUBE_ID}?rel=0`}
                  title="Trailer phim Mùi phở"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="space-y-6 text-[#1a1a1a] dark:text-slate-300 leading-relaxed">
          <p className="text-lg leading-relaxed">
            <strong>&quot;Mùi phở&quot;</strong> (The Scent Of Phở) là phim điện ảnh Tết đầu tay của đạo diễn{' '}
            <strong>Minh Beta</strong>. Phim xoay quanh gia đình đa thế hệ của ông Mùi – nghệ nhân phở gia truyền,
            với sự tham gia của nghệ sĩ <strong>Xuân Hinh</strong> (lần đầu đóng phim điện ảnh) và{' '}
            <strong>Thu Trang</strong>. Phở được dùng làm biểu tượng văn hóa Việt kết nối ký ức gia đình. Phim
            nhận mức độ hài lòng 81% từ khán giả sau buổi công chiếu ra mắt (Moveek).
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            Cốt truyện
          </h2>
          <p>
            Ông Mùi (Xuân Hinh) – chủ quán phở bò gia truyền có tiếng ở miền Bắc – canh cánh tìm người kế nghiệp
            nhưng gặp khó khăn: con trai theo đuổi hội họa, con rể bị coi là người ngoài, cháu nội Sá Sùng (Bảo Nam)
            mới 8 tuổi. Ông muốn truyền công thức phở cho cháu, nhưng con dâu <strong>Trinh</strong> (Thu Trang)
            kiên quyết phản đối vì không muốn con bị áp đặt tương lai. Theo Harper&apos;s Bazaar và SaoStar, cuộc
            xung đột giữa bố chồng miền Bắc và con dâu miền Nam phản ánh xung đột giữa truyền thống và hiện đại.
            Phim khám phá va chạm văn hóa Bắc – Nam và hành trình tìm lại sự ấm áp của tình thân qua những tình
            tiết hài hước, dí dỏm.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            Điểm sáng
          </h2>
          <p>
            Xuân Hinh mang đến ông Mùi vừa khó tính bảo thủ vừa đáng thương, lối diễn mang màu sắc dân gian quen
            thuộc. Sự tung hứng giữa Xuân Hinh và Thu Trang tạo nhiều phân đoạn sinh động. Phở không chỉ là món
            ăn mà là ký ức, biểu tượng truyền thống và văn hóa Việt – các cảnh nấu phở được dàn dựng kỹ lưỡng,
            ê-kíp quay tại Nam Định và tham vấn nghệ nhân phở để đảm bảo tính chân thực. Phim đậm không khí miền
            Bắc với lễ hội phở, chầu văn, hát xẩm; bảng màu đỏ-vàng-xanh gợi không khí xuân Tết. Thông điệp nhẹ
            nhàng về sự lắng nghe, thấu hiểu gia đình; mâu thuẫn được xử lý tiết chế, hướng tới hàn gắn.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            Dàn diễn viên
          </h2>
          <p>
            Xuân Hinh (ông Mùi), Thu Trang (Trinh), Thanh Thanh Hiền (bà Tuất), Quốc Tuấn (ông Dần), Hà Hương
            (Mai), Thanh Hương (Kiều), Tiến Lộc (Mẫn), Bảo Nam (Sá Sùng), BB Trần, Hải Triều.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            Âm nhạc
          </h2>
          <p>
            Ca khúc chủ đề &quot;Lão ông cưới vợ&quot; do Minh Beta sáng tác, thể hiện bởi Xuân Hinh, Hòa Minzy và
            Tuấn Cry. Phần hòa âm do Masew đảm nhiệm. Âm nhạc kết hợp nhạc dân gian và hiện đại.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            Hạn chế và đánh giá
          </h2>
          <p>
            Một số mảng miếng hài lặp lại, khiến nhịp phim ở một số đoạn trở nên ồn ào. Một số tuyến nhân vật phụ
            chưa được khai thác sâu. Cách kể an toàn, có thể chưa tạo cao trào mạnh với khán giả kỳ vọng một cú
            bứt phá. Lối xử lý và hài đặc trưng miền Bắc có thể kén người xem. Nhìn chung, Mùi phở là bộ phim gia
            đình ấm áp, phù hợp dịp Tết, thành công trong việc truyền tải thông điệp về truyền thống và giá trị
            gia đình.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            Thông tin phim
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Tên phim:</strong> Mùi phở (The Scent Of Phở)</li>
            <li><strong>Đạo diễn:</strong> Minh Beta</li>
            <li><strong>Thể loại:</strong> Chính kịch, Hài, Gia đình</li>
            <li><strong>Thời lượng:</strong> 111 phút</li>
            <li><strong>Khởi chiếu:</strong> 17/2/2026 (mùng 1 Tết Bính Ngọ)</li>
            <li><strong>Phân loại:</strong> K</li>
            <li><strong>Phát hành:</strong> Lotte Entertainment, Beta Group</li>
          </ul>

          <FilmYoutubeReviews reviews={YOUTUBE_REVIEWS} filmTitle="Mùi phở" />

          <p className="mt-10 text-[#6b6b6b] dark:text-slate-400 text-sm">
            Nguồn tham khảo: Wikipedia, Moveek, Khen Phim, Harper&apos;s Bazaar, SaoStar, Vietnam.vn, VnExpress
          </p>
        </div>
      </article>
    </div>
  );
}
