import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en';
import ru from './locales/ru';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru }
  },
  lng: 'en', 
  fallbackLng: 'en', 
  interpolation: {
    escapeValue: false 
  },
  pluralSeparator: '_',
  keySeparator: '.'
});

export default i18n;
