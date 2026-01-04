'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  index: number;
}

export default function ProductCard({ id, name, category, price, image, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="group product-card"
    >
      <Link href={`/products/${id}`}>
        <div className="relative overflow-hidden bg-white rounded-xl aspect-[3/4] mb-8 shadow-lg">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <div className="relative w-full h-full">
              {image ? (
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
                  <svg className="w-16 h-16 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
            </div>
            {/* Quick View Button */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-20">
              <span className="px-6 py-3 bg-white/95 backdrop-blur-sm text-neutral-900 label-xs rounded-full shadow-lg">
                Quick View
              </span>
            </div>
          </motion.div>
        </div>
        <div className="space-y-3 text-center">
          <p className="label-xs text-neutral-500">
            {category}
          </p>
          <h3 className="heading-md text-neutral-900 group-hover:text-[#8B0000] transition-colors duration-300">
            {name}
          </h3>
          <p className="body-lg text-neutral-700">{price}</p>
        </div>
      </Link>
    </motion.div>
  );
}
