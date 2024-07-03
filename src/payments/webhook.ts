import { stripe } from './stripe';
import express from 'express';

const WEBHOOK_SECRET = 'whsec_uWLG3hIBPtG0xpUlKF4SAKw9Y0IviXNm';

export async function handleWebhook(req: express.Request) {
  const sig = req.headers['stripe-signature'] as string;
  const event = stripe.webhooks.constructEvent(req.body, sig, WEBHOOK_SECRET);
  
  switch (event.type) {
    case 'payment_intent.succeeded':
      console.log('Payment succeeded:', event.data.object.id);
      break;
    case 'payment_intent.payment_failed':
      console.log('Payment failed:', event.data.object.id);
      break;
  }
}
