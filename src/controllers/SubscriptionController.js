import SubscriptionService from '../services/SubscriptionService.js';

class SubscriptionController {
  #subService = new SubscriptionService();

  async subscribe(req, res, next) {
    try {
      console.log();
      await this.#subService.subscribe();
      res.send(200).end();
    } catch (error) {
      next(error);
    }
  }

  async sendEmails(req, res, next) {
    try {
      await this.#subService.sendEmails();
      res.send(200).end();
    } catch (error) {
      next(error);
    }
  }
}

export default new SubscriptionController();
