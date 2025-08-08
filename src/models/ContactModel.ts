import { db } from '../database/db';

export interface Contact {
  id?: number;
  name: string;
  phone?: string;
  email?: string;
  created_at?: Date;
}

export class ContactModel {
  async findByPhone(phone: string): Promise<Contact | null> {
    const [rows] = await db.query('SELECT * FROM contacts WHERE phone = ?', [phone]);
    const contacts = rows as Contact[];
    return contacts[0] || null;
  }

  async create(contact: Contact): Promise<number> {
    const [result]: any = await db.query(
      'INSERT INTO contacts (name, phone, email) VALUES (?, ?, ?)',
      [contact.name, contact.phone, contact.email]
    );
    // @ts-ignore — тут можно убрать, если явно указать тип result
    return result.insertId;
  }
}
