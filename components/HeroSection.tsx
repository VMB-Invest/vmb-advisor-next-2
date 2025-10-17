"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://pub-db48207f42de49e7b9575db65c6f484f.r2.dev/INSTITUCIONAL.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-background via-background/50 to-transparent backdrop-blur-md" />
      </div>
      <div className="w-full relative z-10 max-w-[1280px] mx-auto px-4 md:px-10 py-20">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[400px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 drop-shadow-2xl font-jakarta">
              <span className="font-jamjuree font-light text-white">Construindo o</span>
              <br />
              <span className="text-emphasis font-jakarta font-800">FUTURO FINANCEIRO</span>
              <br />
              <span className="font-jamjuree font-light text-white">que </span>
              <span className="text-highlight font-jakarta font-800">você merece</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 drop-shadow-lg">
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
