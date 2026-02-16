// =============================================================================
// Updates Listing Page
// Grid view of all organization updates/projects
// =============================================================================

import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components/layout';
import { UpdatesPageContent } from '@/components/sections/updates/UpdatesPageContent';

export const metadata: Metadata = {
  title: 'Organization Updates',
  description: 'Get the latest news, projects, and events from AGENTS - Academic Guild of Excellence and New-Age Thinking Scholars.',
};

export default function UpdatesPage() {
  return (
    <>
      <Navbar />
      <UpdatesPageContent />
      <Footer />
    </>
  );
}
