import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanthdev.com';
const pageUrl = `${baseUrl}/news/blackpink-100-trieu-subscribers`;

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'BLACKPINK 100 triệu subscribers YouTube - Kỷ lục lịch sử & Album DEADLINE 2026',
  description:
    'BLACKPINK là nghệ sĩ đầu tiên thế giới đạt 100 triệu subscribers YouTube ngày 20/2/2026, nhận Red Diamond Creator Award. Album DEADLINE ra mắt 27/2/2026 với 5 bài gồm Go feat Coldplay. Cập nhật kỷ lục BLACKPINK, tracklist, concept.',
  keywords: [
    'BLACKPINK',
    'BLACKPINK 100 triệu subscribers',
    'BLACKPINK kỷ lục YouTube',
    'BLACKPINK DEADLINE',
    'BLACKPINK album mới',
    'BLACKPINK Go',
    'BLACKPINK comeback 2026',
    'Jennie Lisa Jisoo Rosé',
    'K-pop',
    'BLACKPINK YouTube',
    'Red Diamond Creator Award',
    'BLINK',
    'BLACKPINK 100 million subscribers',
    'BLACKPINK DDU-DU DDU-DU',
    'BLACKPINK Kill This Love',
    'BLACKPINK Pink Venom',
    'album DEADLINE BLACKPINK',
    'BLACKPINK Go Coldplay',
    'BLACKPINK MV 1 tỷ view',
    'kỷ lục K-pop YouTube',
  ],
  openGraph: {
    title: 'BLACKPINK 100 triệu subscribers YouTube - Kỷ lục lịch sử & Album DEADLINE',
    description:
      'BLACKPINK là nghệ sĩ đầu tiên đạt 100 triệu subscribers YouTube. Album DEADLINE ra mắt 27/2/2026 với Go feat Coldplay.',
    url: pageUrl,
    siteName: 'vanthdev.com',
    type: 'article',
    locale: 'vi_VN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BLACKPINK 100 triệu subscribers - Kỷ lục YouTube & Album DEADLINE',
    description:
      'BLACKPINK đạt 100 triệu subscribers YouTube, nhận Red Diamond Creator Award. Album DEADLINE ra mắt 27/2/2026.',
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

const newsArticleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: 'BLACKPINK 100 triệu subscribers YouTube - Kỷ lục lịch sử & Album DEADLINE 2026',
  description:
    'BLACKPINK là nghệ sĩ đầu tiên thế giới đạt 100 triệu subscribers YouTube ngày 20/2/2026. Album DEADLINE ra mắt 27/2/2026 với 5 bài.',
  url: pageUrl,
  datePublished: '2026-03-01',
  dateModified: '2026-03-01',
  author: { '@type': 'Organization', name: 'vanthdev.com' },
  publisher: { '@type': 'Organization', name: 'vanthdev.com', url: baseUrl },
  mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
  keywords: 'BLACKPINK, 100 triệu subscribers, YouTube, DEADLINE, K-pop, Red Diamond Creator Award, BLINK',
  about: {
    '@type': 'MusicGroup',
    name: 'BLACKPINK',
    alternateName: ['블랙핑크', 'BP', 'Black Pink'],
    member: [
      { '@type': 'Person', name: 'Jisoo' },
      { '@type': 'Person', name: 'Jennie' },
      { '@type': 'Person', name: 'Rosé' },
      { '@type': 'Person', name: 'Lisa' },
    ],
  },
};

const BREADCRUMB_ITEMS = [
  { href: '/', label: 'Trang chủ' },
  { href: '/news', label: 'Tin tức' },
  { label: 'BLACKPINK 100 triệu subscribers' },
];

export default function BlackpinkSubscribersPage() {
  return (
    <div className="bg-[#faf8f5] dark:bg-[#0a0f1a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleJsonLd) }}
      />
      <article className="max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12">
        <Breadcrumb items={BREADCRUMB_ITEMS} currentPageUrl={pageUrl} />

        <header className="mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c41e3a]/10 dark:bg-[#c41e3a]/20 text-[#c41e3a] dark:text-amber-400 text-sm font-semibold mb-4">
            🎵 Giải trí
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] dark:text-white/95 tracking-tight leading-tight">
            BLACKPINK đạt 100 triệu subscribers YouTube – Kỷ lục lịch sử & Album DEADLINE
          </h1>
          <p className="mt-4 text-[#6b6b6b] dark:text-slate-400 text-base md:text-lg">
            Cập nhật: 01/3/2026 • K-pop – BLACKPINK – YouTube
          </p>
          <span className="sr-only">
            BLACKPINK 100 triệu subscribers YouTube kỷ lục thế giới. BLACKPINK DEADLINE album mới 2026. BLACKPINK Go
            Coldplay. Jennie Lisa Jisoo Rosé comeback. BLINK BLACKPINK YouTube record. Red Diamond Creator Award
            YouTube. BLACKPINK DDU-DU DDU-DU 2 tỷ view. K-pop kỷ lục YouTube 2026. BLACKPINK 100 million subscribers
            first artist.
          </span>
        </header>

        <div className="space-y-6 text-[#1a1a1a] dark:text-slate-300 leading-relaxed">
          <p className="text-lg leading-relaxed">
            Ngày <strong>20/2/2026</strong>, <strong>BLACKPINK</strong> chính thức trở thành{' '}
            <strong>nghệ sĩ đầu tiên trên thế giới đạt 100 triệu subscribers YouTube</strong>, xác lập kỷ lục chưa
            từng có trong lịch sử nền tảng video lớn nhất hành tinh. Chỉ một tuần sau, nhóm nhạc nữ đến từ{' '}
            <strong>YG Entertainment</strong> tiếp tục gây chấn động với album phòng thu thứ hai{' '}
            <strong>DEADLINE</strong> – đánh dấu sự trở lại sau <strong>3 năm rưỡi</strong> vắng bóng. Cộng đồng{' '}
            <strong>BLINK</strong> toàn cầu và giới chuyên môn đánh giá đây là cột mốc định hình lại quy mô của{' '}
            <strong>K-pop</strong> trên bản đồ giải trí thế giới.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            Kỷ lục 100 triệu subscribers – Nghệ sĩ đầu tiên trong lịch sử YouTube
          </h2>
          <p>
            Kênh YouTube chính thức của <strong>BLACKPINK</strong> đã cán mốc{' '}
            <strong>100 triệu subscribers</strong> vào ngày <strong>20/2/2026</strong>, biến{' '}
            <strong>Jisoo, Jennie, Rosé và Lisa</strong> trở thành nghệ sĩ âm nhạc đầu tiên – và cũng là kênh do
            con người vận hành đầu tiên – đạt được con số này. Trước đó, chỉ có các kênh tổng hợp nội dung như
            T-Series (270 triệu) và MrBeast (350 triệu) vượt ngưỡng 100 triệu. Với thành tích này,{' '}
            <strong>BLACKPINK</strong> nhận <strong>Red Diamond Creator Award</strong> từ YouTube – giải thưởng cao
            nhất dành cho nhà sáng tạo nội dung, được thiết kế riêng cho cột mốc 100 triệu.
          </p>
          <p>
            Hành trình đến <strong>100 triệu subscribers</strong> của <strong>BLACKPINK</strong> bắt đầu từ khi kênh
            được tạo năm 2016. Nhóm đạt 50 triệu vào năm 2021, 75 triệu vào giữa năm 2023, và tăng tốc mạnh mẽ
            trong giai đoạn quảng bá album <strong>DEADLINE</strong> với trung bình{' '}
            <strong>10.000 subscribers mới mỗi ngày</strong>. Tổng cộng, kênh đã tích lũy hơn{' '}
            <strong>40 tỷ lượt xem</strong> – một con số vượt xa mọi nghệ sĩ âm nhạc khác trên nền tảng.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            9 MV vượt 1 tỷ lượt xem – Thống trị YouTube toàn cầu
          </h2>
          <p>
            <strong>BLACKPINK</strong> hiện sở hữu <strong>9 MV vượt 1 tỷ lượt xem</strong> trên YouTube, dẫn đầu
            mọi nhóm nhạc trên thế giới. Đứng đầu danh sách là <strong>DDU-DU DDU-DU</strong> với{' '}
            <strong>2,1 tỷ lượt xem</strong> – MV của nhóm nhạc K-pop được xem nhiều nhất mọi thời đại. Tiếp theo
            là <strong>Kill This Love</strong> với <strong>2 tỷ lượt xem</strong>,{' '}
            <strong>Pink Venom</strong>, <strong>How You Like That</strong>, <strong>Boombayah</strong>,{' '}
            <strong>As If It&apos;s Your Last</strong>, <strong>Shut Down</strong>,{' '}
            <strong>Lovesick Girls</strong> và <strong>Playing With Fire</strong>.
          </p>
          <p>
            Ngoài các MV chính thức, các video vũ đạo (dance practice) và video biểu diễn live của nhóm cũng
            thường xuyên đạt hàng trăm triệu lượt xem, cho thấy sức hút bền vững của{' '}
            <strong>BLACKPINK</strong> trên nền tảng số. Mỗi lần comeback, nhóm đều phá kỷ lục về lượt xem trong
            24 giờ đầu tiên, khẳng định vị thế <strong>nhóm nhạc nữ lớn nhất thế giới</strong>.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            Album DEADLINE – Sự trở lại sau 3,5 năm
          </h2>
          <p>
            Ngày <strong>27/2/2026</strong>, <strong>BLACKPINK</strong> phát hành album phòng thu thứ hai mang tên{' '}
            <strong>DEADLINE</strong> – sản phẩm âm nhạc nhóm đầu tiên kể từ album <em>Born Pink</em> (2022) và
            đánh dấu sự trở lại sau <strong>3 năm rưỡi</strong>. Đây là album được mong chờ nhất năm 2026 trong
            cộng đồng <strong>K-pop</strong>, với lượng đặt trước (pre-order) phá mọi kỷ lục trước đó của nhóm nhạc
            nữ.
          </p>
          <p>
            Album <strong>DEADLINE</strong> gồm <strong>5 bài hát</strong>: <strong>Go</strong> (title track, feat.{' '}
            <strong>Chris Martin</strong> của <strong>Coldplay</strong> viết lời và sản xuất),{' '}
            <strong>Jump</strong>, <strong>Me and My</strong>, <strong>Champion</strong> và{' '}
            <strong>Fxxxboy</strong>. Sự hợp tác với <strong>Coldplay</strong> trong bài{' '}
            <strong>Go</strong> được đánh giá là bước đi chiến lược, kết nối hai thế hệ fan âm nhạc toàn cầu và mở
            rộng phạm vi tiếp cận của <strong>BLACKPINK</strong> sang thị trường phương Tây.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            Concept và hình ảnh – Mỗi thành viên một thế giới
          </h2>
          <p>
            Album <strong>DEADLINE</strong> gây ấn tượng mạnh với concept hình ảnh đa dạng cho từng thành viên.{' '}
            <strong>Lisa</strong> mang phong cách <strong>cyberpunk</strong> tương lai với tông màu neon và thiết kế
            công nghệ cao. <strong>Jennie</strong> thể hiện <strong>high-fashion noir</strong> – sang trọng, bí ẩn
            với gam màu tối và ánh sáng tương phản mạnh. <strong>Jisoo</strong> hóa thân vào hình ảnh{' '}
            <strong>ethereal</strong> (thanh thoát, mộng mơ) với tông pastel và chất liệu mềm mại.{' '}
            <strong>Rosé</strong> đi theo hướng <strong>avant-garde</strong> phá cách, kết hợp nghệ thuật đương đại
            với thời trang tiên phong.
          </p>
          <p>
            Sự đa dạng trong concept cho thấy <strong>BLACKPINK</strong> không chỉ là một nhóm nhạc mà còn là một
            hiện tượng văn hóa – nơi mỗi thành viên đều có bản sắc nghệ thuật riêng biệt, đồng thời tạo nên sức
            mạnh tổng thể khi kết hợp. Chiến lược này giúp nhóm thu hút nhiều phân khúc khán giả khác nhau, từ fan
            nhạc pop đến giới thời trang và nghệ thuật.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            Ý nghĩa – BLACKPINK và tầm ảnh hưởng của K-pop toàn cầu
          </h2>
          <p>
            Cột mốc <strong>100 triệu subscribers</strong> của <strong>BLACKPINK</strong> không chỉ là thành tích cá
            nhân mà còn đại diện cho sức mạnh của <strong>K-pop</strong> trên trường quốc tế. Từ một nhóm nhạc nữ
            Hàn Quốc ra mắt năm 2016, <strong>BLACKPINK</strong> đã vươn lên trở thành biểu tượng giải trí toàn
            cầu – biểu diễn tại Coachella, hợp tác với các thương hiệu xa xỉ như Chanel, Dior, Celine, Tiffany &
            Co., và giờ đây xác lập kỷ lục YouTube mà không nghệ sĩ nào từng chạm tới.
          </p>
          <p>
            Với album <strong>DEADLINE</strong> và kỷ lục <strong>100 triệu subscribers</strong>,{' '}
            <strong>BLACKPINK</strong> tiếp tục chứng minh rằng âm nhạc <strong>K-pop</strong> đã vượt qua rào cản
            ngôn ngữ và văn hóa. Cộng đồng <strong>BLINK</strong> – fandom trung thành của nhóm – trải dài trên
            mọi châu lục, và mỗi sản phẩm mới của <strong>Jennie, Lisa, Jisoo, Rosé</strong> đều trở thành sự kiện
            văn hóa toàn cầu. Năm 2026 hứa hẹn là năm bùng nổ nhất trong sự nghiệp của{' '}
            <strong>BLACKPINK</strong>.
          </p>

          <p className="mt-10 text-[#6b6b6b] dark:text-slate-400 text-sm">
            Nguồn tham khảo: YouTube Blog, K-popBreaking, UPI, Wikipedia
          </p>
        </div>
      </article>
    </div>
  );
}
