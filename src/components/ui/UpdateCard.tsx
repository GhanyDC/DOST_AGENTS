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
  // Staggered height: alternate between taller and shorter cards per column position
  // In a 3-col grid, col positions cycle 0,1,2. We stagger by index.
  const isEvenIndex = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className={isEvenIndex ? 'mt-0' : 'mt-6 sm:mt-8'}
    >
      <Link
        href={`/updates/${update.slug}`}
        className={cn('group block', className)}
      >
        <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-(--card) border border-(--card-border) card-hover h-full">
          {/* Image */}
          <div className={cn(
            'relative overflow-hidden bg-(--muted)',
            isEvenIndex ? 'aspect-[3/4]' : 'aspect-[4/5]'
          )}>
            {/* Year Badge - top left */}
            <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10">
              <span
                className="inline-block px-2 py-0.5 sm:px-2.5 sm:py-1 text-[8px] sm:text-[10px] font-semibold rounded-md bg-(--color-primary) text-[#111827]"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                {update.academicYear}
              </span>
            </div>

            <Image
              src={update.imageUrl}
              alt={update.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Category Badge - bottom left of image */}
            <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 z-10">
              <span
                className="inline-block px-2 py-0.5 sm:px-2.5 sm:py-0.5 text-[8px] sm:text-[10px] font-semibold rounded-md bg-(--color-primary) text-[#111827] uppercase tracking-wide"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                {update.category === 'merchandise' ? 'Merch' : update.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-2.5 sm:p-3.5">
            <h3
              className="text-[11px] sm:text-sm font-semibold text-(--foreground) line-clamp-1 mb-0.5"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              {update.title}
            </h3>
            <p
              className="text-[9px] sm:text-xs text-(--foreground-muted) line-clamp-2 leading-relaxed"
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
