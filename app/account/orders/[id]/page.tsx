import AccountNavigation from '../../../components/AccountNavigation';
import AccountSidebar from '../../../components/AccountSidebar';
import Link from 'next/link';

// Order Details Page
export default function OrderDetailsPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf8f5' }}>
      <AccountNavigation />
      
      <div className="max-w-[1920px] mx-auto px-6 lg:px-16 py-12">
        <div className="flex gap-12">
          <AccountSidebar />
          
          <div className="flex-1">
            <Link href="/account/orders" className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors mb-8 inline-block">
              ← Back to Orders
            </Link>

            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2 text-neutral-900">
                  Order #AUR-882910
                </h1>
                <p className="text-sm text-neutral-600">Placed on October 24, 2023</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-neutral-900">Delivered</span>
                </div>
                <p className="text-sm text-neutral-600">Arrived Oct 29, 2023</p>
              </div>
            </div>

            {/* Products */}
            <div className="space-y-6 mb-12">
              <div className="flex gap-6 pb-6 border-b border-neutral-200">
                <div className="w-24 h-24 bg-neutral-100 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-10 h-10 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-medium text-neutral-900 mb-1">The Atelier Lounge Chair</h3>
                  <p className="text-sm text-neutral-600 mb-1">Finish: Walnut & Brass</p>
                  <p className="text-sm text-neutral-600 mb-2">Upholstery: Italian Leather, Cognac</p>
                  <p className="text-sm text-neutral-600">Qty: 1</p>
                </div>
                <div className="text-right">
                  <p className="text-base font-medium text-neutral-900 mb-4">$3,850.00</p>
                  <Link href="/reviews" className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors">
                    Write a Review
                  </Link>
                </div>
              </div>

              <div className="flex gap-6 pb-6 border-b border-neutral-200">
                <div className="w-24 h-24 bg-neutral-100 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-10 h-10 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-medium text-neutral-900 mb-1">Carrara Low Table</h3>
                  <p className="text-sm text-neutral-600 mb-1">Material: White Carrara Marble</p>
                  <p className="text-sm text-neutral-600 mb-2">Size: Large (120cm)</p>
                  <p className="text-sm text-neutral-600">Qty: 1</p>
                </div>
                <div className="text-right">
                  <p className="text-base font-medium text-neutral-900 mb-4">$2,200.00</p>
                  <Link href="/reviews" className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors">
                    Write a Review
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Shipping Address */}
              <div>
                <h2 className="text-sm font-medium uppercase tracking-wider text-neutral-900 mb-4">
                  Shipping Address
                </h2>
                <div className="text-sm text-neutral-600 space-y-1">
                  <p className="font-medium text-neutral-900">Eleanor Rigby</p>
                  <p>124 Kensington High Street</p>
                  <p>Apartment 4B</p>
                  <p>London, W8 7RL</p>
                  <p>United Kingdom</p>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h2 className="text-sm font-medium uppercase tracking-wider text-neutral-900 mb-4">
                  Payment Method
                </h2>
                <div className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span className="text-sm text-neutral-600">Visa ending in 4242</span>
                </div>
              </div>

              {/* Order Summary */}
              <div>
                <h2 className="text-sm font-medium uppercase tracking-wider text-neutral-900 mb-4">
                  Order Summary
                </h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Subtotal</span>
                    <span className="text-neutral-900">$6,050.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Shipping</span>
                    <span className="text-neutral-900">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Tax (VAT)</span>
                    <span className="text-neutral-900">$1,210.00</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-neutral-200">
                    <span className="font-medium text-neutral-900">Total</span>
                    <span className="font-medium text-neutral-900">$7,260.00</span>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <button className="btn-primary w-full text-white" style={{ backgroundColor: '#0b4d3b' }}>
                    Download Invoice
                  </button>
                  <button className="btn-secondary w-full border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white">
                    Return Items
                  </button>
                </div>
                <div className="mt-6 p-4 bg-neutral-50 border border-neutral-200">
                  <h3 className="text-xs font-medium uppercase tracking-wider text-neutral-900 mb-2">
                    Need Help?
                  </h3>
                  <p className="text-xs text-neutral-600 mb-2">
                    If you have questions about your order or need assistance with assembly, our concierge team is here.
                  </p>
                  <Link href="/contact" className="text-xs text-neutral-700 hover:text-neutral-900 transition-colors underline">
                    Contact Concierge
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-200 py-16 px-6 lg:px-16 mt-24">
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

