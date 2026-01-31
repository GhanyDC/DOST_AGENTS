'use client';

// =============================================================================
// Navbar Component
// Responsive navigation with mobile menu and theme toggle
// =============================================================================

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/app/providers/theme-provider';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { NAV_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const navRef = useRef<HTMLElement | null>(null);

  // Close mobile menu on escape key
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    }
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 bg-[var(--background)]/95 backdrop-blur-md border-b border-[var(--border)] safe-area-inset"
    >
      <Container>
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-[var(--nav-height)]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 hover:opacity-90 transition-opacity"
          >
            <Image
              src="/agents_logo.png"
              alt="AGENTS Logo"
              width={32}
              height={32}
              className="object-contain sm:w-10 sm:h-10"
            />
            <span className="font-bold text-lg sm:text-xl tracking-tight text-[var(--foreground)]">
              AGENTS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href!}
                className="px-3 xl:px-4 py-2 text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] rounded-lg hover:bg-[var(--muted)] transition-all duration-150"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="hidden lg:flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
              aria-label="Toggle theme"
            >
              {resolvedTheme === 'dark' ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* Contact Link */}
            <Link
              href="/contact"
              className="hidden lg:block text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              Contact
            </Link>

            {/* Join Us Button */}
            <Link href="/join" className="hidden lg:block">
              <Button variant="outline" size="md">
                Join Us
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              aria-label="Toggle mobile menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors touch-target"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    mobileOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300 ease-in-out',
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="bg-[var(--background)] border-t border-[var(--border)]">
          <Container>
            <div className="py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="block px-4 py-3 text-base font-medium text-[var(--foreground)] hover:bg-[var(--muted)] rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="block px-4 py-3 text-base font-medium text-[var(--foreground)] hover:bg-[var(--muted)] rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact
                </Link>
                <div className="px-4">
                  <Link href="/join" className="block w-full">
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full"
                      onClick={() => setMobileOpen(false)}
                    >
                      Join Us
                    </Button>
                  </Link>
                </div>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-3 px-4 py-3 text-base font-medium text-[var(--foreground)] hover:bg-[var(--muted)] rounded-lg transition-colors"
                >
                  {resolvedTheme === 'dark' ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      Light Mode
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                      Dark Mode
                    </>
                  )}
                </button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </nav>
  );
}
