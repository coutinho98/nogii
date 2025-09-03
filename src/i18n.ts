import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';
import translationPT from './locales/pt/translation.json';

const getLanguageFromIP = async () => {
    try {
        const response = await fetch('https://get.geojs.io/v1/ip/country.json');
        const data = await response.json();
        const countryCode = data.country;

        switch (countryCode) {
            case 'ES':
                return 'es';
            case 'BR':
                return 'pt';
            default:
                return 'en';
        }
    } catch (error) {
        console.error("Erro ao obter geolocalização:", error);
        return 'en'; 
    }
};

(window as any).i18n = i18n;

export const clearLanguageCacheAndReload = () => {
  localStorage.removeItem('i18nextLng');
  window.location.reload();
};

i18n
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
    supportedLngs: ['pt', 'en', 'es'],
    nonExplicitSupportedLngs: true,
  });

getLanguageFromIP().then(language => {
  i18n.changeLanguage(language);
});

export default i18n;