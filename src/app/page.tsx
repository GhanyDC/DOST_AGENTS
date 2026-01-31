// =============================================================================
// Root Page
// Main landing page scaffold
// =============================================================================

import { Navbar, Footer } from '@/components/layout';
import HomePage from '@/pages/HomePage';

export default function Page() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <HomePage />

      {/* Footer */}
      <Footer />
    </>
  );
}
