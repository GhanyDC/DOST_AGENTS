// =============================================================================
// Hero Section Component
// Main hero section with title, description, and CTA
// =============================================================================

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { HERO_CONTENT } from '@/lib/constants';

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--background)]/50" />
      
      <Container className="relative z-10 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-[var(--color-primary)] italic">
              {HERO_CONTENT.titleHighlight}
            </span>{' '}
            <span className="text-[var(--foreground)]">
              {HERO_CONTENT.titleRest}
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-sm md:text-base text-[var(--foreground-muted)] max-w-2xl mx-auto leading-relaxed mb-10">
            {HERO_CONTENT.description}
          </p>
          
          {/* CTA Button */}
          <Link href={HERO_CONTENT.ctaLink}>
            <Button
              variant="outline"
              size="lg"
              className="px-12 border-white/30 hover:bg-white/10"
            >
              {HERO_CONTENT.ctaText}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
