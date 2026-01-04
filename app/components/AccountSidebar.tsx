'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AccountSidebar() {
  const pathname = usePathname();

  const links = [
    { href: '/account', label: 'Dashboard' },
    { href: '/account/orders', label: 'My Orders' },
    { href: '/account/addresses', label: 'Addresses' },
    { href: '/account/payment-methods', label: 'Payment Methods' },
    { href: '/account/wishlist', label: 'Wishlist' },
  ];

  return (
    <div className="w-56 flex-shrink-0">
      <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6">
        Account Overview
      </h2>
      <nav className="space-y-1">
        {links.map((link) => {
          const isActive = pathname === link.href || pathname?.startsWith(link.href + '/');
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-2.5 text-sm transition-colors ${
                isActive 
                  ? 'text-neutral-900 font-medium' 
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
        <button className="block py-2.5 text-sm text-neutral-500 hover:text-neutral-900 transition-colors w-full text-left mt-4 pt-4 border-t border-neutral-200">
          Sign Out
        </button>
      </nav>
    </div>
  );
}
