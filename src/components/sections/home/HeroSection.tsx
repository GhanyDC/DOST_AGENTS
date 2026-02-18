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

// 4-pointed sparkle star particles
// size: overall px dimensions, left/top: % positions
const PARTICLES = [
  { size: 11, left:  5, top: 12, opacity: 0.55, delay: 0   },
  { size:  7, left: 14, top: 48, opacity: 0.35, delay: 1.5 },
  { size: 15, left: 22, top: 28, opacity: 0.45, delay: 3   },
  { size:  9, left: 30, top: 72, opacity: 0.30, delay: 0.8 },
  { size:  7, left: 38, top: 18, opacity: 0.40, delay: 2.2 },
  { size: 11, left: 46, top: 62, opacity: 0.35, delay: 4   },
  { size:  7, left: 54, top: 38, opacity: 0.30, delay: 1   },
  { size: 15, left: 60, top: 82, opacity: 0.45, delay: 5   },
  { size:  9, left: 68, top: 22, opacity: 0.50, delay: 2   },
  { size:  7, left: 74, top: 55, opacity: 0.30, delay: 3.5 },
  { size: 13, left: 80, top: 15, opacity: 0.40, delay: 0.5 },
  { size:  7, left: 86, top: 70, opacity: 0.35, delay: 1.8 },
  { size: 11, left: 92, top: 40, opacity: 0.50, delay: 4.5 },
  { size:  7, left: 96, top: 88, opacity: 0.25, delay: 6   },
  { size:  9, left: 50, top:  8, opacity: 0.40, delay: 7   },
  { size:  7, left: 20, top: 90, opacity: 0.30, delay: 3   },
  { size: 11, left: 75, top: 92, opacity: 0.35, delay: 8   },
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: '#080e1a' }}>

      {/* Bottom center blur half-circle glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-[1]"
        style={{
          width: '110vw',
          height: '55vh',
          background: 'radial-gradient(ellipse 60% 100% at 50% 100%, rgba(10,60,180,0.55) 0%, rgba(10,40,130,0.25) 45%, transparent 70%)',
          filter: 'blur(48px)',
          borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
        }}
      />

      

      {/* Bottom fade — bridges into GroupPhoto section */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[2]"
        style={{
          height: '180px',
          background: 'linear-gradient(to bottom, transparent 0%, #080e1a 100%)',
        }}
      />

      {/* 4-pointed sparkle star particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              opacity: p.opacity,
              width: `${p.size}px`,
              height: `${p.size}px`,
              transform: 'translate(-50%, -50%)',
              animation: `gentle-bob ${6 + (i % 4)}s ${p.delay}s ease-in-out infinite`,
            }}
          >
            <svg
              viewBox="-12 -12 24 24"
              width={p.size}
              height={p.size}
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* 4-pointed star: each arm tapers to a sharp point, concave between */}
              <path d="M0,-11 C1.2,-1.2 1.2,-1.2 11,0 C1.2,1.2 1.2,1.2 0,11 C-1.2,1.2 -1.2,1.2 -11,0 C-1.2,-1.2 -1.2,-1.2 0,-11 Z" />
            </svg>
          </div>
        ))}
      </div>
      
      <Container className="relative z-10 py-16 sm:py-20 md:py-24 lg:py-28">
        <motion.div 
          className="max-w-4xl mx-auto text-center px-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Title */}
          <motion.h1
            className="leading-tight tracking-tight mb-5 sm:mb-7 max-w-[960px] mx-auto"
            style={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: 500,
              fontSize: 'clamp(1.75rem, 3.6vw, 3rem)',
              lineHeight: 1.12,
            }}
            variants={itemVariants}
          >
            <motion.span
              className="text-[#FFE500] inline-block"
              animate={{ textShadow: ['0 0 20px rgba(255,229,0,0.3)', '0 0 40px rgba(255,229,0,0.15)', '0 0 20px rgba(255,229,0,0.3)'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {HERO_CONTENT.titleHighlight}
            </motion.span>{' '}
            <span className="text-white">
              {HERO_CONTENT.titleRest}
            </span>
          </motion.h1>
          
          {/* Description */}
          <motion.p
            className="text-xs sm:text-sm md:text-base text-white/60 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-10 md:mb-12 px-2"
            style={{ fontFamily: 'var(--font-poppins)', fontWeight: 400 }}
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
