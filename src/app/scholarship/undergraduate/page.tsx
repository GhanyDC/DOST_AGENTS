// =============================================================================
// Scholarship Undergraduate Route
// DOST-SEI Undergraduate Scholarship benefits, priority courses & obligations
// =============================================================================

import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components/layout';
import { ScholarshipUndergraduateContent } from '@/components/sections/scholarship';

export const metadata: Metadata = {
  title: 'Undergraduate Scholarship | DOST-SEI',
  description:
    'Explore the benefits, priority courses, and obligations of the DOST-SEI Undergraduate Scholarship program.',
};

export default function ScholarshipUndergraduatePage() {
  return (
    <>
      <Navbar />
      <ScholarshipUndergraduateContent />
      <Footer />
    </>
  );
}
