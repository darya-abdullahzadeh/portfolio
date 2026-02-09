export const revalidate = 3600; // Revalidate every hour

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      id: 'github',
      url: 'https://github.com/darya-abdullahzadeh',
      platform: 'github',
    },
    {
      id: 'linkedin',
      url: 'https://www.linkedin.com/in/darya-abdullahzadeh/',
      platform: 'linkedin',
    },
    {
      id: 'email',
      url: 'mailto:abdullahzadeh.darya@gmail.com',
      platform: 'email',
    },
  ]

  return (
    <footer className="bg-transparent">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center gap-8">
          
          {/* Copyright */}
          <p className="text-center text-sm text-white/80">
            © {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

