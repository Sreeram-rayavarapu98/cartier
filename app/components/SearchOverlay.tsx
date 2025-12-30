'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const trendingSearches = [
    'Terra Marble Table',
    'Cloud Sofa Collection',
    'Kanso Lounge Chair',
    'Minimalist Lighting',
    'Bouclé Textures',
  ];

  const categories = [
    'Living Room',
    'Dining Room',
    'Bedroom Sanctuary',
    'Home Office',
    'Outdoor Living',
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[101] overflow-y-auto"
            style={{ backgroundColor: '#f7f5f2' }}
          >
            {/* Top Bar */}
            <div className="bg-[#0b4d3b] text-white py-2 text-center text-xs uppercase tracking-wider">
              Complimentary Shipping & White Glove Delivery
            </div>

            {/* Header */}
            <div className="bg-white border-b border-neutral-200">
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
                  <div className="text-2xl font-sans font-bold text-neutral-900">
                    AURELIUS
                  </div>
                  <button
                    onClick={onClose}
                    className="text-neutral-900 hover:opacity-70 transition-opacity text-2xl font-light"
                  >
                    ×
                  </button>
                </div>
              </div>
            </div>

            {/* Search Section */}
            <div className="max-w-[1920px] mx-auto px-6 lg:px-16 py-16">
              <div className="flex items-center gap-4 mb-16">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && searchQuery.trim()) {
                      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
                    }
                    if (e.key === 'Escape') {
                      onClose();
                    }
                  }}
                  className="flex-1 text-4xl font-light bg-transparent border-none outline-none text-neutral-900 placeholder-neutral-400"
                  autoFocus
                />
                <button 
                  onClick={() => {
                    if (searchQuery.trim()) {
                      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
                    }
                  }}
                  className="text-neutral-900 hover:opacity-70 transition-opacity"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {/* Trending Now */}
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-900 mb-6">
                    Trending Now
                  </h3>
                  <ul className="space-y-4">
                    {trendingSearches.map((item) => (
                      <li key={item}>
                        <Link
                          href={`/products?search=${encodeURIComponent(item)}`}
                          className="text-base text-neutral-700 hover:text-neutral-900 transition-colors"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Categories */}
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-900 mb-6">
                    Categories
                  </h3>
                  <ul className="space-y-4">
                    {categories.map((category) => (
                      <li key={category}>
                        <Link
                          href={`/products?category=${encodeURIComponent(category)}`}
                          className="text-base text-neutral-700 hover:text-neutral-900 transition-colors"
                        >
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Featured Collections */}
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-900 mb-6">
                    Featured Collections
                  </h3>
                  <div className="space-y-6">
                    <Link href="/collections/stone-series" className="block group">
                      <div className="aspect-[4/3] bg-neutral-100 rounded-lg overflow-hidden mb-3">
                        <div className="w-full h-full flex items-center justify-center text-neutral-400">
                          <p className="text-sm">The Stone Series</p>
                        </div>
                      </div>
                      <p className="text-base text-neutral-700 group-hover:text-neutral-900 transition-colors">
                        The Stone Series
                      </p>
                    </Link>
                    <Link href="/collections/natural-oak" className="block group">
                      <div className="aspect-[4/3] bg-neutral-100 rounded-lg overflow-hidden mb-3">
                        <div className="w-full h-full flex items-center justify-center text-neutral-400">
                          <p className="text-sm">Natural Oak</p>
                        </div>
                      </div>
                      <p className="text-base text-neutral-700 group-hover:text-neutral-900 transition-colors">
                        Natural Oak
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-neutral-200 bg-white py-8">
              <div className="max-w-[1920px] mx-auto px-6 lg:px-16">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-neutral-600">
                    Need assistance? Call +1 (800) 555-0199
                  </p>
                  <div className="flex gap-8">
                    <Link href="/store-locator" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                      Store Locator
                    </Link>
                    <Link href="/contact" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                      Customer Service
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

