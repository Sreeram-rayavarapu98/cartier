'use client';

import Navigation from './components/Navigation';
import Link from 'next/link';
import ScrollFade from './components/ScrollFade';
import Image from 'next/image';

// Landing Page 1 - AESTHETIQUE Style
// Theme: Lux Linen (p=#0b4d3b, bo=#00000014, b=#f7f5f2)

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#f7f5f2' }}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Hero Image Placeholder - Replace with actual image */}
          <div className="w-full h-full bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-200" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] mb-4" style={{ color: '#0b4d3b' }}>
            NEW COLLECTION 2025
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold mb-6 text-neutral-900 leading-tight px-4">
            The Essence of Modern Living
          </h1>
          <Link
            href="/products"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-medium uppercase tracking-wider text-white transition-colors"
            style={{ backgroundColor: '#0b4d3b' }}
          >
            Discover Collection
          </Link>
        </div>
      </section>

      {/* Product Spotlight Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-16" style={{ backgroundColor: '#f7f5f2' }}>
        <div className="max-w-[1920px] mx-auto">
          <ScrollFade>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left - Product Image */}
              <div className="relative">
                <div className="aspect-square rounded-lg overflow-hidden relative border border-[#00000014]">
                  <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
                    alt="Serenity Lounge Chair"
                    fill
                    className="object-cover color-graded"
                  />
                  <div className="absolute inset-0 bg-black/5"></div>
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded text-xs font-medium uppercase tracking-wider text-white" style={{ backgroundColor: '#0b4d3b' }}>
                    Interactive 3D View
                  </div>
                </div>
              </div>

              {/* Right - Product Details */}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: '#0b4d3b' }}>
                  Iconic Piece
                </p>
                <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-neutral-900">
                  The Serenity Lounge Chair
                </h2>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6 font-light">
                  A masterpiece of comfort and elegance, this chair embodies the perfect balance of form and function. 
                  Crafted with premium Italian leather and solid oak, it represents the pinnacle of luxury seating.
                </p>
                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-sm font-medium text-neutral-900 mb-2">Augmented Reality Ready</p>
                    <p className="text-sm text-neutral-600">Visualize this piece in your space instantly</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-900 mb-2">Customizable Finishes</p>
                    <p className="text-sm text-neutral-600">12 premium leathers, 4 wood stains</p>
                  </div>
                </div>
                <Link
                  href="/products/1"
                  className="inline-block px-8 py-4 text-sm font-medium uppercase tracking-wider text-white transition-colors"
                  style={{ backgroundColor: '#0b4d3b' }}
                >
                  Configure Yours
                </Link>
              </div>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* Curated Collections Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-16" style={{ backgroundColor: '#f7f5f2' }}>
        <div className="max-w-[1920px] mx-auto">
          <ScrollFade delay={0.1}>
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900">
                Curated Collections
              </h2>
              <Link href="/products" className="text-sm uppercase tracking-wider text-neutral-700 hover:opacity-70 transition-opacity">
                View All Categories
              </Link>
            </div>
          </ScrollFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Living Room */}
            <ScrollFade delay={0.2}>
              <Link href="/products?category=living" className="group block">
                <div className="aspect-[4/5] rounded-lg overflow-hidden mb-4 relative border border-[#00000014]">
                  <Image
                    src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e4?w=600&q=80"
                    alt="Living Room Collection"
                    fill
                    className="object-cover color-graded group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-1 group-hover:opacity-70 transition-opacity">
                  Living Room
                </h3>
                <p className="text-sm text-neutral-600">Sofas, Armchairs, Coffee Tables</p>
              </Link>
            </ScrollFade>

            {/* Dining */}
            <ScrollFade delay={0.3}>
              <Link href="/products?category=dining" className="group block">
                <div className="aspect-[4/5] rounded-lg overflow-hidden mb-4 relative border border-[#00000014]">
                  <Image
                    src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&q=80"
                    alt="Dining Collection"
                    fill
                    className="object-cover color-graded group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-1 group-hover:opacity-70 transition-opacity">
                  Dining
                </h3>
                <p className="text-sm text-neutral-600">Tables, Chairs, Sideboards</p>
              </Link>
            </ScrollFade>

            {/* Bedroom */}
            <ScrollFade delay={0.4}>
              <Link href="/products?category=bedroom" className="group block">
                <div className="aspect-[4/5] rounded-lg overflow-hidden mb-4 relative border border-[#00000014]">
                  <Image
                    src="https://images.unsplash.com/photo-1631889993957-20a90d5c79d1?w=600&q=80"
                    alt="Bedroom Collection"
                    fill
                    className="object-cover color-graded group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-1 group-hover:opacity-70 transition-opacity">
                  Bedroom
                </h3>
                <p className="text-sm text-neutral-600">Beds, Nightstands, Lighting</p>
              </Link>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-300 py-16 px-6 lg:px-16">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-serif font-bold text-white mb-4">AESTHETIQUE</h3>
              <p className="text-sm font-light leading-relaxed text-neutral-400">
                Redefining luxury living through impeccable craftsmanship and timeless design. Established 2025.
              </p>
              <p className="text-xs text-neutral-500 mt-4">
                &copy; {new Date().getFullYear()} AESTHETIQUE. All rights reserved.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-medium text-white mb-4 uppercase tracking-wider">Customer Care</h4>
              <ul className="space-y-2 text-sm font-light">
                <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping & Delivery</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Book an Appointment</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium text-white mb-4 uppercase tracking-wider">The Maison</h4>
              <ul className="space-y-2 text-sm font-light">
                <li><a href="/about" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium text-white mb-4 uppercase tracking-wider">Follow Us</h4>
              <ul className="space-y-2 text-sm font-light">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8 flex justify-between text-xs text-neutral-500">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
