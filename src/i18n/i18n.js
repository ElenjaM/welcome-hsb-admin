// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationDE from './de/translation.json';
import translationEN from './en/translation.json';

// Die Übersetzungsressourcen
const resources = {
    de: {
        translation: translationDE
    },
    en: {
        translation: translationEN
    }
};

i18n
    .use(initReactI18next) // Verbindet i18n mit react-i18next
    .init({
        resources,
        lng: 'de', // Standardsprache
        fallbackLng: 'en', // Fallback-Sprache
        interpolation: {
            escapeValue: false // Nicht für React benötigt
        }
    });

export default i18n;