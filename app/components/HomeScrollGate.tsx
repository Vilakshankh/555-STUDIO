"use client";

import { useCallback } from "react";
import ReverseScrollColumns from "./ReverseScrollColumns";
import { useGalleryNav } from "./GalleryNavProvider";

interface HomeScrollGateProps {
  heroContent: React.ReactNode;
}

export default function HomeScrollGate({ heroContent }: HomeScrollGateProps) {
  const { setProgress, setReady } = useGalleryNav();

  const handleProgress = useCallback((l: number, t: number) => {
    setProgress(l, t);
  }, [setProgress]);

  const handleReady = useCallback(() => {
    setReady();
  }, [setReady]);

  return (
    <>
      <div className="scroll-shadow-host" aria-hidden="true">
        <div className="scroll-shadow scroll-shadow--top" />
        <div className="scroll-shadow scroll-shadow--bottom" />
      </div>
      <section
        className="homeHeroAbout"
        aria-labelledby="about-heading"
      >
        <div className="wrapper">
          <div className="homeHeroAbout__grid">
            {heroContent}
          </div>
        </div>
      </section>
      <section id="section-2" className="home-section" aria-label="Content section">
        <ReverseScrollColumns onProgress={handleProgress} onReady={handleReady} />
      </section>
    </>
  );
}
