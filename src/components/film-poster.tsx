'use client';

import Image from 'next/image';
import { useState } from 'react';

type FilmPosterProps = {
  youtubeId: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function FilmPoster({
  youtubeId,
  alt,
  className = '',
  sizes = '(max-width: 768px) 100vw, 256px',
  priority = false,
}: FilmPosterProps) {
  const [src, setSrc] = useState(`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`);

  const handleError = () => {
    setSrc(`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`);
  };

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      sizes={sizes}
      priority={priority}
      onError={handleError}
    />
  );
}
