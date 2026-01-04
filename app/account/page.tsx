'use client';

import AccountNavigation from '../components/AccountNavigation';
import AccountSidebar from '../components/AccountSidebar';
import AccountFooter from '../components/AccountFooter';
import Link from 'next/link';

// User Dashboard Page
export default function DashboardPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#f7f5f2]">
      <AccountNavigation />
      
      <div className="flex-1">
        <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="py-12">
            <div className="flex flex-col lg:flex-row gap-12">
              <AccountSidebar />
              
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-light text-neutral-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  Welcome back, Eleanor
                </h1>
                <p className="text-neutral-500 mb-10 leading-relaxed">
                  From your account dashboard you can view your recent orders, manage your shipping and billing 
                  addresses, and edit your password and account details.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Recent Order */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                        Recent Order
                      </h2>
                      <Link href="/account/orders" className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors">
                        View All Orders
                      </Link>
                    </div>
                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs uppercase tracking-wider rounded-full mb-3">
                        Shipped
                      </span>
                      <p className="text-sm text-neutral-700 mb-1">Order #US-8492</p>
                      <p className="text-sm text-neutral-500">Placed on October 24, 2024</p>
                    </div>
                    <div className="flex items-center gap-4 mb-6 pb-6 border-b border-neutral-100">
                      <div className="w-16 h-16 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm text-neutral-900 mb-1">Nordic Fabric Sofa</h3>
                        <p className="text-xs text-neutral-500">Nordic Wool Blend</p>
                        <p className="text-xs text-neutral-500">Qty: 1</p>
                      </div>
                      <p className="text-sm text-neutral-900">€3,950</p>
                    </div>
                    <button className="w-full py-3 border border-neutral-900 text-neutral-900 text-sm uppercase tracking-wider rounded-full hover:bg-neutral-900 hover:text-white transition-colors">
                      Track Package
                    </button>
                  </div>

                  {/* Account Details */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                        Account Details
                      </h2>
                      <Link href="/account/edit" className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors">
                        Edit
                      </Link>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-neutral-900 mb-1">Eleanor Rigby</p>
                        <p className="text-sm text-neutral-500">eleanor.rigby@example.com</p>
                      </div>
                      <Link href="/account/change-password" className="inline-block text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
                        Change Password
                      </Link>
                    </div>
                  </div>

                  {/* Primary Address */}
                  <div className="bg-white rounded-xl p-6 shadow-sm lg:col-span-2">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                        Primary Address
                      </h2>
                      <Link href="/account/addresses" className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors">
                        Manage Addresses
                      </Link>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-900 mb-2">Shipping & Billing</p>
                      <p className="text-sm text-neutral-500">123 Luxury Lane, Penthouse 4B</p>
                      <p className="text-sm text-neutral-500">New York, NY 10012</p>
                      <p className="text-sm text-neutral-500">United States</p>
                    </div>
                  </div>
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
