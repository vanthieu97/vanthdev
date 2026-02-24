import { Suspense } from 'react';
import LunarNewYearCountdownPage from '@/app/lunar-new-year-countdown/page';

export default function Home() {
  return (
    <Suspense fallback={<div className="bg-pattern" aria-hidden="true" />}>
      <LunarNewYearCountdownPage />
    </Suspense>
  );
}
