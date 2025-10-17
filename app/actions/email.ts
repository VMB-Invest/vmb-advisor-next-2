'use server';

export interface EmailData {
  from: string;
  to: string[];
  subject: string;
  html: string;
}

export async function sendEmail(emailData: EmailData) {
  try {
    const response = await fetch("https://function-bun-production-8100.up.railway.app/api/send-email", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Erro ao enviar email');
    }

    return { success: true, data: result };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Erro desconhecido' };
  }
}
