'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const sampleProducts = [
  { id: '1', name: 'Nordic Fabric Sofa', price: '€3,950', image: '/images/products/nsofa.jpg' },
  { id: '2', name: 'Windsor Armchair', price: '€1,850', image: '/images/products/chair1.jpg' },
  { id: '14', name: 'Marble Dining Table', price: '€3,600', image: '/images/products/table1.jpg' },
  { id: '8', name: 'Canopy King Bed', price: '€5,500', image: '/images/products/bed1.jpg' },
];

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Global Escape key handler
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const saved = localStorage.getItem('recentSearches');
      if (saved) {
        setRecentSearches(JSON.parse(saved));
      }
      setTimeout(() => inputRef.current?.focus(), 200);
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = 'unset';
      setSearchQuery('');
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleSearch = (query: string) => {
    if (!query.trim()) return;
    
    const updated = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
    
    window.location.href = `/products?search=${encodeURIComponent(query)}`;
    onClose();
  };

  const clearRecent = (term: string) => {
    const updated = recentSearches.filter(s => s !== term);
    setRecentSearches(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
  };

  const suggestedSearches = [
    'Modern sofa',
    'Dining table',
    'Bedroom furniture',
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          
          {/* Search Modal - Fixed positioning with overflow control */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-4 right-4 top-4 bottom-4 md:left-[10%] md:right-[10%] md:top-[5%] md:bottom-[5%] bg-white shadow-2xl flex flex-col rounded-lg"
          >
            {/* Header - Fixed at top */}
            <div className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-b border-neutral-100">
              <div className="flex items-baseline">
                <span className="text-2xl text-neutral-900" style={{ fontFamily: "'Pinyon Script', cursive" }}>C</span>
                <span className="text-sm tracking-[0.15em] text-neutral-900" style={{ fontFamily: 'Georgia, serif' }}>ASAVÉRA</span>
              </div>
              <button
                onClick={onClose}
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Close
              </button>
            </div>

            {/* Content Area - Scrollable */}
            <div className="flex-1 flex min-h-0 overflow-hidden">
              {/* Left Side - Search */}
              <div className="w-full md:w-[40%] border-r border-neutral-100 flex flex-col">
                {/* Search Input - Fixed at top */}
                <div className="flex-shrink-0 p-6 pb-0">
                  <div className="relative mb-6">
                    <input
                      ref={inputRef}
                      type="text"
                      placeholder="Search for..."
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
                      className="w-full pb-3 border-b border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors pr-10"
                    />
                    <button 
                      onClick={() => searchQuery && handleSearch(searchQuery)}
                      className="absolute right-0 top-0 p-1 text-neutral-400 hover:text-neutral-900"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Scrollable suggestions area */}
                <div className="flex-1 overflow-y-auto px-6 pb-6">
                  {/* Suggested Searches */}
                  <div className="mb-8">
                    <div className="space-y-3">
                      {suggestedSearches.map((term) => (
                        <button
                          key={term}
                          onClick={() => handleSearch(term)}
                          className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors text-left"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Recent Searches */}
                  {recentSearches.length > 0 && (
                    <div>
                      <div className="space-y-3">
                        {recentSearches.map((term) => (
                          <div key={term} className="flex items-center justify-between group">
                            <button
                              onClick={() => handleSearch(term)}
                              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors text-left"
                            >
                              {term}
                            </button>
                            <button
                              onClick={() => clearRecent(term)}
                              className="text-neutral-400 hover:text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => {
                          setRecentSearches([]);
                          localStorage.removeItem('recentSearches');
                        }}
                        className="mt-4 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                      >
                        Clear all
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Side - Products */}
              <div className="hidden md:block flex-1 p-6 overflow-y-auto bg-neutral-50">
                <div className="grid grid-cols-2 gap-4">
                  {sampleProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.id}`}
                      onClick={onClose}
                      className="group bg-white rounded-lg overflow-hidden"
                    >
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="200px"
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="text-sm text-neutral-900 mb-1 group-hover:text-neutral-600 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-sm text-neutral-500">{product.price}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
