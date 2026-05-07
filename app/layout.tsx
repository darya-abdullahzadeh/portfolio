import type { Metadata } from "next";
import { Geist_Mono, DM_Sans, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const headingFont = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const monoFont = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

/** Fancy script for header wordmark only */
const signatureFont = Great_Vibes({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Darya Abdullahzadeh | Full-Stack Engineer",
  description:
    "Full-stack engineer portfolio: APIs, databases, system design, and production-ready web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${headingFont.variable} ${monoFont.variable} ${signatureFont.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

