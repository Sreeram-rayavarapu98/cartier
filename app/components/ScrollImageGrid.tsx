'use client';

import { useEffect, useRef } from 'react';
import { animate, scroll, cubicBezier } from 'motion/react';

export default function ScrollImageGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const layersRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      console.log('Reduced motion preference detected - skipping animations');
      return;
    }

    const image = imageRef.current;
    const firstSection = sectionRef.current;
    const layers = layersRef.current;

    if (!image || !firstSection || layers.length === 0) return;

    // Set initial state - center image full screen
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    image.style.width = `${viewportWidth}px`;
    image.style.height = `${viewportHeight}px`;

    // Set initial state for layers - hidden (already set via inline styles)

    // Measure the natural size after a brief delay to ensure layout is complete
    setTimeout(() => {
      const naturalWidth = image.offsetWidth;
      const naturalHeight = image.offsetHeight;

    // Animate image on scroll - shrink from full screen to natural size
    scroll(
      animate(image, {
        width: [viewportWidth, naturalWidth],
        height: [viewportHeight, naturalHeight]
      }, {
        width: { easing: cubicBezier(0.65, 0, 0.35, 1) },   // GSAP power2.inOut
        height: { easing: cubicBezier(0.42, 0, 0.58, 1) }   // GSAP power1.inOut
      }),
      {
        target: firstSection,
        offset: ['start start', '80% end end'] 
      }
    );

    // Animate each layer with staggered timing
    // Different easing per layer: power1, power3, power4
    const scaleEasings = [
      cubicBezier(0.42, 0, 0.58, 1),  // Layer 1: GSAP power1.inOut
      cubicBezier(0.76, 0, 0.24, 1),  // Layer 2: GSAP power3.inOut
      cubicBezier(0.87, 0, 0.13, 1)   // Layer 3: GSAP power4.inOut
    ];
    
    layers.forEach((layer, index) => {
      // Calculate different end points for each layer
      const endOffset = `${1 - (index * 0.05)} end`;
      
      // fade: opacity stays 0 until 55% of scroll progress, then fades to 1
      scroll(
        animate(layer, {
          opacity: [0, 0, 1]
        }, {
          offset: [0, 0.55, 1],  // Hold at 0 until 55%, then animate to 1
          easing: cubicBezier(0.61, 1, 0.88, 1)  // GSAP sine.out
        }),
        {
          target: firstSection,
          offset: ['start start', endOffset]
        }
      );
      
      // reveal: scale stays 0 until 30% of scroll progress, then scales to 1
      scroll(
        animate(layer, {
          scale: [0, 0, 1]
        }, {
          offset: [0, 0.3, 1],   // Hold at 0 until 30%, then animate to 1
          easing: scaleEasings[index]  // Different power curve per layer
        }),
        {
          target: firstSection,
          offset: ['start start', endOffset]
        }
      );
    });
    }, 100);
  }, []);

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
            <div
              ref={(el) => {
                if (el) layersRef.current[0] = el;
              }}
              className="layer"
              style={{ opacity: 0, transform: 'scale(0)' }}
            >
              {images.layer1.map((src, idx) => (
                <div key={idx}>
                  <img src={src} alt="" />
                </div>
              ))}
            </div>
            {/* Layer 2: Inner columns (6 images) */}
            <div
              ref={(el) => {
                if (el) layersRef.current[1] = el;
              }}
              className="layer"
              style={{ opacity: 0, transform: 'scale(0)' }}
            >
              {images.layer2.map((src, idx) => (
                <div key={idx}>
                  <img src={src} alt="" />
                </div>
              ))}
            </div>
            {/* Layer 3: Center column top and bottom (2 images) */}
            <div
              ref={(el) => {
                if (el) layersRef.current[2] = el;
              }}
              className="layer"
              style={{ opacity: 0, transform: 'scale(0)' }}
            >
              <div>
                <img src={images.layer3[0]} alt="" />
              </div>
              <div>
                <img src={images.layer3[1]} alt="" />
              </div>
            </div>
            {/* Center scaler image */}
            <div className="scaler">
              <img 
                ref={imageRef} 
                src={images.center} 
                alt="" 
                style={{
                  width: typeof window !== 'undefined' ? `${window.innerWidth}px` : '100vw',
                  height: typeof window !== 'undefined' ? `${window.innerHeight}px` : '100vh',
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
