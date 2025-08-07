"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  comment: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ayşe Yılmaz",
    comment: "Harika bir deneyimdi! Saçım çok güzel oldu, kesinlikle tekrar geleceğim.",
    rating: 5,
    avatar: "/avatar1.jpg"
  },
  {
    id: 2,
    name: "Mehmet Demir",
    comment: "Profesyonel hizmet ve kaliteli sonuç. Çok memnun kaldım.",
    rating: 5,
    avatar: "/avatar2.jpg"
  },
  {
    id: 3,
    name: "Fatma Kaya",
    comment: "Saç bakımı konusunda gerçekten uzmanlar. Tavsiye ederim!",
    rating: 5,
    avatar: "/avatar3.jpg"
  },
  {
    id: 4,
    name: "Ali Özkan",
    comment: "Temiz ve hijyenik ortam, güler yüzlü personel. Teşekkürler!",
    rating: 5,
    avatar: "/avatar4.jpg"
  },
  {
    id: 5,
    name: "Zeynep Arslan",
    comment: "Saç kesimi ve boyama işlemlerim mükemmel oldu. Çok beğendim.",
    rating: 5,
    avatar: "/avatar5.jpg"
  },
  {
    id: 6,
    name: "Can Yıldız",
    comment: "Modern teknikler kullanıyorlar, sonuçlar harika!",
    rating: 5,
    avatar: "/avatar6.jpg"
  },
  {
    id: 7,
    name: "Selin Özkan",
    comment: "Saç boyama işlemim mükemmel oldu, renk tam istediğim gibi çıktı!",
    rating: 5,
    avatar: "/avatar7.jpg"
  },
  {
    id: 8,
    name: "Burak Kaya",
    comment: "Erkek saç kesimi konusunda gerçekten uzmanlar, çok memnun kaldım.",
    rating: 5,
    avatar: "/avatar8.jpg"
  },
  {
    id: 9,
    name: "Elif Demir",
    comment: "Saç bakım ürünleri de çok kaliteli, kesinlikle tavsiye ederim.",
    rating: 5,
    avatar: "/avatar9.jpg"
  },
  {
    id: 10,
    name: "Ahmet Yıldız",
    comment: "Randevu sistemi çok pratik, zamanında hizmet alıyorsunuz.",
    rating: 5,
    avatar: "/avatar10.jpg"
  }
];

const Testimonials = () => {
  const [isHovered, setIsHovered] = useState(false);
  const topScrollRef = useRef<HTMLDivElement>(null);
  const bottomScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const topContainer = topScrollRef.current;
    const bottomContainer = bottomScrollRef.current;
    if (!topContainer || !bottomContainer) return;

    let animationId: number;

    const animate = () => {
      if (!isHovered) {
        // Üst satır - daha hızlı
        if (topContainer.scrollLeft >= topContainer.scrollWidth - topContainer.clientWidth) {
          topContainer.scrollLeft = 0;
        } else {
          topContainer.scrollLeft += 1;
        }

        // Alt satır - daha yavaş (her 2 frame'de bir)
        if (Date.now() % 2 === 0) {
          if (bottomContainer.scrollLeft >= bottomContainer.scrollWidth - bottomContainer.clientWidth) {
            bottomContainer.scrollLeft = 0;
          } else {
            bottomContainer.scrollLeft += 1;
          }
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    if (!isHovered) {
      animationId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isHovered]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-3 h-3 sm:w-4 sm:h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const renderTestimonialCard = (testimonial: Testimonial) => (
    <div
      key={testimonial.id}
      className="min-w-[280px] sm:min-w-[350px] bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-center mb-3 sm:mb-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg mr-3 sm:mr-4">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{testimonial.name}</h3>
          <div className="flex items-center">
            {renderStars(testimonial.rating)}
          </div>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed italic text-sm sm:text-base">
        &ldquo;{testimonial.comment}&rdquo;
      </p>
    </div>
  );

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">
            Müşteri Yorumları
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Müşterilerimizin deneyimleri ve memnuniyeti bizim için en değerli geri bildirimdir
          </p>
        </motion.div>

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="space-y-6 sm:space-y-8 pb-4"
        >
          {/* Üst Satır - Daha Hızlı */}
          <div
            ref={topScrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {testimonials.slice(0, 5).map((testimonial) => 
              renderTestimonialCard(testimonial)
            )}
            {/* Sonsuz döngü için aynı yorumları tekrar ekle */}
            {testimonials.slice(0, 5).map((testimonial) => 
              renderTestimonialCard({...testimonial, id: testimonial.id + 100})
            )}
          </div>

          {/* Alt Satır - Daha Yavaş */}
          <div
            ref={bottomScrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {testimonials.slice(5, 10).map((testimonial) => 
              renderTestimonialCard(testimonial)
            )}
            {/* Sonsuz döngü için aynı yorumları tekrar ekle */}
            {testimonials.slice(5, 10).map((testimonial) => 
              renderTestimonialCard({...testimonial, id: testimonial.id + 200})
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 