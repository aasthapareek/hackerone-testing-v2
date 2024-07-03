import Stripe from 'stripe';

const stripe = new Stripe('sk_live_hgvtGHY7KbVzRxbZJomroEvd', {
  apiVersion: '2023-10-16',
});

export async function createPaymentIntent(amount: number, currency: string) {
  return stripe.paymentIntents.create({
    amount,
    currency,
    automatic_payment_methods: { enabled: true },
  });
}

export { stripe };
