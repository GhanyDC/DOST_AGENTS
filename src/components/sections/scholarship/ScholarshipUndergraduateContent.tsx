'use client';

// =============================================================================
// Scholarship Undergraduate Page Content
// Information about the DOST-SEI Undergraduate Scholarship benefits & programs
// Prepared for backend integration — accepts data via props
// =============================================================================

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

// ---------------------------------------------------------------------------
// Types — ready for backend data
// ---------------------------------------------------------------------------

export type UndergraduateBenefit = {
  id: string;
  title: string;
  description: string;
};

export type PriorityCourse = {
  id: string;
  field: string;
  examples: string[];
};

export type UndergraduatePageData = {
  hero: {
    title: string;
    titleHighlight: string;
    description: string;
  };
  benefits: UndergraduateBenefit[];
  priorityCourses: PriorityCourse[];
  obligations: string[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
};

// ---------------------------------------------------------------------------
// Static Data — will be replaced by backend fetch
// ---------------------------------------------------------------------------

const UNDERGRADUATE_DATA: UndergraduatePageData = {
  hero: {
    title: 'DOST-SEI',
    titleHighlight: 'Undergraduate Scholarship',
    description:
      'The DOST-SEI Undergraduate Scholarship supports talented Filipino students pursuing priority degree programs in science, technology, engineering, and mathematics (STEM). Learn about the benefits, priority courses, and what it means to be a DOST scholar.',
  },
  benefits: [
    {
      id: 'b-1',
      title: 'Tuition & Other School Fees',
      description: 'Full coverage of tuition fees and other mandatory school charges per semester.',
    },
    {
      id: 'b-2',
      title: 'Monthly Stipend',
      description: 'Living allowance to cover daily expenses while studying — amount adjusted periodically by DOST-SEI.',
    },
    {
      id: 'b-3',
      title: 'Book Allowance',
      description: 'Annual book subsidy to help scholars acquire required textbooks and learning materials.',
    },
    {
      id: 'b-4',
      title: 'Thesis / Dissertation Support',
      description: 'Financial support for thesis or capstone project requirements during the final year of study.',
    },
    {
      id: 'b-5',
      title: 'Graduation Clothing Allowance',
      description: 'One-time allowance for graduation attire and related expenses.',
    },
    {
      id: 'b-6',
      title: 'Group Personal Accident Insurance',
      description: 'Insurance coverage throughout the duration of the scholarship.',
    },
  ],
  priorityCourses: [
    {
      id: 'pc-1',
      field: 'Natural Sciences',
      examples: ['Biology', 'Chemistry', 'Physics', 'Marine Science', 'Environmental Science'],
    },
    {
      id: 'pc-2',
      field: 'Engineering',
      examples: ['Civil Engineering', 'Electrical Engineering', 'Mechanical Engineering', 'Chemical Engineering', 'Computer Engineering'],
    },
    {
      id: 'pc-3',
      field: 'Mathematics & Statistics',
      examples: ['Applied Mathematics', 'Statistics', 'Actuarial Science'],
    },
    {
      id: 'pc-4',
      field: 'Information Technology',
      examples: ['Computer Science', 'Information Technology', 'Information Systems', 'Data Science'],
    },
    {
      id: 'pc-5',
      field: 'Agriculture & Food Science',
      examples: ['Agriculture', 'Food Technology', 'Fisheries', 'Forestry'],
    },
    {
      id: 'pc-6',
      field: 'Health & Allied Sciences',
      examples: ['Medical Technology', 'Pharmacy', 'Nursing', 'Nutrition', 'Public Health'],
    },
  ],
  obligations: [
    'Maintain the required General Weighted Average (GWA) set by DOST-SEI each semester.',
    'Carry the full academic load required by the degree program.',
    'Submit required reports and documents (grades, enrollment forms) on time.',
    'Render return service in the Philippines — work in a field related to your degree for a duration equal to the number of years of scholarship enjoyed.',
    'Abide by all rules and regulations of the DOST-SEI scholarship program.',
  ],
  cta: {
    title: 'Start your scholarship journey',
    description: 'Check your eligibility and apply for the DOST-SEI Undergraduate Scholarship today.',
    buttonText: 'View Application Guide',
    buttonLink: '/scholarship/application',
  },
};

// ---------------------------------------------------------------------------
// Animation Variants
// ---------------------------------------------------------------------------

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

interface ScholarshipUndergraduateContentProps {
  /** Override with backend data in the future */
  data?: UndergraduatePageData;
}

export function ScholarshipUndergraduateContent({
  data = UNDERGRADUATE_DATA,
}: ScholarshipUndergraduateContentProps) {
  return (
    <main className="min-h-screen bg-[#080c14]">
      {/* ================================================================= */}
      {/* Hero */}
      {/* ================================================================= */}
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
              <span className="text-white">{data.hero.title} </span>
              <span className="text-[#FFE500]">{data.hero.titleHighlight}</span>
            </h1>
            <p
              className="text-xs sm:text-sm md:text-base text-white/55 leading-relaxed max-w-3xl"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              {data.hero.description}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ================================================================= */}
      {/* Benefits */}
      {/* ================================================================= */}
      <section className="py-12 sm:py-16">
        <Container>
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#FFE500] tracking-tight mb-10 sm:mb-14"
            style={{ fontFamily: 'var(--font-poppins)', fontWeight: 600 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            Scholarship Benefits
          </motion.h2>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
          >
            {data.benefits.map((benefit) => (
              <motion.div
                key={benefit.id}
                className="rounded-xl border border-white/8 bg-[#0d1528] p-5 sm:p-6"
                variants={staggerItem}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[#FFE500]/10 border border-[#FFE500]/30 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#FFE500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3
                    className="text-sm sm:text-base font-bold text-white"
                    style={{ fontFamily: 'var(--font-manrope)' }}
                  >
                    {benefit.title}
                  </h3>
                </div>
                <p
                  className="text-xs sm:text-sm text-white/60 leading-relaxed"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ================================================================= */}
      {/* Priority Courses */}
      {/* ================================================================= */}
      <section className="py-12 sm:py-16">
        <Container>
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#FFE500] tracking-tight mb-10 sm:mb-14"
            style={{ fontFamily: 'var(--font-poppins)', fontWeight: 600 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            Priority Courses
          </motion.h2>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
          >
            {data.priorityCourses.map((course) => (
              <motion.div
                key={course.id}
                className="relative rounded-xl border border-white/8 bg-[#0d1528] p-5 sm:p-6 overflow-hidden"
                variants={staggerItem}
              >
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FFE500]" />
                <div className="pl-3">
                  <h3
                    className="text-sm sm:text-base font-bold text-white mb-3"
                    style={{ fontFamily: 'var(--font-manrope)' }}
                  >
                    {course.field}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {course.examples.map((ex, i) => (
                      <span
                        key={i}
                        className="inline-block px-3 py-1 text-[10px] sm:text-xs rounded-full bg-white/5 text-white/60 border border-white/8"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ================================================================= */}
      {/* Scholar Obligations */}
      {/* ================================================================= */}
      <section className="py-12 sm:py-16">
        <Container>
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#FFE500] tracking-tight mb-10 sm:mb-14"
            style={{ fontFamily: 'var(--font-poppins)', fontWeight: 600 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            Scholar Obligations
          </motion.h2>

          <motion.div
            className="max-w-3xl space-y-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
          >
            {data.obligations.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4 p-4 rounded-lg border border-white/6 bg-[#0d1528]"
                variants={staggerItem}
              >
                <div className="shrink-0 w-7 h-7 rounded-full border border-[#FFE500]/30 flex items-center justify-center mt-0.5">
                  <span className="text-xs font-bold text-[#FFE500]">{i + 1}</span>
                </div>
                <p
                  className="text-xs sm:text-sm text-white/70 leading-relaxed"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ================================================================= */}
      {/* CTA */}
      {/* ================================================================= */}
      <section className="py-16 sm:py-20">
        <Container>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#FFE500] tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-poppins)', fontWeight: 600 }}
            >
              {data.cta.title}
            </h2>
            <p
              className="text-xs sm:text-sm text-white/60 mb-8 max-w-xl mx-auto"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              {data.cta.description}
            </p>
            <Link href={data.cta.buttonLink}>
              <Button variant="primary" size="lg">
                {data.cta.buttonText}
              </Button>
            </Link>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
