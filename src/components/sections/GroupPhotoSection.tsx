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
      <div className="relative w-full min-h-screen">
        {/* Group Photo */}
        <div className="absolute inset-0">
          <Image
            src="/group_photo.png"
            alt="AGENTS Group Photo"
            fill
            className="object-cover"
            priority
          />
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/75" />
        </div>
        
        {/* Tagline Overlay - Centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6">
          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-white/90 tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-6 sm:mb-8 md:mb-10">
            {GROUP_PHOTO_CONTENT.subtitle}
          </p>
          
          {/* Main Tagline */}
          <div className="text-center max-w-5xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight">
              {tagline.prefix}{' '}
              <span className="font-script text-[var(--color-accent-yellow)] italic">
                {tagline.science}
              </span>
              {' '}{tagline.middle}{' '}
              <span className="font-script text-[var(--color-accent-yellow)] italic">
                {tagline.service}
              </span>
              {','}
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mt-2 sm:mt-3 leading-tight">
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
