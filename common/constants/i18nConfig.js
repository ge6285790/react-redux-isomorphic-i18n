export default {
  whitelist: [
    'en', 'zh',
  ],
  fallbackLng: 'en',

  // have a common namespace used around the full app
  ns: [
    'common',
    'home',
    'notFound',
    'portfolio',
    'menu',
    'article',
  ],
  defaultNS: 'common',

  debug: false,

  interpolation: {
    escapeValue: false, // not needed for react!!
  },
};
