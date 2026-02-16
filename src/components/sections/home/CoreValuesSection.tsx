'use client';

// =============================================================================
// Core Values Section Component
// Displays organization's core values with highlighted letters spelling PEOPLE
// =============================================================================

import { motion } from 'framer-motion';
import { CORE_VALUES_CONTENT } from '@/lib/constants';

// Helper function to highlight specific letters in a word
function HighlightedWord({ word, highlight }: { word: string; highlight: string }) {
  // Find where the highlight starts in the word (case-insensitive)
  const upperWord = word.toUpperCase();
  const upperHighlight = highlight.toUpperCase();
  const highlightIndex = upperWord.indexOf(upperHighlight);
  
  if (highlightIndex === -1) {
    return <span className="text-white">{word}</span>;
  }

  const before = word.slice(0, highlightIndex);
  const highlighted = word.slice(highlightIndex, highlightIndex + highlight.length);
  const after = word.slice(highlightIndex + highlight.length);

  return (
    <span>
      {before && <span className="text-white">{before}</span>}
      <span className="text-[#FFE500]">{highlighted}</span>
      {after && <span className="text-white">{after}</span>}
    </span>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function CoreValuesSection() {
  const { title, description, values } = CORE_VALUES_CONTENT;

  return (
    <section className="relative min-h-screen pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24 bg-gradient-to-b from-[#0a0a1a] via-[#0f0f1e] to-[#1a1a2e] overflow-hidden flex flex-col justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-[#FFE500]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#42a5f5]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          {/* Title */}
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FFE500] italic mb-10 sm:mb-12 md:mb-16"
            style={{ fontFamily: 'var(--font-romanesco)' }}
            variants={itemVariants}
          >
            {title}
          </motion.h2>

          {/* Core Values Display */}
          <motion.div className="mb-8 sm:mb-10 md:mb-12 space-y-3 sm:space-y-4" variants={itemVariants}>
            {/* Line 1: PROFESSIONAL EXCELLENCE | SOCIAL RESPONSIBILITY */}
            <div 
              className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 gap-y-2 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide"
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4">
                <HighlightedWord word={values[0].name} highlight={values[0].highlight} />
                <HighlightedWord word={values[1].name} highlight={values[1].highlight} />
              </div>
              <span className="hidden sm:inline text-white/40 mx-2 text-2xl md:text-3xl">|</span>
              <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4">
                <HighlightedWord word={values[2].name} highlight={values[2].highlight} />
                <HighlightedWord word={values[3].name} highlight={values[3].highlight} />
              </div>
            </div>

            {/* Line 2: SERVANT LEADERSHIP */}
            <div 
              className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide"
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              <HighlightedWord word={values[4].name} highlight={values[4].highlight} />
              <HighlightedWord word={values[5].name} highlight={values[5].highlight} />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-white/70 leading-relaxed"
            style={{ fontFamily: 'var(--font-poppins)' }}
            variants={itemVariants}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
