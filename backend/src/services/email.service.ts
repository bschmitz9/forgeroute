import { ContactFormData } from '../../../shared/validators/contact.schema';
import { DemoRequestData } from '../../../shared/validators/demo.schema';

export class EmailService {
  private apiKey: string;
  private notificationEmail: string;

  constructor() {
    this.apiKey = process.env.RESEND_API_KEY || '';
    this.notificationEmail = process.env.NOTIFICATION_EMAIL || 'hello@forgeroute.com';
  }

  async sendContactNotification(data: ContactFormData): Promise<void> {
    // TODO: Implement actual email sending with Resend
    // For now, just log the submission
    console.log('[EMAIL] Contact form submission:', {
      to: this.notificationEmail,
      from: data.email,
      subject: `New Contact Form Submission from ${data.name}`,
      data,
    });

    // Uncomment when Resend API key is available:
    /*
    const resend = new Resend(this.apiKey);
    await resend.emails.send({
      from: 'ForgeRoute Labs <noreply@forgeroute.com>',
      to: this.notificationEmail,
      subject: `New Contact Form Submission from ${data.name}`,
      html: this.generateContactEmailHtml(data),
    });
    */
  }

  async sendDemoNotification(data: DemoRequestData): Promise<void> {
    // TODO: Implement actual email sending with Resend
    // For now, just log the submission
    console.log('[EMAIL] Demo request submission:', {
      to: this.notificationEmail,
      from: data.email,
      subject: `New Demo Request from ${data.name} at ${data.company}`,
      data,
    });

    // Uncomment when Resend API key is available:
    /*
    const resend = new Resend(this.apiKey);
    await resend.emails.send({
      from: 'ForgeRoute Labs <noreply@forgeroute.com>',
      to: this.notificationEmail,
      subject: `New Demo Request from ${data.name} at ${data.company}`,
      html: this.generateDemoEmailHtml(data),
    });
    */
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
