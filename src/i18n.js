import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files directly
import enTranslation from './locales/en/translation.json';
import frTranslation from './locales/fr/translation.json';

// Initialize i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // Debug options
    debug: true,
    fallbackLng: 'fr',
    lng: 'fr',
    
    // Language detection options
    detection: {
      order: ['querystring', 'navigator', 'localStorage'],
      lookupQuerystring: 'lng',
      caches: ['localStorage', 'cookie'],
    },
    
    // React i18next options
    react: {
      useSuspense: false,
    },
    
    // Interpolation options
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    
    // Resources (direct import)
    resources: {
      en: {
        translation: enTranslation
      },
      fr: {
        translation: frTranslation
      }
    },
    
    // Debug logging
    initImmediate: false
  })
  .then(() => {
    console.log('i18n initialized successfully');
    console.log('Current language:', i18n.language);
    console.log('Available languages:', i18n.languages);
  })
  .catch((err) => {
    console.error('i18n initialization failed:', err);
  });

export default i18n;

