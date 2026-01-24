import { ContactFormData } from '../validators/contact.schema';
import { DemoRequestData } from '../validators/demo.schema';
import axios from 'axios';

export class EmailService {
  private notificationEmail: string;
  private fromEmail: string;
  private apiKey: string;

  constructor() {
    this.notificationEmail = process.env.NOTIFICATION_EMAIL || 'hello@forgeroute.com';
    this.fromEmail = process.env.ZOHO_EMAIL || 'noreply@forgeroutelabs.com';
    this.apiKey = process.env.ZEPTOMAIL_API_KEY || '';
  }

  async sendContactNotification(data: ContactFormData): Promise<void> {
    try {
      await axios.post(
        'https://api.zeptomail.com/v1.1/email',
        {
          from: {
            address: this.fromEmail,
            name: 'ForgeRoute Labs'
          },
          to: [
            {
              email_address: {
                address: this.notificationEmail
              }
            }
          ],
          reply_to: [
            {
              address: data.email,
              name: data.name
            }
          ],
          subject: `New Contact Form Submission from ${data.name}`,
          htmlbody: this.generateContactEmailHtml(data)
        },
        {
          headers: {
            'Authorization': this.apiKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );

      console.log('[EMAIL] Contact form notification sent successfully');
    } catch (error) {
      console.error('[EMAIL] Failed to send contact notification:', error);
      throw new Error('Failed to send email notification');
    }
  }

  async sendDemoNotification(data: DemoRequestData): Promise<void> {
    try {
      await axios.post(
        'https://api.zeptomail.com/v1.1/email',
        {
          from: {
            address: this.fromEmail,
            name: 'ForgeRoute Labs'
          },
          to: [
            {
              email_address: {
                address: this.notificationEmail
              }
            }
          ],
          reply_to: [
            {
              address: data.email,
              name: data.name
            }
          ],
          subject: `New Demo Request from ${data.name} at ${data.company}`,
          htmlbody: this.generateDemoEmailHtml(data)
        },
        {
          headers: {
            'Authorization': this.apiKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );

      console.log('[EMAIL] Demo request notification sent successfully');
    } catch (error) {
      console.error('[EMAIL] Failed to send demo notification:', error);
      throw new Error('Failed to send email notification');
    }
  }

  private generateContactEmailHtml(data: ContactFormData): string {
    return `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
      ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
      ${data.source ? `<p><strong>Source:</strong> ${data.source}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `;
  }

  private generateDemoEmailHtml(data: DemoRequestData): string {
    return `
      <h2>New Demo Request</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company}</p>
      ${data.jobTitle ? `<p><strong>Job Title:</strong> ${data.jobTitle}</p>` : ''}
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Product Interest:</strong> ${data.productInterest}</p>
      ${data.companySize ? `<p><strong>Company Size:</strong> ${data.companySize}</p>` : ''}
      ${data.preferredDate ? `<p><strong>Preferred Date:</strong> ${data.preferredDate}</p>` : ''}
      ${data.preferredTime ? `<p><strong>Preferred Time:</strong> ${data.preferredTime}</p>` : ''}
      ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ''}
    `;
  }
}

export const emailService = new EmailService();
