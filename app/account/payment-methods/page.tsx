'use client';

import AccountNavigation from '../../components/AccountNavigation';
import AccountSidebar from '../../components/AccountSidebar';
import AccountFooter from '../../components/AccountFooter';

// Payment Methods Page
export default function PaymentMethodsPage() {
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
                  Payment Methods
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* Visa Card */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        <div>
                          <p className="text-sm text-neutral-900">Visa Platinum</p>
                          <p className="text-xs text-neutral-500">•••• •••• •••• 4242</p>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-neutral-900 text-white text-[10px] uppercase tracking-wider rounded-full">
                        Default
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500 mb-4">Expires 12/25</p>
                    <div className="flex gap-4">
                      <button className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Edit</button>
                      <button className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Remove</button>
                    </div>
                  </div>

                  {/* Mastercard */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        <div>
                          <p className="text-sm text-neutral-900">Mastercard</p>
                          <p className="text-xs text-neutral-500">•••• •••• •••• 8899</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-neutral-500 mb-4">Expires 09/24</p>
                    <div className="flex gap-4">
                      <button className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Set Default</button>
                      <button className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Edit</button>
                      <button className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Remove</button>
                    </div>
                  </div>

                  {/* Add New Card */}
                  <div className="bg-neutral-50 border-2 border-dashed border-neutral-200 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:border-neutral-400 transition-colors">
                    <svg className="w-10 h-10 text-neutral-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                    </svg>
                    <p className="text-sm text-neutral-500">Add New Card</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-3">
                    Secure Payment
                  </h2>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    Your payment information is processed securely. We do not store full credit card details on our servers. 
                    All transactions are encrypted with industry-standard SSL technology.
                  </p>
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
