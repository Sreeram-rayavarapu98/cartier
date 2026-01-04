'use client';

import AccountNavigation from '../../components/AccountNavigation';
import AccountSidebar from '../../components/AccountSidebar';
import AccountFooter from '../../components/AccountFooter';
import Link from 'next/link';

// Orders List Page
export default function OrdersPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#f7f5f2]">
      <AccountNavigation />
      
      <div className="flex-1">
        <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="py-12">
            <div className="flex flex-col lg:flex-row gap-12">
              <AccountSidebar />
              
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-light text-neutral-900 mb-10" style={{ fontFamily: 'Georgia, serif' }}>
                  My Orders
                </h1>

                <div className="space-y-4">
                  <Link href="/account/orders/AUR-882910" className="block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <p className="text-sm text-neutral-900 mb-1">Order #AUR-882910</p>
                        <p className="text-xs text-neutral-500">Placed on October 24, 2023</p>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-neutral-700">Delivered</span>
                        </div>
                        <p className="text-sm text-neutral-900">€7,260.00</p>
                      </div>
                    </div>
                  </Link>

                  <Link href="/account/orders/AUR-771823" className="block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <p className="text-sm text-neutral-900 mb-1">Order #AUR-771823</p>
                        <p className="text-xs text-neutral-500">Placed on August 15, 2023</p>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-neutral-700">Delivered</span>
                        </div>
                        <p className="text-sm text-neutral-900">€3,950.00</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AccountFooter />
    </main>
  );
}
