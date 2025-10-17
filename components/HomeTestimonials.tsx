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
    <section className="py-20 bg-background">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <RevealSection>
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            <span className="text-corporate">Depoimentos de</span> <span className="text-emphasis">Nossos Clientes</span>
          </h2>
        </RevealSection>

        <RevealSection delay={0.2}>
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true, dynamicBullets: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              speed={800}
              breakpoints={{ 640: { slidesPerView: 1, spaceBetween: 20 }, 768: { slidesPerView: 2, spaceBetween: 30 }, 1024: { slidesPerView: 3, spaceBetween: 30 } }}
              className="testimonials-swiper pb-12"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-slate-800 rounded-xl p-6 h-full flex flex-col justify-between min-h-[320px] max-h-[320px]">
                    <div className="flex-1">
                      <Quote className="w-8 h-8 text-primary mb-4 flex-shrink-0" />
                      <p className="text-gray-300 text-base leading-relaxed mb-6 line-clamp-6">"{testimonial.quote}"</p>
                    </div>
                    <div className="text-primary font-semibold text-sm mt-auto pt-4 border-t border-slate-700">- {testimonial.author}</div>
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
