import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanthdev.com';
const pageUrl = `${baseUrl}/news/iphone-18-pro-max`;

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'iPhone 18 Pro Max - Thông số, giá bán, ngày ra mắt 2026',
  description:
    'iPhone 18 Pro Max ra mắt tháng 9/2026 với chip A20 Pro 2nm, RAM 12GB, camera 48MP khẩu độ biến thiên, màn hình 6.9 inch 3000 nits, pin 5200 mAh, bộ nhớ 2TB. Giá iPhone 18 Pro Max, thông số kỹ thuật, ngày bán tại Việt Nam.',
  keywords: [
    'iPhone 18 Pro Max',
    'iPhone 18',
    'iPhone 18 Pro Max giá bao nhiêu',
    'iPhone 18 khi nào ra mắt',
    'iPhone 18 Pro Max thông số',
    'iPhone 18 Pro Max 2026',
    'Apple iPhone 18',
    'chip A20 Pro',
    'iPhone 18 camera',
    'iPhone 18 màn hình',
    'iPhone mới nhất',
    'điện thoại Apple 2026',
    'iPhone 18 Pro Max giá',
    'iPhone 18 Pro Max bao giờ ra mắt',
    'iPhone 18 Pro Max mua ở đâu',
    'iPhone 18 Pro Max Việt Nam',
    'iPhone 18 Pro Max pin',
    'iPhone 18 Pro Max 2TB',
    'Apple Intelligence 2.0',
    'iPhone 18 Pro Max màu',
  ],
  openGraph: {
    title: 'iPhone 18 Pro Max - Thông số, giá bán, ngày ra mắt 2026',
    description:
      'Tổng hợp thông tin iPhone 18 Pro Max: chip A20 Pro 2nm, camera 48MP, màn hình 6.9 inch, pin 5200 mAh, giá bán và ngày ra mắt tại Việt Nam.',
    url: pageUrl,
    siteName: 'vanthdev.com',
    type: 'article',
    locale: 'vi_VN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iPhone 18 Pro Max - Thông số, giá, ngày ra mắt 2026',
    description:
      'iPhone 18 Pro Max với chip A20 Pro 2nm, camera 48MP, màn hình 6.9 inch 3000 nits, pin 5200 mAh. Giá và ngày bán tại VN.',
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
  headline: 'iPhone 18 Pro Max - Tổng hợp thông tin, thông số, giá, ngày ra mắt 2026',
  description:
    'iPhone 18 Pro Max ra mắt tháng 9/2026 với chip A20 Pro 2nm, camera 48MP khẩu độ biến thiên, màn hình 6.9 inch, pin 5200 mAh, bộ nhớ 2TB.',
  url: pageUrl,
  datePublished: '2026-03-01',
  dateModified: '2026-03-01',
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
    { '@type': 'ListItem', position: 3, name: 'iPhone 18 Pro Max', item: pageUrl },
  ],
};

export default function IPhone18ProMaxPage() {
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
            <li className="text-[#1a1a1a] dark:text-white/95">iPhone 18 Pro Max</li>
          </ol>
        </nav>

        <header className="mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c41e3a]/10 dark:bg-[#c41e3a]/20 text-[#c41e3a] dark:text-amber-400 text-sm font-semibold mb-4">
            📱 Công nghệ
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] dark:text-white/95 tracking-tight leading-tight">
            iPhone 18 Pro Max – Tổng hợp thông tin, thông số, giá, ngày ra mắt
          </h1>
          <p className="mt-4 text-[#6b6b6b] dark:text-slate-400 text-base md:text-lg">
            Cập nhật: 01/3/2026 • Apple • Công nghệ
          </p>
          <span className="sr-only">
            iPhone 18 Pro Max giá bao nhiêu, iPhone 18 khi nào ra mắt, iPhone 18 Pro Max thông số kỹ thuật,
            chip A20 Pro 2nm, camera 48MP, màn hình 6.9 inch, pin 5200 mAh, bộ nhớ 2TB, Apple Intelligence 2.0,
            điện thoại Apple mới nhất 2026, iPhone 18 Pro Max Việt Nam, mua iPhone 18 Pro Max ở đâu
          </span>
        </header>

        <div className="space-y-6 text-[#1a1a1a] dark:text-slate-300 leading-relaxed">
          <p className="text-lg leading-relaxed">
            <strong>iPhone 18 Pro Max</strong> là mẫu điện thoại cao cấp nhất trong dòng <strong>iPhone 18</strong> của{' '}
            <strong>Apple</strong>, dự kiến ra mắt vào <strong>tháng 9/2026</strong> và bán chính hãng tại{' '}
            <strong>Việt Nam từ tháng 10/2026</strong>. Đây là thế hệ iPhone đầu tiên trang bị{' '}
            <strong>chip A20 Pro</strong> sản xuất trên tiến trình <strong>2nm</strong>, mang đến hiệu năng vượt trội
            và thời lượng pin ấn tượng. Bài viết tổng hợp toàn bộ thông tin rò rỉ về thông số kỹ thuật, thiết kế,
            camera, giá bán và ngày ra mắt của <strong>iPhone 18 Pro Max 2026</strong>.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            Chip A20 Pro – Bước nhảy vọt với công nghệ 2nm
          </h2>
          <p>
            Trái tim của <strong>iPhone 18 Pro Max</strong> là <strong>chip A20 Pro</strong>, được sản xuất bởi TSMC
            trên tiến trình <strong>2nm</strong> tiên tiến nhất. So với chip A19 Pro trên iPhone 17 Pro Max, A20 Pro
            cho hiệu năng <strong>nhanh hơn 15%</strong> và đặc biệt <strong>tiết kiệm pin đến 30%</strong> nhờ
            mật độ transistor cao hơn. Máy được trang bị <strong>RAM 12GB</strong> – mức cao nhất từ trước đến nay
            trên iPhone, đảm bảo đa nhiệm mượt mà và hỗ trợ tối ưu cho các tác vụ AI trên thiết bị. Apple cũng
            tích hợp <strong>modem Apple C2</strong> tự phát triển, thay thế hoàn toàn modem Qualcomm, hỗ trợ
            5G mmWave và Sub-6GHz với hiệu suất kết nối tốt hơn và tiêu thụ điện năng thấp hơn.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            Màn hình 6.9 inch – Bỏ Dynamic Island, Face ID ẩn dưới màn hình
          </h2>
          <p>
            <strong>iPhone 18 Pro Max</strong> sở hữu <strong>màn hình 6.9 inch LTPO OLED</strong> với tần số quét{' '}
            <strong>120Hz</strong> ProMotion và độ sáng tối đa lên đến <strong>3.000 nits</strong> ngoài trời – sáng
            nhất trong thế giới smartphone. Thay đổi lớn nhất về thiết kế là Apple đã <strong>bỏ hoàn toàn Dynamic
            Island</strong>, thay bằng màn hình tràn viền thực sự. Công nghệ <strong>Face ID ẩn dưới màn hình</strong>{' '}
            (under-display) cho phép nhận diện khuôn mặt mà không cần cắt lỗ hay notch, mang đến trải nghiệm
            hiển thị liền mạch chưa từng có trên iPhone.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            Camera 48MP – Khẩu độ biến thiên và ống kính periscope
          </h2>
          <p>
            Hệ thống <strong>camera iPhone 18 Pro Max</strong> gồm <strong>3 ống kính 48MP</strong> với nâng cấp
            đáng chú ý nhất là <strong>khẩu độ biến thiên</strong> (variable aperture) trên ống kính chính – tương
            tự cơ chế trên máy ảnh chuyên nghiệp, cho phép điều chỉnh lượng ánh sáng vào cảm biến linh hoạt hơn.
            Ống kính <strong>telephoto periscope</strong> hỗ trợ zoom quang học 5x với chất lượng hình ảnh được cải
            thiện rõ rệt nhờ cảm biến lớn hơn. Ống kính ultra-wide 48MP cũng được nâng cấp với khả năng chụp macro
            và chụp đêm tốt hơn. Video hỗ trợ quay <strong>8K 30fps</strong> và Cinematic Mode ở độ phân giải 4K.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            Bảng thông số kỹ thuật iPhone 18 Pro Max
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-[#eee] dark:border-[#4a4a5a]/60 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#f5f3ef] dark:bg-[#1a1a2e]">
                  <th className="px-4 py-3 text-sm font-semibold text-[#6b6b6b] dark:text-slate-400">
                    Thông số
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-[#6b6b6b] dark:text-slate-400">
                    Chi tiết
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eee] dark:divide-[#4a4a5a]/40">
                {[
                  ['Màn hình', '6.9 inch LTPO OLED, 120Hz ProMotion, 3.000 nits'],
                  ['Chip xử lý', 'Apple A20 Pro (2nm TSMC)'],
                  ['RAM', '12GB'],
                  ['Bộ nhớ trong', '256GB / 512GB / 1TB / 2TB'],
                  ['Camera sau', '48MP x3 (chính + ultra-wide + telephoto periscope 5x)'],
                  ['Khẩu độ', 'Biến thiên (variable aperture) trên ống kính chính'],
                  ['Camera trước', '12MP, autofocus, Face ID ẩn dưới màn hình'],
                  ['Pin', '5.100 – 5.200 mAh'],
                  ['Sạc', 'MagSafe 25W, sạc có dây 45W, sạc ngược'],
                  ['Modem', 'Apple C2 (5G mmWave + Sub-6GHz)'],
                  ['Chất liệu', 'Titanium Grade 6'],
                  ['Hệ điều hành', 'iOS 20'],
                  ['AI', 'Apple Intelligence 2.0 – Agentic AI'],
                  ['Màu sắc', 'Bạc, Xanh Đậm, Nâu Cà Phê, Tím, Đỏ Rượu Vang'],
                  ['Ra mắt', 'Tháng 9/2026 (VN: tháng 10/2026)'],
                ].map(([spec, detail]) => (
                  <tr
                    key={spec}
                    className="bg-white dark:bg-[#2d2d3d]/60 hover:bg-[#f5f3ef] dark:hover:bg-[#1a1a2e]/80 transition-colors"
                  >
                    <td className="px-4 py-3 text-sm font-medium text-[#1a1a1a] dark:text-white/90 whitespace-nowrap">
                      {spec}
                    </td>
                    <td className="px-4 py-3 text-sm text-[#1a1a1a] dark:text-slate-300">
                      {detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            Pin, thiết kế và Apple Intelligence 2.0
          </h2>
          <p>
            <strong>iPhone 18 Pro Max</strong> được trang bị viên pin dung lượng <strong>5.100 – 5.200 mAh</strong>,
            lớn hơn đáng kể so với iPhone 17 Pro Max. Kết hợp với chip A20 Pro tiết kiệm điện 30%, thời lượng sử
            dụng dự kiến đạt <strong>trên 30 giờ phát video</strong>. Máy hỗ trợ sạc MagSafe 25W và sạc có dây
            nhanh 45W. Về thiết kế, Apple sử dụng <strong>Titanium Grade 6</strong> – hợp kim titan cao cấp hơn
            thế hệ trước, nhẹ hơn và bền hơn. Bộ nhớ trong tối đa lên đến <strong>2TB</strong> – lần đầu tiên
            trên một chiếc smartphone.
          </p>
          <p>
            Về phần mềm, <strong>Apple Intelligence 2.0</strong> là bản nâng cấp lớn với khả năng{' '}
            <strong>Agentic AI</strong> – trợ lý ảo Siri có thể tự thực hiện chuỗi tác vụ phức tạp thay người
            dùng, như đặt lịch hẹn, đặt vé máy bay, tóm tắt email và trả lời tin nhắn tự động. Apple Intelligence
            2.0 xử lý phần lớn tác vụ AI ngay trên thiết bị nhờ chip A20 Pro và RAM 12GB, đảm bảo quyền riêng tư
            dữ liệu.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            Giá dự kiến và ngày ra mắt tại Việt Nam
          </h2>
          <p>
            <strong>iPhone 18 Pro Max</strong> dự kiến được Apple công bố vào <strong>tháng 9/2026</strong> tại sự
            kiện thường niên, và <strong>bán chính hãng tại Việt Nam từ tháng 10/2026</strong>. Do sử dụng chip 2nm
            với chi phí sản xuất cao hơn, <strong>giá iPhone 18 Pro Max</strong> được dự đoán sẽ tăng so với thế hệ
            trước. Các nguồn tin từ chuỗi cung ứng cho biết giá khởi điểm có thể từ{' '}
            <strong>$1.299 – $1.399 USD</strong> (khoảng <strong>33 – 36 triệu đồng</strong>) cho bản 256GB.
            Phiên bản <strong>2TB</strong> có thể vượt mốc <strong>$1.999 USD</strong> (khoảng{' '}
            <strong>50 triệu đồng</strong>).
          </p>
          <p>
            Với hàng loạt nâng cấp đột phá từ chip 2nm, camera khẩu độ biến thiên, Face ID ẩn dưới màn hình đến
            Apple Intelligence 2.0, <strong>iPhone 18 Pro Max 2026</strong> hứa hẹn là bước tiến lớn nhất của Apple
            trong nhiều năm. Đây chắc chắn sẽ là một trong những <strong>điện thoại Apple</strong> được mong đợi
            nhất năm 2026.
          </p>

          <p className="mt-10 text-[#6b6b6b] dark:text-slate-400 text-sm">
            Nguồn tham khảo: MacRumors, PhoneArena, iClarified
          </p>
        </div>
      </article>
    </div>
  );
}
