'use client';

// =============================================================================
// Looking Ahead Section Component
// Feature cards showcasing upcoming initiatives
// =============================================================================

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { LOOKING_AHEAD_CONTENT, SAMPLE_FEATURES } from '@/lib/constants';
import type { Feature } from '@/types';

interface LookingAheadSectionProps {
  features?: Feature[];
}

interface EnhancedFeatureCardProps {
  number: number;
  title: string;
  description: string;
  className?: string;
}

function EnhancedFeatureCard({
  number,
  title,
  description,
  className,
}: EnhancedFeatureCardProps) {
  return (
    <motion.div
      className={cn(
        'group relative p-5 sm:p-6 md:p-7 rounded-xl sm:rounded-2xl overflow-hidden',
        'bg-gradient-to-br from-[#1a1a2e]/50 to-[#16213e]/50',
        'border border-white/10 backdrop-blur-sm',
        'shadow-[0_8px_30px_rgb(0,0,0,0.12)]',
        'hover:shadow-[0_20px_60px_rgba(255,229,0,0.4)]',
        'transition-all duration-500 ease-out',
        className
      )}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
      }}
    >
      {/* Yellow gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFE500] to-[#f8d26a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl" />
      
      {/* Shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Number Badge */}
        <div className="inline-flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 mb-4 sm:mb-5 rounded-lg bg-white/10 text-white font-bold text-sm sm:text-base group-hover:bg-black/15 group-hover:text-black transition-all duration-300 backdrop-blur-sm">
          {number}
        </div>
        
        {/* Title */}
        <h3 
          className="text-base sm:text-lg md:text-xl font-bold text-white leading-snug mb-3 sm:mb-4 group-hover:text-black transition-colors duration-300"
          style={{ fontFamily: 'var(--font-manrope)' }}
        >
          {title}
        </h3>
        
        {/* Description */}
        <p 
          className="text-xs sm:text-sm text-white/70 leading-relaxed group-hover:text-black/80 transition-colors duration-300"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function LookingAheadSection({ features = SAMPLE_FEATURES }: LookingAheadSectionProps) {
  return (
    <section className="relative min-h-screen pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24 bg-gradient-to-b from-[#0a0a1a] via-[#0f0f1e] to-[#1a1a2e] overflow-hidden flex flex-col justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#FFE500]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-[#42a5f5]/10 rounded-full blur-3xl" />
      </div>

      {/* Section Heading */}
      <div className="relative z-10 text-center mb-12 sm:mb-16 md:mb-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-white mb-6">
            <span style={{ fontFamily: 'var(--font-manrope)' }}>{LOOKING_AHEAD_CONTENT.title}</span>
            {' '}
            <span 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FFE500] italic font-normal tracking-wide block sm:inline mt-2 sm:mt-0"
              style={{ fontFamily: 'var(--font-romanesco)' }}
            >
              {LOOKING_AHEAD_CONTENT.titleHighlight}
            </span>
          </h2>
          <p 
            className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-white/70 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            {LOOKING_AHEAD_CONTENT.description}
          </p>
        </motion.div>
      </div>

      {/* Features Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {features.map((feature) => (
            <motion.div key={feature.id} variants={cardVariants}>
              <EnhancedFeatureCard
                number={feature.number}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
