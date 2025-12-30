import Navigation from '../../components/Navigation';
import Link from 'next/link';

// Collection Details - The Ethereal Collection
// Theme: Opulent Ivory (p=#a67c52, bo=#00000014, b=#fbf8f6)

export default function EtherealCollectionPage() {
  const products = [
    { id: 'cloud-sofa', name: 'The Cloud Sofa', price: '$4,200', material: 'BOUCLE & OAK BASE', tag: 'BEST SELLER' },
    { id: 'roman-table', name: 'Roman Travertine Table', price: '$2,850', material: 'HONED ITALIAN STONE' },
    { id: 'serenity-chair', name: 'Serenity Armchair', price: '$1,950', material: 'PERFORMANCE VELVET' },
    { id: 'lunar-lamp', name: 'Lunar Floor Lamp', price: '$1,200', material: 'ALABASTER & AGED BRASS' },
    { id: 'horizon-console', name: 'Horizon Console', price: '$3,400', material: 'LIMESTONE & WALNUT' },
    { id: 'dune-rug', name: 'Dune Area Rug', price: '$2,100', material: 'HAND KNOTTED WOOL & SILK' },
  ];

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#fbf8f6' }}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 lg:px-16">
        <div className="max-w-[1920px] mx-auto">
          <div className="mb-8">
            <Link href="/collections" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
              HOME / COLLECTIONS / THE ETHEREAL COLLECTION
            </Link>
          </div>
          
          <div className="aspect-[21/9] bg-neutral-100 rounded-lg overflow-hidden mb-12 relative">
            <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
              <div className="text-center">
                <p className="text-sm uppercase tracking-wider mb-2">The Ethereal Collection</p>
                <p className="text-xs">Hero Image - Living Room Scene</p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-neutral-900">
              THE ETHEREAL COLLECTION
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-light mb-8">
              A dialogue between soft curves and structured stone.
            </p>
            <p className="text-base text-neutral-700 leading-relaxed font-light">
              Inspired by the gentle light of dawn, the Ethereal Collection features organic silhouettes 
              draped in cream bouclé and anchored by raw travertine. Each piece is designed to bring a 
              sense of calm and weightlessness to the modern interior.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="px-6 lg:px-16 pb-12">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex flex-wrap gap-6">
            <Link href="/collections/ethereal" className="text-sm uppercase tracking-wider text-neutral-900 border-b-2 border-neutral-900 pb-2">
              View All
            </Link>
            <Link href="/collections/ethereal?category=seating" className="text-sm uppercase tracking-wider text-neutral-600 hover:text-neutral-900 transition-colors">
              Seating
            </Link>
            <Link href="/collections/ethereal?category=tables" className="text-sm uppercase tracking-wider text-neutral-600 hover:text-neutral-900 transition-colors">
              Tables
            </Link>
            <Link href="/collections/ethereal?category=lighting" className="text-sm uppercase tracking-wider text-neutral-600 hover:text-neutral-900 transition-colors">
              Lighting
            </Link>
            <Link href="/collections/ethereal?category=decor" className="text-sm uppercase tracking-wider text-neutral-600 hover:text-neutral-900 transition-colors">
              Decor
            </Link>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-6 lg:px-16 pb-24">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="group">
                <div className="aspect-[4/5] bg-neutral-100 rounded-lg overflow-hidden mb-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                    <p className="text-sm">{product.name}</p>
                  </div>
                  {product.tag && (
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded text-xs font-medium uppercase tracking-wider text-white" style={{ backgroundColor: '#a67c52' }}>
                      {product.tag}
                    </div>
                  )}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded text-xs font-medium uppercase tracking-wider text-white" style={{ backgroundColor: '#a67c52' }}>
                    3D View
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-1 group-hover:opacity-70 transition-opacity">
                  {product.name}
                </h3>
                <p className="text-sm text-neutral-600 mb-1">{product.price}</p>
                <p className="text-xs text-neutral-500 uppercase tracking-wider">{product.material}</p>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-neutral-100 text-neutral-900 text-sm font-medium uppercase tracking-wider hover:bg-neutral-200 transition-colors">
              Load More
            </button>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-24 px-6 lg:px-16" style={{ backgroundColor: '#fbf8f6' }}>
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: '#a67c52' }}>
                The Craftsmanship
              </p>
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-neutral-900">
                Sculpted by Hand
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-8 font-light">
                Every piece in the Ethereal Collection undergoes a rigorous process of selection and shaping. 
                Our travertine is sourced directly from quarries in Tivoli, selected for its unique veining 
                and warm tonality.
              </p>
              <Link
                href="/maison"
                className="inline-block px-8 py-4 text-sm font-medium uppercase tracking-wider text-white transition-colors"
                style={{ backgroundColor: '#a67c52' }}
              >
                Read the Story
              </Link>
            </div>
            <div className="aspect-[4/3] bg-neutral-100 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                <p className="text-sm">Craftsman Working Image</p>
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

