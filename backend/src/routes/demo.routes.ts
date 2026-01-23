import { Router } from 'express';
import { submitDemo } from '../controllers/demo.controller';
import { validateRequest } from '../middleware/validator';
import { demoRateLimiter } from '../middleware/rate-limiter';
import { demoRequestSchema } from '../validators/demo.schema';

const router = Router();

router.post(
  '/',
  demoRateLimiter,
  validateRequest(demoRequestSchema),
  submitDemo
);

export default router;
