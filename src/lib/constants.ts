// =============================================================================
// Application Constants
// =============================================================================

import type { NavItem, Feature, Testimonial, Project, FooterNav, SocialLink, ContactInfo } from '@/types';

// Site Information
export const SITE_NAME = 'AGENTS';
export const SITE_FULL_NAME = 'Academic Guild of Excellence and New-Age Thinking Scholars';
export const SITE_DESCRIPTION = 'DOST AGENTS Official Website - Agents of Change, Excellence, and For The Common Good';

// Organization Info
export const ORGANIZATION = {
  name: 'AGENTS',
  fullName: 'Academic Guild of Excellence and New-Age Thinking Scholars',
  office: 'Cagayan State University - Carig Campus',
  department: 'College of Engineering and Architecture Student Center',
};

// Contact Information
export const CONTACT_INFO: ContactInfo = {
  phone: '09612482742469',
  email: 'agents365@gmail.com',
};

// Social Links
export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Facebook', url: 'https://facebook.com/agents', icon: 'facebook' },
  { platform: 'Instagram', url: 'https://instagram.com/agents', icon: 'instagram' },
];

// Navigation Items
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Updates', href: '/updates' },
  { label: 'Scholarship', href: '/scholarship' },
  { label: 'About', href: '/about' },
];

// Footer Navigation
export const FOOTER_NAV: FooterNav[] = [
  { label: 'Home', href: '/' },
  { label: 'Updates', href: '/updates' },
  { label: 'Scholarship', href: '/scholarship' },
  { label: 'About', href: '/about' },
];

// Hero Section Content
export const HERO_CONTENT = {
  titleHighlight: 'AGENTS',
  titleRest: 'Of Change, Excellence, and For The Common Good',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  ctaText: 'Explore',
  ctaLink: '/about',
};

// Group Photo Section
export const GROUP_PHOTO_CONTENT = {
  subtitle: 'Science. Service. Nation.',
  tagline: {
    prefix: 'Empowered by',
    science: 'Science,',
    middle: 'Driven by',
    service: 'Service,',
    suffix: 'Committed to',
    progress: 'National Progress',
  },
  imageUrl: '/images/group-photo.jpg',
};

// Perspectives Section
export const PERSPECTIVES_CONTENT = {
  title: 'Shared by Our',
  titleHighlight: 'Perspectives',
  description: 'Our latest initiatives reflect the ideas and priorities shaping our work today. They highlight how we turn insight into action across our organization.',
};

// Sample Projects Data
export const SAMPLE_PROJECTS: Project[] = [
  { id: '1', title: 'Project Namnama', date: 'December 21, 2025', imageUrl: '/images/project-1.jpg' },
  { id: '2', title: 'Project Namnama', date: 'December 21, 2025', imageUrl: '/images/project-2.jpg' },
  { id: '3', title: 'Project Namnama', date: 'December 21, 2025', imageUrl: '/images/project-3.jpg' },
  { id: '4', title: 'Project Namnama', date: 'December 21, 2025', imageUrl: '/images/project-4.jpg' },
  { id: '5', title: 'Project Namnama', date: 'December 21, 2025', imageUrl: '/images/project-5.jpg' },
  { id: '6', title: 'Project Namnama', date: 'December 21, 2025', imageUrl: '/images/project-6.jpg' },
  { id: '7', title: 'Project Namnama', date: 'December 21, 2025', imageUrl: '/images/project-7.jpg' },
  { id: '8', title: 'Project Namnama', date: 'December 21, 2025', imageUrl: '/images/project-8.jpg' },
];

// Looking Ahead Section
export const LOOKING_AHEAD_CONTENT = {
  title: 'Looking',
  titleHighlight: 'Ahead',
  description: 'A look ahead at upcoming initiatives, evolving priorities, and the direction guiding our future work.',
};

// Sample Features
export const SAMPLE_FEATURES: Feature[] = [
  {
    id: '1',
    number: 1,
    title: 'Handy Expressionism',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: '2',
    number: 1,
    title: 'Handy Expressionism',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: '3',
    number: 1,
    title: 'Handy Expressionism',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: '4',
    number: 1,
    title: 'Handy Expressionism',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: '5',
    number: 1,
    title: 'Handy Expressionism',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: '6',
    number: 1,
    title: 'Handy Expressionism',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

// Testimonials Section
export const TESTIMONIALS_CONTENT = {
  title: "Scholars'",
  titleHighlight: 'Testimonials',
  description: "Scholars offer considered reflections on how the program has contributed to their research capacity, critical thinking, and academic trajectories. These accounts illustrate the program's role in supporting scholarly excellence.",
};

// Sample Testimonials
export const SAMPLE_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "Being a DOST Scholar is not just about receiving stipend, it's about developing your potential to serve others through service",
    author: 'Janmar Christian T. Agilbao',
    batch: 'DOST Scholar - Batch 2021',
    imageUrl: '/images/testimonial-1.jpg',
  },
  {
    id: '2',
    quote: "Being a DOST Scholar is not just about receiving stipend, it's about developing your potential to serve others through service",
    author: 'Janmar Christian T. Agilbao',
    batch: 'DOST Scholar - Batch 2021',
    imageUrl: '/images/testimonial-2.jpg',
  },
  {
    id: '3',
    quote: "Being a DOST Scholar is not just about receiving stipend, it's about developing your potential to serve others through service",
    author: 'Janmar Christian T. Agilbao',
    batch: 'DOST Scholar - Batch 2021',
    imageUrl: '/images/testimonial-3.jpg',
  },
];

// Core Values
export const CORE_VALUES_CONTENT = {
  title: 'Core Values',
  description: 'Professional excellence serves with competence, social responsibility uplifts communities, and servant leadership puts others first. Together, they affirm that leadership and achievement only matter when they positively impact people.',
  values: [
    { name: 'PROFESSIONAL', highlight: 'P' },
    { name: 'EXCELLENCE', highlight: 'E' },
    { name: 'SOCIAL', highlight: 'SO' },
    { name: 'RESPONSIBILITY', highlight: 'R' },
    { name: 'SERVANT', highlight: 'SER' },
    { name: 'LEADERSHIP', highlight: 'L' },
  ],
};

// ISKO-OPS Section
export const ISKO_OPS_CONTENT = {
  title: 'ISKO-OPS is Back',
  subtitle: 'Bigger, Bolder, and Better!',
  description: 'A FREE Online Review Program designed to help aspiring scholars in Cagayan Valley confidently prepare for the 2026 DOST-SEI Undergraduate Scholarship Qualifying Examination.',
  details: [
    'Anchored on Agham sa Ramdam, ISKO-OPS brings science closer through guided tutoring, review sessions, and meaningful mentorship, transforming learning into opportunities and solutions for the youth.',
    'Powered by DOST Cagayan Valley, DOST ACCESS, and DOST-SEI Scholars Organizations in Cagayan Valley, this initiative brings together top-performing scholars, outstanding alumni, and expert mentors ready to guide you every step of the way. Expect high-yield lessons, proven exam strategies, mock exams, and real insights from those who\'ve been in your shoes—and succeeded. Whether you\'re strengthening your fundamentals or sharpening your test-taking skills, ISKO-OPS levels the playing field and helps you reach your academic goals.',
  ],
  tagline: 'TARA: Sama-sama nating buuin ang kinabukasang hinuhubog ng kaalaman at malasakit.',
  cta: 'Your journey to becoming a DOST-SEI Scholar starts here.',
  registrationDeadline: 'January 16, 2025',
  registrationLink: 'bit.ly/r2ISKOOPS',
  imageUrl: '/images/isko-ops.jpg',
};
