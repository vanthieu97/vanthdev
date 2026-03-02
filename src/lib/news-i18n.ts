/**
 * News page translations
 */
import type { Locale } from '@/lib/i18n/config';

export type { Locale };

export const NEWS_TRANSLATIONS: Record<
  Locale,
  {
    home: string;
    newsVietnam: string;
    newsFromApi: string;
    today: string;
    topStories: string;
    articlesCount: string;
    apiErrorFallback: string;
    loadMore: string;
    loading: string;
    loadError: string;
    readArticle: string;
    featuredTitle: string;
    featured: Array<{ href: string; title: string; desc: string; tag: string; icon: string }>;
  }
> = {
  vi: {
    home: 'Trang chủ',
    newsVietnam: 'Tin tức Việt Nam',
    newsFromApi: 'Tin tức từ API',
    today: 'Hôm nay',
    topStories: 'Tin nổi bật',
    articlesCount: 'bài viết',
    apiErrorFallback: 'Các bài viết nổi bật phía trên vẫn hiển thị bình thường.',
    loadMore: 'Tải thêm tin',
    loading: 'Đang tải thêm...',
    loadError: 'Không thể tải thêm',
    readArticle: 'Đọc bài',
    featuredTitle: 'Bài viết nổi bật',
    featured: [
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
      {
        href: '/news/vang-iran-chien-tranh-2026',
        title: 'Có nên mua/bán vàng? Chiến tranh Iran',
        desc: 'Giá vàng vượt 5.200 USD đỉnh lịch sử. Nên mua hay bán lúc này? Phân tích Iran, dự báo 2026',
        tag: 'Tài chính',
        icon: '🥇',
      },
      {
        href: '/news/c1-vong-1-8-2026',
        title: 'C1 vòng 1/8 2026 - Man City vs Real Madrid',
        desc: 'Bốc thăm C1: Man City vs Real Madrid, Chelsea vs PSG. Lượt đi 10-11/3, chung kết Budapest 30/5',
        tag: 'Bóng đá',
        icon: '⚽',
      },
      {
        href: '/news/du-bao-gia-vang-2026',
        title: 'Dự báo giá vàng 2026 - UBS 6.200 USD',
        desc: 'UBS, ANZ, Goldman nâng dự báo. Vàng vượt 5.300 USD. Nên mua vàng lúc nào?',
        tag: 'Tài chính',
        icon: '🥇',
      },
      {
        href: '/news/phim-tai-quy-nhap-trang-2-thang-3-2026',
        title: 'Phim Tài Mỹ Tâm, Quỷ nhập tràng 2',
        desc: 'Tài (6/3), Quỷ nhập tràng 2 (13/3). Mỹ Tâm - Mai Tài Phến tái hợp, phim kinh dị hot',
        tag: 'Giải trí',
        icon: '🎬',
      },
      {
        href: '/news/lich-tet-2026',
        title: 'Lịch Tết 2026 - Mùng 1 Tết Bính Ngọ',
        desc: 'Mùng 1 Tết 17/2/2026. Lịch nghỉ Tết, đếm ngược Tết Bính Ngọ',
        tag: 'Văn hóa',
        icon: '🧧',
      },
    ],
  },
  en: {
    home: 'Home',
    newsVietnam: 'Vietnam News',
    newsFromApi: 'News from API',
    today: 'Today',
    topStories: 'Top stories',
    articlesCount: 'articles',
    apiErrorFallback: 'Featured articles above still display normally.',
    loadMore: 'Load more',
    loading: 'Loading...',
    loadError: 'Failed to load',
    readArticle: 'Read article',
    featuredTitle: 'Featured articles',
    featured: [
      {
        href: '/news/israel-tan-cong-iran',
        title: 'Israel attacks Iran',
        desc: 'Khamenei killed, US-Israel airstrike Iran 28/2, new strike wave 1/3/2026',
        tag: 'World',
        icon: '🔥',
      },
      {
        href: '/news/luat-ai-viet-nam-2026',
        title: 'Vietnam AI Law 2026',
        desc: 'AI Law effective 1/3/2026: 8 chapters, 35 articles, risk classification',
        tag: 'Tech',
        icon: '🤖',
      },
      {
        href: '/news/blackpink-100-trieu-subscribers',
        title: 'BLACKPINK 100 million subscribers',
        desc: 'YouTube record, Red Diamond Award, DEADLINE album 27/2/2026',
        tag: 'Entertainment',
        icon: '🎵',
      },
      {
        href: '/news/iphone-18-pro-max',
        title: 'iPhone 18 Pro Max',
        desc: 'A20 Pro 2nm chip, 48MP camera, 6.9" display, under-display Face ID',
        tag: 'Tech',
        icon: '📱',
      },
      {
        href: '/news/vang-iran-chien-tranh-2026',
        title: 'Buy or sell gold? Iran war impact',
        desc: 'Gold hits record above 5,200 USD. Should you buy or sell now? Iran analysis, 2026 forecast',
        tag: 'Finance',
        icon: '🥇',
      },
      {
        href: '/news/c1-vong-1-8-2026',
        title: 'Champions League R16 2026 - Man City vs Real Madrid',
        desc: 'C1 draw: Man City vs Real Madrid, Chelsea vs PSG. First legs 10-11 March, final Budapest 30 May',
        tag: 'Football',
        icon: '⚽',
      },
      {
        href: '/news/du-bao-gia-vang-2026',
        title: 'Gold forecast 2026 - UBS 6,200 USD',
        desc: 'UBS, ANZ, Goldman raise forecasts. Gold above 5,300 USD. When to buy?',
        tag: 'Finance',
        icon: '🥇',
      },
      {
        href: '/news/phim-tai-quy-nhap-trang-2-thang-3-2026',
        title: 'Phim Tài, Quỷ nhập tràng 2 March 2026',
        desc: 'Tài (6/3), Quỷ nhập tràng 2 (13/3). My Tam - Mai Tai Phen reunion, horror sequel',
        tag: 'Entertainment',
        icon: '🎬',
      },
      {
        href: '/news/lich-tet-2026',
        title: 'Tet 2026 schedule - Lunar New Year',
        desc: 'Tet Bính Ngọ 17 Feb 2026. Holiday schedule, Tet countdown',
        tag: 'Culture',
        icon: '🧧',
      },
    ],
  },
};

export function getNewsTranslations(locale: Locale) {
  return NEWS_TRANSLATIONS[locale] ?? NEWS_TRANSLATIONS.vi;
}
