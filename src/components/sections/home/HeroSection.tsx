'use client';

// =============================================================================
// Hero Section Component
// Main hero section with title, description, CTA, and floating particles
// =============================================================================

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { HERO_CONTENT } from '@/lib/constants';

// Fixed particle positions to avoid hydration mismatch
const PARTICLES = [
  { w: 2, left: 8,  top: 15, dur: 18, delay: 0,   opacity: 0.3 },
  { w: 1, left: 15, top: 65, dur: 22, delay: 2,   opacity: 0.2 },
  { w: 3, left: 25, top: 40, dur: 16, delay: 4,   opacity: 0.25 },
  { w: 1, left: 35, top: 80, dur: 20, delay: 1,   opacity: 0.35 },
  { w: 2, left: 45, top: 30, dur: 24, delay: 3,   opacity: 0.2 },
  { w: 1, left: 55, top: 55, dur: 19, delay: 5,   opacity: 0.3 },
  { w: 2, left: 62, top: 75, dur: 21, delay: 0.5, opacity: 0.25 },
  { w: 1, left: 72, top: 20, dur: 17, delay: 2.5, opacity: 0.2 },
  { w: 3, left: 80, top: 50, dur: 23, delay: 1.5, opacity: 0.3 },
  { w: 1, left: 88, top: 35, dur: 20, delay: 3.5, opacity: 0.25 },
  { w: 2, left: 92, top: 70, dur: 18, delay: 4.5, opacity: 0.2 },
  { w: 1, left: 5,  top: 90, dur: 25, delay: 6,   opacity: 0.15 },
  { w: 2, left: 50, top: 10, dur: 15, delay: 7,   opacity: 0.2 },
  { w: 1, left: 68, top: 88, dur: 20, delay: 8,   opacity: 0.25 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden noise-overlay">
      {/* Ambient glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[20%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(66,165,245,0.12),transparent_65%)] animate-pulse-glow" />
        <div className="absolute top-[10%] right-[15%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,229,0,0.08),transparent_65%)] animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[20%] left-[50%] w-[600px] h-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(66,165,245,0.06),transparent_70%)] animate-pulse-glow" style={{ animationDelay: '4s' }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-float-up"
            style={{
              width: `${p.w}px`,
              height: `${p.w}px`,
              left: `${p.left}%`,
              top: `${p.top}%`,
              opacity: p.opacity,
              ['--particle-duration' as string]: `${p.dur}s`,
              ['--particle-delay' as string]: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Bottom gradient fade — blends into GroupPhoto section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#0a0f1a]/90 pointer-events-none z-[2]" />
      
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
            <motion.span
              className="text-[#FFE500] italic inline-block"
              animate={{ textShadow: ['0 0 20px rgba(255,229,0,0.3)', '0 0 40px rgba(255,229,0,0.15)', '0 0 20px rgba(255,229,0,0.3)'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {HERO_CONTENT.titleHighlight}
            </motion.span>{' '}
            <span className="text-white italic">
              {HERO_CONTENT.titleRest}
            </span>
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            className="text-xs sm:text-sm md:text-base text-white/60 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 md:mb-12 px-2"
            style={{ fontFamily: 'var(--font-manrope)' }}
            variants={itemVariants}
          >
            {HERO_CONTENT.description}
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div variants={itemVariants}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link href={HERO_CONTENT.ctaLink}>
                <Button
                  variant="primary"
                  size="lg"
                  className="px-6 sm:px-8 md:px-12 text-sm sm:text-base shadow-[0_0_30px_rgba(255,229,0,0.2)] hover:shadow-[0_0_50px_rgba(255,229,0,0.35)] transition-shadow duration-500"
                >
                  {HERO_CONTENT.ctaText}
                </Button>
              </Link>
              <Link href={HERO_CONTENT.secondaryCtaLink}>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-6 sm:px-8 md:px-12 border-white/20 hover:bg-white/10 hover:border-white/40 text-sm sm:text-base text-white backdrop-blur-sm transition-all duration-400"
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
