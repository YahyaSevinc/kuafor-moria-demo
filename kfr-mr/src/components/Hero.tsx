"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface HeroProps {
  imageSrc: string;
  imageAlt?: string;
}

export default function Hero({ imageSrc, imageAlt = "Kuaförlük teknoloji görseli" }: HeroProps) {
  const { ref, isInView } = useScrollAnimation();

  return (
    <div ref={ref} className="min-h-[70vh] sm:min-h-screen bg-[#F5F5F5] flex flex-col px-3 pt-8 pb-4 sm:px-0 sm:pt-0 sm:pb-0">
      {/* Text Section - Top */}
      <motion.div 
        className="flex-1 flex items-center justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <div className="text-center w-full">
          <motion.h1 
            className="text-2xl leading-snug sm:text-5xl lg:text-6xl font-normal text-black sm:leading-tight"
            style={{ fontFamily: 'var(--font-spectral), serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            Kuaförlük Adına Etkileyici Bir
            <br />
            Giriş Yazısı
          </motion.h1>
        </div>
      </motion.div>

      {/* Image Section - Bottom */}
      <motion.div 
        className="flex-1 flex items-end justify-center pb-4 sm:items-center sm:pb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      >
        <div className="w-full max-w-6xl">
          <motion.div 
            className="relative w-full h-52 rounded-[60px] sm:h-[400px] sm:rounded-[200px] lg:h-[300px] bg-black overflow-hidden group cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
} 