'use client';

import Navigation from './components/Navigation';
import Link from 'next/link';
import ScrollFade from './components/ScrollFade';
import ParallaxSection from './components/ParallaxSection';
import HoverScaleImage from './components/HoverScaleImage';
import VideoPlayer from './components/VideoPlayer';
import Image from 'next/image';
import { ImagesSlider } from './components/ui/images-slider';
import { motion } from 'framer-motion';

// Landing Page 1 - AESTHETIQUE Style
// Theme: Lux Linen (p=#0b4d3b, bo=#00000014, b=#f7f5f2)

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#f7f5f2' }}>
      <Navigation />
      
      {/* Hero Section with Image Slider */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImagesSlider 
            className="h-full w-full"
            images={[
              "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&h=1080&q=85&fit=crop",
              "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&h=1080&q=85&fit=crop",
              "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&h=1080&q=85&fit=crop",
              "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&q=85&fit=crop",
            ]}
            overlay={true}
            overlayClassName="bg-gradient-to-b from-black/40 via-black/20 to-black/50"
            autoplay={true}
            direction="up"
          >
            <motion.div
              initial={{ opacity: 0, y: -80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="z-50 flex flex-col justify-center items-center"
            >
              <p className="label-sm mb-8 text-white/90">
                NEW COLLECTION 2025
              </p>
              <h1 className="heading-hero mb-10 text-white px-4">
                The Essence of Modern Living
              </h1>
              <Link
                href="/products"
                className="inline-block px-10 py-5 label-sm text-white transition-all duration-400 hover:translate-y-[-3px] hover:shadow-2xl"
                style={{ 
                  background: 'linear-gradient(135deg, #8B0000 0%, #A00000 100%)',
                  boxShadow: '0 4px 25px rgba(139, 0, 0, 0.35)'
                }}
              >
                Discover Collection
              </Link>
            </motion.div>
          </ImagesSlider>
        </div>
      </section>

      {/* Full-Width Landscape Image Banner */}
      <section className="relative h-[60vh] overflow-hidden">
        <HoverScaleImage
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&h=900&q=85&fit=crop"
          alt="Luxury Interior"
          className="w-full h-full"
          fill
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
            <ScrollFade direction="left">
              <p className="label-sm text-white/80 mb-4">Featured</p>
              <h2 className="heading-xl text-white mb-6 max-w-xl">
                Crafted for Those Who Appreciate the Extraordinary
              </h2>
              <Link
                href="/collections"
                className="inline-block px-8 py-4 label-sm text-white border-2 border-white/80 hover:bg-white hover:text-neutral-900 transition-all duration-400"
              >
                View Collections
              </Link>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* Product Spotlight Section */}
      <section className="py-24 lg:py-36 px-6 lg:px-12" style={{ backgroundColor: '#f7f5f2' }}>
        <div className="max-w-[1400px] mx-auto">
          <ScrollFade>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left - Product Image - Landscape orientation */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg overflow-hidden relative shadow-2xl">
                  <HoverScaleImage
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=900&q=85&fit=crop"
                    alt="Serenity Lounge Chair"
                    className="w-full h-full"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div 
                    className="absolute top-5 right-5 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white pointer-events-none z-10 rounded-sm" 
                    style={{ 
                      background: 'linear-gradient(135deg, #8B0000 0%, #A00000 100%)',
                      boxShadow: '0 4px 15px rgba(139, 0, 0, 0.3)'
                    }}
                  >
                    Interactive 3D View
                  </div>
                </div>
              </div>

              {/* Right - Product Details */}
              <div>
                <p className="label-sm mb-6" style={{ color: '#8B0000' }}>
                  Iconic Piece
                </p>
                <h2 className="heading-xl mb-8 text-neutral-900">
                  The Serenity Lounge Chair
                </h2>
                <p className="body-lg mb-10">
                  A masterpiece of comfort and elegance, this chair embodies the perfect balance of form and function. 
                  Crafted with premium Italian leather and solid oak, it represents the pinnacle of luxury seating.
                </p>
                <div className="space-y-6 mb-12 border-l-2 border-neutral-200 pl-6">
                  <div>
                    <p className="body-md font-semibold text-neutral-900 mb-1">Augmented Reality Ready</p>
                    <p className="body-sm text-neutral-600">Visualize this piece in your space instantly</p>
                  </div>
                  <div>
                    <p className="body-md font-semibold text-neutral-900 mb-1">Customizable Finishes</p>
                    <p className="body-sm text-neutral-600">12 premium leathers, 4 wood stains</p>
                  </div>
                </div>
                <Link
                  href="/products/1"
                  className="inline-block px-10 py-5 label-sm text-white transition-all duration-400 hover:translate-y-[-3px]"
                  style={{ 
                    background: 'linear-gradient(135deg, #8B0000 0%, #A00000 100%)',
                    boxShadow: '0 4px 25px rgba(139, 0, 0, 0.3)'
                  }}
                >
                  Configure Yours
                </Link>
              </div>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* Curated Collections Section */}
      <section className="py-24 lg:py-36 px-6 lg:px-12" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-[1400px] mx-auto">
          <ScrollFade delay={0.1}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <p className="label-sm mb-4" style={{ color: '#8B0000' }}>Explore</p>
                <h2 className="heading-xl text-neutral-900">
                  Curated Collections
                </h2>
              </div>
              <Link href="/collections" className="label-sm text-neutral-700 hover:text-[#8B0000] transition-colors duration-300 hover-underline">
                View All Categories
              </Link>
            </div>
          </ScrollFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Living Room - Landscape */}
            <ScrollFade delay={0.2}>
              <Link href="/products?category=living" className="group block">
                <div className="aspect-[16/10] rounded-lg overflow-hidden mb-6 relative shadow-lg">
                  <HoverScaleImage
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&h=750&q=85&fit=crop"
                    alt="Living Room Collection"
                    className="w-full h-full"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                </div>
                <h3 className="heading-md text-neutral-900 mb-2 group-hover:text-[#8B0000] transition-colors duration-300">
                  Living Room
                </h3>
                <p className="body-sm text-neutral-600">Sofas, Armchairs, Coffee Tables</p>
              </Link>
            </ScrollFade>

            {/* Dining - Landscape */}
            <ScrollFade delay={0.3}>
              <Link href="/products?category=dining" className="group block">
                <div className="aspect-[16/10] rounded-lg overflow-hidden mb-6 relative shadow-lg">
                  <HoverScaleImage
                    src="https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1200&h=750&q=85&fit=crop"
                    alt="Dining Collection"
                    className="w-full h-full"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                </div>
                <h3 className="heading-md text-neutral-900 mb-2 group-hover:text-[#8B0000] transition-colors duration-300">
                  Dining
                </h3>
                <p className="body-sm text-neutral-600">Tables, Chairs, Sideboards</p>
              </Link>
            </ScrollFade>

            {/* Bedroom - Landscape */}
            <ScrollFade delay={0.4}>
              <Link href="/products?category=bedroom" className="group block">
                <div className="aspect-[16/10] rounded-lg overflow-hidden mb-6 relative shadow-lg">
                  <HoverScaleImage
                    src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&h=750&q=85&fit=crop"
                    alt="Bedroom Collection"
                    className="w-full h-full"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                </div>
                <h3 className="heading-md text-neutral-900 mb-2 group-hover:text-[#8B0000] transition-colors duration-300">
                  Bedroom
                </h3>
                <p className="body-sm text-neutral-600">Beds, Nightstands, Dressers</p>
              </Link>
            </ScrollFade>

            {/* Office - Landscape */}
            <ScrollFade delay={0.5}>
              <Link href="/products?category=office" className="group block">
                <div className="aspect-[16/10] rounded-lg overflow-hidden mb-6 relative shadow-lg">
                  <HoverScaleImage
                    src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200&h=750&q=85&fit=crop"
                    alt="Office Collection"
                    className="w-full h-full"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                </div>
                <h3 className="heading-md text-neutral-900 mb-2 group-hover:text-[#8B0000] transition-colors duration-300">
                  Home Office
                </h3>
                <p className="body-sm text-neutral-600">Desks, Chairs, Shelving</p>
              </Link>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* Full-Width Landscape Feature */}
      <section className="relative h-[70vh] overflow-hidden">
        <HoverScaleImage
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&q=85&fit=crop"
          alt="Craftsmanship"
          className="w-full h-full"
          fill
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full pb-16 lg:pb-24">
            <ScrollFade direction="up">
              <p className="label-sm text-white/70 mb-4">Our Philosophy</p>
              <h2 className="heading-xl text-white mb-6 max-w-2xl">
                Where Timeless Elegance Meets Modern Sensibility
              </h2>
              <p className="body-lg text-white/80 max-w-xl mb-8">
                Every piece we create tells a story of exceptional craftsmanship, 
                sustainable materials, and designs that transcend generations.
              </p>
              <Link
                href="/maison"
                className="inline-block px-10 py-5 label-sm text-white border-2 border-white hover:bg-white hover:text-neutral-900 transition-all duration-400"
              >
                Discover Our Story
              </Link>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 lg:py-36 px-6 lg:px-12" style={{ backgroundColor: '#f7f5f2' }}>
        <div className="max-w-[1400px] mx-auto">
          <ScrollFade delay={0.2}>
            <div className="text-center mb-16">
              <p className="label-sm mb-4" style={{ color: '#8B0000' }}>Watch</p>
              <h2 className="heading-xl text-neutral-900 mb-6">
                Experience Luxury
              </h2>
              <p className="body-lg max-w-2xl mx-auto">
                Discover the craftsmanship and elegance that defines our collections
              </p>
            </div>
          </ScrollFade>
          <ScrollFade delay={0.3}>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
              <VideoPlayer
                src="/videos/showcase.mp4"
                className="w-full h-full"
                autoplay={true}
                loop={true}
                muted={true}
                controls={false}
              />
              {/* Fallback if video doesn't exist */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-20 h-20 mx-auto mb-6 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="label-sm text-white/50 mb-2">Video Coming Soon</p>
                  <p className="body-sm text-white/30">Place video at: /public/videos/showcase.mp4</p>
                </div>
              </div>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-300 py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-16">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">AESTHETIQUE</h3>
              <p className="body-sm text-neutral-400 leading-relaxed mb-6">
                Redefining luxury living through impeccable craftsmanship and timeless design. Established 2025.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:border-white hover:text-white transition-colors duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:border-white hover:text-white transition-colors duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:border-white hover:text-white transition-colors duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="label-sm text-white mb-6">Customer Care</h4>
              <ul className="space-y-4">
                <li><a href="/contact" className="body-sm text-neutral-400 hover:text-white transition-colors duration-300">Contact Us</a></li>
                <li><a href="#" className="body-sm text-neutral-400 hover:text-white transition-colors duration-300">Shipping & Delivery</a></li>
                <li><a href="#" className="body-sm text-neutral-400 hover:text-white transition-colors duration-300">Returns</a></li>
                <li><a href="#" className="body-sm text-neutral-400 hover:text-white transition-colors duration-300">Book an Appointment</a></li>
              </ul>
            </div>
            <div>
              <h4 className="label-sm text-white mb-6">The Maison</h4>
              <ul className="space-y-4">
                <li><a href="/maison" className="body-sm text-neutral-400 hover:text-white transition-colors duration-300">Our Story</a></li>
                <li><a href="#" className="body-sm text-neutral-400 hover:text-white transition-colors duration-300">Sustainability</a></li>
                <li><a href="#" className="body-sm text-neutral-400 hover:text-white transition-colors duration-300">Careers</a></li>
                <li><a href="#" className="body-sm text-neutral-400 hover:text-white transition-colors duration-300">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="label-sm text-white mb-6">Newsletter</h4>
              <p className="body-sm text-neutral-400 mb-6">
                Be the first to know about new collections and exclusive offers.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 bg-transparent border border-neutral-700 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                />
                <button className="px-6 py-3 bg-white text-neutral-900 text-sm font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="label-xs text-neutral-500">
              &copy; {new Date().getFullYear()} AESTHETIQUE. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="label-xs text-neutral-500 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="label-xs text-neutral-500 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
