// =============================================================================
// Update Detail Page
// Individual update/project article view
// =============================================================================

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Navbar, Footer } from '@/components/layout';
import { UpdateDetailContent } from '@/components/sections/updates/UpdateDetailContent';
import { SAMPLE_UPDATES, SAMPLE_UPDATE_DETAIL } from '@/lib/constants';

// Generate static params for all known updates (SSG)
export function generateStaticParams() {
  return SAMPLE_UPDATES.map((update) => ({
    slug: update.slug,
  }));
}

// Generate metadata per page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const update = SAMPLE_UPDATES.find((u) => u.slug === slug) || SAMPLE_UPDATE_DETAIL;

  return {
    title: update.title,
    description: update.description,
  };
}

export default async function UpdateDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Static lookup for now — will be replaced by Supabase fetch
  const update = SAMPLE_UPDATES.find((u) => u.slug === slug);

  if (!update) {
    // Fall back to sample detail if slug matches, otherwise 404
    if (slug === SAMPLE_UPDATE_DETAIL.slug) {
      return (
        <>
          <Navbar />
          <UpdateDetailContent update={SAMPLE_UPDATE_DETAIL} />
          <Footer />
        </>
      );
    }
    notFound();
  }

  return (
    <>
      <Navbar />
      <UpdateDetailContent update={update} />
      <Footer />
    </>
  );
}
