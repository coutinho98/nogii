import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';
import translationPT from './locales/pt/translation.json';

const GeolocationDetector = {
  name: 'geolocationDetector',
  type: 'languageDetector',
  async: true,

  lookup(callback: (lng: string | undefined) => void) {
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
          console.log("🌍 País detectado:", country, "->", detectedLanguage); // debug
          callback(detectedLanguage || undefined);
        } else {
          callback(undefined);
        }
      })
      .catch(err => {
        console.error("Erro na detecção de idioma via geolocalização:", err);
        callback(undefined);
      });
  }
} as const;

i18n
  .use(GeolocationDetector) 
  .use(LanguageDetector)   
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      es: { translation: translationES },
      pt: { translation: translationPT }
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
