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
  index: number;
  className?: string;
}

function EnhancedFeatureCard({
  number,
  title,
  description,
  index,
  className,
}: EnhancedFeatureCardProps) {
  return (
    <motion.div
      className={cn(
        'group relative p-5 sm:p-6 md:p-7 rounded-xl sm:rounded-2xl overflow-hidden',
        'bg-linear-to-br from-[#111a30]/60 to-[#0d1526]/60',
        'border border-white/6',
        'shadow-[0_4px_24px_rgb(0,0,0,0.2)]',
        'hover:shadow-[0_16px_48px_rgba(255,229,0,0.15)]',
        'transition-all duration-500 ease-out',
        className
      )}
      whileHover={{ 
        y: -6,
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
      }}
    >
      {/* Yellow gradient overlay on hover */}
      <div className="absolute inset-0 bg-linear-to-br from-[#FFE500] to-[#f5c518] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl" />

      {/* Content */}
      <div className="relative z-10">
        {/* Number Badge */}
        <div className="inline-flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 mb-4 sm:mb-5 rounded-lg bg-white/6 text-white/80 font-bold text-sm sm:text-base group-hover:bg-black/15 group-hover:text-black transition-all duration-300">
          {String(index + 1).padStart(2, '0')}
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
          className="text-xs sm:text-sm text-white/60 leading-relaxed group-hover:text-black/70 transition-colors duration-300 line-clamp-4"
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
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function LookingAheadSection({ features = SAMPLE_FEATURES }: LookingAheadSectionProps) {
  return (
    <section className="relative min-h-screen pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24 bg-linear-to-b from-[#0f152c] via-[#0d1028] to-[#0b0e22] overflow-hidden flex flex-col justify-center noise-overlay">
      {/* Background Effects — shifted positions to differentiate from Perspectives */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] right-[15%] w-100 h-100 bg-[radial-gradient(circle,rgba(255,229,0,0.08),transparent_70%)] animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[20%] left-[10%] w-100 h-100 bg-[radial-gradient(circle,rgba(66,165,245,0.06),transparent_70%)] animate-pulse-glow" style={{ animationDelay: '3s' }} />
      </div>

      {/* Section Heading */}
      <div className="relative z-10 text-center mb-12 sm:mb-16 md:mb-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
              <span style={{ fontFamily: 'var(--font-manrope)' }}>
                {LOOKING_AHEAD_CONTENT.title}
              </span>
              {' '}
              <span
                className="text-[#FFE500]"
                style={{ fontFamily: 'var(--font-manrope)' }}
              >
                {LOOKING_AHEAD_CONTENT.titleHighlight}
              </span>
            </h2>
          <p 
            className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-white/60 max-w-2xl mx-auto leading-relaxed"
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
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div key={feature.id} variants={cardVariants}>
              <EnhancedFeatureCard
                number={feature.number}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
