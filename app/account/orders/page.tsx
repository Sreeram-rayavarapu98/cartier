import AccountNavigation from '../../components/AccountNavigation';
import AccountSidebar from '../../components/AccountSidebar';
import Link from 'next/link';

// Orders List Page
export default function OrdersPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf8f5' }}>
      <AccountNavigation />
      
      <div className="max-w-[1920px] mx-auto px-6 lg:px-16 py-12">
        <div className="flex gap-12">
          <AccountSidebar />
          
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-neutral-900">
              My Orders
            </h1>

            <div className="space-y-6">
              <Link href="/account/orders/AUR-882910" className="block bg-white border border-neutral-200 p-6 hover:border-neutral-400 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-base font-medium text-neutral-900 mb-1">Order #AUR-882910</p>
                    <p className="text-sm text-neutral-600">Placed on October 24, 2023</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-neutral-900">Delivered</span>
                    </div>
                    <p className="text-base font-medium text-neutral-900">$7,260.00</p>
                  </div>
                </div>
              </Link>
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

