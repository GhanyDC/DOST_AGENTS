# DOST Agents - Quick Setup Checklist

Follow this checklist to get your project ready for Vercel deployment:

## ✅ Pre-Deployment Checklist

### 1. Local Development Setup
- [ ] Install dependencies: `npm install`
- [ ] Copy environment template: `cp .env.example .env.local`
- [ ] Get Supabase credentials from: https://app.supabase.com/project/_/settings/api
- [ ] Update `.env.local` with your Supabase URL and Anon Key
- [ ] Test locally: `npm run dev`
- [ ] Verify app runs at http://localhost:3000

### 2. Supabase Configuration
- [ ] Create a Supabase project at https://app.supabase.com
- [ ] Copy your Project URL
- [ ] Copy your Anon/Public Key
- [ ] (Optional) Set up authentication providers if needed
- [ ] (Optional) Create database tables/schemas

### 3. Code Repository
- [ ] Initialize git: `git init` (if not already done)
- [ ] Add all files: `git add .`
- [ ] Commit changes: `git commit -m "Initial commit"`
- [ ] Create GitHub/GitLab repository
- [ ] Push code: `git push origin main`

### 4. Vercel Deployment

#### Option A: Via Vercel Dashboard (Recommended for first deployment)
- [ ] Go to https://vercel.com/dashboard
- [ ] Click "Add New Project"
- [ ] Import your Git repository
- [ ] Configure project:
  - Framework Preset: Next.js (auto-detected)
  - Build Command: `npm run build` (auto-filled)
  - Output Directory: `.next` (auto-filled)
- [ ] Add Environment Variables:
  - `NEXT_PUBLIC_SUPABASE_URL` = Your Supabase URL
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = Your Anon Key
- [ ] Click "Deploy"
- [ ] Wait for deployment to complete
- [ ] Visit your deployed site!

#### Option B: Via Vercel CLI
- [ ] Install Vercel CLI: `npm i -g vercel`
- [ ] Login: `vercel login`
- [ ] Deploy: `vercel`
- [ ] Add environment variables via CLI or dashboard
- [ ] Deploy to production: `vercel --prod`

### 5. Post-Deployment Configuration
- [ ] Copy your Vercel deployment URL (e.g., `https://your-app.vercel.app`)
- [ ] Go to Supabase Dashboard → Authentication → URL Configuration
- [ ] Set Site URL: `https://your-app.vercel.app`
- [ ] Add Redirect URLs:
  - `https://your-app.vercel.app/**`
  - `https://*.vercel.app/**` (for preview deployments)
- [ ] Test authentication flow if using auth
- [ ] Check deployment logs for any errors

### 6. Verify Deployment
- [ ] Visit your production URL
- [ ] Test all major features
- [ ] Check browser console for errors
- [ ] Verify Supabase connection works
- [ ] Test responsive design on mobile

## 🚀 Continuous Deployment

Once set up, your workflow will be:
1. Make changes locally
2. Commit and push to your repository
3. Vercel automatically deploys your changes
4. Preview deployments for branches
5. Production deployment when merging to main

## 📚 Important Files Created

- `middleware.ts` - Handles Supabase session management
- `.env.local` - Your local environment variables (DO NOT COMMIT)
- `.env.example` - Template for environment variables (safe to commit)
- `.env.local.example` - Alternative template
- `vercel.json` - Vercel deployment configuration
- `DEPLOYMENT.md` - Detailed deployment guide
- `CHECKLIST.md` - This file!

## 🆘 Troubleshooting

### Build fails on Vercel
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Run `npm run build` locally to test

### Environment variables not working
- Ensure variables are prefixed with `NEXT_PUBLIC_` for client access
- Redeploy after adding/updating variables
- Check variable names match exactly

### Supabase connection errors
- Verify URL and keys are correct
- Check Supabase project is active
- Ensure redirect URLs are configured

## 📖 Additional Resources

- [Deployment Guide](DEPLOYMENT.md) - Detailed deployment instructions
- [README.md](README.md) - Project documentation
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Supabase Docs](https://supabase.com/docs)

---

Good luck with your deployment! 🎉
