'use server';

import { sendEmail } from './email';

interface ContactData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function submitContactForm(data: ContactData) {
  try {
    const emailData = {
      from: 'Lead Novo - VMB Advisor <onboarding@vmbadvisor.com>',
      to: ['rh@vmbinvest.com'],
      subject: `Novo contato de ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f7f7f7;">
          <div style="background-color: #161616; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: #25c5ef; margin: 0;">VMB Advisor</h1>
            <p style="color: #ffffff; margin: 10px 0 0 0;">Nova mensagem de contato</p>
          </div>
          <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 8px 8px;">
            <h2 style="color: #161616; margin-top: 0;">Informações do Cliente</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                  <strong style="color: #25c5ef;">Nome:</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                  ${data.name}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                  <strong style="color: #25c5ef;">Email:</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                  <a href="mailto:${data.email}" style="color: #161616; text-decoration: none;">
                    ${data.email}
                  </a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                  <strong style="color: #25c5ef;">Telefone:</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                  <a href="tel:${data.phone}" style="color: #161616; text-decoration: none;">
                    ${data.phone}
                  </a>
                </td>
              </tr>
            </table>
            <div style="margin-top: 20px;">
              <strong style="color: #25c5ef;">Mensagem:</strong>
              <div style="background-color: #f7f7f7; padding: 15px; border-radius: 8px; margin-top: 10px; white-space: pre-wrap;">
                ${data.message}
              </div>
            </div>
          </div>
          <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 12px;">
            <p style="margin: 0;">© 2025 VMB Advisor. Todos os direitos reservados.</p>
          </div>
        </div>
      `
    };

    return await sendEmail(emailData);
  } catch (error) {
    console.error('Erro ao enviar contato:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Erro desconhecido' };
  }
}
