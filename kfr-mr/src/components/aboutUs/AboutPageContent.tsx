"use client";
import { useState, useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { use3DAnimation } from "../../hooks/use3DAnimation";

export default function AboutPageContent() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Intersection Observer ile görünürlüğü kontrol et
  const { ref: statsInViewRef, inView } = useInView({
    triggerOnce: true, // sadece bir kere tetiklensin
    threshold: 0.3, // %30'u görünce başlasın
  });

  // react-spring ile sayaç animasyonu
  const customerSpring = useSpring({
    from: { number: 0 },
    to: { number: inView ? 200 : 0 },
    config: { duration: 1500 },
  });

  const branchSpring = useSpring({
    from: { number: 0 },
    to: { number: inView ? 5 : 0 },
    config: { duration: 1500 },
  });

  const videoUrl =
    "https://www.youtube.com/embed/mAg8UyDt_sw?autoplay=1&rel=0";
  const { ref: mainRef, } = use3DAnimation(200);
  const { ref: titleRef, springProps: titleSpring } = use3DAnimation(400);
  const { ref: statsRef, springProps: statsSpring } = use3DAnimation(600);
  const { ref: cardsRef, springProps: cardsSpring } = use3DAnimation(800);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isVideoModalOpen) {
        closeVideoModal();
      }
    };

    if (isVideoModalOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isVideoModalOpen]);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <section ref={mainRef} className="py-8 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          <div>
            <animated.div
              ref={titleRef}
              className="mb-8 md:mb-16"
              style={titleSpring}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-black mb-4 md:mb-8 font-rakesly text-center lg:text-left">
                About Kuaför V1
              </h1>
            </animated.div>

            <animated.div
              ref={statsRef}
              style={statsSpring}
              className="space-y-6 md:space-y-8"
            >
              {/* İstatistikler */}
              <div
                className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-6 md:mb-8"
                ref={statsInViewRef} // görünürlük takibi burada
              >
                {/* 200+ Memnun Müşteri */}
                <div className="relative">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-2 border-gray-300 flex flex-col items-center justify-center">
                    <animated.span className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1 font-rakesly">
                      {customerSpring.number.to((n) => `${Math.floor(n)}+`)}
                    </animated.span>
                    <div className="text-center text-gray-600 font-spectral">
                      <div className="text-xs sm:text-sm">Memnun</div>
                      <div className="text-xs sm:text-sm">Müşteri</div>
                    </div>
                  </div>
                </div>

                {/* 3+ Muhteşem Şube */}
                <div className="relative">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-2 border-gray-300 flex flex-col items-center justify-center">
                    <animated.span className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1 font-rakesly">
                      {branchSpring.number.to((n) => `${Math.floor(n)}+`)}
                    </animated.span>
                    <div className="text-center text-gray-600 font-spectral">
                      <div className="text-xs sm:text-sm">Muhteşem</div>
                      <div className="text-xs sm:text-sm">Şube</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Açıklama */}
              <div className="mt-6 md:mt-8">
                <p className="text-gray-700 leading-relaxed text-sm md:text-base font-spectral">
                  Salon Nova, 2015 yılında güzelliğe olan tutkumuzla kuruldu.
                  Kurulduğumuz günden bu yana binlerce müşterimizin kendini daha
                  özgüvenli ve mutlu hissetmesini sağladık.
                </p>
              </div>
            </animated.div>
          </div>

          {/* Sağ taraf - Video ve kart */}
          <animated.div
            ref={cardsRef}
            style={cardsSpring}
            className="flex flex-col gap-4 md:gap-6 h-full pt-2 place-items-center lg:place-items-end"
          >
            <div
              className="relative w-full sm:w-4/5 lg:w-3/4 h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              onClick={openVideoModal}
            >
              <Image
                src="/1.png"
                alt="Video Preview"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 bg-opacity-30 flex items-center justify-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-gray-800 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div
              className="relative h-48 sm:h-56 md:h-64 w-full sm:w-4/5 lg:w-3/4 rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                background: `linear-gradient(175deg, #3848FA 0%, #5B6EFF 50%, rgba(91, 110, 255, 0.3) 100%)`,
              }}
            >
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-center text-center items-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white font-rakesly leading-tight">
                  Dürüst insanlarla
                  <br />
                  çalışmak istemisiniz?
                </h3>
                <button className="w-fit px-6 sm:px-8 md:px-10 py-3 md:py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-medium hover:bg-white hover:text-black hover:border-black/30 transition-all duration-300 font-spectral text-base md:text-lg">
                  Bize Ulaşın
                </button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-full blur-xl"></div>
            </div>
          </animated.div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeVideoModal}
        >
          <div
            className="relative w-full max-w-7xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideoModal}
              className="absolute top-4 md:top-10 left-1/2 -translate-x-1/2 md:-translate-y-1/2 
                        z-10 w-10 h-10 md:w-12 md:h-12 bg-white/60 bg-opacity-60 backdrop-blur-sm 
                        rounded-full flex items-center justify-center text-black 
                        hover:bg-opacity-80 transition-all duration-300"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="w-full h-full">
              {videoUrl.includes("youtube.com") ||
              videoUrl.includes("youtu.be") ? (
                <iframe
                  src={
                    videoUrl.includes("embed")
                      ? videoUrl
                      : videoUrl
                          .replace("watch?v=", "embed/")
                          .replace("youtu.be/", "youtube.com/embed/")
                  }
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  title="Video Player"
                ></iframe>
              ) : videoUrl.includes("vimeo.com") ? (
                <iframe
                  src={
                    videoUrl.includes("player.vimeo.com")
                      ? videoUrl
                      : `https://player.vimeo.com/video/${
                          videoUrl.split("/").pop()
                        }`
                  }
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Video Player"
                ></iframe>
              ) : (
                <video
                  src={videoUrl}
                  className="w-full h-full rounded-lg"
                  controls
                  controlsList="nodownload"
                  autoPlay
                >
                  Video desteklenmiyor.
                </video>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}