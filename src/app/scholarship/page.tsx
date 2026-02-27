// =============================================================================
// Scholarship Index Route
// Redirects to the default scholarship sub-page (Application)
// =============================================================================

import { redirect } from 'next/navigation';

export default function ScholarshipPage() {
  redirect('/scholarship/application');
}
