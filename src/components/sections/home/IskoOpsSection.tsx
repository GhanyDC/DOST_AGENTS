'use client';

// =============================================================================
// ISKO-OPS Section Component
// Promotional section for the ISKO-OPS review program
// =============================================================================

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
    <section className="relative min-h-screen pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24 bg-gradient-to-b from-[#0a0a1a] via-[#0f0f1e] to-[#1a1a2e] overflow-hidden flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#42a5f5]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#FFE500]/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1a2e]/70 to-[#16213e]/70 border border-white/10 backdrop-blur-md shadow-[0_20px_70px_rgba(0,0,0,0.3)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Side */}
            <motion.div 
              className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] bg-black/20"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            </motion.div>

            {/* Content Side */}
            <motion.div 
              className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Title */}
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-[#FFE500]"
                style={{ fontFamily: 'var(--font-manrope)' }}
                variants={itemVariants}
              >
                {ISKO_OPS_CONTENT.title}
              </motion.h2>
              <motion.h3 
                className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-5 sm:mb-6"
                style={{ fontFamily: 'var(--font-manrope)' }}
                variants={itemVariants}
              >
                {ISKO_OPS_CONTENT.subtitle}
              </motion.h3>

              {/* Description */}
              <motion.p 
                className="text-sm sm:text-base text-white/80 mb-4 leading-relaxed"
                style={{ fontFamily: 'var(--font-poppins)' }}
                variants={itemVariants}
              >
                A <span className="font-semibold text-white">FREE Online Review Program</span> designed to help aspiring scholars in Cagayan Valley confidently prepare for the <span className="font-semibold text-white">2026 DOST-SEI Undergraduate Scholarship Qualifying Examination</span>.
              </motion.p>

              {/* Details */}
              <motion.p 
                className="text-sm sm:text-base text-white/80 mb-4 leading-relaxed"
                style={{ fontFamily: 'var(--font-poppins)' }}
                variants={itemVariants}
              >
                Anchored on <span className="font-semibold text-white">Agham na Ramdam</span>, ISKO-OPS brings science closer through guided tutoring, review sessions, and meaningful mentorship, <span className="text-[#FFE500]">transforming learning into opportunities and solutions for the youth</span>.
              </motion.p>

              <motion.p 
                className="text-sm sm:text-base text-white/80 mb-4 leading-relaxed hidden md:block"
                style={{ fontFamily: 'var(--font-poppins)' }}
                variants={itemVariants}
              >
                Powered by <span className="font-semibold text-white">DOST Cagayan Valley, DOST ACCESS, and DOST-SEI Scholars Organizations in Cagayan Valley</span>, this initiative brings together top-performing scholars, outstanding alumni, and expert mentors ready to guide you every step of the way. Expect high-yield lessons, proven exam strategies, mock exams, and real insights from those who&apos;ve been in your shoes—and succeeded.
              </motion.p>

              {/* Tagline */}
              <motion.p 
                className="text-sm sm:text-base text-white mb-2 font-medium"
                style={{ fontFamily: 'var(--font-poppins)' }}
                variants={itemVariants}
              >
                <span className="font-bold text-[#FFE500]">TARA:</span> Sama-sama nating buuin ang kinabukasang hinuhubog ng kaalaman at malasakit.
              </motion.p>
              <motion.p 
                className="text-sm sm:text-base text-white/90 mb-6 sm:mb-8"
                style={{ fontFamily: 'var(--font-poppins)' }}
                variants={itemVariants}
              >
                Your journey to becoming a <span className="font-semibold text-[#FFE500]">DOST-SEI Scholar</span> starts here.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4" variants={itemVariants}>
                <Link href="/isko-ops" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-transparent border-2 border-white/30 text-white hover:bg-white hover:text-black hover:border-white">
                    Read More
                  </button>
                </Link>
                <Link href={`https://${ISKO_OPS_CONTENT.registrationLink}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-[#FFE500] text-black hover:bg-[#FFD700] hover:shadow-[0_0_25px_rgba(255,229,0,0.5)]">
                    Register Now
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
