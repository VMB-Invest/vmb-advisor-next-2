import Image from "next/image";
import { ArrowRight, Users, TrendingUp } from "lucide-react";
import RevealSection from "@/components/RevealSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HomeTestimonials from "@/components/HomeTestimonials";
import { Button } from "@/components/ui/button";

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
      <section className="relative pt-20 bg-background">
        {/* Botões de Ação */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
          <RevealSection>
            <div className="hidden sm:flex flex-col sm:flex-row justify-center items-center gap-6">
              <a href="https://api.whatsapp.com/send/?phone=5521972674227&text=Ol%C3%A1%2C+tenho+interesse+em+me+planejar+financeiramente." target="_blank" rel="noopener noreferrer">
                <Button className="w-64 bg-white hover:underline text-black font-semibold px-8 py-4 text-sm uppercase tracking-wide shadow-lg cursor-pointer">SEJA CLIENTE</Button>
              </a>            
              <a href="https://api.whatsapp.com/send/?phone=5521972674227&text=Ol%C3%A1%21+Gostaria+de+entrar+em+contato+com+um+especialista+em+Financial+Advisor." target="_blank" rel="noopener noreferrer">
                <Button className="w-64 bg-[#29C8EB] hover:underline text-white font-semibold px-8 py-4 text-sm uppercase tracking-wide shadow-lg cursor-pointer">Planner financeiro</Button>
              </a>
            </div>
          </RevealSection>
        </div>
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealSection>
              <div className="grid grid-cols-3 grid-rows-3 gap-4 h-[600px]">
                <div className="bg-[#29C8EB] rounded-xl p-6 col-span-1 row-span-2 flex flex-col justify-between border">
                  <div className="text-background text-xs font-semibold uppercase tracking-wide mb-2">SOB CUSTÓDIA</div>
                  <div className="text-4xl md:text-5xl font-bold text-background">750M +</div>
                </div>            
                
                <div className="bg-background border-2 border-white rounded-xl p-6 col-span-1 row-span-2 flex flex-col justify-between">
                  <div className="text-gray-300 text-xs font-semibold uppercase tracking-wide mb-2">COLABORADORES</div>
                  <div className="text-4xl md:text-5xl font-bold text-white">+121</div>
                </div>
                
                <div className="bg-background border-2 border-white rounded-xl p-6 col-span-1 row-span-1 flex flex-col justify-between">
                  <div className="text-gray-300 text-xs font-semibold uppercase tracking-wide mb-2">NPS</div>
                  <div className="text-3xl md:text-4xl font-bold text-white">94.4</div>
                </div>
                
                <div className="bg-background border-2 border-white rounded-xl p-6 col-span-1 row-span-1 flex flex-col justify-between">
                  <div className="text-gray-300 text-xs font-semibold uppercase tracking-wide mb-2">CLIENTES</div>
                  <div className="text-3xl md:text-4xl font-bold text-white">3700+</div>
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={0.2}>
              <h2 className="text-3xl md:text-4xl mb-6 font-jamjuree font-700">
                <span className="text-white">Nossos</span> <span className="text-modern">Números</span> <span className="text-white">falam por si</span>
              </h2>
              <p className="text-muted-foreground mb-4">Nossa trajetória de sucesso é refletida nos números que conquistamos.</p>
              <p className="text-muted-foreground">Estamos comprometidos em manter a excelência.</p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="bg-background">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <RevealSection>
            <h2 className="text-3xl md:text-4xl text-center mb-4">
              <span className="font-jamjuree font-700 text-[#29C8EB] mx-1">Nossos</span>
              <span className="font-jakarta font-800 text-white mx-1">Serviços</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Oferecemos soluções completas para gestão e crescimento do seu patrimônio</p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <RevealSection key={index} delay={index * 0.1}>
                <div className="bg-card border border-border rounded-lg p-6 hover:border-[#29C8EB] transition-all duration-300 h-full">
                  <service.icon className="w-12 h-12 text-[#29C8EB] mb-4" />
                  <h3 className="text-xl font-jamjuree font-600 mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <HomeTestimonials testimonials={testimonials} />

      {/* Quem Somos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <RevealSection>
              <h2 className="text-3xl md:text-4xl mb-6">
                <span className="font-jamjuree font-700 text-gray-900 mx-1">Construa</span>
                <span className="font-poppins font-600 text-[#29C8EB] mx-1">seu</span>
                <span className="font-caveat font-bold text-gray-900 mx-1">legado</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">Nosso propósito é fazer parte de todas as grandes conquistas da vida das pessoas.</p>
            </RevealSection>

            <RevealSection delay={0.2}>
              <div className="aspect-video bg-muted rounded-2xl overflow-hidden">
                <Image src="/awards.jpg" alt="Sala de reuniões VMB Advisor" width={800} height={450} className="w-full h-full object-cover" />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="py-20 bg-black">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealSection>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <Image src="/office-1.png" alt="Escritório VMB Advisor" width={800} height={450} className="w-full h-full object-cover" />
              </div>
            </RevealSection>

            <RevealSection delay={0.2}>
              <h2 className="text-3xl md:text-4xl mb-6">
                <span className="font-jamjuree font-700 text-white mx-1">Sobre</span>
                <span className="font-jakarta font-800 text-[#29C8EB] mx-1">a</span>
                <span className="font-poppins font-600 text-white mx-1">VMB</span>
                <span className="font-caveat font-bold text-[#29C8EB] mx-1">Advisor</span>
              </h2>
              <p className="text-muted-foreground mb-4">Somos uma consultoria especializada em soluções financeiras estratégicas.</p>
              <p className="text-muted-foreground mb-6">Com anos de experiência no mercado, nossa equipe oferece atendimento personalizado.</p>
              <a href="https://api.whatsapp.com/send/?phone=5521972674227" target="_blank" rel="noopener noreferrer">
                <Button className="border-[#29C8EB] text-white hover:underline cursor-pointer">Saiba Mais <ArrowRight className="ml-2 w-4 h-4" /></Button>
              </a>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-background to-black">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 text-center">
          <RevealSection>
            <h2 className="text-3xl md:text-4xl mb-6">
              <span className="font-jamjuree font-700 text-white mx-1">Pronto</span>
              <span className="font-jakarta font-800 text-[#29C8EB] mx-1">para</span>
              <span className="font-poppins font-600 text-white mx-1">transformar</span>
              <span className="font-caveat font-bold text-[#29C8EB] mx-1">seu</span>
              <span className="font-jamjuree font-700 text-white mx-1">patrimônio?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Entre em contato conosco e descubra como podemos ajudar você</p>
            <a href="https://api.whatsapp.com/send/?phone=5521972674227" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#29C8EB] hover:bg-[#29C8EB]/90 text-background font-semibold cursor-pointer">Fale com um Especialista <ArrowRight className="ml-2 w-5 h-5" /></Button>
            </a>
          </RevealSection>
        </div>
      </section>
      <Footer />
    </div>
  );
}
