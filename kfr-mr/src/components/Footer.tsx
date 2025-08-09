'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Ana footer içeriği */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6 sm:mb-8">
          {/* Logo ve açıklama - Sol taraf */}
          <div className="col-span-1 text-center md:text-left">
            <div className="mb-4 sm:mb-6">
              <div className="flex flex-col items-center md:items-start">
                <div className="w-36 h-18 sm:w-40 sm:h-20 lg:w-46 lg:h-22 relative">
                  <Image
                    src="/logo.png"
                    alt="Demo Kuaför Logo"
                    fill
                    className="object-contain transition-all duration-300 hover:scale-105"
                    priority
                  />
                </div>
              </div>
            </div>
            <p className="font-inter font-normal text-gray-600 text-xs sm:text-sm leading-relaxed">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
            </p>
          </div>

          {/* Boş alan - Orta */}
          <div className="col-span-1 hidden md:block"></div>

          {/* Navigation linkleri - Sağ taraf */}
          <div className="col-span-1">
            <div className="grid grid-cols-2 gap-6 sm:gap-8 justify-items-center md:justify-items-end">
              {/* Kurumsal linkleri */}
              <div className="text-center md:text-left">
                <h3 className="font-inter font-normal text-black text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6">
                  Kurumsal
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li>
                    <Link 
                      href="#anasayfa" 
                      className="font-inter font-normal text-gray-600 hover:text-black transition-colors duration-200 block text-sm sm:text-base"
                    >
                      Anasayfa
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#hakkimizda" 
                      className="font-inter font-normal text-gray-600 hover:text-black transition-colors duration-200 block text-sm sm:text-base"
                    >
                      Hakkımızda
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#hizmetlerimiz" 
                      className="font-inter font-normal text-gray-600 hover:text-black transition-colors duration-200 block text-sm sm:text-base"
                    >
                      Hizmetlerimiz
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Destek linkleri */}
              <div className="text-center md:text-left">
                <h3 className="font-inter font-normal text-black text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6">
                  Destek
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li>
                    <Link 
                      href="#bloglar" 
                      className="font-inter font-normal text-gray-600 hover:text-black transition-colors duration-200 block text-sm sm:text-base"
                    >
                      Bloglar
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#iletisim" 
                      className="font-inter font-normal text-gray-600 hover:text-black transition-colors duration-200 block text-sm sm:text-base"
                    >
                      İletişim
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Alt çizgi */}
        <div className="border-t border-gray-200 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="mb-4 md:mb-0">
              <p className="font-inter font-normal text-gray-600 text-xs sm:text-sm text-center md:text-left">
                © Kuaför Tüm Hakları Saklıdır.
              </p>
            </div>

            {/* Sosyal medya ikonları */}
            <div className="flex space-x-3 sm:space-x-4">
              {[1, 2, 3, 4].map((index) => (
                <Link 
                  key={index}
                  href="#instagram" 
                  className="w-5 h-5 sm:w-6 sm:h-6 hover:opacity-70 transition-opacity duration-200"
                >
                  <svg 
                    className="w-5 h-5 sm:w-6 sm:h-6 text-black" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
