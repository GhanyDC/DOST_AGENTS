'use client';

// =============================================================================
// Looking Ahead Section Component
// Feature cards showcasing upcoming initiatives
// =============================================================================

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FeatureCard } from '@/components/ui/Card';
import { LOOKING_AHEAD_CONTENT, SAMPLE_FEATURES } from '@/lib/constants';
import type { Feature } from '@/types';

interface LookingAheadSectionProps {
  features?: Feature[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function LookingAheadSection({ features = SAMPLE_FEATURES }: LookingAheadSectionProps) {
  return (
    <section className="min-h-screen section-padding bg-section-gradient flex items-center">
      <Container>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title={LOOKING_AHEAD_CONTENT.title}
            titleHighlight={LOOKING_AHEAD_CONTENT.titleHighlight}
            description={LOOKING_AHEAD_CONTENT.description}
            align="center"
          />
        </motion.div>

        {/* Features Grid - 1 col mobile, 2 col tablet, 3 col desktop */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div key={feature.id} variants={cardVariants}>
              <FeatureCard
                number={feature.number}
                title={feature.title}
                description={feature.description}
                className={index === 0 ? 'feature-card-highlight' : undefined}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
