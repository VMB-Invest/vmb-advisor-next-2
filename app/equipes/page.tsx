import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import RevealSection from "@/components/RevealSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const equipe = [
    {
      nome: "Henrique Regent",
      cargo: "Head Financial Advisor",
      descricao: "Planejador financeiro e consultor financeiro com vasta experiência no mercado. Como Head da equipe, lidera estratégias de investimento e planejamento patrimonial, garantindo excelência no atendimento aos clientes.",
      foto: "/team-member-3.jpg",
    },
    {
      nome: "Julia Nunes",
      cargo: "Financial Advisor",
      descricao: "Consultora financeira especializada em planejamento estratégico e gestão de investimentos, oferecendo soluções personalizadas para cada perfil de cliente.",
      foto: "/team-member-2.jpg",
    },
    {
      nome: "Júlia de Gouveia",
      cargo: "SDR Estagiária",
      descricao: "Responsável pelo desenvolvimento de relacionamentos e prospecção de novos clientes, garantindo o primeiro contato de qualidade e direcionamento adequado.",
      foto: "/team-member-1.jpg",
    },
  ];

export default function Equipe() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-background">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/600')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-10 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Nossa <span className="text-primary">Equipe</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Profissionais altamente qualificados dedicados ao seu sucesso
          </p>
        </div>
      </section>

      {/* Equipe */}
      <section className="pb-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipe.map((membro, index) => (
              <RevealSection key={index} delay={index * 0.1}>
                <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 group h-full flex flex-col">
                  <div className="aspect-square bg-muted overflow-hidden">
                    <Image 
                      src={membro.foto} 
                      alt={membro.nome}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-1">{membro.nome}</h3>
                    <p className="text-primary text-sm mb-3">{membro.cargo}</p>
                    <p className="text-muted-foreground text-sm mb-4 flex-1">{membro.descricao}</p>
                    <div className="flex gap-3 mt-auto">
                      <a
                        href="#"
                        className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href="#"
                        className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Cultura */}
      <section className="py-20 bg-black">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossa Cultura</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Na VMB Advisor, cultivamos um ambiente de colaboração, inovação e crescimento contínuo. 
                  Acreditamos que o sucesso dos nossos clientes começa com uma equipe motivada e comprometida.
                </p>
                <p>
                  Investimos constantemente em capacitação e desenvolvimento profissional, garantindo que 
                  nossa equipe esteja sempre atualizada com as melhores práticas do mercado.
                </p>
                <p>
                  Valorizamos a diversidade, a ética e o respeito mútuo, criando um espaço onde cada 
                  profissional pode contribuir com suas habilidades únicas.
                </p>
              </div>
            </RevealSection>

            <RevealSection delay={0.2}>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <Image 
                  src="/office-2.png" 
                  alt="Ambiente de trabalho VMB Advisor"
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
