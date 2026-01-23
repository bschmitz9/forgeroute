import { Request, Response } from 'express';
import prisma from '../config/database';
import { emailService } from '../services/email.service';
import { DemoRequestData } from '../../../shared/validators/demo.schema';

export const submitDemo = async (req: Request, res: Response) => {
  try {
    const data: DemoRequestData = req.body;
    const ipAddress = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || null;
    const userAgent = req.headers['user-agent'] || null;

    // Save to database
    await prisma.demoRequest.create({
      data: {
        name: data.name,
        email: data.email,
        company: data.company,
        jobTitle: data.jobTitle || null,
        phone: data.phone,
        productInterest: data.productInterest,
        companySize: data.companySize || null,
        preferredDate: data.preferredDate ? new Date(data.preferredDate) : null,
        preferredTime: data.preferredTime || null,
        message: data.message || null,
        ipAddress,
        userAgent,
      },
    });

    // Send email notification
    await emailService.sendDemoNotification(data);

    res.status(200).json({
      success: true,
      message: 'Thank you for requesting a demo! We\'ll contact you soon to schedule.',
    });
  } catch (error) {
    console.error('Error submitting demo request:', error);
    res.status(500).json({
      success: false,
      error: {
        code: 'SUBMISSION_ERROR',
        message: 'Failed to submit demo request. Please try again.',
      },
    });
  }
};
