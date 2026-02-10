'use client';

// =============================================================================
// Perspectives Section Component
// Project cards with infinite marquee scrolling rows
// =============================================================================

import Image from 'next/image';
import { motion } from 'framer-motion';
import { PERSPECTIVES_CONTENT, SAMPLE_PROJECTS } from '@/lib/constants';
import type { Project } from '@/types';

interface PerspectivesSectionProps {
  projects?: Project[];
}

function MarqueeCard({ title, date, imageUrl }: { title: string; date: string; imageUrl: string }) {
  return (
    <div className="shrink-0 w-52 sm:w-60 md:w-72 lg:w-80">
      <div className="rounded-xl overflow-hidden bg-(--card) border border-(--card-border)">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-2 sm:p-3">
          <h3 
            className="text-xs sm:text-sm font-semibold text-(--foreground)"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            {title}
          </h3>
          <p 
            className="text-[9px] sm:text-[10px] text-(--foreground-muted) mt-0.5"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            {date}
          </p>
        </div>
      </div>
    </div>
  );
}

export function PerspectivesSection({ projects = SAMPLE_PROJECTS }: PerspectivesSectionProps) {
  const firstRow = projects.slice(0, 4);
  const secondRow = projects.slice(4, 8);

  // Duplicate items for seamless loop
  const firstRowDuped = [...firstRow, ...firstRow, ...firstRow];
  const secondRowDuped = [...secondRow, ...secondRow, ...secondRow];

  return (
    <section className="h-screen pt-12 sm:pt-16 pb-6 sm:pb-8 bg-section-gradient overflow-x-clip flex flex-col justify-center">
      {/* Section Heading */}
      <div className="text-center mb-4 sm:mb-6 px-4 shrink-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-(--foreground)">
            <span style={{ fontFamily: 'var(--font-manrope)' }}>{PERSPECTIVES_CONTENT.title}</span>
            {' '}
            <span 
              className="text-3xl sm:text-4xl md:text-5xl text-[#FFE500] italic font-normal tracking-wide"
              style={{ fontFamily: 'var(--font-romanesco)' }}
            >
              {PERSPECTIVES_CONTENT.titleHighlight}
            </span>
          </h2>
          <p 
            className="mt-2 sm:mt-3 text-[10px] sm:text-xs md:text-sm text-(--foreground-muted) max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            {PERSPECTIVES_CONTENT.description}
          </p>
        </motion.div>
      </div>

      {/* Top Row - Scrolls Left */}
      <motion.div
        className="w-full overflow-hidden flex-1 min-h-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex gap-3 sm:gap-5 marquee-left h-full items-center">
          {firstRowDuped.map((project, i) => (
            <MarqueeCard
              key={`top-${project.id}-${i}`}
              title={project.title}
              date={project.date}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </motion.div>

      {/* Bottom Row - Scrolls Right */}
      <motion.div
        className="w-full overflow-hidden mt-3 sm:mt-4 flex-1 min-h-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex gap-3 sm:gap-5 marquee-right h-full items-center">
          {secondRowDuped.map((project, i) => (
            <MarqueeCard
              key={`bottom-${project.id}-${i}`}
              title={project.title}
              date={project.date}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
