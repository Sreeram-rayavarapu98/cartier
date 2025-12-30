'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchOverlay from './SearchOverlay';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#f7f5f2]/98 backdrop-blur-lg shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-20 sm:h-24">
          <Link href="/" className="text-xl sm:text-2xl font-sans font-bold tracking-tight text-neutral-900">
            AESTHETIQUE
          </Link>
          
          <div className="hidden lg:flex items-center gap-12">
            <Link href="/products" className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-900 hover:opacity-70 transition-opacity">
              Collections
            </Link>
            <Link href="/maison" className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-900 hover:opacity-70 transition-opacity">
              Maison
            </Link>
            <Link href="/services" className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-900 hover:opacity-70 transition-opacity">
              Services
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-neutral-900 hover:opacity-70 transition-opacity"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-neutral-900 hover:opacity-70 transition-opacity">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button className="text-neutral-900 hover:opacity-70 transition-opacity relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
          </div>

          {/* Mobile Icons */}
          <div className="flex lg:hidden items-center gap-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-neutral-900 hover:opacity-70 transition-opacity"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-neutral-900 hover:opacity-70 transition-opacity relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 8 } : {}}
                className="h-0.5 bg-neutral-900 w-full"
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0 } : {}}
                className="h-0.5 bg-neutral-900 w-full"
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -8 } : {}}
                className="h-0.5 bg-neutral-900 w-full"
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-neutral-100"
          >
            <div className="flex flex-col gap-4 p-6">
              <Link href="/" className="text-sm font-medium uppercase tracking-wider py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/products" className="text-sm font-medium uppercase tracking-wider py-2" onClick={() => setIsMenuOpen(false)}>Collections</Link>
              <Link href="/maison" className="text-sm font-medium uppercase tracking-wider py-2" onClick={() => setIsMenuOpen(false)}>Maison</Link>
              <Link href="/services" className="text-sm font-medium uppercase tracking-wider py-2" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link href="/login" className="text-sm font-medium uppercase tracking-wider py-2" onClick={() => setIsMenuOpen(false)}>Account</Link>
            </div>
          </motion.div>
        )}
          </AnimatePresence>
      
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </motion.nav>
  );
}

