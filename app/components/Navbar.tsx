"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Only apply hero-based visibility on the home page
    if (pathname !== "/") {
      setIsVisible(true);
      return;
    }

    // Find the hero element
    const heroElement = document.querySelector(".home-hero");
    if (!heroElement) {
      setIsVisible(true);
      return;
    }

    // Set up IntersectionObserver to watch the hero
    // Negative bottom rootMargin: fade out before the second section enters view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Show navbar when hero is intersecting, hide when it's not
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -150px 0px",
      }
    );

    observer.observe(heroElement);

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  const isOnDarkPage = pathname === "/info";

  return (
    <nav
      id="primary-navigation"
      className={`primary-navigation ${!isVisible ? "primary-navigation--hidden" : ""} ${isOnDarkPage ? "primary-navigation--on-dark" : ""}`}
      aria-label="Primary navigation"
    >
      <ul id="menu-header" className="menu">
        <li>
          <Link href="/">Work</Link>
        </li>
        <li>
          <Link href="/info">Info</Link>
        </li>
      </ul>
    </nav>
  );
}
