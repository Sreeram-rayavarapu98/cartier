'use client';

import Navigation from '../components/Navigation';
import Link from 'next/link';
import ScrollFade from '../components/ScrollFade';
import ParallaxSection from '../components/ParallaxSection';
import HoverScaleImage from '../components/HoverScaleImage';
import ProductFilters, { type FilterState } from '../components/ProductFilters';
import { useMemo, useState } from 'react';

// Collections Page - Theme: Opulent Ivory (p=#8b5e3c, bo=#00000014, b=#fbf9f6)

export default function CollectionsPage() {
  const [filters, setFilters] = useState<FilterState>({
    category: [],
    priceRange: [0, 10000],
    material: [],
    color: [],
  });

  const collections = useMemo(() => ([
    {
      id: 'ethereal',
      title: 'THE ETHEREAL COLLECTION',
      badge: 'New Arrival',
      series: '2025 Series',
      description: 'Soft curves meet structured stone. The Ethereal Collection explores the delicate balance between weight and weightlessness, featuring cream velvets and travertine surfaces.',
      href: '/products/1',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&h=900&q=80&fit=crop',
      category: 'Seating',
      material: ['Fabric', 'Stone'],
      color: ['Beige', 'White'],
      order: 'text-right',
    },
    {
      id: 'obsidian-gold',
      title: 'OBSIDIAN & GOLD',
      badge: null,
      series: 'Signature Line',
      description: 'A study in contrast. Deep, matte black finishes accented by brushed brass hardware. Designed for the executive residence where authority meets comfort.',
      href: '/products/2',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&h=900&q=80&fit=crop',
      category: 'Storage',
      material: ['Metal', 'Wood'],
      color: ['Black', 'Gold'],
      order: 'text-left',
    },
    {
      id: 'nordic',
      title: 'NORDIC HERITAGE',
      badge: null,
      series: 'Classic Series',
      description: 'Honoring traditional joinery and solid wood craftsmanship. The Nordic Heritage collection brings the warmth of white oak and the simplicity of Scandinavian design to modern living.',
      href: '/products/3',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&h=900&q=80&fit=crop',
      category: 'Tables',
      material: ['Wood'],
      color: ['Brown', 'Beige'],
      order: 'text-right',
    },
    {
      id: 'riviera',
      title: 'RIVIERA OUTDOOR',
      badge: null,
      series: 'Seasonal',
      description: 'Weather-resistant teak and performance textiles designed for the coastal villa. Bring the luxury of the interior to the open air.',
      href: '/products/4',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&h=900&q=80&fit=crop',
      category: 'Outdoor',
      material: ['Wood', 'Fabric'],
      color: ['Brown', 'Beige'],
      order: 'text-left',
    },
    {
      id: 'velvet-noir',
      title: 'VELVET NOIR',
      badge: 'Limited Edition',
      series: '2025 Series',
      description: 'Opulent deep velvets in midnight hues. The Velvet Noir collection brings dramatic sophistication to any space with its rich textures and bold silhouettes.',
      href: '/products/5',
      image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1600&h=900&q=80&fit=crop',
      category: 'Seating',
      material: ['Fabric', 'Metal'],
      color: ['Black', 'Gray'],
      order: 'text-right',
    },
    {
      id: 'marble-luxe',
      title: 'MARBLE LUXE',
      badge: null,
      series: 'Artisan Collection',
      description: 'Italian Carrara marble meets contemporary design. Each piece showcases natural veining patterns, making every item uniquely individual.',
      href: '/products/6',
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=1600&h=900&q=80&fit=crop',
      category: 'Tables',
      material: ['Marble', 'Metal'],
      color: ['White', 'Gray'],
      order: 'text-left',
    },
    {
      id: 'rattan-retreat',
      title: 'RATTAN RETREAT',
      badge: null,
      series: 'Sustainable Living',
      description: 'Handwoven natural rattan and sustainable bamboo create organic warmth. Perfect for those seeking connection to nature within their interiors.',
      href: '/products/7',
      image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=1600&h=900&q=80&fit=crop',
      category: 'Seating',
      material: ['Wood', 'Fabric'],
      color: ['Brown', 'Beige'],
      order: 'text-right',
    },
    {
      id: 'minimalist-zen',
      title: 'MINIMALIST ZEN',
      badge: null,
      series: 'Asian Influence',
      description: 'Japanese-inspired simplicity with clean lines and natural materials. The Minimalist Zen collection embodies tranquility and purposeful design.',
      href: '/products/8',
      image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1600&h=900&q=80&fit=crop',
      category: 'Lighting',
      material: ['Wood', 'Glass'],
      color: ['White', 'Brown'],
      order: 'text-left',
    },
    {
      id: 'art-deco-revival',
      title: 'ART DECO REVIVAL',
      badge: 'Bestseller',
      series: 'Heritage Collection',
      description: 'Geometric patterns and luxurious materials celebrate the glamour of the 1920s. Bold brass accents and sumptuous fabrics define this statement collection.',
      href: '/products/9',
      image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1600&h=900&q=80&fit=crop',
      category: 'Accessories',
      material: ['Metal', 'Glass'],
      color: ['Gold', 'Black'],
      order: 'text-right',
    },
    {
      id: 'boucle-comfort',
      title: 'BOUCLÉ COMFORT',
      badge: 'New Arrival',
      series: '2025 Series',
      description: 'Soft, textured bouclé fabric wraps around sculptural forms. This collection brings warmth and tactile luxury to contemporary living spaces.',
      href: '/products/10',
      image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=1600&h=900&q=80&fit=crop',
      category: 'Seating',
      material: ['Fabric', 'Wood'],
      color: ['White', 'Beige'],
      order: 'text-left',
    },
    {
      id: 'brass-elegance',
      title: 'BRASS ELEGANCE',
      badge: null,
      series: 'Metalwork Collection',
      description: 'Hand-polished brass meets precision engineering. Each piece in this collection showcases the beauty of metalwork at its finest.',
      href: '/products/11',
      image: 'https://images.unsplash.com/photo-1551298370-9d3d53f87fba?w=1600&h=900&q=80&fit=crop',
      category: 'Lighting',
      material: ['Metal', 'Glass'],
      color: ['Gold', 'White'],
      order: 'text-right',
    },
    {
      id: 'coastal-living',
      title: 'COASTAL LIVING',
      badge: null,
      series: 'Resort Collection',
      description: 'Inspired by Mediterranean villas and seaside retreats. Light woods, natural linens, and ocean-inspired hues create effortless elegance.',
      href: '/products/12',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=900&q=80&fit=crop',
      category: 'Seating',
      material: ['Wood', 'Fabric'],
      color: ['White', 'Beige'],
      order: 'text-left',
    },
    {
      id: 'industrial-loft',
      title: 'INDUSTRIAL LOFT',
      badge: null,
      series: 'Urban Collection',
      description: 'Raw materials meet refined design. Exposed steel, reclaimed wood, and concrete textures create spaces with character and soul.',
      href: '/products/13',
      image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1600&h=900&q=80&fit=crop',
      category: 'Tables',
      material: ['Metal', 'Wood'],
      color: ['Black', 'Brown'],
      order: 'text-right',
    },
    {
      id: 'emerald-forest',
      title: 'EMERALD FOREST',
      badge: 'Limited Edition',
      series: 'Color Series',
      description: 'Deep forest greens and rich emerald tones bring nature indoors. Velvet upholstery and gold accents create opulent drama.',
      href: '/products/14',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&h=900&q=80&fit=crop',
      category: 'Seating',
      material: ['Fabric', 'Metal'],
      color: ['Green', 'Gold'],
      order: 'text-left',
    },
    {
      id: 'curved-modernity',
      title: 'CURVED MODERNITY',
      badge: null,
      series: 'Sculptural Series',
      description: 'Organic curves and flowing lines define this collection. Inspired by mid-century masters, reimagined for contemporary spaces.',
      href: '/products/15',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&h=900&q=80&fit=crop',
      category: 'Seating',
      material: ['Leather', 'Metal'],
      color: ['Brown', 'Black'],
      order: 'text-right',
    },
    {
      id: 'terrazzo-dreams',
      title: 'TERRAZZO DREAMS',
      badge: null,
      series: 'Material Focus',
      description: 'Italian terrazzo craftsmanship meets modern furniture design. Colorful chips embedded in polished concrete create living art pieces.',
      href: '/products/16',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&h=900&q=80&fit=crop',
      category: 'Tables',
      material: ['Stone', 'Metal'],
      color: ['White', 'Gray'],
      order: 'text-left',
    },
    {
      id: 'cognac-library',
      title: 'COGNAC LIBRARY',
      badge: 'Bestseller',
      series: 'Executive Collection',
      description: 'Rich cognac leather and walnut wood create the perfect home office. Timeless sophistication for the discerning professional.',
      href: '/products/17',
      image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1600&h=900&q=80&fit=crop',
      category: 'Storage',
      material: ['Leather', 'Wood'],
      color: ['Brown', 'Gold'],
      order: 'text-right',
    },
    {
      id: 'midnight-blue',
      title: 'MIDNIGHT BLUE',
      badge: null,
      series: 'Color Series',
      description: 'Deep navy velvet and midnight blue tones evoke starlit sophistication. Perfect for creating intimate, dramatic spaces.',
      href: '/products/18',
      image: 'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?w=1600&h=900&q=80&fit=crop',
      category: 'Seating',
      material: ['Fabric', 'Wood'],
      color: ['Blue', 'Gold'],
      order: 'text-left',
    },
    {
      id: 'wabi-sabi',
      title: 'WABI-SABI',
      badge: 'New Arrival',
      series: 'Japanese Collection',
      description: 'Embracing imperfection and natural beauty. Handcrafted pieces with organic textures celebrate the art of impermanence.',
      href: '/products/19',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=900&q=80&fit=crop',
      category: 'Accessories',
      material: ['Wood', 'Stone'],
      color: ['Brown', 'Gray'],
      order: 'text-right',
    },
  ]), []);

  const filteredCollections = useMemo(() => {
    return collections.filter((item) => {
      const categoryMatch = filters.category.length === 0 || filters.category.some((c) => item.category.toLowerCase().includes(c.toLowerCase()));
      const materialMatch = filters.material.length === 0 || filters.material.some((m) => item.material.map((x) => x.toLowerCase()).includes(m.toLowerCase()));
      const colorMatch = filters.color.length === 0 || filters.color.some((c) => item.color.map((x) => x.toLowerCase()).includes(c.toLowerCase()));
      return categoryMatch && materialMatch && colorMatch;
    });
  }, [collections, filters]);

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#fbf9f6' }}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="heading-hero mb-6 text-neutral-900">
            THE COLLECTIONS
          </h1>
          <p className="body-lg text-neutral-700 max-w-3xl mb-12">
            Curated assemblages of form, material, and function. Explore our defining aesthetic movements.
          </p>
          
          {/* Category Navigation */}
          <div className="flex flex-wrap gap-6 mb-16">
            <Link href="/collections" className="text-sm uppercase tracking-wider text-neutral-900 border-b-2 border-neutral-900 pb-2">
              All Collections
            </Link>
            <Link href="/collections?category=living" className="text-sm uppercase tracking-wider text-neutral-600 hover:text-neutral-900 transition-colors">
              Living Room
            </Link>
            <Link href="/collections?category=dining" className="text-sm uppercase tracking-wider text-neutral-600 hover:text-neutral-900 transition-colors">
              Dining
            </Link>
            <Link href="/collections?category=bedroom" className="text-sm uppercase tracking-wider text-neutral-600 hover:text-neutral-900 transition-colors">
              Bedroom
            </Link>
            <Link href="/collections?category=workspace" className="text-sm uppercase tracking-wider text-neutral-600 hover:text-neutral-900 transition-colors">
              Workspace
            </Link>
            <Link href="/collections?category=outdoor" className="text-sm uppercase tracking-wider text-neutral-600 hover:text-neutral-900 transition-colors">
              Outdoor
            </Link>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 lg:px-16 pb-8">
        <div className="max-w-[1920px] mx-auto">
          <ProductFilters onFilterChange={setFilters} />
        </div>
      </section>

      {/* Collection Sections */}
      <section className="px-6 lg:px-16 pb-24">
        <div className="max-w-[1920px] mx-auto space-y-32">
          {filteredCollections.length === 0 && (
            <div className="text-neutral-500 text-sm uppercase tracking-[0.2em]">
              No collections match these filters.
            </div>
          )}

          {filteredCollections.map((item, idx) => (
            <ScrollFade key={item.id} delay={Math.min(0.1 * (idx + 1), 0.5)}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className={`aspect-[4/3] rounded-lg overflow-hidden relative border border-[#00000014] ${idx % 2 !== 0 ? 'order-2 lg:order-1' : ''}`}>
                  <HoverScaleImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full"
                    fill
                    scale={1.05}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {item.badge && (
                    <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded text-xs font-medium uppercase tracking-wider text-white" style={{ backgroundColor: '#8b5e3c' }}>
                      {item.badge}
                    </div>
                  )}
                </div>
                <div className={`${idx % 2 !== 0 ? 'order-1 lg:order-2' : ''}`}>
                  <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: '#8b5e3c' }}>
                    {item.series}
                  </p>
                  <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-neutral-900">
                    {item.title}
                  </h2>
                  <p className="text-lg text-neutral-700 leading-relaxed mb-8 font-light">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="inline-block px-8 py-4 text-sm font-medium uppercase tracking-wider border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all"
                  >
                    Explore Collection
                  </Link>
                </div>
              </div>
            </ScrollFade>
          ))}
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-24 px-6 lg:px-16" style={{ backgroundColor: '#fbf9f6' }}>
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4 text-neutral-900">Bespoke Customization</h3>
              <p className="text-sm text-neutral-700 font-light leading-relaxed">
                Customize fabrics, finishes, and dimensions to suit your specific interior requirements.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold mb-4 text-neutral-900">White Glove Delivery</h3>
              <p className="text-sm text-neutral-700 font-light leading-relaxed">
                Complimentary shipping, room-of-choice placement, and packaging removal.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold mb-4 text-neutral-900">Lifetime Warranty</h3>
              <p className="text-sm text-neutral-700 font-light leading-relaxed">
                Enduring quality guaranteed against structural defects for the life of the product.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-300 py-16 px-6 lg:px-16">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-serif font-bold text-white mb-4">AURELIUS</h3>
              <p className="text-sm font-light leading-relaxed text-neutral-400">
                Redefining luxury living with sustainable materials and timeless design. Experience the future of furniture shopping.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-medium text-white mb-4 uppercase tracking-wider">Customer Care</h4>
              <ul className="space-y-2 text-sm font-light">
                <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium text-white mb-4 uppercase tracking-wider">The Maison</h4>
              <ul className="space-y-2 text-sm font-light">
                <li><a href="/maison" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Designers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium text-white mb-4 uppercase tracking-wider">Social</h4>
              <ul className="space-y-2 text-sm font-light">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8 flex justify-between text-xs text-neutral-500">
            <span>&copy; {new Date().getFullYear()} Aurelius Furniture. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

