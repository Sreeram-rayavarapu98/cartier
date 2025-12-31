'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface HoverScaleImageProps {
  src: string;
  alt: string;
  className?: string;
  scale?: number;
  duration?: number;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  children?: React.ReactNode;
}

export default function HoverScaleImage({
  src,
  alt,
  className = '',
  scale = 1.05,
  duration = 0.6,
  sizes,
  fill = false,
  width,
  height,
  children,
}: HoverScaleImageProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 1 }}
      whileHover={{ opacity: 0.95 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {!imgError ? (
        fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover color-graded"
            sizes={sizes}
            onError={() => setImgError(true)}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="object-cover w-full h-full color-graded"
            sizes={sizes}
            onError={() => setImgError(true)}
          />
        )
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
          <div className="text-center text-neutral-400">
            <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-xs">Image unavailable</p>
          </div>
        </div>
      )}
      {children}
    </motion.div>
  );
}

