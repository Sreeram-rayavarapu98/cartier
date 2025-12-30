import AccountNavigation from '../../components/AccountNavigation';
import AccountSidebar from '../../components/AccountSidebar';
import Link from 'next/link';

// My Wishlist Page
export default function WishlistPage() {
  const wishlistItems = [
    { name: 'The Aeris Lounge Chair', price: '$2,850.00', image: 'aeris-chair', unsplash: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80' },
    { name: 'Terra Coffee Table', price: '$1,850.00', image: 'terra-table', unsplash: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&q=80' },
    { name: 'Nocturne Velvet Sofa', price: '$5,400.00', image: 'nocturne-sofa', unsplash: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80' },
    { name: 'Halo Floor Lamp', price: '$1,200.00', image: 'halo-lamp', unsplash: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80' },
  ];

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf8f5' }}>
      <AccountNavigation />
      
      <div className="max-w-[1920px] mx-auto px-6 lg:px-16 py-12">
        <div className="flex gap-12">
          <AccountSidebar />
          
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-neutral-900">
              My Wishlist (4)
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {wishlistItems.map((item) => (
                <div key={item.name} className="group">
                  <div className="aspect-[4/5] bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-lg overflow-hidden mb-4 relative" style={{ backgroundImage: `url(${item.unsplash})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-neutral-900 mb-2 group-hover:opacity-70 transition-opacity">
                    {item.name}
                  </h3>
                  <p className="text-base text-neutral-700 mb-4">{item.price}</p>
                  <button 
                    className="btn-primary w-full text-white"
                    style={{ backgroundColor: '#0b4d3b' }}
                  >
                    Add to Bag
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
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

