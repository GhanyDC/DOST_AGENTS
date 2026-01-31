'use client';

// =============================================================================
// Testimonials Section Component
// Carousel of scholar testimonials
// =============================================================================

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TESTIMONIALS_CONTENT, SAMPLE_TESTIMONIALS } from '@/lib/constants';
import { cn, getInitials } from '@/lib/utils';
import type { Testimonial } from '@/types';

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

// Single Testimonial Card
function TestimonialCard({
  testimonial,
  isActive,
}: {
  testimonial: Testimonial;
  isActive: boolean;
}) {
  return (
    <motion.div
      className={cn(
        'shrink-0 w-65 sm:w-75 md:w-87.5 lg:w-100 p-6 sm:p-8 rounded-2xl transition-all duration-300',
        'bg-(--card) border border-(--card-border)',
        'shadow-lg hover:shadow-xl',
        isActive ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
      )}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isActive ? 1 : 0.5, 
        scale: isActive ? 1 : 0.95 
      }}
      transition={{ duration: 0.4 }}
    >
      {/* Avatar */}
      <div className="flex justify-center mb-4 sm:mb-6">
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-(--muted) border-2 border-(--border)">
          {testimonial.imageUrl ? (
            <Image
              src={testimonial.imageUrl}
              alt={testimonial.author}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-(--foreground-muted) text-lg sm:text-xl font-semibold">
              {getInitials(testimonial.author)}
            </div>
          )}
        </div>
      </div>

      {/* Quote */}
      <blockquote className="text-center text-xs sm:text-sm md:text-base text-(--foreground) leading-relaxed mb-4 sm:mb-6 px-2">
        <span className="text-(--color-accent-yellow) text-2xl sm:text-3xl font-serif leading-none align-top mr-1">&ldquo;</span>
        <span className="inline">{testimonial.quote}</span>
        <span className="text-(--color-accent-yellow) text-2xl sm:text-3xl font-serif leading-none align-top ml-1">&rdquo;</span>
      </blockquote>

      {/* Author Info */}
      <div className="text-center">
        <p className="font-semibold text-sm sm:text-base text-(--foreground)">
          {testimonial.author}
        </p>
        <p className="text-xs sm:text-sm text-(--foreground-muted)">
          {testimonial.batch}
        </p>
      </div>
    </motion.div>
  );
}

export function TestimonialsSection({
  testimonials = SAMPLE_TESTIMONIALS,
}: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, [testimonials.length]);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, [testimonials.length]);

  return (
    <section className="min-h-screen py-12 sm:py-16 md:py-20 bg-(--background) overflow-hidden flex flex-col justify-center">
      <Container>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title={TESTIMONIALS_CONTENT.title}
            titleHighlight={TESTIMONIALS_CONTENT.titleHighlight}
            description={TESTIMONIALS_CONTENT.description}
            align="center"
          />
        </motion.div>
      </Container>

      {/* Carousel */}
      <div className="relative">
        {/* Navigation Arrows - Hidden on small mobile */}
        <button
          onClick={goToPrev}
          className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-(--surface) border border-(--border) flex items-center justify-center text-(--foreground) hover:bg-(--muted) transition-colors touch-target"
          aria-label="Previous testimonial"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-(--surface) border border-(--border) flex items-center justify-center text-(--foreground) hover:bg-(--muted) transition-colors touch-target"
          aria-label="Next testimonial"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Testimonials Container */}
        <div className="flex justify-center items-center gap-2 sm:gap-4 px-2 sm:px-4 overflow-x-auto scrollbar-hide py-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              isActive={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
