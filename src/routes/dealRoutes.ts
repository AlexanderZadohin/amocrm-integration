import { Router } from 'express';
import { DealController } from '../controllers/DealController';

const router = Router();

router.post('/deals', DealController.createDeal);

export default router;
