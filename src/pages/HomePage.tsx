// =============================================================================
// Home Page Component
// Combines all home section components
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

export default function HomePage() {
  return (
    <main>
      {/* Hero Section - Main banner with title and CTA */}
      <HeroSection />

      {/* Group Photo Section - Organization photo with tagline */}
      <GroupPhotoSection />

      {/* Perspectives Section - Project cards */}
      <PerspectivesSection />

      {/* Looking Ahead Section - Feature cards */}
      <LookingAheadSection />

      {/* Testimonials Section - Scholar testimonials carousel */}
      <TestimonialsSection />

      {/* Core Values Section - Organization values */}
      <CoreValuesSection />

      {/* ISKO-OPS Section - Program promotion */}
      <IskoOpsSection />
    </main>
  );
}
