import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanthdev.com';
const pageUrl = `${baseUrl}/news/israel-tan-cong-iran`;
const OG_IMAGE =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pictures_of_the_Israeli_attack_on_Tehran_1_Mehr_%282%29.jpg/1200px-Pictures_of_the_Israeli_attack_on_Tehran_1_Mehr_%282%29.jpg';
const HERO_IMAGE =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pictures_of_the_Israeli_attack_on_Tehran_1_Mehr_%282%29.jpg/1200px-Pictures_of_the_Israeli_attack_on_Tehran_1_Mehr_%282%29.jpg';
const TEHRAN_IMAGE =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Iranian_missile_strike_in_Bat_Yam%2C_15_June_2025._III.jpg/960px-Iranian_missile_strike_in_Bat_Yam%2C_15_June_2025._III.jpg';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Israel tấn công Iran - Mỹ và Israel không kích Iran 28/2/2026',
  description:
    'Mỹ và Israel tấn công Iran ngày 28/2/2026: đánh phủ đầu tên lửa đạn đạo, mục tiêu Tehran, Isfahan, Qom. Iran đáp trả phóng tên lửa về Israel. Trump: chiến dịch quy mô lớn đang diễn ra.',
  keywords: [
    'Israel tấn công Iran',
    'Iran',
    'Israel',
    'Israel Iran',
    'Mỹ đánh Iran',
    'Israel đánh Iran',
    'Israel tấn công phủ đầu Iran',
    'Mỹ tấn công Iran',
  ],
  openGraph: {
    title: 'Israel tấn công Iran - Mỹ và Israel không kích Iran 28/2/2026',
    description:
      'Mỹ và Israel tấn công Iran 28/2/2026. Iran đáp trả tên lửa. Trump: chiến dịch quy mô lớn đang diễn ra.',
    url: pageUrl,
    siteName: 'vanthdev.com',
    type: 'article',
    locale: 'vi_VN',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Israel tấn công Iran' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Israel tấn công Iran - Tin tức 28/2/2026',
    description: 'Mỹ và Israel không kích Iran. Iran đáp trả tên lửa về Israel.',
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
  headline: 'Israel tấn công Iran - Mỹ và Israel không kích Iran 28/2/2026',
  description:
    'Mỹ và Israel tấn công Iran ngày 28/2/2026: đánh phủ đầu tên lửa đạn đạo. Iran đáp trả phóng tên lửa về Israel.',
  url: pageUrl,
  image: OG_IMAGE,
  datePublished: '2026-02-28',
  dateModified: '2026-02-28',
  author: { '@type': 'Organization', name: 'vanthdev.com' },
  publisher: { '@type': 'Organization', name: 'vanthdev.com', url: baseUrl },
  mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Tin tức', item: `${baseUrl}/news` },
    { '@type': 'ListItem', position: 3, name: 'Israel tấn công Iran', item: pageUrl },
  ],
};

export default function IsraelTanCongIranPage() {
  return (
    <div className="bg-[#faf8f5] dark:bg-[#0a0f1a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleJsonLd) }}
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
              <Link href="/news" className="hover:text-[#c41e3a] dark:hover:text-amber-400 transition-colors">
                Tin tức
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-[#1a1a1a] dark:text-white/95">Israel tấn công Iran</li>
          </ol>
        </nav>

        <header className="mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c41e3a]/10 dark:bg-[#c41e3a]/20 text-[#c41e3a] dark:text-amber-400 text-sm font-semibold mb-4">
            📰 Tin tức thế giới
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] dark:text-white/95 tracking-tight leading-tight">
            Mỹ và Israel tấn công Iran – Không kích 28/2/2026
          </h1>
          <p className="mt-4 text-[#6b6b6b] dark:text-slate-400 text-base md:text-lg">
            Cập nhật: 28/2/2026 • Mỹ – Israel – Iran
          </p>

          <figure className="mt-8 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={HERO_IMAGE}
              alt="Israel tấn công Tehran – Không quân Israel oanh tạc Tehran rạng sáng 13/6/2025"
              width={1200}
              height={630}
              className="w-full aspect-video object-cover"
              priority
            />
            <figcaption className="mt-2 text-sm text-[#6b6b6b] dark:text-slate-400 text-center">
              Israel tấn công Tehran rạng sáng 13/6/2025. Ảnh: Mehr News Agency
            </figcaption>
          </figure>
        </header>

        <div className="space-y-6 text-[#1a1a1a] dark:text-slate-300 leading-relaxed">
          <p className="text-lg leading-relaxed">
            Ngày <strong>28/2/2026</strong> (thứ Bảy), <strong>Mỹ tấn công Iran</strong> và <strong>Israel tấn công
            Iran</strong> trong chiến dịch không kích quy mô lớn, đánh dấu mức leo thang đáng kể sau nhiều tuần đàm
            phán hạt nhân Mỹ–<strong>Iran</strong> không đạt kết quả. Tổng thống Trump xác nhận Mỹ đã bắt đầu chiến
            dịch quân sự &quot;quy mô lớn và đang diễn ra&quot; nhằm &quot;ngăn chặn chế độ độc tài tàn ác này đe dọa
            an ninh quốc gia Mỹ&quot;. &quot;Chúng ta sẽ phá hủy tên lửa của họ và san bằng ngành công nghiệp tên
            lửa&quot;, Trump nói.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            Mục tiêu và phạm vi
          </h2>
          <p>
            Bộ trưởng Quốc phòng <strong>Israel</strong> <strong>Israel Katz</strong> gọi đây là cuộc{' '}
            <strong>Israel tấn công phủ đầu Iran</strong> – nhằm vào tên lửa đạn đạo và bệ phóng tên lửa của{' '}
            <strong>Iran</strong>, mối đe dọa nghiêm trọng mà <strong>Israel</strong> nhìn nhận. <strong>Mỹ đánh
            Iran</strong> và <strong>Israel đánh Iran</strong> trong chiến dịch phối hợp; lực lượng Mỹ dự kiến thực
            hiện nhiều ngày tấn công, một quan chức mô tả &quot;không phải đòn nhỏ&quot;. Video xác minh cho thấy
            khói bốc lên từ thủ đô Tehran; các vụ nổ cũng được báo cáo tại{' '}
            <strong>Isfahan, Qom, Karaj và Kermanshah</strong>.
          </p>

          <figure className="my-8 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={TEHRAN_IMAGE}
              alt="Iran phóng tên lửa đáp trả – Thiệt hại sau tên lửa Iran tại Bat Yam, Israel 15/6/2025"
              width={960}
              height={1280}
              className="w-full aspect-video object-cover"
            />
            <figcaption className="mt-2 text-sm text-[#6b6b6b] dark:text-slate-400 text-center">
              Iran đáp trả – Thiệt hại sau tên lửa Iran tại Bat Yam, Israel 15/6/2025. Ảnh: Yoav Keren
            </figcaption>
          </figure>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            Iran đáp trả
          </h2>
          <p>
            Khoảng hai giờ sau các đợt không kích, <strong>Iran</strong> phóng tên lửa nhằm vào <strong>Israel</strong>.
            Lệnh cảnh báo từ Bộ Tư lệnh Hậu phương Israel gửi thẳng đến điện thoại người dân: báo động dự kiến
            &quot;trong vài phút&quot;, cần chuẩn bị vào nơi trú ẩn. Quân đội Israel xác nhận đã phát hiện tên lửa từ
            Iran hướng về Israel và đang triển khai không quân đánh chặn. Iran tuyên bố &quot;phản ứng nghiền
            nát&quot;. Iran đóng cửa không phận, đình chỉ học trực tiếp và chuyển sang học từ xa.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            Tình trạng khẩn cấp
          </h2>
          <p>
            <strong>Israel</strong> tuyên bố tình trạng khẩn cấp do dự kiến <strong>Iran</strong> đáp trả, đóng cửa
            không phận và chỉ cho phép hoạt động thiết yếu. Thủ tướng Netanyahu gọi chiến dịch là &quot;Tiếng gầm
            sư tử&quot; nhằm loại bỏ &quot;mối đe dọa sinh tồn&quot; từ chế độ Iran. Đại sứ quán Mỹ tại Qatar cũng ban
            hành lệnh trú ẩn tại chỗ.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            Bối cảnh
          </h2>
          <p>
            Trump cho biết <strong>Iran</strong> đã tìm cách khôi phục chương trình hạt nhân sau khi Mỹ ném bom cơ sở
            hạt nhân Iran tháng 6/2025. &quot;Họ từ chối mọi cơ hội từ bỏ tham vọng hạt nhân, và chúng ta không thể
            chấp nhận thêm&quot;. Chiến dịch <strong>Mỹ tấn công Iran</strong> và xung đột <strong>Israel Iran</strong> diễn ra
            sau các cuộc đàm phán hạt nhân Mỹ–Iran tại Geneva hôm thứ Năm (27/2) không đạt đột phá. Nguồn tin cho
            biết quân đội Mỹ đã chuẩn bị khả năng tấn công trong nhiều tuần, tập trung lực lượng không quân và hải
            quân tại khu vực.
          </p>

          <p className="mt-10 text-[#6b6b6b] dark:text-slate-400 text-sm">
            Nguồn tham khảo: CNN, BBC, CBS News, AP
          </p>
        </div>

      </article>
    </div>
  );
}
