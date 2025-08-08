import { Request, Response } from 'express';

export class WebhookController {
  static async handleWebhook(req: Request, res: Response) {
    try {
      const event = req.body;

      // Логируем всё для отладки:
      console.log('Received webhook:', JSON.stringify(event, null, 2));

      // --- Пример обработки событий ---
      if (event.contacts) {
        if (event.contacts.add) {
          // Контакт добавлен
          event.contacts.add.forEach((contact: any) => {
            // Можно что-то делать, например, писать в БД или отправлять уведомление
            console.log('Контакт добавлен:', contact);
          });
        }
        if (event.contacts.update) {
          // Контакт изменён
          event.contacts.update.forEach((contact: any) => {
            console.log('Контакт изменён:', contact);
          });
        }
      }

      if (event.leads) {
        if (event.leads.add) {
          // Сделка добавлена
          event.leads.add.forEach((lead: any) => {
            console.log('Сделка добавлена:', lead);
          });
        }
        if (event.leads.update) {
          // Сделка изменена
          event.leads.update.forEach((lead: any) => {
            console.log('Сделка изменена:', lead);
          });
        }
      }
      // --- конец примера ---

      res.status(200).json({ received: true });
    } catch (e) {
      console.error('Webhook error:', e);
      res.status(500).json({ error: 'Internal error', details: e });
    }
  }
}
