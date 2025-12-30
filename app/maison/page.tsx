'use client';

import Navigation from '../components/Navigation';
import ScrollFade from '../components/ScrollFade';
import ParallaxSection from '../components/ParallaxSection';
import HoverScaleImage from '../components/HoverScaleImage';
import Image from 'next/image';

// The Maison Page - Philosophy/About
// Theme: Maison Luxe (p=#0b3a2e, bo=#00000014, b=#fffdf9)

export default function MaisonPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#fffdf9' }}>
      <Navigation />
      
      {/* Hero Section with Parallax */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
            <div className="text-center text-neutral-400">
              <p className="text-sm uppercase tracking-wider mb-2">The Maison</p>
              <p className="text-xs">Interior Scene</p>
            </div>
          </div>
        </ParallaxSection>
        
        <div className="relative z-10 max-w-[1920px] mx-auto px-6 lg:px-16 text-center">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif font-bold mb-6 text-white">
            THE MAISON
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
            Since 1984, Aurelius has defined the intersection of art, architecture, and living.
          </p>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-24 px-6 lg:px-16" style={{ backgroundColor: '#fffdf9' }}>
        <div className="max-w-[1920px] mx-auto">
          <ScrollFade>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
              <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: '#0b3a2e' }}>
                Our Philosophy
              </p>
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-neutral-900">
                SILENCE IN DESIGN
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6 font-light">
                True luxury lies not in excess, but in subtraction. We believe that the most profound 
                statements are made through restraint. Each piece in our collection is a meditation on 
                the essential—where every line, curve, and material choice serves a purpose.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed font-light">
                Our design philosophy centers on the harmony between natural materials and modern engineering. 
                We honor the integrity of wood, stone, and metal, allowing their inherent beauty to guide 
                our creative process.
              </p>
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden relative border border-[#00000014]">
                <HoverScaleImage
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80"
                  alt="Desk with Golden Sculpture"
                  className="w-full h-full"
                  fill
                  scale={1.05}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-6 lg:px-16" style={{ backgroundColor: '#fffdf9' }}>
        <ScrollFade delay={0.2}>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-serif italic text-neutral-900 leading-relaxed mb-6">
              "To design is to communicate clearly by whatever means you can control or master."
            </p>
            <p className="text-sm uppercase tracking-wider text-neutral-600">
              — ALESSANDRO ROSSI, FOUNDER
            </p>
          </div>
        </ScrollFade>
      </section>

      {/* Mastery of Material Section */}
      <section className="py-24 px-6 lg:px-16" style={{ backgroundColor: '#fffdf9' }}>
        <div className="max-w-[1920px] mx-auto">
          <ScrollFade delay={0.3}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="aspect-[4/3] rounded-lg overflow-hidden relative order-2 lg:order-1 border border-[#00000014]">
                <HoverScaleImage
                  src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80"
                  alt="Hands Working with Wood"
                  className="w-full h-full"
                  fill
                  scale={1.05}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="order-1 lg:order-2">
              <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: '#0b3a2e' }}>
                The Savoir-Faire
              </p>
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-neutral-900">
                MASTERY OF MATERIAL
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6 font-light">
                Behind every piece lies generations of expertise. Our artisans, many third-generation 
                craftspeople, bring decades of refined skill to each creation. We hand-select every 
                slab of Italian travertine, every plank of American walnut, ensuring that only the 
                finest materials bear our name.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed font-light">
                Our production runs are intentionally limited. We believe in the value of time, 
                allowing each piece to be shaped, refined, and perfected without the pressure of 
                mass production.
              </p>
              </div>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* Textured Background Section */}
      <section className="py-24 px-6 lg:px-16">
        <ScrollFade delay={0.4}>
          <div className="max-w-[1920px] mx-auto">
            <div className="aspect-[21/9] bg-neutral-900 rounded-lg overflow-hidden relative">
              <HoverScaleImage
                src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=1920&q=80"
                alt="Natural Stone Texture"
                className="w-full h-full"
                fill
                scale={1.02}
                sizes="100vw"
              />
            </div>
          </div>
        </ScrollFade>
      </section>

      {/* Brand Values Section */}
      <section className="py-24 px-6 lg:px-16" style={{ backgroundColor: '#fffdf9' }}>
        <div className="max-w-[1920px] mx-auto">
          <ScrollFade delay={0.5}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-neutral-900">RARITY</h3>
              <p className="text-base text-neutral-700 font-light leading-relaxed">
                Creating objects of desire that stand the test of time, transcending trends and seasons.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-neutral-900">INTEGRITY</h3>
              <p className="text-base text-neutral-700 font-light leading-relaxed">
                Honest construction where the method of assembly is as beautiful as the finished form.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-neutral-900">SUSTAINABILITY</h3>
              <p className="text-base text-neutral-700 font-light leading-relaxed">
                A promise to leave a lighter footprint, preserving the beauty of our world for the future.
              </p>
            </div>
          </div>
          </ScrollFade>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-300 py-16 px-6 lg:px-16">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-serif font-bold text-white mb-4">AURELIUS</h3>
              <p className="text-sm font-light leading-relaxed text-neutral-400">
                Redefining luxury living with sustainable materials and timeless design. Experience the future of furniture shopping.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-medium text-white mb-4 uppercase tracking-wider">Customer Care</h4>
              <ul className="space-y-2 text-sm font-light">
                <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium text-white mb-4 uppercase tracking-wider">The Maison</h4>
              <ul className="space-y-2 text-sm font-light">
                <li><a href="/maison" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Designers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium text-white mb-4 uppercase tracking-wider">Social</h4>
              <ul className="space-y-2 text-sm font-light">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8 flex justify-between text-xs text-neutral-500">
            <span>&copy; {new Date().getFullYear()} Aurelius Furniture. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

