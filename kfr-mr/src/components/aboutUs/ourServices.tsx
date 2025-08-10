"use client";

import React, { useRef } from "react";
import { Scissors, Zap, Shield, Heart, LucideIcon } from "lucide-react";
import Image from "next/image";
import { motion, useInView, easeOut } from "framer-motion";

interface ValueCard {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

interface ValuesSectionProps {
  backgroundImage: string;
}

interface ValueCardProps {
  card: ValueCard;
  delay: number;
}

const MAX_WORDS = 20;

const ValuesSection = ({ backgroundImage }: ValuesSectionProps) => {
  const text =
    "Bizim için önemli değerler ilkeler bunlar bizim değer ve ilkelerimiz";
  const words = text.split(" ");

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const cards: ValueCard[] = [
    {
      id: 1,
      title: "Sürekli Gelişim",
      description: "Güzel bir saç kesimi hizmeti sunuyoruz falan filan.",
      icon: Scissors,
      gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      id: 2,
      title: "Hijyen",
      description: "Temizlik ve hijyen standartlarımız en üst seviyede tutulmaktadır.",
      icon: Zap,
      gradient: "from-green-500/20 to-blue-500/20",
    },
    {
      id: 3,
      title: "Temizlik",
      description: "Salonumuzda en yüksek temizlik standartları uygulanır.",
      icon: Shield,
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      id: 4,
      title: "Samimiyet",
      description: "Müşterilerimizle samimi ve güvenilir ilişkiler kurarız.",
      icon: Heart,
      gradient: "from-orange-500/20 to-red-500/20",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden mb-12">
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt="Background"
            className="w-full h-full object-cover"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 backdrop-blur-sm bg-slate-900/40"></div>
        </div>
      )}

      <div
        className={`absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ${
          backgroundImage ? "opacity-50" : "opacity-100"
        }`}
      ></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="w-80 h-64 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl shadow-2xl transform rotate-12 blur-sm"></div>
        <div className="w-72 h-96 bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl shadow-2xl transform -rotate-6 -ml-20 blur-sm"></div>
        <div className="w-96 h-60 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl shadow-2xl transform rotate-3 -ml-16 blur-sm"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-20 space-y-2">
          <h3 className="text-lg font-light text-slate-300 tracking-wider mb-4">
            Değerlerimiz
          </h3>

          <h1
            ref={containerRef}
            className="w-4/5 text-center mx-auto text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 flex flex-wrap justify-center"
          >
            {words.map((word, i) => {
              if (i < MAX_WORDS) {
                return (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : 20,
                      transition: {
                        delay: i * 0.1,
                        duration: 0.5,
                        ease: easeOut,
                      },
                    }}
                    className="mr-2"
                  >
                    {word}
                  </motion.span>
                );
              }
              return <span key={i} className="mr-2">{word}</span>;
            })}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:p-0 gap-6 max-w-7xl mx-auto">
          {cards.map((card, index) => (
            <ValueCardComponent key={card.id} card={card} delay={index * 100} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ValueCardComponent = ({ card, delay }: ValueCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const IconComponent = card.icon;

  React.useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 1024 || "ontouchstart" in window;
      setIsMobile(isMobileDevice);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) setIsHovered(true);
  };
  const handleMouseLeave = () => {
    if (!isMobile) setIsHovered(false);
  };
  const handleClick = (e: React.MouseEvent) => {
    if (isMobile) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div
      className={`group relative transition-all sm:pt-20 duration-500 ease-out ${
        !isMobile ? "hover:scale-105" : ""
      }`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div
        className={`
          relative backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-48
          transition-all duration-500 ease-out overflow-visible
          ${!isMobile ? "cursor-pointer" : "cursor-default"}
          ${
            isHovered && !isMobile
              ? `bg-gradient-to-br ${card.gradient} border-white/20 shadow-2xl shadow-white/5`
              : "bg-white/5"
          }
          ${!isMobile ? "hover:bg-white/10" : ""}
        `}
        style={{
          transform: isHovered && !isMobile ? "translateY(-4rem)" : "translateY(0)",
        }}
      >
        <div
          className={`
            absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 transition-opacity duration-500 rounded-2xl
            ${isHovered && !isMobile ? "opacity-100" : ""}
          `}
        />

        <div
          className={`
            absolute left-0 right-0 bottom-0 rounded-2xl transition-all duration-500 ease-out
            ${isHovered && !isMobile ? "h-64" : "h-48"}
          `}
          style={{
            background: isHovered && !isMobile
              ? `linear-gradient(135deg, ${card.gradient
                  .replace("from-", "")
                  .replace(" to-", ", ")})`
              : "transparent",
          }}
        />

        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <div
            className={`
              relative z-10 w-12 h-12 mb-6 rounded-xl flex items-center justify-center
              transition-all duration-500
              ${
                isHovered && !isMobile
                  ? "bg-white/20 shadow-lg"
                  : "bg-white/10"
              }
            `}
          >
            <IconComponent
              className={`
                w-6 h-6 transition-all duration-500
                ${isHovered && !isMobile ? "text-white" : "text-slate-300"}
              `}
            />
          </div>

          <div className="relative z-10">
            <h3
              className={`
              text-xl font-semibold mb-3 transition-colors duration-500
              ${isHovered && !isMobile ? "text-white" : "text-slate-200"}
            `}
            >
              {card.title}
            </h3>

            <p
              className={`
              text-sm leading-relaxed transition-all duration-500
              ${
                isHovered && !isMobile
                  ? "text-slate-100 opacity-100"
                  : isMobile
                  ? "text-slate-400 opacity-100"
                  : "text-slate-400 opacity-0"
              }
            `}
            >
              {card.description}
            </p>
          </div>
        </div>

        <div
          className={`
            absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 rounded-2xl
            ${isHovered && !isMobile ? "opacity-100" : ""}
          `}
        />
      </div>
    </div>
  );
};

export default ValuesSection;