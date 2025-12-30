'use client';

import { Suspense, useState, useEffect, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera, useGLTF, useProgress, Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import ModelErrorBoundary from './ModelErrorBoundary';

interface ModelViewerWithLoaderProps {
  modelPath: string;
  fallback?: React.ReactNode;
}

// Model component with error handling and auto-scaling
function LoadedModel({ modelPath }: { modelPath: string }) {
  useEffect(() => {
    console.log('Loading model from:', modelPath);
  }, [modelPath]);

  // useGLTF must be called unconditionally - it's a hook
  const gltf = useGLTF(modelPath);
  
  useEffect(() => {
    if (gltf && gltf.scene) {
      console.log('Model loaded successfully:', modelPath);
      console.log('Scene children:', gltf.scene.children.length);
    }
  }, [gltf, modelPath]);

  const { scene } = gltf;
  
  const clonedScene = useMemo(() => {
    if (!scene) {
      console.warn('Scene is null');
      return null;
    }
    
    try {
      const clone = scene.clone();
      console.log('Scene cloned successfully');
      
      // Traverse and ensure materials are properly set
      clone.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.castShadow = true;
          mesh.receiveShadow = true;
          
          // Ensure materials are visible
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
      
      // Auto-scale model to fit view
      const box = new THREE.Box3().setFromObject(clone);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      
      // Better scaling - ensure model is visible
      const scale = maxDim > 0 ? 3 / maxDim : 1;
      clone.scale.set(scale, scale, scale);
      console.log('Model scaled:', scale, 'Size:', size);
      
      // Center the model
      const center = box.getCenter(new THREE.Vector3());
      clone.position.set(-center.x * scale, -center.y * scale, -center.z * scale);
      console.log('Model centered at:', clone.position);
      
      return clone;
    } catch (err) {
      console.error('Error processing model:', err);
      // Return original scene if processing fails
      return scene;
    }
  }, [scene]);

  useEffect(() => {
    if (clonedScene) {
      console.log('Rendering model:', clonedScene);
      console.log('Model position:', clonedScene.position);
      console.log('Model scale:', clonedScene.scale);
    }
  }, [clonedScene]);

  if (!clonedScene) {
    console.warn('No scene to render');
    return null;
  }

  return (
    <primitive 
      object={clonedScene} 
      dispose={null}
    />
  );
}

// Loading progress component
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

export default function ModelViewerWithLoader({ modelPath, fallback }: ModelViewerWithLoaderProps) {
  const [mounted, setMounted] = useState(false);
  const [modelError, setModelError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    
    // Validate model path
    if (!modelPath) {
      setModelError('No model path provided');
      return;
    }
    
    if (!modelPath.endsWith('.glb') && !modelPath.endsWith('.gltf')) {
      setModelError('Invalid model format. Please use .glb or .gltf files');
      return;
    }

    // Preload model to check if it exists
    fetch(modelPath, { method: 'HEAD' })
      .then((response) => {
        if (!response.ok) {
          setModelError(`Model file not found: ${modelPath}`);
        }
      })
      .catch((error) => {
        console.error('Error checking model:', error);
        setModelError(`Error loading model: ${error.message}`);
      });
  }, [modelPath]);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-neutral-300 border-t-[#8B0000] rounded-full animate-spin mx-auto mb-4" />
          <p className="text-sm text-neutral-600 uppercase tracking-wider">Initializing...</p>
        </div>
      </div>
    );
  }

  if (modelError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-neutral-50">
        <div className="text-center p-8">
          <p className="text-sm text-red-600 mb-2">Error Loading Model</p>
          <p className="text-xs text-neutral-500 mb-4">{modelError}</p>
          <p className="text-xs text-neutral-400">Please check the model path: {modelPath}</p>
        </div>
      </div>
    );
  }

  return (
    <ModelErrorBoundary>
      <div className="relative w-full h-full bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50 rounded-lg overflow-hidden">
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
            key={modelPath}
            camera={{ position: [0, 0, 5], fov: 50 }}
            gl={{ 
              antialias: true, 
              alpha: false,
              powerPreference: 'high-performance',
              preserveDrawingBuffer: false,
            }}
            dpr={[1, Math.min(window.devicePixelRatio, 2)]}
            frameloop="always"
            style={{ background: '#f5f5f5', touchAction: 'none' }}
          >
            <color attach="background" args={['#f5f5f5']} />
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
            <Environment preset="studio" />
            <ambientLight intensity={0.8} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
            <directionalLight position={[-10, 5, -5]} intensity={0.8} />
            <pointLight position={[0, 10, 0]} intensity={0.5} />
            <Suspense fallback={<Loader />}>
              <LoadedModel modelPath={modelPath} />
            </Suspense>
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              minDistance={1}
              maxDistance={20}
              autoRotate={false}
              dampingFactor={0.05}
              target={[0, 0, 0]}
              touches={{
                ONE: 2, // Rotate
                TWO: 1, // Zoom
              }}
            />
          </Canvas>
        </Suspense>
        
        <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-sm text-xs text-neutral-700 uppercase tracking-wider shadow-lg border border-neutral-200">
          <p>Drag to rotate • Scroll to zoom</p>
        </div>
      </div>
    </ModelErrorBoundary>
  );
}

