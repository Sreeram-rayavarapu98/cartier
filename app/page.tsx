'use client';

import { useState, useRef } from 'react';
import Navigation from './components/Navigation';
import Link from 'next/link';
import ScrollFade from './components/ScrollFade';
import Image from 'next/image';
import { ImagesSlider } from './components/ui/images-slider';
import { motion } from 'framer-motion';

const heroImages = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&h=1080&q=85&fit=crop",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&h=1080&q=85&fit=crop",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&q=85&fit=crop",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&h=1080&q=85&fit=crop",
];

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <main className="min-h-screen bg-[#E8E4DF]">
      <Navigation />
      
      {/* Hero Section with Image Slider */}
      <ImagesSlider images={heroImages} className="h-screen" overlayClassName="bg-gradient-to-b from-black/40 via-black/20 to-black/50">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-20 flex flex-col items-center justify-center px-8 text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-6">Luxury Furniture</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight mb-8" style={{ fontFamily: 'Georgia, serif' }}>
            The Essence of<br />Modern Living
          </h1>
          
          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-xl mb-10">
            Discover timeless elegance in every piece. Crafted with precision,<br className="hidden md:block" />
            designed for those who appreciate the art of living beautifully.
          </p>
          
          <Link
            href="/products"
            className="group flex items-center gap-2 text-white border border-white/50 rounded-full px-8 py-4 hover:bg-white hover:text-neutral-900 transition-all duration-300"
          >
            <span className="text-sm uppercase tracking-wider">Explore Collection</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </ImagesSlider>

      {/* Featured Product Section */}
      <section className="py-24 lg:py-32 bg-[#E8E4DF]">
        <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <ScrollFade direction="left">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&q=85&fit=crop"
                    alt="Velvet Sofa"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollFade>
              
              <ScrollFade direction="right" delay={0.2}>
                <div className="text-center lg:text-left">
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">Featured</p>
                  <h3 className="text-3xl md:text-4xl font-light text-neutral-900 mb-4 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                    Nordic Fabric Sofa
                  </h3>
                  <p className="text-xl text-neutral-600 mb-6">€3,950</p>
                  <p className="text-neutral-600 leading-relaxed mb-8">
                    Scandinavian-inspired design meets exceptional comfort. Clean lines, tapered legs, and premium fabric upholstery define this timeless piece.
                  </p>
                  <Link
                    href="/products/1"
                    className="inline-block px-8 py-3 bg-neutral-900 text-white text-sm uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-colors"
                  >
                    Shop Now
                  </Link>
                </div>
              </ScrollFade>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid - 2x2 */}
      <section className="py-16 bg-[#E8E4DF]">
        <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <ScrollFade>
              <div className="text-center mb-16">
                <h2 className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-4">New Arrivals</h2>
                <p className="text-3xl md:text-4xl font-light text-neutral-900" style={{ fontFamily: 'Georgia, serif' }}>
                  Curated for Modern Living
                </p>
              </div>
            </ScrollFade>

            <div className="grid grid-cols-2 gap-6 lg:gap-8">
              {[
                { name: 'Marble Console Table', price: '$2,800', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=600&q=80&fit=crop' },
                { name: 'Sculptural Armchair', price: '$1,950', img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&q=80&fit=crop' },
                { name: 'Linen Bed Frame', price: '$3,200', img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&q=80&fit=crop' },
                { name: 'Brass Floor Lamp', price: '$890', img: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&q=80&fit=crop' },
              ].map((item, idx) => (
                <ScrollFade key={item.name} delay={idx * 0.1}>
                  <Link href="/products" className="group block bg-[#F5F3F0] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <div className="p-5 text-center">
                      <h3 className="text-base font-light text-neutral-900 mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                        {item.name}
                      </h3>
                      <p className="text-neutral-500 text-sm">{item.price}</p>
                    </div>
                  </Link>
                </ScrollFade>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/products"
                className="inline-block text-sm uppercase tracking-wider text-neutral-900 border-b border-neutral-900 pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors"
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 lg:py-32 bg-[#E8E4DF]">
        <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <ScrollFade direction="left">
                <div className="text-center lg:text-left">
                  <h2 className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-4">About Us</h2>
                  <p className="text-3xl md:text-4xl font-light text-neutral-900 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
                    Crafted for Those<br />Who Appreciate Beauty
                  </p>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    At CASAVÉRA, we believe that furniture is more than function—it's an expression of how you live. Each piece in our collection is thoughtfully designed and meticulously crafted to bring elegance and comfort to your home.
                  </p>
                  <Link
                    href="/maison"
                    className="inline-block text-sm uppercase tracking-wider text-neutral-900 border-b border-neutral-900 pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </ScrollFade>
              
              <ScrollFade direction="right" delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=500&q=80&fit=crop"
                      alt="Interior"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg mt-8">
                    <Image
                      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=500&q=80&fit=crop"
                      alt="Interior"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </ScrollFade>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 lg:py-32 bg-[#E8E4DF]">
        <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <ScrollFade direction="left">
                <div className="text-center lg:text-left">
                  <h2 className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-4">Experience</h2>
                  <p className="text-3xl md:text-4xl font-light text-neutral-900 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
                    Luxury in<br />Every Detail
                  </p>
                  <div className="flex gap-12 mb-8 justify-center lg:justify-start">
                    <div className="text-center">
                      <p className="text-2xl font-light text-neutral-900">40+</p>
                      <p className="text-xs text-neutral-500">Years</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-light text-neutral-900">500+</p>
                      <p className="text-xs text-neutral-500">Products</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-light text-neutral-900">25K</p>
                      <p className="text-xs text-neutral-500">Clients</p>
                    </div>
                  </div>
                </div>
              </ScrollFade>
              
              <ScrollFade direction="right" delay={0.2}>
                <div className="relative aspect-video bg-neutral-200 rounded-xl overflow-hidden shadow-lg">
                  <video
                    ref={videoRef}
                    src="/videos/showcase.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                  />
                  <button
                    onClick={toggleMute}
                    className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 hover:bg-white flex items-center justify-center transition-all duration-300 shadow-lg rounded-full"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <svg className="w-5 h-5 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                    )}
                  </button>
                </div>
              </ScrollFade>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-300 py-16">
        <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div className="text-center md:text-left">
                <div className="flex items-baseline justify-center md:justify-start mb-6">
                  <span className="text-2xl text-white" style={{ fontFamily: "'Pinyon Script', cursive" }}>C</span>
                  <span className="text-base tracking-[0.15em] text-white" style={{ fontFamily: 'Georgia, serif' }}>ASAVÉRA</span>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Redefining luxury living through impeccable craftsmanship and timeless design.
                </p>
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-xs uppercase tracking-wider text-white mb-6">Customer Care</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Contact Us</a></li>
                  <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Shipping & Delivery</a></li>
                  <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Returns</a></li>
                </ul>
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-xs uppercase tracking-wider text-white mb-6">The Maison</h4>
                <ul className="space-y-3">
                  <li><a href="/maison" className="text-sm text-neutral-400 hover:text-white transition-colors">Our Story</a></li>
                  <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Sustainability</a></li>
                  <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Careers</a></li>
                </ul>
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-xs uppercase tracking-wider text-white mb-6">Newsletter</h4>
                <p className="text-sm text-neutral-400 mb-4">
                  Be the first to know about new collections.
                </p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="flex-1 bg-transparent border border-neutral-700 px-4 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors rounded-l-full"
                  />
                  <button className="px-4 py-2 bg-white text-neutral-900 text-sm hover:bg-neutral-200 transition-colors rounded-r-full">
                    Join
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t border-neutral-800 pt-8 text-center">
              <p className="text-xs text-neutral-500 uppercase tracking-wider">
                &copy; {new Date().getFullYear()} CASAVÉRA. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
