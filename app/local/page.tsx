import { MapPin, Phone } from "lucide-react";
import RevealSection from "@/components/RevealSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactLocalForm from "@/components/ContactLocalForm";
import { submitContactForm } from "@/app/actions/contato";

const Localizacao = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Seção de Contato */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <ContactLocalForm onSubmit={submitContactForm} />

            {/* Informações de Contato */}
            <RevealSection delay={0.2}>
              <h2 className="text-3xl font-jamjuree font-700 mb-8">
                Informações de Contato
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-jamjuree font-600 text-lg mb-1">Telefone</h3>
                    <a href="tel:+5521351324" className="text-muted-foreground hover:text-primary transition-colors">
                      (21) 3513-2404
                    </a>
                  </div>
                </div>                

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-jamjuree font-600 text-lg mb-2">Localização</h3>
                    <p className="text-foreground font-semibold mb-1">Plaza Shopping</p>
                    <div className="text-muted-foreground text-sm space-y-1">
                      <p>Plaza Corporate Offices</p>
                      <p>Rua XV de Novembro, nº 4 - Sala 1004</p>
                      <p>Centro, Niterói - RJ</p>
                      <p>CEP: 24020-125</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mapa */}
              <div className="w-full h-[400px] rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d917.9423784746996!2d-43.12499270000001!3d-22.8962074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99839bb8a5b27b%3A0xfebadee89bf3cc74!2sVMB%20Invest%20%7C%20Empresa%20credenciada%20%C3%A0%20XP%20Investimentos!5e0!3m2!1spt-BR!2sbr!4v1696789200000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização VMB Invest"
                />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Localizacao;
