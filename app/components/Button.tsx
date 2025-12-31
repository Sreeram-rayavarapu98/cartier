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
  const baseStyles = {
    primary: {
      background: 'linear-gradient(135deg, #8B0000 0%, #A00000 100%)',
      color: 'white',
      border: 'none',
      boxShadow: '0 4px 20px rgba(139, 0, 0, 0.25)',
    },
    secondary: {
      background: 'transparent',
      color: '#1a1a1a',
      border: '2px solid #1a1a1a',
      boxShadow: 'none',
    },
    outline: {
      background: 'transparent',
      color: 'white',
      border: '2px solid white',
      boxShadow: 'none',
    },
  };

  const hoverStyles = {
    primary: {
      y: -3,
      boxShadow: '0 12px 35px rgba(139, 0, 0, 0.4)',
    },
    secondary: {
      y: -3,
      backgroundColor: '#1a1a1a',
      color: '#ffffff',
      boxShadow: '0 12px 35px rgba(0, 0, 0, 0.2)',
    },
    outline: {
      y: -3,
      backgroundColor: '#ffffff',
      color: '#1a1a1a',
      boxShadow: '0 12px 35px rgba(255, 255, 255, 0.15)',
    },
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`relative overflow-hidden px-10 py-4 text-sm font-semibold uppercase tracking-[0.12em] ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      style={baseStyles[variant]}
      initial={{ y: 0 }}
      whileHover={disabled ? {} : hoverStyles[variant]}
      whileTap={disabled ? {} : { scale: 0.98 }}
      transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
    >
      {/* Shine effect */}
      <motion.span
        className="absolute inset-0 opacity-0"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%)',
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

