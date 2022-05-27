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
                    home: {
                        subTitle:'Votre futur',
                        subTitle2:'Développeur Web Full Stack',
                        titleAboutMe:'« Choisis un travail que tu aimes, et tu n’auras pas à travailler un seul jour dans ta vie ».',
                        buttonAboutMe:'À propos de moi',
                        box1Title1:'Compétences',
                        box1Texte1:'Animé d\'une curiosité intellectuelle, j\'aime me tenir informé des dernières nouveautés.',
                        box1Texte2:'Voici un aperçu des technologies que j\'utilise actuellement.',
                        buttonAchievements:'Réalisations',
                        box1Texte3:'Pour l\'instant, j\'apprends',
                        box2Title:'Vous voulez en savoir plus ?',
                        buttonContactMe:'Contactez-moi'
                    },
                    description: {
                        part1: 'coucou',
                        part2: 'Apprendre React'// here we will place our translations...
                    }
                }
            },
            en: {
                translation: {
                    home: {
                        subTitle:'Your future',
                        subTitle2:'Web developer Full Stack',
                        titleAboutMe:'« Choose a job you like, and you won\'t have to work a single day in your life ».',
                        buttonAboutMe:'About me',
                        box1Title1:'Competences',
                        box1Texte1:'Driven by an intellectual curiosity, I like to stay informed of the latest news.',
                        box1Texte2:'Here is an overview of the technologies I currently use.',
                        buttonAchievements:'Achievements',
                        box1Texte3:'For now, I\'m learning',
                        box2Title:'Do you want to know more ?',
                        buttonContactMe:'Contact me'
                    },
                    description: {
                        part1: 'Edit <1>src/App.js</1> and save to reload.',
                        part2: 'Learn React'// here we will place our translations...
                    }
                }
            }
        }
    });

export default i18n;