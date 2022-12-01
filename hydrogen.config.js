import { defineConfig, CookieSessionStorage } from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'NL',
    defaultLanguageCode: 'EN',
    storeDomain: Oxygen.env.PUBLIC_STORE_DOMAIN || 'shopworks-test-sandbox-plus.myshopify.com',
    storefrontToken: Oxygen.env.PUBLIC_STOREFRONT_API_TOKEN || '6bdb2245db3dbe3352ed336acaec2e8a',
    privateStorefrontToken: Oxygen.env.PRIVATE_STOREFRONT_API_TOKEN,
    storefrontApiVersion: '2022-07',
    storefrontId: Oxygen.env.PUBLIC_STOREFRONT_ID,
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
