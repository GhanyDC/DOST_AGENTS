'use client';

// =============================================================================
// Group Photo Section Component
// Full-width image with tagline overlay and seamless gradient bridges
// =============================================================================

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { GROUP_PHOTO_CONTENT } from '@/lib/constants';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function GroupPhotoSection() {
  const { tagline } = GROUP_PHOTO_CONTENT;
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  
  // Subtle parallax on the photo
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section ref={sectionRef} className="relative py-0">
      {/* Top gradient bridge — blends from Hero */}
      <div className="absolute top-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-b from-[#0a0f1a] via-[#0a0f1a]/60 to-transparent z-10 pointer-events-none" />

      {/* Group Photo Container */}
      <div className="relative w-full min-h-screen">
        {/* Group Photo with parallax */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: imageY }}
          initial={{ scale: 1.08, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/group_photo.png"
            alt="AGENTS Group Photo"
            fill
            className="object-cover"
            priority
          />
          
          {/* Multi-layered overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1e]/90 via-transparent to-transparent" />
          {/* Side vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)]" />
        </motion.div>
        
        {/* Tagline Overlay - Centered */}
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 z-[5]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Subtitle with line accents */}
          <motion.div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8" variants={fadeInUp}>
            <div className="hidden sm:block w-8 h-px bg-white/30" />
            <p 
              className="text-[10px] sm:text-xs text-white/70 tracking-[0.2em] uppercase"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              {GROUP_PHOTO_CONTENT.subtitle}
            </p>
            <div className="hidden sm:block w-8 h-px bg-white/30" />
          </motion.div>

          {/* Main Tagline — word-by-word reveal */}
          <div className="text-center max-w-5xl">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white font-normal"
              style={{ fontFamily: 'var(--font-manrope)' }}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.span variants={wordVariants}>{tagline.prefix} </motion.span>
              <motion.span 
                className="text-[#FFE500] italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl inline-block"
                style={{ fontFamily: 'var(--font-romanesco)' }}
                variants={wordVariants}
              >
                {tagline.science}
              </motion.span>
              <motion.span variants={wordVariants}> {tagline.middle} </motion.span>
              <motion.span 
                className="text-[#FFE500] italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl inline-block"
                style={{ fontFamily: 'var(--font-romanesco)' }}
                variants={wordVariants}
              >
                {tagline.service}
              </motion.span>
            </motion.h2>

            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 sm:mt-3 leading-tight text-white font-normal"
              style={{ fontFamily: 'var(--font-manrope)' }}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.span variants={wordVariants}>{tagline.suffix} </motion.span>
              <motion.span 
                className="text-[#FFE500] italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl inline-block"
                style={{ fontFamily: 'var(--font-romanesco)' }}
                variants={wordVariants}
              >
                {tagline.progress}
              </motion.span>
            </motion.h2>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient bridge — blends into Perspectives */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-[#0a0e1e] via-[#0a0e1e]/70 to-transparent z-10 pointer-events-none" />
    </section>
  );
}
