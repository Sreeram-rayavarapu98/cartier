'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductFiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  category: string[];
  priceRange: [number, number];
  material: string[];
  color: string[];
}

const categories = ['Seating', 'Tables', 'Storage', 'Lighting', 'Accessories', 'Outdoor'];
const materials = ['Leather', 'Wood', 'Metal', 'Fabric', 'Marble', 'Glass', 'Stone'];
const colors = ['Black', 'White', 'Brown', 'Gray', 'Beige', 'Gold', 'Green', 'Blue'];

export default function ProductFilters({ onFilterChange }: ProductFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    category: [],
    priceRange: [0, 10000],
    material: [],
    color: [],
  });

  const toggleCategory = (cat: string) => {
    const newCategories = filters.category.includes(cat)
      ? filters.category.filter((c) => c !== cat)
      : [...filters.category, cat];
    const newFilters = { ...filters, category: newCategories };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const toggleMaterial = (mat: string) => {
    const newMaterials = filters.material.includes(mat)
      ? filters.material.filter((m) => m !== mat)
      : [...filters.material, mat];
    const newFilters = { ...filters, material: newMaterials };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const toggleColor = (col: string) => {
    const newColors = filters.color.includes(col)
      ? filters.color.filter((c) => c !== col)
      : [...filters.color, col];
    const newFilters = { ...filters, color: newColors };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters: FilterState = {
      category: [],
      priceRange: [0, 10000],
      material: [],
      color: [],
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-sm uppercase tracking-wider text-neutral-900 hover:opacity-70 transition-opacity"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Filters
        </button>
        {(filters.category.length > 0 || filters.material.length > 0 || filters.color.length > 0) && (
          <button
            onClick={clearFilters}
            className="text-xs uppercase tracking-wider text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            Clear All
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-neutral-200 pt-6 space-y-8"
          >
            {/* Categories */}
            <div>
              <h3 className="text-xs font-medium text-neutral-900 mb-4 uppercase tracking-wider">Category</h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => toggleCategory(cat)}
                    className={`px-4 py-2 text-xs uppercase tracking-wider border transition-all ${
                      filters.category.includes(cat)
                        ? 'border-neutral-900 bg-neutral-900 text-white'
                        : 'border-neutral-300 text-neutral-700 hover:border-neutral-900'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Materials */}
            <div>
              <h3 className="text-xs font-medium text-neutral-900 mb-4 uppercase tracking-wider">Material</h3>
              <div className="flex flex-wrap gap-3">
                {materials.map((mat) => (
                  <button
                    key={mat}
                    onClick={() => toggleMaterial(mat)}
                    className={`px-4 py-2 text-xs uppercase tracking-wider border transition-all ${
                      filters.material.includes(mat)
                        ? 'border-neutral-900 bg-neutral-900 text-white'
                        : 'border-neutral-300 text-neutral-700 hover:border-neutral-900'
                    }`}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div>
              <h3 className="text-xs font-medium text-neutral-900 mb-4 uppercase tracking-wider">Color</h3>
              <div className="flex flex-wrap gap-3">
                {colors.map((col) => (
                  <button
                    key={col}
                    onClick={() => toggleColor(col)}
                    className={`px-4 py-2 text-xs uppercase tracking-wider border transition-all ${
                      filters.color.includes(col)
                        ? 'border-neutral-900 bg-neutral-900 text-white'
                        : 'border-neutral-300 text-neutral-700 hover:border-neutral-900'
                    }`}
                  >
                    {col}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

