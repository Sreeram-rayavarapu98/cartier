'use client';

import { use, useState } from 'react';
import Navigation from '../../components/Navigation';
import ModelViewerWithLoader from '../../components/ModelViewerWithLoader';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Sample product data - replace with your actual data source
const productData: Record<string, any> = {
  '1': {
    id: '1',
    name: 'Elegant Sofa',
    category: 'Seating',
    price: '$4,500',
    description: 'A masterpiece of comfort and elegance, this sofa combines timeless design with modern luxury. Crafted with the finest materials and attention to detail.',
    dimensions: 'Width: 240cm | Depth: 95cm | Height: 85cm',
    material: 'Premium velvet, solid oak frame',
    modelPath: '/models/nsofa.glb',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
    ],
  },
  '2': {
    id: '2',
    name: 'Modern Chair',
    category: 'Seating',
    price: '$1,200',
    description: 'Contemporary design meets classic comfort. This chair is perfect for any modern living space.',
    dimensions: 'Width: 60cm | Depth: 65cm | Height: 80cm',
    material: 'Leather, chrome base',
    modelPath: '/models/chair2.glb',
    images: [
      'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1200&q=80',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200&q=80',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1200&q=80',
    ],
  },
  '3': {
    id: '3',
    name: 'Luxury Table',
    category: 'Tables',
    price: '$3,800',
    description: 'An exquisite centerpiece that commands attention. This table is a statement of refined taste.',
    dimensions: 'Width: 180cm | Depth: 90cm | Height: 75cm',
    material: 'Marble top, brass legs',
    modelPath: '/models/table.glb',
    images: [
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=1200&q=80',
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80',
      'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=1200&q=80',
    ],
  },
};

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = productData[id] || productData['1'];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-24 sm:pt-32 pb-12 sm:pb-24 px-4 sm:px-6 lg:px-16">
        <div className="max-w-[1920px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <a href="/products" className="text-sm text-neutral-600 hover:text-[#8B0000] transition-colors uppercase tracking-wider">
              ← Back to Collections
            </a>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 mb-12 sm:mb-24">
            {/* 3D Model Viewer */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-square w-full"
            >
              <div className="relative w-full h-full bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-lg overflow-hidden shadow-2xl">
                <ModelViewerWithLoader modelPath={product.modelPath} />
              </div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-center"
            >
              <p className="text-[10px] sm:text-xs text-neutral-500 uppercase tracking-[0.2em] font-medium mb-4">
                {product.category}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-serif font-bold mb-6 sm:mb-8 text-neutral-900 leading-[0.9]">
                {product.name}
              </h1>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-neutral-900 mb-8 sm:mb-12">
                {product.price}
              </p>
              
              <div className="space-y-8 mb-12">
                <p className="text-lg text-neutral-700 leading-relaxed font-light">
                  {product.description}
                </p>
                
                <div className="space-y-6 pt-8 border-t border-neutral-200">
                  <div>
                    <h3 className="text-xs font-medium text-neutral-900 mb-2 uppercase tracking-[0.15em]">Dimensions</h3>
                    <p className="text-base text-neutral-600 font-light">{product.dimensions}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-medium text-neutral-900 mb-2 uppercase tracking-[0.15em]">Materials</h3>
                    <p className="text-base text-neutral-600 font-light">{product.material}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <button className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-[#8B0000] text-white text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#A00000] transition-all duration-300 border-2 border-[#8B0000]">
                  Add to Cart
                </button>
                <button className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 border-2 border-neutral-900 text-neutral-900 text-xs font-medium tracking-[0.2em] uppercase hover:bg-neutral-900 hover:text-white transition-all duration-300">
                  Request Quote
                </button>
              </div>
            </motion.div>
          </div>

          {/* Image Gallery Section */}
          {product.images && product.images.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-24"
            >
              <h2 className="text-3xl font-serif font-bold mb-8 text-neutral-900">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {product.images.map((img: string, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="relative aspect-square rounded-lg overflow-hidden border border-[#00000014] cursor-pointer group"
                    onClick={() => setSelectedImageIndex(idx)}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} - Image ${idx + 1}`}
                      fill
                      className="object-cover color-graded group-hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Additional Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-neutral-200"
          >
            <div>
              <h3 className="text-xs font-medium text-neutral-900 mb-3 uppercase tracking-[0.15em]">
                Free Shipping
              </h3>
              <p className="text-sm text-neutral-600 font-light leading-relaxed">
                Complimentary delivery on all orders worldwide
              </p>
            </div>
            <div>
              <h3 className="text-xs font-medium text-neutral-900 mb-3 uppercase tracking-[0.15em]">
                Lifetime Warranty
              </h3>
              <p className="text-sm text-neutral-600 font-light leading-relaxed">
                Quality guaranteed for generations to come
              </p>
            </div>
            <div>
              <h3 className="text-xs font-medium text-neutral-900 mb-3 uppercase tracking-[0.15em]">
                Expert Assembly
              </h3>
              <p className="text-sm text-neutral-600 font-light leading-relaxed">
                Professional white-glove setup service available
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

