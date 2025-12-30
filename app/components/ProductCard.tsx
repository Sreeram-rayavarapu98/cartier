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
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group"
    >
      <Link href={`/products/${id}`}>
        <div className="relative overflow-hidden bg-[#F5F5F5] aspect-[3/4] mb-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-full color-graded"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#8B0000]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative w-full h-full bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
              {image ? (
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover color-graded"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-[#8B0000]/20 to-[#D4AF37]/20 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-xs text-neutral-400 uppercase tracking-wider">Image Placeholder</span>
                </div>
              )}
            </div>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[#8B0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="space-y-2">
          <p className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-medium">
            {category}
          </p>
          <h3 className="text-2xl font-serif font-semibold text-neutral-900 group-hover:text-[#8B0000] transition-colors duration-300">
            {name}
          </h3>
          <p className="text-lg text-neutral-700 font-light">{price}</p>
        </div>
      </Link>
    </motion.div>
  );
}

