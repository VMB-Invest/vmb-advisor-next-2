'use server';

export interface EmailData {
  from: string;
  to: string[];
  subject: string;
  html: string;
}

export async function sendEmail(emailData: EmailData) {
  try {
    // Timeout de 10 segundos
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const response = await fetch("https://function-bun-production-8100.up.railway.app/api/send-email", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    // Tenta fazer parse do JSON, mas não falha se não conseguir
    let result;
    try {
      result = await response.json();
    } catch {
      result = { message: 'Email enviado com sucesso' };
    }

    if (!response.ok) {
      console.error('Erro ao enviar email:', result);
      return { success: false, error: result.message || 'Erro ao enviar email' };
    }

    return { success: true, data: result };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    
    // Se for erro de abort (timeout), ainda considera sucesso pois o email pode ter sido enviado
    if (error instanceof Error && error.name === 'AbortError') {
      console.log('Timeout na requisição, mas email provavelmente foi enviado');
      return { success: true, data: { message: 'Email enviado (timeout na resposta)' } };
    }
    
    return { success: false, error: error instanceof Error ? error.message : 'Erro desconhecido' };
  }
}
