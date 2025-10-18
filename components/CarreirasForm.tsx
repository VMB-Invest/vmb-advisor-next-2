"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import RevealSection from "@/components/RevealSection";

interface CarreirasFormProps {
  onSubmit: (data: {
    name: string;
    email: string;
    phone: string;
    area: string;
    message: string;
  }) => Promise<{ success: boolean; error?: string }>;
}

export default function CarreirasForm({ onSubmit }: CarreirasFormProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    area: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.area) {
      toast({
        title: "Área de interesse obrigatória",
        description: "Por favor, selecione uma área de interesse.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const result = await onSubmit(formData);

      if (result.success) {
        toast({
          title: "✅ Candidatura enviada com sucesso!",
          description: "Recebemos sua candidatura e analisaremos seu currículo. Retornaremos em breve!",
        });
        setFormData({ name: "", email: "", phone: "", area: "", message: "" });
      } else {
        toast({
          title: "❌ Erro ao enviar candidatura",
          description: result.error || "Não foi possível enviar sua candidatura. Por favor, tente novamente ou entre em contato por telefone.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "❌ Erro ao enviar candidatura",
        description: "Ocorreu um erro inesperado. Por favor, tente novamente ou entre em contato por telefone: (11) 3078-2858",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RevealSection delay={0.2}>
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <Input
                  type="text"
                  placeholder="Nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card border-border h-11 sm:h-12 text-sm sm:text-base"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card border-border h-11 sm:h-12 text-sm sm:text-base"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Telefone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-card border-border h-11 sm:h-12 text-sm sm:text-base"
                />
              </div>
              <div>
                <Select value={formData.area} onValueChange={(value) => setFormData({ ...formData, area: value })}>
                  <SelectTrigger className="bg-card border-border h-11 sm:h-12 text-sm sm:text-base">
                    <SelectValue placeholder="Área de interesse" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="investimentos">Investimentos</SelectItem>
                    <SelectItem value="consultoria">Consultoria</SelectItem>
                    <SelectItem value="compliance">Compliance</SelectItem>
                    <SelectItem value="relacionamento">Relacionamento</SelectItem>
                    <SelectItem value="administrativo">Administrativo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Textarea
                  placeholder="Conte-nos sobre você e sua experiência"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-card border-border text-sm sm:text-base min-h-[120px] sm:min-h-[140px]"
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#29C8EB] hover:bg-[#29C8EB]/90 text-background font-semibold disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer h-11 sm:h-12 text-sm sm:text-base"
              >
                {isLoading ? "Enviando..." : "Enviar Candidatura"}
              </Button>
            </form>
    </RevealSection>
  );
}
