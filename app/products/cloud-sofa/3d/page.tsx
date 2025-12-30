'use client';

import Navigation from '../../../components/Navigation';
import ModelViewerWithLoader from '../../../components/ModelViewerWithLoader';
import Link from 'next/link';

// Product 3D View Page - Cloud Sofa
// Theme: Maison Luxe (p=#8b5e3c, bo=#00000014, b=#f7f5f2)
// Note: AR View option removed as requested

export default function CloudSofa3DPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#f7f5f2' }}>
      <Navigation />
      
      <div className="pt-32 pb-24 px-6 lg:px-16">
        <div className="max-w-[1920px] mx-auto">
          {/* Breadcrumbs */}
          <div className="mb-12">
            <Link href="/products/cloud-sofa" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
              HOME / LIVING / SOFAS / THE CLOUD / 3D VIEW
            </Link>
          </div>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-neutral-900">
              The Cloud Sofa
            </h1>
            <p className="text-lg text-neutral-700 font-light">
              Experience the texture and craftsmanship in 360 degrees.
            </p>
          </div>

          {/* 3D Viewer */}
          <div className="mb-12">
            <div className="aspect-square max-w-4xl mx-auto">
              <ModelViewerWithLoader modelPath="/models/sofa2.glb" />
            </div>
          </div>

          {/* Controls Info */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-8 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-lg border" style={{ borderColor: '#00000014' }}>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 13L6 13a4 4 0 01-4-4z" />
                </svg>
                <span className="text-sm text-neutral-700">Drag to rotate</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-sm text-neutral-700">Scroll to zoom</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
                <span className="text-sm text-neutral-700">Pan to move</span>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-sm font-medium text-neutral-900 mb-3 uppercase tracking-wider">
                  Dimensions
                </h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>Length: 240 cm</li>
                  <li>Depth: 98 cm</li>
                  <li>Height: 72 cm</li>
                  <li>Seat Height: 42 cm</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium text-neutral-900 mb-3 uppercase tracking-wider">
                  Materials
                </h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>Italian Bouclé Fabric</li>
                  <li>Solid White Oak Base</li>
                  <li>Variable-Density Memory Foam</li>
                </ul>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products/cloud-sofa"
                className="px-12 py-5 text-sm font-medium uppercase tracking-wider border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all text-center"
              >
                Back to Product
              </Link>
              <button 
                className="px-12 py-5 text-sm font-medium uppercase tracking-wider text-white transition-colors"
                style={{ backgroundColor: '#8b5e3c' }}
              >
                Add to Bag
              </button>
            </div>
          </div>
        </div>
      </div>

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

