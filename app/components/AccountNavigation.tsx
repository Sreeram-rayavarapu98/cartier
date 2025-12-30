'use client';

import Link from 'next/link';
import { useState } from 'react';
import SearchOverlay from './SearchOverlay';
import TopBanner from './TopBanner';

export default function AccountNavigation() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <TopBanner />
      <nav className="bg-white border-b border-neutral-200">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center gap-12">
              <Link href="/products" className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-900">
                Collections
              </Link>
              <Link href="/maison" className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-900">
                The Maison
              </Link>
              <Link href="/services" className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-900">
                Services
              </Link>
            </div>
            <Link href="/" className="text-2xl font-serif font-bold text-neutral-900">
              AURELIUS
            </Link>
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="text-neutral-900 hover:opacity-70 transition-opacity"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <Link href="/account" className="text-neutral-900 hover:opacity-70 transition-opacity">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>
              <Link href="/bag" className="text-neutral-900 hover:opacity-70 transition-opacity relative">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-neutral-900 text-white text-xs rounded-full flex items-center justify-center">0</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}

