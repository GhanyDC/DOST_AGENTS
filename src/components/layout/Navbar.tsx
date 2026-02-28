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
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { NAV_ITEMS } from '@/lib/constants';
import type { NavItem } from '@/types';

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

const dropdownVariants = {
  hidden: { opacity: 0, y: -4, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -4,
    scale: 0.98,
    transition: {
      duration: 0.15,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasEntered, setHasEntered] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
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
    setOpenDropdown(null);
    setMobileDropdown(null);
  }, [pathname]);

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  /** Check if any dropdown child is active */
  const isDropdownActive = (item: NavItem) =>
    item.dropdown?.some((d) => pathname?.startsWith(d.href)) ?? false;

  /** Handle mouse enter with delay cancel */
  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setOpenDropdown(label);
  };

  /** Handle mouse leave with 150ms grace period */
  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  return (
    <nav
      ref={navRef}
      className={[
        'fixed top-0 left-0 right-0 z-50',
        isScrolled
          ? 'bg-[#0a0f1a]/80 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.3)] border-b border-white/6'
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
        <div className="flex items-center justify-between h-16 sm:h-18">
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
              const hasDropdown = !!item.dropdown;
              const isActive = hasDropdown
                ? isDropdownActive(item)
                : pathname === item.href || (item.href === '/' && pathname === '/home');

              if (hasDropdown) {
                return (
                  <motion.div
                    key={item.label}
                    custom={index}
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative"
                    ref={openDropdown === item.label ? dropdownRef : undefined}
                    onMouseEnter={() => handleDropdownEnter(item.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      className={[
                        'relative px-4 xl:px-5 py-2 text-sm font-medium rounded-lg transition-all duration-200 inline-flex items-center gap-1',
                        isActive
                          ? 'text-[#FFE500]'
                          : 'text-white/60 hover:text-white hover:bg-white/4',
                      ].join(' ')}
                      style={{ fontFamily: 'var(--font-poppins)' }}
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <svg
                        className={[
                          'w-3.5 h-3.5 transition-transform duration-200',
                          openDropdown === item.label ? 'rotate-180' : '',
                        ].join(' ')}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-5 bg-[#FFE500] rounded-full"
                          layoutId="nav-indicator"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                    </button>

                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 py-2 bg-[#0a1628]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden z-50"
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          {item.dropdown!.map((subItem) => {
                            const subActive = pathname === subItem.href;
                            return (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className={[
                                  'block px-4 py-2.5 text-sm font-medium transition-all duration-150',
                                  subActive
                                    ? 'text-white bg-white/8 font-semibold'
                                    : 'text-white/60 hover:text-white hover:bg-white/6',
                                ].join(' ')}
                                style={{ fontFamily: 'var(--font-poppins)' }}
                                onClick={() => setOpenDropdown(null)}
                              >
                                {subItem.label}
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              }

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
                        : 'text-white/60 hover:text-white hover:bg-white/4',
                    ].join(' ')}
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-5 bg-[#FFE500] rounded-full"
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
                  className="border-white/20 hover:bg-white/6 hover:border-white/30 text-white"
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
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/6 transition-colors touch-target"
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
            <div className="bg-[#0a0f1a]/95 backdrop-blur-xl border-t border-white/6">
              <Container>
                <div className="py-4 space-y-1">
                  {NAV_ITEMS.map((item, index) => {
                    const hasDropdown = !!item.dropdown;
                    const isActive = hasDropdown
                      ? isDropdownActive(item)
                      : pathname === item.href || (item.href === '/' && pathname === '/home');

                    if (hasDropdown) {
                      return (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: -16 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <button
                            className={[
                              'w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-lg transition-colors',
                              isActive
                                ? 'text-[#FFE500] bg-white/4'
                                : 'text-white/70 hover:text-white hover:bg-white/4',
                            ].join(' ')}
                            onClick={() =>
                              setMobileDropdown(mobileDropdown === item.label ? null : item.label)
                            }
                            aria-expanded={mobileDropdown === item.label}
                          >
                            {item.label}
                            <svg
                              className={[
                                'w-4 h-4 transition-transform duration-200',
                                mobileDropdown === item.label ? 'rotate-180' : '',
                              ].join(' ')}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          <AnimatePresence>
                            {mobileDropdown === item.label && (
                              <motion.div
                                className="overflow-hidden"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="pl-6 py-1 space-y-0.5">
                                  {item.dropdown!.map((subItem) => {
                                    const subActive = pathname === subItem.href;
                                    return (
                                      <Link
                                        key={subItem.href}
                                        href={subItem.href}
                                        className={[
                                          'block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors',
                                          subActive
                                            ? 'text-white bg-white/6'
                                            : 'text-white/50 hover:text-white hover:bg-white/4',
                                        ].join(' ')}
                                        onClick={() => setMobileOpen(false)}
                                      >
                                        {subItem.label}
                                      </Link>
                                    );
                                  })}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    }

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
                              ? 'text-[#FFE500] bg-white/4'
                              : 'text-white/70 hover:text-white hover:bg-white/4',
                          ].join(' ')}
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                  <motion.div 
                    className="pt-4 flex flex-col gap-3 border-t border-white/6 mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link
                      href="/contact"
                      className="block px-4 py-3 text-base font-medium text-white/70 hover:text-white hover:bg-white/4 rounded-lg transition-colors"
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
