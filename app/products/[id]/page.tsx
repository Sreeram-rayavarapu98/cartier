'use client';

import { use, useState, useEffect } from 'react';
import Navigation from '../../components/Navigation';
import ProductViewer from '../../components/ProductViewer';
import HoverScaleImage from '../../components/HoverScaleImage';
import Button from '../../components/Button';

// All product data with local images and 3D models - removed duplicate (was product 18)
const productData: Record<string, any> = {
  '1': {
    id: '1',
    name: 'Nordic Fabric Sofa',
    category: 'Seating',
    price: '€3,950',
    description: 'Scandinavian-inspired design meets exceptional comfort. Clean lines, tapered legs, and premium fabric upholstery define this timeless piece. Perfect for modern living spaces that value both aesthetics and comfort.',
    dimensions: 'Width: 220cm | Depth: 90cm | Height: 80cm',
    material: 'Nordic wool blend, solid beech legs',
    modelPath: '/models/nsofa.glb',
    images: [
      '/images/products/nsofa.jpg',
    ],
  },
  '2': {
    id: '2',
    name: 'Windsor Armchair',
    category: 'Seating',
    price: '€1,850',
    description: 'A classic Windsor-inspired armchair reimagined for contemporary spaces. Features elegant spindle back design and ergonomic seating for hours of comfort.',
    dimensions: 'Width: 68cm | Depth: 72cm | Height: 95cm',
    material: 'Solid ash wood, natural finish',
    modelPath: '/models/chair1.glb',
    images: [
      '/images/products/chair1.jpg',
    ],
  },
  '3': {
    id: '3',
    name: 'Milano Sectional',
    category: 'Seating',
    price: '€5,200',
    description: 'The Milano Sectional brings Italian sophistication to your living room. Deep cushioning and modular design allow for versatile configurations.',
    dimensions: 'Width: 320cm | Depth: 180cm | Height: 78cm',
    material: 'Italian leather, metal legs',
    modelPath: '/models/sofa2.glb',
    images: [
      '/images/products/sofa2.jpg',
    ],
  },
  '4': {
    id: '4',
    name: 'Royal Platform Bed',
    category: 'Bedroom',
    price: '€3,800',
    description: 'Experience regal comfort with the Royal Platform Bed. Features a plush upholstered headboard and solid wood platform for superior support.',
    dimensions: 'Width: 180cm | Length: 210cm | Height: 120cm',
    material: 'Upholstered fabric, solid walnut base',
    modelPath: '/models/bed2.glb',
    images: [
      '/images/products/bed2.jpg',
    ],
  },
  '5': {
    id: '5',
    name: 'Kids Play Slide',
    category: 'Kids',
    price: '€980',
    description: 'Safe and fun indoor play slide for children. Rounded edges and sturdy construction ensure safe playtime adventures.',
    dimensions: 'Width: 80cm | Length: 150cm | Height: 100cm',
    material: 'High-density polyethylene, steel frame',
    modelPath: '/models/slide1.glb',
    images: [
      '/images/products/slide1.jpg',
    ],
  },
  '6': {
    id: '6',
    name: 'Curved Modular Sofa',
    category: 'Seating',
    price: '€6,800',
    description: 'A sculptural statement piece with flowing curves. This modular sofa can be configured to suit any living space, from intimate to expansive.',
    dimensions: 'Width: 380cm | Depth: 110cm | Height: 75cm',
    material: 'Bouclé fabric, foam cushioning',
    modelPath: '/models/sofa4.glb',
    images: [
      '/images/products/sofa4.jpg',
    ],
  },
  '7': {
    id: '7',
    name: 'Grand Oak Wardrobe',
    category: 'Storage',
    price: '€4,200',
    description: 'Magnificent storage solution crafted from solid oak. Features spacious compartments, soft-close drawers, and elegant brass hardware.',
    dimensions: 'Width: 200cm | Depth: 60cm | Height: 220cm',
    material: 'Solid oak, brass handles',
    modelPath: '/models/wardrobe1.glb',
    images: [
      '/images/products/wardrobe1.jpg',
    ],
  },
  '8': {
    id: '8',
    name: 'Canopy King Bed',
    category: 'Bedroom',
    price: '€5,500',
    description: 'Create a sanctuary with this stunning canopy bed. The elegant four-poster design adds drama and sophistication to your bedroom.',
    dimensions: 'Width: 200cm | Length: 220cm | Height: 240cm',
    material: 'Solid mahogany, linen canopy',
    modelPath: '/models/bed1.glb',
    images: [
      '/images/products/bed1.jpg',
    ],
  },
  '9': {
    id: '9',
    name: 'Sculptural Lounge Chair',
    category: 'Seating',
    price: '€2,100',
    description: 'An artistic statement that doubles as comfortable seating. The organic curves and premium materials make this chair a conversation starter.',
    dimensions: 'Width: 75cm | Depth: 80cm | Height: 85cm',
    material: 'Molded plywood, leather upholstery',
    modelPath: '/models/chair2.glb',
    images: [
      '/images/products/chair2.jpg',
    ],
  },
  '10': {
    id: '10',
    name: 'Minimalist Bed Frame',
    category: 'Bedroom',
    price: '€2,900',
    description: 'Clean lines and understated elegance define this minimalist bed frame. Perfect for modern bedrooms that celebrate simplicity.',
    dimensions: 'Width: 160cm | Length: 200cm | Height: 35cm',
    material: 'Solid oak, matte finish',
    modelPath: '/models/bed3.glb',
    images: [
      '/images/products/bed3.jpg',
    ],
  },
  '11': {
    id: '11',
    name: 'Infinity Pool Lounger',
    category: 'Outdoor',
    price: '€3,400',
    description: 'Luxurious poolside relaxation awaits with this weather-resistant lounger. Adjustable recline and quick-dry cushions for ultimate comfort.',
    dimensions: 'Width: 70cm | Length: 200cm | Height: 35cm',
    material: 'Teak wood, Sunbrella fabric',
    modelPath: '/models/pool1.glb',
    images: [
      '/images/products/pool1.jpg',
    ],
  },
  '12': {
    id: '12',
    name: 'Cloud Comfort Sofa',
    category: 'Seating',
    price: '€4,800',
    description: 'Sink into cloud-like comfort with this deeply cushioned sofa. Low profile design and plush filling create the ultimate relaxation experience.',
    dimensions: 'Width: 260cm | Depth: 100cm | Height: 70cm',
    material: 'Linen blend, down-filled cushions',
    modelPath: '/models/sofa3.glb',
    images: [
      '/images/products/sofa3.jpg',
    ],
  },
  '13': {
    id: '13',
    name: 'L-Shape Corner Sofa',
    category: 'Seating',
    price: '€7,200',
    description: 'Maximize your seating space with this spacious L-shaped sectional. Perfect for family gatherings and entertaining guests in style.',
    dimensions: 'Width: 350cm | Depth: 280cm | Height: 85cm',
    material: 'Performance fabric, high-resilience foam',
    modelPath: '/models/sofa5.glb',
    images: [
      '/images/products/sofa5.jpg',
    ],
  },
  '14': {
    id: '14',
    name: 'Marble Dining Table',
    category: 'Tables',
    price: '€3,600',
    description: 'A statement dining table featuring a stunning Carrara marble top. The sculptural base adds artistic flair to your dining room.',
    dimensions: 'Width: 200cm | Depth: 100cm | Height: 75cm',
    material: 'Carrara marble, brass base',
    modelPath: '/models/table1.glb',
    images: [
      '/images/products/table1.jpg',
    ],
  },
  '15': {
    id: '15',
    name: 'Round Coffee Table',
    category: 'Tables',
    price: '€1,450',
    description: 'Elegant round coffee table with a tempered glass top and sculptural base. The perfect centerpiece for modern living rooms.',
    dimensions: 'Diameter: 90cm | Height: 40cm',
    material: 'Tempered glass, brushed steel',
    modelPath: '/models/table2.glb',
    images: [
      '/images/products/table2.jpg',
    ],
  },
  '16': {
    id: '16',
    name: 'Executive Desk',
    category: 'Tables',
    price: '€2,800',
    description: 'Command your workspace with this executive desk. Generous surface area and integrated cable management for the modern professional.',
    dimensions: 'Width: 180cm | Depth: 80cm | Height: 75cm',
    material: 'Walnut veneer, powder-coated steel',
    modelPath: '/models/table3.glb',
    images: [
      '/images/products/table3.jpg',
    ],
  },
  '17': {
    id: '17',
    name: 'Console Table',
    category: 'Tables',
    price: '€1,900',
    description: 'Sleek console table perfect for entryways and hallways. The slim profile and elegant design make a welcoming first impression.',
    dimensions: 'Width: 140cm | Depth: 35cm | Height: 80cm',
    material: 'Solid oak, black steel legs',
    modelPath: '/models/table4.glb',
    images: [
      '/images/products/table4.jpg',
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

  const designStates = [
    {
      name: 'View',
      modelPath: product.modelPath,
      animation: { type: 'open' as const, duration: 2000 },
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Spacer for fixed navigation */}
      <div className="h-28"></div>

      {/* Main content wrapper with inline padding */}
      <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Back link */}
          <div className="mb-8">
            <a href="/products" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
              ← Back to Collections
            </a>
          </div>

          {/* Mobile: 3D Viewer at top */}
          {isMobile && (
            <div className="mb-8">
              <ProductViewer 
                modelPath={product.modelPath}
                designStates={designStates}
                isMobile={true}
                className="rounded-lg"
              />
            </div>
          )}

          {/* Product Layout - 2 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            {/* Left: 3D Model Viewer */}
            {!isMobile && (
              <div className="w-full">
                <ProductViewer 
                  modelPath={product.modelPath}
                  designStates={designStates}
                  isMobile={false}
                  className="rounded-lg h-[450px]"
                />
              </div>
            )}

            {/* Right: Product Details */}
            <div className="flex flex-col justify-center">
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-4">
                {product.category}
              </p>
              
              <h1 className="text-3xl md:text-4xl font-light text-neutral-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                {product.name}
              </h1>
              
              <p className="text-xl text-neutral-900 mb-6">
                {product.price}
              </p>
              
              <p className="text-neutral-600 leading-relaxed mb-8">
                {product.description}
              </p>
              
              {/* Specs */}
              <div className="space-y-4 mb-8 py-6 border-t border-neutral-100">
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-neutral-900 mb-1">Dimensions</h3>
                  <p className="text-sm text-neutral-600">{product.dimensions}</p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-neutral-900 mb-1">Materials</h3>
                  <p className="text-sm text-neutral-600">{product.material}</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <Button variant="primary" className="flex-1 lg:flex-none">
                  Add to Cart
                </Button>
                <Button variant="secondary" className="flex-1 lg:flex-none">
                  Request Quote
                </Button>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          {product.images && product.images.length > 0 && (
            <section className="mb-16">
              <h2 className="text-xl font-light text-neutral-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {product.images.map((img: string, idx: number) => (
                  <div
                    key={idx}
                    className="relative aspect-square rounded-lg overflow-hidden bg-neutral-100 cursor-pointer"
                    onClick={() => setSelectedImageIndex(idx)}
                  >
                    <HoverScaleImage
                      src={img}
                      alt={`${product.name} - Image ${idx + 1}`}
                      className="w-full h-full"
                      fill
                      scale={1.05}
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-neutral-100 pb-16">
            <div className="text-center">
              <h3 className="text-xs uppercase tracking-wider text-neutral-900 mb-2">Free Shipping</h3>
              <p className="text-sm text-neutral-500">Complimentary delivery worldwide</p>
            </div>
            <div className="text-center">
              <h3 className="text-xs uppercase tracking-wider text-neutral-900 mb-2">Lifetime Warranty</h3>
              <p className="text-sm text-neutral-500">Quality guaranteed for generations</p>
            </div>
            <div className="text-center">
              <h3 className="text-xs uppercase tracking-wider text-neutral-900 mb-2">Expert Assembly</h3>
              <p className="text-sm text-neutral-500">Professional white-glove service</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
