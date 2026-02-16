'use client';

// =============================================================================
// Updates Page Content
// Client component handling search, filter, and grid display
// =============================================================================

import { useState, useMemo, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SearchBar } from '@/components/ui/SearchBar';
import { UpdateCard } from '@/components/ui/UpdateCard';
import { Button } from '@/components/ui/Button';
import { UPDATES_CONTENT, SAMPLE_UPDATES, ACADEMIC_YEAR_OPTIONS } from '@/lib/constants';
import type { Update } from '@/types';

interface UpdatesPageContentProps {
  updates?: Update[];
}

export function UpdatesPageContent({ updates = SAMPLE_UPDATES }: UpdatesPageContentProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('All Years');
  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setYearDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter and search logic
  const filteredUpdates = useMemo(() => {
    let result = updates;

    // Apply year filter
    if (selectedYear !== 'All Years') {
      result = result.filter((update) => update.academicYear === selectedYear);
    }

    // Apply search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (update) =>
          update.title.toLowerCase().includes(query) ||
          update.description.toLowerCase().includes(query) ||
          update.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return result;
  }, [updates, selectedYear, searchQuery]);

  return (
    <main className="min-h-screen bg-(--background) pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
      <Container>
        {/* Page Header */}
        <motion.div
          className="mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FFE500] italic tracking-tight mb-3 sm:mb-4"
            style={{ fontFamily: 'var(--font-romanesco)' }}
          >
            {UPDATES_CONTENT.title} {UPDATES_CONTENT.titleHighlight}
          </h1>
          <p
            className="text-[10px] sm:text-xs md:text-sm text-(--foreground-muted) max-w-3xl leading-relaxed"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            {UPDATES_CONTENT.description}
          </p>
        </motion.div>

        {/* Filter Row: "All Projects" button + Year Dropdown */}
        <motion.div
          className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5 sm:mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* All Projects pill */}
          <button
            className="px-4 py-1.5 text-[11px] sm:text-xs font-semibold rounded-full bg-(--color-primary) text-[#111827] transition-all hover:bg-(--color-primary-hover)"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            All Projects
          </button>

          {/* Year Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setYearDropdownOpen(!yearDropdownOpen)}
              className="flex items-center gap-1.5 px-4 py-1.5 text-[11px] sm:text-xs font-medium rounded-full border border-(--border) bg-(--surface) text-(--foreground) transition-all hover:border-(--foreground-muted)"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              {selectedYear === 'All Years' ? '2025-2026' : selectedYear}
              <svg
                className={`w-3 h-3 transition-transform ${yearDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {yearDropdownOpen && (
              <motion.div
                className="absolute top-full left-0 mt-1 w-36 bg-(--surface) border border-(--border) rounded-xl shadow-lg overflow-hidden z-50"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
              >
                {ACADEMIC_YEAR_OPTIONS.map((year) => (
                  <button
                    key={year}
                    onClick={() => {
                      setSelectedYear(year);
                      setYearDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-[11px] sm:text-xs transition-colors ${
                      selectedYear === year
                        ? 'bg-(--color-primary)/10 text-(--color-primary) font-semibold'
                        : 'text-(--foreground) hover:bg-(--muted)'
                    }`}
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    {year}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Search Bar and View Toggle Row */}
        <motion.div
          className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search Projects"
            className="max-w-md"
          />

          {/* Spacer */}
          <div className="flex-1" />

          {/* View Toggle */}
          <div className="flex items-center gap-1 bg-(--surface) border border-(--border) rounded-lg p-1 shrink-0">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'grid'
                  ? 'bg-(--color-primary) text-[#111827]'
                  : 'text-(--foreground-muted) hover:text-(--foreground)'
              }`}
              aria-label="Grid view"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'list'
                  ? 'bg-(--color-primary) text-[#111827]'
                  : 'text-(--foreground-muted) hover:text-(--foreground)'
              }`}
              aria-label="List view"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Updates Grid */}
        {filteredUpdates.length > 0 ? (
          <div
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5'
                : 'flex flex-col gap-4'
            }
          >
            {filteredUpdates.map((update, index) => (
              <UpdateCard
                key={update.id}
                update={update}
                index={index}
              />
            ))}
          </div>
        ) : (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <p
              className="text-sm sm:text-base text-(--foreground-muted)"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              No updates found matching your search.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4"
              onClick={() => {
                setSearchQuery('');
                setSelectedYear('All Years');
              }}
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </Container>
    </main>
  );
}
