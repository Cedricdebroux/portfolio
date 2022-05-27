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
                    navBar: {
                        home: 'Accueil',
                        about: 'A propos',
                        works: 'Réalisations',
                        contact: 'Contact',
                    },
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
                    aboutMe:{
                        title:'Il était une fois',
                        text1:'Fruit des années 80, passioné par le monde numérique depuis mon enfance.',
                        text2:'Mes premiers pas dans le monde de l\'informatique se sont faits sur une machine tournant sous DOS et depuis je suis resté addicte.',
                        text3:'Après une reconversion professionnelle réussie dans le développement web, je prends plaisir à évoluer dans ce nouvel environement en perpétuel changement.',
                        title2:'Aujourd\'hui',
                        text4:'Je suis avide de découvrir de nouvelles technologies et de m\'y perfectionner grâce à mon besoin d\'apprendre au quotidien.',
                        text5:'Mes capacités de communication et d\'adaptation viennent de ma nature empathique.',
                        text6:'Étant autonome et proactif, j\'aime prendre des initiatives pour atteindre mes objectifs.',
                        text7:'Le travail en équipe représente toujours une opportunité d\'échange et de découverte ',
                        text7Em:'"Seul, on va plus vite, ensemble, on va plus loin".',
                        text8:'Je serai ravi de vous rencontrer pour vous en dire plus.',
                        title3:'À l\'horizon',
                        text9:'Je suis toujours à la recherche d\'un nouveau challenge et de nouveaux défis.',
                        text10:'Flutter, Dart , Java, sont les prochains langages que je souhaite approfondir.',
                        text11:'Flutter est un framework de développement web qui permet de créer des applications mobiles en utilisant le langage Dart.C\'est suffisant pour éveiller ma curiosité, pour moi, il fait partie des frameworks incontournables à l\'air du digital.',
                        text12:'Java est un langage de programmation orienté objet qui a fait ses preuves, étant très utilisé à travers le monde, je ne pouvais pas passer à côté.',
                        text13:'Le monde du développement est en perpétuelle évolution, c\'est ce qui me plait ! J\'ai hâte de découvrir ce que l\'avenir nous réserve.',
                        dowload:'Télécharger mon CV'
                    },
                    footer:{
                        footerText:'© 2022-Tous droits reservés'
                    },
                    description: {
                        part1: 'coucou',
                        part2: 'Apprendre React'// here we will place our translations...
                    }
                }
            },
            en: {
                translation: {
                    navBar: {
                        home: 'Home',
                        about: 'About me',
                        works: 'Achievements',
                        contact: 'Contact me'
                    },
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
                    aboutMe:{
                        title:'Once upon a time',
                        text1:'Passionate by the digital world since my childhood.',
                        text2:'My first steps in the world of computer science were made on a machine running under DOS and since then I have remained addicted.',
                        text3:'After a successful professional reconversion in web development, I enjoy evolving in this new environment in perpetual change.',
                        title2:'Today',
                        text4:'I am eager to discover new technologies and improve them thanks to my need to learn on a daily basis.',
                        text5:'My communication and adaptation skills come from my empathetic nature.',
                        text6:'Being autonomous and proactive, I like to take initiatives to achieve my goals.',
                        text7:'Teamwork always represents an opportunity for exchange and discovery ',
                        text7Em:'"Only we go faster, together, we go further".',
                        text8:'I will be delighted to meet you to tell you more.',
                        title3:'On the horizon',
                        text9:'I am always looking for a new challenge and new challenges.',
                        text10:'Flutter, Dart, Java, are the next languages I want to deepen.',
                        text11:'Flutter is a web development framework that allows you to create mobile applications using the Dart language. This is enough to arouse my curiosity, for me, it is one of the essential frameworks in the air of digital.',
                        text12:'Java is a proven object-oriented programming language, being widely used around the world, I couldn\'t miss it.',
                        text13:'The world of development is constantly changing, that\'s what I like! I look forward to discovering what the future holds for us.',
                        download:'Download my CV'
                    },
                    footer:{
                        footerText:'© 2022-All rights reserved'
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