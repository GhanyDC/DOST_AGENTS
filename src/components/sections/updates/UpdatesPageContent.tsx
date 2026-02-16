'use client';

// =============================================================================
// Updates Page Content
// Client component handling search, filter, and grid display
// =============================================================================

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SearchBar } from '@/components/ui/SearchBar';
import { UpdateCard } from '@/components/ui/UpdateCard';
import { Button } from '@/components/ui/Button';
import { UPDATES_CONTENT, SAMPLE_UPDATES, UPDATE_FILTERS } from '@/lib/constants';
import type { Update, UpdateCategory } from '@/types';

interface UpdatesPageContentProps {
  updates?: Update[];
}

export function UpdatesPageContent({ updates = SAMPLE_UPDATES }: UpdatesPageContentProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<UpdateCategory>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filter and search logic
  const filteredUpdates = useMemo(() => {
    let result = updates;

    // Apply category filter
    if (activeFilter !== 'all') {
      result = result.filter((update) => update.category === activeFilter);
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
  }, [updates, activeFilter, searchQuery]);

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 sm:mb-4">
            <span
              className="text-(--foreground)"
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              {UPDATES_CONTENT.title}{' '}
            </span>
            <span
              className="text-[#FFE500] italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ fontFamily: 'var(--font-romanesco)' }}
            >
              {UPDATES_CONTENT.titleHighlight}
            </span>
          </h1>
          <p
            className="text-xs sm:text-sm md:text-base text-(--foreground-muted) max-w-3xl leading-relaxed"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            {UPDATES_CONTENT.description}
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {UPDATE_FILTERS.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter(filter.value)}
              className="text-xs sm:text-sm"
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>

        {/* Search and View Toggle Row */}
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
            className="flex-1"
          />

          {/* View Toggle */}
          <div className="flex items-center gap-1 bg-(--surface) border border-(--border) rounded-lg p-1">
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
                ? 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6'
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
                setActiveFilter('all');
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
