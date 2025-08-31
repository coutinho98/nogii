import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';
import translationPT from './locales/pt/translation.json';

const GeolocationDetector = {
  name: 'geolocationDetector',
  type: 'languageDetector',
  
  lookup() {
    return new Promise<string | null>((resolve) => {
      fetch('https://ipinfo.io/json?token=b7358e211a7045')
        .then(response => response.json())
        .then(data => {
          const country = data.country;
          if (country) {
            const languageMap: { [key: string]: string } = {
              'BR': 'pt',
              'US': 'en',
              'ES': 'es'
            };
            const detectedLanguage = languageMap[country];
            resolve(detectedLanguage || null);
          } else {
            resolve(null);
          }
        })
        .catch(() => {
          resolve(null);
        });
    });
  },
} as const;

i18n
  .use(GeolocationDetector)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN
      },
      es: {
        translation: translationES
      },
      pt: {
        translation: translationPT
      }
    },
    lng: 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['geolocationDetector', 'localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;