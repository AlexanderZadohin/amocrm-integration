import { db } from '../database/db';

export interface Deal {
  id?: number;
  title: string;
  status: string;
  contact_id: number;
  created_at?: Date;
}

export class DealModel {
  async findByTitleAndContactId(title: string, contact_id: number): Promise<Deal | null> {
    const [rows] = await db.query(
      'SELECT * FROM deals WHERE title = ? AND contact_id = ?',
      [title, contact_id]
    );
    const deals = rows as Deal[];
    return deals[0] || null;
  }

  async create(deal: Deal): Promise<number> {
    const [result]: any = await db.query(
      'INSERT INTO deals (title, status, contact_id) VALUES (?, ?, ?)',
      [deal.title, deal.status, deal.contact_id]
    );
    return result.insertId;
  }
}
