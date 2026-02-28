'use client';

import Image from 'next/image';
import { useState } from 'react';

const PLACEHOLDER_SRC = '/film-poster-placeholder.svg';

type FilmPosterProps = {
  youtubeId: string;
  /** URL ảnh trực tiếp, dùng khi không có youtubeId (vd: poster Mùi phở) */
  posterUrl?: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function FilmPoster({
  youtubeId,
  posterUrl,
  alt,
  className = '',
  sizes = '(max-width: 768px) 100vw, 256px',
  priority = false,
}: FilmPosterProps) {
  const [src, setSrc] = useState(() => {
    if (youtubeId) return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
    if (posterUrl) return posterUrl;
    return PLACEHOLDER_SRC;
  });
  const [fallbackStep, setFallbackStep] = useState(0);

  const handleError = () => {
    if (youtubeId) {
      if (fallbackStep === 0) {
        setFallbackStep(1);
        setSrc(`https://img.youtube.com/vi/${youtubeId}/sddefault.jpg`);
      } else if (fallbackStep === 1) {
        setFallbackStep(2);
        setSrc(`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`);
      } else {
        setSrc(posterUrl ?? PLACEHOLDER_SRC);
      }
    } else {
      setSrc(posterUrl ?? PLACEHOLDER_SRC);
    }
  };

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      sizes={sizes}
      quality={90}
      priority={priority}
      onError={handleError}
    />
  );
}
