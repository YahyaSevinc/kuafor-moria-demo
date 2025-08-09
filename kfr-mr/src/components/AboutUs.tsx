"use client";
import {animated } from '@react-spring/web';
import Image from 'next/image';
import { use3DAnimation } from "../hooks/use3DAnimation";

interface AboutUsProps {
  imageSrc: string;
  imageAlt: string;
}

export default function AboutUs({ imageSrc, imageAlt }: AboutUsProps) {
  const { ref: mainRef, springProps: mainSpring } = use3DAnimation(200);
  const { ref: titleRef, springProps: titleSpring } = use3DAnimation(400);
  const { ref: subtitleRef, springProps: subtitleSpring } = use3DAnimation(600);
  const { ref: imageRef, springProps: imageSpring } = use3DAnimation(800);
  const { ref: contentRef, springProps: contentSpring } = use3DAnimation(1000);

  return (
    <section ref={mainRef} id="hakkimizda" className="py-8 sm:py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title Section - Side by side */}
        <animated.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-8 sm:mb-12 lg:mb-16 items-center justify-center"
          style={mainSpring}
        >
          <animated.div 
            ref={titleRef}
            className="text-center lg:text-right"
            style={titleSpring}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-black mb-4 font-spectral">
              Kuaför
            </h1>
          </animated.div>
          <animated.div 
            className="text-center lg:text-left"
            style={titleSpring}
          >
            <p className="text-sm sm:text-base text-gray-600 font-spectral leading-relaxed w-full lg:w-2/3 mx-auto lg:mx-0">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English.
            </p>
          </animated.div>
        </animated.div>

        {/* Subtitle */}
        <animated.div 
          ref={subtitleRef}
          className="text-center mb-8 sm:mb-12"
          style={subtitleSpring}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-black font-spectral">
            Hakkımızda
          </h2>
        </animated.div>

        {/* Main Image Section */}
        <animated.div 
          ref={imageRef}
          className="mb-8 sm:mb-12 lg:mb-16"
          style={imageSpring}
        >
          <animated.div 
            className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] overflow-hidden rounded-2xl sm:rounded-3xl group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            style={{
              transform: `${imageSpring.transform} perspective(1000px)`,
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget;
              target.style.transform = 'perspective(1000px) rotateX(3deg) rotateY(3deg) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget;
              target.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
            }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              sizes="100vw"
            />
            {/* Black overlay with 25% opacity */}
            <div className="absolute inset-0 bg-black opacity-25"></div>
            {/* 3D Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </animated.div>
        </animated.div>

        {/* Three Column Content Section */}
        <animated.div 
          ref={contentRef}
          className="grid grid-cols-2 md:grid-cols-12 gap-6 sm:gap-8 bg-white"
          style={contentSpring}
        >
          {/* Left Column - Kuruluş (2/12) */}
          <animated.div 
            className="md:col-span-2 text-center md:text-left transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            style={{
              ...contentSpring,
              transform: `${contentSpring.transform} perspective(1000px)`,
            }}
          >
            <h3 className="text-xl sm:text-2xl font-medium text-gray-700 mb-2 font-spectral">
              Kuruluş
            </h3>
            <p className="text-lg sm:text-xl text-black font-spectral">
              2022
            </p>
          </animated.div>

          {/* Middle Column - Konum (4/12) */}
          <animated.div 
            className="md:col-span-4 text-center md:text-left transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            style={{
              ...contentSpring,
              transform: `${contentSpring.transform} perspective(1000px)`,
            }}
          >
            <h3 className="text-xl sm:text-2xl font-medium text-gray-700 mb-4 font-spectral">
              Konum
            </h3>
            <p className="text-black leading-relaxed font-spectral text-sm sm:text-base">
            BAKIRCILAR SANAYİ SİTESİ EFSANE SOKAK NO 13 KONYA KONYA/MERKEZ
            </p>
          </animated.div>

          {/* Right Column - Two identical paragraphs (6/12) */}
          <animated.div 
            className="md:col-span-6 col-span-2 space-y-4 text-center md:text-left transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            style={{
              ...contentSpring,
              transform: `${contentSpring.transform} perspective(1000px)`,
            }}
          >
            <p className="text-gray-700 text-sm leading-relaxed font-spectral">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English.
            </p>
            <p className="text-gray-700 leading-relaxed font-spectral text-sm sm:text-base">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English.
            </p>
          </animated.div>
        </animated.div>
      </div>
    </section>
  );
} 