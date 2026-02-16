import type { Metadata } from 'next';
import { Poppins, Manrope, Romanesco } from 'next/font/google';
import './globals.css';

// =============================================================================
// Font Configuration
// =============================================================================

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const romanesco = Romanesco({
  variable: '--font-romanesco',
  subsets: ['latin'],
  weight: ['400'],
});

// =============================================================================
// Metadata Configuration
// =============================================================================

export const metadata: Metadata = {
  title: {
    default: 'AGENTS | Academic Guild of Excellence and New-Age Thinking Scholars',
    template: '%s | AGENTS',
  },
  description:
    'AGENTS - Agents of Change, Excellence, and For The Common Good. Official website of the Academic Guild of Excellence and New-Age Thinking Scholars.',
  keywords: [
    'DOST',
    'DOST Scholars',
    'AGENTS',
    'Scholarship',
    'Science',
    'Technology',
    'Philippines',
    'Cagayan Valley',
  ],
  authors: [{ name: 'AGENTS' }],
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    siteName: 'AGENTS',
  },
};

// =============================================================================
// Root Layout
// =============================================================================

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.variable} ${manrope.variable} ${romanesco.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
