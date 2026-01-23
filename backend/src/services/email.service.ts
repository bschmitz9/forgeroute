import { ContactFormData } from '../validators/contact.schema';
import { DemoRequestData } from '../validators/demo.schema';
import nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';

export class EmailService {
  private transporter: Transporter;
  private notificationEmail: string;
  private fromEmail: string;

  constructor() {
    this.notificationEmail = process.env.NOTIFICATION_EMAIL || 'hello@forgeroute.com';
    this.fromEmail = process.env.ZOHO_EMAIL || 'noreply@forgeroutelabs.com';

    // Create Zoho SMTP transporter
    this.transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
      },
    });
  }

  async sendContactNotification(data: ContactFormData): Promise<void> {
    try {
      await this.transporter.sendMail({
        from: `"ForgeRoute Labs" <${this.fromEmail}>`,
        to: this.notificationEmail,
        replyTo: data.email,
        subject: `New Contact Form Submission from ${data.name}`,
        html: this.generateContactEmailHtml(data),
      });

      console.log('[EMAIL] Contact form notification sent successfully');
    } catch (error) {
      console.error('[EMAIL] Failed to send contact notification:', error);
      throw new Error('Failed to send email notification');
    }
  }

  async sendDemoNotification(data: DemoRequestData): Promise<void> {
    try {
      await this.transporter.sendMail({
        from: `"ForgeRoute Labs" <${this.fromEmail}>`,
        to: this.notificationEmail,
        replyTo: data.email,
        subject: `New Demo Request from ${data.name} at ${data.company}`,
        html: this.generateDemoEmailHtml(data),
      });

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
