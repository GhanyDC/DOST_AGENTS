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
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section className="relative min-h-screen pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24 bg-gradient-to-b from-[#0a0a1a] via-[#0f0f1e] to-[#1a1a2e] overflow-hidden flex flex-col justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#FFE500]/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#42a5f5]/10 rounded-full blur-3xl" />
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
            <span style={{ fontFamily: 'var(--font-manrope)' }}>{TESTIMONIALS_CONTENT.title}</span>
            {' '}
            <span 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FFE500] italic font-normal tracking-wide block sm:inline mt-2 sm:mt-0"
              style={{ fontFamily: 'var(--font-romanesco)' }}
            >
              {TESTIMONIALS_CONTENT.titleHighlight}
            </span>
          </h2>
          <p 
            className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-white/70 max-w-3xl mx-auto leading-relaxed"
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
            className="absolute left-0 sm:-left-4 md:-left-8 top-1/2 -translate-y-1/2 z-20 group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/20 hover:bg-[#FFE500] hover:border-[#FFE500] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(255,229,0,0.4)]"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button - Right Side */}
          <button
            onClick={goToNext}
            disabled={testimonials.length <= 1}
            className="absolute right-0 sm:-right-4 md:-right-8 top-1/2 -translate-y-1/2 z-20 group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/20 hover:bg-[#FFE500] hover:border-[#FFE500] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(255,229,0,0.4)]"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
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
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
              }}
              className="absolute inset-0 flex items-center justify-center px-12 sm:px-16 md:px-20"
            >
              <div className="w-full max-w-3xl p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#1a1a2e]/70 to-[#16213e]/70 border border-white/10 backdrop-blur-md shadow-[0_20px_70px_rgba(0,0,0,0.3)]">
                {/* Avatar */}
                <div className="flex justify-center mb-6 sm:mb-8">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-white/5 border-3 border-[#FFE500]/30 shadow-[0_0_30px_rgba(255,229,0,0.2)]">
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
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-[#FFE500] opacity-80" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Quote */}
                <blockquote 
                  className="text-center text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed mb-6 sm:mb-8 px-2 sm:px-4"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {currentTestimonial.quote}
                </blockquote>

                {/* Author Info */}
                <div className="text-center border-t border-white/10 pt-6">
                  <p 
                    className="font-bold text-base sm:text-lg md:text-xl text-white mb-1"
                    style={{ fontFamily: 'var(--font-manrope)' }}
                  >
                    {currentTestimonial.author}
                  </p>
                  <p 
                    className="text-xs sm:text-sm md:text-base text-[#FFE500]/80 font-medium"
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
                  ? 'w-8 sm:w-10 h-2 sm:h-2.5 bg-[#FFE500] shadow-[0_0_15px_rgba(255,229,0,0.6)]'
                  : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
