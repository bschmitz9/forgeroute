import { Router } from 'express';
import { submitContact } from '../controllers/contact.controller';
import { validateRequest } from '../middleware/validator';
import { contactRateLimiter } from '../middleware/rate-limiter';
import { contactFormSchema } from '../validators/contact.schema';

const router = Router();

router.post(
  '/',
  contactRateLimiter,
  validateRequest(contactFormSchema),
  submitContact
);

export default router;
