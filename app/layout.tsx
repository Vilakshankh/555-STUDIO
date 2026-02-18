import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CornerOverlay from "./components/CornerOverlay";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "555 Studio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <CornerOverlay />
        <Navbar />
        <main id="main-content" className="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
