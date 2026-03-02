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
    ],
  },
};

export function getNewsTranslations(locale: Locale) {
  return NEWS_TRANSLATIONS[locale] ?? NEWS_TRANSLATIONS.vi;
}
