'use client';

import { use, useState, useEffect } from 'react';
import Navigation from '../../components/Navigation';
import ProductViewer from '../../components/ProductViewer';
import ScrollFade from '../../components/ScrollFade';
import HoverScaleImage from '../../components/HoverScaleImage';
import Button from '../../components/Button';
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
  '4': {
    id: '4',
    name: 'Bouclé Armchair',
    category: 'Seating',
    price: '$2,800',
    description: 'Soft, textured bouclé fabric wraps around a sculptural form. This armchair brings warmth and tactile luxury to any space.',
    dimensions: 'Width: 85cm | Depth: 80cm | Height: 75cm',
    material: 'Bouclé fabric, solid walnut legs',
    modelPath: '/models/blue1.glb', // Add your 3D model here
    images: [
      'https://images.unsplash.com/photo-1549497538-303791108f95?w=1200&q=80',
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200&q=80',
    ],
  },
  '5': {
    id: '5',
    name: 'Brass Pendant Light',
    category: 'Lighting',
    price: '$1,800',
    description: 'Hand-polished brass with precision engineering. This pendant light showcases metalwork at its finest.',
    dimensions: 'Diameter: 45cm | Height: 35cm | Cable: 150cm',
    material: 'Polished brass, frosted glass',
    modelPath: '/models/blue2.glb', // Add your 3D model here
    images: [
      'https://images.unsplash.com/photo-1551298370-9d3d53f87fba?w=1200&q=80',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1200&q=80',
    ],
  },
  '6': {
    id: '6',
    name: 'Coastal Lounge Chair',
    category: 'Seating',
    price: '$3,200',
    description: 'Inspired by Mediterranean villas. Light teak wood and natural linen create effortless seaside elegance.',
    dimensions: 'Width: 75cm | Depth: 85cm | Height: 95cm',
    material: 'Teak wood, Belgian linen',
    modelPath: '/models/blue3.glb', // Add your 3D model here
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
    ],
  },
  '7': {
    id: '7',
    name: 'Industrial Coffee Table',
    category: 'Tables',
    price: '$2,400',
    description: 'Raw steel meets reclaimed oak. A statement piece that brings character and soul to modern loft spaces.',
    dimensions: 'Width: 120cm | Depth: 70cm | Height: 45cm',
    material: 'Reclaimed oak, raw steel frame',
    modelPath: '/models/blue4.glb', // Add your 3D model here
    images: [
      'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1200&q=80',
      'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=1200&q=80',
    ],
  },
  '8': {
    id: '8',
    name: 'Emerald Velvet Sofa',
    category: 'Seating',
    price: '$6,500',
    description: 'Deep forest green velvet creates opulent drama. Gold-tipped legs add the perfect accent.',
    dimensions: 'Width: 220cm | Depth: 90cm | Height: 80cm',
    material: 'Velvet upholstery, brass legs',
    modelPath: '/models/boi1.glb', // Add your 3D model here
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80',
    ],
  },
  '9': {
    id: '9',
    name: 'Curved Leather Chair',
    category: 'Seating',
    price: '$3,900',
    description: 'Organic curves and flowing lines inspired by mid-century masters, reimagined for contemporary spaces.',
    dimensions: 'Width: 70cm | Depth: 75cm | Height: 85cm',
    material: 'Full-grain leather, chrome base',
    modelPath: '/models/boi2.glb', // Add your 3D model here
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200&q=80',
    ],
  },
  '10': {
    id: '10',
    name: 'Terrazzo Console',
    category: 'Tables',
    price: '$4,200',
    description: 'Italian terrazzo craftsmanship in furniture form. Colorful chips embedded in polished concrete create living art.',
    dimensions: 'Width: 150cm | Depth: 40cm | Height: 85cm',
    material: 'Terrazzo top, powder-coated steel',
    modelPath: '/models/boi3.glb', // Add your 3D model here
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80',
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=1200&q=80',
    ],
  },
  '11': {
    id: '11',
    name: 'Executive Desk',
    category: 'Storage',
    price: '$5,800',
    description: 'Rich cognac leather and walnut wood create the perfect home office. Timeless sophistication for the discerning professional.',
    dimensions: 'Width: 180cm | Depth: 80cm | Height: 75cm',
    material: 'Walnut wood, leather inlay, brass handles',
    modelPath: '/models/boi4.glb', // Add your 3D model here
    images: [
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200&q=80',
      'https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200&q=80',
    ],
  },
  '12': {
    id: '12',
    name: 'Midnight Chaise',
    category: 'Seating',
    price: '$4,100',
    description: 'Deep navy velvet evokes starlit sophistication. Perfect for creating intimate, dramatic reading nooks.',
    dimensions: 'Width: 170cm | Depth: 75cm | Height: 85cm',
    material: 'Navy velvet, gold-finished legs',
    modelPath: '/models/chaise.glb', // Add your 3D model here
    images: [
      'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?w=1200&q=80',
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200&q=80',
    ],
  },
  '13': {
    id: '13',
    name: 'Wabi-Sabi Bench',
    category: 'Accessories',
    price: '$2,600',
    description: 'Embracing imperfection and natural beauty. Handcrafted with organic textures celebrating the art of impermanence.',
    dimensions: 'Width: 140cm | Depth: 40cm | Height: 45cm',
    material: 'Live-edge oak, natural stone',
    modelPath: '/models/bench.glb',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1200&q=80',
    ],
  },
  '14': {
    id: '14',
    name: 'Emerald Velvet Armchair',
    category: 'Seating',
    price: '$3,200',
    description: 'Deep forest greens and rich emerald tones bring nature indoors. Velvet upholstery and gold accents create opulent drama.',
    dimensions: 'Width: 80cm | Depth: 85cm | Height: 90cm',
    material: 'Emerald velvet, brass legs',
    modelPath: '/models/emerald-chair.glb',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200&q=80',
    ],
  },
  '15': {
    id: '15',
    name: 'Sculptural Lounge Chair',
    category: 'Seating',
    price: '$4,500',
    description: 'Organic curves and flowing lines inspired by mid-century masters, reimagined for contemporary spaces.',
    dimensions: 'Width: 90cm | Depth: 95cm | Height: 85cm',
    material: 'Molded fiberglass, leather cushion',
    modelPath: '/models/sculptural-chair.glb',
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200&q=80',
    ],
  },
  '16': {
    id: '16',
    name: 'Terrazzo Side Table',
    category: 'Tables',
    price: '$1,800',
    description: 'Italian terrazzo craftsmanship meets modern furniture design. Colorful chips embedded in polished concrete create living art.',
    dimensions: 'Diameter: 50cm | Height: 55cm',
    material: 'Terrazzo, powder-coated steel base',
    modelPath: '/models/terrazzo-table.glb',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80',
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=1200&q=80',
    ],
  },
  '17': {
    id: '17',
    name: 'Library Bookshelf',
    category: 'Storage',
    price: '$6,200',
    description: 'Rich cognac leather and walnut wood create the perfect home library. Timeless sophistication for the discerning collector.',
    dimensions: 'Width: 200cm | Depth: 45cm | Height: 220cm',
    material: 'Walnut wood, leather trim, brass accents',
    modelPath: '/models/bookshelf.glb',
    images: [
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200&q=80',
      'https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200&q=80',
    ],
  },
  '18': {
    id: '18',
    name: 'Midnight Blue Sofa',
    category: 'Seating',
    price: '$5,900',
    description: 'Deep navy velvet and midnight blue tones evoke starlit sophistication. Perfect for creating intimate, dramatic spaces.',
    dimensions: 'Width: 230cm | Depth: 95cm | Height: 85cm',
    material: 'Navy velvet, gold-finished legs',
    modelPath: '/models/midnight-sofa.glb',
    images: [
      'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?w=1200&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80',
    ],
  },
  '19': {
    id: '19',
    name: 'Zen Garden Stool',
    category: 'Accessories',
    price: '$890',
    description: 'Embracing imperfection and natural beauty. Handcrafted ceramic with organic textures celebrating the art of impermanence.',
    dimensions: 'Diameter: 35cm | Height: 45cm',
    material: 'Hand-glazed ceramic',
    modelPath: '/models/zen-stool.glb',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1200&q=80',
    ],
  },
};

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = productData[id] || productData['1'];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Example design states - customize based on your product
  const designStates = [
    {
      name: 'Closed',
      modelPath: product.modelPath,
      animation: { type: 'open' as const, duration: 2000 },
    },
    {
      name: 'Open',
      modelPath: product.modelPath, // Use same model or different path
      animation: { type: 'expand' as const, duration: 2000 },
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-24 sm:pt-32 pb-12 sm:pb-24 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <ScrollFade>
            <div className="mb-12">
              <a href="/products" className="label-sm text-neutral-600 hover:opacity-70 transition-opacity duration-300">
                ← Back to Collections
              </a>
            </div>
          </ScrollFade>

          {/* Mobile: Full-width viewer at top */}
          {isMobile && (
            <div className="mb-12 -mx-4 sm:-mx-6 lg:mx-0">
              <ProductViewer 
                modelPath={product.modelPath}
                designStates={designStates}
                isMobile={true}
                className="rounded-none"
              />
            </div>
          )}

          <div className={`grid grid-cols-1 ${isMobile ? '' : 'lg:grid-cols-2'} gap-8 sm:gap-12 lg:gap-24 mb-12 sm:mb-24`}>
            {/* Desktop: 3D Model Viewer */}
            {!isMobile && (
              <ScrollFade direction="left" delay={0.1}>
                <div className="w-full">
                  <ProductViewer 
                    modelPath={product.modelPath}
                    designStates={designStates}
                    isMobile={false}
                    className="shadow-2xl"
                  />
                </div>
              </ScrollFade>
            )}

            {/* Product Details */}
            <ScrollFade direction={isMobile ? 'up' : 'right'} delay={isMobile ? 0.1 : 0.2}>
              <div className="flex flex-col justify-center">
              <p className="label-xs text-neutral-500 mb-6">
                {product.category}
              </p>
              <h1 className="heading-hero mb-8 text-neutral-900">
                {product.name}
              </h1>
              <p className="heading-lg font-light text-neutral-900 mb-12">
                {product.price}
              </p>
              
              <div className="space-y-8 mb-12">
                <p className="body-lg text-neutral-700">
                  {product.description}
                </p>
                
                <div className="space-y-6 pt-8" style={{ borderTop: '1px solid var(--cartier-border)' }}>
                  <div>
                    <h3 className="label-sm text-neutral-900 mb-2">Dimensions</h3>
                    <p className="body-md text-neutral-600">{product.dimensions}</p>
                  </div>
                  <div>
                    <h3 className="label-sm text-neutral-900 mb-2">Materials</h3>
                    <p className="body-md text-neutral-600">{product.material}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Button variant="primary" className="w-full sm:w-auto min-h-[48px]">
                  Add to Cart
                </Button>
                <Button variant="secondary" className="w-full sm:w-auto min-h-[48px]">
                  Request Quote
                </Button>
              </div>
              </div>
            </ScrollFade>
          </div>

          {/* Image Gallery Section */}
          {product.images && product.images.length > 0 && (
            <ScrollFade delay={0.3}>
              <section className="mb-24">
                <h2 className="text-3xl font-serif font-bold mb-8 text-neutral-900">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {product.images.map((img: string, idx: number) => (
                    <ScrollFade key={idx} delay={0.4 + idx * 0.1}>
                      <div
                        className="relative aspect-square rounded-lg overflow-hidden border border-[#00000014] cursor-pointer"
                        onClick={() => setSelectedImageIndex(idx)}
                      >
                        <HoverScaleImage
                          src={img}
                          alt={`${product.name} - Image ${idx + 1}`}
                          className="w-full h-full"
                          fill
                          scale={1.05}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                        />
                      </div>
                    </ScrollFade>
                  ))}
                </div>
              </section>
            </ScrollFade>
          )}

          {/* Additional Info Section */}
          <ScrollFade delay={0.5}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-neutral-200">
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
          </div>
          </ScrollFade>
        </div>
      </div>
    </main>
  );
}

