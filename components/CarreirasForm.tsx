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
          title: "Candidatura enviada com sucesso!",
          description: "Analisaremos seu currículo e retornaremos em breve.",
        });
        setFormData({ name: "", email: "", phone: "", area: "", message: "" });
      } else {
        toast({
          title: "Erro ao enviar candidatura",
          description: result.error || "Por favor, tente novamente ou entre em contato por telefone.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar candidatura",
        description: "Por favor, tente novamente ou entre em contato por telefone.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="max-w-2xl mx-auto">
          <RevealSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Candidatura Espontânea
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Não encontrou a vaga ideal? Envie seu currículo e entraremos em contato quando surgir uma oportunidade
            </p>
          </RevealSection>

          <RevealSection delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card border-border"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card border-border"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Telefone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-card border-border"
                />
              </div>
              <div>
                <Select value={formData.area} onValueChange={(value) => setFormData({ ...formData, area: value })}>
                  <SelectTrigger className="bg-card border-border">
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
                  className="bg-card border-border"
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/90 text-background font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Enviando..." : "Enviar Candidatura"}
              </Button>
            </form>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
