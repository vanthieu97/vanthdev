import type { Metadata } from 'next';
import './solar-system.css';
import { getCanonicalUrl, LOCALES, isValidLocale, type Locale } from '@/lib/i18n/config';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanthdev.com';

export const dynamic = 'force-static';

function getPageUrl(locale: Locale) {
  return getCanonicalUrl(baseUrl, locale, '/solar-system');
}

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
    title: 'Hệ Mặt Trời – Mô phỏng Mặt Trời và 8 hành tinh quay quanh',
    description:
      'Mô phỏng hệ Mặt Trời: Mặt Trời ở trung tâm, 8 hành tinh từ Sao Thủy đến Sao Hải Vương quay theo quỹ đạo. Xem trực tuyến, giao diện 3D.',
    keywords: [
      'hệ mặt trời',
      'mô phỏng hệ mặt trời',
      'mặt trời',
      'hành tinh',
      'sao thủy',
      'sao kim',
      'trái đất',
      'sao hỏa',
      'sao mộc',
      'sao thổ',
      'sao thiên vương',
      'sao hải vương',
    ],
    openGraph: {
      title: 'Hệ Mặt Trời – Mô phỏng các hành tinh',
      description: 'Mô phỏng Mặt Trời và 8 hành tinh, quỹ đạo quay quanh. Xem trực tuyến.',
      url: pageUrl,
      type: 'website',
      locale: locale === 'vi' ? 'vi_VN' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Hệ Mặt Trời – Mô phỏng các hành tinh',
      description: 'Xem mô phỏng Mặt Trời và 8 hành tinh quay quanh.',
    },
    alternates: { canonical: pageUrl, languages },
  };
}

export default function SolarSystemLayout({ children }: { children: React.ReactNode }) {
  return children;
}
