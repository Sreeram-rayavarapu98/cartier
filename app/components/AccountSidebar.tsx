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
    <div className="w-64 flex-shrink-0">
      <h2 className="text-sm font-medium uppercase tracking-wider text-neutral-900 mb-8">
        Account Overview
      </h2>
      <nav className="space-y-1">
        {links.map((link) => {
          const isActive = pathname === link.href || pathname?.startsWith(link.href + '/');
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-3 text-sm text-neutral-700 hover:text-neutral-900 transition-colors ${
                isActive ? 'font-bold text-neutral-900' : ''
              }`}
            >
              {link.label}
            </Link>
          );
        })}
        <button className="block py-3 text-sm text-neutral-700 hover:text-neutral-900 transition-colors w-full text-left">
          Sign Out
        </button>
      </nav>
    </div>
  );
}

