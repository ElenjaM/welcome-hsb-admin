import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationDE from './de/translation.json';
import translationEN from './en/translation.json';

interface Resources {
    de: {
        translation: typeof translationDE;
    };
    en: {
        translation: typeof translationEN;
    };
}

const resources: Resources = {
    de: {
        translation: translationDE
    },
    en: {
        translation: translationEN
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources: resources,
        lng: 'de',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;