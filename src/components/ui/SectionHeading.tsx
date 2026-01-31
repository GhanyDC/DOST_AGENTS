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
    <div className={cn('mb-12', alignStyles[align], className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">
        {highlightPosition === 'before' && titleHighlight && (
          <>
            <span className="font-script text-[var(--color-accent-yellow)] italic">
              {titleHighlight}
            </span>{' '}
          </>
        )}
        <span>{title}</span>
        {highlightPosition === 'after' && titleHighlight && (
          <>
            {' '}
            <span className="font-script text-[var(--color-accent-yellow)] italic">
              {titleHighlight}
            </span>
          </>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-sm md:text-base text-[var(--foreground-muted)] max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
