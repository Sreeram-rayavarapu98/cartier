# Routing 404 Issue - Fix Instructions

## Problem
Only the landing page (`/`) works. `/products` and `/products/[id]` return 404.

## Solution

The dev server needs to be **stopped and restarted** to clear the routing cache. The `.next` cache files are locked because the server is running.

### Steps to Fix:

1. **Stop the dev server** (Press `Ctrl+C` in the terminal running `npm run dev`)

2. **Clear the cache manually** (if needed):
   ```powershell
   # After stopping the server, run:
   Remove-Item -Recurse -Force .next
   ```

3. **Restart the dev server**:
   ```powershell
   npm run dev
   ```

4. **Wait for compilation** - The pages should compile successfully

5. **Test the routes**:
   - `http://localhost:3000/` - Should work ✅
   - `http://localhost:3000/products` - Should work after restart ✅
   - `http://localhost:3000/products/1` - Should work after restart ✅
   - `http://localhost:3000/products/2` - Should work after restart ✅

## Why This Happens

Next.js 16 with Turbopack caches routes aggressively. When pages are added or modified, sometimes the cache doesn't update properly, causing 404 errors even though the pages exist.

## Alternative: Hard Refresh

If restarting doesn't work, try:
1. Hard refresh the browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Clear browser cache
3. Try incognito/private mode

## Verification

After restarting, check the terminal output. You should see:
- `✓ Compiled /products/page successfully`
- `✓ Compiled /products/[id]/page successfully`

If you still see 404 errors after restarting, there may be a compilation error. Check the terminal for error messages.

