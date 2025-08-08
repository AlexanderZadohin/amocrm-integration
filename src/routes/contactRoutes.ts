import { Router } from 'express';
import { ContactController } from '../controllers/ContactController';

const router = Router();

router.post('/contacts', ContactController.createContact);

export default router;
