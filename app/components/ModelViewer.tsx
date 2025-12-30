'use client';

import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface ModelViewerProps {
  modelPath?: string;
  fallback?: React.ReactNode;
}

// Component to load and display GLB/GLTF models
function Model({ modelPath }: { modelPath?: string }) {
  // Load model if path is provided
  // When you add your GLB files, uncomment the line below and remove the placeholder
  // const { scene } = useGLTF(modelPath!);
  
  // For now, show placeholder geometry
  // Once you have GLB files, replace this section with:
  // return <primitive object={scene} scale={1} />;
  
  return (
    <>
      <mesh rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial 
          color="#D4AF37" 
          metalness={0.9} 
          roughness={0.1}
          envMapIntensity={1.5}
        />
      </mesh>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} />
      <directionalLight position={[-10, 5, -5]} intensity={0.8} />
      <pointLight position={[0, 10, 0]} intensity={0.5} color="#D4AF37" />
    </>
  );
}

export default function ModelViewer({ modelPath, fallback }: ModelViewerProps) {
  const controlsRef = useRef<any>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-full bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50 rounded-lg overflow-hidden"
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
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <Environment preset="studio" />
          <Model modelPath={modelPath} />
          <OrbitControls
            ref={controlsRef}
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={3}
            maxDistance={10}
            autoRotate={false}
          />
        </Canvas>
      </Suspense>
      
      <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-sm text-xs text-neutral-700 uppercase tracking-wider shadow-lg border border-neutral-200">
        <p>Drag to rotate • Scroll to zoom</p>
      </div>
    </motion.div>
  );
}

