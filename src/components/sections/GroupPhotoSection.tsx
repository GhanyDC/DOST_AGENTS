// =============================================================================
// Group Photo Section Component
// Full-width image with tagline overlay
// =============================================================================

import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { GROUP_PHOTO_CONTENT } from '@/lib/constants';

export function GroupPhotoSection() {
  const { tagline } = GROUP_PHOTO_CONTENT;

  return (
    <section className="relative py-0 bg-[var(--background)]">
      {/* Group Photo Container */}
      <div className="relative w-full aspect-[21/9] min-h-[400px] md:min-h-[500px]">
        {/* Placeholder for group photo - replace with actual image */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] to-[#0d1f3c]">
          {/* Uncomment when you have the actual image */}
          {/* <Image
            src={GROUP_PHOTO_CONTENT.imageUrl}
            alt="AGENTS Group Photo"
            fill
            className="object-cover opacity-80"
            priority
          /> */}
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Placeholder content - shows "AGENTS" text faintly in background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <span className="text-8xl md:text-[12rem] font-bold text-white tracking-[0.2em]">
              AGENTS
            </span>
          </div>
        </div>
        
        {/* Tagline Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 md:pb-16">
          {/* Subtitle */}
          <p className="text-xs md:text-sm text-[var(--foreground-muted)] tracking-[0.3em] uppercase mb-4">
            {GROUP_PHOTO_CONTENT.subtitle}
          </p>
          
          {/* Main Tagline */}
          <div className="text-center px-4">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-[var(--foreground)]">
              {tagline.prefix}{' '}
              <span className="font-script text-[var(--color-accent-yellow)] italic">
                {tagline.science}
              </span>{' '}
              {tagline.middle}{' '}
              <span className="font-script text-[var(--color-accent-yellow)] italic">
                {tagline.service}
              </span>
            </h2>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-[var(--foreground)] mt-1">
              {tagline.suffix}{' '}
              <span className="font-script text-[var(--color-accent-yellow)] italic">
                {tagline.progress}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
