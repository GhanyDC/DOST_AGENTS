// =============================================================================
// Footer Component
// Site footer with organization info, contact, social links, and navigation
// =============================================================================

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import {
  ORGANIZATION,
  CONTACT_INFO,
  SOCIAL_LINKS,
  FOOTER_NAV,
} from '@/lib/constants';

// Social Icons Component
function SocialIcon({ platform }: { platform: string }) {
  if (platform === 'Facebook') {
    return (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5L14.5.5C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
      </svg>
    );
  }
  if (platform === 'Instagram') {
    return (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.78,2.71-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.71,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.78-2.71,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.71-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z" />
      </svg>
    );
  }
  return null;
}

export function Footer() {
  return (
    <footer className="bg-[var(--background)] border-t border-[var(--border)] py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
              {ORGANIZATION.name}
            </h3>
            <p className="text-sm text-[var(--foreground-muted)] mb-6">
              {ORGANIZATION.fullName}
            </p>
            <div>
              <p className="text-xs text-[var(--foreground-muted)] uppercase tracking-wider mb-2">
                Office
              </p>
              <p className="text-sm text-[var(--foreground)]">
                {ORGANIZATION.office}
              </p>
              <p className="text-sm text-[var(--foreground-muted)]">
                {ORGANIZATION.department}
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs text-[var(--foreground-muted)] uppercase tracking-wider mb-4">
              Contact us
            </h4>
            <div className="space-y-3">
              <p className="text-sm text-[var(--foreground)]">
                {CONTACT_INFO.phone}
              </p>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-sm text-[var(--foreground)] hover:text-[var(--color-primary)] transition-colors"
              >
                {CONTACT_INFO.email}
              </a>
            </div>
            
            {/* Social Links */}
            <div className="mt-6">
              <p className="text-xs text-[var(--foreground-muted)] uppercase tracking-wider mb-4">
                Social media
              </p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-[var(--border)] text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:border-[var(--foreground-muted)] transition-colors"
                    aria-label={social.platform}
                  >
                    <SocialIcon platform={social.platform} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs text-[var(--foreground-muted)] uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <nav className="space-y-3">
              {FOOTER_NAV.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-[var(--foreground)] hover:text-[var(--color-primary)] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Empty column for spacing on larger screens */}
          <div className="hidden lg:block" />
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <p className="text-sm text-[var(--foreground-muted)] text-center">
            © {new Date().getFullYear()} {ORGANIZATION.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
