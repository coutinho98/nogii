import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationES from './locales/es/translation.json';
/* import translationEN from './locales/en/translation.json'; */
/* import translationPT from './locales/pt/translation.json'; */

/* const getLanguageFromIP = async () => {
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
}; */

(window as any).i18n = i18n;

export const clearLanguageCacheAndReload = () => {
  localStorage.removeItem('i18nextLng');
  window.location.reload();
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: translationES }
    },
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;