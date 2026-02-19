"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGalleryNav } from "./GalleryNavProvider";
import ScrollToGallery from "./ScrollToGallery";
import GalleryLoadOverlay from "./GalleryLoadOverlay";

export default function Navbar() {
  const pathname = usePathname();
  const isOnDarkPage = pathname === "/info";
  const isOnHome = pathname === "/";

  const { ready, percent, emphasized } = useGalleryNav();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isOnHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  return (
    <nav
      id="primary-navigation"
      className={`primary-navigation ${isOnDarkPage ? "primary-navigation--on-dark" : ""}`}
      aria-label="Primary navigation"
    >
      <div className="primary-navigation__left">
        <Link href="/" className="primary-navigation__logo primary-navigation__logo--button" aria-label="Go to Work" onClick={handleLogoClick}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/OUTLINE logo black@2x 3.svg"
            alt="555 Studio"
            width={48}
            height={26}
            className={isOnDarkPage ? "primary-navigation__logo-img--invert" : ""}
          />
        </Link>
      </div>

      {isOnHome && (
        <div className="primary-navigation__center" aria-label="Gallery navigation">
          {ready ? (
            <ScrollToGallery />
          ) : (
            <GalleryLoadOverlay percent={percent} emphasized={emphasized} />
          )}
        </div>
      )}

      <div className="primary-navigation__right">
        <ul id="menu-header" className="menu">
          <li>
            <Link href="/info">OUR WHY</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
