'use client';

// =============================================================================
// Navbar Component
// Responsive navigation with smart show/hide on scroll
// =============================================================================

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/app/providers/theme-provider';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { NAV_ITEMS } from '@/lib/constants';

const navItemVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4 + i * 0.08,
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1] as const,
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
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: { 
    opacity: 0, 
    height: 0,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasEntered, setHasEntered] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const navRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Smart scroll handler: hide on scroll-down, show on scroll-up
  const updateNavbar = useCallback(() => {
    const scrollY = window.scrollY;
    const SCROLL_THRESHOLD = 50; // Always visible in this zone
    const DELTA = 5; // Minimum scroll distance to trigger hide/show

    // Always show at the very top of the page
    if (scrollY <= SCROLL_THRESHOLD) {
      setIsVisible(true);
      setIsScrolled(false);
      lastScrollY.current = scrollY;
      ticking.current = false;
      return;
    }

    setIsScrolled(true);

    const delta = scrollY - lastScrollY.current;

    if (Math.abs(delta) < DELTA) {
      ticking.current = false;
      return;
    }

    if (delta > 0) {
      // Scrolling DOWN — hide navbar
      setIsVisible(false);
      // Close mobile menu when hiding
      setMobileOpen(false);
    } else {
      // Scrolling UP — show navbar
      setIsVisible(true);
    }

    lastScrollY.current = scrollY;
    ticking.current = false;
  }, []);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(updateNavbar);
      ticking.current = true;
    }
  }, [updateNavbar]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Attach scroll listener
  useEffect(() => {
    lastScrollY.current = window.scrollY;
    setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Entrance animation on mount
  useEffect(() => {
    // Small delay so the initial CSS transition plays
    const timer = setTimeout(() => setHasEntered(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav
      ref={navRef}
      className={[
        'fixed top-0 left-0 right-0 z-50',
        isScrolled
          ? 'bg-[#0a0f1a]/80 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.3)] border-b border-white/[0.06]'
          : 'bg-transparent shadow-none border-b border-transparent',
      ].join(' ')}
      style={{
        transform: `translateY(${hasEntered && isVisible ? '0%' : '-100%'})`,
        opacity: hasEntered ? 1 : 0,
        transition: 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease, background-color 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        willChange: 'transform',
      }}
    >
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-[4.5rem]">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 hover:opacity-90 transition-opacity"
            >
              <Image
                src="/agents_logo.png"
                alt="AGENTS Logo"
                width={36}
                height={36}
                className="object-contain sm:w-10 sm:h-10"
              />
              <span
                className="font-bold text-lg sm:text-xl tracking-tight text-white"
                style={{ fontFamily: 'var(--font-manrope)' }}
              >
                AGENTS
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation — centered */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_ITEMS.map((item, index) => {
              const isActive = pathname === item.href || (item.href === '/' && pathname === '/home');
              return (
                <motion.div
                  key={item.label}
                  custom={index}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={item.href!}
                    className={[
                      'relative px-4 xl:px-5 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                      isActive
                        ? 'text-[#FFE500]'
                        : 'text-white/60 hover:text-white hover:bg-white/[0.04]',
                    ].join(' ')}
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] w-5 bg-[#FFE500] rounded-full"
                        layoutId="nav-indicator"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <motion.div 
            className="flex items-center gap-2.5 sm:gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Contact Button */}
            <Link href="/contact" className="hidden lg:block">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outline"
                  size="md"
                  className="border-white/20 hover:bg-white/[0.06] hover:border-white/30 text-white"
                >
                  Contact
                </Button>
              </motion.div>
            </Link>

            {/* Join Us Button */}
            <Link href="/join" className="hidden lg:block">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="primary" size="md">
                  Join Us
                </Button>
              </motion.div>
            </Link>

            {/* Mobile Menu Toggle */}
            <motion.button
              aria-label="Toggle mobile menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/[0.06] transition-colors touch-target"
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-6 h-6 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
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
            <div className="bg-[#0a0f1a]/95 backdrop-blur-xl border-t border-white/[0.06]">
              <Container>
                <div className="py-4 space-y-1">
                  {NAV_ITEMS.map((item, index) => {
                    const isActive = pathname === item.href || (item.href === '/' && pathname === '/home');
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href!}
                          className={[
                            'block px-4 py-3 text-base font-medium rounded-lg transition-colors',
                            isActive
                              ? 'text-[#FFE500] bg-white/[0.04]'
                              : 'text-white/70 hover:text-white hover:bg-white/[0.04]',
                          ].join(' ')}
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                  <motion.div 
                    className="pt-4 flex flex-col gap-3 border-t border-white/[0.06] mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link
                      href="/contact"
                      className="block px-4 py-3 text-base font-medium text-white/70 hover:text-white hover:bg-white/[0.04] rounded-lg transition-colors"
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
                      className="flex items-center gap-3 px-4 py-3 text-base font-medium text-white/70 hover:text-white hover:bg-white/[0.04] rounded-lg transition-colors"
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
    </nav>
  );
}
