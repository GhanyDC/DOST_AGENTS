'use client';

// =============================================================================
// Search Bar Component
// Reusable search input with icon
// =============================================================================

import { cn } from '@/lib/utils';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({ value, onChange, placeholder = 'Search Projects', className }: SearchBarProps) {
  return (
    <div className={cn('relative w-full', className)}>
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 text-(--foreground-muted)"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          'w-full pl-11 pr-4 py-3 sm:py-3.5',
          'bg-(--surface) border border-(--border) rounded-xl',
          'text-sm text-(--foreground) placeholder:text-(--foreground-muted)',
          'focus:outline-none focus:ring-2 focus:ring-(--color-primary)/30 focus:border-(--color-primary)/50',
          'transition-all duration-200'
        )}
        style={{ fontFamily: 'var(--font-poppins)' }}
      />
    </div>
  );
}
