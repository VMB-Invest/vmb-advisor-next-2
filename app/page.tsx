import Image from "next/image";
import { ArrowRight, Users, TrendingUp } from "lucide-react";
import RevealSection from "@/components/RevealSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HomeTestimonials from "@/components/HomeTestimonials";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultoria Financeira, Investimentos e Planejamento",
  description:
    "VMB Advisor: consultoria financeira completa para investir, proteger e crescer seu patrimônio com segurança.",
  alternates: {
    canonical: "/",
  },
};

const services = [
  {
    icon: TrendingUp,
    title: "Planejamento de Investimentos",
    description: "Estratégias personalizadas para maximizar seus investimentos.",
  },
  {
    icon: TrendingUp,
    title: "Planejamento Imobiliário",
    description: "Assessoria completa para aquisição e gestão de imóveis.",
  },
  {
    icon: TrendingUp,
    title: "Planejamento Empresarial",
    description: "Soluções financeiras para o crescimento do seu negócio.",
  },
  {
    icon: Users,
    title: "Planejamento Familiar",
    description: "Planejamento financeiro para garantir o futuro da sua família.",
  },
];

const testimonials = [
  {
    quote: "O planejamento familiar da VMB Invest me proporcionou tranquilidade para o futuro dos meus filhos. A equipe é extremamente profissional e atenciosa!",
    author: "Fernanda Costa"
  },
  {
    quote: "Após anos tentando organizar minhas finanças, encontrei na VMB Advisor o parceiro ideal. Em apenas 6 meses, consegui realizar meu sonho de comprar meu primeiro imóvel.",
    author: "Roberto Mendes"
  },
  {
    quote: "A assessoria imobiliária da VMB foi decisiva para encontrarmos o imóvel perfeito para nossa família. O conhecimento do mercado e a atenção aos detalhes fizeram toda a diferença.",
    author: "Juliana e Marcos"
  },
  {
    quote: "Graças ao planejamento empresarial da VMB, consegui expandir meu negócio de forma sustentável. O retorno sobre investimento superou todas as expectativas.",
    author: "Carlos Silva"
  },
  {
    quote: "A consultoria de investimentos da VMB transformou minha relação com o dinheiro. Hoje tenho uma carteira diversificada e rendimentos consistentes.",
    author: "Ana Paula"
  },
  {
    quote: "Profissionalismo exemplar! A VMB me ajudou a estruturar um plano de aposentadoria sólido. Agora durmo tranquilo sabendo que meu futuro está garantido.",
    author: "Eduardo Santos"
  },
  {
    quote: "Excelente atendimento e resultados surpreendentes. Em 1 ano de parceria, meus investimentos tiveram uma performance muito acima da média do mercado.",
    author: "Marina Oliveira"
  },
  {
    quote: "A VMB me orientou na compra do meu segundo imóvel para investimento. A estratégia deles me permitiu ter uma renda passiva significativa.",
    author: "Rafael Costa"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* Números que falam por si */}
      <section className="relative pt-12 sm:pt-20 pb-12 sm:pb-20 bg-background">
        {/* Botões de Ação */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20 w-full px-4 max-w-[1280px]">
          <RevealSection>
            <div className="hidden sm:flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <a href="https://api.whatsapp.com/send/?phone=5521968316667&text=Ol%C3%A1%2C+tenho+interesse+em+me+planejar+financeiramente." target="_blank" rel="noopener noreferrer" className="w-full sm:w-64">
                <Button className="w-full bg-white hover:underline text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm uppercase tracking-wide shadow-lg cursor-pointer">SEJA CLIENTE</Button>
              </a>            
              <a href="https://api.whatsapp.com/send/?phone=5521968316667&text=Ol%C3%A1%21+Gostaria+de+entrar+em+contato+com+um+especialista+em+Financial+Advisor." target="_blank" rel="noopener noreferrer" className="w-full sm:w-64">
                <Button className="w-full bg-[#29C8EB] hover:underline text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm uppercase tracking-wide shadow-lg cursor-pointer">Planner financeiro</Button>
              </a>
            </div>
          </RevealSection>
        </div>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 pt-8 sm:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-stretch">
            {/* Conteúdo - Título e descrições - MOBILE PRIMEIRO */}
            <RevealSection delay={0} className="h-full">
              <div className="flex flex-col justify-start text-center lg:text-left order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 font-jamjuree font-700">
                  <span className="text-white">Nossos</span> <span className="text-[#29C8EB]">números</span> <span className="text-white">falam por si</span>
                </h2>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">Nossa trajetória de sucesso é refletida nos números que conquistamos.</p>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">Estamos comprometidos em manter a excelência em cada interação e resultado entregue aos nossos clientes.</p>
                
                {/* Imagem abaixo do texto */}
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-[250px] sm:h-[300px] md:h-[350px]">
                  <Image 
                    src="/awards.jpg" 
                    alt="Escritório VMB Advisor" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </RevealSection>

            {/* Grid de números */}
            <RevealSection delay={0.2} className="h-full">
              <div className="grid grid-cols-1 gap-4 sm:gap-6 order-2 lg:order-1 h-full">
                {/* Barra no topo - SOB CUSTÓDIA */}
                <div className="bg-gradient-to-r from-[#29C8EB] to-[#29C8EB]/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#29C8EB]/30 col-span-1 flex-shrink-0">
                  <div className="text-white text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2">SOB CUSTÓDIA</div>
                  <div className="text-4xl sm:text-5xl font-bold text-white">+750 Milhões de reais</div>
                </div>
                
                {/* Três boxes abaixo - expandem para preencher o espaço restante */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 flex-1">
                  <div className="bg-background border-2 border-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 flex flex-col justify-center items-center text-center h-full">
                    <div className="text-gray-300 text-[10px] sm:text-xs font-semibold uppercase tracking-wide mb-2">NPS</div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#29C8EB]">94.4</div>
                  </div>
                  
                  <div className="bg-background border-2 border-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 flex flex-col justify-center items-center text-center h-full">
                    <div className="text-gray-300 text-[10px] sm:text-xs font-semibold uppercase tracking-wide mb-2">CLIENTES</div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#29C8EB]">+3700</div>
                  </div>
                  
                  <div className="bg-background border-2 border-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 flex flex-col justify-center items-center text-center h-full">
                    <div className="text-gray-300 text-[10px] sm:text-xs font-semibold uppercase tracking-wide mb-2 leading-tight">COLABORADORES</div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#29C8EB]">+121</div>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="bg-background py-12 sm:py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
          <RevealSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-3 sm:mb-4">
              <span className="font-jamjuree font-700 text-[#29C8EB] mx-1">Nossos</span>
              <span className="font-jakarta font-800 text-white mx-1">Serviços</span>
            </h2>
            <p className="text-center text-muted-foreground text-sm sm:text-base mb-8 sm:mb-12 max-w-2xl mx-auto px-4">Oferecemos soluções completas para gestão e crescimento do seu patrimônio</p>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <RevealSection key={index} delay={index * 0.1}>
                <div className="bg-card border border-border rounded-lg p-5 sm:p-6 hover:border-[#29C8EB] transition-all duration-300 h-full">
                  <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#29C8EB] mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-jamjuree font-600 mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{service.description}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <HomeTestimonials testimonials={testimonials} />

      {/* Quem Somos */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16 md:mb-20">
            <RevealSection>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6 text-center lg:text-left leading-tight">
                <span className="font-jamjuree font-700 text-gray-900">Construa </span>
                <span className="font-poppins font-600 text-[#29C8EB]">seu </span>
                <span className="font-caveat font-bold text-gray-900">legado</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center lg:text-left mb-4">
                Nosso propósito é fazer parte de todas as grandes conquistas da vida das pessoas. Acreditamos que cada sonho merece um planejamento sólido e cada objetivo financeiro pode se tornar realidade com a estratégia certa.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center lg:text-left">
                Seja na compra do primeiro imóvel, na realização de uma viagem dos sonhos, na educação dos filhos ou na construção de uma aposentadoria tranquila - estamos ao seu lado em cada etapa dessa jornada, transformando planos em conquistas tangíveis.
              </p>
            </RevealSection>

            <RevealSection delay={0.2}>
              <div className="aspect-video bg-muted rounded-xl sm:rounded-2xl overflow-hidden">
                <Image src="/IMG_0305.jpg" alt="Sala de reuniões VMB Advisor" width={800} height={450} className="w-full h-full object-cover" />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="py-12 sm:py-16 md:py-20 bg-black">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <RevealSection>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <Image src="/office-1.png" alt="Escritório VMB Advisor" width={800} height={450} className="w-full h-full object-cover" />
              </div>
            </RevealSection>

            <RevealSection delay={0.2}>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6 text-center lg:text-left leading-tight">
                <span className="font-jamjuree font-700 text-white">Sobre </span>
                <span className="font-jakarta font-800 text-[#29C8EB]">a </span>
                <span className="font-poppins font-600 text-white">VMB </span>
                <span className="font-caveat font-bold text-[#29C8EB]">Advisor</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mb-3 sm:mb-4 text-center lg:text-left">Somos uma consultoria especializada em soluções financeiras estratégicas.</p>
              <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6 text-center lg:text-left">Com anos de experiência no mercado, nossa equipe oferece atendimento personalizado.</p>
              <div className="flex justify-center lg:justify-start">
                <a href="https://api.whatsapp.com/send/?phone=5521968316667" target="_blank" rel="noopener noreferrer">
                  <Button className="border-[#29C8EB] text-white hover:underline cursor-pointer text-sm sm:text-base">Saiba Mais <ArrowRight className="ml-2 w-4 h-4" /></Button>
                </a>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-black">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 text-center">
          <RevealSection>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6 px-2 leading-tight">
              <span className="font-jamjuree font-700 text-white">Pronto </span>
              <span className="font-jakarta font-800 text-[#29C8EB]">para </span>
              <span className="font-poppins font-600 text-white">transformar </span>
              <span className="font-caveat font-bold text-[#29C8EB]">seu </span>
              <span className="font-jamjuree font-700 text-white">patrimônio?</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto px-4">Entre em contato conosco e descubra como podemos ajudar você</p>
            <a href="https://api.whatsapp.com/send/?phone=5521968316667" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#29C8EB] hover:bg-[#29C8EB]/90 text-background font-semibold cursor-pointer text-sm sm:text-base px-6 sm:px-8">Fale com um Especialista <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" /></Button>
            </a>
          </RevealSection>
        </div>
      </section>
      <Footer />
    </div>
  );
}
