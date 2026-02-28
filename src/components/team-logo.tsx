'use client';

import Image from 'next/image';
import { useState } from 'react';
import { getTeamLogoUrls } from '@/lib/champions-league';

type TeamLogoProps = {
  team: string;
  size?: number;
  className?: string;
};

/** Lấy chữ cái đầu để hiển thị khi logo lỗi */
function getInitial(team: string): string {
  const first = team.trim().charAt(0).toUpperCase();
  if (/[A-Za-z0-9]/.test(first)) return first;
  return '?';
}

export function TeamLogo({ team, size = 18, className = '' }: TeamLogoProps) {
  const urls = getTeamLogoUrls(team);
  const [urlIndex, setUrlIndex] = useState(0);
  const [showFallback, setShowFallback] = useState(false);

  const currentUrl = urls[urlIndex];

  const handleError = () => {
    if (urlIndex + 1 < urls.length) {
      setUrlIndex((i) => i + 1);
    } else {
      setShowFallback(true);
    }
  };

  if (!currentUrl || showFallback) {
    return (
      <span
        className={`shrink-0 rounded-full flex items-center justify-center text-[10px] font-bold
          bg-[#e0e0e0] dark:bg-[#4a4a5a] text-[#666] dark:text-slate-300 ${className}`}
        style={{ width: size, height: size }}
        aria-hidden
      >
        {getInitial(team)}
      </span>
    );
  }

  return (
    <Image
      src={currentUrl}
      alt=""
      width={size}
      height={size}
      className={`shrink-0 rounded-full object-contain ${className}`}
      unoptimized
      onError={handleError}
    />
  );
}
