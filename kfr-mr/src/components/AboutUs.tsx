"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface AboutUsProps {
  imageSrc: string;
  imageAlt: string;
}

export default function AboutUs({ imageSrc, imageAlt }: AboutUsProps) {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section ref={ref} id="hakkimizda" className="py-8 sm:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title Section - Side by side */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-8 sm:mb-12 lg:mb-16 items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <motion.div 
            className="text-center lg:text-right"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-black mb-4 font-spectral">
              Kuaför
            </h1>
          </motion.div>
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <p className="text-sm sm:text-base text-gray-600 font-spectral leading-relaxed w-full lg:w-2/3 mx-auto lg:mx-0">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English.
            </p>
          </motion.div>
        </motion.div>

        {/* Subtitle */}
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-black font-spectral">
            Hakkımızda
          </h2>
        </motion.div>

        {/* Main Image Section */}
        <motion.div 
          className="mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
        >
          <motion.div 
            className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] overflow-hidden rounded-2xl sm:rounded-3xl group cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
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
          </motion.div>
        </motion.div>

        {/* Three Column Content Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 bg-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
        >
          {/* Left Column - Kuruluş (2/12) */}
          <motion.div 
            className="md:col-span-2 text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
          >
            <h3 className="text-xl sm:text-2xl font-medium text-gray-700 mb-2 font-spectral">
              Kuruluş
            </h3>
            <p className="text-lg sm:text-xl text-black font-spectral">
              2022
            </p>
          </motion.div>

          {/* Middle Column - Konum (4/12) */}
          <motion.div 
            className="md:col-span-4 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
          >
            <h3 className="text-xl sm:text-2xl font-medium text-gray-700 mb-4 font-spectral">
              Konum
            </h3>
            <p className="text-black leading-relaxed font-spectral text-sm sm:text-base">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
            </p>
          </motion.div>

          {/* Right Column - Two identical paragraphs (6/12) */}
          <motion.div 
            className="md:col-span-6 space-y-4 text-center md:text-left"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 2.0, ease: "easeOut" }}
          >
            <p className="text-gray-700 text-sm leading-relaxed font-spectral">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English.
            </p>
            <p className="text-gray-700 leading-relaxed font-spectral text-sm sm:text-base">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 