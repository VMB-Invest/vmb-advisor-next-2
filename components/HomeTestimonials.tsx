"use client";

import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import RevealSection from "@/components/RevealSection";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Testimonial {
  quote: string;
  author: string;
}

interface HomeTestimonialsProps {
  testimonials: Testimonial[];
}

export default function HomeTestimonials({ testimonials }: HomeTestimonialsProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
        <RevealSection>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-12 px-2">
            <span className="font-jamjuree font-700 text-white mx-1">Depoimentos</span>
            <span className="font-jakarta font-800 text-[#29C8EB] mx-1">de</span>
            <span className="font-poppins font-600 text-white mx-1">Nossos</span>
            <span className="font-caveat font-bold text-[#29C8EB] mx-1">Clientes</span>
          </h2>
        </RevealSection>

        <RevealSection delay={0.2}>
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true, dynamicBullets: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              speed={800}
              breakpoints={{ 640: { slidesPerView: 1, spaceBetween: 20 }, 768: { slidesPerView: 2, spaceBetween: 24 }, 1024: { slidesPerView: 3, spaceBetween: 30 } }}
              className="testimonials-swiper pb-12"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-slate-800 rounded-lg sm:rounded-xl p-5 sm:p-6 h-full flex flex-col justify-between min-h-[280px] sm:min-h-[300px] md:min-h-[320px] max-h-[320px]">
                    <div className="flex-1">
                      <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-[#29C8EB] mb-3 sm:mb-4 flex-shrink-0" />
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 line-clamp-6">&ldquo;{testimonial.quote}&rdquo;</p>
                    </div>
                    <div className="text-[#29C8EB] font-semibold text-xs sm:text-sm mt-auto pt-3 sm:pt-4 border-t border-slate-700">- {testimonial.author}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
