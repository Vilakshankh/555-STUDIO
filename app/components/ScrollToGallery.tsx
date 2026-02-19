"use client";

interface ScrollToGalleryProps {
  disabled?: boolean;
}

export default function ScrollToGallery({ disabled = false }: ScrollToGalleryProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (disabled) return;
    const target = document.getElementById("section-2");
    if (target) {
      window.scrollTo({ top: target.offsetTop, behavior: "instant" });
    }
  };

  return (
    <a
      className={`homeHeroAbout__scrollCue${disabled ? " homeHeroAbout__scrollCue--disabled" : ""}`}
      href="#section-2"
      onClick={handleClick}
      aria-label={disabled ? "Gallery loading, please wait" : "View gallery"}
      aria-disabled={disabled}
    >
      View gallery
    </a>
  );
}
