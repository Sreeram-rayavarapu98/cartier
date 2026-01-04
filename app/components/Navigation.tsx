'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchOverlay from './SearchOverlay';

const navItems = [
  { href: '/products', label: 'Collections' },
  { href: '/maison', label: 'Maison' },
  { href: '/services', label: 'Services' },
];

const collectionQuickLinks = [
  { href: '/collections/ethereal', label: 'Ethereal' },
  { href: '/collections/obsidian-gold', label: 'Obsidian & Gold' },
  { href: '/collections/riviera', label: 'Riviera Outdoor' },
  { href: '/collections/nordic', label: 'Nordic Heritage' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setHoveredMenu(null);
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
          : 'bg-gradient-to-b from-black/40 via-black/20 to-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo with Cursive C */}
          <Link href="/" className="flex items-baseline transition-opacity duration-300 hover:opacity-70">
            <span 
              className={`text-3xl transition-colors duration-500 ${isScrolled ? 'text-neutral-900' : 'text-white'}`}
              style={{ fontFamily: "'Pinyon Script', 'Dancing Script', cursive", marginRight: '-2px' }}
            >
              C
            </span>
            <span 
              className={`text-lg tracking-[0.15em] transition-colors duration-500 ${isScrolled ? 'text-neutral-900' : 'text-white'}`}
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
            >
              ASAVÉRA
            </span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => setHoveredMenu(item.label === 'Collections' ? 'collections' : null)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link
                  href={item.href}
                  className={`label-sm transition-all duration-500 hover:opacity-70 ${isScrolled ? 'text-neutral-900' : 'text-white'}`}
                >
                  <span className="relative inline-block">
                    {item.label}
                    <span className={`absolute left-0 -bottom-1 h-px w-full origin-left scale-x-0 transition-transform duration-400 ease-in-out group-hover:scale-x-100 ${isScrolled ? 'bg-neutral-900' : 'bg-white'}`} />
                  </span>
                </Link>

                <AnimatePresence>
                  {hoveredMenu === 'collections' && item.label === 'Collections' && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-0 mt-4 w-64 bg-white/95 backdrop-blur-lg shadow-xl border border-neutral-100 rounded-2xl p-5"
                    >
                      <div className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-3">Featured</div>
                      <div className="flex flex-col gap-2">
                        {collectionQuickLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm text-neutral-900 hover:text-neutral-700 transition-colors"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <div className={`flex items-center gap-2 px-2 py-1 rounded-full shadow-lg transition-all duration-500 ${
              isScrolled 
                ? 'bg-white/80 backdrop-blur-sm border border-neutral-100' 
                : 'bg-white/90 backdrop-blur-sm'
            }`}>
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="nav-icon-link group"
              >
                <span className="nav-icon-link-icon">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
                <span className="nav-icon-link-title">Search</span>
              </button>
              <Link href="/login" className="nav-icon-link group">
                <span className="nav-icon-link-icon">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <span className="nav-icon-link-title">Profile</span>
              </Link>
              <Link href="/bag" className="nav-icon-link group relative">
                <span className="nav-icon-link-icon">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </span>
                <span className="nav-icon-link-title">Cart</span>
              </Link>
            </div>
          </div>

          {/* Mobile Icons */}
          <div className="flex lg:hidden items-center gap-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className={`hover:opacity-70 transition-all duration-500 ${isScrolled ? 'text-neutral-900' : 'text-white'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link href="/bag" className={`hover:opacity-70 transition-all duration-500 relative ${isScrolled ? 'text-neutral-900' : 'text-white'}`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 8 } : {}}
                className={`h-0.5 w-full transition-colors duration-500 ${isScrolled ? 'bg-neutral-900' : 'bg-white'}`}
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0 } : {}}
                className={`h-0.5 w-full transition-colors duration-500 ${isScrolled ? 'bg-neutral-900' : 'bg-white'}`}
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -8 } : {}}
                className={`h-0.5 w-full transition-colors duration-500 ${isScrolled ? 'bg-neutral-900' : 'bg-white'}`}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-black/30 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#f7f5f2] min-h-screen pt-24"
          >
            <div className="px-6 flex flex-col gap-4">
              <Link href="/" className="text-lg font-medium uppercase tracking-[0.2em] py-3 border-b border-neutral-200" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/products" className="text-lg font-medium uppercase tracking-[0.2em] py-3 border-b border-neutral-200" onClick={() => setIsMenuOpen(false)}>Collections</Link>
              <Link href="/maison" className="text-lg font-medium uppercase tracking-[0.2em] py-3 border-b border-neutral-200" onClick={() => setIsMenuOpen(false)}>Maison</Link>
              <Link href="/services" className="text-lg font-medium uppercase tracking-[0.2em] py-3 border-b border-neutral-200" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link href="/login" className="text-lg font-medium uppercase tracking-[0.2em] py-3 border-b border-neutral-200" onClick={() => setIsMenuOpen(false)}>Account</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </motion.nav>
  );
}
