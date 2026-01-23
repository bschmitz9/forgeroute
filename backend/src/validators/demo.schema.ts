import { z } from 'zod';

export const demoRequestSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name is required').max(100),
  jobTitle: z.string().max(100).optional(),
  phone: z.string().min(10, 'Phone number is required').max(20),
  productInterest: z.string().min(1, 'Please select a product'),
  companySize: z.enum(['SMALL', 'MEDIUM', 'LARGE', 'ENTERPRISE']).optional(),
  preferredDate: z.string().optional(),
  preferredTime: z.enum(['MORNING', 'AFTERNOON', 'EVENING']).optional(),
  message: z.string().max(2000).optional(),
});

export type DemoRequestData = z.infer<typeof demoRequestSchema>;
