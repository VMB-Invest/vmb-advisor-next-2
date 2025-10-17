import { Briefcase, Users, TrendingUp, Award } from "lucide-react";
import RevealSection from "@/components/RevealSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarreirasHero from "@/components/CarreirasHero";
import CarreirasForm from "@/components/CarreirasForm";
import { submitJobApplication } from "@/app/actions/carreiras";

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
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <RevealSection>
            <h2 className="text-3xl md:text-4xl text-center mb-4">
              <span className="font-jamjuree font-700 text-white mx-1">Por</span>
              <span className="font-jakarta font-800 text-[#29C8EB] mx-1">que</span>
              <span className="font-poppins font-600 text-white mx-1">trabalhar</span>
              <span className="font-caveat font-bold text-[#29C8EB] mx-1">na</span>
              <span className="font-jamjuree font-700 text-white mx-1">VMB Advisor?</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Oferecemos um ambiente de trabalho inspirador e oportunidades de crescimento
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((beneficio, index) => (
              <RevealSection key={index} delay={index * 0.1}>
                <div className="bg-card border border-border rounded-lg p-6 hover:border-[#29C8EB] transition-all duration-300 text-center h-full">
                  <beneficio.icon className="w-12 h-12 text-[#29C8EB] mx-auto mb-4" />
                  <h3 className="text-xl font-jamjuree font-600 mb-3">{beneficio.title}</h3>
                  <p className="text-muted-foreground">{beneficio.description}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>    

      {/* Formulário de Candidatura Espontânea */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="max-w-2xl mx-auto">
            <RevealSection>
              <h2 className="text-3xl md:text-4xl text-center mb-4">
                <span className="font-jamjuree font-700 text-white mx-1">Candidatura</span>
                <span className="font-jakarta font-800 text-[#29C8EB] mx-1">Espontânea</span>
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Não encontrou a vaga ideal? Envie seu currículo e entraremos em contato quando surgir uma oportunidade
              </p>
            </RevealSection>

            <CarreirasForm onSubmit={submitJobApplication} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Carreiras;
