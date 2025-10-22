'use server';

import { sendEmail } from './email';

interface JobApplicationData {
  name: string;
  email: string;
  phone: string;
  area: string;
  message: string;
}

const formatAreaName = (area: string) => {
  const areas: { [key: string]: string } = {
    'investimentos': 'Investimentos',
    'consultoria': 'Consultoria',
    'compliance': 'Compliance',
    'relacionamento': 'Relacionamento',
    'administrativo': 'Administrativo'
  };
  return areas[area] || area;
};

export async function submitJobApplication(data: JobApplicationData) {
  try {
    const emailData = {
      from: 'VMB Advisor Carreiras <onboarding@resend.dev>',
      to: ['rh@vmbinvest.com'],
      subject: `Nova candidatura: ${data.name} - ${formatAreaName(data.area)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f7f7f7;">
          <div style="background-color: #161616; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: #25c5ef; margin: 0;">VMB Advisor</h1>
            <p style="color: #ffffff; margin: 10px 0 0 0;">Nova Candidatura Recebida</p>
          </div>
          <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 8px 8px;">
            <h2 style="color: #161616; margin-top: 0;">Informações do Candidato</h2>
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
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                  <strong style="color: #25c5ef;">Área de Interesse:</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                  ${formatAreaName(data.area)}
                </td>
              </tr>
            </table>
            ${data.message ? `
            <div style="margin-top: 20px;">
              <strong style="color: #25c5ef;">Mensagem:</strong>
              <div style="background-color: #f7f7f7; padding: 15px; border-radius: 8px; margin-top: 10px; white-space: pre-wrap;">
                ${data.message}
              </div>
            </div>
            ` : ''}
          </div>
          <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 12px;">
            <p style="margin: 0;">© 2025 VMB Advisor. Todos os direitos reservados.</p>
            <p style="margin: 5px 0 0 0;">Este email foi enviado através do formulário de carreiras do site.</p>
          </div>
        </div>
      `
    };

    return await sendEmail(emailData);
  } catch (error) {
    console.error('Erro ao enviar candidatura:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Erro desconhecido' };
  }
}
