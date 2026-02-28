// =============================================================================
// Scholarship Sources Route
// DOST-SEI Scholarship funding sources and programs
// =============================================================================

import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components/layout';
import { ScholarshipSourcesContent } from '@/components/sections/scholarship';

export const metadata: Metadata = {
  title: 'Scholarship Sources | DOST-SEI',
  description:
    'Learn about the different DOST-SEI scholarship programs — RA 7687, Merit Scholarship, JLSS, and their coverage details.',
};

export default function ScholarshipSourcesPage() {
  return (
    <>
      <Navbar />
      <ScholarshipSourcesContent />
      <Footer />
    </>
  );
}
