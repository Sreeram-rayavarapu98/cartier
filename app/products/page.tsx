'use client';

import { useState, useMemo } from 'react';
import Navigation from '../components/Navigation';
import ProductCard from '../components/ProductCard';
import ProductFilters, { FilterState } from '../components/ProductFilters';
import ScrollFade from '../components/ScrollFade';
import Image from 'next/image';

// Sample products with images - replace with your actual data
const allProducts = [
  { id: '1', name: 'Elegant Sofa', category: 'Seating', price: '$4,500', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80', material: 'Leather', color: 'Brown' },
  { id: '2', name: 'Modern Chair', category: 'Seating', price: '$1,200', image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80', material: 'Metal', color: 'Black' },
  { id: '3', name: 'Luxury Table', category: 'Tables', price: '$3,800', image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=600&q=80', material: 'Marble', color: 'White' },
  { id: '4', name: 'Classic Armchair', category: 'Seating', price: '$2,100', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80', material: 'Fabric', color: 'Beige' },
  { id: '5', name: 'Dining Table', category: 'Tables', price: '$5,200', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&q=80', material: 'Wood', color: 'Brown' },
  { id: '6', name: 'Sideboard', category: 'Storage', price: '$3,500', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80', material: 'Wood', color: 'Brown' },
  { id: '7', name: 'Coffee Table', category: 'Tables', price: '$1,800', image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&q=80', material: 'Glass', color: 'White' },
  { id: '8', name: 'Lounge Chair', category: 'Seating', price: '$2,800', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80', material: 'Leather', color: 'Black' },
  { id: '9', name: 'Console Table', category: 'Tables', price: '$2,400', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80', material: 'Wood', color: 'Brown' },
];

export default function ProductsPage() {
  const [filters, setFilters] = useState<FilterState>({
    category: [],
    priceRange: [0, 10000],
    material: [],
    color: [],
  });

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      if (filters.category.length > 0 && !filters.category.includes(product.category)) {
        return false;
      }
      if (filters.material.length > 0 && !filters.material.includes(product.material)) {
        return false;
      }
      if (filters.color.length > 0 && !filters.color.includes(product.color)) {
        return false;
      }
      return true;
    });
  }, [filters]);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Banner Section */}
      <section className="relative pt-32 pb-24 px-6 lg:px-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80"
            alt="Collections"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 max-w-[1920px] mx-auto text-center">
          <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-serif font-bold mb-6 text-white leading-[0.9]">
            ALL COLLECTIONS
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light tracking-wide">
            Plunge into the magical world of LUXE and discover our signature collections, 
            unique pieces, and one-of-a-kind creations.
          </p>
        </div>
      </section>
      
      <section className="py-24 px-6 lg:px-16 bg-white">
        <div className="max-w-[1920px] mx-auto">
          <ProductFilters onFilterChange={setFilters} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {filteredProducts.map((product, index) => (
              <ScrollFade key={product.id} delay={index * 0.1}>
                <ProductCard {...product} index={index} />
              </ScrollFade>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-neutral-600 mb-4">No products match your filters</p>
              <button
                onClick={() => setFilters({ category: [], priceRange: [0, 10000], material: [], color: [] })}
                className="text-sm uppercase tracking-wider text-neutral-900 hover:opacity-70 transition-opacity"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

