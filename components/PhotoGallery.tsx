"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

interface PhotoGalleryProps {
  photos: string[];
}

export const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  const [index, setIndex] = useState(0);
  const total = photos.length;

  const showPrevious = () => setIndex((current) => (current - 1 + total) % total);
  const showNext = () => setIndex((current) => (current + 1) % total);

  const navButtonClass =
    "absolute top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background text-ink shadow-md transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

  return (
    <section aria-label="Photo gallery" className="relative">
      <PhotoPlaceholder label={photos[index]} className="aspect-video w-full" />
      <button
        type="button"
        onClick={showPrevious}
        aria-label="Previous photo"
        className={`${navButtonClass} left-3`}
      >
        <Icon name="chevron-left" className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={showNext}
        aria-label="Next photo"
        className={`${navButtonClass} right-3`}
      >
        <Icon name="chevron-right" className="h-5 w-5" />
      </button>
      <p className="mt-2 text-right text-xs text-muted" aria-live="polite">
        {index + 1} / {total}
      </p>
    </section>
  );
};
