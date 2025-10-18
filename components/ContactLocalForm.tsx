'use client';

import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import RevealSection from '@/components/RevealSection';

interface ContactLocalFormProps {
  onSubmit: (data: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => Promise<{ success: boolean; error?: string }>;
}

export default function ContactLocalForm({ onSubmit }: ContactLocalFormProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await onSubmit(formData);

      if (result.success) {
        toast({
          title: '✅ Mensagem enviada com sucesso!',
          description: 'Recebemos sua mensagem e entraremos em contato em breve.',
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        toast({
          title: '❌ Erro ao enviar mensagem',
          description: result.error || 'Não foi possível enviar sua mensagem. Por favor, tente novamente ou entre em contato por telefone.',
          variant: 'destructive',
        });
      }
    } catch {
      toast({
        title: '❌ Erro ao enviar mensagem',
        description: 'Ocorreu um erro inesperado. Por favor, tente novamente ou entre em contato por telefone: (11) 3078-2858',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RevealSection>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-jakarta font-800 mb-4 sm:mb-6 text-center lg:text-left">
        Entre em <span className="text-[#29C8EB]">Contato</span>
      </h1>
      <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 text-center lg:text-left">
        Estamos aqui para ajudar você a planejar seu futuro financeiro. Entre em contato conosco para discutir suas necessidades de investimento.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
        <div>
          <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-2">
            Nome
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Seu nome completo"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="bg-secondary border-border h-11 sm:h-12 text-sm sm:text-base"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-2">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="seu.email@exemplo.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="bg-secondary border-border h-11 sm:h-12 text-sm sm:text-base"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs sm:text-sm font-medium mb-2">
            Telefone
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="(11) 99999-9999"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            className="bg-secondary border-border h-11 sm:h-12 text-sm sm:text-base"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-2">
            Mensagem
          </label>
          <Textarea
            id="message"
            placeholder="Sua mensagem"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={5}
            className="bg-secondary border-border text-sm sm:text-base min-h-[120px] sm:min-h-[140px]"
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#29C8EB] hover:bg-[#29C8EB]/90 text-background font-semibold disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer h-11 sm:h-12 text-sm sm:text-base"
        >
          {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
        </Button>
      </form>
    </RevealSection>
  );
}
