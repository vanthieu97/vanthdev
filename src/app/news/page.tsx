import { VietnamNewsContent } from './vietnam-news-content';

export const dynamic = 'force-dynamic';
export const revalidate = 300;

export default async function NewsPage() {
  return <VietnamNewsContent />;
}
