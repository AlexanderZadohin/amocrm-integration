import { Request, Response } from 'express';
import { DealService } from '../services/DealService';
import { DealModel } from '../models/DealModel';

const dealService = new DealService(new DealModel());

export class DealController {
  static async createDeal(req: Request, res: Response) {
    try {
      const { title, status, contact_id } = req.body;
      const result = await dealService.createDeal({ title, status, contact_id });
      if (result.created) {
        res.status(201).json({ message: 'Deal created', dealId: result.dealId });
      } else {
        res.status(200).json({ message: 'Deal already exists', dealId: result.dealId });
      }
    } catch (e) {
      console.error('DealController error:', e);
      res.status(500).json({ error: 'Internal server error', details: e });
    }
  }
}
