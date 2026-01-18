"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

// Types
type DropdownItem = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
};

// Navigation data
const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Events",
    dropdown: [
      { label: "Accomplishment Report", href: "/accomplishment-report" },
      { label: "Past Events", href: "/past-events" },
    ],
  },
  {
    label: "Activities",
    dropdown: [
      { label: "Upcoming Activities", href: "/upcoming-activities" },
      { label: "Review Sessions", href: "/review-sessions" },
      { label: "Academic Year Calendar", href: "/academic-year-calendar" },
    ],
  },
  {
    label: "Services",
    dropdown: [
      { label: "RSTW", href: "/rstw" },
      { label: "NSPC", href: "/nspc" },
    ],
  },
  {
    label: "Scholarship",
    dropdown: [
      { label: "Accredited Courses", href: "/accredited-courses" },
      { label: "Accredited Campuses", href: "/accredited-campuses" },
      { label: "Exam Schedules", href: "/exam-schedules" },
      { label: "Scholarship Guideline", href: "/scholarship-guideline" },
    ],
  },
  {
    label: "Resources",
    dropdown: [
      { label: "Documents and Forms", href: "/documents-and-forms" },
      { label: "Publications / Reports", href: "/publications-reports" },
    ],
  },
  {
    label: "About Us",
    dropdown: [
      { label: "Our Story", href: "/our-story" },
      { label: "Organizational Structure", href: "/organizational-structure" },
      { label: "Awards and Recognitions", href: "/awards-and-recognitions" },
    ],
  },
];

// Dropdown component
function NavDropdown({ 
  item, 
  isOpen, 
  onToggle, 
  onClose 
}: {
  item: NavItem;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-150"
        aria-expanded={isOpen}
      >
        {item.label}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-1 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {item.dropdown?.map((dropItem) => (
            <Link
              key={dropItem.href}
              href={dropItem.href}
              className="block px-5 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 focus:bg-primary-color focus:text-white transition-all duration-150 rounded-md"
              onClick={onClose}
            >
              {dropItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setOpenDropdown(null);
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className="sticky top-0 bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-800 z-50" ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <Image
              src="/agents_logo.png"
              alt="DOST Agents Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <span className="font-bold text-2xl tracking-tight text-gray-900 dark:text-white">
              DOST AGENTS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {NAV_ITEMS.map((item) =>
              item.dropdown ? (
                <NavDropdown
                  key={item.label}
                  item={item}
                  isOpen={openDropdown === item.label}
                  onToggle={() => toggleDropdown(item.label)}
                  onClose={closeDropdown}
                />
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="px-4 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-150"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden lg:inline-flex px-6 py-2.5 rounded-lg bg-primary-color text-white text-sm font-bold hover:opacity-90 hover:shadow-lg transition-all duration-200 shadow-md"
            >
              Contact Us
            </Link>

            <button
              aria-label="Toggle mobile menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
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
                  d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="px-4 pt-4 pb-6 space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-between transition-colors"
                    >
                      {item.label}
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.href}
                            href={dropItem.href}
                            className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 focus:bg-primary-color focus:text-white transition-colors rounded-md"
                            onClick={() => {
                              setMobileOpen(false);
                              closeDropdown();
                            }}
                          >
                            {dropItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="block mt-4 px-4 py-2.5 rounded-lg bg-primary-color text-white text-center font-semibold hover:opacity-90 transition-opacity"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
