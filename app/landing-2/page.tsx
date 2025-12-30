'use client';

import Navigation from '../components/Navigation';
import ScrollFade from '../components/ScrollFade';
import ParallaxSection from '../components/ParallaxSection';
import HoverScaleImage from '../components/HoverScaleImage';
import Link from 'next/link';

// Landing Page 2 - AURELIA & CO. Style
// Theme: Opulent Ivory (p=#b8865f, bo=#00000014, b=#fbfaf8)

export default function LandingPage2() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#fbfaf8' }}>
      <Navigation />
      
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
            <div className="text-center text-neutral-400">
              <p className="text-sm uppercase tracking-wider mb-2">Hero Image</p>
              <p className="text-xs">Luxurious Living Room</p>
            </div>
          </div>
        </ParallaxSection>
        
        <div className="relative z-10 max-w-[1920px] mx-auto px-6 lg:px-16">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-white leading-tight">
              The Art of Modern Living
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 font-light">
              Experience our new collection in full immersion.
            </p>
            <Link
              href="/products"
              className="inline-block px-8 py-4 border-2 border-white text-white text-sm font-medium uppercase tracking-wider hover:bg-white hover:text-neutral-900 transition-all"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Showcase Section */}
      <section className="py-24 px-6 lg:px-16" style={{ backgroundColor: '#fbfaf8' }}>
        <div className="max-w-[1920px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center text-neutral-900">
            Interactive Showcase
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-neutral-100 rounded-lg overflow-hidden mb-6">
              <div className="aspect-[4/3] relative">
                <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                  <div className="text-center">
                    <p className="text-sm uppercase tracking-wider mb-2">Verona Lounge Chair</p>
                    <p className="text-xs">3D Model View</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-xs text-neutral-600 uppercase tracking-wider">Model: Verona Lounge Chair</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="text-lg font-light text-neutral-900">$4,250</span>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-neutral-300"></div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-neutral-600">
              Experience the texture and craftsmanship in 360 degrees.
            </p>
          </div>
        </div>
      </section>

      {/* Curated Selections Section */}
      <section className="py-24 px-6 lg:px-16" style={{ backgroundColor: '#fbfaf8' }}>
        <div className="max-w-[1920px] mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900">
              Curated Selections
            </h2>
            <Link href="/products" className="text-sm uppercase tracking-wider text-neutral-700 hover:opacity-70 transition-opacity">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'The Cloud Sofa', category: 'Living Room Collection' },
              { name: 'Elysium Bed', category: 'Bedroom Collection' },
              { name: 'Lumina Floor Lamp', category: 'Lighting Collection' },
            ].map((product) => (
              <Link key={product.name} href="/products" className="group">
                <div className="aspect-[4/5] bg-neutral-100 rounded-lg overflow-hidden mb-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                    <p className="text-sm text-center">{product.name}</p>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded text-xs font-medium uppercase tracking-wider text-white" style={{ backgroundColor: '#b8865f' }}>
                    3D View
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-1 group-hover:opacity-70 transition-opacity">
                  {product.name}
                </h3>
                <p className="text-sm text-neutral-600">{product.category}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Designed for the Connoisseur Section */}
      <section className="py-24 px-6 lg:px-16" style={{ backgroundColor: '#fbfaf8' }}>
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-neutral-900">
                Designed for the Connoisseur
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-8 font-light">
                Every piece is a testament to superior craftsmanship. Visualize each texture and curve with 
                our high-fidelity 3D models before bringing them into your home.
              </p>
              <Link
                href="/maison"
                className="inline-block text-sm uppercase tracking-wider text-neutral-900 underline hover:opacity-70 transition-opacity"
              >
                Read Our Story
              </Link>
            </div>
            <div className="aspect-[4/3] bg-[#8B0000] rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-white/50">
                <p className="text-sm">Ornate Carving Detail</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-300 py-16 px-6 lg:px-16">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-serif font-bold text-white mb-4">AURELIA & CO.</h3>
              <p className="text-sm font-light leading-relaxed text-neutral-400">
                Luxury furniture for the discerning few. Where timeless elegance meets exceptional craftsmanship.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-medium text-white mb-4 uppercase tracking-wider">Customer Care</h4>
              <ul className="space-y-2 text-sm font-light">
                <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Order Tracking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium text-white mb-4 uppercase tracking-wider">The Maison</h4>
              <ul className="space-y-2 text-sm font-light">
                <li><a href="/maison" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium text-white mb-4 uppercase tracking-wider">Services</h4>
              <ul className="space-y-2 text-sm font-light">
                <li><a href="#" className="hover:text-white transition-colors">Interior Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Customization</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Corporate Gifts</a></li>
              </ul>
              <h4 className="text-xs font-medium text-white mb-4 mt-6 uppercase tracking-wider">Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 px-4 py-2 bg-neutral-800 border border-neutral-700 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
                />
                <button className="px-6 py-2 bg-white text-neutral-900 text-xs font-medium uppercase tracking-wider hover:bg-neutral-100 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8 flex justify-between text-xs text-neutral-500">
            <span>&copy; {new Date().getFullYear()} AURELIA & CO. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

