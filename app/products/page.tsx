'use client';

import { useState, useMemo } from 'react';
import Navigation from '../components/Navigation';
import ScrollFade from '../components/ScrollFade';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// All products with local images - removed duplicate nsofa (was product 18)
const allProducts = [
  // Page 1: chair1, sofa2, bed2, slide1, sofa4, wardrobe1, bed1, chair2
  { id: '1', name: 'Nordic Fabric Sofa', category: 'Seating', price: 3950.00, image: '/images/products/nsofa.jpg' },
  { id: '2', name: 'Windsor Armchair', category: 'Seating', price: 1850.00, image: '/images/products/chair1.jpg' },
  { id: '3', name: 'Milano Sectional', category: 'Seating', price: 5200.00, image: '/images/products/sofa2.jpg' },
  { id: '4', name: 'Royal Platform Bed', category: 'Bedroom', price: 3800.00, image: '/images/products/bed2.jpg' },
  { id: '5', name: 'Kids Play Slide', category: 'Kids', price: 980.00, image: '/images/products/slide1.jpg' },
  { id: '6', name: 'Curved Modular Sofa', category: 'Seating', price: 6800.00, image: '/images/products/sofa4.jpg' },
  { id: '7', name: 'Grand Oak Wardrobe', category: 'Storage', price: 4200.00, image: '/images/products/wardrobe1.jpg' },
  { id: '8', name: 'Canopy King Bed', category: 'Bedroom', price: 5500.00, image: '/images/products/bed1.jpg' },
  // Page 2: chair2, bed3, pool1, sofa3, sofa5, table1, table2, table3
  { id: '9', name: 'Sculptural Lounge Chair', category: 'Seating', price: 2100.00, image: '/images/products/chair2.jpg' },
  { id: '10', name: 'Minimalist Bed Frame', category: 'Bedroom', price: 2900.00, image: '/images/products/bed3.jpg' },
  { id: '11', name: 'Infinity Pool Lounger', category: 'Outdoor', price: 3400.00, image: '/images/products/pool1.jpg' },
  { id: '12', name: 'Cloud Comfort Sofa', category: 'Seating', price: 4800.00, image: '/images/products/sofa3.jpg' },
  { id: '13', name: 'L-Shape Corner Sofa', category: 'Seating', price: 7200.00, image: '/images/products/sofa5.jpg' },
  { id: '14', name: 'Marble Dining Table', category: 'Tables', price: 3600.00, image: '/images/products/table1.jpg' },
  { id: '15', name: 'Round Coffee Table', category: 'Tables', price: 1450.00, image: '/images/products/table2.jpg' },
  { id: '16', name: 'Executive Desk', category: 'Tables', price: 2800.00, image: '/images/products/table3.jpg' },
  // Page 3: table4
  { id: '17', name: 'Console Table', category: 'Tables', price: 1900.00, image: '/images/products/table4.jpg' },
];

const categories = ['All', 'Seating', 'Tables', 'Bedroom', 'Storage', 'Outdoor', 'Kids'];
const sortOptions = [
  { label: 'Recommended', value: 'recommended' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
];

const PRODUCTS_PER_PAGE = 8;

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('recommended');
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts];
    
    if (activeCategory !== 'All') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }
    
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
    }
    
    return filtered;
  }, [activeCategory, sortBy, priceRange]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  // Reset to page 1 when filters change
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-[#f5f3f0]">
      <Navigation />
      
      {/* Spacer for fixed nav */}
      <div className="h-28"></div>

      {/* Content wrapper with inline padding for guaranteed spacing */}
      <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          
          {/* Filters Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-neutral-200">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-4 md:gap-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`text-sm transition-all ${
                    activeCategory === cat 
                      ? 'text-neutral-900' 
                      : 'text-neutral-400 hover:text-neutral-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            {/* Filter Button */}
            <button
              onClick={() => setFilterOpen(true)}
              className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span>Filters</span>
            </button>
          </div>

          {/* Results count */}
          <p className="text-sm text-neutral-500 mb-6">
            Showing {paginatedProducts.length} of {filteredProducts.length} products
          </p>

          {/* Products Grid - 4 columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {paginatedProducts.map((product, index) => (
              <ScrollFade key={product.id} delay={index * 0.05}>
                <Link href={`/products/${product.id}`} className="group block">
                  {/* Product Card */}
                  <div className="relative aspect-square bg-[#e8e6e3] rounded-lg overflow-hidden mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  {/* Product Info */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm text-neutral-700">
                      {product.name}
                    </h3>
                    <p className="text-sm text-neutral-900">
                      €{product.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              </ScrollFade>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-neutral-400 mb-4">No products found</p>
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setPriceRange([0, 10000]);
                  setCurrentPage(1);
                }}
                className="text-sm text-neutral-900 hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-16 pt-12 border-t border-neutral-200">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  currentPage === 1
                    ? 'text-neutral-300 cursor-not-allowed'
                    : 'text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded-full text-sm transition-colors ${
                    currentPage === page
                      ? 'bg-neutral-900 text-white'
                      : 'text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  currentPage === totalPages
                    ? 'text-neutral-300 cursor-not-allowed'
                    : 'text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Bottom padding */}
      <div className="h-9"></div>

      {/* Filter Sidebar */}
      <AnimatePresence>
        {filterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFilterOpen(false)}
              className="fixed inset-0 bg-black/30 z-[60]"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-white z-[70] shadow-xl"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-neutral-100">
                  <h2 className="text-sm font-medium">Filters</h2>
                  <button onClick={() => setFilterOpen(false)} className="p-2 hover:bg-neutral-100 rounded-full">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-8">
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-neutral-500 mb-4">Sort by</h3>
                    <div className="space-y-3">
                      {sortOptions.map((option) => (
                        <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="sort"
                            checked={sortBy === option.value}
                            onChange={() => setSortBy(option.value)}
                            className="w-4 h-4 accent-neutral-900"
                          />
                          <span className="text-sm text-neutral-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-neutral-500 mb-4">Price</h3>
                    <input
                      type="range"
                      min="0"
                      max="10000"
                      step="500"
                      value={priceRange[1]}
                      onChange={(e) => {
                        setPriceRange([0, parseInt(e.target.value)]);
                        setCurrentPage(1);
                      }}
                      className="w-full accent-neutral-900"
                    />
                    <div className="flex justify-between mt-2 text-sm text-neutral-500">
                      <span>€0</span>
                      <span>€{priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-t border-neutral-100">
                  <button
                    onClick={() => setFilterOpen(false)}
                    className="w-full py-3 bg-neutral-900 text-white text-sm hover:bg-neutral-800 transition-colors rounded-full"
                  >
                    Apply filters
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
