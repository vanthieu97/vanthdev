import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { FilmPoster } from '@/components/film-poster';
import { FilmYoutubeReviews } from '@/components/film-youtube-reviews';
import { getCanonicalUrl, LOCALES, isValidLocale, type Locale } from '@/lib/i18n/config';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanthdev.com';
const SLUG = 'nha-ba-toi-mot-phong';

function getPageUrl(locale: Locale) {
  return getCanonicalUrl(baseUrl, locale, `/film-reviews/${SLUG}`);
}
const TRAILER_YOUTUBE_ID = 'gCmV2d_82CU';
const POSTER_URL = `https://img.youtube.com/vi/${TRAILER_YOUTUBE_ID}/hqdefault.jpg`;

const YOUTUBE_REVIEWS: { youtubeId: string; title: string; channel?: string }[] = [
  // Thêm video review từ YouTube - tìm "review Nhà ba tôi một phòng"
];

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

  return {
  title: 'Review phim Nhà ba tôi một phòng - Tình cha con bình dị của Trường Giang',
  description:
    'Review phim Nhà ba tôi một phòng – phim điện ảnh đầu tay của Trường Giang. Drama gia đình về ông Thạch và con gái An, khoảng cách thế hệ trong căn phòng chật hẹp. Khởi chiếu 17/2/2026.',
  keywords: [
    'review phim Nhà ba tôi một phòng',
    'phim Trường Giang',
    'phim Tết 2026',
    'phim gia đình Việt Nam',
    'Đoàn Minh Anh',
  ],
  openGraph: {
    title: 'Review phim Nhà ba tôi một phòng - Tình cha con bình dị của Trường Giang',
    description:
      'Review phim Nhà ba tôi một phòng – phim điện ảnh đầu tay của Trường Giang. Drama gia đình, khởi chiếu 17/2/2026.',
    url: pageUrl,
    siteName: 'vanthdev.com',
    type: 'article',
    locale: 'vi_VN',
    images: [{ url: POSTER_URL, width: 480, height: 360, alt: 'Nhà ba tôi một phòng' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Review phim Nhà ba tôi một phòng',
    description: 'Phim điện ảnh đầu tay của Trường Giang – tình cha con trong căn phòng chật hẹp.',
  },
  alternates: { canonical: pageUrl, languages },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

function buildMovieJsonLd() {
  return {
  '@context': 'https://schema.org',
  '@type': 'Movie',
  name: 'Nhà ba tôi một phòng',
  alternateName: 'A Room Called Home',
  description:
    'Phim drama gia đình của đạo diễn Trường Giang. Câu chuyện ông Thạch và con gái An trong căn nhà một phòng, khám phá khoảng cách thế hệ và tình cha con.',
  image: POSTER_URL,
  genre: ['Drama', 'Gia đình', 'Hài'],
  director: { '@type': 'Person', name: 'Trường Giang' },
  datePublished: '2026-02-17',
  inLanguage: 'vi',
  countryOfOrigin: { '@type': 'Country', name: 'Vietnam' },
  };
}

function buildReviewJsonLd(locale: Locale) {
  const pageUrl = getPageUrl(locale);
  return {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: { '@type': 'Movie', name: 'Nhà ba tôi một phòng' },
  reviewBody:
    'Review phim Nhà ba tôi một phòng – phim điện ảnh đầu tay của Trường Giang. Phim khắc họa mối quan hệ cha con trong không gian chật hẹp, giàu cảm xúc về tình thân.',
  url: pageUrl,
  author: { '@type': 'Organization', name: 'vanthdev.com' },
  publisher: { '@type': 'Organization', name: 'vanthdev.com', url: baseUrl },
  };
}

const BREADCRUMB_ITEMS = [
  { href: '/', label: 'Trang chủ' },
  { href: '/film-reviews', label: 'Review phim' },
  { label: 'Nhà ba tôi một phòng' },
];

export default function NhaBaToiMotPhongPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : 'vi';
  const pageUrl = getPageUrl(locale);
  const movieJsonLd = buildMovieJsonLd();
  const reviewJsonLd = buildReviewJsonLd(locale);

  return (
    <div className="bg-[#faf8f5] dark:bg-[#0a0f1a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(movieJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }} />
      <article className="max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12">
        <Breadcrumb items={BREADCRUMB_ITEMS} currentPageUrl={pageUrl} locale={locale} />

        <header className="mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c41e3a]/10 dark:bg-[#c41e3a]/20 text-[#c41e3a] dark:text-amber-400 text-sm font-semibold mb-4">🎬 Review phim</span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] dark:text-white/95 tracking-tight leading-tight">
            Review phim Nhà ba tôi một phòng – Tình cha con bình dị của Trường Giang
          </h1>
          <p className="mt-4 text-[#6b6b6b] dark:text-slate-400 text-base md:text-lg">
            Đạo diễn Trường Giang • Thể loại: Drama, Gia đình • Khởi chiếu 17/2/2026 (mùng 1 Tết)
          </p>

          <div className="mt-8 flex flex-col md:flex-row gap-6">
            <div className="relative w-full md:w-64 h-96 md:h-80 shrink-0 rounded-xl overflow-hidden bg-[#eee] dark:bg-[#333] shadow-lg">
              <FilmPoster youtubeId={TRAILER_YOUTUBE_ID} alt="Poster phim Nhà ba tôi một phòng" className="object-cover" priority />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-semibold text-[#1a1a1a] dark:text-white/95 mb-3">Trailer chính thức</h2>
              <div className="aspect-video rounded-xl overflow-hidden bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${TRAILER_YOUTUBE_ID}?rel=0`}
                  title="Trailer phim Nhà ba tôi một phòng"
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
            <strong>&quot;Nhà ba tôi một phòng&quot;</strong> (A Room Called Home) là phim điện ảnh đầu tay của{' '}
            <strong>Trường Giang</strong> trong vai trò đạo diễn, biên kịch, sản xuất và diễn viên chính. Phim khởi chiếu ngày 17/2/2026 (mùng 1 Tết Bính Ngọ), đánh dấu sự trở lại màn ảnh của Trường Giang sau 5 năm vắng bóng.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">Cốt truyện</h2>
          <p>
            Phim lấy bối cảnh khu chung cư cũ với căn nhà chỉ vỏn vẹn một phòng. Ông <strong>Thạch</strong> (Trường Giang) – cha đơn thân làm nghề mắm truyền thống miền Trung – sống cùng con gái <strong>An</strong> (Đoàn Minh Anh), cô gái Gen Z đầy mơ ước theo đuổi thiết kế thời trang. An muốn đi du học thiết kế thời trang, nhưng cha cô lại là rào cản vì sợ con bị lợi dụng. Mâu thuẫn nảy sinh khi An có bạn trai Phát (Anh Tú Atus) và mẹ An bất ngờ quay trở lại, đẩy xung đột lên cao trào.
          </p>
          <p>
            Theo Khen Phim và Harper&apos;s Bazaar, chủ đề quen thuộc nhưng Trường Giang xử lý tương đối tròn trịa, đi chậm và tập trung vào cảm xúc gia đình đời thường. Phim khám phá khoảng cách thế hệ, những khác biệt trong cách bày tỏ tình yêu thương giữa cha và con.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">Dàn diễn viên</h2>
          <p>
            Trường Giang thể hiện ông Thạch đủ khắc khổ, tiết chế và lúng túng khi thể hiện tình yêu con. Đoàn Minh Anh tỏa sáng ở vai diễn đầu tay với năng lượng trẻ trung. Sự hóa học giữa Như Vân (vai bà Lệ) và Đoàn Minh Anh được đánh giá cao, đặc biệt các cảnh đối thoại giữa hai nhân vật lấy nước mắt khán giả. Lê Khánh mang đến tiếng cười vui tươi, còn Anh Tú Atus thể hiện tròn vai bạn trai An. Khách mời: Tiến Luật, Lâm Vỹ Dạ, Kiều Minh Tuấn, Kiến An, Phát La, Lê Dương Bảo Lâm, Ngô Kiến Huy, Cris Phan, Otis.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">Kỹ thuật và âm nhạc</h2>
          <p>
            Phim được đầu tư chỉn chu về hình ảnh. Theo Khen Phim và ELLE, cảnh pickleball &quot;tưởng tượng&quot; sử dụng 99–100 máy quay để tạo hiệu ứng slow-motion đẹp mắt. Âm nhạc với 5 ca khúc từ J97, HIEUTHUHAI & NEGAV, và Anh Tú Atus là &quot;vũ khí&quot; cứu cánh cho những đoạn kịch bản hơi yếu.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">Đánh giá</h2>
          <p>
            Phim được đánh giá là bước đi an toàn nhưng chỉn chu cho tác phẩm điện ảnh đầu tay. Harper&apos;s Bazaar nhận định Trường Giang xử lý tương đối tròn trịa, dù không quá xuất sắc nhưng đủ chỉn chu. ELLE đánh giá diễn xuất nâng tầm kịch bản &quot;an toàn&quot;. Phim gây cảm động và khiến khán giả muốn liên lạc người thân sau khi xem. Tuy nhiên, phim có xu hướng &quot;ép&quot; cảm xúc ở vài phân đoạn cuối, lạm dụng cảnh khóc để lấy nước mắt. Phim phù hợp dịp Tết với những khoảnh khắc xúc động về tình yêu thương gia đình.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">Thông tin phim</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Tên phim:</strong> Nhà ba tôi một phòng (A Room Called Home)</li>
            <li><strong>Đạo diễn:</strong> Trường Giang</li>
            <li><strong>Thể loại:</strong> Drama, Gia đình</li>
            <li><strong>Thời lượng:</strong> 124–126 phút</li>
            <li><strong>Khởi chiếu:</strong> 17/2/2026 (mùng 1 Tết Bính Ngọ)</li>
            <li><strong>Phân loại:</strong> K</li>
            <li><strong>Phát hành:</strong> CJ CGV</li>
          </ul>

          <FilmYoutubeReviews reviews={YOUTUBE_REVIEWS} filmTitle="Nhà ba tôi một phòng" />

          <p className="mt-10 text-[#6b6b6b] dark:text-slate-400 text-sm">
            Nguồn tham khảo: Wikipedia, Moveek, Khen Phim, ELLE, Harper&apos;s Bazaar
          </p>
        </div>
      </article>
    </div>
  );
}
