import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'fr',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            fr: {
                translation: {
                    description: {
                        part1: 'coucou',
                        part2: 'Apprendre React'// here we will place our translations...
                    }
                }
            },
            en: {
                translation: {
                    description: {
                        part1: 'Edit <1>src/App.js</1> and save to reload.',
                        part2: 'Learn fuck React'// here we will place our translations...
                    }
                }
            }
        }
    });

export default i18n;