'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Load recent searches from localStorage
      const saved = localStorage.getItem('recentSearches');
      if (saved) {
        setRecentSearches(JSON.parse(saved));
      }
      // Focus input after animation
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSearch = (query: string) => {
    if (!query.trim()) return;
    
    // Save to recent searches
    const updated = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
    
    // Navigate to search results
    window.location.href = `/products?search=${encodeURIComponent(query)}`;
    onClose();
  };

  const trendingSearches = [
    'Modern Sofas',
    'Dining Tables',
    'Lounge Chairs',
    'Coffee Tables',
    'Bedroom Furniture',
  ];

  const categories = [
    { name: 'Living Room', href: '/products?category=living', icon: '🛋️' },
    { name: 'Dining', href: '/products?category=dining', icon: '🍽️' },
    { name: 'Bedroom', href: '/products?category=bedroom', icon: '🛏️' },
    { name: 'Office', href: '/products?category=office', icon: '💼' },
    { name: 'Outdoor', href: '/products?category=outdoor', icon: '🌳' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />
          
          {/* Search Panel */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-[101] bg-white shadow-2xl"
            style={{ maxHeight: '90vh' }}
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              {/* Search Input */}
              <div className="relative mb-8">
                <div className="flex items-center gap-4 border-b-2 border-neutral-900 pb-4">
                  <svg className="w-6 h-6 text-neutral-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search for products, collections, or styles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && searchQuery.trim()) {
                        handleSearch(searchQuery);
                      }
                      if (e.key === 'Escape') {
                        onClose();
                      }
                    }}
                    className="flex-1 text-xl sm:text-2xl font-light bg-transparent border-none outline-none text-neutral-900 placeholder-neutral-400"
                  />
                  <button
                    onClick={onClose}
                    className="text-neutral-400 hover:text-neutral-900 transition-colors p-2"
                    aria-label="Close search"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Search Results / Suggestions */}
              <div className="overflow-y-auto" style={{ maxHeight: 'calc(90vh - 120px)' }}>
                {searchQuery.trim() ? (
                  // Search suggestions
                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-wider text-neutral-500 mb-4">
                      Suggestions
                    </p>
                    <button
                      onClick={() => handleSearch(searchQuery)}
                      className="w-full text-left p-4 hover:bg-neutral-50 rounded-lg transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-neutral-400 group-hover:text-neutral-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span className="text-base text-neutral-900">Search for "{searchQuery}"</span>
                      </div>
                    </button>
                  </div>
                ) : (
                  // Default view with categories and recent searches
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Recent Searches */}
                    {recentSearches.length > 0 && (
                      <div>
                        <p className="text-xs uppercase tracking-wider text-neutral-500 mb-4">
                          Recent Searches
                        </p>
                        <div className="space-y-2">
                          {recentSearches.map((search, index) => (
                            <button
                              key={index}
                              onClick={() => handleSearch(search)}
                              className="w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 rounded-md transition-colors flex items-center justify-between group"
                            >
                              <span>{search}</span>
                              <svg className="w-4 h-4 text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Categories */}
                    <div>
                      <p className="text-xs uppercase tracking-wider text-neutral-500 mb-4">
                        Browse Categories
                      </p>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <Link
                            key={category.name}
                            href={category.href}
                            onClick={onClose}
                            className="flex items-center gap-3 px-4 py-3 text-base text-neutral-700 hover:bg-neutral-50 rounded-md transition-colors group"
                          >
                            <span className="text-xl">{category.icon}</span>
                            <span className="flex-1">{category.name}</span>
                            <svg className="w-4 h-4 text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Trending Searches */}
                    <div className={recentSearches.length > 0 ? 'md:col-span-2' : ''}>
                      <p className="text-xs uppercase tracking-wider text-neutral-500 mb-4">
                        Trending Searches
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {trendingSearches.map((search) => (
                          <button
                            key={search}
                            onClick={() => handleSearch(search)}
                            className="px-4 py-2 text-sm text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors"
                          >
                            {search}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
