# Turbopack Error Fix Guide

## Issue
Turbopack is experiencing a panic error:
```
range start index 3103853563 out of range for slice of length 859
```

This is a known issue with Next.js 16.1.0 and Turbopack, often caused by:
- Multiple lockfiles in the workspace
- Corrupted cache
- Large file operations

## Solutions

### Solution 1: Use Webpack Instead (Recommended)
Run the dev server without Turbopack:
```bash
npm run dev:webpack
```

Or directly:
```bash
npm run dev -- --no-turbo
```

### Solution 2: Clear All Caches
1. Stop the dev server (Ctrl+C)
2. Delete `.next` folder
3. Delete `node_modules/.cache` if it exists
4. Restart: `npm run dev`

### Solution 3: Fix Lockfile Issue
The warning shows multiple lockfiles detected. To fix:
1. Check if you have `package-lock.json` in parent directories
2. Remove unnecessary lockfiles
3. Or set the workspace root in `next.config.ts`:
```typescript
experimental: {
  turbo: {
    root: process.cwd(),
  },
}
```

### Solution 4: Update Next.js
```bash
npm install next@latest
```

## Current Status
- ✅ Cleared `.next` cache
- ✅ Cleared log files
- ✅ Added `dev:webpack` script to package.json

## Recommendation
Use `npm run dev:webpack` until Turbopack is more stable. Webpack is fully compatible with all features and will work perfectly for development.

