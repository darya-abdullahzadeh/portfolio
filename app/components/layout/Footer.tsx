import { getSocialLinks } from '@/lib/cms/queries';
import SocialIcon from './SocialIcon';

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
          {/* Social Links */}
          {socialLinks.length > 0 && (
            <div className="flex gap-8">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 transition-all hover:text-white hover:scale-110"
                  aria-label={social.platform}
                >
                  <SocialIcon platform={social.platform} className="h-6 w-6" />
                </a>
              ))}
            </div>
          )}
          
          {/* Copyright */}
          <p className="text-center text-sm text-white/80">
            © {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

