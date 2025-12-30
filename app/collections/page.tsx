'use client';

import Navigation from '../components/Navigation';
import Link from 'next/link';
import ScrollFade from '../components/ScrollFade';
import ParallaxSection from '../components/ParallaxSection';
import HoverScaleImage from '../components/HoverScaleImage';
import Image from 'next/image';

// Collections Page - Theme: Opulent Ivory (p=#8b5e3c, bo=#00000014, b=#fbf9f6)

export default function CollectionsPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#fbf9f6' }}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-16">
        <div className="max-w-[1920px] mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 text-neutral-900">
            THE COLLECTIONS
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 max-w-3xl font-light mb-8">
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

      {/* Collection Sections */}
      <section className="px-6 lg:px-16 pb-24">
        <div className="max-w-[1920px] mx-auto space-y-32">
          {/* The Ethereal Collection */}
          <ScrollFade delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="aspect-[4/3] rounded-lg overflow-hidden relative border border-[#00000014]">
                <HoverScaleImage
                  src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e4?w=1200&q=80"
                  alt="The Ethereal Collection"
                  className="w-full h-full"
                  fill
                  scale={1.05}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded text-xs font-medium uppercase tracking-wider text-white" style={{ backgroundColor: '#8b5e3c' }}>
                  New Arrival
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: '#8b5e3c' }}>
                  2025 Series
                </p>
                <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-neutral-900">
                  THE ETHEREAL COLLECTION
                </h2>
                <p className="text-lg text-neutral-700 leading-relaxed mb-8 font-light">
                  Soft curves meet structured stone. The Ethereal Collection explores the delicate balance between 
                  weight and weightlessness, featuring cream velvets and travertine surfaces.
                </p>
                <Link
                  href="/collections/ethereal"
                  className="inline-block px-8 py-4 text-sm font-medium uppercase tracking-wider border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all"
                >
                  Explore Collection
                </Link>
              </div>
            </div>
          </ScrollFade>

          {/* Obsidian & Gold */}
          <ScrollFade delay={0.2}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: '#8b5e3c' }}>
                  Signature Line
                </p>
                <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-neutral-900">
                  OBSIDIAN & GOLD
                </h2>
                <p className="text-lg text-neutral-700 leading-relaxed mb-8 font-light">
                  A study in contrast. Deep, matte black finishes accented by brushed brass hardware. 
                  Designed for the executive residence where authority meets comfort.
                </p>
                <Link
                  href="/collections/obsidian-gold"
                  className="inline-block px-8 py-4 text-sm font-medium uppercase tracking-wider border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all"
                >
                  Explore Collection
                </Link>
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden relative order-1 lg:order-2 border border-[#00000014]">
                <HoverScaleImage
                  src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80"
                  alt="Obsidian & Gold Collection"
                  className="w-full h-full"
                  fill
                  scale={1.05}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </ScrollFade>

          {/* Nordic Heritage */}
          <ScrollFade delay={0.3}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="aspect-[4/3] rounded-lg overflow-hidden relative border border-[#00000014]">
                <HoverScaleImage
                  src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80"
                  alt="Nordic Heritage Collection"
                  className="w-full h-full"
                  fill
                  scale={1.05}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: '#8b5e3c' }}>
                  Classic Series
                </p>
                <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-neutral-900">
                  NORDIC HERITAGE
                </h2>
                <p className="text-lg text-neutral-700 leading-relaxed mb-8 font-light">
                  Honoring traditional joinery and solid wood craftsmanship. The Nordic Heritage collection brings 
                  the warmth of white oak and the simplicity of Scandinavian design to modern living.
                </p>
                <Link
                  href="/collections/nordic-heritage"
                  className="inline-block px-8 py-4 text-sm font-medium uppercase tracking-wider border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all"
                >
                  Explore Collection
                </Link>
              </div>
            </div>
          </ScrollFade>

          {/* Riviera Outdoor */}
          <ScrollFade delay={0.4}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: '#8b5e3c' }}>
                  Seasonal
                </p>
                <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-neutral-900">
                  RIVIERA OUTDOOR
                </h2>
                <p className="text-lg text-neutral-700 leading-relaxed mb-8 font-light">
                  Weather-resistant teak and performance textiles designed for the coastal villa. 
                  Bring the luxury of the interior to the open air.
                </p>
                <Link
                  href="/collections/riviera-outdoor"
                  className="inline-block px-8 py-4 text-sm font-medium uppercase tracking-wider border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all"
                >
                  Explore Collection
                </Link>
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden relative order-1 lg:order-2 border border-[#00000014]">
                <HoverScaleImage
                  src="https://images.unsplash.com/photo-1631889993957-20a90d5c79d1?w=1200&q=80"
                  alt="Riviera Outdoor Collection"
                  className="w-full h-full"
                  fill
                  scale={1.05}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </ScrollFade>
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

