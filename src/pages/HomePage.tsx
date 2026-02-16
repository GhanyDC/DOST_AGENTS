// =============================================================================
// Home Page Component
// Combines all home section components with seamless gradient transitions
// =============================================================================

import {
  HeroSection,
  GroupPhotoSection,
  PerspectivesSection,
  LookingAheadSection,
  TestimonialsSection,
  CoreValuesSection,
  IskoOpsSection,
} from '@/components/sections/home';

/**
 * Gradient bridge between two sections.
 * Blends the `from` color (top) into the `to` color (bottom)
 * for a seamless visual flow between adjacent sections.
 */
function SectionBridge({ from, to, height = 'h-24 sm:h-32' }: { from: string; to: string; height?: string }) {
  return (
    <div
      className={`relative ${height} -mt-1 pointer-events-none`}
      style={{
        background: `linear-gradient(to bottom, ${from}, ${to})`,
      }}
    />
  );
}

export default function HomePage() {
  return (
    <main className="bg-[#080c14]">
      {/* Hero Section - Main banner with title and CTA */}
      <HeroSection />

      {/* Group Photo Section - Organization photo with tagline */}
      <GroupPhotoSection />

      {/* Bridge: GroupPhoto → Perspectives */}
      <SectionBridge from="#0a0e1e" to="#0a0e1e" height="h-0" />

      {/* Perspectives Section - Project cards */}
      <PerspectivesSection />

      {/* Bridge: Perspectives → LookingAhead */}
      <SectionBridge from="#0f152c" to="#0f152c" height="h-0" />

      {/* Looking Ahead Section - Feature cards */}
      <LookingAheadSection />

      {/* Bridge: LookingAhead → Testimonials */}
      <SectionBridge from="#0b0e22" to="#0b0e22" height="h-0" />

      {/* Testimonials Section - Scholar testimonials carousel */}
      <TestimonialsSection />

      {/* Bridge: Testimonials → CoreValues */}
      <SectionBridge from="#0c1020" to="#0c1020" height="h-0" />

      {/* Core Values Section - Organization values */}
      <CoreValuesSection />

      {/* Bridge: CoreValues → IskoOps */}
      <SectionBridge from="#0d1228" to="#0d1228" height="h-0" />

      {/* ISKO-OPS Section - Program promotion */}
      <IskoOpsSection />
    </main>
  );
}
