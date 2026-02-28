import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanthdev.com';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'vanthdev.com - Tin tức, Đếm ngược Tết, Cúp C1',
    short_name: 'vanthdev',
    description:
      'Tin tức Việt Nam, đếm ngược Tết Nguyên đán, Cúp C1 Champions League, Hệ Mặt Trời.',
    start_url: '/',
    display: 'standalone',
    background_color: '#faf8f5',
    theme_color: '#c41e3a',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'vi',
    icons: [
      {
        src: '/lunar-favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/lunar-favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
    ],
    categories: ['news', 'lifestyle', 'sports'],
  };
}
