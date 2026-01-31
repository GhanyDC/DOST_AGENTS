'use client';

// =============================================================================
// Core Values Section Component
// Displays organization's core values with highlighted letters
// =============================================================================

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { CORE_VALUES_CONTENT } from '@/lib/constants';

// Helper function to highlight specific letters in a word
function HighlightedWord({ word, highlight }: { word: string; highlight: string }) {
  // Find where the highlight starts in the word
  const highlightIndex = word.indexOf(highlight);
  
  if (highlightIndex === -1) {
    return <span className="text-[var(--foreground)]">{word}</span>;
  }

  const before = word.slice(0, highlightIndex);
  const highlighted = word.slice(highlightIndex, highlightIndex + highlight.length);
  const after = word.slice(highlightIndex + highlight.length);

  return (
    <span>
      {before && <span className="text-[var(--foreground)]">{before}</span>}
      <span className="text-[var(--color-accent-yellow)]">{highlighted}</span>
      {after && <span className="text-[var(--foreground)]">{after}</span>}
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
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export function CoreValuesSection() {
  const { title, description, values } = CORE_VALUES_CONTENT;

  // Group values into lines for display
  // Line 1: PROFESSIONAL EXCELLENCE | SOCIAL RESPONSIBILITY
  // Line 2: SERVANT LEADERSHIP
  const line1Values = values.slice(0, 4); // P, E, SO, R
  const line2Values = values.slice(4); // SER, L

  return (
    <section className="py-8 sm:py-10 md:py-12 pb-16 sm:pb-20 md:pb-24 bg-[var(--background)] flex items-center">
      <Container className="text-center px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Title */}
          <motion.h2 
            className="font-script text-2xl sm:text-3xl md:text-4xl text-[var(--color-accent-yellow)] italic mb-6 sm:mb-8"
            variants={itemVariants}
          >
            {title}
          </motion.h2>

          {/* Core Values Display */}
          <motion.div className="mb-6 sm:mb-8 space-y-2 sm:space-y-3" variants={itemVariants}>
            {/* Line 1: PROFESSIONAL EXCELLENCE | SOCIAL RESPONSIBILITY */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-2 gap-y-1 text-base sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wider">
              <div className="flex flex-wrap items-center justify-center gap-x-2">
                <HighlightedWord word="PROFESSIONAL" highlight="P" />
                <HighlightedWord word="EXCELLENCE" highlight="E" />
              </div>
              <span className="hidden sm:inline text-[var(--foreground-muted)] mx-2">|</span>
              <div className="flex flex-wrap items-center justify-center gap-x-2">
                <HighlightedWord word="SOCIAL" highlight="SO" />
                <HighlightedWord word="RESPONSIBILITY" highlight="R" />
              </div>
            </div>

            {/* Line 2: SERVANT LEADERSHIP */}
            <div className="flex flex-wrap items-center justify-center gap-x-2 text-base sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wider">
              <HighlightedWord word="SERVANT" highlight="SER" />
              <HighlightedWord word="LEADERSHIP" highlight="L" />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="max-w-3xl mx-auto text-xs sm:text-sm md:text-base text-[var(--foreground-muted)] leading-relaxed"
            variants={itemVariants}
          >
            {description}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
