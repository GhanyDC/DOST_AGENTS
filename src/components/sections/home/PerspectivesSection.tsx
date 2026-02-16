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
    <div className="shrink-0 w-64 sm:w-72 md:w-80 lg:w-96">
      <motion.div 
        className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a2e]/50 to-[#16213e]/50 border border-white/10 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgba(66,165,245,0.3)] transition-all duration-500 ease-out"
        whileHover={{ 
          y: -8,
          scale: 1.02,
          transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Image Container */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
          
          {/* Shine Effect on Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </div>
        </div>

        {/* Content */}
        <div className="relative p-4 sm:p-5 bg-gradient-to-b from-[#0f0f1e]/80 to-[#1a1a2e]/95 backdrop-blur-md">
          <h3 
            className="text-sm sm:text-base md:text-lg font-bold text-white leading-snug mb-2 group-hover:text-[#FFE500] transition-colors duration-300 line-clamp-2"
            style={{ fontFamily: 'var(--font-manrope)' }}
          >
            {title}
          </h3>
          <p 
            className="text-xs sm:text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300 font-medium"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            {date}
          </p>
        </div>
      </motion.div>
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
    <section className="relative min-h-screen pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 bg-gradient-to-b from-[#0a0a1a] via-[#0f0f1e] to-[#1a1a2e] overflow-x-clip flex flex-col justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#42a5f5]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFE500]/10 rounded-full blur-3xl" />
      </div>

      {/* Section Heading */}
      <div className="relative z-10 text-center mb-10 sm:mb-14 md:mb-16 px-4 shrink-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-white mb-6">
            <span style={{ fontFamily: 'var(--font-manrope)' }}>{PERSPECTIVES_CONTENT.title}</span>
            {' '}
            <span 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FFE500] italic font-normal tracking-wide block sm:inline mt-2 sm:mt-0"
              style={{ fontFamily: 'var(--font-romanesco)' }}
            >
              {PERSPECTIVES_CONTENT.titleHighlight}
            </span>
          </h2>
          <p 
            className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-white/70 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            {PERSPECTIVES_CONTENT.description}
          </p>
        </motion.div>
      </div>

      {/* Top Row - Scrolls Left */}
      <motion.div
        className="relative z-10 w-full overflow-hidden flex-1 min-h-0 mb-6 sm:mb-8"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex gap-5 sm:gap-6 md:gap-8 marquee-left h-full items-center py-4">
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
        className="relative z-10 w-full overflow-hidden flex-1 min-h-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="flex gap-5 sm:gap-6 md:gap-8 marquee-right h-full items-center py-4">
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
