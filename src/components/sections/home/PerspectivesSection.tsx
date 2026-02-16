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
        className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#111a30]/60 to-[#0d1526]/60 border border-white/[0.06] backdrop-blur-sm shadow-[0_4px_24px_rgb(0,0,0,0.2)] hover:shadow-[0_16px_48px_rgba(66,165,245,0.2)] transition-all duration-500 ease-out"
        whileHover={{ 
          y: -6,
          scale: 1.02,
          transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
        }}
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="relative p-4 sm:p-5">
          <h3 
            className="text-sm sm:text-base md:text-lg font-bold text-white leading-snug mb-2 group-hover:text-[#FFE500] transition-colors duration-300 line-clamp-2"
            style={{ fontFamily: 'var(--font-manrope)' }}
          >
            {title}
          </h3>
          <p 
            className="text-xs sm:text-sm text-white/50 group-hover:text-white/70 transition-colors duration-300 font-medium"
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
    <section className="relative min-h-screen pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 bg-gradient-to-b from-[#0a0e1e] via-[#0c1224] to-[#0f152c] overflow-x-clip flex flex-col justify-center noise-overlay">
      {/* Background Effects — unique to this section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(66,165,245,0.1),transparent_70%)] animate-pulse-glow" />
        <div className="absolute bottom-[15%] right-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,229,0,0.06),transparent_70%)] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Section Heading */}
      <div className="relative z-10 text-center mb-10 sm:mb-14 md:mb-16 px-4 shrink-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
            className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-white/60 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            {PERSPECTIVES_CONTENT.description}
          </p>
        </motion.div>
      </div>

      {/* Top Row - Scrolls Left */}
      <motion.div
        className="relative z-10 w-full overflow-hidden flex-1 min-h-0 mb-6 sm:mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
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

      {/* Edge fades for marquee */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#0a0e1e] to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#0f152c] to-transparent z-20 pointer-events-none" />
    </section>
  );
}
