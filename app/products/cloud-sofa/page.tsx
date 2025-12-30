import Navigation from '../../components/Navigation';
import Link from 'next/link';

// Product Detail Page - Cloud Sofa
// Theme: Maison Luxe (p=#8b5e3c, bo=#00000014, b=#f7f5f2)

export default function CloudSofaPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#f7f5f2' }}>
      <Navigation />
      
      <div className="pt-32 pb-24 px-6 lg:px-16">
        <div className="max-w-[1920px] mx-auto">
          {/* Breadcrumbs */}
          <div className="mb-12">
            <Link href="/collections/ethereal" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
              HOME / LIVING / SOFAS / THE CLOUD
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            {/* Left - Product Image */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-lg overflow-hidden relative" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1000&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black/5"></div>
                <div className="absolute bottom-6 left-6 flex gap-4">
                  <Link
                    href="/products/cloud-sofa/3d"
                    className="px-6 py-3 bg-white/90 backdrop-blur-sm text-neutral-900 text-xs font-medium uppercase tracking-wider rounded hover:bg-white transition-colors"
                  >
                    3D View
                  </Link>
                </div>
              </div>
            </div>

            {/* Right - Product Details */}
            <div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-neutral-900">
                The Cloud Sofa
              </h1>
              <p className="text-4xl md:text-5xl font-light text-neutral-900 mb-8">
                $4,200
              </p>
              
              <p className="text-lg text-neutral-700 leading-relaxed mb-8 font-light">
                A study in softness. The Cloud Sofa combines sculptural, organic curves with deep comfort. 
                Upholstered in our signature Italian Bouclé with a solid white oak base.
              </p>

              {/* Customization Options */}
              <div className="space-y-6 mb-8">
                <div>
                  <p className="text-sm font-medium text-neutral-900 mb-3 uppercase tracking-wider">
                    Fabric: Italian Bouclé
                  </p>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-neutral-300 cursor-pointer hover:border-neutral-900 transition-colors"></div>
                    <div className="w-12 h-12 rounded-full bg-neutral-200 border-2 border-neutral-300 cursor-pointer hover:border-neutral-900 transition-colors"></div>
                    <div className="w-12 h-12 rounded-full bg-neutral-900 border-2 border-neutral-300 cursor-pointer hover:border-neutral-900 transition-colors"></div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-900 mb-3 uppercase tracking-wider">
                    Base: White Oak
                  </p>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-50 border-2 border-neutral-300 cursor-pointer hover:border-neutral-900 transition-colors"></div>
                    <div className="w-12 h-12 rounded-full bg-amber-100 border-2 border-neutral-300 cursor-pointer hover:border-neutral-900 transition-colors"></div>
                    <div className="w-12 h-12 rounded-full bg-amber-200 border-2 border-neutral-300 cursor-pointer hover:border-neutral-900 transition-colors"></div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                className="btn-primary text-white"
                style={{ backgroundColor: '#8b5e3c' }}
              >
                Add to Bag
              </button>
              <button className="btn-secondary border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white">
                Customize Piece
              </button>
              </div>

              {/* Accordion Sections */}
              <div className="space-y-4">
                <details open className="border-b border-neutral-200 pb-4">
                  <summary className="text-sm font-medium text-neutral-900 uppercase tracking-wider cursor-pointer">
                    Dimensions
                  </summary>
                  <div className="mt-4 space-y-2 text-sm text-neutral-700">
                    <p>Length: 240 cm</p>
                    <p>Depth: 98 cm</p>
                    <p>Height: 72 cm</p>
                    <p>Seat Height: 42 cm</p>
                  </div>
                </details>
                <details className="border-b border-neutral-200 pb-4">
                  <summary className="text-sm font-medium text-neutral-900 uppercase tracking-wider cursor-pointer">
                    Materials & Care
                  </summary>
                  <div className="mt-4 text-sm text-neutral-700">
                    <p>Premium Italian Bouclé fabric with professional cleaning recommended.</p>
                  </div>
                </details>
                <details className="border-b border-neutral-200 pb-4">
                  <summary className="text-sm font-medium text-neutral-900 uppercase tracking-wider cursor-pointer">
                    Shipping & Returns
                  </summary>
                  <div className="mt-4 text-sm text-neutral-700">
                    <p>Complimentary shipping and white-glove delivery included.</p>
                  </div>
                </details>
              </div>
            </div>
          </div>

          {/* The Design Section */}
          <section className="py-16 border-t border-neutral-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: '#8b5e3c' }}>
                  The Design
                </p>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-neutral-900">
                  Engineered for Silence
                </h2>
                <p className="text-lg text-neutral-700 leading-relaxed mb-4 font-light">
                  The Cloud Sofa's fluid, organic form is the result of countless hours of refinement. 
                  Its curves are not arbitrary—they follow the natural contours of the human body, 
                  creating a sense of weightless support.
                </p>
                <p className="text-lg text-neutral-700 leading-relaxed font-light">
                  Beneath the surface, variable-density memory foam provides adaptive comfort, 
                  while the solid white oak base grounds the piece with quiet strength.
                </p>
              </div>
              <div className="aspect-[4/3] bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-lg overflow-hidden relative" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1000&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black/5"></div>
              </div>
            </div>
          </section>

          {/* Complete the Look Section */}
          <section className="py-16 border-t border-neutral-200">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center text-neutral-900">
              Complete the Look
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Terra Coffee Table', price: '$1,850' },
                { name: 'Halo Floor Lamp', price: '$890' },
                { name: 'Nomad Wool Rug', price: '$1,200' },
                { name: 'Vessel No. 4', price: '$340' },
              ].map((item) => (
                <Link key={item.name} href="#" className="group">
                  <div className="aspect-square bg-neutral-100 rounded-lg overflow-hidden mb-4">
                    <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                      <p className="text-xs text-center">{item.name}</p>
                    </div>
                  </div>
                  <h3 className="text-sm font-serif font-semibold text-neutral-900 mb-1 group-hover:opacity-70 transition-opacity">
                    {item.name}
                  </h3>
                  <p className="text-sm text-neutral-600">{item.price}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>

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

