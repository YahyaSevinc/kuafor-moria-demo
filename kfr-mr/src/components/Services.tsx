"use client";
import { useSpring, animated, config } from '@react-spring/web';
import Image from "next/image";
import { use3DAnimation, useFloatingAnimation } from "../hooks/use3DAnimation";

interface ServicesProps {
  imageSrc?: string;
  imageAlt?: string;
}

export default function Services({ 
  imageSrc = "/1.png", 
  imageAlt = "Saç bakım hizmetleri" 
}: ServicesProps) {
  const { ref: mainRef, springProps: mainSpring } = use3DAnimation(200);
  const { ref: badgeRef, springProps: badgeSpring } = use3DAnimation(400);
  const { ref: headingRef, springProps: headingSpring } = use3DAnimation(600);

  const services = [
    {
      title: "Saç Bakım",
      subtitle: "Detaylı Saç Bakım",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority",
      image: imageSrc
    },
    {
      title: "Saç Bakım",
      subtitle: "Detaylı Saç Bakım", 
      description: "There are many variations of passages of Lorem Ipsum available, but the majority",
      image: imageSrc
    },
    {
      title: "Saç Bakım",
      subtitle: "Detaylı Saç Bakım",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority", 
      image: imageSrc
    }
  ];

  return (
    <section ref={mainRef} id="hizmetlerimiz" className="py-8 sm:py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Design Element */}
        <animated.div 
          ref={badgeRef}
          className="flex justify-center mb-6 sm:mb-8"
          style={badgeSpring}
        >
          <div 
            className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 text-gray-700 rounded-full text-xs sm:text-sm font-medium transform transition-all duration-300 hover:scale-110 hover:shadow-lg"
            style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
          >
            Hizmetlerimiz
          </div>
        </animated.div>

        {/* Main Headings */}
        <animated.div 
          ref={headingRef}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          style={headingSpring}
        >
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-2 sm:mb-4 leading-tight px-4"
            style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
          >
            Fenasal İşlerimiz Var
          </h2>
          <h3 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-500 font-medium"
            style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
          >
            Hizmetlerimiz
          </h3>
        </animated.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const { ref: serviceRef, springProps: serviceSpring } = use3DAnimation(800 + index * 200);
            
            return (
              <animated.div 
                key={index}
                ref={serviceRef}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 transform perspective-1000"
                style={{
                  ...serviceSpring,
                  transform: `${serviceSpring.transform} perspective(1000px)`,
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget;
                  target.style.transform = 'perspective(1000px) rotateX(5deg) rotateY(5deg) scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget;
                  target.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
                }}
              >
                {/* Service Image */}
                <div className="relative h-48 sm:h-56 md:h-64 bg-black overflow-hidden">
                  <Image
                    src={service.image}
                    alt={imageAlt}
                    fill
                    className="object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                  {/* 3D Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Service Content */}
                <div className="p-4 sm:p-6 bg-white">
                  <p 
                    className="text-xs sm:text-sm text-gray-600 mb-2"
                    style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
                  >
                    {service.title}
                  </p>
                  <h4 
                    className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3"
                    style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
                  >
                    {service.subtitle}
                  </h4>
                  <p 
                    className="text-gray-600 text-xs sm:text-sm leading-relaxed"
                    style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
                  >
                    {service.description}
                  </p>
                </div>
              </animated.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 