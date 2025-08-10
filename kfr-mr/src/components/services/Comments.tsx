"use client"

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function TestimonialsComponent() {
  const [headerInView, setHeaderInView] = useState(false);
  const [testimonialsInView, setTestimonialsInView] = useState(false);
  const [statisticsInView, setStatisticsInView] = useState(false);
  const [customerCount, setCustomerCount] = useState(0);
  const [serviceCount, setServiceCount] = useState(0);
  const [branchCount, setBranchCount] = useState(0);
  
  const headerRef = useRef(null);
  const testimonialsRef = useRef(null);
  const statisticsRef = useRef(null);

  // Header Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeaderInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Testimonials Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setTestimonialsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Statistics Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setStatisticsInView(entry.isIntersecting);
        if (!entry.isIntersecting) {
          // Reset counters when out of view
          setCustomerCount(0);
          setServiceCount(0);
          setBranchCount(0);
        }
      },
      { threshold: 0.5 }
    );

    if (statisticsRef.current) {
      observer.observe(statisticsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter animations - reset and restart when in view
  useEffect(() => {
    if (statisticsInView) {
      // Reset counters first
      setCustomerCount(0);
      setServiceCount(0);
      setBranchCount(0);

      // Start animations after a brief delay
      setTimeout(() => {
        // 100% animation
        const customerTimer = setInterval(() => {
          setCustomerCount(prev => {
            if (prev >= 100) {
              clearInterval(customerTimer);
              return 100;
            }
            return prev + 2;
          });
        }, 30);

        // 24+ animation
        const serviceTimer = setInterval(() => {
          setServiceCount(prev => {
            if (prev >= 24) {
              clearInterval(serviceTimer);
              return 24;
            }
            return prev + 1;
          });
        }, 60);

        // 18+ animation
        const branchTimer = setInterval(() => {
          setBranchCount(prev => {
            if (prev >= 18) {
              clearInterval(branchTimer);
              return 18;
            }
            return prev + 1;
          });
        }, 80);

        return () => {
          clearInterval(customerTimer);
          clearInterval(serviceTimer);
          clearInterval(branchTimer);
        };
      }, 200);
    }
  }, [statisticsInView]);

  const testimonials = [
    {
      id: 1,
      text: "Yüz hatlarınıza, saç tipinize ve stilinize uygun özel kesim teknikleriyle, tarzınızı en iyi şekilde yansıtmanıza yardımcı oluyorlar.",
      name: "Rabia Sönmez",
      position: "Saç Bakım Hizmeti Aldı",
      image: "/1.png"
    },
    {
      id: 2,
      text: "Yüz hatlarınıza, saç tipinize ve stilinize uygun özel kesim teknikleriyle, tarzınızı en iyi şekilde yansıtmanıza yardımcı oluyorlar.",
      name: "Rabia Sönmez",
      position: "Saç Bakım Hizmeti Aldı",
      image: "/1.png"
    },
    {
      id: 3,
      text: "Yüz hatlarınıza, saç tipinize ve stilinize uygun özel kesim teknikleriyle, tarzınızı en iyi şekilde yansıtmanıza yardımcı oluyorlar.",
      name: "Rabia Sönmez",
      position: "Saç Bakım Hizmeti Aldı",
      image: "/1.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            headerInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className={`inline-block bg-[#F1EDFF] text-[#623EDF] px-4 py-2 rounded-full text-sm font-medium mb-6 transition-all duration-700 delay-200 ${
            headerInView 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95'
          }`}>
            İstatistikler
          </div>
          <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-800 delay-300 ${
            headerInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-6'
          }`}>
            Kullanıcılarımız Neler Diyor
          </h1>
          <p className={`text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed transition-all duration-900 delay-500 ${
            headerInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}>
            Kullanıcı deneyimi müşteri deneyimi bizim için her şeydir her şeyi 
            sizler için ve sizlerin deneyimi için yapıyoruz
          </p>
        </div>

        {/* Testimonial Cards */}
        <div ref={testimonialsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`
                relative p-8 rounded-3xl text-white text-center shadow-lg transform transition-all duration-300 hover:scale-105
                ${index === 0 ? 'bg-gradient-to-b from-[#7682FF] to-[#ffffff]' : ''}
                ${index === 1 ? 'bg-gradient-to-b from-[#7682FF] to-[#ffffff] lg:scale-110 hover:scale-115' : ''}
                ${index === 2 ? 'bg-gradient-to-b from-[#7682FF] to-[#ffffff]' : ''}
                ${testimonialsInView 
                  ? `opacity-100 translate-y-0 delay-${index * 100}` 
                  : 'opacity-0 translate-y-12'
                }
              `}
              style={{ 
                transitionDelay: testimonialsInView ? `${index * 100}ms` : '0ms'
              }}
            >
              {/* Profile Image */}
              <div className="flex justify-center mb-6">
                <div className={`w-20 h-20 rounded-full overflow-hidden border-4 border-white/20 shadow-lg transition-all duration-500 ${
                  testimonialsInView 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-75'
                }`}
                style={{ 
                  transitionDelay: testimonialsInView ? `${index * 200 + 300}ms` : '0ms'
                }}>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Testimonial Text */}
              <p className={`text-black/65 leading-relaxed mb-8 text-sm transition-all duration-600 ${
                testimonialsInView 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-4'
              }`}
              style={{ 
                transitionDelay: testimonialsInView ? `${index * 200 + 500}ms` : '0ms'
              }}>
                {testimonial.text}
              </p>

              {/* Name and Position */}
              <div className={`transition-all duration-600 ${
                testimonialsInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ 
                transitionDelay: testimonialsInView ? `${index * 200 + 700}ms` : '0ms'
              }}>
                <h3 className="text-xl font-bold text-black mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-black/65 text-sm">
                  {testimonial.position}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className={`absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full transition-all duration-500 ${
                testimonialsInView 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-0'
              }`}
              style={{ 
                transitionDelay: testimonialsInView ? `${index * 200 + 900}ms` : '0ms'
              }}></div>
              <div className={`absolute top-8 right-8 w-1 h-1 bg-white/20 rounded-full transition-all duration-500 ${
                testimonialsInView 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-0'
              }`}
              style={{ 
                transitionDelay: testimonialsInView ? `${index * 200 + 1000}ms` : '0ms'
              }}></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className={`text-center transition-all duration-800 ${
          testimonialsInView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
        style={{ 
          transitionDelay: testimonialsInView ? '800ms' : '0ms'
        }}>
          <button className="bg-gradient-to-r from-[#5D38DE] to-[#5432CC] hover:from-[#5432CC] hover:to-[#4323B7] text-white font-semibold py-3 px-8 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105">
            Tümünü Gör
          </button>
        </div>

        {/* Statistics Section */}
        <div 
          ref={statisticsRef} 
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transition-all duration-1000 ${
            statisticsInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className={`text-center py-8 transition-all duration-800 delay-200 ${
            statisticsInView 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-8'
          }`}>
            <div className="text-6xl md:text-7xl font-black text-gray-900 mb-2">
              {customerCount}%
            </div>
            <div className="text-gray-600 text-lg">
              Müşteri Güvencesi
            </div>
          </div>
          
          <div className={`text-center py-8 border-l border-r border-gray-200 md:border-l md:border-r transition-all duration-800 delay-400 ${
            statisticsInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-6xl md:text-7xl font-black text-gray-900 mb-2">
              {serviceCount}+
            </div>
            <div className="text-gray-600 text-lg">
              Farklı Hizmet
            </div>
          </div>
          
          <div className={`text-center py-8 transition-all duration-800 delay-600 ${
            statisticsInView 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-8'
          }`}>
            <div className="text-6xl md:text-7xl font-black text-gray-900 mb-2">
  {`${branchCount}+`}
</div>
<div className="text-gray-600 text-lg">
  &apos;den Fazla Şube
</div>
          </div>
        </div>
      </div>
    </div>
  );
}