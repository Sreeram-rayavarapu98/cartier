# Vercel Deployment Guide - Step by Step

This guide will walk you through deploying your luxury furniture website to Vercel.

## Prerequisites

- A GitHub account (free)
- A Vercel account (free)
- Your project code ready to deploy

---

## Step 1: Prepare Your Project

### 1.1 Ensure All Files Are Committed

Make sure your project is ready for deployment:

```bash
# Check git status
git status

# If you have uncommitted changes, commit them
git add .
git commit -m "Prepare for Vercel deployment"
```

### 1.2 Verify Your `next.config.ts`

Your `next.config.ts` should already be configured for images. Verify it looks like this:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
```

### 1.3 Check Your `package.json`

Ensure your `package.json` has the correct scripts:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## Step 2: Push to GitHub

### 2.1 Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Name your repository (e.g., `luxury-furniture-website`)
4. Choose **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license (if you already have these)
6. Click **"Create repository"**

### 2.2 Push Your Code to GitHub

If you haven't initialized git yet:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

If you already have git initialized:

```bash
# Add GitHub repository as remote (if not already added)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.**

---

## Step 3: Deploy to Vercel

### 3.1 Sign Up / Sign In to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"** (recommended)
4. Authorize Vercel to access your GitHub account

### 3.2 Import Your Project

1. Once logged in, click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find and click on your repository (e.g., `luxury-furniture-website`)
4. Click **"Import"**

### 3.3 Configure Your Project

Vercel will automatically detect Next.js. You should see:

- **Framework Preset:** Next.js (auto-detected)
- **Root Directory:** `./` (leave as is)
- **Build Command:** `next build` (auto-detected)
- **Output Directory:** `.next` (auto-detected)
- **Install Command:** `npm install` (auto-detected)

**You can leave all settings as default** - Vercel handles Next.js projects automatically!

### 3.4 Environment Variables (Optional)

If you have any environment variables (like API keys), add them here:
- Click **"Environment Variables"**
- Add each variable:
  - **Name:** `YOUR_VAR_NAME`
  - **Value:** `your_value`
  - Click **"Add"**

For this project, you likely don't need any environment variables unless you add backend features later.

### 3.5 Deploy

1. Click **"Deploy"** button at the bottom
2. Wait for the build to complete (usually 1-3 minutes)
3. You'll see a success message with your live URL!

---

## Step 4: Access Your Live Website

### 4.1 Your Live URL

After deployment, Vercel will provide you with:
- **Production URL:** `https://your-project-name.vercel.app`
- **Deployment Status:** ✅ Success

### 4.2 Test Your Website

1. Click on the production URL to open your site
2. Test all pages:
   - Homepage
   - Products/Collections
   - Product detail pages
   - 3D model viewers
   - Account pages

### 4.3 Custom Domain (Optional)

If you want to use your own domain:

1. Go to your project dashboard on Vercel
2. Click **"Settings"** → **"Domains"**
3. Enter your domain name
4. Follow Vercel's instructions to configure DNS

---

## Step 5: Automatic Deployments

### 5.1 How It Works

Vercel automatically deploys:
- **Every push to `main` branch** → Production deployment
- **Every pull request** → Preview deployment

### 5.2 Making Updates

To update your live website:

```bash
# Make your changes
# ... edit files ...

# Commit and push
git add .
git commit -m "Update website"
git push origin main
```

Vercel will automatically:
1. Detect the push
2. Build your project
3. Deploy the new version
4. Update your live site (usually in 1-2 minutes)

---

## Step 6: Monitor Your Deployment

### 6.1 View Deployment History

1. Go to your project on Vercel
2. Click **"Deployments"** tab
3. See all your deployments with:
   - Status (Ready, Building, Error)
   - Build time
   - Commit message
   - Preview URLs

### 6.2 View Logs

If something goes wrong:
1. Click on a deployment
2. Click **"Build Logs"** or **"Function Logs"**
3. Check for any errors

---

## Troubleshooting

### Build Fails

**Common Issues:**

1. **Missing dependencies:**
   ```bash
   # Make sure all dependencies are in package.json
   npm install
   ```

2. **TypeScript errors:**
   ```bash
   # Fix TypeScript errors locally first
   npm run build
   ```

3. **Image configuration:**
   - Make sure `next.config.ts` has all image domains configured

### 3D Models Not Loading

- Check that model files are in `public/models/` directory
- Verify model paths in your code match actual file names
- Check browser console for errors

### Images Not Loading

- Verify `next.config.ts` has Unsplash configured
- Check that image URLs are correct
- Ensure images are using Next.js `Image` component

---

## Additional Vercel Features

### Analytics (Optional)

1. Go to **"Analytics"** tab in your project
2. Enable Vercel Analytics (free tier available)
3. Track page views and performance

### Speed Insights (Optional)

1. Go to **"Speed Insights"** tab
2. Enable to see Core Web Vitals
3. Monitor your site's performance

---

## Quick Reference

### Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] `next.config.ts` configured
- [ ] `package.json` has correct scripts
- [ ] All dependencies installed
- [ ] Project builds locally (`npm run build`)
- [ ] Repository connected to Vercel
- [ ] Deployment successful
- [ ] Live site tested

### Useful Commands

```bash
# Build locally to test
npm run build

# Start production server locally
npm start

# Check for errors
npm run lint

# Test build output
npm run build && npm start
```

---

## Support

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Support:** [vercel.com/support](https://vercel.com/support)

---

## Summary

1. ✅ Push code to GitHub
2. ✅ Sign up/Login to Vercel
3. ✅ Import GitHub repository
4. ✅ Deploy (automatic configuration)
5. ✅ Get live URL
6. ✅ Future updates: just push to GitHub!

Your website will be live at `https://your-project-name.vercel.app` 🎉

