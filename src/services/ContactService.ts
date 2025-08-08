import { ContactModel, Contact } from '../models/ContactModel';

export class ContactService {
  constructor(private contactModel: ContactModel) {}

  async createContact(contact: Contact): Promise<{ created: boolean; contactId?: number }> {
    const exists = contact.phone ? await this.contactModel.findByPhone(contact.phone) : null;
    if (exists && typeof exists.id === 'number') {
      return { created: false, contactId: exists.id };
    }
    const contactId = await this.contactModel.create(contact);
    return { created: true, contactId };
  }
}
