import { DealModel, Deal } from '../models/DealModel';

export class DealService {
  constructor(private dealModel: DealModel) {}

  async createDeal(deal: Deal): Promise<{ created: boolean; dealId?: number }> {
    const exists = await this.dealModel.findByTitleAndContactId(deal.title, deal.contact_id);
    if (exists && typeof exists.id === 'number') {
      return { created: false, dealId: exists.id };
    }
    const dealId = await this.dealModel.create(deal);
    return { created: true, dealId };
  }
}
