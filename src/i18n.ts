import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
(window as any).i18n = i18n;

import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';
import translationPT from './locales/pt/translation.json';

const getLanguageMap = () => ({
  'BR': 'pt', 'PT': 'pt', 'AO': 'pt', 'MZ': 'pt', 'CV': 'pt',
  'GW': 'pt', 'ST': 'pt', 'TL': 'pt', 'MO': 'pt',

  'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', 'PE': 'es',
  'VE': 'es', 'CL': 'es', 'EC': 'es', 'GT': 'es', 'CU': 'es',
  'BO': 'es', 'DO': 'es', 'HN': 'es', 'PY': 'es', 'SV': 'es',
  'NI': 'es', 'CR': 'es', 'PA': 'es', 'UY': 'es', 'GQ': 'es',
  'PR': 'es',

  'US': 'en', 'GB': 'en', 'CA': 'en', 'AU': 'en', 'NZ': 'en',
  'IE': 'en', 'ZA': 'en', 'IN': 'en', 'SG': 'en', 'MY': 'en',
  'PH': 'en', 'NG': 'en', 'KE': 'en', 'GH': 'en', 'UG': 'en',
  'TZ': 'en', 'ZW': 'en', 'BW': 'en', 'MT': 'en', 'CY': 'en',
  'JM': 'en', 'TT': 'en', 'BB': 'en', 'BZ': 'en', 'GY': 'en',
  'FK': 'en', 'GI': 'en', 'BM': 'en', 'VG': 'en', 'KY': 'en',
  'AI': 'en', 'MS': 'en', 'TC': 'en', 'SH': 'en', 'GS': 'en',

  'AD': 'es',

  'LU': 'pt', // Luxemburgo (comunidade portuguesa)
  'CH': 'en', // Suíça (inglês como língua franca)
  'FR': 'en', // França (inglês como segunda língua)
  'DE': 'en', // Alemanha (inglês como segunda língua)
  'IT': 'en', // Itália (inglês como segunda língua)
  'NL': 'en', // Holanda (alto nível de inglês)
  'SE': 'en', // Suécia (alto nível de inglês)
  'NO': 'en', // Noruega (alto nível de inglês)
  'DK': 'en', // Dinamarca (alto nível de inglês)
  'FI': 'en', // Finlândia (alto nível de inglês)
  'IS': 'en', // Islândia (alto nível de inglês)

  // Países da América do Norte/Central que podem preferir espanhol
  'GF': 'pt', // Guiana Francesa (comunidade brasileira)
  'SR': 'pt', // Suriname (comunidade brasileira)

  'HK': 'en', 'JP': 'en', 'KR': 'en', 'TW': 'en', 'TH': 'en',
  'ID': 'en', 'VN': 'en', 'BD': 'en', 'PK': 'en', 'LK': 'en',

  'EG': 'en', 'MA': 'en', 'TN': 'en', 'DZ': 'en', 'IL': 'en',
  'AE': 'en', 'SA': 'en', 'QA': 'en', 'KW': 'en', 'BH': 'en',
  'OM': 'en', 'JO': 'en', 'LB': 'en', 'IQ': 'en', 'IR': 'en',

  'PL': 'en', 'CZ': 'en', 'SK': 'en', 'HU': 'en', 'SI': 'en',
  'HR': 'en', 'BA': 'en', 'RS': 'en', 'BG': 'en', 'RO': 'en',
  'UA': 'en', 'BY': 'en', 'LT': 'en', 'LV': 'en', 'EE': 'en',
  'RU': 'en', 'GE': 'en', 'AM': 'en', 'AZ': 'en', 'KZ': 'en',

  'FJ': 'en', 'PG': 'en', 'SB': 'en', 'VU': 'en', 'NC': 'en',
  'PF': 'en', 'WS': 'en', 'TO': 'en', 'KI': 'en', 'TV': 'en',
});

const GeolocationDetector = {
  name: 'geolocationDetector',
  type: 'languageDetector',
  async: true,

  lookup(callback: (lng: string | undefined) => void) {
    const languageMap = getLanguageMap();

    const geoAPIs = [
      // API principal
      () => fetch('https://ipinfo.io/json?token=b7358e211a7045').then(r => r.json()),

      () => fetch('https://ipapi.co/json/').then(r => r.json()),
      () => fetch('https://ipwhois.app/json/').then(r => r.json()),
      () => fetch('https://ip-api.com/json/').then(r => r.json()),
    ];

    const tryAPI = async (apiIndex = 0): Promise<void> => {
      if (apiIndex >= geoAPIs.length) {
        callback(undefined);
        return;
      }

      try {

        const data = await geoAPIs[apiIndex]();

        const country = data.country || data.country_code || data.countryCode ||
          data.country_code2 || data.countryCode2;

        if (country && typeof country === 'string') {
          const countryCode = country.toUpperCase();
          const detectedLanguage = languageMap[countryCode as keyof typeof languageMap];

          if (detectedLanguage) {
            callback(detectedLanguage);
          } else {
            callback(undefined);
          }
        } else {
          tryAPI(apiIndex + 1);
        }
      } catch (error) {
        tryAPI(apiIndex + 1);
      }
    };

    const timeoutId = setTimeout(() => {
      callback(undefined);
    }, 5000);

    tryAPI().finally(() => clearTimeout(timeoutId));
  }
} as const;

const BrowserLanguageDetector = {
  name: 'browserLanguageDetector',
  type: 'languageDetector',
  async: false,

  lookup() {
    try {
      const navigatorAny = navigator as any;
      const browserLangs = [
        navigator.language,
        ...(navigator.languages || []),
        navigatorAny.userLanguage,
        navigatorAny.browserLanguage,
      ].filter(Boolean);


      for (const browserLang of browserLangs) {
        if (typeof browserLang === 'string') {
          const langCode = browserLang.split('-')[0].toLowerCase();

          const supportedLanguages = ['pt', 'en', 'es'];
          if (supportedLanguages.includes(langCode)) {
            return langCode;
          }
        }
      }

      return undefined;
    } catch (error) {
      return undefined;
    }
  }
} as const;

export const clearLanguageCacheAndReload = () => {
  localStorage.removeItem('i18nextLng');
  window.location.reload();
};

i18n
  .use(GeolocationDetector)
  .use(BrowserLanguageDetector)
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
      order: ['geolocationDetector', 'browserLanguageDetector', 'localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng'
    },

    supportedLngs: ['pt', 'en', 'es'],
    nonExplicitSupportedLngs: true,


  });

export default i18n;
