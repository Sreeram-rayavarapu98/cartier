'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function ScrollImageGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [naturalSize, setNaturalSize] = useState({ width: 0, height: 0 });
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setViewportSize({ width: window.innerWidth, height: window.innerHeight });
    
    const handleResize = () => {
      setViewportSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Measure natural size after initial render
    const measureNaturalSize = () => {
      if (!imageRef.current) return;
      const img = imageRef.current;
      const parent = img.parentElement;
      if (parent) {
        const parentRect = parent.getBoundingClientRect();
        // Natural size should be based on grid cell size
        // Grid has 5 columns, so each cell is approximately 1/5 of container width
        const gridCellWidth = parentRect.width / 5; // 5 columns
        const gridCellHeight = gridCellWidth * (4/5); // 4:5 aspect ratio based on CSS
        setNaturalSize({ 
          width: gridCellWidth || 400, 
          height: gridCellHeight || 500 
        });
      }
    };
    
    // Measure immediately and after layout
    measureNaturalSize();
    const timer = setTimeout(measureNaturalSize, 200);
    window.addEventListener('resize', measureNaturalSize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', measureNaturalSize);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'] // Start earlier - when section bottom enters viewport
  });

  // Center image animation - shrink from full screen to natural size
  // Start immediately (0) and complete by 60% scroll progress
  const imageWidth = useTransform(
    scrollYProgress,
    [0, 0.6],
    [viewportSize.width || 1920, naturalSize.width || 400]
  );
  const imageHeight = useTransform(
    scrollYProgress,
    [0, 0.6],
    [viewportSize.height || 1080, naturalSize.height || 500]
  );

  // Layer animations - fade and scale - start earlier
  // Opacity: hold at 0 until 40% scroll, then fade to 1 by 80%
  const layer1Opacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [0, 0, 1]);
  // Scale: hold at 0 until 20% scroll, then scale to 1 by 70%
  const layer1Scale = useTransform(scrollYProgress, [0, 0.2, 0.7], [0, 0, 1]);
  
  const layer2Opacity = useTransform(scrollYProgress, [0, 0.4, 0.75], [0, 0, 1]);
  const layer2Scale = useTransform(scrollYProgress, [0, 0.2, 0.65], [0, 0, 1]);
  
  const layer3Opacity = useTransform(scrollYProgress, [0, 0.4, 0.7], [0, 0, 1]);
  const layer3Scale = useTransform(scrollYProgress, [0, 0.2, 0.6], [0, 0, 1]);

  const images = {
    layer1: [
      'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1556304044-0699e31c6a34?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1590330297626-d7aff25a0431?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxmYXNoaW9ufGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk1fHxmYXNoaW9ufGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fG1vZGVsJTIwZmFzaGlvbiUyMHN0cmVldHxlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1565321590372-09331b9dd1eb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFpciUyMGpvcmRhbnxlbnwwfHwwfHx8MA%3D%3D',
    ],
    layer2: [
      'https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM4fHxwcm9kdWN0fGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1637414165749-9b3cd88b8271?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHRlY2glMjBwcm9kdWN0fGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1699911251220-8e0de3b5ce88?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b25ld2hlZWx8ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1667483629944-6414ad0648c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGx1eHVyeSUyMHdhdGNofGVufDB8fDB8fHww',
      'https://plus.unsplash.com/premium_photo-1706078438060-d76ced26d8d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNhbWVyYSUyMHBvbGFyb2lkfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1525385444278-b7968e7e28dc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGl0ZW18ZW58MHx8MHx8fDA%3D',
    ],
    layer3: [
      'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXRlbXxlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    ],
    center: 'https://assets.codepen.io/605876/model-shades.jpg?format=auto&quality=100',
  };

  return (
    <main>
      <section ref={sectionRef}>
        <div className="content">
          <div className="grid">
            {/* Layer 1: Outer edges (6 images) */}
            <motion.div
              className="layer"
              style={{ 
                opacity: layer1Opacity,
                scale: layer1Scale
              }}
            >
              {images.layer1.map((src, idx) => (
                <div key={idx}>
                  <img src={src} alt="" />
                </div>
              ))}
            </motion.div>
            {/* Layer 2: Inner columns (6 images) */}
            <motion.div
              className="layer"
              style={{ 
                opacity: layer2Opacity,
                scale: layer2Scale
              }}
            >
              {images.layer2.map((src, idx) => (
                <div key={idx}>
                  <img src={src} alt="" />
                </div>
              ))}
            </motion.div>
            {/* Layer 3: Center column top and bottom (2 images) */}
            <motion.div
              className="layer"
              style={{ 
                opacity: layer3Opacity,
                scale: layer3Scale
              }}
            >
              <div>
                <img src={images.layer3[0]} alt="" />
              </div>
              <div>
                <img src={images.layer3[1]} alt="" />
              </div>
            </motion.div>
            {/* Center scaler image */}
            <div className="scaler">
              <motion.img 
                ref={imageRef} 
                src={images.center} 
                alt="" 
                style={{
                  width: imageWidth,
                  height: imageHeight
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
