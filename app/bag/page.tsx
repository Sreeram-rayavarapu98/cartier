'use client';

import AccountNavigation from '../components/AccountNavigation';
import ScrollFade from '../components/ScrollFade';
import HoverScaleImage from '../components/HoverScaleImage';
import Link from 'next/link';

// Shopping Bag Page
export default function BagPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf8f5' }}>
      <AccountNavigation />
      
      <div className="max-w-[1920px] mx-auto px-6 lg:px-16 py-24">
        <ScrollFade>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-neutral-900">
              Your Shopping Bag Is Empty
            </h1>
            <p className="text-base text-neutral-700 mb-8 font-light">
              Browse our collections to find the perfect piece for your home. Sign in to view your saved items.
            </p>
            <Link
              href="/products"
              className="btn-primary inline-block text-white"
              style={{ backgroundColor: '#0b4d3b' }}
            >
              Discover Collections
            </Link>
          </div>
        </ScrollFade>

        {/* You May Also Like */}
        <ScrollFade delay={0.2}>
          <div className="mt-24">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center text-neutral-900">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'The Aria Lounge', price: '$3,400', image: 'aria-lounge', unsplash: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80' },
                { name: 'Terra Coffee Table', price: '$1,850', image: 'terra-table', unsplash: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&q=80' },
                { name: 'Cloud Sofa', price: '$4,200', image: 'cloud-sofa', unsplash: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80' },
                { name: 'Lumina Floor Lamp', price: '$1,200', image: 'lumina-lamp', unsplash: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80' },
              ].map((product, index) => (
                <ScrollFade key={product.name} delay={0.3 + index * 0.1}>
                  <Link href={`/products/${product.image}`} className="group block">
                    <div className="aspect-[4/5] rounded-lg overflow-hidden mb-4 relative border border-[#00000014]">
                      <HoverScaleImage
                        src={product.unsplash}
                        alt={product.name}
                        className="w-full h-full"
                        fill
                        scale={1.05}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors pointer-events-none"></div>
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-neutral-900 mb-1 group-hover:opacity-70 transition-opacity">
                      {product.name}
                    </h3>
                    <p className="text-base text-neutral-700">{product.price}</p>
                  </Link>
                </ScrollFade>
              ))}
            </div>
          </div>
        </ScrollFade>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-200 py-16 px-6 lg:px-16 mt-24">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="text-xs font-medium text-neutral-900 mb-4 uppercase tracking-wider">Customer Care</h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li><Link href="/contact" className="hover:text-neutral-900 transition-colors">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-neutral-900 transition-colors">Shipping & Returns</Link></li>
                <li><Link href="#" className="hover:text-neutral-900 transition-colors">Order Tracking</Link></li>
                <li><Link href="#" className="hover:text-neutral-900 transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium text-neutral-900 mb-4 uppercase tracking-wider">The Maison</h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li><Link href="#" className="hover:text-neutral-900 transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-neutral-900 transition-colors">Sustainability</Link></li>
                <li><Link href="#" className="hover:text-neutral-900 transition-colors">Press</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium text-neutral-900 mb-4 uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li><Link href="#" className="hover:text-neutral-900 transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-neutral-900 transition-colors">Terms of Use</Link></li>
                <li><Link href="#" className="hover:text-neutral-900 transition-colors">Accessibility</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium text-neutral-900 mb-4 uppercase tracking-wider">Follow Us</h4>
            </div>
          </div>
          <div className="border-t border-neutral-200 pt-8 text-center text-sm text-neutral-600">
            <p>&copy; {new Date().getFullYear()} Aurelius. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

