'use client';

import { Suspense, useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera, useGLTF, useProgress, Html } from '@react-three/drei';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import * as THREE from 'three';
import ModelErrorBoundary from './ModelErrorBoundary';
import ProductStateAnimator from './ProductStateAnimator';
import HexLoader from './HexLoader';

// Double tap to reset view on mobile
function DoubleTapReset() {
  const { camera } = useThree();
  const lastTapRef = useRef(0);

  useEffect(() => {
    const handleTouchEnd = (e: TouchEvent) => {
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTapRef.current;
      
      if (tapLength < 300 && tapLength > 0) {
        camera.position.set(0, 0, 5);
        camera.lookAt(0, 0, 0);
        const controls = (window as any).__orbitControlsRef;
        if (controls) {
          controls.target.set(0, 0, 0);
          controls.update();
        }
        e.preventDefault();
      }
      lastTapRef.current = currentTime;
    };

    const canvas = document.querySelector('canvas');
    if (canvas) {
      canvas.addEventListener('touchend', handleTouchEnd);
      return () => canvas.removeEventListener('touchend', handleTouchEnd);
    }
  }, [camera]);

  return null;
}

interface DesignState {
  name: string;
  modelPath: string;
  animation?: {
    type: 'open' | 'expand' | 'transform';
    duration: number;
  };
}

interface ProductViewerProps {
  modelPath: string;
  designStates?: DesignState[];
  fallback?: React.ReactNode;
  className?: string;
  isMobile?: boolean;
}

// Animated model with state transitions
function AnimatedModel({ 
  modelPath, 
  designStateIndex,
  scrollProgress,
  animationType = 'open',
  onLoad,
}: { 
  modelPath: string;
  designStateIndex: number;
  scrollProgress: number;
  animationType?: 'open' | 'expand' | 'transform';
  onLoad?: () => void;
}) {
  const gltf = useGLTF(modelPath);
  const meshRef = useRef<THREE.Group>(null);
  const [isProcessed, setIsProcessed] = useState(false);

  const { scene } = gltf;

  const clonedScene = useMemo(() => {
    if (!scene) return null;

    try {
      const clone = scene.clone();
      
      clone.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.castShadow = true;
          mesh.receiveShadow = true;

          if (mesh.material) {
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach((mat) => {
                if (mat instanceof THREE.MeshStandardMaterial) {
                  mat.needsUpdate = true;
                }
              });
            } else if (mesh.material instanceof THREE.MeshStandardMaterial) {
              mesh.material.needsUpdate = true;
            }
          }
        }
      });

      // Auto-scale model
      const box = new THREE.Box3().setFromObject(clone);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = maxDim > 0 ? 3 / maxDim : 1;
      clone.scale.set(scale, scale, scale);

      const center = box.getCenter(new THREE.Vector3());
      clone.position.set(-center.x * scale, -center.y * scale, -center.z * scale);

      return clone;
    } catch (err) {
      console.error('Error processing model:', err);
      return scene;
    }
  }, [scene]);

  // Notify parent when model is ready
  useEffect(() => {
    if (clonedScene && !isProcessed) {
      setIsProcessed(true);
      // Small delay to ensure rendering is complete
      setTimeout(() => {
        onLoad?.();
      }, 100);
    }
  }, [clonedScene, isProcessed, onLoad]);

  // Smooth scroll-based animation
  useFrame(() => {
    if (!meshRef.current || !clonedScene) return;

    const progress = Math.max(0, Math.min(1, scrollProgress));
    const group = meshRef.current;

    switch (animationType) {
      case 'open':
        group.children.forEach((child) => {
          if (child instanceof THREE.Group || child instanceof THREE.Mesh) {
            const openAmount = Math.sin(progress * Math.PI) * 0.2;
            child.rotation.x = THREE.MathUtils.lerp(0, openAmount, progress);
          }
        });
        break;

      case 'expand':
        const scale = THREE.MathUtils.lerp(1, 1.1, Math.sin(progress * Math.PI));
        group.scale.setScalar(scale);
        break;

      case 'transform':
        group.children.forEach((child) => {
          if (child instanceof THREE.Group || child instanceof THREE.Mesh) {
            const offset = Math.sin(progress * Math.PI) * 0.3;
            child.position.y = THREE.MathUtils.lerp(0, offset, progress);
          }
        });
        break;
    }
  });

  if (!clonedScene) return null;

  return (
    <group ref={meshRef}>
      <primitive object={clonedScene} dispose={null} />
      {isProcessed && meshRef.current && (
        <ProductStateAnimator
          meshRef={meshRef as React.RefObject<THREE.Group>}
          targetState={designStateIndex}
          animationType={animationType}
          duration={2000}
        />
      )}
    </group>
  );
}

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <HexLoader />
        <p className="mt-4 text-sm text-neutral-600 uppercase tracking-wider">
          {Math.round(progress)}%
        </p>
      </div>
    </Html>
  );
}

export default function ProductViewer({ 
  modelPath, 
  designStates = [],
  fallback,
  className = '',
  isMobile = false,
}: ProductViewerProps) {
  const [mounted, setMounted] = useState(false);
  const [canvasReady, setCanvasReady] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [currentStateIndex, setCurrentStateIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [modelError, setModelError] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [webglSupported, setWebglSupported] = useState(true);

  // Force remount on model path change
  const [canvasKey, setCanvasKey] = useState(0);

  useEffect(() => {
    setMounted(true);
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setWebglSupported(!!gl);
    } catch {
      setWebglSupported(false);
    }
  }, []);

  // Reset states when model path changes
  useEffect(() => {
    setModelLoaded(false);
    setCanvasReady(false);
    setCanvasKey(prev => prev + 1);
  }, [modelPath]);

  const handleModelLoad = useCallback(() => {
    setModelLoaded(true);
  }, []);

  // Only enable scroll tracking for mobile
  const [enableScroll, setEnableScroll] = useState(false);
  
  useEffect(() => {
    if (mounted && containerRef.current && isMobile) {
      const timer = setTimeout(() => {
        setEnableScroll(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [mounted, isMobile]);

  const staticProgress = useMemo(() => new MotionValue(0), []);
  
  const { scrollYProgress } = useScroll(
    enableScroll && isMobile
      ? {
          target: containerRef,
          offset: ['start start', 'end start'],
        }
      : undefined
  );

  const effectiveScrollProgress = (enableScroll && isMobile && scrollYProgress) ? scrollYProgress : staticProgress;

  const stateProgress = useTransform(
    effectiveScrollProgress,
    [0, 1],
    [0, Math.max(1, designStates.length)]
  );
  
  const smoothStateProgress = useSpring(stateProgress, { 
    stiffness: 50, 
    damping: 20,
    mass: 0.5,
  });

  useEffect(() => {
    if (!enableScroll || !isMobile) return;
    
    const unsubscribe = smoothStateProgress.on('change', (latest) => {
      const clamped = Math.max(0, Math.min(1, latest));
      setScrollProgress(clamped);
      const newIndex = Math.floor(clamped * Math.max(1, designStates.length));
      
      if (newIndex !== currentStateIndex) {
        setCurrentStateIndex(newIndex);
      }

      const inRange = clamped > 0.05 && clamped < 0.95;
      setIsAnimating(inRange);
    });

    return () => unsubscribe();
  }, [enableScroll, isMobile, smoothStateProgress, currentStateIndex, designStates.length]);

  const currentModelPath = designStates.length > 0 
    ? designStates[currentStateIndex]?.modelPath || modelPath
    : modelPath;

  const currentAnimationType = designStates.length > 0
    ? designStates[currentStateIndex]?.animation?.type || 'open'
    : 'open';

  // Show loading state until fully mounted AND canvas is ready
  const showLoader = !mounted || !canvasReady || !modelLoaded;

  if (!mounted) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50 ${className}`}>
        <HexLoader />
      </div>
    );
  }

  if (modelError) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50 ${className}`}>
        <div className="text-center p-8">
          <p className="text-sm text-red-600 mb-2">Error Loading Model</p>
          <p className="text-xs text-neutral-500">{modelError}</p>
        </div>
      </div>
    );
  }

  const outerHeight = isMobile ? 'min-h-[140vh]' : '';
  const defaultHeight = isMobile ? 'h-[65vh]' : 'h-[450px]';
  // Check if className contains a height class
  const hasCustomHeight = className?.includes('h-[') || className?.includes('h-');

  return (
    <ModelErrorBoundary>
      <div 
        ref={containerRef}
        className={`relative w-full ${outerHeight} ${!hasCustomHeight ? defaultHeight : ''} bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50 overflow-hidden rounded-lg ${className}`}
        style={{ touchAction: 'none' }}
      >
        {/* Loading overlay */}
        {showLoader && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50">
            <HexLoader />
          </div>
        )}

        {!webglSupported && (
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-100 z-30">
            {fallback || (
              <div className="text-center space-y-3">
                <p className="text-sm text-neutral-700 uppercase tracking-[0.2em]">3D view unavailable</p>
                <p className="text-xs text-neutral-500">Your device does not support WebGL.</p>
              </div>
            )}
          </div>
        )}

        <div className={`${isMobile ? 'sticky top-16 h-[65vh]' : 'h-full'}`}>
          <Canvas
            key={`${currentModelPath}-${canvasKey}`}
            camera={{ position: [0, 0, 5], fov: 50 }}
            gl={{
              antialias: true,
              alpha: false,
              powerPreference: 'high-performance',
              preserveDrawingBuffer: false,
            }}
            dpr={[1, Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 2)]}
            frameloop="always"
            style={{ background: 'transparent' }}
            onCreated={({ gl }) => {
              const canvas = gl.domElement;
              canvas.style.touchAction = 'none';
              canvas.style.userSelect = 'none';
              canvas.style.webkitUserSelect = 'none';
              canvas.setAttribute('touch-action', 'none');
              setCanvasReady(true);
            }}
          >
            <color attach="background" args={['#f5f5f5']} />
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
            <Environment preset="studio" />
            <ambientLight intensity={0.9} />
            <directionalLight position={[10, 10, 5]} intensity={1.35} castShadow />
            <directionalLight position={[-10, 5, -5]} intensity={0.9} />
            <pointLight position={[0, 10, 0]} intensity={0.45} />
            
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
              <planeGeometry args={[10, 10]} />
              <shadowMaterial opacity={0.18} />
            </mesh>

            <Suspense fallback={<Loader />}>
              <AnimatedModel 
                modelPath={currentModelPath}
                designStateIndex={currentStateIndex}
                scrollProgress={scrollProgress}
                animationType={currentAnimationType}
                onLoad={handleModelLoad}
              />
            </Suspense>

            <OrbitControls
              ref={(ref) => {
                if (ref) {
                  (window as any).__orbitControlsRef = ref;
                }
              }}
              enablePan={false}
              enableZoom={true}
              enableRotate={true}
              minDistance={2}
              maxDistance={6}
              autoRotate={false}
              dampingFactor={0.05}
              target={[0, 0, 0]}
              touches={{
                ONE: 0,
                TWO: 1,
              }}
              mouseButtons={{
                LEFT: 0,
                MIDDLE: 1,
                RIGHT: 2,
              }}
              enableDamping={true}
              screenSpacePanning={false}
              rotateSpeed={0.7}
              zoomSpeed={0.75}
            />
            
            <DoubleTapReset />
          </Canvas>
        </div>

        {/* Minimal UI Indicator - Desktop */}
        {!isMobile && designStates.length > 0 && !showLoader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-6 right-6"
          >
            <div className="flex gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-neutral-200">
              {designStates.map((state, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStateIndex(index)}
                  className={`px-3 py-1 text-xs uppercase tracking-wider transition-all duration-300 rounded-full ${
                    index === currentStateIndex
                      ? 'bg-[#8B0000] text-white'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {state.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Mobile UI Indicator */}
        {isMobile && designStates.length > 0 && !showLoader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-neutral-200">
              {designStates.map((state, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentStateIndex
                      ? 'bg-[#8B0000] w-6'
                      : 'bg-neutral-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Scroll hint - Mobile only */}
        {isMobile && !showLoader && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: isAnimating ? 0 : 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 pointer-events-none"
          >
            <p className="text-[10px] text-neutral-500 uppercase tracking-wider text-center">
              Scroll to explore
            </p>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="mt-2"
            >
              <svg className="w-4 h-4 mx-auto text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        )}

        {/* Interaction hint - Desktop */}
        {!isMobile && !showLoader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-sm text-xs text-neutral-700 uppercase tracking-wider shadow-lg border border-neutral-200 pointer-events-none"
          >
            <p>Drag to rotate • Scroll to zoom</p>
          </motion.div>
        )}
      </div>
    </ModelErrorBoundary>
  );
}

