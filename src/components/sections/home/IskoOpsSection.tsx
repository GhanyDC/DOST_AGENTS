'use client';

// =============================================================================
// ISKO-OPS Section Component
// Promotional section for the ISKO-OPS review program
// =============================================================================

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ISKO_OPS_CONTENT } from '@/lib/constants';

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

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function IskoOpsSection() {
  return (
    <section className="relative min-h-screen pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24 bg-gradient-to-b from-[#0d1228] via-[#0a0f1a] to-[#080c14] overflow-hidden flex items-center noise-overlay">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[25%] left-[15%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(66,165,245,0.06),transparent_70%)] animate-pulse-glow" />
        <div className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,229,0,0.05),transparent_70%)] animate-pulse-glow" style={{ animationDelay: '2.5s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-[#111a30]/50 to-[#0d1526]/50 border border-white/[0.06] backdrop-blur-md shadow-[0_12px_48px_rgba(0,0,0,0.3)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Side */}
            <motion.div 
              className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] bg-black/20 overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/isko_ops_poster.png"
                alt="ISKO-OPS 2026 - Free Online Review Sessions"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              {/* Right edge blend for large screens */}
              <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#111a30]/50 to-transparent" />
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
                className="text-sm sm:text-base text-white/70 mb-4 leading-relaxed"
                style={{ fontFamily: 'var(--font-poppins)' }}
                variants={itemVariants}
              >
                A <span className="font-semibold text-white/90">FREE Online Review Program</span> designed to help aspiring scholars in Cagayan Valley confidently prepare for the <span className="font-semibold text-white/90">2026 DOST-SEI Undergraduate Scholarship Qualifying Examination</span>.
              </motion.p>

              {/* Details */}
              <motion.p 
                className="text-sm sm:text-base text-white/70 mb-4 leading-relaxed"
                style={{ fontFamily: 'var(--font-poppins)' }}
                variants={itemVariants}
              >
                Anchored on <span className="font-semibold text-white/90">Agham na Ramdam</span>, ISKO-OPS brings science closer through guided tutoring, review sessions, and meaningful mentorship, <span className="text-[#FFE500]/80">transforming learning into opportunities and solutions for the youth</span>.
              </motion.p>

              <motion.p 
                className="text-sm sm:text-base text-white/70 mb-4 leading-relaxed hidden md:block"
                style={{ fontFamily: 'var(--font-poppins)' }}
                variants={itemVariants}
              >
                Powered by <span className="font-semibold text-white/90">DOST Cagayan Valley, DOST ACCESS, and DOST-SEI Scholars Organizations in Cagayan Valley</span>, this initiative brings together top-performing scholars, outstanding alumni, and expert mentors ready to guide you every step of the way.
              </motion.p>

              {/* Tagline */}
              <motion.p 
                className="text-sm sm:text-base text-white/90 mb-2 font-medium"
                style={{ fontFamily: 'var(--font-poppins)' }}
                variants={itemVariants}
              >
                <span className="font-bold text-[#FFE500]">TARA:</span> Sama-sama nating buuin ang kinabukasang hinuhubog ng kaalaman at malasakit.
              </motion.p>
              <motion.p 
                className="text-sm sm:text-base text-white/80 mb-6 sm:mb-8"
                style={{ fontFamily: 'var(--font-poppins)' }}
                variants={itemVariants}
              >
                Your journey to becoming a <span className="font-semibold text-[#FFE500]/90">DOST-SEI Scholar</span> starts here.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4" variants={itemVariants}>
                <Link href="/isko-ops" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-transparent border border-white/20 text-white hover:bg-white hover:text-black hover:border-white">
                    Read More
                  </button>
                </Link>
                <Link href={`https://${ISKO_OPS_CONTENT.registrationLink}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-[#FFE500] text-black hover:bg-[#FFD700] hover:shadow-[0_0_20px_rgba(255,229,0,0.3)]">
                    Register Now
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient — fades to near-black for footer transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#060a10] pointer-events-none z-[2]" />
    </section>
  );
}
