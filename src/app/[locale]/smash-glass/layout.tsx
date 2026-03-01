import type { Metadata } from 'next';
import './smash-glass.css';
import { getCanonicalUrl, LOCALES, isValidLocale, type Locale } from '@/lib/i18n/config';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanthdev.com';

function getPageUrl(locale: Locale) {
  return getCanonicalUrl(baseUrl, locale, '/smash-glass');
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
    title: 'Game đập kính xả stress miễn phí | Giải tỏa căng thẳng online',
    description:
      'Game đập kính xả stress cho người dùng Việt Nam. Màn hình là mặt kính ảo, chuột hóa búa, click để đập vỡ kính và giải tỏa căng thẳng. Chơi miễn phí, không cần cài đặt.',
    keywords: [
      'game xả stress',
      'đập kính xả stress',
      'game giải tỏa căng thẳng',
      'stress relief game',
      'game đập kính',
      'xả stress online',
      'game Việt Nam',
    ],
    openGraph: {
      title: 'Game đập kính xả stress | Smash Glass',
      description:
        'Chơi game đập kính ảo để giải tỏa căng thẳng. Chuột thành búa, click đập vỡ kính. Miễn phí cho người dùng Việt Nam.',
      url: pageUrl,
      type: 'website',
      locale: locale === 'vi' ? 'vi_VN' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Game đập kính xả stress miễn phí',
      description: 'Click đập vỡ kính ảo, giải tỏa căng thẳng. Chơi ngay không cần cài đặt.',
    },
    alternates: { canonical: pageUrl, languages },
  };
}

export default function SmashGlassLayout({ children }: { children: React.ReactNode }) {
  return children;
}
