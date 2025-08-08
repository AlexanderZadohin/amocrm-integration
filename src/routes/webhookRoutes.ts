import { Router } from 'express';
import { WebhookController } from '../controllers/WebhookController';

const router = Router();
router.post('/webhook', WebhookController.handleWebhook);

export default router;
