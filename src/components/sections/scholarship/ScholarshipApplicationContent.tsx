'use client';

// =============================================================================
// Scholarship Application Page Content
// Comprehensive DOST-SEI scholarship application guide
// =============================================================================

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SCHOLARSHIP_APPLICATION_DATA } from '@/lib/constants';
import type { ScholarshipApplicationData } from '@/types';

// ---------------------------------------------------------------------------
// Animation Variants
// ---------------------------------------------------------------------------

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// ---------------------------------------------------------------------------
// Step Icon SVGs
// ---------------------------------------------------------------------------

function StepIcon({ icon }: { icon: string }) {
  const iconPaths: Record<string, React.ReactNode> = {
    folder: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
      />
    ),
    edit: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      />
    ),
    play: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
      />
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
        <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
      </>
    ),
  };

  return (
    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#3d3d00] border border-[#FFE500]/30">
      <svg
        className="w-6 h-6 text-[#FFE500]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {iconPaths[icon] ?? iconPaths.folder}
      </svg>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Check Icon
// ---------------------------------------------------------------------------

function CheckIcon() {
  return (
    <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#FFE500]/40">
      <svg className="w-4 h-4 text-[#FFE500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

interface ScholarshipApplicationContentProps {
  /** Pass data from the backend in the future; falls back to static constants */
  data?: ScholarshipApplicationData;
}

export function ScholarshipApplicationContent({
  data = SCHOLARSHIP_APPLICATION_DATA,
}: ScholarshipApplicationContentProps) {
  return (
    <main className="min-h-screen bg-[#080c14]">
      {/* ================================================================= */}
      {/* Hero Section */}
      {/* ================================================================= */}
      <section className="relative pt-28 sm:pt-32 md:pt-36 pb-8 sm:pb-10 overflow-hidden">
        {/* Subtle gradient overlay */}
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
              <span className="text-white">{data.hero.title} </span>
              <span className="text-[#FFE500]">{data.hero.titleHighlight}</span>
            </motion.h1>

            <motion.p
              className="text-xs sm:text-sm md:text-base text-white/60 leading-relaxed max-w-3xl"
              style={{ fontFamily: 'var(--font-poppins)' }}
              variants={staggerItem}
            >
              {data.hero.description}
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* ================================================================= */}
      {/* Scholarship Types */}
      {/* ================================================================= */}
      <section className="py-6 sm:py-8">
        <Container>
          <motion.div
            className="grid md:grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            {data.scholarshipTypes.map((type) => (
              <motion.div
                key={type.id}
                className="relative rounded-xl border border-white/8 bg-[#0d1528] p-6 sm:p-8 overflow-hidden"
                variants={staggerItem}
              >
                {/* Yellow left accent bar — full height */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FFE500]" />
                <h3
                  className="text-sm sm:text-base font-bold text-white uppercase tracking-wider mb-4 pl-5"
                  style={{ fontFamily: 'var(--font-manrope)' }}
                >
                  {type.name}
                </h3>
                <ul className="space-y-2.5 pl-5">
                  {type.bulletPoints.map((point, i) => (
                    <li
                      key={i}
                      className="text-xs sm:text-sm text-white/70 flex items-start gap-2"
                      style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                      <span className="text-white/40 mt-0.5">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ================================================================= */}
      {/* CTA — Ready to begin your journey? */}
      {/* ================================================================= */}
      <section className="py-10 sm:py-14">
        <Container>
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#FFE500] tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-poppins)', fontWeight: 600 }}
              variants={staggerItem}
            >
              {data.cta.title}
            </motion.h2>
            <motion.p
              className="text-xs sm:text-sm text-white/60 mb-8 max-w-xl mx-auto"
              style={{ fontFamily: 'var(--font-poppins)' }}
              variants={staggerItem}
            >
              {data.cta.description}
            </motion.p>
            <motion.div variants={staggerItem}>
              <Link href={data.cta.buttonLink} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg">
                  {data.cta.buttonText}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ================================================================= */}
      {/* Eligibility Requirements */}
      {/* ================================================================= */}
      <section className="py-8 sm:py-10">
        <Container>
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#FFE500] tracking-tight mb-6 sm:mb-8"
            style={{ fontFamily: 'var(--font-poppins)', fontWeight: 600 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            Eligibility Requirements
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Image */}
            <motion.div
              className="relative aspect-4/3 rounded-xl overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src={data.eligibilityImageUrl}
                alt="DOST Building"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            {/* Requirements list */}
            <motion.div
              className="space-y-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerContainer}
            >
              {data.eligibilityRequirements.map((req) => (
                <motion.div
                  key={req.id}
                  className="flex items-center gap-4 p-3.5 rounded-lg border border-white/6 bg-[#0d1528]"
                  variants={staggerItem}
                >
                  <CheckIcon />
                  <span
                    className="text-xs sm:text-sm text-white/75"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    {req.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ================================================================= */}
      {/* Required Documents */}
      {/* ================================================================= */}
      <section className="py-8 sm:py-10">
        <Container>
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#FFE500] tracking-tight mb-6 sm:mb-8 text-right"
            style={{ fontFamily: 'var(--font-poppins)', fontWeight: 600 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            Required Documents
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Documents list */}
            <motion.div
              className="space-y-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerContainer}
            >
              {data.requiredDocuments.map((doc) => (
                <motion.div
                  key={doc.id}
                  className="flex items-center gap-4 p-3.5 rounded-lg border border-white/6 bg-[#0d1528]"
                  variants={staggerItem}
                >
                  <CheckIcon />
                  <span
                    className="text-xs sm:text-sm text-white/75"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    {doc.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Image */}
            <motion.div
              className="relative aspect-4/3 rounded-xl overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src={data.documentsImageUrl}
                alt="DOST Building"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ================================================================= */}
      {/* What to Do — Application Steps */}
      {/* ================================================================= */}
      <section className="py-10 sm:py-14">
        <Container>
          <motion.div
            className="text-center mb-8 sm:mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#FFE500] tracking-tight mb-3"
              style={{ fontFamily: 'var(--font-poppins)', fontWeight: 600 }}
            >
              What to do?
            </h2>
            <p
              className="text-xs sm:text-sm text-white/60"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              Follow these steps and be guided on how to start the application.
            </p>
          </motion.div>

          {/* Steps grid */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            {data.applicationSteps.map((step) => (
              <motion.div
                key={step.id}
                className="text-center"
                variants={staggerItem}
              >
                <div className="flex justify-center mb-4">
                  <StepIcon icon={step.icon} />
                </div>
                <h3
                  className="text-sm sm:text-base font-bold text-white mb-2"
                  style={{ fontFamily: 'var(--font-manrope)' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[10px] sm:text-xs text-white/50 leading-relaxed"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Important Dates & Post-Qualification */}
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            {/* Important Dates Card — yellow background */}
            <motion.div
              className="rounded-xl bg-[#FFE500] p-6 sm:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              {data.importantDates.map((d, i) => (
                <div
                  key={d.id}
                  className={[
                    'pb-4 mb-4',
                    i < data.importantDates.length - 1 ? 'border-b border-black/15' : '',
                  ].join(' ')}
                >
                  <p
                    className="text-[10px] sm:text-xs uppercase tracking-widest text-black/50 mb-1.5"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    {d.label}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-sm sm:text-base font-bold text-black"
                      style={{ fontFamily: 'var(--font-poppins)', fontWeight: 700 }}
                    >
                      {d.date}
                    </span>
                    {i === 0 && (
                      <svg className="w-4 h-4 text-black/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    )}
                  </div>
                </div>
              ))}

              <Link href={data.cta.buttonLink} target="_blank" rel="noopener noreferrer" className="block mt-2">
                <button
                  className="w-full py-3 sm:py-3.5 rounded-lg bg-[#080c14] text-[#FFE500] text-sm font-bold tracking-wide hover:bg-[#0d1528] transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-poppins)', fontWeight: 700 }}
                >
                  {data.cta.buttonText}
                </button>
              </Link>
            </motion.div>

            {/* Results Release & Post-Qualification & Service Obligation */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Results Release */}
              <div>
                <h3
                  className="text-xs sm:text-sm font-bold text-[#FFE500] uppercase tracking-widest mb-3"
                  style={{ fontFamily: 'var(--font-poppins)', fontWeight: 700 }}
                >
                  Results Release
                </h3>
                <ul className="space-y-2">
                  {data.resultsRelease.map((item, i) => (
                    <li
                      key={i}
                      className="text-xs sm:text-sm text-white/70 flex items-start gap-2.5"
                      style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                      <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Post-Qualification */}
              <div>
                <h3
                  className="text-xs sm:text-sm font-bold text-[#FFE500] uppercase tracking-widest mb-3"
                  style={{ fontFamily: 'var(--font-poppins)', fontWeight: 700 }}
                >
                  Post-Qualification
                </h3>
                <ul className="space-y-2">
                  {data.postQualification.map((step) => (
                    <li
                      key={step.id}
                      className="text-xs sm:text-sm text-white/70 flex items-start gap-2.5"
                      style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                      <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30" />
                      {step.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Obligation */}
              <div>
                <h3
                  className="text-xs sm:text-sm font-bold text-[#FFE500] uppercase tracking-widest mb-3"
                  style={{ fontFamily: 'var(--font-poppins)', fontWeight: 700 }}
                >
                  Service Obligation
                </h3>
                <ul className="space-y-2">
                  <li
                    className="text-xs sm:text-sm text-white/70 flex items-start gap-2.5"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30" />
                    {data.serviceObligation}
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ================================================================= */}
      {/* Who to Approach — Contact Persons */}
      {/* ================================================================= */}
      <section className="py-10 sm:py-14">
        <Container>
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#FFE500] tracking-tight mb-3"
              style={{ fontFamily: 'var(--font-poppins)', fontWeight: 600 }}
            >
              Who to approach?
            </h2>
            <p
              className="text-xs sm:text-sm text-white/60 max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              A look ahead at upcoming initiatives, evolving priorities, and the direction guiding our future work.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            {data.contactPersons.map((person) => (
              <motion.div
                key={person.id}
                className="text-center"
                variants={staggerItem}
              >
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 mx-auto mb-4 rounded-full overflow-hidden bg-white/5 border-2 border-white/10">
                  <Image
                    src={person.imageUrl}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 176px"
                  />
                </div>
                <h3
                  className="text-sm sm:text-base font-bold text-white mb-1"
                  style={{ fontFamily: 'var(--font-manrope)' }}
                >
                  {person.name}
                </h3>
                <p
                  className="text-[10px] sm:text-xs text-white/50"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {person.role}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
