import Shopify from '@shopify/shopify-api';

const SHOPIFY_ADMIN_TOKEN = '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';

const shopify = new Shopify.Clients.Rest({
  domain: 'taskflow-store.myshopify.com',
  accessToken: SHOPIFY_ADMIN_TOKEN,
});

export { shopify };
