'use client';

import { Open_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-open-sans',
});

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Logo alanı */}
          <div className="flex-shrink-0">
            <div className="w-32 h-16 sm:w-36 sm:h-18 lg:w-40 lg:h-20 relative">
              <Image
                src="/logo.png"
                alt="Demo Kuaför Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Navigation menü - Desktop */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <Link 
              href="#hakkimizda" 
              className={`${openSans.variable} font-normal text-base lg:text-lg text-black hover:text-[#5D38DE] transition-colors duration-200`}
            >
              Hakkımızda
            </Link>
            <Link 
              href="#hizmetlerimiz" 
              className={`${openSans.variable} font-normal text-base lg:text-lg text-black hover:text-[#5D38DE] transition-colors duration-200`}
            >
              Hizmetlerimiz
            </Link>
            <Link 
              href="#galeri" 
              className={`${openSans.variable} font-normal text-base lg:text-lg text-black hover:text-[#5D38DE] transition-colors duration-200`}
            >
              Galeri
            </Link>
            <Link 
              href="#blog" 
              className={`${openSans.variable} font-normal text-base lg:text-lg text-black hover:text-[#5D38DE] transition-colors duration-200`}
            >
              Blog
            </Link>
            <Link 
              href="#iletisim" 
              className={`${openSans.variable} font-normal text-base lg:text-lg text-black hover:text-[#5D38DE] transition-colors duration-200`}
            >
              İletişim
            </Link>
          </nav>

          {/* Randevu Al butonu - Desktop */}
          <div className="hidden md:flex flex-shrink-0">
            <button 
              className={`${openSans.variable} font-normal bg-[#5D38DE] text-white text-base lg:text-lg px-4 lg:px-6 py-2 rounded-full hover:bg-[#512CD4] transition-colors duration-200`}
            >
              Randevu Al
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#5D38DE] z-50 relative"
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
                <div className="w-32 h-16 sm:w-36 sm:h-18 lg:w-40 lg:h-20 relative">
                  <Image
                    src="/logo.png"
                    alt="Demo Kuaför Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="flex-shrink-0">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#5D38DE]"
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
              href="#hakkimizda" 
              className={`${openSans.variable} font-normal text-2xl text-black hover:text-[#5D38DE] text-center py-4 transition-colors duration-200`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hakkımızda
            </Link>
            <Link 
              href="#hizmetlerimiz" 
              className={`${openSans.variable} font-normal text-2xl text-black hover:text-[#5D38DE] text-center py-4 transition-colors duration-200`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hizmetlerimiz
            </Link>
            <Link 
              href="#galeri" 
              className={`${openSans.variable} font-normal text-2xl text-black hover:text-[#5D38DE] text-center py-4 transition-colors duration-200`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Galeri
            </Link>
            <Link 
              href="#blog" 
              className={`${openSans.variable} font-normal text-2xl text-black hover:text-[#5D38DE] text-center py-4 transition-colors duration-200`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="#iletisim" 
              className={`${openSans.variable} font-normal text-2xl text-black hover:text-[#5D38DE] text-center py-4 transition-colors duration-200`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              İletişim
            </Link>
          </div>
          <div className="pt-8 border-t border-gray-200">
            <button 
              className={`${openSans.variable} font-normal bg-[#5D38DE] text-white text-xl w-full px-6 py-4 rounded-full hover:bg-[#512CD4] transition-colors duration-200`}
            >
              Randevu Al
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 