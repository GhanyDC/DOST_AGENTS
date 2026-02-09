# DOST Agents

A modern Next.js application with Supabase backend, built with React 19, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 16.1.3 (App Router)
- **UI**: React 19, Tailwind CSS 4, Framer Motion
- **Backend**: Supabase (Authentication & Database)
- **Language**: TypeScript
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 20+ installed
- A Supabase account and project
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd DOST_AGENTS
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Update `.env.local` with your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
src/
├── app/                 # Next.js app router pages
│   ├── home/           # Home page
│   └── providers/      # Context providers
├── components/         # React components
│   ├── layout/        # Layout components (Navbar, Footer)
│   ├── sections/      # Page sections
│   └── ui/            # Reusable UI components
├── hooks/             # Custom React hooks
├── lib/               # Utilities and configurations
│   ├── supabase/     # Supabase client setup
│   ├── constants.ts  # App constants
│   └── utils.ts      # Utility functions
├── pages/             # Page components
├── styles/            # Global styles and animations
└── types/             # TypeScript type definitions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This project is optimized for deployment on Vercel. See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/dost-agents)

## Environment Variables

Required environment variables:

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon/public key | Yes |

## Features

- ⚡ Next.js 16 with App Router
- 🎨 Tailwind CSS 4 for styling
- 🔐 Supabase authentication ready
- 📱 Responsive design
- 🎭 Framer Motion animations
- 🌙 Theme provider support
- 📦 TypeScript for type safety

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Deployment Guide](DEPLOYMENT.md)

## License

This project is private and proprietary.
