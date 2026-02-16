'use client';

// =============================================================================
// Core Values Section Component
// Displays organization's core values with highlighted letters spelling PEOPLE
// =============================================================================

import { motion } from 'framer-motion';
import { CORE_VALUES_CONTENT } from '@/lib/constants';

// Helper function to highlight specific letters in a word
function HighlightedWord({ word, highlight }: { word: string; highlight: string }) {
  const upperWord = word.toUpperCase();
  
  // If no highlight or empty string, return plain text
  if (!highlight || highlight.trim() === '') {
    return <span className="text-white/80">{word}</span>;
  }
  
  // Handle multiple highlights (comma-separated)
  if (highlight.includes(',')) {
    const highlights = highlight.split(',').map(h => h.trim().toUpperCase());
    const chars = word.split('');
    const highlightIndices = new Set<number>();
    
    // For LEADERSHIP: L at position 0, E at position 4 (after LEAD)
    if (upperWord === 'LEADERSHIP' && highlights.includes('L') && highlights.includes('E')) {
      highlightIndices.add(0); // L
      highlightIndices.add(4); // E (after D)
    }
    
    return (
      <span>
        {chars.map((char, idx) => {
          if (highlightIndices.has(idx)) {
            return (
              <motion.span
                key={idx}
                className="text-[#FFE500] inline-block"
                animate={{ textShadow: ['0 0 10px rgba(255,229,0,0.2)', '0 0 20px rgba(255,229,0,0.4)', '0 0 10px rgba(255,229,0,0.2)'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                {char}
              </motion.span>
            );
          }
          return <span key={idx} className="text-white/80">{char}</span>;
        })}
      </span>
    );
  }
  
  // Single highlight (original logic)
  const upperHighlight = highlight.toUpperCase();
  const highlightIndex = upperWord.indexOf(upperHighlight);
  
  if (highlightIndex === -1) {
    return <span className="text-white/80">{word}</span>;
  }

  const before = word.slice(0, highlightIndex);
  const highlighted = word.slice(highlightIndex, highlightIndex + highlight.length);
  const after = word.slice(highlightIndex + highlight.length);

  return (
    <span>
      {before && <span className="text-white/80">{before}</span>}
      <motion.span 
        className="text-[#FFE500] inline-block"
        animate={{ textShadow: ['0 0 10px rgba(255,229,0,0.2)', '0 0 20px rgba(255,229,0,0.4)', '0 0 10px rgba(255,229,0,0.2)'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        {highlighted}
      </motion.span>
      {after && <span className="text-white/80">{after}</span>}
    </span>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const wordLineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function CoreValuesSection() {
  const { title, description, values } = CORE_VALUES_CONTENT;

  return (
    <section className="relative min-h-screen pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24 bg-gradient-to-b from-[#0c1020] via-[#0a0e1c] to-[#0d1228] overflow-hidden flex flex-col justify-center noise-overlay">
      {/* Background Effects — centered glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,rgba(255,229,0,0.04),transparent_60%)]" />
        <div className="absolute top-[20%] left-[15%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(66,165,245,0.05),transparent_70%)] animate-pulse-glow" style={{ animationDelay: '1s' }} />
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
            {/* Line 1: PROFESSIONAL EXCELLENCE */}
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider"
              style={{ fontFamily: 'var(--font-manrope)' }}
              variants={wordLineVariants}
            >
              <HighlightedWord word={values[0].name} highlight={values[0].highlight} />
              <HighlightedWord word={values[1].name} highlight={values[1].highlight} />
            </motion.div>

            {/* Line 2: SOCIAL RESPONSIBILITY */}
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider"
              style={{ fontFamily: 'var(--font-manrope)' }}
              variants={wordLineVariants}
            >
              <HighlightedWord word={values[2].name} highlight={values[2].highlight} />
              <HighlightedWord word={values[3].name} highlight={values[3].highlight} />
            </motion.div>

            {/* Line 3: SERVANT LEADERSHIP */}
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider"
              style={{ fontFamily: 'var(--font-manrope)' }}
              variants={wordLineVariants}
            >
              <HighlightedWord word={values[4].name} highlight={values[4].highlight} />
              <HighlightedWord word={values[5].name} highlight={values[5].highlight} />
            </motion.div>
          </motion.div>

          {/* Decorative line */}
          <motion.div 
            className="flex justify-center mb-8 sm:mb-10"
            variants={itemVariants}
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#FFE500]/40 to-transparent" />
          </motion.div>

          {/* Description */}
          <motion.p 
            className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-white/60 leading-relaxed"
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
