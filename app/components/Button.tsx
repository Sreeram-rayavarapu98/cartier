'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseClasses = 'px-8 sm:px-12 py-4 sm:py-5 text-xs font-medium tracking-[0.2em] uppercase transition-all duration-300 relative overflow-hidden';
  
  const variantClasses = {
    primary: 'bg-[#8B0000] text-white border-2 border-[#8B0000] hover:bg-[#A00000] hover:border-[#A00000]',
    secondary: 'border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-neutral-900',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {/* Subtle glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-white/10 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

