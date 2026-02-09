import type { Metadata } from "next";
import { Geist_Mono, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Image from "next/image";
import { StarField } from "./components/StarField";

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

export const metadata: Metadata = {
  title: "Darya Abdullahzadeh | Full Stack Developer",
  description: "Portfolio showcasing software development projects, skills, and experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${headingFont.variable} ${monoFont.variable} antialiased`}
      >
        <div className="fixed inset-0 -z-10">
          <div className="relative w-full h-full">
            <Image
              src="/background.png"
              alt="Site background"
              fill
              priority
              quality={75}
              sizes="100vw"
              style={{
                objectFit: 'cover',
                zIndex: 0,
              }}
            />
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                zIndex: 1,
              }}
            />
            <StarField />
          </div>
        </div>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

