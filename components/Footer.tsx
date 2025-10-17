import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contato */}
          <div>
            <h3 className="text-primary font-jamjuree font-600 text-lg mb-4">Contato</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium mb-1">Plaza Shopping</p>
                  <p>Plaza Corporate Offices</p>
                  <p>Rua XV de Novembro, nº 4 - Sala 1004</p>
                  <p>Centro, Niterói - RJ</p>
                  <p>CEP: 24020-125</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+5521351324" className="hover:text-primary transition-colors">
                  (21) 3513-2404
                </a>
              </div>              
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-primary font-jamjuree font-600 text-lg mb-4">Links Rápidos</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <Link href="/" className="block hover:text-primary transition-colors">Home</Link>
              <Link href="/sobre" className="block hover:text-primary transition-colors">Sobre Nós</Link>
              <Link href="/equipes" className="block hover:text-primary transition-colors">Equipe</Link>
              <Link href="/local" className="block hover:text-primary transition-colors">Localização</Link>
              <Link href="/carreiras" className="block hover:text-primary transition-colors">Trabalhe Conosco</Link>
            </div>
          </div>

          {/* Horário de Atendimento */}
          <div>
            <h3 className="text-primary font-jamjuree font-600 text-lg mb-4">Horário de Atendimento</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Segunda a Sexta</p>
              <p className="text-white">09:00 - 18:00</p>
              <p className="mt-4">Sábados e Domingos</p>
              <p className="text-white">Fechado</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} VMB Advisor. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
