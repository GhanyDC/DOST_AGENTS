'use client';

// =============================================================================
// Update Card Component
// Card for displaying project/update items in the grid
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
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link
        href={`/updates/${update.slug}`}
        className={cn('group block', className)}
      >
        <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-(--card) border border-(--card-border) card-hover h-full">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-(--muted)">
            {/* Year Badge */}
            <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10">
              <span
                className="inline-block px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] font-semibold rounded-md bg-(--color-primary) text-[#111827]"
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="p-3 sm:p-4">
            <h3
              className="text-xs sm:text-sm font-semibold text-(--foreground) line-clamp-2 mb-1"
              style={{ fontFamily: 'var(--font-manrope)' }}
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
