'use client';

// =============================================================================
// Update Card Component
// Card for displaying project/update items in the grid
// Alternating heights: even-index cards are taller, odd-index are shorter
// =============================================================================

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { Update } from '@/types';

interface UpdateCardProps {
  update: Update;
  className?: string;
  index?: number;
}

export function UpdateCard({ update, className, index = 0 }: UpdateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.3) }}
      className="break-inside-avoid mb-3 sm:mb-4"
    >
      <Link
        href={`/updates/${update.slug}`}
        className={cn('group block', className)}
      >
        <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-(--card) border border-(--card-border) card-hover">
          {/* Image — natural aspect, fills card width */}
          <div className="relative overflow-hidden bg-(--muted) aspect-auto">
            <div className="relative w-full" style={{ aspectRatio: 'auto' }}>
              <Image
                src={update.imageUrl}
                alt={update.title}
                width={600}
                height={750}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Gradient overlay at bottom for badge readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Category Badge — bottom left of image */}
            <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 z-10">
              <span
                className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 text-[8px] sm:text-[10px] font-bold rounded-md bg-(--color-primary) text-[#111827] uppercase tracking-wide"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                {update.category === 'merchandise' ? 'Merch' : update.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-3 sm:p-4">
            <h3
              className="text-xs sm:text-sm font-bold text-(--foreground) line-clamp-1 mb-1"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              {update.title}
            </h3>
            <p
              className="text-[10px] sm:text-xs text-(--foreground-muted) line-clamp-2 leading-relaxed"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              {update.description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
