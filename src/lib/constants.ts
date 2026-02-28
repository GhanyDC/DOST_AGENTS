// =============================================================================
// Application Constants
// =============================================================================

import type { NavItem, Feature, Testimonial, Project, FooterNav, SocialLink, ContactInfo, Update, UpdateFilterOption, ScholarshipApplicationData, Office, StudyArea, PrepStrategy } from '@/types';

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
  {
    label: 'Scholarship',
    dropdown: [
      { label: 'Application', href: '/scholarship/application' },
      { label: 'Sources', href: '/scholarship/sources' },
      { label: 'Undergraduate', href: '/scholarship/undergraduate' },
    ],
  },
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
  titleRest: 'Of Change, Excellence and For The Common Good',
  description: 'We cultivate leaders who embody integrity, excellence, and service. Through innovation and collaboration, we strive to create meaningful impact in our communities.  As Agents of Change, we are committed to advancing progress for the common good.',
  ctaText: 'Explore Projects',
  ctaLink: '/updates',
  secondaryCtaText: 'Learn More',
  secondaryCtaLink: '/about',
};

// Group Photo Section
export const GROUP_PHOTO_CONTENT = {
  subtitle: 'Science. Service. Nation.',
  tagline: {
    prefix: 'Empowered by',
    science: 'Science,',
    middle: 'Driven by',
    service: 'Service,',
    suffix: 'committed to',
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
  { id: '1', title: 'Project Namnama', date: 'December 21, 2025', imageUrl: '/group_photo.png' },
  { id: '2', title: 'Project Namnama', date: 'December 21, 2025', imageUrl: '/group_photo.png' },
  { id: '3', title: 'Project Namnama', date: 'December 21, 2025', imageUrl: '/group_photo.png' },
  { id: '4', title: 'Project Namnama', date: 'December 21, 2025', imageUrl: '/group_photo.png' },
  { id: '5', title: 'Project Namnama', date: 'December 21, 2025', imageUrl: '/group_photo.png' },
  { id: '6', title: 'Project Namnama', date: 'December 21, 2025', imageUrl: '/group_photo.png' },
  { id: '7', title: 'Project Namnama', date: 'December 21, 2025', imageUrl: '/group_photo.png' },
  { id: '8', title: 'Project Namnama', date: 'December 21, 2025', imageUrl: '/group_photo.png' },
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
    title: 'AGENTS Goes Digital',
    description: 'Upgrade your skills, streamline your processes. Click into the future with us! From workshops to automations, we\'re upgrading how organizations get things done—sharper, smarter, and better. Register now and secure your spot today!',
  },
  {
    id: '2',
    number: 1,
    title: 'ISKOlympics',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: '3',
    number: 1,
    title: 'Star Awards',
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
    imageUrl: '/testimonial_avatar.png',
  },
  {
    id: '2',
    quote: "Being a DOST Scholar is not just about receiving stipend, it's about developing your potential to serve others through service",
    author: 'Janmar Christian T. Agilbao',
    batch: 'DOST Scholar - Batch 2021',
   imageUrl: '/testimonial_avatar.png',
  },
  {
    id: '3',
    quote: "Being a DOST Scholar is not just about receiving stipend, it's about developing your potential to serve others through service",
    author: 'Janmar Christian T. Agilbao',
    batch: 'DOST Scholar - Batch 2021',
    imageUrl: '/testimonial_avatar.png',
  },
];

// Core Values
export const CORE_VALUES_CONTENT = {
  title: 'Core Values',
  description: 'Professional excellence serves with competence, social responsibility uplifts communities, and servant leadership puts others first. Together, they affirm that leadership and achievement only matter when they positively impact people.',
  values: [
    { name: 'PROFESSIONAL', highlight: 'P' },
    { name: 'EXCELLENCE', highlight: 'E' },
    { name: 'SOCIAL', highlight: 'O' },
    { name: 'RESPONSIBILITY', highlight: 'P' },
    { name: 'SERVANT', highlight: '' },
    { name: 'LEADERSHIP', highlight: 'L,E' },
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

// =============================================================================
// Updates Page Constants
// =============================================================================

// Updates Page Content
export const UPDATES_CONTENT = {
  title: 'Organization',
  titleHighlight: 'Updates',
  description: 'Get the latest news and updates on our projects and events. These updates reflect the activities, initiatives, and milestones that define our organization\'s commitment to service, science, and scholarly excellence.',
};

// Update Filter Options
export const UPDATE_FILTERS: UpdateFilterOption[] = [
  { label: 'All Projects', value: 'all' },
];

// Academic Year Options (for dropdown)
export const ACADEMIC_YEAR_OPTIONS: string[] = [
  'All Years',
  '2025-2026',
  '2024-2025',
  '2023-2024',
];

// Sample Updates Data (static — will be replaced with Supabase data)
export const SAMPLE_UPDATES: Update[] = [
  {
    id: '1',
    slug: 'agents-digital',
    title: 'AGENTS Digital',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    content: [
      'The 1st specialized outreach program of the DOST scholars, backed by innovative technologies and fueled by shared vision, as this inspired a path-of-imagining that brings innovation to the streets. Lorem ipsum in their art of figuring critical thought, while a broken backyard, guided with this determined of academic excellence for many more years.',
      'The next specialized journey through the DOST scholars, backed by innovative technologies and fueled by strong motives, as the highest level of reaching all fundamental skills of the team, under this Filipino youth of fighting up to the strength of firm lower backed guided with independent and chosen by innovators who shine and beyond of years and one serving each one.',
      'The next specialized journey through the DOST scholars, backed by innovative technologies and fueled by family motives, as they hit that level of creating talent and building relationships when ideas rise on the common and with enough through this determined of academic excellence to not only each others bringing thing. They hold up a foundation—leading in class together—while we passed the path of a love and our and future goals. And DOST AGENTS came true.',
    ],
    category: 'projects',
    date: 'December 21, 2025',
    academicYear: '2025-2026',
    imageUrl: '/group_photo.png',
    galleryImages: ['/group_photo.png', '/group_photo.png', '/group_photo.png', '/group_photo.png', '/group_photo.png', '/group_photo.png'],
    tags: ['Technology', 'Digital'],
    authors: [
      { name: 'Mechelle Abinoja', role: 'Business Manager', imageUrl: '/testimonial_avatar.png' },
      { name: 'Mechelle Abinoja', role: 'Business Manager', imageUrl: '/testimonial_avatar.png' },
    ],
    isFeatured: true,
  },
  {
    id: '2',
    slug: 'agents-kutney',
    title: 'AGENTS Kutney',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    content: [],
    category: 'events',
    date: 'December 21, 2025',
    academicYear: '2025-2026',
    imageUrl: '/group_photo.png',
    tags: ['Events'],
    authors: [],
  },
  {
    id: '3',
    slug: 'project-title-3',
    title: 'Project Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: [],
    category: 'projects',
    date: 'December 21, 2025',
    academicYear: '2025-2026',
    imageUrl: '/group_photo.png',
    tags: ['Projects'],
    authors: [],
  },
  {
    id: '4',
    slug: 'handy-expressionism',
    title: 'Handy Expressionism',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    content: [],
    category: 'projects',
    date: 'December 21, 2025',
    academicYear: '2025-2026',
    imageUrl: '/group_photo.png',
    tags: ['Art'],
    authors: [],
  },
  {
    id: '5',
    slug: 'dost-agents-merch',
    title: 'DOST AGENTS Merch',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    content: [],
    category: 'merchandise',
    date: 'December 21, 2025',
    academicYear: '2025-2026',
    imageUrl: '/group_photo.png',
    tags: ['Merchandise'],
    authors: [],
  },
  {
    id: '6',
    slug: 'project-title-6',
    title: 'Project Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: [],
    category: 'projects',
    date: 'December 21, 2025',
    academicYear: '2025-2026',
    imageUrl: '/group_photo.png',
    tags: ['Projects'],
    authors: [],
  },
  {
    id: '7',
    slug: 'real-talk',
    title: 'Real Talk',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: [],
    category: 'events',
    date: 'December 21, 2025',
    academicYear: '2025-2026',
    imageUrl: '/group_photo.png',
    tags: ['Events'],
    authors: [],
  },
  {
    id: '8',
    slug: 'project-title-8',
    title: 'Project Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    content: [],
    category: 'projects',
    date: 'December 21, 2025',
    academicYear: '2025-2026',
    imageUrl: '/group_photo.png',
    tags: ['Projects'],
    authors: [],
  },
  {
    id: '9',
    slug: 'isko-orders',
    title: 'ISKO Orders',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: [],
    category: 'merchandise',
    date: 'December 21, 2025',
    academicYear: '2025-2026',
    imageUrl: '/group_photo.png',
    tags: ['Merchandise'],
    authors: [],
  },
  {
    id: '10',
    slug: 'project-title-10',
    title: 'Project Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: [],
    category: 'projects',
    date: 'December 21, 2025',
    academicYear: '2025-2026',
    imageUrl: '/group_photo.png',
    tags: ['Projects'],
    authors: [],
  },
  {
    id: '11',
    slug: 'mayin-puso',
    title: 'Mayin Puso',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: [],
    category: 'events',
    date: 'December 21, 2025',
    academicYear: '2025-2026',
    imageUrl: '/group_photo.png',
    tags: ['Events'],
    authors: [],
  },
  {
    id: '12',
    slug: 'project-title-12',
    title: 'Project Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: [],
    category: 'projects',
    date: 'December 21, 2025',
    academicYear: '2025-2026',
    imageUrl: '/group_photo.png',
    tags: ['Projects'],
    authors: [],
  },
  {
    id: '13',
    slug: 'search-inspiring-isko',
    title: 'Search: Inspiring ISKO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: [],
    category: 'events',
    date: 'December 21, 2025',
    academicYear: '2025-2026',
    imageUrl: '/group_photo.png',
    tags: ['Events', 'Scholarship'],
    authors: [],
  },
  {
    id: '14',
    slug: 'matness',
    title: 'MatNess',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: [],
    category: 'projects',
    date: 'December 21, 2025',
    academicYear: '2025-2026',
    imageUrl: '/group_photo.png',
    tags: ['Projects'],
    authors: [],
  },
  {
    id: '15',
    slug: 'iskapture',
    title: 'ISKAPTURE',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    content: [],
    category: 'events',
    date: 'December 21, 2025',
    academicYear: '2025-2026',
    imageUrl: '/group_photo.png',
    tags: ['Events', 'Photography'],
    authors: [],
  },
  {
    id: '16',
    slug: 'membership-drive',
    title: 'Membership Drive',
    description: 'Lorem ipsum dolor sit amet.',
    content: [],
    category: 'events',
    date: 'December 21, 2025',
    academicYear: '2025-2026',
    imageUrl: '/group_photo.png',
    tags: ['Membership'],
    authors: [],
  },
  {
    id: '17',
    slug: 'remembrance',
    title: 'Remembrance',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: [],
    category: 'events',
    date: 'December 21, 2025',
    academicYear: '2025-2026',
    imageUrl: '/group_photo.png',
    tags: ['Events'],
    authors: [],
  },
  {
    id: '18',
    slug: 'committee-hunt',
    title: 'Committee Hunt',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: [],
    category: 'events',
    date: 'December 21, 2025',
    academicYear: '2025-2026',
    imageUrl: '/group_photo.png',
    tags: ['Events', 'Recruitment'],
    authors: [],
  },
];

// 3rd AGENTS General Assembly (detail page sample data)
export const SAMPLE_UPDATE_DETAIL: Update = {
  id: '99',
  slug: '3rd-agents-general-assembly',
  title: "3rd AGENTS' General Assembly",
  description: 'DOST/AGENTS & PROJECTS',
  content: [
    'The 1st specialized outreach program of the DOST scholars, backed by innovative technologies and fueled by shared vision, as this inspired a path-of-imagining that brings innovation to the streets. Lorem ipsum in their art of figuring critical thought, while a broken backyard, guided with this determined of academic excellence for many more years. This initiative reflects the ongoing commitment to innovative thinking and collaborative learning.',
    'The next specialized journey through the DOST scholars, backed by innovative technologies and fueled by strong motives, as the highest level of reaching all fundamental skills of the team, under this Filipino youth of fighting up to the strength of firm lower backed guided with independent and chosen by innovators who shine and beyond of years and one serving each one. The dedication to the mission resonates through each new batch of scholars.',
    'The next specialized journey through the DOST scholars, backed by innovative technologies and fueled by family motives, as they hit that level of creating talent and building relationships when ideas rise on the common and with enough through this determined of academic excellence to not only each others bringing thing. They hold up a foundation—leading in class together—while we passed the path of a love and our and future goals. And DOST AGENTS came true. The assembly reaffirmed the values of service, excellence, and nation-building.',
  ],
  category: 'events',
  date: 'December 21, 2025',
  academicYear: '2025-2026',
  imageUrl: '/group_photo.png',
  galleryImages: [
    '/group_photo.png',
    '/group_photo.png',
    '/group_photo.png',
    '/group_photo.png',
    '/group_photo.png',
    '/group_photo.png',
  ],
  tags: ['General Assembly', 'Organization'],
  authors: [
    { name: 'Mechelle Abinoja', role: 'Business Manager', imageUrl: '/testimonial_avatar.png' },
    { name: 'Mechelle Abinoja', role: 'Business Manager', imageUrl: '/testimonial_avatar.png' },
  ],
};

// =============================================================================
// Scholarship Sources Constants
// =============================================================================

export const SCHOLARSHIP_OFFICES: Office[] = [
  {
    id: 'dost-sei',
    name: 'DOST - Science Education Institute',
    image: '/offices/dost-sei.png',
    location: 'General Santos Ave, Bicutan, Taguig',
    email: 'dost02scholarship@gmail.com',
    link: 'https://www.facebook.com/DOST.SEI',
  },
  {
    id: 'dost-r2',
    name: 'DOST Region 2 - Scholarship Unit',
    image: '/offices/dost-r2.png',
    location: 'Regional Government Center, Carig Sur, Tuguegarao',
    email: 'dost02scholarship@gmail.com',
    link: 'https://www.facebook.com/dost2scholarship',
  },
  {
    id: 'osdw',
    name: 'Office of the Student Development and Welfare',
    image: '/offices/osdw.png',
    location: 'Student Center, COEA Building, CSU Carig',
    email: 'agentscsucarig2k24@gmail.com',
    link: 'https://www.facebook.com/CSUCarigAGENTS',
  },
  {
    id: 'agents',
    name: 'AGENTS',
    image: '/offices/agents.png',
    location: 'Student Center, COEA Building, CSU Carig',
    email: 'agentscsucarig2k24@gmail.com',
    link: 'https://www.facebook.com/CSUCarigAGENTS',
  },
];

export const SCHOLARSHIP_STUDY_AREAS: StudyArea[] = [
  {
    id: 1,
    title: 'Science & Technology',
    description: 'Biology, Chemistry, Physics, and Earth Sciences fundamentals.',
  },
  {
    id: 2,
    title: 'Mathematics',
    description: 'Algebra, Geometry, Trigonometry, and Calculus applications.',
  },
  {
    id: 3,
    title: 'Language & Reading',
    description: 'Vocabulary, grammar proficiency, and reading comprehension.',
  },
  {
    id: 4,
    title: 'Abstract Reasoning',
    description: 'Pattern recognition, logical flow, and spatial orientation.',
  },
];

export const SCHOLARSHIP_PREP_STRATEGIES: PrepStrategy[] = [
  {
    id: 'time',
    icon: 'clock',
    title: 'Time Management Mastery',
    description:
      'Practice with timed mock exams to improve speed and accuracy. Learn which questions to prioritize and which to skip and return to later.',
  },
  {
    id: 'concept',
    icon: 'map',
    title: 'Concept Mapping',
    description:
      'Instead of memorization, focus on understanding core scientific and mathematical concepts through visual mapping and real-world application.',
  },
  {
    id: 'simulated',
    icon: 'users',
    title: 'Simulated Review Sessions',
    description:
      'Form or join study groups that recreate the actual testing environment to reduce anxiety and build test-taking endurance.',
  },
];

// =============================================================================
// Scholarship Page Constants
// =============================================================================

export const SCHOLARSHIP_APPLICATION_DATA: ScholarshipApplicationData = {
  hero: {
    title: 'DOST – SEI',
    titleHighlight: 'Scholarship',
    description:
      'The Department of Science and Technology – Science Education Institute (DOST-SEI) Undergraduate Scholarship Program supports talented Filipino students who will pursue priority programs in science, technology, engineering, and mathematics (STEM). The scholarship provides financial assistance, academic support, and national service opportunities to help develop the country\'s scientific and technological workforce.',
  },
  scholarshipTypes: [
    {
      id: 'ra-7687',
      name: 'RA 7687 Scholarship',
      description: '',
      bulletPoints: [
        'For financially needy but academically capable students',
        'Family gross annual income must not exceed the set DOST income threshold',
      ],
    },
    {
      id: 'merit',
      name: 'DOST-SEI Merit Scholarship',
      description: '',
      bulletPoints: [
        'For students with high aptitude in science and mathematics',
        'Primarily merit-based; income is not the main qualifying factor',
      ],
    },
  ],
  eligibilityRequirements: [
    { id: 'er-1', text: 'Natural-born Filipino' },
    { id: 'er-2', text: 'Of good moral character and in good health' },
    {
      id: 'er-3',
      text: 'Graduating Grade 12 student (current academic year) or Graduate of Grade 12 who has not enrolled in any college program',
    },
    {
      id: 'er-4',
      text: 'STEM strand student or Non-STEM student belonging to the top 5% of the graduating class',
    },
    { id: 'er-5', text: 'Must not have previously earned any post-secondary units' },
    { id: 'er-6', text: 'Must pass the DOST-SEI Scholarship Examination' },
  ],
  requiredDocuments: [
    { id: 'rd-1', text: 'Certified true copy of Grade 11 and Grade 12 report cards' },
    { id: 'rd-2', text: 'Certificate of good moral character' },
    { id: 'rd-3', text: 'Proof of family income (for RA 7687 applicants)' },
    { id: 'rd-4', text: 'Income tax Return (ITR) of parents/guardians' },
    { id: 'rd-5', text: 'Certificate of Indigency' },
    { id: 'rd-6', text: 'Birth certificate' },
    { id: 'rd-7', text: 'Recent ID picture (as specified in guidelines)' },
    { id: 'rd-8', text: 'School certification (strand and ranking, if non-STEM)' },
  ],
  applicationSteps: [
    {
      id: 'as-1',
      icon: 'folder',
      title: 'Online application',
      description: 'Comply in Online application opens (typically during first semester of Grade 12)',
    },
    {
      id: 'as-2',
      icon: 'edit',
      title: 'Create account',
      description: 'Create an account in the official DOST-SEI E-Application System',
    },
    {
      id: 'as-3',
      icon: 'play',
      title: 'Complete details',
      description: 'Complete personal, academic, and family information',
    },
    {
      id: 'as-4',
      icon: 'target',
      title: 'Upload documents',
      description: 'Upload required documents before the deadline',
    },
  ],
  importantDates: [
    { id: 'id-1', label: 'Announcement of List of Qualified Examinees', date: 'January 30, 2026' },
    { id: 'id-2', label: 'Release of Test Permits to Qualified Examinees', date: 'February 1–9, 2026' },
    { id: 'id-3', label: 'Schedule of Qualifying Examination', date: 'February 21–22, 2026' },
  ],
  resultsRelease: [
    'Official list of qualifiers published on DOST-SEI website',
    'Email notification sent to successful applicants',
  ],
  postQualification: [
    { id: 'pq-1', text: 'Attend scholar orientation' },
    { id: 'pq-2', text: 'Submit additional requirements (if requested)' },
    { id: 'pq-3', text: 'Sign the Scholarship Agreement' },
    { id: 'pq-4', text: 'Coordinate with school scholarship coordinator' },
  ],
  serviceObligation:
    'All scholars must render service in the Philippines in a field related to their degree for a duration equivalent to the number of years they received the scholarship.',
  contactPersons: [
    {
      id: 'cp-1',
      name: 'Kris Andrew P. Evangulla',
      role: 'Project Technical Assistant I',
      imageUrl: '/contacts/evangulla.png',
    },
    {
      id: 'cp-2',
      name: 'Madelyn P. Bulaqui',
      role: 'Project Staff – Scholarship',
      imageUrl: '/contacts/bulaqui.png',
    },
    {
      id: 'cp-3',
      name: 'Mary Ann P. Maglasin',
      role: 'ARD – FASS, DOST Region 2',
      imageUrl: '/contacts/maglasin.png',
    },
    {
      id: 'cp-4',
      name: 'Cecilia S. Calagui',
      role: 'SRS II/CM for S&T Scholarships DOST Region 2',
      imageUrl: '/contacts/calagui.png',
    },
  ],
  cta: {
    title: 'Ready to begin your journey?',
    description: 'Join over 500,000 scholars who have already transformed their futures through our program',
    buttonText: 'Apply Now',
    buttonLink: 'https://www.sei.dost.gov.ph/',
  },
  eligibilityImageUrl: '/application/dost-building.png',
  documentsImageUrl: '/application/dost-building.png',
};
