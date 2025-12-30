import Navigation from '../components/Navigation';
import Link from 'next/link';

// Landing Page 3 - AURELIUS Style
// Theme: Luxury Ivory (p=#0b3d3a, bo=#00000014, b=#faf8f5)

export default function LandingPage3() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf8f5' }}>
      <Navigation />
      
      {/* Top Bar */}
      <div className="bg-neutral-900 text-white py-2 text-center text-xs uppercase tracking-wider">
        Complimentary Shipping & Assembly on All Orders
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
            <div className="text-center text-neutral-400">
              <p className="text-sm uppercase tracking-wider mb-2">Hero Image</p>
              <p className="text-xs">Modern Living Room</p>
            </div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-[1920px] mx-auto px-6 lg:px-16 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-white leading-tight">
            The Art of Living
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 font-light max-w-2xl mx-auto">
            Discover the new 2025 Collection rendered in exquisite detail
          </p>
          <Link
            href="/products"
            className="inline-block px-8 py-4 bg-white text-neutral-900 border-2 border-white text-sm font-medium uppercase tracking-wider hover:bg-transparent hover:text-white transition-all"
          >
            Explore Collection
          </Link>
        </div>
      </section>

      {/* Brand Philosophy Section */}
      <section className="py-24 px-6 lg:px-16" style={{ backgroundColor: '#faf8f5' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-light italic mb-4">
            "True luxury lies in the harmony of form and function. Our digital boutique offers an immersive 
            experience, allowing you to explore every curve and texture of our masterworks from the comfort of your home."
          </p>
          <p className="text-sm uppercase tracking-wider text-neutral-600">
            — JEAN-PIERRE DURDIS, CREATIVE DIRECTOR
          </p>
        </div>
      </section>

      {/* Iconic Masterpieces Section */}
      <section className="py-24 px-6 lg:px-16" style={{ backgroundColor: '#faf8f5' }}>
        <div className="max-w-[1920px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-neutral-500 mb-2">The New Icons</p>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-neutral-900">
              Iconic Masterpieces
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { name: 'Le Nuage Sofa', material: 'Velvet & Oak Structure', price: '$8,400', tag: '3D VIEW' },
              { name: 'Obelisk Coffee Table', material: 'Carrara Marble', price: '$4,250', tag: '3D VIEW' },
              { name: 'Vanguard Lounge Chair', material: 'Full Grain Leather', price: '$5,900', tag: '3D VIEW' },
            ].map((product) => (
              <Link key={product.name} href="/products" className="group">
                <div className="aspect-[4/5] bg-neutral-100 rounded-lg overflow-hidden mb-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                    <p className="text-sm text-center">{product.name}</p>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded text-xs font-medium uppercase tracking-wider text-white" style={{ backgroundColor: '#0b3d3a' }}>
                    {product.tag}
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-1 group-hover:opacity-70 transition-opacity">
                  {product.name}
                </h3>
                <p className="text-sm text-neutral-600 mb-1">{product.material}</p>
                <p className="text-lg text-neutral-900">{product.price}</p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/products"
              className="inline-block px-8 py-4 border-2 border-neutral-900 text-neutral-900 text-sm font-medium uppercase tracking-wider hover:bg-neutral-900 hover:text-white transition-all"
            >
              View All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-24 px-6 lg:px-16" style={{ backgroundColor: '#faf8f5' }}>
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-square bg-neutral-100 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                <div className="text-center">
                  <p className="text-sm uppercase tracking-wider mb-2">The Regent Chair</p>
                  <p className="text-xs">Product Image</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-white"></div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: '#0b3d3a' }}>
                Customization
              </p>
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-neutral-900">
                The Regent Chair
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-8 font-light">
                Experience the texture of hand-stitched Italian leather and the solidity of solid walnut. 
                Rotate, zoom, and inspect every detail of our craftsmanship in real-time 3D.
              </p>
              <div className="mb-8">
                <p className="text-sm font-medium text-neutral-900 mb-4 uppercase tracking-wider">
                  Select Material
                </p>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-900 border-2 border-neutral-300 cursor-pointer hover:border-neutral-900 transition-colors"></div>
                  <div className="w-12 h-12 rounded-full bg-amber-50 border-2 border-neutral-300 cursor-pointer hover:border-neutral-900 transition-colors"></div>
                  <div className="w-12 h-12 rounded-full bg-neutral-900 border-2 border-neutral-300 cursor-pointer hover:border-neutral-900 transition-colors"></div>
                </div>
              </div>
              <button 
                className="px-8 py-4 text-sm font-medium uppercase tracking-wider text-white transition-colors"
                style={{ backgroundColor: '#0b3d3a' }}
              >
                Configure Yours - $3,200
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Showcase */}
      <section className="py-24 px-6 lg:px-16" style={{ backgroundColor: '#faf8f5' }}>
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/products?category=bedroom" className="group relative aspect-[21/9] bg-neutral-100 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                <p className="text-sm">Bedroom Scene</p>
              </div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-serif font-bold text-white mb-2">Bedroom</h3>
                <p className="text-sm text-white/90 uppercase tracking-wider">Explore</p>
              </div>
            </Link>
            <Link href="/products?category=dining" className="group relative aspect-[21/9] bg-neutral-100 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                <p className="text-sm">Dining Scene</p>
              </div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-serif font-bold text-white mb-2">Dining</h3>
                <p className="text-sm text-white/90 uppercase tracking-wider">Explore</p>
              </div>
            </Link>
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

