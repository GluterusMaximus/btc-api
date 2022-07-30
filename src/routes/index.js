import express from 'express';
import RateController from '../controllers/RateController.js';
import SubscriptionController from '../controllers/SubscriptionController.js';

const router = express.Router();

router.get('/rate', RateController.getRate.bind(RateController));
router.post(
  '/subscribe',
  SubscriptionController.subscribe.bind(SubscriptionController)
);
router.post(
  '/sendEmails',
  SubscriptionController.sendEmails.bind(SubscriptionController)
);

export default router;
