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
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Background gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-(--background)/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,rgba(66,165,245,0.25),transparent_55%),radial-gradient(circle_at_70%_10%,rgba(245,188,66,0.2),transparent_50%)]" />
      
      <Container className="relative z-10 py-16 sm:py-20 md:py-24 lg:py-28">
        <motion.div 
          className="max-w-4xl mx-auto text-center px-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Title */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight tracking-tight mb-4 sm:mb-6"
            style={{ fontFamily: 'var(--font-romanesco)' }}
            variants={itemVariants}
          >
            <span className="text-[#FFE500] italic">
              {HERO_CONTENT.titleHighlight}
            </span>{' '}
            <span className="text-white italic">
              {HERO_CONTENT.titleRest}
            </span>
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            className="text-xs sm:text-sm md:text-base text-white/70 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 md:mb-12 px-2"
            style={{ fontFamily: 'var(--font-manrope)' }}
            variants={itemVariants}
          >
            {HERO_CONTENT.description}
          </motion.p>
          
          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link href={HERO_CONTENT.ctaLink}>
                <Button
                  variant="primary"
                  size="lg"
                  className="px-6 sm:px-8 md:px-12 text-sm sm:text-base"
                >
                  {HERO_CONTENT.ctaText}
                </Button>
              </Link>
              <Link href={HERO_CONTENT.secondaryCtaLink}>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-6 sm:px-8 md:px-12 border-white/30 hover:bg-white/10 text-sm sm:text-base"
                >
                  {HERO_CONTENT.secondaryCtaText}
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
