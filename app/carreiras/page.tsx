import { Briefcase, Users, TrendingUp, Award } from "lucide-react";
import RevealSection from "@/components/RevealSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarreirasHero from "@/components/CarreirasHero";
import CarreirasFormSection from "@/components/CarreirasFormSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carreiras na VMB Advisor",
  description:
    "Junte-se à VMB Advisor e desenvolva sua carreira em um time de alta performance no mercado financeiro.",
  alternates: {
    canonical: "/carreiras",
  },
};

const Carreiras = () => {
  const beneficios = [
    {
      icon: Briefcase,
      title: "Plano de Carreira",
      description: "Oportunidades claras de crescimento profissional",
    },
    {
      icon: Users,
      title: "Ambiente Colaborativo",
      description: "Cultura de trabalho em equipe e inovação",
    },
    {
      icon: TrendingUp,
      title: "Desenvolvimento",
      description: "Treinamentos e capacitações constantes",
    },
    {
      icon: Award,
      title: "Reconhecimento",
      description: "Meritocracia e valorização de resultados",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <CarreirasHero 
        title="Trabalhe"
        subtitle="Junte-se a uma equipe de alta performance e faça parte da transformação do mercado financeiro"
      />

      {/* Por que trabalhar conosco */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
          <RevealSection>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center mb-3 sm:mb-4 px-2 leading-tight">
              <span className="font-jamjuree font-700 text-white">Por </span>
              <span className="font-jakarta font-800 text-[#29C8EB]">que </span>
              <span className="font-poppins font-600 text-white">trabalhar </span>
              <span className="font-caveat font-bold text-[#29C8EB]">com a{' '}</span>
              <span className="font-jamjuree font-700 text-white">VMB Advisor?</span>
            </h2>
            <p className="text-center text-muted-foreground text-sm sm:text-base mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              Oferecemos um ambiente de trabalho inspirador e oportunidades de crescimento
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {beneficios.map((beneficio, index) => (
              <RevealSection key={index} delay={index * 0.1}>
                <div className="bg-card border border-border rounded-lg p-5 sm:p-6 hover:border-[#29C8EB] transition-all duration-300 text-center h-full">
                  <beneficio.icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#29C8EB] mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-jamjuree font-600 mb-2 sm:mb-3">{beneficio.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{beneficio.description}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>    

      {/* Formulário de Candidatura Espontânea */}
      <CarreirasFormSection />

      <Footer />
    </div>
  );
};

export default Carreiras;
