// =============================================================================
// Button Component
// Reusable button with multiple variants and sizes
// =============================================================================

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import type { ButtonVariant, ButtonSize } from '@/types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-(--color-primary) text-[#111827] hover:bg-(--color-primary-hover) shadow-[0_14px_30px_-18px_var(--color-primary-glow)] hover:shadow-[0_18px_38px_-18px_var(--color-primary-glow)] border border-transparent',
  secondary:
    'bg-(--surface) text-(--foreground) border border-(--border) hover:bg-(--muted) hover:border-(--border-muted)',
  outline:
    'bg-transparent text-(--foreground) border border-(--border) hover:bg-(--muted) hover:border-(--foreground-muted)',
  ghost:
    'bg-transparent text-(--foreground) hover:bg-(--muted)',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-xs sm:text-sm rounded-md',
  md: 'h-9 sm:h-10 px-4 sm:px-5 text-xs sm:text-sm rounded-lg',
  lg: 'h-10 sm:h-11 md:h-12 px-6 sm:px-8 text-sm sm:text-base rounded-lg',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
            'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 ease-in-out focus-ring disabled:opacity-50 disabled:cursor-not-allowed tracking-wide transform will-change-transform',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <svg
            className="w-4 h-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';
