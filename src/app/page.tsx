// =============================================================================
// Home Page
// Main landing page composed of section components
// =============================================================================

import { Navbar, Footer } from '@/components/layout';
import {
  HeroSection,
  GroupPhotoSection,
  PerspectivesSection,
  LookingAheadSection,
  TestimonialsSection,
  CoreValuesSection,
  IskoOpsSection,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
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

      {/* Footer */}
      <Footer />
    </>
  );
}
