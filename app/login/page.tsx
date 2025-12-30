import AccountNavigation from '../components/AccountNavigation';
import Link from 'next/link';

// Login Page - Theme matches account pages
export default function LoginPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf8f5' }}>
      <AccountNavigation />
      
      <div className="max-w-[1920px] mx-auto px-6 lg:px-16 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Login */}
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-neutral-900">
                I Have an Account
              </h1>
              <form className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="input-field"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    className="input-field"
                    placeholder=""
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary text-white w-full"
                  style={{ backgroundColor: '#0b4d3b' }}
                >
                  Sign In
                </button>
                <Link
                  href="/forgot-password"
                  className="block text-sm text-neutral-700 hover:text-neutral-900 transition-colors"
                >
                  Forgot password?
                </Link>
              </form>
            </div>

            {/* Right - Create Account */}
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-neutral-900">
                I Am New to Aurelius
              </h1>
              <p className="text-base text-neutral-700 mb-8 font-light">
                Create an account to enjoy exclusive services and personalized experiences.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Track your orders and view purchase history',
                  'Save your favorite items to your Wishlist',
                  'Manage your personal information and preferences',
                  'Exclusive access to new collections and private sales',
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0b4d3b] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base text-neutral-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/register"
                className="btn-secondary inline-block text-center border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-200 py-16 px-6 lg:px-16">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="text-xs font-medium text-neutral-900 mb-4 uppercase tracking-wider">Customer Care</h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li><Link href="/contact" className="hover:text-neutral-900 transition-colors">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-neutral-900 transition-colors">Shipping & Returns</Link></li>
                <li><Link href="#" className="hover:text-neutral-900 transition-colors">Order Tracking</Link></li>
                <li><Link href="#" className="hover:text-neutral-900 transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium text-neutral-900 mb-4 uppercase tracking-wider">The Maison</h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li><Link href="#" className="hover:text-neutral-900 transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-neutral-900 transition-colors">Sustainability</Link></li>
                <li><Link href="#" className="hover:text-neutral-900 transition-colors">Press</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium text-neutral-900 mb-4 uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li><Link href="#" className="hover:text-neutral-900 transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-neutral-900 transition-colors">Terms of Use</Link></li>
                <li><Link href="#" className="hover:text-neutral-900 transition-colors">Accessibility</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium text-neutral-900 mb-4 uppercase tracking-wider">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-200 pt-8 text-center text-sm text-neutral-600">
            <p>&copy; {new Date().getFullYear()} Aurelius. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

