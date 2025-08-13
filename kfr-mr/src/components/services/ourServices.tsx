"use client"

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ServiceSectionProps {
  leftTitle: string;
  leftSubtitle: string;
  leftDescription: string;
  leftButtonText: string;
  leftImageSrc: string;
  leftTag: string;

  rightTitle: string;
  rightSubtitle: string;
  rightDescription: string;
  rightButtonText: string;
  rightImageSrc: string;
  rightTag: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  leftTitle,
  leftDescription,
  leftButtonText,
  leftImageSrc,
  leftTag,
  rightTitle,
  rightDescription,
  rightButtonText,
  rightImageSrc,
  rightTag,
}) => {
  const [visibleElements, setVisibleElements] = useState({
    leftContent: false,
    leftImage: false,
    rightImage: false,
    rightContent: false,
  });

  const leftContentRef = useRef<HTMLDivElement | null>(null);
  const leftImageRef = useRef<HTMLDivElement | null>(null);
  const rightImageRef = useRef<HTMLDivElement | null>(null);
  const rightContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          const isVisible = entry.isIntersecting;

          setVisibleElements(prev => ({
            ...prev,
            leftContent: target === leftContentRef.current ? isVisible : prev.leftContent,
            leftImage: target === leftImageRef.current ? isVisible : prev.leftImage,
            rightImage: target === rightImageRef.current ? isVisible : prev.rightImage,
            rightContent: target === rightContentRef.current ? isVisible : prev.rightContent,
          }));
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-50px 0px -50px 0px"
      }
    );

    const refs = [leftContentRef, leftImageRef, rightImageRef, rightContentRef];
    refs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Sol bölüm - İçerik */}
      <div 
        ref={leftContentRef}
        className={`order-2 md:order-1 flex flex-col gap-4
          transition-all duration-800 ease-out transform
          ${visibleElements.leftContent 
            ? "opacity-100 translate-x-0 translate-y-0" 
            : "opacity-0 -translate-x-8 translate-y-4"}
        `}
        style={{ willChange: "opacity, transform" }}
      >
        <span 
          className={`w-fit inline-block bg-[#F5F2FF] text-[#623EDF] text-sm px-3 py-2 rounded-full font-semibold tracking-wide select-none
            transition-all duration-1000 ease-out delay-200 transform
            ${visibleElements.leftContent 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-95"}
          `}
        >
          {leftTag}
        </span>
        
        <h2 
          className={`text-3xl font-bold leading-tight text-black
            transition-all duration-1000 ease-out delay-300 transform
            ${visibleElements.leftContent 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-4"}
          `}
        >
          {leftTitle}
        </h2>
        
        <p 
          className={`text-gray-600
            transition-all duration-1000 ease-out delay-400 transform
            ${visibleElements.leftContent 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-4"}
          `}
        >
          {leftDescription}
        </p>
        
        <button 
          className={`mt-4 w-max bg-[#5D38DE] hover:bg-[#5432CC] text-white font-medium rounded-full px-6 py-3
            hover:shadow-lg hover:scale-105 active:scale-95
            ${visibleElements.leftContent 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-4"}
          `}
          style={{ 
            willChange: "transform, background-color, box-shadow",
            transition: visibleElements.leftContent 
              ? "transform 200ms ease-out, background-color 200ms ease-out, box-shadow 200ms ease-out"
              : "opacity 500ms ease-out 300ms, transform 500ms ease-out 300ms"
          }}
        >
          {leftButtonText}
        </button>
      </div>

      {/* Sol bölüm - Resim */}
      <div 
        ref={leftImageRef}
        className={`order-1 md:order-2 flex justify-center md:justify-end
          transition-all duration-1000 ease-out transform
          ${visibleElements.leftImage 
            ? "opacity-100 translate-x-0 scale-100 rotate-0" 
            : "opacity-0 translate-x-8 scale-95 rotate-1"}
        `}
        style={{ willChange: "opacity, transform" }}
      >
        <div className="relative overflow-hidden rounded-3xl group">
          <Image
            src={leftImageSrc}
            alt={leftTitle}
            className={`w-full max-w-lg h-80 rounded-3xl object-cover
              transition-all duration-700 ease-out group-hover:scale-110
              ${visibleElements.leftImage 
                ? "filter-none" 
                : "filter blur-sm"}
            `}
            style={{ borderRadius: "40px" }}
            width={500}
            height={500}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
        </div>
      </div>

      {/* Sağ bölüm - Resim */}
      <div 
        ref={rightImageRef}
        className={`order-3 md:order-3 flex justify-center md:justify-start
          transition-all duration-1000 ease-out transform
          ${visibleElements.rightImage 
            ? "opacity-100 -translate-x-0 scale-100 rotate-0" 
            : "opacity-0 -translate-x-8 scale-95 -rotate-1"}
        `}
        style={{ willChange: "opacity, transform" }}
      >
        <div className="relative overflow-hidden rounded-3xl group">
          <Image
            src={rightImageSrc}
            alt={rightTitle}
            width={500}
            height={500}
            className={`w-full max-w-lg h-80 rounded-3xl object-cover
              transition-all duration-700 ease-out group-hover:scale-110
              ${visibleElements.rightImage 
                ? "filter-none" 
                : "filter blur-sm"}
            `}
            style={{ borderRadius: "40px" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
        </div>
      </div>

      {/* Sağ bölüm - İçerik */}
      <div 
        ref={rightContentRef}
        className={`order-4 md:order-4 flex flex-col gap-4
          transition-all duration-800 ease-out transform
          ${visibleElements.rightContent 
            ? "opacity-100 translate-x-0 translate-y-0" 
            : "opacity-0 translate-x-8 translate-y-4"}
        `}
        style={{ willChange: "opacity, transform" }}
      >
        <span 
          className={`w-fit inline-block bg-[#F5F2FF] text-[#623EDF] text-sm px-3 py-2 rounded-full font-semibold tracking-wide select-none
            transition-all duration-1000 ease-out delay-200 transform
            ${visibleElements.rightContent 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-95"}
          `}
        >
          {rightTag}
        </span>
        
        <h2 
          className={`text-3xl font-bold leading-tight text-black
            transition-all duration-1000 ease-out delay-300 transform
            ${visibleElements.rightContent 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-4"}
          `}
        >
          {rightTitle}
        </h2>
        
        <p 
          className={`text-gray-600
            transition-all duration-1000 ease-out delay-400 transform
            ${visibleElements.rightContent 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-4"}
          `}
        >
          {rightDescription}
        </p>
        
        <button 
          className={`mt-4 w-max bg-[#5D38DE] hover:bg-[#5432CC] text-white font-medium rounded-full px-6 py-3
            hover:shadow-lg hover:scale-105 active:scale-95
            ${visibleElements.rightContent 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-4"}
          `}
          style={{ 
            willChange: "transform, background-color, box-shadow",
            transition: visibleElements.rightContent 
              ? "transform 200ms ease-out, background-color 200ms ease-out, box-shadow 200ms ease-out"
              : "opacity 1000ms ease-out 500ms, transform 1000ms ease-out 500ms"
          }}
        >
          {rightButtonText}
        </button>
      </div>
    </section>
  );
};

export default ServiceSection;