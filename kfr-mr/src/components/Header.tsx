'use client';

import { Open_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { animated, } from '@react-spring/web';
import { use3DAnimation } from "../hooks/use3DAnimation";

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-open-sans',
});

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { ref: logoRef, springProps: logoSpring } = use3DAnimation(100);
  const { ref: navRef, springProps: navSpring } = use3DAnimation(200);
  const { ref: buttonRef, springProps: buttonSpring } = use3DAnimation(300);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Logo alanı */}
          <animated.div 
            ref={logoRef}
            className="flex-shrink-0 transform transition-all duration-300 hover:scale-105"
            style={logoSpring}
          >
            <Link href="/">
              <div className="w-32 h-16 sm:w-36 sm:h-18 lg:w-40 lg:h-20 relative">
                <Image
                  src="/logo.png"
                  alt="Demo Kuaför Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </animated.div>

          {/* Navigation menü - Desktop */}
          <animated.nav 
            ref={navRef}
            className="hidden md:flex space-x-6 lg:space-x-8"
            style={navSpring}
          >
            <Link 
              href="/about-us" 
              className={`${openSans.variable} font-normal text-base lg:text-lg text-black hover:text-[#5D38DE] transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}
            >
              Hakkımızda
            </Link>
            <Link 
              href="/services" 
              className={`${openSans.variable} font-normal text-base lg:text-lg text-black hover:text-[#5D38DE] transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}
            >
              Hizmetlerimiz
            </Link>
            <Link 
              href="/gallery" 
              className={`${openSans.variable} font-normal text-base lg:text-lg text-black hover:text-[#5D38DE] transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}
            >
              Galeri
            </Link>
            <Link 
              href="/blog" 
              className={`${openSans.variable} font-normal text-base lg:text-lg text-black hover:text-[#5D38DE] transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className={`${openSans.variable} font-normal text-base lg:text-lg text-black hover:text-[#5D38DE] transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}
            >
              İletişim
            </Link>
          </animated.nav>

          {/* Randevu Al butonu - Desktop */}
          <animated.div 
            ref={buttonRef}
            className="hidden md:flex flex-shrink-0"
            style={buttonSpring}
          >
            <button 
              className={`${openSans.variable} flex items-center gap-2 font-normal bg-[#5D38DE] text-white text-base lg:text-lg px-6 lg:px-8 py-2 rounded-full hover:bg-[#512CD4] transition-all duration-300 transform hover:scale-105 hover:shadow-lg transform perspective-1000`}
              onMouseEnter={(e) => {
                const target = e.currentTarget;
                target.style.transform = 'perspective(1000px) rotateX(2deg) rotateY(2deg) scale(1.05)';
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget;
                target.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
              }}
            >
              Randevu Al
              <svg width="20" height="20" className="sm:w-6 sm:h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
            </button>
          </animated.div>

          {/* Mobile menu button */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#5D38DE] z-50 relative transform transition-all duration-300 hover:scale-110"
            >
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Full screen overlay */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden fixed inset-0 bg-white z-40`}>
        {/* Header with logo and border */}
        <div className="border-b border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
              {/* Logo alanı */}
              <div className="flex-shrink-0">
                <Link href="/">
                  <div className="w-32 h-16 sm:w-36 sm:h-18 lg:w-40 lg:h-20 relative">
                    <Image
                      src="/logo.png"
                      alt="Demo Kuaför Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="flex-shrink-0">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#5D38DE] transform transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Menu content */}
        <div className="flex-col h-full pt-14 pb-10 px-4">
          <div className="flex-1 flex flex-col justify-center">
            <Link 
              href="/about-us" 
              className={`${openSans.variable} font-normal text-2xl text-black hover:text-[#5D38DE] text-center py-4 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hakkımızda
            </Link>
            <Link 
              href="/services" 
              className={`${openSans.variable} font-normal text-2xl text-black hover:text-[#5D38DE] text-center py-4 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hizmetlerimiz
            </Link>
            <Link 
              href="/gallery" 
              className={`${openSans.variable} font-normal text-2xl text-black hover:text-[#5D38DE] text-center py-4 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Galeri
            </Link>
            <Link 
              href="/blog" 
              className={`${openSans.variable} font-normal text-2xl text-black hover:text-[#5D38DE] text-center py-4 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className={`${openSans.variable} font-normal text-2xl text-black hover:text-[#5D38DE] text-center py-4 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              İletişim
            </Link>
          </div>
          <div className="pt-8 border-t border-gray-200">
            <button 
              className={`${openSans.variable} font-normal bg-[#5D38DE] text-white text-xl w-full px-6 py-4 rounded-full hover:bg-[#512CD4] transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
            >
              Randevu Al
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 