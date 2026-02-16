'use client';

// =============================================================================
// Update Detail Content
// Full article view with hero, content, sidebar, and photo gallery
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

export function UpdateDetailContent({ update }: UpdateDetailContentProps) {
  return (
    <main className="min-h-screen bg-(--background) pt-20 sm:pt-24 pb-16 sm:pb-20">
      {/* Hero Section with Background Image */}
      <section className="relative w-full min-h-[50vh] sm:min-h-[60vh] flex items-end overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={update.imageUrl}
            alt={update.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        </div>

        {/* Hero Content */}
        <Container className="relative z-10 pb-8 sm:pb-12 md:pb-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Category/Breadcrumb */}
            <motion.div className="mb-3 sm:mb-4" variants={fadeInUp}>
              <Link
                href="/updates"
                className="text-[10px] sm:text-xs text-white/60 hover:text-white/90 transition-colors uppercase tracking-wider"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                DOST/AGENTS &amp; PROJECTS
              </Link>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white italic leading-tight max-w-4xl"
              style={{ fontFamily: 'var(--font-romanesco)' }}
              variants={fadeInUp}
            >
              {update.title}
            </motion.h1>
          </motion.div>
        </Container>
      </section>

      {/* Content Section */}
      <Container className="mt-8 sm:mt-12 md:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content - 2 columns */}
          <motion.div
            className="lg:col-span-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Article Body */}
            {update.content.length > 0 ? (
              update.content.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-xs sm:text-sm md:text-base text-(--foreground-muted) leading-relaxed mb-4 sm:mb-6"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                  variants={fadeInUp}
                >
                  {paragraph}
                </motion.p>
              ))
            ) : (
              <motion.p
                className="text-xs sm:text-sm md:text-base text-(--foreground-muted) leading-relaxed mb-4 sm:mb-6"
                style={{ fontFamily: 'var(--font-poppins)' }}
                variants={fadeInUp}
              >
                Content for this update is coming soon. Check back later for the full article.
              </motion.p>
            )}
          </motion.div>

          {/* Sidebar - 1 column */}
          <motion.aside
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="sticky top-28 space-y-6">
              {/* Academic Year */}
              <div className="glass-panel rounded-xl p-4 sm:p-5">
                <h4
                  className="text-[10px] sm:text-xs text-(--foreground-muted) uppercase tracking-wider mb-2"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  Academic Year
                </h4>
                <p
                  className="text-sm sm:text-base font-semibold text-(--foreground)"
                  style={{ fontFamily: 'var(--font-manrope)' }}
                >
                  {update.academicYear}
                </p>
              </div>

              {/* Category */}
              <div className="glass-panel rounded-xl p-4 sm:p-5">
                <h4
                  className="text-[10px] sm:text-xs text-(--foreground-muted) uppercase tracking-wider mb-2"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  Category
                </h4>
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-(--color-primary) text-[#111827] capitalize">
                  {update.category}
                </span>
              </div>

              {/* DOST Officers / Authors */}
              {update.authors && update.authors.length > 0 && (
                <div className="glass-panel rounded-xl p-4 sm:p-5">
                  <h4
                    className="text-[10px] sm:text-xs text-(--foreground-muted) uppercase tracking-wider mb-3"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    DOST Officers
                  </h4>
                  <div className="space-y-3">
                    {update.authors.map((author, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden bg-(--muted) border border-(--border)">
                          {author.imageUrl ? (
                            <Image
                              src={author.imageUrl}
                              alt={author.name}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-(--foreground-muted) text-xs font-semibold">
                              {author.name.charAt(0)}
                            </div>
                          )}
                        </div>
                        <span
                          className="text-xs sm:text-sm text-(--foreground)"
                          style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                          {author.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Share Button */}
              <Button
                variant="outline"
                size="md"
                className="w-full"
                onClick={() => {
                  if (typeof navigator !== 'undefined' && navigator.clipboard) {
                    navigator.clipboard.writeText(window.location.href);
                  }
                }}
              >
                <svg
                  className="w-4 h-4 mr-2"
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
          </motion.aside>
        </div>
      </Container>

      {/* Photo Gallery Section */}
      {update.galleryImages && update.galleryImages.length > 0 && (
        <section className="mt-12 sm:mt-16 md:mt-20">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-2xl sm:text-3xl md:text-4xl text-(--color-accent-yellow) italic mb-8 sm:mb-10"
                style={{ fontFamily: 'var(--font-romanesco)' }}
              >
                Photo Gallery
              </h2>
            </motion.div>

            {/* Masonry-like Gallery Grid */}
            <motion.div
              className="columns-2 md:columns-3 gap-3 sm:gap-4 space-y-3 sm:space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {update.galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="break-inside-avoid rounded-xl overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <div
                    className={`relative overflow-hidden rounded-xl bg-(--muted) border border-(--card-border) group ${
                      index % 3 === 0
                        ? 'aspect-[3/4]'
                        : index % 3 === 1
                          ? 'aspect-square'
                          : 'aspect-[4/3]'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${update.title} photo ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>
      )}
    </main>
  );
}
