"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[500px] sm:min-h-[550px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://pub-db48207f42de49e7b9575db65c6f484f.r2.dev/INSTITUCIONAL.mp4"
                type="video/mp4"
              />
          </video>

        {/* Overlay escura (já existente) */}
        <div className="absolute inset-0 bg-black/75" />

        {/* Fade-out inferior para transição suave */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#161616] to-transparent pointer-events-none" />
      </div>

      <div className="w-full relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[350px] sm:min-h-[400px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 drop-shadow-2xl leading-tight">
              <span className="font-jamjuree font-light text-white mx-1">Construindo</span>
              <span className="font-jakarta font-bold text-[#29C8EB] mx-1">o</span>
              <br />
              <span className="font-caveat font-bold text-[#29C8EB] mx-1">FUTURO</span>
              <span className="font-jakarta font-800 text-white mx-1">FINANCEIRO</span>
              <br />
              <span className="font-jamjuree font-light text-[#29C8EB] mx-1">que</span>
              <span className="font-poppins font-600 text-white mx-1">você</span>
              <span className="font-jakarta font-800 text-[#29C8EB] mx-1">merece</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 drop-shadow-lg leading-relaxed px-2 sm:px-0">
              Na VMB Advisor, transformamos seus sonhos em realidade através de um planejamento financeiro sólido e 
              personalizado. Nossa equipe de especialistas está pronta para guiar você em cada passo do caminho.
            </p>
          </motion.div>
          <div className="hidden lg:block"></div>
        </div>
      </div>

    </section>
  );
}
