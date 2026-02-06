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
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-(--foreground)">
        {highlightPosition === 'before' && titleHighlight && (
          <>
            <span className="font-script text-(--color-accent-yellow) italic drop-shadow-sm">
              {titleHighlight}
            </span>{' '}
          </>
        )}
        <span>{title}</span>
        {highlightPosition === 'after' && titleHighlight && (
          <>
            {' '}
            <span className="font-script text-(--color-accent-yellow) italic drop-shadow-sm">
              {titleHighlight}
            </span>
          </>
        )}
      </h2>
      {description && (
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-(--foreground-muted) max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
