"use client";

import { Spinner } from "@/components/ui/spinner";

interface GalleryLoadOverlayProps {
  percent: number;
  emphasized?: boolean;
}

export default function GalleryLoadOverlay({ percent, emphasized }: GalleryLoadOverlayProps) {
  return (
    <div
      className={`galleryLoadOverlay${emphasized ? " galleryLoadOverlay--emphasized" : ""}`}
      role="status"
      aria-live="polite"
    >
      <Spinner className="galleryLoadOverlay__spinner" aria-hidden />
      <span className="galleryLoadOverlay__text">
        Loading gallery… {percent}%
      </span>
    </div>
  );
}
