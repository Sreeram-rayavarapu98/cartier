'use client';

import AccountNavigation from '../components/AccountNavigation';
import AccountFooter from '../components/AccountFooter';
import ScrollFade from '../components/ScrollFade';
import HoverScaleImage from '../components/HoverScaleImage';
import Link from 'next/link';

// Shopping Bag Page
export default function BagPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#f7f5f2]">
      <AccountNavigation />
      
      <div className="flex-1">
        <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="py-16 md:py-24">
            <ScrollFade>
              <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-light text-neutral-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  Your Shopping Bag Is Empty
                </h1>
                <p className="text-neutral-500 mb-8 leading-relaxed">
                  Browse our collections to find the perfect piece for your home.<br />
                  Sign in to view your saved items.
                </p>
                <Link
                  href="/products"
                  className="inline-block px-8 py-3 bg-neutral-900 text-white text-sm uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-colors"
                >
                  Discover Collections
                </Link>
              </div>
            </ScrollFade>

            {/* You May Also Like */}
            <ScrollFade delay={0.2}>
              <div className="mt-20">
                <h2 className="text-xl font-light text-neutral-900 mb-10 text-center" style={{ fontFamily: 'Georgia, serif' }}>
                  You May Also Like
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { name: 'Nordic Fabric Sofa', price: '€3,950', image: '/images/products/nsofa.jpg', id: '1' },
                    { name: 'Windsor Armchair', price: '€1,850', image: '/images/products/chair1.jpg', id: '2' },
                    { name: 'Marble Dining Table', price: '€3,600', image: '/images/products/table1.jpg', id: '14' },
                    { name: 'Canopy King Bed', price: '€5,500', image: '/images/products/bed1.jpg', id: '8' },
                  ].map((product, index) => (
                    <ScrollFade key={product.name} delay={0.3 + index * 0.1}>
                      <Link href={`/products/${product.id}`} className="group block">
                        <div className="aspect-square rounded-lg overflow-hidden mb-4 relative bg-[#e8e6e3]">
                          <HoverScaleImage
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full"
                            fill
                            scale={1.05}
                            sizes="(max-width: 768px) 50vw, 25vw"
                          />
                        </div>
                        <h3 className="text-sm text-neutral-700 mb-1">
                          {product.name}
                        </h3>
                        <p className="text-sm text-neutral-900">{product.price}</p>
                      </Link>
                    </ScrollFade>
                  ))}
                </div>
              </div>
            </ScrollFade>
          </div>
        </div>
      </div>

      <AccountFooter />
    </main>
  );
}
