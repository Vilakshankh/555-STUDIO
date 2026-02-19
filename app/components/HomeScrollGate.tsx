"use client";

import { useCallback, useState } from "react";
import ReverseScrollColumns from "./ReverseScrollColumns";
import ScrollLock from "./ScrollLock";
import GalleryLoadOverlay from "./GalleryLoadOverlay";
import ScrollToGallery from "./ScrollToGallery";

interface HomeScrollGateProps {
  heroContent: React.ReactNode;
}

export default function HomeScrollGate({ heroContent }: HomeScrollGateProps) {
  const [loaded, setLoaded] = useState(0);
  const [total, setTotal] = useState(1);
  const [ready, setReady] = useState(false);

  const percent = Math.round((loaded / total) * 100);

  const handleProgress = useCallback((l: number, t: number) => {
    setLoaded(l);
    setTotal(t);
  }, []);

  const handleReady = useCallback(() => {
    setReady(true);
  }, []);

  return (
    <>
      <div className="scroll-shadow-host" aria-hidden="true">
        <div className="scroll-shadow scroll-shadow--top" />
        <div className="scroll-shadow scroll-shadow--bottom" />
      </div>
      <ScrollLock locked={!ready} />
      <section
        className="homeHeroAbout"
        aria-labelledby="about-heading"
      >
        <div className="wrapper">
          <div className="homeHeroAbout__grid">
            {heroContent}
          </div>
        </div>
        <footer className="homeHeroFooter" aria-label="Gallery navigation">
          {ready ? (
            <ScrollToGallery />
          ) : (
            <GalleryLoadOverlay percent={percent} />
          )}
        </footer>
      </section>
      <section id="section-2" className="home-section" aria-label="Content section">
        <ReverseScrollColumns onProgress={handleProgress} onReady={handleReady} />
      </section>
    </>
  );
}
