# Vercel Deployment Guide

## Prerequisites
- A [Vercel account](https://vercel.com/signup)
- A [Supabase project](https://app.supabase.com/)
- Git repository (GitHub, GitLab, or Bitbucket)

## Setup Instructions

### 1. Configure Supabase

1. Go to your [Supabase Dashboard](https://app.supabase.com/)
2. Select your project or create a new one
3. Navigate to **Settings** → **API**
4. Copy the following values:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **Anon/Public Key**

### 2. Update Local Environment

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Update `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

### 3. Test Locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000 to ensure everything works.

### 4. Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click **"Add New Project"**
4. Import your repository
5. Configure environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
6. Click **Deploy**

#### Option B: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Add environment variables:
   ```bash
   vercel env add NEXT_PUBLIC_SUPABASE_URL
   vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
   ```

5. Deploy to production:
   ```bash
   vercel --prod
   ```

## Environment Variables

Set these in the Vercel Dashboard under **Settings** → **Environment Variables**:

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon/public key | Yes |

## Post-Deployment

### Configure Supabase Authentication

If you're using authentication:

1. Go to **Supabase Dashboard** → **Authentication** → **URL Configuration**
2. Add your Vercel deployment URL to:
   - **Site URL**: `https://your-app.vercel.app`
   - **Redirect URLs**: `https://your-app.vercel.app/**`

### Enable Preview Deployments

Vercel automatically creates preview deployments for each branch. Add wildcard redirect URLs in Supabase:
- `https://*.vercel.app/**`

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure TypeScript has no errors: `npm run build`
- Check Vercel build logs for specific errors

### Environment Variables Not Working
- Ensure variables are prefixed with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding/updating environment variables
- Clear Vercel cache: Settings → Clear Cache

### Supabase Connection Issues
- Verify environment variables are set correctly
- Check Supabase project is active
- Ensure Supabase URL and keys match your project

## Monitoring

- **Analytics**: Available in Vercel Dashboard
- **Logs**: Real-time logs in Vercel Dashboard → Deployments → [Your Deployment] → Runtime Logs
- **Performance**: Speed Insights available with Vercel Pro

## Development Workflow

1. Create a feature branch
2. Make changes and commit
3. Push to GitHub
4. Vercel creates a preview deployment automatically
5. Test the preview URL
6. Merge to `main` for production deployment

---

For more information:
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Supabase Docs](https://supabase.com/docs)
