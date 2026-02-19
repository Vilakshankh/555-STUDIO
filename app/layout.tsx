import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

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
    <html lang="en" className={hostGrotesk.variable}>
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        
        <Navbar />
        <main id="main-content" className="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
