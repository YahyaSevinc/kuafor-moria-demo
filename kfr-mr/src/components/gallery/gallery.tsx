"use client"

import React, { useState } from 'react';
import Image from 'next/image';

export default function Galeri() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Örnek görsel URL'leri - kendi görsellerinizi buraya ekleyebilirsiniz
  const galleryImages = [
    "/1.png",
    "/1.png",
    "/1.png",
    "/1.png",
    "/1.png",
    "/1.png"
  ];

  const openModal = (imageIndex: number) => {
    setSelectedImage(imageIndex);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 pt-16 pb-16">
      {/* Galeri Başlığı */}
      <div className="mb-8">
      <div 
            className="sm:px-6 py-2 sm:py-3 border border-gray-300 text-gray-700 rounded-full text-xs sm:text-sm font-medium transform transition-all duration-300 hover:scale-110 hover:shadow-lg"
            style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
          >
            Galeri
          </div>
      </div>

      {/* Ana Başlık */}
      <div className="text-center mb-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          İşlerimizden Detaylı Kareler
        </h1>
        
        {/* Açıklama Metni */}
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Kullanıcı deneyimi müşteri deneyimi bizim için her şeydir her şeyi
          <br />
          sizler için ve sizlerin deneyimi için yapıyoruz
        </p>
      </div>

      {/* Butonlar */}
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
        {/* Saç Kesimi - Aktif Buton */}
        <button className="px-8 py-3 bg-[#5D38DE] text-white font-medium rounded-full hover:bg-[#5432CC] transition-colors duration-200 shadow-lg">
          Saç Kesimi
        </button>

        {/* Makyaj */}
        <button className="px-8 py-3 bg-gray-100 text-gray-600 font-medium rounded-full hover:bg-gray-200 transition-colors duration-200">
          Makyaj
        </button>

        {/* Cilt Bakımı */}
        <button className="px-8 py-3 bg-gray-100 text-gray-600 font-medium rounded-full hover:bg-gray-200 transition-colors duration-200">
          Cilt Bakımı
        </button>

        {/* Özel Gün */}
        <button className="px-8 py-3 bg-gray-100 text-gray-600 font-medium rounded-full hover:bg-gray-200 transition-colors duration-200">
          Özel Gün
        </button>
      </div>
      {/* Galeri Grid */}
      <div className="mt-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer group"
              onClick={() => openModal(index)}
            >
              <Image
                src={image}
                alt={`Galeri resmi ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                width={500}
                height={500}
              />
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/80 bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl font-bold z-10"
            >
              ×
            </button>
            <Image
              src={galleryImages[selectedImage]}
              alt={`Galeri resmi ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
              width={700}
              height={700}
            />
          </div>
        </div>
      )}
    </div>
  );
}