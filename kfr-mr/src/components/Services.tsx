"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface ServicesProps {
  imageSrc?: string;
  imageAlt?: string;
}

export default function Services({ 
  imageSrc = "/1.png", 
  imageAlt = "Saç bakım hizmetleri" 
}: ServicesProps) {
  const { ref, isInView } = useScrollAnimation();

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
    <section ref={ref} id="hizmetlerimiz" className="py-8 sm:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Design Element */}
        <motion.div 
          className="flex justify-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div 
            className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 text-gray-700 rounded-full text-xs sm:text-sm font-medium"
            style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
          >
            Hizmetlerimiz
          </div>
        </motion.div>

        {/* Main Headings */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
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
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Service Image */}
              <div className="relative h-48 sm:h-56 md:h-64 bg-black">
                <Image
                  src={service.image}
                  alt={imageAlt}
                  fill
                  className="object-cover object-center"
                />
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 