'use client';

import Navigation from '../components/Navigation';
import ScrollFade from '../components/ScrollFade';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function MaisonPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f3]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&h=1080&q=85&fit=crop"
            alt="The Maison"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 text-center px-8"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-8">Est. 1984</p>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-8" style={{ fontFamily: 'Georgia, serif' }}>
            THE MAISON
          </h1>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            Where timeless elegance meets modern sensibility. Discover the story behind our craft.
          </p>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 lg:py-32 bg-[#f8f6f3]">
        <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <ScrollFade>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="text-center lg:text-left">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#8B0000] mb-6">Our Philosophy</p>
                  <h2 className="text-3xl md:text-4xl font-light text-neutral-900 mb-6 italic" style={{ fontFamily: 'Georgia, serif' }}>
                    Silence in Design
                  </h2>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    True luxury lies not in excess, but in subtraction. We believe that the most profound 
                    statements are made through restraint. Each piece in our collection is a meditation on 
                    the essential.
                  </p>
                  <p className="text-neutral-500 leading-relaxed text-sm">
                    Our design philosophy centers on the harmony between natural materials and modern engineering.
                    Every curve, every joint, every surface is considered with the utmost intention.
                  </p>
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1000&q=80"
                    alt="Design Philosophy"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-white">
        <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <ScrollFade>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-light italic text-neutral-900 leading-relaxed mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                  "To design is to communicate clearly by whatever means you can control or master."
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  — Alessandro Rossi, Founder
                </p>
              </div>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* Mastery Section */}
      <section className="py-24 lg:py-32 bg-[#f8f6f3]">
        <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <ScrollFade>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg order-2 lg:order-1">
                  <Image
                    src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1000&q=80"
                    alt="Craftsmanship"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2 text-center lg:text-left">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#8B0000] mb-6">The Savoir-Faire</p>
                  <h2 className="text-3xl md:text-4xl font-light text-neutral-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                    Mastery of Material
                  </h2>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    Behind every piece lies generations of expertise. Our artisans bring decades of refined 
                    skill to each creation. We hand-select every slab of Italian travertine, every plank 
                    of American walnut.
                  </p>
                  <p className="text-neutral-500 leading-relaxed text-sm">
                    Our production runs are intentionally limited. We believe in the value of time,
                    in the power of patience, and in the virtue of doing things properly.
                  </p>
                </div>
              </div>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* Collections Preview */}
      <section className="py-24 lg:py-32 bg-white">
        <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <ScrollFade>
              <div className="text-center mb-16">
                <p className="text-xs uppercase tracking-[0.3em] text-[#8B0000] mb-6">Our Collections</p>
                <h2 className="text-3xl md:text-4xl font-light italic text-neutral-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  Explore Our World
                </h2>
                <p className="text-neutral-600 max-w-xl mx-auto">
                  Discover the craftsmanship and artistry behind each piece.
                </p>
              </div>
            </ScrollFade>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Living', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=800&q=80&fit=crop' },
                { title: 'Dining', img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=800&q=80&fit=crop' },
                { title: 'Bedroom', img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=800&q=80&fit=crop' },
              ].map((item, idx) => (
                <ScrollFade key={item.title} delay={idx * 0.15}>
                  <Link href="/products" className="group block">
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 shadow-md">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                    </div>
                    <h3 className="text-xl font-light text-neutral-900 text-center group-hover:text-[#8B0000] transition-colors" style={{ fontFamily: 'Georgia, serif' }}>
                      {item.title}
                    </h3>
                  </Link>
                </ScrollFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-24 lg:py-32 bg-[#f8f6f3]">
        <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <ScrollFade>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div>
                  <h3 className="text-xl font-light text-neutral-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>Rarity</h3>
                  <p className="text-sm text-neutral-600">
                    Creating objects of desire that stand the test of time, not trends.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-light text-neutral-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>Integrity</h3>
                  <p className="text-sm text-neutral-600">
                    Honest construction where assembly is as beautiful as the form.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-light text-neutral-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>Sustainability</h3>
                  <p className="text-sm text-neutral-600">
                    A promise to leave a lighter footprint for generations to come.
                  </p>
                </div>
              </div>
            </ScrollFade>
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
                  Redefining luxury living with sustainable materials and timeless design.
                </p>
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-xs uppercase tracking-wider text-white mb-6">Customer Care</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Contact Us</a></li>
                  <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Shipping & Returns</a></li>
                  <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-xs uppercase tracking-wider text-white mb-6">The Maison</h4>
                <ul className="space-y-3">
                  <li><a href="/maison" className="text-sm text-neutral-400 hover:text-white transition-colors">Our Story</a></li>
                  <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Designers</a></li>
                  <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Careers</a></li>
                </ul>
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-xs uppercase tracking-wider text-white mb-6">Social</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Instagram</a></li>
                  <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Pinterest</a></li>
                  <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">LinkedIn</a></li>
                </ul>
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
