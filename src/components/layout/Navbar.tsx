'use client';

// =============================================================================
// Navbar Component
// Responsive navigation with mobile menu and theme toggle
// =============================================================================

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/app/providers/theme-provider';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { NAV_ITEMS } from '@/lib/constants';

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { 
    opacity: 1, 
    height: 'auto',
    transition: {
      duration: 0.3,
      ease: 'easeInOut' as const,
    },
  },
  exit: { 
    opacity: 0, 
    height: 0,
    transition: {
      duration: 0.2,
      ease: 'easeInOut' as const,
    },
  },
};

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
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
    <motion.nav
      ref={navRef}
      className="sticky top-0 z-50 bg-(--background)/95 backdrop-blur-md border-b border-(--border) safe-area-inset"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Container>
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-(--nav-height)">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
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
              <span className="font-bold text-lg sm:text-xl tracking-tight text-(--foreground)">
                AGENTS
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item, index) => (
              <motion.div
                key={item.label}
                custom={index}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href={item.href!}
                  className="px-3 xl:px-4 py-2 text-sm font-medium text-(--foreground-muted) hover:text-(--foreground) rounded-lg hover:bg-(--muted) transition-all duration-150"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Side Actions */}
          <motion.div 
            className="flex items-center gap-2 sm:gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="hidden lg:flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg text-(--foreground-muted) hover:text-(--foreground) hover:bg-(--muted) transition-colors"
              aria-label="Toggle theme"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
            </motion.button>

            {/* Contact Link */}
            <Link
              href="/contact"
              className="hidden lg:block text-sm font-medium text-(--foreground-muted) hover:text-(--foreground) transition-colors"
            >
              Contact
            </Link>

            {/* Join Us Button */}
            <Link href="/join" className="hidden lg:block">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="outline" size="md">
                  Join Us
                </Button>
              </motion.div>
            </Link>

            {/* Mobile Menu Toggle */}
            <motion.button
              aria-label="Toggle mobile menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-(--foreground) hover:bg-(--muted) transition-colors touch-target"
              whileTap={{ scale: 0.95 }}
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
            </motion.button>
          </motion.div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="bg-(--background) border-t border-(--border)">
              <Container>
                <div className="py-4 space-y-1">
                  {NAV_ITEMS.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href!}
                        className="block px-4 py-3 text-base font-medium text-(--foreground) hover:bg-(--muted) rounded-lg transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div 
                    className="pt-4 flex flex-col gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link
                      href="/contact"
                      className="block px-4 py-3 text-base font-medium text-(--foreground) hover:bg-(--muted) rounded-lg transition-colors"
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
                      className="flex items-center gap-3 px-4 py-3 text-base font-medium text-(--foreground) hover:bg-(--muted) rounded-lg transition-colors"
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
                  </motion.div>
                </div>
              </Container>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
