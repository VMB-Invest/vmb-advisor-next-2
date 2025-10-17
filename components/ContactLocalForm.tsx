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
          title: 'Mensagem enviada com sucesso!',
          description: 'Entraremos em contato em breve.',
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        toast({
          title: 'Erro ao enviar mensagem',
          description: result.error || 'Por favor, tente novamente ou entre em contato por telefone.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Erro ao enviar mensagem',
        description: 'Por favor, tente novamente ou entre em contato por telefone.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RevealSection>
      <h1 className="text-4xl md:text-5xl font-jakarta font-800 mb-6">
        Entre em <span className="text-primary">Contato</span>
      </h1>
      <p className="text-muted-foreground mb-8">
        Estamos aqui para ajudar você a planejar seu futuro financeiro. Entre em contato conosco para discutir suas necessidades de investimento.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Nome
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Seu nome completo"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="bg-secondary border-border"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="seu.email@exemplo.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="bg-secondary border-border"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Telefone
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="(11) 99999-9999"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            className="bg-secondary border-border"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Mensagem
          </label>
          <Textarea
            id="message"
            placeholder="Sua mensagem"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={5}
            className="bg-secondary border-border"
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary hover:bg-primary/90 text-background font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
        </Button>
      </form>
    </RevealSection>
  );
}
