import checkoutNodeJssdk from '@paypal/checkout-server-sdk';

function environment() {
  const clientId = 'AvRGoSp1YmOwJaJMbUBZ7r2gM2m6VfebPtmWwrYin4bvCpmw4sqwL0LIQSTXsls';
  const clientSecret = 'Ea2otWbPxcGNY9kccz1Evs1UQS1p1RlmWLl6men8OdVT4IByKUGYcOnf6F1Q';
  return new checkoutNodeJssdk.core.SandboxEnvironment(clientId, clientSecret);
}

const client = new checkoutNodeJssdk.core.PayPalHttpClient(environment());

export { client };
