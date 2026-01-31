'use client';

// =============================================================================
// ISKO-OPS Section Component
// Promotional section for the ISKO-OPS review program
// =============================================================================

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ISKO_OPS_CONTENT } from '@/lib/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function IskoOpsSection() {
  return (
    <section className="min-h-screen py-12 sm:py-16 md:py-20 bg-(--background) flex items-center">
      <Container>
        <motion.div 
          className="bg-(--card) border border-(--card-border) rounded-xl sm:rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8">
            {/* Image Side */}
            <motion.div 
              className="relative min-h-62.5 sm:min-h-75 lg:min-h-125 bg-(--muted)"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* ISKO-OPS poster image */}
              <Image
                src="/isko_ops_poster.png"
                alt="ISKO-OPS 2026 - Free Online Review Sessions"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Content Side */}
            <motion.div 
              className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Title */}
              <motion.h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2" variants={itemVariants}>
                <span className="text-(--color-secondary)">
                  {ISKO_OPS_CONTENT.title}
                </span>
              </motion.h2>
              <motion.h3 
                className="text-lg sm:text-xl md:text-2xl font-semibold text-(--foreground) mb-4 sm:mb-6"
                variants={itemVariants}
              >
                {ISKO_OPS_CONTENT.subtitle}
              </motion.h3>

              {/* Description */}
              <motion.p className="text-xs sm:text-sm text-(--foreground-muted) mb-3 sm:mb-4" variants={itemVariants}>
                A <span className="font-semibold text-(--foreground)">FREE Online Review Program</span> designed to help aspiring scholars in Cagayan Valley confidently prepare for the <span className="font-semibold text-(--foreground)">2026 DOST-SEI Undergraduate Scholarship Qualifying Examination</span>.
              </motion.p>

              {/* Details */}
              <motion.p className="text-xs sm:text-sm text-(--foreground-muted) mb-3 sm:mb-4" variants={itemVariants}>
                Anchored on <span className="font-semibold text-(--foreground)">Agham na Ramdam</span>, ISKO-OPS brings science closer through guided tutoring, review sessions, and meaningful mentorship, <span className="text-(--color-primary)">transforming learning into opportunities and solutions for the youth</span>.
              </motion.p>

              <motion.p className="text-xs sm:text-sm text-(--foreground-muted) mb-3 sm:mb-4 hidden sm:block" variants={itemVariants}>
                Powered by <span className="font-semibold text-(--foreground)">DOST Cagayan Valley, DOST ACCESS, and DOST-SEI Scholars Organizations in Cagayan Valley</span>, this initiative brings together top-performing scholars, outstanding alumni, and expert mentors ready to guide you every step of the way. Expect high-yield lessons, proven exam strategies, mock exams, and real insights from those who&apos;ve been in your shoes—and succeeded. Whether you&apos;re strengthening your fundamentals or sharpening your test-taking skills, <span className="font-semibold text-(--foreground)">ISKO-OPS levels the playing field and helps you reach your academic goals</span>.
              </motion.p>

              {/* Tagline */}
              <motion.p className="text-xs sm:text-sm text-(--foreground) mb-1 sm:mb-2" variants={itemVariants}>
                <span className="font-bold text-(--color-primary)">TARA:</span> Sama-sama nating buuin ang kinabukasang hinuhubog ng kaalaman at malasakit.
              </motion.p>
              <motion.p className="text-xs sm:text-sm text-(--foreground) mb-4 sm:mb-6" variants={itemVariants}>
                Your journey to becoming a <span className="font-semibold">DOST-SEI Scholar</span> starts here.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4" variants={itemVariants}>
                <Link href="/isko-ops" className="w-full sm:w-auto">
                  <Button variant="primary" size="md" className="w-full sm:w-auto">
                    Read More
                  </Button>
                </Link>
                <Link href={`https://${ISKO_OPS_CONTENT.registrationLink}`} target="_blank" className="w-full sm:w-auto">
                  <Button variant="outline" size="md" className="w-full sm:w-auto">
                    Register Now
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
