import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tin tức Việt Nam',
  description: 'Tin nổi bật Việt Nam được tổng hợp từ nhiều nguồn.',
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
