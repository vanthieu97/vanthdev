import type { Metadata } from 'next';
import './smash-glass.css';

export const metadata: Metadata = {
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
    type: 'website',
    locale: 'vi_VN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Game đập kính xả stress miễn phí',
    description: 'Click đập vỡ kính ảo, giải tỏa căng thẳng. Chơi ngay không cần cài đặt.',
  },
  alternates: { canonical: '/smash-glass' },
};

export default function SmashGlassLayout({ children }: { children: React.ReactNode }) {
  return children;
}
