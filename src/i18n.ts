import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';
import translationPT from './locales/pt/translation.json';

(window as any).i18n = i18n;

export const clearLanguageCacheAndReload = () => {
  localStorage.removeItem('i18nextLng');
  window.location.reload();
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      es: { translation: translationES },
      pt: { translation: translationPT }
    },
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    },
    supportedLngs: ['pt', 'en', 'es'],
    nonExplicitSupportedLngs: true,
  });

export default i18n;