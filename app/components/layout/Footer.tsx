export const revalidate = 3600; // Revalidate every hour

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const professionalLinks = [
    { label: 'GitHub', href: 'https://github.com/darya-abdullahzadeh' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/darya-abdullahzadeh/' },
    { label: 'Resume', href: '/resume.pdf' },
    { label: 'Email', href: 'mailto:abdullahzadeh.darya@gmail.com' },
  ];

  const sectionLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Systems', href: '#systems' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative mt-8 overflow-hidden border-t border-[#eadcf6] bg-[#fff9ff]">
      <div className="pointer-events-none absolute -left-10 top-0 h-24 w-24 rounded-full bg-[#f0defd] blur-xl" />
      <div className="pointer-events-none absolute -right-8 bottom-0 h-24 w-24 rounded-full bg-[#ffe4ef] blur-xl" />
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-[#735f8d]">
            © {currentYear} Darya Abdullahzadeh. All rights reserved.
          </p>

          <nav aria-label="Professional links">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {professionalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#7f6b99] transition-colors hover:text-[#946fbd]"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <nav aria-label="Section links" className="mt-4">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {sectionLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-[#9a89ae] transition-colors hover:text-[#946fbd]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

