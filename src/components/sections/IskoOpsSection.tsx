// =============================================================================
// ISKO-OPS Section Component
// Promotional section for the ISKO-OPS review program
// =============================================================================

import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ISKO_OPS_CONTENT } from '@/lib/constants';

export function IskoOpsSection() {
  return (
    <section className="py-20 bg-[var(--background)]">
      <Container>
        <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Side */}
            <div className="relative min-h-[300px] lg:min-h-[500px] bg-[var(--muted)]">
              {/* Placeholder for ISKO-OPS poster image */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="inline-block p-4 bg-[var(--background)] rounded-xl mb-4">
                    <Image
                      src="/agents_logo.png"
                      alt="ISKO-OPS"
                      width={80}
                      height={80}
                      className="opacity-80"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-primary)]">
                    ISKO-OPS
                  </h3>
                  <p className="text-lg text-[var(--foreground)]">2026</p>
                  <div className="mt-4 p-3 bg-[var(--background)] rounded-lg">
                    <p className="text-xs text-[var(--foreground-muted)]">
                      Free Online Review Sessions for DOST
                    </p>
                    <p className="text-xs text-[var(--foreground-muted)]">
                      Undergraduate Qualifying Examination
                    </p>
                  </div>
                  <div className="mt-4 p-2 bg-red-600 text-white rounded">
                    <p className="text-xs font-bold">REGISTRATION ENDS ON</p>
                    <p className="text-sm font-bold">{ISKO_OPS_CONTENT.registrationDeadline}</p>
                  </div>
                  <p className="mt-2 text-xs text-[var(--foreground-muted)]">
                    {ISKO_OPS_CONTENT.registrationLink}
                  </p>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                <span className="text-[var(--color-secondary)]">
                  {ISKO_OPS_CONTENT.title}
                </span>
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-[var(--foreground)] mb-6">
                {ISKO_OPS_CONTENT.subtitle}
              </h3>

              {/* Description */}
              <p className="text-sm text-[var(--foreground-muted)] mb-4">
                A <span className="font-semibold text-[var(--foreground)]">FREE Online Review Program</span> designed to help aspiring scholars in Cagayan Valley confidently prepare for the <span className="font-semibold text-[var(--foreground)]">2026 DOST-SEI Undergraduate Scholarship Qualifying Examination</span>.
              </p>

              {/* Details */}
              <p className="text-sm text-[var(--foreground-muted)] mb-4">
                Anchored on <span className="font-semibold text-[var(--foreground)]">Agham na Ramdam</span>, ISKO-OPS brings science closer through guided tutoring, review sessions, and meaningful mentorship, <span className="text-[var(--color-primary)]">transforming learning into opportunities and solutions for the youth</span>.
              </p>

              <p className="text-sm text-[var(--foreground-muted)] mb-4">
                Powered by <span className="font-semibold text-[var(--foreground)]">DOST Cagayan Valley, DOST ACCESS, and DOST-SEI Scholars Organizations in Cagayan Valley</span>, this initiative brings together top-performing scholars, outstanding alumni, and expert mentors ready to guide you every step of the way. Expect high-yield lessons, proven exam strategies, mock exams, and real insights from those who've been in your shoes—and succeeded. Whether you're strengthening your fundamentals or sharpening your test-taking skills, <span className="font-semibold text-[var(--foreground)]">ISKO-OPS levels the playing field and helps you reach your academic goals</span>.
              </p>

              {/* Tagline */}
              <p className="text-sm text-[var(--foreground)] mb-2">
                <span className="font-bold text-[var(--color-primary)]">TARA:</span> Sama-sama nating buuin ang kinabukasang hinuhubog ng kaalaman at malasakit.
              </p>
              <p className="text-sm text-[var(--foreground)] mb-6">
                Your journey to becoming a <span className="font-semibold">DOST-SEI Scholar</span> starts here.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="/isko-ops">
                  <Button variant="primary" size="md">
                    Read More
                  </Button>
                </Link>
                <Link href={`https://${ISKO_OPS_CONTENT.registrationLink}`} target="_blank">
                  <Button variant="outline" size="md">
                    Register Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
