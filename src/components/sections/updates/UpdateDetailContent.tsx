'use client';

// =============================================================================
// Update Detail Content
// Full article view with hero, content, sidebar, and photo gallery
// Matches design: back button, yellow Romanesco title, sidebar metadata, gallery
// =============================================================================

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import type { Update } from '@/types';

interface UpdateDetailContentProps {
  update: Update;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

// Placeholder content for articles that have no content yet
const PLACEHOLDER_PARAGRAPHS = [
  'The rain paused just long enough for the city to exhale, leaving the sidewalks glossy and the air faintly metallic, as if the night had been charging itself. Somewhere above the street, a window flickered on and off, signaling a life mid-thought, while a busker tuned a guitar with the patience of someone who believed the next song might change everything. Time felt elastic in that moment—stretching, folding, refusing to settle—until a breeze carried the smell of coffee and wet paper, and the world quietly decided to keep going.',
  'The rain paused just long enough for the city to exhale, leaving the sidewalks glossy and the air faintly metallic, as if the night had been charging itself. Somewhere above the street, a window flickered on and off, signaling a life mid-thought, while a busker tuned a guitar with the patience of someone who believed the next song might change everything. Time felt elastic in that moment—stretching, folding, refusing to settle—until a breeze carried the smell of coffee and wet paper, and the world quietly decided to keep going.',
  'The rain paused just long enough for the city to exhale, leaving the sidewalks glossy and the air faintly metallic, as if the night had been charging itself. Somewhere above the street, a window flickered on and off, signaling a life mid-thought, while a busker tuned a guitar with the patience of someone who believed the next song might change everything. Time felt elastic in that moment—stretching, folding, refusing to settle—until a breeze carried the smell of coffee and wet paper, and the world quietly decided to keep going. The rain paused just long enough for the city to exhale, leaving the sidewalks glossy and the air faintly metallic, as if the night had been charging itself. Somewhere above the street, a window flickered on and off, signaling a life mid-thought, while a busker tuned a guitar with the patience of someone who believed the next song might change everything. Time felt elastic in that moment—stretching, folding, refusing to settle—until a breeze carried the smell of coffee and wet paper, and the world quietly decided to keep going.',
];

// Placeholder gallery images (using existing assets with varied aspect ratios)
const PLACEHOLDER_GALLERY = [
  '/group_photo.png',
  '/isko_ops_poster.png',
  '/group_photo.png',
  '/testimonial_avatar.png',
  '/group_photo.png',
  '/isko_ops_poster.png',
];

export function UpdateDetailContent({ update }: UpdateDetailContentProps) {
  const contentParagraphs =
    update.content.length > 0 ? update.content : PLACEHOLDER_PARAGRAPHS;
  const galleryImages =
    update.galleryImages && update.galleryImages.length > 0
      ? update.galleryImages
      : PLACEHOLDER_GALLERY;

  return (
    <main className="min-h-screen bg-(--background)">
      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[40vh] sm:h-[44vh] md:h-[48vh] flex items-end overflow-hidden">
        {/* Background Image with blur */}
        <div className="absolute inset-0">
          <Image
            src={update.imageUrl}
            alt={update.title}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0f1a] via-[#0a0f1a]/60 to-black/30" />
        </div>

        {/* Hero Content — pinned to bottom */}
        <Container className="relative z-10 pb-6 sm:pb-8 md:pb-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Back to Updates link — matching reference icon |← */}
            <motion.div className="mb-3 sm:mb-4" variants={fadeInUp}>
              <Link
                href="/updates"
                className="inline-flex items-center gap-2 text-[11px] sm:text-xs text-[#FFE500] hover:text-[#FFE500]/80 transition-colors uppercase tracking-[0.15em] font-medium"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                {/* Bar + Arrow icon matching reference */}
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="5" x2="4" y2="19" />
                  <polyline points="12 5 5 12 12 19" />
                  <line x1="5" y1="12" x2="20" y2="12" />
                </svg>
                Back to Updates
              </Link>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FFE500] italic leading-[1.1] max-w-4xl"
              style={{ fontFamily: 'var(--font-romanesco)' }}
              variants={fadeInUp}
            >
              {update.title}
            </motion.h1>
          </motion.div>
        </Container>
      </section>

      {/* Content Section */}
      <div className="bg-(--background)">
        <Container className="py-10 sm:py-14 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Main Content - 8 columns */}
            <motion.article
              className="lg:col-span-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {contentParagraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-xs sm:text-sm md:text-[15px] text-(--foreground-muted) leading-[1.8] sm:leading-[1.85] mb-5 sm:mb-7"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                  variants={fadeInUp}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.article>

            {/* Sidebar - 4 columns (static, not sticky) */}
            <motion.aside
              className="lg:col-span-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="space-y-0 rounded-xl overflow-hidden border border-(--card-border) bg-(--card)">
                {/* Academic Year */}
                <div className="px-5 sm:px-6 pt-5 sm:pt-6 pb-4">
                  <h4
                    className="text-[10px] sm:text-xs text-(--foreground-muted) uppercase tracking-widest mb-2 font-medium"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    Academic Year
                  </h4>
                  <p
                    className="text-base sm:text-lg font-bold text-(--foreground)"
                    style={{ fontFamily: 'var(--font-manrope)' }}
                  >
                    {update.academicYear}
                  </p>
                </div>

                {/* Divider */}
                <div className="mx-5 sm:mx-6 border-t border-(--border)" />

                {/* Category */}
                <div className="px-5 sm:px-6 py-4">
                  <h4
                    className="text-[10px] sm:text-xs text-(--foreground-muted) uppercase tracking-widest mb-2.5 font-medium"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    Category
                  </h4>
                  <span
                    className="inline-block px-3 py-1 text-[10px] sm:text-xs font-bold rounded-md bg-(--color-primary) text-[#111827] uppercase tracking-wider"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    {update.category === 'events' ? 'Outreach' : update.category}
                  </span>
                </div>

                {/* Divider */}
                <div className="mx-5 sm:mx-6 border-t border-(--border)" />

                {/* Share Button */}
                <div className="px-5 sm:px-6 py-4 sm:py-5">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-xs uppercase tracking-wider font-semibold"
                    onClick={() => {
                      if (typeof navigator !== 'undefined' && navigator.clipboard) {
                        navigator.clipboard.writeText(window.location.href);
                      }
                    }}
                  >
                    <svg
                      className="w-3.5 h-3.5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                    Share Project
                  </Button>
                </div>
              </div>
            </motion.aside>
          </div>
        </Container>
      </div>

      {/* Photo Gallery Section — constrained to not exceed sidebar row */}
      <section className="pb-16 sm:pb-20 md:pb-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Gallery takes up the same 8-col width as main content */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-6 sm:mb-8"
              >
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl text-[#FFE500] italic"
                  style={{ fontFamily: 'var(--font-romanesco)' }}
                >
                  Photo Gallery
                </h2>
              </motion.div>

              {/* Gallery Grid — 2 equal-height columns */}
              <motion.div
                className="grid grid-cols-2 gap-3 sm:gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                  >
                    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-(--muted) border border-(--card-border) group cursor-pointer aspect-4/3">
                      <Image
                        src={image}
                        alt={`${update.title} photo ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            {/* Empty 4-col space to align with sidebar above */}
            <div className="hidden lg:block lg:col-span-4" />
          </div>
        </Container>
      </section>
    </main>
  );
}
