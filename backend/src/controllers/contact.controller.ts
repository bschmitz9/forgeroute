import { Request, Response } from 'express';
import prisma from '../config/database';
import { emailService } from '../services/email.service';
import { ContactFormData } from '../validators/contact.schema';

export const submitContact = async (req: Request, res: Response) => {
  try {
    const data: ContactFormData = req.body;
    const ipAddress = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || null;
    const userAgent = req.headers['user-agent'] || null;

    // Save to database
    await prisma.contactSubmission.create({
      data: {
        name: data.name,
        email: data.email,
        company: data.company || null,
        phone: data.phone || null,
        message: data.message,
        source: data.source || null,
        ipAddress,
        userAgent,
      },
    });

    // Send email notification
    await emailService.sendContactNotification(data);

    res.status(200).json({
      success: true,
      message: 'Thank you for contacting us! We\'ll get back to you soon.',
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({
      success: false,
      error: {
        code: 'SUBMISSION_ERROR',
        message: 'Failed to submit contact form. Please try again.',
      },
    });
  }
};
