'use client';

// =============================================================================
// Hero Section Component
// Main hero section with title, description, and CTA
// =============================================================================

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { HERO_CONTENT } from '@/lib/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Background gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--background)]/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      <Container className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-28">
        <motion.div 
          className="max-w-4xl mx-auto text-center px-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Title */}
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6"
            variants={itemVariants}
          >
            <span className="text-[var(--color-primary)] italic">
              {HERO_CONTENT.titleHighlight}
            </span>{' '}
            <span className="text-[var(--foreground)]">
              {HERO_CONTENT.titleRest}
            </span>
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            className="text-xs sm:text-sm md:text-base text-[var(--foreground-muted)] max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 md:mb-10 px-2"
            variants={itemVariants}
          >
            {HERO_CONTENT.description}
          </motion.p>
          
          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <Link href={HERO_CONTENT.ctaLink}>
              <Button
                variant="outline"
                size="lg"
                className="px-6 sm:px-8 md:px-12 border-white/30 hover:bg-white/10 text-sm sm:text-base"
              >
                {HERO_CONTENT.ctaText}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
