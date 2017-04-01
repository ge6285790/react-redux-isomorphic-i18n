import i18n from 'i18next';
import Backend from 'i18next-node-fs-backend';
import { LanguageDetector } from 'i18next-express-middleware';
import i18nConfig from '../../common/constants/i18nConfig';

i18n.use(Backend).use(LanguageDetector).init({
  ...i18nConfig,

  backend: {
    loadPath: 'locales/{{lng}}/{{ns}}.json',
    jsonIndent: 2,
  },
});

export default i18n;
