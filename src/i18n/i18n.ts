import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pl',
    fallbackNS: 'default',
    debug: true,
    resources: {
      en: {
        default: {
          viewDetails: 'View details',
        },
      },
      pl: {
        default: {
          viewDetails: 'Pokaż szczegóły',
        },
      },
    },
  });


export default i18n;