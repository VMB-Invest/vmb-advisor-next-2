'use client';

import { motion } from 'framer-motion';

interface CarreirasHeroProps {
  title: string;
  subtitle: string;
}

export default function CarreirasHero({ title, subtitle }: CarreirasHeroProps) {
  return (
    <section className="relative min-h-[350px] sm:min-h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-background">
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/600')] bg-cover bg-center opacity-20" />
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-jakarta font-800 mb-4 sm:mb-6 text-white"
        >
          {title} <span className="text-[#29C8EB]">Conosco</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
