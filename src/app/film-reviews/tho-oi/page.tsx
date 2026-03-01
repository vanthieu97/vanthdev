import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { FilmPoster } from '@/components/film-poster';
import { FilmYoutubeReviews } from '@/components/film-youtube-reviews';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanthdev.com';
const pageUrl = `${baseUrl}/film-reviews/tho-oi`;
const TRAILER_YOUTUBE_ID = '3pzgEbvS9ag';
const POSTER_URL = `https://img.youtube.com/vi/${TRAILER_YOUTUBE_ID}/hqdefault.jpg`;

const YOUTUBE_REVIEWS: { youtubeId: string; title: string; channel?: string }[] = [
  // Thêm video review từ YouTube - tìm "review Thỏ ơi Trấn Thành"
];

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Review phim Thỏ ơi - Góc khuất tình yêu qua lăng kính Trấn Thành',
  description:
    'Review phim Thỏ ơi!! của Trấn Thành. Phim tâm lý thriller T18, phơi bày mặt tối của tình yêu và hôn nhân. Văn Mai Hương, Pháo, Lyly, Vĩnh Đam. Khởi chiếu 17/2/2026.',
  keywords: [
    'review phim Thỏ ơi',
    'phim Trấn Thành',
    'phim Tết 2026',
    'Thỏ ơi Bunnie',
    'phim tâm lý 18+',
  ],
  openGraph: {
    title: 'Review phim Thỏ ơi - Góc khuất tình yêu qua lăng kính Trấn Thành',
    description:
      'Review phim Thỏ ơi!! – phim tâm lý thriller T18 của Trấn Thành. Phơi bày mặt tối tình yêu và hôn nhân.',
    url: pageUrl,
    siteName: 'vanthdev.com',
    type: 'article',
    locale: 'vi_VN',
    images: [{ url: POSTER_URL, width: 480, height: 360, alt: 'Thỏ ơi' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Review phim Thỏ ơi',
    description: 'Phim tâm lý thriller T18 của Trấn Thành – góc khuất tình yêu.',
  },
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const movieJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Movie',
  name: 'Thỏ ơi!!',
  alternateName: 'Bunnie!!',
  description:
    'Phim tâm lý – giật gân – chính kịch của Trấn Thành. Phơi bày mặt tối của tình yêu và hôn nhân, lấy cảm hứng từ những câu chuyện có thật.',
  image: POSTER_URL,
  genre: ['Tâm lý', 'Lãng mạn', 'Giật gân', 'Chính kịch'],
  director: { '@type': 'Person', name: 'Trấn Thành' },
  datePublished: '2026-02-17',
  inLanguage: 'vi',
  countryOfOrigin: { '@type': 'Country', name: 'Vietnam' },
};

const reviewJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: { '@type': 'Movie', name: 'Thỏ ơi!!' },
  reviewBody:
    'Review phim Thỏ ơi!! – phim tâm lý thriller T18 của Trấn Thành. Phim khám phá các mối quan hệ độc hại và góc khuất của tình yêu qua cấu trúc phi tuyến tính.',
  author: { '@type': 'Organization', name: 'vanthdev.com' },
  publisher: { '@type': 'Organization', name: 'vanthdev.com', url: baseUrl },
};

const BREADCRUMB_ITEMS = [
  { href: '/', label: 'Trang chủ' },
  { href: '/film-reviews', label: 'Review phim' },
  { label: 'Thỏ ơi' },
];

export default function ThoOiPage() {
  return (
    <div className="bg-[#faf8f5] dark:bg-[#0a0f1a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(movieJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }} />
      <article className="max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12">
        <Breadcrumb items={BREADCRUMB_ITEMS} currentPageUrl={pageUrl} />

        <header className="mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c41e3a]/10 dark:bg-[#c41e3a]/20 text-[#c41e3a] dark:text-amber-400 text-sm font-semibold mb-4">🎬 Review phim</span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] dark:text-white/95 tracking-tight leading-tight">
            Review phim Thỏ ơi!! – Góc khuất tình yêu qua lăng kính Trấn Thành
          </h1>
          <p className="mt-4 text-[#6b6b6b] dark:text-slate-400 text-base md:text-lg">
            Đạo diễn Trấn Thành • Thể loại: Tâm lý, Lãng mạn, Giật gân • Khởi chiếu 17/2/2026 (mùng 1 Tết) • T18
          </p>

          <div className="mt-8 flex flex-col md:flex-row gap-6">
            <div className="relative w-full md:w-64 h-96 md:h-80 shrink-0 rounded-xl overflow-hidden bg-[#eee] dark:bg-[#333] shadow-lg">
              <FilmPoster youtubeId={TRAILER_YOUTUBE_ID} alt="Poster phim Thỏ ơi" className="object-cover" priority />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-semibold text-[#1a1a1a] dark:text-white/95 mb-3">Trailer chính thức</h2>
              <div className="aspect-video rounded-xl overflow-hidden bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${TRAILER_YOUTUBE_ID}?rel=0`}
                  title="Trailer phim Thỏ ơi"
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
            <strong>&quot;Thỏ ơi!!&quot;</strong> (Bunnie!!) là phim điện ảnh Tết 2026 của đạo diễn <strong>Trấn Thành</strong>, thuộc thể loại tâm lý – giật gân với định hướng T18. Phim lấy cảm hứng từ những câu chuyện có thật, phơi bày mặt tối của tình yêu và hôn nhân, nơi những chiếc &quot;mặt nạ&quot; sự thật dần bị tháo bỏ. Đây là bước chuyển lớn so với các tác phẩm gia đình – cảm xúc trước đây của Trấn Thành.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">Cốt truyện</h2>
          <p>
            Phim xoay quanh <strong>Hải Linh</strong> (Lyly) – MC của talkshow &quot;Chị bờ vai&quot; tư vấn tình cảm. Khi khách mời <strong>Nhật Hạ</strong> (Pháo) chia sẻ câu chuyện bị bạn trai <strong>Kim</strong> (Trấn Thành) thao túng tinh thần, mọi chuyện trở nên phức tạp. Phim kể ba tuyến tình cảm chồng chéo – ghen tuông, kiểm soát và sự bỏ bê – khám phá mối quan hệ độc hại và góc khuất của tình yêu. Theo VnExpress và SaoStar, Trấn Thành sử dụng cấu trúc kể chuyện đa tuyến nhân vật thay vì tuyến tính, mỗi chương phim là một mảnh ghép từ góc nhìn khác nhau, dần hé lộ sự thật và tạo nhiều bước ngoặt. Phim mang hơi hướng thriller tâm lý với máy quay theo sát, zoom sâu, tạo cảm giác bí bách và căng thẳng.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">Dàn diễn viên</h2>
          <p>
            <strong>Văn Mai Hương</strong> được khen vì cách diễn tiết chế, nội tâm, tập trung vào ánh mắt và biểu cảm – nhân vật người phụ nữ bị mắc kẹt trong mối quan hệ thiếu niềm tin. <strong>Quốc Anh</strong> diễn nhân vật có lớp tâm lý phức tạp – kiểu người yêu bằng sự chiếm hữu và nghi kỵ – với cách diễn kiềm chế, lạnh lẽo. <strong>Trấn Thành</strong> trong vai Kim thể hiện nhân vật có vấn đề tâm lý, bất ổn, kiểm soát; một số chỉ trích cho rằng anh có phần diễn quá lố trong vài cảnh. Lyly và Vĩnh Đam thể hiện cặp đôi yêu nhau nhưng không tìm được tiếng nói chung. Khách mời: Hồng Vân, Đinh Ngọc Diệp, BB Trần, Gil Lê, Cris Phan, Lê Giang, Trần Tiểu Vy, Orange.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">Điểm mạnh và hạn chế</h2>
          <p>
            Phim được khen về sự thay đổi phong cách của Trấn Thành, bước ra khỏi vùng an toàn của phim gia đình cảm xúc. Nhân vật được xây dựng phức tạp, không hoàn toàn thiện hay ác. Tuy nhiên kịch bản có những tình tiết khiên cưỡng, phụ thuộc quá nhiều vào lời thoại để giải thích cảm xúc thay vì dùng hình ảnh. Một số chi tiết logic yếu (plot holes). Cách xử lý cảnh máu me có thể gây khó chịu cho khán giả mong chờ sự vui vẻ dịp Tết.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">Đánh giá</h2>
          <p>
            Phim đạt khoảng 83% trên Moveek, được đánh giá là một bước tiến về thể loại cho Trấn Thành, dù vẫn mắc những lỗi kịch hóa. Doanh thu hơn 300 tỷ đồng, trở thành phim ăn khách nhất mùa Tết 2026. Tác phẩm gây ấn tượng bởi cách xây dựng nhân vật phức tạp – không hoàn toàn thiện hay ác, mà là hệ quả của hoàn cảnh sống và các lựa chọn cá nhân.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">Thông tin phim</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Tên phim:</strong> Thỏ ơi!! (Bunnie!!)</li>
            <li><strong>Đạo diễn:</strong> Trấn Thành</li>
            <li><strong>Thể loại:</strong> Tâm lý, Lãng mạn, Giật gân</li>
            <li><strong>Thời lượng:</strong> 127 phút</li>
            <li><strong>Khởi chiếu:</strong> 17/2/2026 (mùng 1 Tết Bính Ngọ)</li>
            <li><strong>Phân loại:</strong> T18</li>
            <li><strong>Phát hành:</strong> Galaxy Studio</li>
          </ul>

          <FilmYoutubeReviews reviews={YOUTUBE_REVIEWS} filmTitle="Thỏ ơi" />

          <p className="mt-10 text-[#6b6b6b] dark:text-slate-400 text-sm">
            Nguồn tham khảo: Wikipedia, VnExpress, ELLE, Moveek, SaoStar
          </p>
        </div>
      </article>
    </div>
  );
}
