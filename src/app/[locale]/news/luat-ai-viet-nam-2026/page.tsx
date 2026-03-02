import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { FeaturedArticles } from '../featured-articles';
import { getCanonicalUrl, LOCALES, isValidLocale, type Locale } from '@/lib/i18n/config';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanthdev.com';
const SLUG = 'luat-ai-viet-nam-2026';

function getPageUrl(locale: Locale) {
  return getCanonicalUrl(baseUrl, locale, `/news/${SLUG}`);
}

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
  title: 'Luật AI Việt Nam 2026 - Luật Trí tuệ nhân tạo có hiệu lực 1/3/2026',
  description:
    'Luật Trí tuệ nhân tạo Việt Nam (Luật AI) số 134/2025/QH15 chính thức có hiệu lực từ 1/3/2026. Đạo luật AI đầu tiên của Việt Nam với 8 chương, 35 điều: phân loại rủi ro AI, gắn nhãn sản phẩm AI, sandbox cho startup, quy định AI trong ngân hàng.',
  keywords: [
    'Luật AI Việt Nam',
    'Luật trí tuệ nhân tạo',
    'Luật AI 2026',
    'Luật AI có hiệu lực',
    'AI Việt Nam',
    'trí tuệ nhân tạo Việt Nam',
    'Luật 134/2025',
    'quy định AI',
    'AI trong ngân hàng',
    'gắn nhãn AI',
    'sandbox AI',
    'phân loại rủi ro AI',
    'Luật AI có hiệu lực 1/3/2026',
    'đạo luật AI đầu tiên Việt Nam',
    'Quỹ phát triển AI quốc gia',
    'mô hình ngôn ngữ lớn tiếng Việt',
  ],
  openGraph: {
    title: 'Luật AI Việt Nam 2026 - Luật Trí tuệ nhân tạo có hiệu lực 1/3/2026',
    description:
      'Luật AI số 134/2025/QH15 có hiệu lực 1/3/2026. Đạo luật AI đầu tiên của Việt Nam: phân loại rủi ro, gắn nhãn AI, sandbox startup, quy định AI ngân hàng.',
    url: pageUrl,
    siteName: 'vanthdev.com',
    type: 'article',
    locale: 'vi_VN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luật AI Việt Nam 2026 - Có hiệu lực từ 1/3/2026',
    description: 'Luật Trí tuệ nhân tạo Việt Nam chính thức có hiệu lực. Phân loại rủi ro AI, gắn nhãn sản phẩm AI, sandbox cho startup.',
  },
  alternates: {
    canonical: pageUrl,
    languages,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  };
}

function buildNewsArticleJsonLd(locale: Locale) {
  const pageUrl = getPageUrl(locale);
  return {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: 'Luật AI Việt Nam 2026 - Luật Trí tuệ nhân tạo có hiệu lực 1/3/2026',
  description:
    'Luật Trí tuệ nhân tạo Việt Nam (Luật 134/2025/QH15) chính thức có hiệu lực từ 1/3/2026. Đạo luật AI đầu tiên của Việt Nam với 8 chương, 35 điều.',
  url: pageUrl,
  datePublished: '2026-03-01',
  dateModified: '2026-03-01',
  author: { '@type': 'Organization', name: 'vanthdev.com' },
  publisher: { '@type': 'Organization', name: 'vanthdev.com', url: baseUrl },
  mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
  };
}

const BREADCRUMB_ITEMS = [
  { href: '/', label: 'Trang chủ' },
  { href: '/news', label: 'Tin tức' },
  { label: 'Luật AI Việt Nam 2026' },
];

export default function LuatAIVietNam2026Page({ params }: { params: { locale: string } }) {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : 'vi';
  const pageUrl = getPageUrl(locale);
  const newsArticleJsonLd = buildNewsArticleJsonLd(locale);

  return (
    <div className="bg-[#faf8f5] dark:bg-[#0a0f1a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleJsonLd) }}
      />
      <article className="max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12">
        <Breadcrumb items={BREADCRUMB_ITEMS} currentPageUrl={pageUrl} locale={locale} />

        <header className="mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c41e3a]/10 dark:bg-[#c41e3a]/20 text-[#c41e3a] dark:text-amber-400 text-sm font-semibold mb-4">
            🤖 Công nghệ
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] dark:text-white/95 tracking-tight leading-tight">
            Luật Trí tuệ nhân tạo Việt Nam – Có hiệu lực từ 1/3/2026
          </h1>
          <p className="mt-4 text-[#6b6b6b] dark:text-slate-400 text-base md:text-lg">
            Cập nhật: 01/3/2026 • Luật AI • Công nghệ
          </p>
        </header>

        <div className="space-y-6 text-[#1a1a1a] dark:text-slate-300 leading-relaxed">
          <p className="text-lg leading-relaxed">
            Ngày <strong>1/3/2026</strong>, <strong>Luật Trí tuệ nhân tạo Việt Nam</strong> (Luật số{' '}
            <strong>134/2025/QH15</strong>) chính thức có hiệu lực – đánh dấu bước ngoặt lịch sử khi Việt Nam trở
            thành một trong những quốc gia đầu tiên tại Đông Nam Á có <strong>đạo luật AI</strong> riêng. Luật được
            Quốc hội khóa XV thông qua ngày 10/12/2025 với <strong>429/434 đại biểu tán thành</strong> (tỷ lệ
            98,85%), gồm <strong>8 chương, 35 điều</strong>, xác lập khung pháp lý toàn diện cho việc nghiên cứu,
            phát triển và ứng dụng <strong>trí tuệ nhân tạo tại Việt Nam</strong>.
          </p>

          <span className="sr-only">
            Luật AI Việt Nam 2026, Luật trí tuệ nhân tạo có hiệu lực, quy định AI Việt Nam, Luật 134/2025/QH15,
            đạo luật AI đầu tiên Việt Nam, AI trong ngân hàng Việt Nam, gắn nhãn sản phẩm AI, sandbox AI startup,
            phân loại rủi ro AI cao trung bình thấp, Quỹ phát triển AI quốc gia, mô hình ngôn ngữ lớn tiếng Việt
          </span>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            Nguyên tắc cốt lõi: Con người làm trung tâm
          </h2>
          <p>
            <strong>Luật AI Việt Nam</strong> khẳng định nguyên tắc <strong>con người làm trung tâm</strong> –
            mọi hệ thống trí tuệ nhân tạo phải được thiết kế và vận hành nhằm <strong>phục vụ con người</strong>,
            bảo đảm quyền và lợi ích hợp pháp của cá nhân, tổ chức. AI không được thay thế quyền quyết định cuối
            cùng của con người trong các lĩnh vực ảnh hưởng trực tiếp đến quyền lợi công dân. Luật cũng quy định
            rõ trách nhiệm giải trình của tổ chức, cá nhân phát triển và triển khai hệ thống AI, đảm bảo tính
            minh bạch, công bằng và không phân biệt đối xử.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            Phân loại rủi ro AI: 3 mức độ
          </h2>
          <p>
            Một trong những điểm nổi bật của <strong>Luật AI 2026</strong> là hệ thống{' '}
            <strong>phân loại rủi ro AI</strong> theo 3 mức: <strong>cao, trung bình và thấp</strong>. Hệ thống
            AI rủi ro cao (như AI trong y tế, tư pháp, tuyển dụng, chấm điểm tín dụng) phải tuân thủ các yêu cầu
            nghiêm ngặt về đánh giá tác động, kiểm toán định kỳ và giám sát liên tục. AI rủi ro trung bình cần
            đăng ký và báo cáo với cơ quan quản lý. AI rủi ro thấp được khuyến khích phát triển tự do nhưng vẫn
            phải tuân thủ các nguyên tắc đạo đức cơ bản. Cách tiếp cận này tương tự{' '}
            <strong>EU AI Act</strong> nhưng được điều chỉnh phù hợp với bối cảnh Việt Nam.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            Gắn nhãn sản phẩm AI và bảo vệ người dùng
          </h2>
          <p>
            Luật yêu cầu bắt buộc <strong>gắn nhãn sản phẩm AI</strong> đối với nội dung do trí tuệ nhân tạo
            tạo ra, bao gồm <strong>âm thanh, hình ảnh và video</strong>. Mọi nội dung deepfake hoặc được tạo
            bởi AI phải được đánh dấu rõ ràng để người dùng nhận biết. Đây là biện pháp quan trọng nhằm chống
            tin giả, bảo vệ quyền lợi người tiêu dùng và ngăn chặn việc lạm dụng AI để lừa đảo. Luật cũng{' '}
            <strong>cấm AI khai thác khách hàng yếu thế</strong> – nghiêm cấm sử dụng trí tuệ nhân tạo để
            thao túng, lừa đảo hoặc khai thác người già, trẻ em và các nhóm dễ bị tổn thương.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            AI trong ngân hàng và tài chính
          </h2>
          <p>
            Theo <strong>quy định AI trong ngân hàng</strong>, các tổ chức tín dụng phải{' '}
            <strong>thông báo rõ ràng cho khách hàng khi sử dụng AI chatbot</strong> trong giao dịch và tư vấn
            tài chính. Khách hàng có quyền yêu cầu được phục vụ bởi nhân viên thật thay vì hệ thống AI. Đáng
            chú ý, theo khảo sát mới nhất, <strong>94% tổ chức tài chính tại Việt Nam</strong> cho biết sẽ{' '}
            <strong>tăng đầu tư vào AI trong năm 2026</strong>, cho thấy ngành tài chính đang đón nhận xu hướng
            AI mạnh mẽ nhưng cần khung pháp lý rõ ràng để phát triển bền vững. Luật cũng yêu cầu AI trong
            lĩnh vực tài chính phải được kiểm toán thuật toán định kỳ, đảm bảo không có thiên kiến trong việc
            đánh giá tín dụng và phê duyệt khoản vay.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            Sandbox AI và chính sách hỗ trợ startup
          </h2>
          <p>
            Để thúc đẩy đổi mới sáng tạo, Luật thiết lập cơ chế <strong>sandbox AI</strong> (thử nghiệm có
            kiểm soát) cho phép các <strong>startup</strong> và doanh nghiệp công nghệ thử nghiệm sản phẩm AI
            mới trong môi trường được giám sát, với <strong>ưu đãi ở mức cao nhất</strong> về thuế, tiếp cận
            dữ liệu và hỗ trợ kỹ thuật. Luật cũng thành lập <strong>Quỹ phát triển AI quốc gia</strong> nhằm
            tài trợ nghiên cứu, đào tạo nhân lực và hỗ trợ các dự án AI trọng điểm. Đặc biệt, Chính phủ đặt
            mục tiêu phát triển <strong>mô hình ngôn ngữ lớn tiếng Việt</strong> theo hướng{' '}
            <strong>mã nguồn mở</strong>, tạo nền tảng cho hệ sinh thái AI nội địa, giảm phụ thuộc vào các
            nền tảng AI nước ngoài.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4 text-[#1a1a1a] dark:text-white/95">
            Ý nghĩa và tác động
          </h2>
          <p>
            Việc <strong>Luật AI có hiệu lực</strong> từ ngày 1/3/2026 đánh dấu bước tiến quan trọng trong
            chiến lược chuyển đổi số quốc gia. Việt Nam trở thành quốc gia thứ hai tại ASEAN (sau Singapore
            với các hướng dẫn không bắt buộc) có khung pháp lý chính thức về <strong>trí tuệ nhân tạo</strong>.
            Luật tạo hành lang pháp lý rõ ràng, vừa bảo vệ quyền lợi người dân, vừa khuyến khích đổi mới
            sáng tạo và thu hút đầu tư vào lĩnh vực AI. Các chuyên gia đánh giá đây là đạo luật cân bằng
            giữa quản lý rủi ro và thúc đẩy phát triển, phù hợp với xu hướng quản trị AI toàn cầu.
          </p>

          <p className="mt-10 text-[#6b6b6b] dark:text-slate-400 text-sm">
            Nguồn tham khảo: Quốc hội, VnEconomy, QDND, Vietnam.vn
          </p>
        </div>

      </article>
      <div className="mt-12 md:mt-16 pb-8">
        <FeaturedArticles excludeHref="/news/luat-ai-viet-nam-2026" titleVariant="related" locale={locale} />
      </div>
    </div>
  );
}
