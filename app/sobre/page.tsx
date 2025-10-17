import Image from "next/image";
import { Target, Eye, Award, TrendingUp } from "lucide-react";
import RevealSection from "@/components/RevealSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const valores = [
    {
      icon: Target,
      title: "Missão",
      description: "Oferecer consultoria financeira de excelência, auxiliando nossos clientes a alcançar seus objetivos com segurança e eficiência.",
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser referência em consultoria financeira, reconhecida pela qualidade, ética e resultados consistentes.",
    },
    {
      icon: Award,
      title: "Valores",
      description: "Integridade, transparência, excelência e comprometimento com o sucesso dos nossos clientes.",
    },
    {
      icon: TrendingUp,
      title: "Compromisso",
      description: "Entregar soluções personalizadas que geram valor real e contribuem para o crescimento sustentável.",
    },
  ];

export default function Sobre() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/rj.jpg" 
            alt="Rio de Janeiro"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-10 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-800 mb-6 text-white">
            <span className="font-jamjuree font-700 text-white mx-2">Sobre</span>
            <span className="font-jakarta font-800 text-[#29C8EB] mx-2">a</span>
            <span className="font-poppins font-600 text-white mx-2">VMB</span>
            <span className="font-caveat font-bold text-[#29C8EB] mx-2">Advisor</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Excelência em consultoria financeira há mais de uma década
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealSection>
              <h2 className="text-3xl md:text-4xl mb-6">
                <span className="font-jamjuree font-700 text-white mx-1">Nossa</span>
                <span className="font-jakarta font-800 text-[#29C8EB] mx-1">História</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A VMB Advisor nasceu da visão de criar uma consultoria financeira que realmente 
                  compreendesse as necessidades individuais de cada cliente, oferecendo soluções 
                  personalizadas e estratégicas.
                </p>
                <p>
                  Com mais de uma década de atuação no mercado, construímos uma trajetória sólida 
                  baseada em resultados consistentes, relacionamentos de confiança e compromisso 
                  inabalável com a excelência.
                </p>
                <p>
                  Hoje, somos reconhecidos como uma das principais consultorias do país, atendendo 
                  clientes de diversos segmentos com soluções inovadoras e eficientes.
                </p>
              </div>
            </RevealSection>

            <RevealSection delay={0.2}>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <Image 
                  src="/conference-room.jpg" 
                  alt="Sala de reuniões VMB Advisor"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-20 bg-black">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <RevealSection>
            <h2 className="text-3xl md:text-4xl text-center mb-12">
              <span className="font-jamjuree font-700 text-white mx-1">Nossos</span>
              <span className="font-jakarta font-800 text-[#29C8EB] mx-1">Pilares</span>
            </h2>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <RevealSection key={index} delay={index * 0.1}>
                <div className="bg-card border border-border rounded-lg p-6 hover:border-[#29C8EB] transition-all duration-300 h-full">
                  <valor.icon className="w-12 h-12 text-[#29C8EB] mb-4" />
                  <h3 className="text-xl font-jamjuree font-600 mb-3">{valor.title}</h3>
                  <p className="text-muted-foreground">{valor.description}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <RevealSection>
              <h2 className="text-3xl md:text-4xl mb-6">
                <span className="font-jamjuree font-700 text-white mx-1">Reconhecimento</span>
                <span className="font-jakarta font-800 text-[#29C8EB] mx-1">e</span>
                <span className="font-poppins font-600 text-white mx-1">Excelência</span>
              </h2>
              <p className="text-muted-foreground mb-4">
                Nossa dedicação à excelência nos rendeu diversos prêmios e reconhecimentos no mercado financeiro.
              </p>
              <p className="text-muted-foreground">
                Essas conquistas refletem nosso compromisso contínuo com a qualidade, inovação e satisfação dos nossos clientes.
              </p>
            </RevealSection>

            <RevealSection delay={0.2}>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <Image 
                  src="/awards.jpg" 
                  alt="Prêmios e reconhecimentos VMB Advisor"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </RevealSection>
          </div>          
        </div>
      </section>

      <Footer />
    </div>
  );
}
