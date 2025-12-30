'use client';

import { Suspense, useState, useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera, useGLTF, useProgress, Html } from '@react-three/drei';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import * as THREE from 'three';
import ModelErrorBoundary from './ModelErrorBoundary';

interface DesignState {
  name: string;
  modelPath: string;
  animation?: {
    type: 'open' | 'expand' | 'transform';
    duration: number;
  };
}

interface MobileProductViewerProps {
  modelPath: string;
  designStates?: DesignState[];
  fallback?: React.ReactNode;
}

// Animated model component with state transitions
function AnimatedModel({ 
  modelPath, 
  designStateIndex,
  scrollProgress 
}: { 
  modelPath: string;
  designStateIndex: number;
  scrollProgress: number;
}) {
  const gltf = useGLTF(modelPath);
  const meshRef = useRef<THREE.Group>(null);
  const [targetRotation, setTargetRotation] = useState({ x: 0, y: 0, z: 0 });
  const [targetScale, setTargetScale] = useState({ x: 1, y: 1, z: 1 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0, z: 0 });

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

  // Smooth animation based on scroll progress
  useFrame(() => {
    if (!meshRef.current || !clonedScene) return;

    // Apply smooth state transitions based on scroll
    const progress = Math.max(0, Math.min(1, scrollProgress));
    
    // Example: Open animation (can be customized per state)
    if (designStateIndex === 1) {
      // Opening state - slightly rotate and scale
      const openProgress = progress;
      meshRef.current.rotation.y = THREE.MathUtils.lerp(0, Math.PI * 0.1, openProgress);
      meshRef.current.scale.setScalar(THREE.MathUtils.lerp(1, 1.05, openProgress));
    } else if (designStateIndex === 2) {
      // Expanded state
      const expandProgress = progress;
      meshRef.current.scale.setScalar(THREE.MathUtils.lerp(1, 1.1, expandProgress));
    }

    // Smooth interpolation for all transforms
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      targetRotation.x,
      0.1
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetRotation.y,
      0.1
    );
    meshRef.current.scale.x = THREE.MathUtils.lerp(
      meshRef.current.scale.x,
      targetScale.x,
      0.1
    );
  });

  if (!clonedScene) return null;

  return (
    <group ref={meshRef}>
      <primitive object={clonedScene} dispose={null} />
    </group>
  );
}

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-neutral-300 border-t-[#8B0000] rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm text-neutral-600 uppercase tracking-wider">
          Loading {Math.round(progress)}%
        </p>
      </div>
    </Html>
  );
}

export default function MobileProductViewer({ 
  modelPath, 
  designStates = [],
  fallback 
}: MobileProductViewerProps) {
  const [mounted, setMounted] = useState(false);
  const [currentStateIndex, setCurrentStateIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [modelError, setModelError] = useState<string | null>(null);

  // Scroll-based state management
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Transform scroll progress to state index
  const stateProgress = useTransform(scrollYProgress, [0, 1], [0, designStates.length || 1]);
  const smoothStateProgress = useSpring(stateProgress, { stiffness: 50, damping: 20 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const unsubscribe = smoothStateProgress.on('change', (latest) => {
      const newIndex = Math.floor(latest);
      if (newIndex !== currentStateIndex && newIndex < (designStates.length || 1)) {
        setCurrentStateIndex(newIndex);
      }
    });
    return () => unsubscribe();
  }, [smoothStateProgress, currentStateIndex, designStates.length]);

  const currentModelPath = designStates.length > 0 
    ? designStates[currentStateIndex]?.modelPath || modelPath
    : modelPath;

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-neutral-300 border-t-[#8B0000] rounded-full animate-spin mx-auto mb-4" />
          <p className="text-sm text-neutral-600 uppercase tracking-wider">Initializing...</p>
        </div>
      </div>
    );
  }

  if (modelError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50">
        <div className="text-center p-8">
          <p className="text-sm text-red-600 mb-2">Error Loading Model</p>
          <p className="text-xs text-neutral-500">{modelError}</p>
        </div>
      </div>
    );
  }

  return (
    <ModelErrorBoundary>
      <div 
        ref={containerRef}
        className="relative w-full h-[100vh] bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50 overflow-hidden"
        style={{ touchAction: 'none' }}
      >
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              {fallback || (
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-neutral-300 border-t-[#8B0000] rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-sm text-neutral-600 uppercase tracking-wider">Loading 3D Model...</p>
                </div>
              )}
            </div>
          }
        >
          <Canvas
            key={currentModelPath}
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
            }}
          >
            <color attach="background" args={['#f5f5f5']} />
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
            <Environment preset="studio" />
            <ambientLight intensity={0.8} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
            <directionalLight position={[-10, 5, -5]} intensity={0.8} />
            <pointLight position={[0, 10, 0]} intensity={0.5} />
            
            {/* Soft shadow plane */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
              <planeGeometry args={[10, 10]} />
              <shadowMaterial opacity={0.2} />
            </mesh>

            <Suspense fallback={<Loader />}>
              <AnimatedModel 
                modelPath={currentModelPath}
                designStateIndex={currentStateIndex}
                scrollProgress={smoothStateProgress.get()}
              />
            </Suspense>

            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              minDistance={1}
              maxDistance={20}
              autoRotate={false}
              dampingFactor={0.1}
              target={[0, 0, 0]}
              touches={{
                ONE: 0, // Rotate
                TWO: 1, // Zoom
              }}
              mouseButtons={{
                LEFT: 0, // Rotate
                MIDDLE: 1, // Zoom
                RIGHT: 2, // Pan
              }}
              enableDamping={true}
              screenSpacePanning={false}
              rotateSpeed={0.5}
              zoomSpeed={0.8}
            />
          </Canvas>
        </Suspense>

        {/* Minimal UI Indicator */}
        {designStates.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
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

        {/* Subtle scroll hint */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
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
      </div>
    </ModelErrorBoundary>
  );
}

