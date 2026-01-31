// =============================================================================
// Card Component
// Reusable card with image support
// =============================================================================

import Image from 'next/image';
import Link from 'next/link';
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
        'rounded-xl overflow-hidden bg-card border border-card-border card-hover',
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
      {/* Placeholder background */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900">
        <svg className="w-12 h-12 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
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
  const CardWrapper = href ? Link : 'div';
  const wrapperProps = href ? { href } : {};

  return (
    <CardWrapper
      {...(wrapperProps as any)}
      className={cn('group block', className)}
    >
      <Card>
        <CardImage src={imageUrl} alt={title} />
        <CardContent>
          <CardTitle className="text-primary text-sm">
            {title}
          </CardTitle>
          <CardDescription className="text-xs mt-1">
            {date}
          </CardDescription>
        </CardContent>
      </Card>
    </CardWrapper>
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
        'feature-card p-6 rounded-xl',
        className
      )}
    >
      {/* Number Badge */}
      <div className="inline-flex items-center justify-center w-10 h-10 mb-4 rounded-lg bg-muted text-foreground font-bold text-sm">
        {number}
      </div>
      
      {/* Title */}
      <h3 className="text-lg font-semibold text-foreground mb-3">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-sm text-foreground-muted leading-relaxed">
        {description}
      </p>
    </div>
  );
}
