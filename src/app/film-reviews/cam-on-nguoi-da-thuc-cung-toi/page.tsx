import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { FilmPoster } from '@/components/film-poster';
import { FilmYoutubeReviews } from '@/components/film-youtube-reviews';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanthdev.com';
const pageUrl = `${baseUrl}/film-reviews/cam-on-nguoi-da-thuc-cung-toi`;
const TRAILER_YOUTUBE_ID = 'uf2oOeJ-Z3s';
const POSTER_URL = 'https://img.youtube.com/vi/uf2oOeJ-Z3s/hqdefault.jpg';

const YOUTUBE_REVIEWS: { youtubeId: string; title: string; channel?: string }[] = [];

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Review phim Cảm ơn người đã thức cùng tôi - Khúc ca điện ảnh ấm áp tình thân',
  description:
    'Review phim Cảm ơn người đã thức cùng tôi của đạo diễn Chung Chí Công. Phim tâm lý lãng mạn âm nhạc, lời tri ân cho những người đã đồng hành. Khởi chiếu 27/2/2026.',
  keywords: [
    'review phim Cảm ơn người đã thức cùng tôi',
    'phim Chung Chí Công',
    'phim tâm lý lãng mạn Việt Nam',
    'phim âm nhạc 2026',
    'Trời sáng rồi ta ngủ đi thôi',
  ],
  openGraph: {
    title: 'Review phim Cảm ơn người đã thức cùng tôi - Khúc ca điện ảnh ấm áp tình thân',
    description:
      'Review phim Cảm ơn người đã thức cùng tôi của đạo diễn Chung Chí Công. Phim tâm lý lãng mạn âm nhạc, lời tri ân cho những người đã đồng hành.',
    url: pageUrl,
    siteName: 'vanthdev.com',
    type: 'article',
    locale: 'vi_VN',
    images: [{ url: POSTER_URL, width: 480, height: 360, alt: 'Cảm ơn người đã thức cùng tôi' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Review phim Cảm ơn người đã thức cùng tôi',
    description: 'Khúc ca điện ảnh ấm áp tình thân - Phim của đạo diễn Chung Chí Công.',
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
  name: 'Cảm ơn người đã thức cùng tôi',
  description:
    'Phim tâm lý lãng mạn âm nhạc của đạo diễn Chung Chí Công. Khúc ca điện ảnh ấm áp về tình thân và ước mơ hoài bão.',
  image: POSTER_URL,
  genre: ['Tâm lý', 'Lãng mạn', 'Âm nhạc'],
  director: {
    '@type': 'Person',
    name: 'Chung Chí Công',
  },
  datePublished: '2026-02-27',
  inLanguage: 'vi',
  countryOfOrigin: {
    '@type': 'Country',
    name: 'Vietnam',
  },
};

const reviewJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'Movie',
    name: 'Cảm ơn người đã thức cùng tôi',
  },
  reviewBody:
    'Review phim Cảm ơn người đã thức cùng tôi - Khúc ca điện ảnh ấm áp tình thân của đạo diễn Chung Chí Công. Phim kể chuyện gia đình bằng ngôn ngữ điện ảnh giàu chất thơ, đậm tinh thần Việt.',
  author: {
    '@type': 'Organization',
    name: 'vanthdev.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'vanthdev.com',
    url: baseUrl,
  },
};

const BREADCRUMB_ITEMS = [
  { href: '/', label: 'Trang chủ' },
  { href: '/film-reviews', label: 'Review phim' },
  { label: 'Cảm ơn người đã thức cùng tôi' },
];

export default function CamOnNguoiDaThucCungToiPage() {
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
      <article className="max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12">
        <Breadcrumb items={BREADCRUMB_ITEMS} currentPageUrl={pageUrl} />

        <header className="mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c41e3a]/10 dark:bg-[#c41e3a]/20 text-[#c41e3a] dark:text-amber-400 text-sm font-semibold mb-4">
            🎬 Review phim
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] dark:text-white/95 tracking-tight leading-tight">
            Review phim Cảm ơn người đã thức cùng tôi – Khúc ca điện ảnh ấm áp tình thân
          </h1>
          <p className="mt-4 text-[#6b6b6b] dark:text-slate-400 text-base md:text-lg">
            Đạo diễn Chung Chí Công • Thể loại: Tâm lý, Lãng mạn, Âm nhạc • Khởi chiếu 27/2/2026
          </p>

          <div className="mt-8 flex flex-col md:flex-row gap-6">
            <div className="relative w-full md:w-64 h-96 md:h-80 shrink-0 rounded-xl overflow-hidden bg-[#eee] dark:bg-[#333] shadow-lg">
              <FilmPoster
                youtubeId={TRAILER_YOUTUBE_ID}
                alt="Poster phim Cảm ơn người đã thức cùng tôi"
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
                  title="Trailer phim Cảm ơn người đã thức cùng tôi"
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
            <strong>&quot;Cảm ơn người đã thức cùng tôi&quot;</strong> (A Little Dream Of Me) là bộ
            phim điện ảnh Việt Nam thuộc thể loại tình cảm – gia đình kết hợp âm nhạc, đánh dấu sự
            trở lại của đạo diễn <strong>Chung Chí Công</strong> sau 6 năm vắng bóng. Đây là dự án
            được ấp ủ suốt sáu năm, như một món quà dành cho những ai có ước mơ, đang theo đuổi ước
            mơ và giữ niềm tin vào ước mơ của mình. Phim do 30 Pictures sản xuất, CJ CGV phát hành,
            khởi chiếu ngày 27/2/2026 (mùng 11 Tết Bính Ngọ).
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            Cốt truyện và nhân vật
          </h2>
          <p>
            Phim theo chân <strong>Mộng Hoài</strong> – một cô gái trẻ theo đuổi ước mơ nghệ thuật
            giữa những biến động của cuộc sống. Cô đối mặt với thử thách khi bước vào thế giới
            trưởng thành, được ủng hộ bởi tình thân, tình bạn và tình yêu. Bộ phim gieo vào lòng
            người xem câu hỏi: &quot;Ước mơ của bạn là gì?&quot; và &quot;Mình muốn thực hiện ước mơ
            đó cùng ai?&quot;
          </p>
          <p>
            Theo Vietnam.vn, phim là lời tri ân dành cho những ước mơ dang dở và niềm hy vọng để
            người xem có thể tiếp tục hành trình đã bỏ dở. Bối cảnh phim trải dài từ đô thị hiện đại
            đến không gian nghệ thuật, tạo nên hành trình cảm xúc đa chiều cho nhân vật chính.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            Dàn diễn viên – Bộ ba trẻ tài năng
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-white/50 dark:bg-white/5 border border-[#eee] dark:border-white/10">
              <p className="font-semibold text-[#1a1a1a] dark:text-white/95 mb-1">
                Võ Phan Kim Khánh (vai Mộng Hoài)
              </p>
              <p className="text-sm text-[#6b6b6b] dark:text-slate-400">
                Nữ chính, cựu trưởng nhóm SGO48. Lần đầu vai chính điện ảnh. Teaser poster: dịu dàng
                cùng hoa mẫu đơn.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/50 dark:bg-white/5 border border-[#eee] dark:border-white/10">
              <p className="font-semibold text-[#1a1a1a] dark:text-white/95 mb-1">
                Trần Doãn Hoàng (vai Minh Hiếu)
              </p>
              <p className="text-sm text-[#6b6b6b] dark:text-slate-400">
                Từng gây ấn tượng trong phim &quot;Cám&quot; (2024). Poster teaser: phi hành gia du
                hành giữa vũ trụ.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/50 dark:bg-white/5 border border-[#eee] dark:border-white/10">
              <p className="font-semibold text-[#1a1a1a] dark:text-white/95 mb-1">
                Nguyễn Hùng (vai Duy Khang)
              </p>
              <p className="text-sm text-[#6b6b6b] dark:text-slate-400">
                Ca sĩ &quot;Còn gì đẹp hơn&quot;, &quot;Phép màu&quot;. Tham gia &quot;Mưa đỏ&quot;
                (714 tỷ). Poster teaser: chàng cáo cầm đàn trên hành tinh xa xôi.
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-[#6b6b6b] dark:text-slate-400">
            Ngoài ra còn có NSƯT Hữu Châu (vai ông Năm Nghĩa – cha câm điếc của Mộng Hoài, giao tiếp
            bằng ngôn ngữ ký hiệu), Chi Phạm, Phương Nam, Choco Trúc Phương, Anh Nguyễn, Tào Nhân.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            Âm nhạc – Phim Việt có nhiều OST nhất mọi thời đại
          </h2>
          <p>
            <strong>Phạm Hải Âu</strong> là nhà soạn nhạc nền chính. Phim có tới{' '}
            <strong>14 ca khúc</strong>, 10 trong số đó là sáng tác hoàn toàn mới dành riêng cho
            phim – được ghi nhận là tác phẩm điện ảnh Việt Nam có số lượng nhạc phim nhiều nhất mọi
            thời đại. Ca khúc chính &quot;Đến lúc bông hoa sẽ nở&quot; do nhạc sĩ trẻ Huỳnh Tâm
            sáng tác, được lựa chọn từ gần 200 bài dự thi. Ca khúc &quot;Mộng mơ là chuyện trẻ
            con&quot; do Võ Phan Kim Khánh thể hiện vang lên trong teaser trailer, đặt trong các đại
            cảnh nhảy múa công phu. Bài hát chủ đề &quot;Cảm ơn người đã thức cùng tôi&quot; do
            Phùng Khánh Linh trình bày.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            Đạo diễn và phong cách điện ảnh
          </h2>
          <p>
            Đạo diễn Chung Chí Công từng gây ấn tượng với &quot;Trời sáng rồi ta ngủ đi thôi&quot;
            (2019) – chất nhạc indie đầy cảm xúc, nhiều ca khúc do chính anh viết lời. Theo Tiền
            Phong, đây là sự trở lại của nam đạo diễn sau 6 năm vắng bóng. Chung Chí Công khai thác
            thế mạnh quen thuộc là kể chuyện gia đình bằng ngôn ngữ điện ảnh giàu chất thơ, đậm
            tinh thần Việt kết hợp màu sắc âm nhạc. Phim quay tại New York và Busan, có cảnh tại cầu
            thang Joker huyền thoại ở Bronx. Âm nhạc đã trở thành &quot;ngôn ngữ riêng&quot; không
            thể tách rời trong thế giới điện ảnh của anh.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            Thông điệp – Lời tri ân cho ước mơ dang dở
          </h2>
          <p>
            Chia sẻ về tác phẩm, đạo diễn Chung Chí Công: &quot;Khi trở thành người lớn với nhiều
            trách nhiệm, chúng ta thường có xu thế tạm gác ước mơ qua một bên. Cái tạm gác đó có thể
            trở nên rất lâu dài và không bao giờ quay lại. Bộ phim tôi muốn làm là lời tri ân dành
            cho những ước mơ dang dở và là niềm hy vọng để ai đó, một ngày nào đó, có thể tiếp tục
            hành trình đã bỏ dở ấy&quot;.
          </p>
          <p>
            Tựa phim vừa thừa kế vừa đối lập với &quot;Trời sáng rồi ta ngủ đi thôi&quot; – từ lời
            rủ rê bỏ lại thế giới để đi vào giấc ngủ, đến lời tri ân cho những người đã chọn thức
            cùng mình.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            Đánh giá và kỳ vọng
          </h2>
          <p>
            Nhẹ nhàng như một lá thư, sâu sắc như một bản nhạc, phim đem đến câu chuyện ấm áp về
            tình thân và ước mơ hoài bão. Vietnam.vn nhận định phim là khúc ca điện ảnh ấm áp tình
            thân, kết nối giữa quá khứ và hiện tại qua âm nhạc. Được kỳ vọng trở thành &quot;làn
            gió mới&quot; của điện ảnh Việt đầu năm 2026 bằng thể loại phim âm nhạc độc đáo, phim
            phù hợp với khán giả yêu thích dòng phim tâm lý lãng mạn và âm nhạc.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            Thông tin phim
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Tên phim:</strong> Cảm ơn người đã thức cùng tôi (A Little Dream Of Me)
            </li>
            <li>
              <strong>Đạo diễn:</strong> Chung Chí Công
            </li>
            <li>
              <strong>Thể loại:</strong> Tình cảm, Gia đình, Âm nhạc
            </li>
            <li>
              <strong>Thời lượng:</strong> 137 phút
            </li>
            <li>
              <strong>Khởi chiếu:</strong> 27/2/2026 (mùng 11 Tết Bính Ngọ)
            </li>
            <li>
              <strong>Phân loại:</strong> K – dưới 13 tuổi có người giám hộ
            </li>
            <li>
              <strong>Nhà sản xuất:</strong> 30 Pictures
            </li>
            <li>
              <strong>Phát hành:</strong> CJ CGV
            </li>
          </ul>

          <FilmYoutubeReviews reviews={YOUTUBE_REVIEWS} filmTitle="Cảm ơn người đã thức cùng tôi" />

          <p className="mt-10 text-[#6b6b6b] dark:text-slate-400 text-sm">
            Nguồn tham khảo: Wikipedia, Tiền Phong, Vietnam.vn, Phụ nữ Việt Nam, Tạp chí Đẹp, Hà Nội Mới, ELLE Việt Nam
          </p>
        </div>
      </article>
    </div>
  );
}
