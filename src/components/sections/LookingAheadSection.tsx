// =============================================================================
// Looking Ahead Section Component
// Feature cards showcasing upcoming initiatives
// =============================================================================

import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FeatureCard } from '@/components/ui/Card';
import { LOOKING_AHEAD_CONTENT, SAMPLE_FEATURES } from '@/lib/constants';
import type { Feature } from '@/types';

interface LookingAheadSectionProps {
  features?: Feature[];
}

export function LookingAheadSection({ features = SAMPLE_FEATURES }: LookingAheadSectionProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[var(--background)]">
      <Container>
        {/* Section Heading */}
        <SectionHeading
          title={LOOKING_AHEAD_CONTENT.title}
          titleHighlight={LOOKING_AHEAD_CONTENT.titleHighlight}
          description={LOOKING_AHEAD_CONTENT.description}
          align="center"
        />

        {/* Features Grid - 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              number={feature.number}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
