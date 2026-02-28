'use client';

// =============================================================================
// Scholarship Sources Page Content
// Information about DOST-SEI scholarship support, services, and exam preparation
// Prepared for backend integration — accepts data via props
// =============================================================================

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import type { Office, StudyArea, PrepStrategy } from '@/types';
import {
  SCHOLARSHIP_OFFICES,
  SCHOLARSHIP_STUDY_AREAS,
  SCHOLARSHIP_PREP_STRATEGIES,
} from '@/lib/constants';

// ---------------------------------------------------------------------------
// Animation Variants
// ---------------------------------------------------------------------------

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------

function ClockIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function BroadcastIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
    </svg>
  );
}

function getIcon(icon: PrepStrategy['icon']) {
  switch (icon) {
    case 'clock':
      return <ClockIcon />;
    case 'map':
      return <DocumentIcon />;
    case 'users':
      return <BroadcastIcon />;
  }
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

interface ScholarshipSourcesContentProps {
  offices?: Office[];
  studyAreas?: StudyArea[];
  prepStrategies?: PrepStrategy[];
}

export function ScholarshipSourcesContent({
  offices = SCHOLARSHIP_OFFICES,
  studyAreas = SCHOLARSHIP_STUDY_AREAS,
  prepStrategies = SCHOLARSHIP_PREP_STRATEGIES,
}: ScholarshipSourcesContentProps) {
  return (
    <main className="min-h-screen bg-[#080c14]">
      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 md:pt-36 pb-8 sm:pb-10 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 30% 60%, rgba(10,60,180,0.12) 0%, transparent 70%)',
          }}
        />
        <Container className="relative z-10">
          <motion.div
            className="rounded-xl border border-white/8 bg-[#0d1528] p-8 sm:p-10 md:p-14 w-full"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
              style={{ fontFamily: 'var(--font-poppins)', fontWeight: 700 }}
              variants={staggerItem}
            >
              <span className="text-white">Scholarship Support & </span>
              <span className="text-[#FFE500]">Services</span>
            </motion.h1>
            <motion.p
              className="text-xs sm:text-sm md:text-base text-white/60 leading-relaxed max-w-3xl"
              style={{ fontFamily: 'var(--font-poppins)' }}
              variants={staggerItem}
            >
              Empowering the next generation of scientists and engineers through structured guidance, comprehensive exam preparation, and a robust support network.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Offices & Organizations */}
      <section className="py-12 sm:py-16 overflow-hidden">
        <Container>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FFE500] mb-8 sm:mb-10"
            style={{ fontFamily: 'var(--font-poppins)', fontWeight: 700 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Offices & Organizations
          </motion.h2>
        </Container>

        {/* Horizontally scrollable cards row */}
        <Container>
          <motion.div
            className="flex gap-6 pb-6 overflow-x-auto scrollbar-hide"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
          >
            {offices.map((office) => (
              <motion.div
                key={office.id}
                className="group flex-none w-[280px] sm:w-[310px] lg:w-[330px] rounded-xl border border-white/10 bg-[#0c1322] overflow-hidden"
                variants={staggerItem}
              >
                {/* Image */}
                <div className="relative w-full aspect-[4/3] bg-[#0a1020] overflow-hidden">
                  <Image
                    src={office.image}
                    alt={office.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="p-4 sm:p-5">
                  <h3
                    className="text-sm sm:text-base font-bold text-white mb-2.5 leading-tight"
                    style={{ fontFamily: 'var(--font-manrope)' }}
                  >
                    {office.name}
                  </h3>

                  <div className="space-y-1.5 text-[10px] sm:text-[11px]" style={{ fontFamily: 'var(--font-poppins)' }}>
                    <div className="flex items-start gap-1.5">
                      <svg className="w-3 h-3 mt-px shrink-0 text-[#FF4D4D]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      <span className="text-white/55">{office.location}</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <svg className="w-3 h-3 mt-px shrink-0 text-white/45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-white/55">{office.email}</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <svg className="w-3 h-3 mt-px shrink-0 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      <a
                        href={office.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFE500] hover:text-[#FFE500]/80 transition-colors truncate"
                      >
                        {office.link}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Exam Preparation */}
      <section className="py-12 sm:py-16">
        <Container>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FFE500] mb-8 sm:mb-10"
            style={{ fontFamily: 'var(--font-poppins)', fontWeight: 700 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Exam Preparation
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Recommended Study Areas */}
            <motion.div
              className="rounded-xl border border-white/10 bg-[#0c1322] p-6 sm:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3
                className="text-base sm:text-lg font-bold text-white mb-6"
                style={{ fontFamily: 'var(--font-manrope)' }}
              >
                Recommended Study Areas
              </h3>

              <div className="space-y-5">
                {studyAreas.map((area) => (
                  <div key={area.id} className="flex items-start gap-3">
                    <div className="shrink-0 w-5 h-5 rounded bg-[#FFE500] flex items-center justify-center text-[#080c14] text-[11px] font-bold">
                      {area.id}
                    </div>
                    <div>
                      <h4
                        className="text-sm font-semibold text-white mb-0.5"
                        style={{ fontFamily: 'var(--font-manrope)' }}
                      >
                        {area.title}
                      </h4>
                      <p
                        className="text-xs text-white/45 leading-relaxed"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                      >
                        {area.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Preparation Strategies */}
            <motion.div
              className="rounded-xl border border-white/10 bg-[#0c1322] p-6 sm:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3
                className="text-base sm:text-lg font-bold text-white mb-6"
                style={{ fontFamily: 'var(--font-manrope)' }}
              >
                Preparation Strategies
              </h3>

              <div className="space-y-5">
                {prepStrategies.map((strategy) => (
                  <div key={strategy.id} className="flex items-start gap-3">
                    <div className="shrink-0 w-9 h-9 rounded-lg bg-[#FFE500] flex items-center justify-center text-[#080c14]">
                      {getIcon(strategy.icon)}
                    </div>
                    <div className="flex-1">
                      <h4
                        className="text-sm font-semibold text-[#FFE500] mb-0.5"
                        style={{ fontFamily: 'var(--font-manrope)' }}
                      >
                        {strategy.title}
                      </h4>
                      <p
                        className="text-xs text-white/45 leading-relaxed"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                      >
                        {strategy.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* QR Code Section — phone bleeds into footer */}
      <section className="pt-16 sm:pt-24 pb-0 overflow-visible">
        <Container>
          <motion.div
            className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* iPhone Mockup with QR — extends past section bottom */}
            <div className="relative w-80 sm:w-[22rem] lg:w-[28rem] xl:w-[32rem] shrink-0 mb-[-250px] sm:mb-[-320px] lg:mb-[-400px]">
              {/* iPhone frame */}
              <div className="relative bg-[#1a1a2e] rounded-[3rem] p-3 shadow-2xl border-2 border-white/40">
                {/* Dynamic Island / Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />
                {/* Camera dots */}
                <div className="absolute top-[1.15rem] left-1/2 translate-x-2 w-2.5 h-2.5 bg-[#1a1a3e] rounded-full z-20 ring-1 ring-[#2a2a4e]" />
                {/* Screen */}
                <div className="bg-white rounded-[2.25rem] overflow-hidden aspect-[9/16] flex flex-col">
                  {/* Status bar area */}
                  <div className="h-10 bg-white" />
                  {/* QR Content — positioned near top */}
                  <div className="flex flex-col items-center px-5 sm:px-6 pt-8">
                    <Image
                      src="/qr-reviewer.png"
                      alt="QR Code for free reviewers"
                      width={400}
                      height={400}
                      className="w-[85%] h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left flex-1">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold italic text-[#FFE500] mb-4 sm:mb-6"
                style={{ fontFamily: 'var(--font-poppins)', fontWeight: 700 }}
              >
                Scan this for free reviewers.
              </h2>
              <p
                className="text-sm sm:text-base text-white/55 leading-relaxed max-w-lg"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                To support your preparation for the qualifying exam, we are providing a free reviewer compiled by our DOST-SEI Scholars, designed to help you strengthen your knowledge and increase your chances of success.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
