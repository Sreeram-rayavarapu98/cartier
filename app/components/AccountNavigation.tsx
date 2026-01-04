'use client';

import Link from 'next/link';
import { useState } from 'react';
import SearchOverlay from './SearchOverlay';

export default function AccountNavigation() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-neutral-900 text-white text-center py-2">
        <p className="text-xs uppercase tracking-widest">Complimentary Shipping & White Glove Delivery</p>
      </div>
      
      <nav className="bg-white border-b border-neutral-200">
        <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center gap-10">
                <Link href="/products" className="text-xs uppercase tracking-[0.15em] text-neutral-700 hover:text-neutral-900 transition-colors">
                  Collections
                </Link>
                <Link href="/maison" className="text-xs uppercase tracking-[0.15em] text-neutral-700 hover:text-neutral-900 transition-colors">
                  The Maison
                </Link>
                <Link href="/services" className="text-xs uppercase tracking-[0.15em] text-neutral-700 hover:text-neutral-900 transition-colors">
                  Services
                </Link>
              </div>
              
              {/* Brand Logo */}
              <Link href="/" className="flex items-baseline transition-opacity duration-300 hover:opacity-70">
                <span 
                  className="text-3xl text-neutral-900" 
                  style={{ fontFamily: "'Pinyon Script', 'Dancing Script', cursive", marginRight: '-2px' }}
                >
                  C
                </span>
                <span 
                  className="text-lg tracking-[0.15em] text-neutral-900" 
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
                >
                  ASAVÉRA
                </span>
              </Link>
              
              <div className="flex items-center gap-6">
                <button 
                  onClick={() => setIsSearchOpen(true)}
                  className="text-neutral-700 hover:text-neutral-900 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <Link href="/account" className="text-neutral-700 hover:text-neutral-900 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </Link>
                <Link href="/bag" className="text-neutral-700 hover:text-neutral-900 transition-colors relative">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-neutral-900 text-white text-[10px] rounded-full flex items-center justify-center">0</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
