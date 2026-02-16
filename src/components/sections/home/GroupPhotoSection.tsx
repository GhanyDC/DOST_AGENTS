'use client';

// =============================================================================
// Group Photo Section Component
// Full-width image with tagline overlay
// =============================================================================

import Image from 'next/image';
import { motion } from 'framer-motion';
import { GROUP_PHOTO_CONTENT } from '@/lib/constants';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

export function GroupPhotoSection() {
  const { tagline } = GROUP_PHOTO_CONTENT;

  return (
    <section className="relative py-0 bg-(--background)">
      {/* Group Photo Container */}
      <div className="relative w-full min-h-screen">
        {/* Group Photo */}
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <Image
            src="/group_photo.png"
            alt="AGENTS Group Photo"
            fill
            className="object-cover"
            priority
          />
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/70 to-black/85" />
        </motion.div>
        
        {/* Tagline Overlay - Centered */}
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Subtitle */}
          <motion.p 
            className="text-[10px] sm:text-xs text-white/80 tracking-[0.15em] uppercase mb-6 sm:mb-8"
            style={{ fontFamily: 'var(--font-poppins)' }}
            variants={fadeInUp}
          >
            {GROUP_PHOTO_CONTENT.subtitle}
          </motion.p>

          {/* Main Tagline */}
          <motion.div className="text-center max-w-5xl" variants={fadeInUp}>
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white font-normal"
              style={{ fontFamily: 'var(--font-manrope)' }}   // ✅ Regular text = Manrope
            >
              {tagline.prefix}{' '}
              <span 
                className="text-[#FFE500] italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                style={{ fontFamily: 'var(--font-romanesco)' }}  // ✅ Yellow words = Romanesco
              >
                {tagline.science}
              </span>
              {' '}{tagline.middle}{' '}
              <span 
                className="text-[#FFE500] italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                style={{ fontFamily: 'var(--font-romanesco)' }}
              >
                {tagline.service}
              </span>
            </h2>

            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 sm:mt-3 leading-tight text-white font-normal"
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              {tagline.suffix}{' '}
              <span 
                className="text-[#FFE500] italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                style={{ fontFamily: 'var(--font-romanesco)' }}
              >
                {tagline.progress}
              </span>
            </h2>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
