'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useSpring } from 'framer-motion';

interface ScrollInteractionControllerProps {
  children: (scrollProgress: number, isAnimating: boolean) => React.ReactNode;
  scrollRange?: [number, number];
  onStateChange?: (stateIndex: number) => void;
  totalStates?: number;
}

export default function ScrollInteractionController({
  children,
  scrollRange = [0, 1],
  onStateChange,
  totalStates = 1,
}: ScrollInteractionControllerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentState, setCurrentState] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Map scroll progress to animation range
  const animationProgress = useTransform(
    scrollYProgress,
    scrollRange,
    [0, 1]
  );

  // Smooth spring animation
  const smoothProgress = useSpring(animationProgress, {
    stiffness: 50,
    damping: 20,
    mass: 0.5,
  });

  // Calculate current state based on progress
  useEffect(() => {
    const unsubscribe = smoothProgress.on('change', (latest) => {
      const clamped = Math.max(0, Math.min(1, latest));
      const newState = Math.floor(clamped * totalStates);
      
      if (newState !== currentState) {
        setCurrentState(newState);
        onStateChange?.(newState);
      }

      // Determine if we're in animation range
      const inRange = clamped > 0.05 && clamped < 0.95;
      setIsAnimating(inRange);
    });

    return () => unsubscribe();
  }, [smoothProgress, currentState, totalStates, onStateChange]);

  return (
    <div ref={containerRef} className="relative w-full">
      {children(smoothProgress.get(), isAnimating)}
    </div>
  );
}

