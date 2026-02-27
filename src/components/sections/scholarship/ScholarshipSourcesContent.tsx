'use client';

// =============================================================================
// Scholarship Sources Page Content
// Information about DOST-SEI scholarship funding sources and programs
// Prepared for backend integration — accepts data via props
// =============================================================================

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';

// ---------------------------------------------------------------------------
// Types — ready for backend data
// ---------------------------------------------------------------------------

export type ScholarshipSource = {
  id: string;
  name: string;
  legalBasis: string;
  description: string;
  coverageItems: string[];
};

// ---------------------------------------------------------------------------
// Static data — will be replaced by backend fetch
// ---------------------------------------------------------------------------

const SCHOLARSHIP_SOURCES: ScholarshipSource[] = [
  {
    id: 'ra-7687',
    name: 'RA 7687 (Science & Technology Scholarship Act of 1994)',
    legalBasis: 'Republic Act 7687',
    description:
      'Provides scholarships to financially disadvantaged but academically talented students pursuing priority S&T courses.',
    coverageItems: [
      'Full tuition and other school fees',
      'Monthly stipend (living allowance)',
      'Book allowance',
      'Thesis/dissertation allowance',
      'Graduation clothing allowance',
    ],
  },
  {
    id: 'merit',
    name: 'DOST-SEI Merit Scholarship Program',
    legalBasis: 'EO 927, s. 1983 / RA 2067',
    description:
      'Awards merit-based scholarships to top-performing students with high aptitude in science and mathematics, regardless of family income.',
    coverageItems: [
      'Full tuition and other school fees',
      'Monthly stipend',
      'Book allowance',
      'Thesis/dissertation subsidy',
      'Graduation clothing allowance',
    ],
  },
  {
    id: 'jlss',
    name: 'Junior Level Science Scholarship (JLSS)',
    legalBasis: 'DOST-SEI Program',
    description:
      'Supports talented junior high school students showing exceptional performance in science and mathematics to continue into senior high school STEM tracks.',
    coverageItems: [
      'Monthly stipend',
      'Book allowance',
      'School fees subsidy',
    ],
  },
];

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
// Component
// ---------------------------------------------------------------------------

interface ScholarshipSourcesContentProps {
  /** Override with backend data in the future */
  sources?: ScholarshipSource[];
}

export function ScholarshipSourcesContent({
  sources = SCHOLARSHIP_SOURCES,
}: ScholarshipSourcesContentProps) {
  return (
    <main className="min-h-screen bg-[#080c14]">
      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 overflow-hidden">
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
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
              style={{ fontFamily: 'var(--font-poppins)', fontWeight: 700 }}
            >
              <span className="text-white">Scholarship </span>
              <span className="text-[#FFE500]">Sources</span>
            </h1>
            <p
              className="text-xs sm:text-sm md:text-base text-white/55 leading-relaxed max-w-3xl"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              Learn about the different legal bases, programs, and funding mechanisms behind the DOST-SEI scholarship programs available to aspiring Filipino scientists and engineers.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
      <Container>

        {/* Sources Cards */}
        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          {sources.map((source) => (
            <motion.div
              key={source.id}
              className="relative rounded-xl border border-white/8 bg-[#0d1528] p-6 sm:p-8 lg:p-10 overflow-hidden"
              variants={staggerItem}
            >
              {/* Accent bar — full height */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FFE500]" />

              <div className="pl-4">
                <h2
                  className="text-base sm:text-lg md:text-xl font-bold text-white mb-1"
                  style={{ fontFamily: 'var(--font-manrope)' }}
                >
                  {source.name}
                </h2>
                <p
                  className="text-[10px] sm:text-xs text-[#FFE500]/70 uppercase tracking-wider mb-4"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {source.legalBasis}
                </p>
                <p
                  className="text-xs sm:text-sm text-white/60 mb-6 max-w-2xl leading-relaxed"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {source.description}
                </p>

                <h4
                  className="text-xs sm:text-sm font-semibold text-white/80 uppercase tracking-wider mb-3"
                  style={{ fontFamily: 'var(--font-manrope)' }}
                >
                  Coverage &amp; Benefits
                </h4>
                <ul className="space-y-2">
                  {source.coverageItems.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-xs sm:text-sm text-white/70"
                      style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                      <div className="shrink-0 w-5 h-5 rounded-full border border-[#FFE500]/30 flex items-center justify-center">
                        <svg className="w-3 h-3 text-[#FFE500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
      </section>
    </main>
  );
}
