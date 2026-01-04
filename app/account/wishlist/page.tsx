'use client';

import AccountNavigation from '../../components/AccountNavigation';
import AccountSidebar from '../../components/AccountSidebar';
import AccountFooter from '../../components/AccountFooter';
import HoverScaleImage from '../../components/HoverScaleImage';
import Link from 'next/link';

// My Wishlist Page
export default function WishlistPage() {
  const wishlistItems = [
    { id: '1', name: 'Nordic Fabric Sofa', price: '€3,950', image: '/images/products/nsofa.jpg' },
    { id: '2', name: 'Windsor Armchair', price: '€1,850', image: '/images/products/chair1.jpg' },
    { id: '14', name: 'Marble Dining Table', price: '€3,600', image: '/images/products/table1.jpg' },
    { id: '8', name: 'Canopy King Bed', price: '€5,500', image: '/images/products/bed1.jpg' },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#f7f5f2]">
      <AccountNavigation />
      
      <div className="flex-1">
        <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="py-12">
            <div className="flex flex-col lg:flex-row gap-12">
              <AccountSidebar />
              
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-light text-neutral-900 mb-10" style={{ fontFamily: 'Georgia, serif' }}>
                  My Wishlist ({wishlistItems.length})
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {wishlistItems.map((item) => (
                    <div key={item.id} className="group">
                      <Link href={`/products/${item.id}`}>
                        <div className="aspect-square bg-[#e8e6e3] rounded-lg overflow-hidden mb-4 relative">
                          <HoverScaleImage
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full"
                            fill
                            scale={1.05}
                            sizes="(max-width: 768px) 50vw, 25vw"
                          />
                        </div>
                        <h3 className="text-sm text-neutral-700 mb-1">
                          {item.name}
                        </h3>
                        <p className="text-sm text-neutral-900 mb-3">{item.price}</p>
                      </Link>
                      <button className="w-full py-2.5 bg-neutral-900 text-white text-xs uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-colors">
                        Add to Bag
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AccountFooter />
    </main>
  );
}
