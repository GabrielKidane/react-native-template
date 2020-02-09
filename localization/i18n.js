import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import locale from 'react-native-locale-detector'

const resources = {
    en: {
        translation: {
            'home': 'Home',
            'settings': 'Settings',
            'logOut': 'Log out',
            'toggleColors': 'Toggle Colors',
            'language': 'Language',
        }
    },
    nl: {
        translation: {
            'home': 'Home',
            'settings': 'Instellingen',
            'logOut': 'Uitloggen',
            'toggleColors': 'Kleuren wisselen',
            'language': 'Taal',
        }
    }
};

console.log(locale)

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: locale,
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;