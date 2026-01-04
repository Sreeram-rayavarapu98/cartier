'use client';

import AccountNavigation from '../../components/AccountNavigation';
import AccountSidebar from '../../components/AccountSidebar';
import AccountFooter from '../../components/AccountFooter';

// Saved Addresses Page
export default function AddressesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#f7f5f2]">
      <AccountNavigation />
      
      <div className="flex-1">
        <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="py-12">
            <div className="flex flex-col lg:flex-row gap-12">
              <AccountSidebar />
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
                  <h1 className="text-3xl md:text-4xl font-light text-neutral-900" style={{ fontFamily: 'Georgia, serif' }}>
                    Saved Addresses
                  </h1>
                  <button className="px-6 py-2.5 bg-neutral-900 text-white text-sm uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-colors">
                    Add New Address
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Default Billing Address */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                        Default Billing Address
                      </h2>
                    </div>
                    <div className="space-y-1 mb-6">
                      <p className="text-sm text-neutral-900">Eleanor Rigby</p>
                      <p className="text-sm text-neutral-500">1280 Fifth Avenue, Apt 10B</p>
                      <p className="text-sm text-neutral-500">New York, NY 10029</p>
                      <p className="text-sm text-neutral-500">United States</p>
                      <p className="text-sm text-neutral-500">T: +1 646 555 0123</p>
                    </div>
                    <div className="flex gap-4">
                      <button className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Edit</button>
                      <button className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Remove</button>
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                        Shipping Address
                      </h2>
                    </div>
                    <div className="space-y-1 mb-6">
                      <p className="text-sm text-neutral-900">Eleanor Rigby</p>
                      <p className="text-sm text-neutral-500">35 Ocean Drive</p>
                      <p className="text-sm text-neutral-500">East Hampton, NY 11937</p>
                      <p className="text-sm text-neutral-500">United States</p>
                      <p className="text-sm text-neutral-500">T: +1 631 555 0888</p>
                    </div>
                    <div className="flex gap-4">
                      <button className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Edit</button>
                      <button className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Remove</button>
                      <button className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Set as Default</button>
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
