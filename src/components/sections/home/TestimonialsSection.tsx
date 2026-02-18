'use client';

// =============================================================================
// Testimonials Section Component
// Single testimonial carousel with navigation
// =============================================================================

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS_CONTENT, SAMPLE_TESTIMONIALS } from '@/lib/constants';
import { getInitials } from '@/lib/utils';
import type { Testimonial } from '@/types';

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

export function TestimonialsSection({
  testimonials = SAMPLE_TESTIMONIALS,
}: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  }, [testimonials.length]);

  const goToNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[activeIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      filter: 'blur(4px)',
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      filter: 'blur(4px)',
    }),
  };

  return (
    <section className="relative min-h-screen pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24 bg-gradient-to-b from-[#0b0e22] via-[#0e1328] to-[#0c1020] overflow-hidden flex flex-col justify-center noise-overlay">
      {/* Background Effects — warm glow behind testimonial card */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(255,229,0,0.05),transparent_65%)] animate-pulse-glow" />
        <div className="absolute top-[25%] right-[20%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(66,165,245,0.06),transparent_70%)] animate-pulse-glow" style={{ animationDelay: '2s' }} />
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
                {TESTIMONIALS_CONTENT.title}
              </span>
              {' '}
              <span
                className="text-[#FFE500]"
                style={{ fontFamily: 'var(--font-manrope)' }}
              >
                {TESTIMONIALS_CONTENT.titleHighlight}
              </span>
            </h2>
          <p 
            className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-white/60 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            {TESTIMONIALS_CONTENT.description}
          </p>
        </motion.div>
      </div>

      {/* Testimonial Carousel */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px] flex items-center justify-center">
          {/* Previous Button - Left Side */}
          <button
            onClick={goToPrev}
            disabled={testimonials.length <= 1}
            className="absolute left-0 sm:-left-4 md:-left-8 top-1/2 -translate-y-1/2 z-20 group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/[0.04] border border-white/10 hover:bg-[#FFE500] hover:border-[#FFE500] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(255,229,0,0.3)]"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button - Right Side */}
          <button
            onClick={goToNext}
            disabled={testimonials.length <= 1}
            className="absolute right-0 sm:-right-4 md:-right-8 top-1/2 -translate-y-1/2 z-20 group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/[0.04] border border-white/10 hover:bg-[#FFE500] hover:border-[#FFE500] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(255,229,0,0.3)]"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 250, damping: 28 },
                opacity: { duration: 0.35 },
                scale: { duration: 0.35 },
                filter: { duration: 0.3 },
              }}
              className="absolute inset-0 flex items-center justify-center px-12 sm:px-16 md:px-20"
            >
              <div className="w-full max-w-3xl p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#111a30]/60 to-[#0d1526]/60 border border-white/[0.06] backdrop-blur-md shadow-[0_12px_48px_rgba(0,0,0,0.25)]">
                {/* Avatar */}
                <div className="flex justify-center mb-6 sm:mb-8">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-white/[0.03] border-2 border-[#FFE500]/20 shadow-[0_0_24px_rgba(255,229,0,0.1)]">
                    {currentTestimonial.imageUrl ? (
                      <Image
                        src={currentTestimonial.imageUrl}
                        alt={currentTestimonial.author}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/60 text-xl sm:text-2xl md:text-3xl font-bold" style={{ fontFamily: 'var(--font-manrope)' }}>
                        {getInitials(currentTestimonial.author)}
                      </div>
                    )}
                  </div>
                </div>

                {/* Quote Marks */}
                <div className="flex justify-center mb-4">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#FFE500]/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Quote */}
                <blockquote 
                  className="text-center text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed mb-6 sm:mb-8 px-2 sm:px-4 italic"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="text-center border-t border-white/[0.06] pt-6">
                  <p 
                    className="font-bold text-base sm:text-lg md:text-xl text-white mb-1"
                    style={{ fontFamily: 'var(--font-manrope)' }}
                  >
                    {currentTestimonial.author}
                  </p>
                  <p 
                    className="text-xs sm:text-sm md:text-base text-[#FFE500]/70 font-medium"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    {currentTestimonial.batch}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicator Dots - Bottom Center */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 mt-8 sm:mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 12000);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex
                  ? 'w-8 sm:w-10 h-2 sm:h-2.5 bg-[#FFE500] shadow-[0_0_12px_rgba(255,229,0,0.4)]'
                  : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
