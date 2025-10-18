"use client";

import CarreirasForm from "@/components/CarreirasForm";
import RevealSection from "@/components/RevealSection";
import { submitJobApplication } from "@/app/actions/carreiras";

export default function CarreirasFormSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-2xl mx-auto">
          <RevealSection>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center mb-3 sm:mb-4 px-2 leading-tight">
              <span className="font-jamjuree font-700 text-white">Candidatura </span>
              <span className="font-jakarta font-800 text-[#29C8EB]">Espontânea</span>
            </h2>
            <p className="text-center text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 px-4">
              Não encontrou a vaga ideal? Envie seu currículo e entraremos em contato quando surgir uma oportunidade
            </p>
          </RevealSection>

          <CarreirasForm onSubmit={submitJobApplication} />
        </div>
      </div>
    </section>
  );
}
