import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/app/providers/theme-provider';
import './globals.css';

// =============================================================================
// Font Configuration
// =============================================================================

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent flash of incorrect theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('agents-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var resolved = theme === 'dark' || (theme !== 'light' && prefersDark) ? 'dark' : 'light';
                  document.documentElement.classList.add(resolved);
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
