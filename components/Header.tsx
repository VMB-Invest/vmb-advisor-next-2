"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Sobre Nós", path: "/sobre" },
    { name: "Equipe", path: "/equipes" },
    { name: "Localização", path: "/local" },
    { name: "Trabalhe Conosco", path: "/carreiras" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-black border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="flex items-center justify-between py-3 md:py-0">
          <Link href="/" className="flex items-center">
            <Image src="/VMB_Advisor.png" alt="VMB Advisor" width={144} height={48} className="w-24 md:w-36" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-end">
            <div className="flex items-center gap-8 text-sm text-white py-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`hover:text-[#29C8EB] transition-colors font-light relative ${
                    isActive(item.path) ? "text-[#29C8EB] font-medium" : ""
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-4 left-0 right-0 h-0.5 bg-[#29C8EB]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
              <a href="https://api.whatsapp.com/send/?phone=5521968316667&text=Ol%C3%A1%21+Gostaria+de+iniciar+uma+mentoria+de+investimentos+com+a+VMB+Advisor.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#29C8EB] hover:bg-[#29C8EB]/90 text-white font-medium px-6 py-2 text-sm cursor-pointer">
                  Iniciar mentoria
                </Button>
              </a>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`hover:text-[#29C8EB] text-white transition-colors font-light py-2 ${
                      isActive(item.path) ? "text-[#29C8EB] font-medium" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 space-y-3">
                  <a href="https://api.whatsapp.com/send/?phone=5521968316667&text=Ol%C3%A1%21+Gostaria+de+iniciar+uma+mentoria+de+investimentos+com+a+VMB+Advisor.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                    <Button className="bg-[#29C8EB] hover:bg-[#29C8EB]/90 text-white font-semibold w-full cursor-pointer">
                      INICIAR MENTORIA
                    </Button>
                  </a>
                  
                  <div className="border-t border-white/20 pt-3 space-y-3">
                    <a href="https://api.whatsapp.com/send/?phone=5521968316667&text=Ol%C3%A1%2C+tenho+interesse+em+me+planejar+financeiramente.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                      <Button size="sm" className="bg-white mb-4 hover:bg-gray-100 text-black font-semibold w-full text-xs uppercase tracking-wide cursor-pointer">
                        SEJA CLIENTE
                      </Button>
                    </a>                   
                    <a href="https://api.whatsapp.com/send/?phone=5521968316667&text=Ol%C3%A1%21+Gostaria+de+entrar+em+contato+com+um+especialista+em+Financial+Advisor.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                      <Button size="sm" className="bg-[#29C8EB] hover:bg-[#29C8EB]/90 text-white font-semibold w-full text-xs uppercase tracking-wide cursor-pointer">
                        Planner financeiro
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
