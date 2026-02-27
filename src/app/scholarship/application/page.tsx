// =============================================================================
// Scholarship Application Route
// DOST-SEI Scholarship application guide page
// =============================================================================

import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components/layout';
import { ScholarshipApplicationContent } from '@/components/sections/scholarship';

export const metadata: Metadata = {
  title: 'Scholarship Application | DOST-SEI',
  description:
    'Complete guide to the DOST-SEI Undergraduate Scholarship application process — eligibility, requirements, steps, and important dates.',
};

export default function ScholarshipApplicationPage() {
  return (
    <>
      <Navbar />
      <ScholarshipApplicationContent />
      <Footer />
    </>
  );
}
