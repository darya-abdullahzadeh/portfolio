'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#systems', label: 'Systems' },
];

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const element = document.querySelector(href);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#eadcf6] bg-[#fffdfde6] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          onClick={(e) => handleScroll(e, '#home')}
          className="cursor-pointer font-normal tracking-wide text-[#5b4674] transition-colors hover:text-[#8f6ab6] [font-family:var(--font-signature)] text-[1.85rem] leading-none md:text-[2.15rem]"
        >
          Darya A.
        </a>
        <ul className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="cursor-pointer text-sm font-medium text-[#6f5b88] transition-colors hover:text-[#8f6ab6]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#e2d1f2] bg-white text-[#6f5b88] md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {mobileMenuOpen && (
        <div className="border-t border-[#eadcf6] bg-[#fffdfd] md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    handleScroll(e, item.href);
                    setMobileMenuOpen(false);
                  }}
                  className="block cursor-pointer py-2 text-sm font-medium text-[#6f5b88] transition-colors hover:text-[#8f6ab6]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

