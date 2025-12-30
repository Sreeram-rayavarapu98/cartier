'use client';

import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ProductStateAnimatorProps {
  meshRef: React.RefObject<THREE.Group>;
  targetState: number;
  animationType?: 'open' | 'expand' | 'transform';
  duration?: number;
}

export default function ProductStateAnimator({
  meshRef,
  targetState,
  animationType = 'open',
  duration = 2000,
}: ProductStateAnimatorProps) {
  const progressRef = useRef(0);
  const [currentProgress, setCurrentProgress] = useState(0);
  const targetProgressRef = useRef(targetState);

  useEffect(() => {
    targetProgressRef.current = targetState;
  }, [targetState]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Smooth interpolation to target
    const target = targetProgressRef.current;
    const current = progressRef.current;
    const speed = (1000 / duration) * delta; // Convert to per-second speed
    const newProgress = THREE.MathUtils.lerp(current, target, speed);
    progressRef.current = newProgress;
    setCurrentProgress(newProgress);

    const progress = newProgress;
    const group = meshRef.current;

    switch (animationType) {
      case 'open':
        // Smooth opening animation - parts rotate/translate outward
        group.children.forEach((child, index) => {
          if (child instanceof THREE.Group || child instanceof THREE.Mesh) {
            const baseRotation = (index * Math.PI * 2) / group.children.length;
            const openAmount = Math.sin(progress * Math.PI) * 0.3;
            
            child.rotation.x = THREE.MathUtils.lerp(0, openAmount, progress);
            child.rotation.y = THREE.MathUtils.lerp(0, baseRotation * progress, progress);
          }
        });
        break;

      case 'expand':
        // Expansion animation - scale parts outward
        const scale = THREE.MathUtils.lerp(1, 1.15, Math.sin(progress * Math.PI));
        group.scale.setScalar(scale);
        break;

      case 'transform':
        // Transformation - parts move to new positions
        group.children.forEach((child, index) => {
          if (child instanceof THREE.Group || child instanceof THREE.Mesh) {
            const offset = Math.sin(progress * Math.PI) * 0.5;
            child.position.y = THREE.MathUtils.lerp(0, offset * (index % 2 === 0 ? 1 : -1), progress);
          }
        });
        break;
    }
  });

  return null;
}

