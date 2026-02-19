"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isOnDarkPage = pathname === "/info";
  const isOnHome = pathname === "/";

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
      <ul id="menu-header" className="menu">
        <li>
          <Link href="/info">OUR WHY</Link>
        </li>
      </ul>
    </nav>
  );
}
