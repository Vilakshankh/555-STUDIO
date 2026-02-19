"use client";

import { Spinner } from "@/components/ui/spinner";

interface GalleryLoadOverlayProps {
  percent: number;
}

export default function GalleryLoadOverlay({ percent }: GalleryLoadOverlayProps) {
  return (
    <div className="galleryLoadOverlay" role="status" aria-live="polite">
      <Spinner className="galleryLoadOverlay__spinner" aria-hidden />
      <span className="galleryLoadOverlay__text">
        Loading gallery… {percent}%
      </span>
    </div>
  );
}
