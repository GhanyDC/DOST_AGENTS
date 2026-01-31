// =============================================================================
// Home Route
// Redirects to root page
// =============================================================================

import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/');
}
