import { Request, Response } from 'express';
import { ContactService } from '../services/ContactService';
import { ContactModel, Contact } from '../models/ContactModel';

const contactService = new ContactService(new ContactModel());

export class ContactController {
  static async createContact(req: Request, res: Response) {
    try {
      const contact: Contact = req.body; // типизировано!
      const result = await contactService.createContact(contact);
      if (result.created) {
        res.status(201).json({ message: 'Contact created', contactId: result.contactId });
      } else {
        res.status(200).json({ message: 'Contact already exists', contactId: result.contactId });
      }
    } catch (e) {
      console.error('ContactController error:', e); // Лог ошибки
      res.status(500).json({ error: 'Internal server error', details: e });
    }
  }
}
