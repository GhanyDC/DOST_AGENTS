// =============================================================================
// Section Heading Component
// Consistent section titles with highlighted text support
// =============================================================================

import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  highlightPosition?: 'before' | 'after';
}

export function SectionHeading({
  title,
  titleHighlight,
  description,
  align = 'center',
  className,
  highlightPosition = 'after',
}: SectionHeadingProps) {
  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={cn('mb-10 sm:mb-12 md:mb-14 px-2 sm:px-0', alignStyles[align], className)}>
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-(--foreground)">
        {highlightPosition === 'before' && titleHighlight && (
          <>
            <span 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FFE500] italic drop-shadow-sm"
              style={{ fontFamily: 'var(--font-romanesco)' }}
            >
              {titleHighlight}
            </span>{' '}
          </>
        )}
        <span style={{ fontFamily: 'var(--font-manrope)' }}>{title}</span>
        {highlightPosition === 'after' && titleHighlight && (
          <>
            {' '}
            <span 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FFE500] italic drop-shadow-sm"
              style={{ fontFamily: 'var(--font-romanesco)' }}
            >
              {titleHighlight}
            </span>
          </>
        )}
      </h2>
      {description && (
        <p 
          className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-(--foreground-muted) max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
