import type { Metadata } from 'next';
import './solar-system.css';

export const dynamic = 'force-static';

export const metadata: Metadata = {
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
    type: 'website',
    locale: 'vi_VN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hệ Mặt Trời – Mô phỏng các hành tinh',
    description: 'Xem mô phỏng Mặt Trời và 8 hành tinh quay quanh.',
  },
  alternates: { canonical: '/solar-system' },
};

export default function SolarSystemLayout({ children }: { children: React.ReactNode }) {
  return children;
}
