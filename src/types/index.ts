// =============================================================================
// Type Definitions
// =============================================================================

// Navigation Types
export type DropdownItem = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
};

// Project/Card Types
export type Project = {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  slug?: string;
};

// Feature Card Types
export type Feature = {
  id: string;
  number: number;
  title: string;
  description: string;
};

// Testimonial Types
export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  batch: string;
  imageUrl?: string;
};

// Core Value Types
export type CoreValue = {
  id: string;
  name: string;
  highlightedLetters: string[];
};

// Contact Info Types
export type ContactInfo = {
  phone: string;
  email: string;
};

// Social Link Types
export type SocialLink = {
  platform: string;
  url: string;
  icon: string;
};

// Footer Navigation Types
export type FooterNav = {
  label: string;
  href: string;
};

// Theme Types
export type Theme = 'light' | 'dark' | 'system';

// Button Variants
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
