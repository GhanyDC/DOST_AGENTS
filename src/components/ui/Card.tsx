// =============================================================================
// Card Component
// Reusable card with image support
// =============================================================================

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'wide';
}

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
}

interface CardDescriptionProps {
  className?: string;
  children: React.ReactNode;
}

// Main Card component
export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl overflow-hidden card-surface card-hover',
        className
      )}
    >
      {children}
    </div>
  );
}

// Card Image component with placeholder fallback
export function CardImage({
  src,
  alt,
  className,
  aspectRatio = 'video',
}: CardImageProps) {
  const aspectRatioStyles = {
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[21/9]',
  };

  return (
    <div className={cn('relative overflow-hidden bg-muted', aspectRatioStyles[aspectRatio], className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-br from-black/0 via-black/0 to-black/35" />
    </div>
  );
}

// Card Content component
export function CardContent({ className, children }: CardContentProps) {
  return (
    <div className={cn('p-4', className)}>
      {children}
    </div>
  );
}

// Card Title component
export function CardTitle({ className, children }: CardTitleProps) {
  return (
    <h3 className={cn('font-semibold text-card-foreground', className)}>
      {children}
    </h3>
  );
}

// Card Description component
export function CardDescription({ className, children }: CardDescriptionProps) {
  return (
    <p className={cn('text-sm text-foreground-muted', className)}>
      {children}
    </p>
  );
}

// Project Card - Specialized card for project display
interface ProjectCardProps {
  title: string;
  date: string;
  imageUrl: string;
  href?: string;
  className?: string;
}

export function ProjectCard({
  title,
  date,
  imageUrl,
  href,
  className,
}: ProjectCardProps) {
  const content = (
    <Card>
      <CardImage src={imageUrl} alt={title} />
      <CardContent className="p-3 sm:p-4">
        <CardTitle className="text-(--foreground) text-xs sm:text-sm line-clamp-2">
          {title}
        </CardTitle>
        <CardDescription className="text-[10px] sm:text-xs mt-1">
          {date}
        </CardDescription>
      </CardContent>
    </Card>
  );

  if (href) {
    return (
      <Link href={href} className={cn('group block', className)}>
        {content}
      </Link>
    );
  }

  return (
    <div className={cn('group block', className)}>
      {content}
    </div>
  );
}

// Feature Card - Specialized card for feature display
interface FeatureCardProps {
  number: number;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  number,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        'feature-card p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl',
        className
      )}
    >
      {/* Number Badge */}
      <div className="feature-badge inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 rounded-lg bg-muted text-foreground font-bold text-xs sm:text-sm">
        {number}
      </div>
      
      {/* Title */}
      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
        {description}
      </p>
    </div>
  );
}
