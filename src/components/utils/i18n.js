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
                        subTitle: 'Votre futur',
                        subTitle2: 'Développeur Web Full Stack',
                        titleAboutMe: '« Choisis un travail que tu aimes, et tu n’auras pas à travailler un seul jour dans ta vie ».',
                        buttonAboutMe: 'À propos de moi',
                        box1Title1: 'Compétences',
                        box1Texte1: 'Animé d\'une curiosité intellectuelle, j\'aime me tenir informé des dernières nouveautés.',
                        box1Texte2: 'Voici un aperçu des technologies que j\'utilise actuellement.',
                        buttonAchievements: 'Réalisations',
                        box1Texte3: 'Pour l\'instant, j\'apprends',
                        box2Title: 'Vous voulez en savoir plus ?',
                        buttonContactMe: 'Contactez-moi'
                    },
                    aboutMe: {
                        title: 'Il était une fois',
                        text1: 'Fruit des années 80, passioné par le monde numérique depuis mon enfance.',
                        text2: 'Mes premiers pas dans le monde de l\'informatique se sont faits sur une machine tournant sous DOS et depuis je suis resté addicte.',
                        text3: 'Après une reconversion professionnelle réussie dans le développement web, je prends plaisir à évoluer dans ce nouvel environement en perpétuel changement.',
                        title2: 'Aujourd\'hui',
                        text4: 'Je suis avide de découvrir de nouvelles technologies et de m\'y perfectionner grâce à mon besoin d\'apprendre au quotidien.',
                        text5: 'Mes capacités de communication et d\'adaptation viennent de ma nature empathique.',
                        text6: 'Étant autonome et proactif, j\'aime prendre des initiatives pour atteindre mes objectifs.',
                        text7: 'Le travail en équipe représente toujours une opportunité d\'échange et de découverte ',
                        text7Em: '"Seul, on va plus vite, ensemble, on va plus loin".',
                        text8: 'Je serai ravi de vous rencontrer pour vous en dire plus.',
                        title3: 'À l\'horizon',
                        text9: 'Je suis toujours à la recherche d\'un nouveau challenge et de nouveaux défis.',
                        text10: 'Flutter, Dart , Java, sont les prochains langages que je souhaite approfondir.',
                        text11: 'Flutter est un framework de développement web qui permet de créer des applications mobiles en utilisant le langage Dart.C\'est suffisant pour éveiller ma curiosité, pour moi, il fait partie des frameworks incontournables à l\'air du digital.',
                        text12: 'Java est un langage de programmation orienté objet qui a fait ses preuves, étant très utilisé à travers le monde, je ne pouvais pas passer à côté.',
                        text13: 'Le monde du développement est en perpétuelle évolution, c\'est ce qui me plait ! J\'ai hâte de découvrir ce que l\'avenir nous réserve.',
                        dowload: 'Télécharger mon CV'
                    },
                    works: {
                        title: 'Réalisations',
                        subtitle: 'Film',
                        text1: 'Ce projet fait avec React était l\'occasion de me',
                        text2: 'remettre au front-end avec un framework javascript.',
                        subTitle2: 'E-commerce',
                        text3: 'E-commerce réalisé avec Symfony 5, PHP, Vue.',
                        text4: 'Ce projet à été réalisé en entreprise, les images ont été',
                        text5: 'floutées pour des raisons de confidentialité.',
                        subTitle3: 'Jeux',
                        text6: 'Jeu qui permet l\'achat (fictif) d\'arbres de la ville de Liège.',
                        text7: 'Ce dernier a été réalisé avec React, NodeJS, MongoDB,',
                        text8: 'Leaflet, OpenstreetMap.',
                        subTitle4: 'Wordpress',
                        text9: 'Projet réalisé avec Wordpress, PHP.',
                        text10: 'Chez BeCode dans le cadre de mon apprentissage.',
                        subTitle5: 'Forum',
                        text11: 'Forum réalisé avec PHP, SQL, Bootstrap.',
                        text12: 'Chez BeCode dans le cadre de mon apprentissage.'
                    },
                    movie: {
                        title: 'Projet Film',
                        subTitle: 'React',
                        text1: 'Après plusieurs mois passés sur Symfony, c\'était l\'occasion pour moi de me remettre à un frameworks javascript front-end.',
                        text2: 'J\'ai pris beaucoup de plaisir à réaliser celui-ci.',
                        text3: 'Il a été réalisé en React avec notament Formik, React-Router, Axios et Bootstrap.',
                        texte4: 'Il a une barre de recherche fonctionelle avec la selection de la langue du film à afficher dans le résultat, et un ajout au favoris de vos films préférés.',
                        text5: 'Pour l\'instant, il n\'est pas encore relié à une base de données, mais ce projet est encore amené à évoluer.',
                        textLink: 'Projet film'
                    },
                    webshop: {
                        title: 'E-commerce',
                        subTitle: 'Symfony 5, PHP, Vue, Sylius.',
                        text1: 'Celui-ci est le dernier gros projet d\'entreprise que nous avons réalisé en équipe.',
                        text2: 'Il s\'agit d\'un site E-commerce complet.',
                        text3: 'J\'y étais chargé de la partie Back-end avec le framework Symfony 5 ainsi que de la gestion des noms de domaine et de la mise en production.',
                        text4: 'Plusieurs Technologie ont été nécéssaire à l\'élaborations de celui-ci, notament Symfony 5, PHP 8, Webpack-encore, VueJs, Doctrine, Easy admin, Twig, Stripe, MailJet.',
                        text5: 'Il a été réalisé en trois langues, Français, Néerlandais, Anglais.'
                    },
                    game: {
                        title: 'Jeu en React',
                        subtitle: 'Acheter les arbres de la ville de Liège.',
                        text1: 'Dans une carte de Liège, il y a des arbres. Chaque arbre a une valeur (qui est le produit de son diamètre par sa hauteur, arrondi vers le haut).',
                        text2: 'Lorsqu\'un joueur entre dans le jeu, il doit créer un compte, recevra une couleur aléatoire (qui peut être modifiée dans le profil) et recevra trois arbres aléatoires gratuits (Et quelques feuilles bonus, selon la formule : [feuilles totales des joueurs] / [nombre de joueurs]).',
                        text3: 'Toutes les quinze minutes dans la vraie vie, chaque joueur recevra une quantité de feuilles égale au total de chacun de ses arbres.',
                        text4: 'Chaque heure dans la vraie vie, chaque joueur perd la moitié de ses feuilles.',
                        text5: 'Chaque fois qu\'il le souhaite, un joueur peut acheter un arbre.',
                        textLink: 'Une partie ?',
                        textLink2: 'Pour les détails rendez-vous sur '
                    },
                    wordpress: {
                        title: 'Wordpress',
                        subTitle: 'Projet client Wordpress sur le thème d\'un restaurant.',
                        text1: 'Ce projet a été réalisé en équipe dans le cadre de ma formation chez Becode.',
                        text2: 'L\'enjeu était de réaliser un projet client avec comme thème le restaurant.',
                        text3: 'Les images et la mise en page étaient imposées.',
                        text4: 'Pour la réalisation de celui-ci, nous avons utilisé wordpress et Acf.',
                        text5: 'Comme nous l\'aurions fait pour un vrai client, uniquement certaine option de la partie "admin" était accessible pour le client et il avait la possibilité d\'éditer son site en fonction des changements dans les menus par exemple.',
                        textLink: 'Le restaurant'
                    },
                    forum: {
                        title: 'Forum',
                        subTitle: 'Un forum complet en PHP',
                        text1: 'Ce projet a été réalisé en équipe dans le cadre de ma formation chez Becode.',
                        text2: 'L\'enjeu était de réaliser un forum complet en PHP.',
                        text3: 'Pour ce dernier, nous avons une page de login et signup à l\'arriver sur le site.',
                        text4: 'Ensuite, plusieurs informations devaient apparaître sur la page d\'accueil, notamment les derniers utilisateurs connecter, les derniers posts classés par catégories.',
                        text5: 'Pour en savoir plus je vous invite à visiter le '
                    },
                    contact: {
                        title: 'Contactez-moi',
                        subTitle: 'Travaillons ensemble',
                        placeHolder1: 'Nom *',
                        placeHolder2: 'Société',
                        placeHolder3: 'Téléphone',
                        placeHolder4: 'Email *',
                        placeHolder5: 'Votre message *',
                        invalid: 'Merci de remplir tous les champs.',
                        invalid2: 'Une erreur s\'est produite, veuillez réessayer.',
                        valid: 'Votre message a bien été envoyé, je vous répondrai dans les plus brefs délais.',
                        buttonSend: 'Envoyer'
                    },
                    footer: {
                        footerText: '© 2022-Tous droits reservés'
                    },
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
                        subTitle: 'Your future',
                        subTitle2: 'Web developer Full Stack',
                        titleAboutMe: '« Choose a job you like, and you won\'t have to work a single day in your life ».',
                        buttonAboutMe: 'About me',
                        box1Title1: 'Competences',
                        box1Texte1: 'Driven by an intellectual curiosity, I like to stay informed of the latest news.',
                        box1Texte2: 'Here is an overview of the technologies I currently use.',
                        buttonAchievements: 'Achievements',
                        box1Texte3: 'For now, I\'m learning',
                        box2Title: 'Do you want to know more ?',
                        buttonContactMe: 'Contact me'
                    },
                    aboutMe: {
                        title: 'Once upon a time',
                        text1: 'Passionate by the digital world since my childhood.',
                        text2: 'My first steps in the world of computer science were made on a machine running under DOS and since then I have remained addicted.',
                        text3: 'After a successful professional reconversion in web development, I enjoy evolving in this new environment in perpetual change.',
                        title2: 'Today',
                        text4: 'I am eager to discover new technologies and improve them thanks to my need to learn on a daily basis.',
                        text5: 'My communication and adaptation skills come from my empathetic nature.',
                        text6: 'Being autonomous and proactive, I like to take initiatives to achieve my goals.',
                        text7: 'Teamwork always represents an opportunity for exchange and discovery ',
                        text7Em: '"Only we go faster, together, we go further".',
                        text8: 'I will be delighted to meet you to tell you more.',
                        title3: 'On the horizon',
                        text9: 'I am always looking for a new challenge and new challenges.',
                        text10: 'Flutter, Dart, Java, are the next languages I want to deepen.',
                        text11: 'Flutter is a web development framework that allows you to create mobile applications using the Dart language. This is enough to arouse my curiosity, for me, it is one of the essential frameworks in the air of digital.',
                        text12: 'Java is a proven object-oriented programming language, being widely used around the world, I couldn\'t miss it.',
                        text13: 'The world of development is constantly changing, that\'s what I like! I look forward to discovering what the future holds for us.',
                        download: 'Download my CV'
                    },
                    works: {
                        title: 'My achievements',
                        subtitle: 'Movie',
                        text1: 'This project done with React was an opportunity to',
                        text2: 'return to the front-end with a javascript framework.',
                        subTitle2: 'E-commerce',
                        text3: 'E-commerce carried out with Symfony 5, PHP, Vue.',
                        text4: 'This project was carried out in a company, the images',
                        text5: 'were blurred for reasons of confidentiality.',
                        subTitle3: 'Games',
                        text6: 'Game that allows the (fictitious) purchase of trees ',
                        text7: 'from the city of Liège.',
                        text8: 'The latter was made with React, NodeJS, MongoDB,',
                        text9: 'Leaflet, OpenstreetMap.',
                        subTitle4: 'Wordpress',
                        text10: 'Project carried out with Wordpress, PHP.',
                        text11: 'At BeCode as part of my apprenticeship.',
                        subTitle5: 'Forum',
                        text12: 'Forum made with PHP, SQL, Bootstrap.',
                        text13: 'At BeCode as part of my apprenticeship.'
                    },
                    movie: {
                        title: 'Movie project',
                        subTitle: 'React',
                        text1: 'After several months spent on Symfony, it was an opportunity for me to get back to a front-end javascript frameworks.',
                        text2: 'I had a lot of fun making this one.',
                        text3: 'It was made in React with in particular Formik, React-Router, Axios and Bootstrap.',
                        texte4: 'It has a functional search bar with the selection of the language of the movie to display in the result, and an addition to the favorites of your favorite movies.',
                        text5: 'At the moment, it is not yet linked to a database, but this project is still evolving.',
                        textLink: 'Movie project'
                    },
                    webshop: {
                        title: 'E-commerce',
                        subTitle: 'Symfony 5, PHP, Vue, Sylius.',
                        text1: 'This is the last big business project we carried out as a team.',
                        text2: 'This is a complete E-commerce site.',
                        text3: 'I was in charge of the Back-end part with the Symfony 5 framework as well as domain name management and production.',
                        text4: 'Several Technologies were necessary to develop it, including Symfony 5, PHP 8, Webpack-encore, VueJs, Doctrine, Easy admin, Twig, Stripe, MailJet.',
                        text5: 'It was produced in three languages, French, Dutch, English.'
                    },
                    game: {
                        title: 'Game in React',
                        subtitle: 'Buy the trees of the city of Liège.',
                        text1: 'In a map of Liège, there are trees. Each tree has a value (which is the product of its diameter by its height, rounded upwards).',
                        text2: 'When a player enters the game, he must create an account, receive a random color (which can be modified in the profile) and receive three free random trees (And a few bonus sheets, depending on the formula: [total player sheets] / [number of players]).',
                        text3: 'Every fifteen minutes in real life, each player will receive a total amount of leaves equal to each of his trees.',
                        text4: 'Every hour in real life, each player loses half of his leaves.',
                        text5: 'Whenever he wishes, a player can buy a tree.',
                        textLink: 'A part?',
                        textLink2: 'For details go to '
                    },
                    wordpress: {
                        title: 'Wordpress',
                        subTitle: 'Wordpress customer project on the theme of a restaurant.',
                        text1: 'This project was carried out as a team as part of my training at Becode.',
                        text2: 'The challenge was to carry out a customer project with the restaurant as its theme.',
                        text3: 'Images and layout were imposed..',
                        text4: 'For the realization of this one, we used wordpress and Acf.',
                        text5: 'As we would have done for a real customer, only a certain option in the "admin" part was accessible to the customer and he had the possibility to edit his site according to changes in the menus for example.',
                        textLink: 'The restaurant'
                    },
                    forum: {
                        title: 'Forum',
                        subTitle: 'A complete forum in PHP',
                        text1: 'This project was carried out as a team as part of my training at Becode.',
                        text2: 'The challenge was to create a complete forum in PHP.',
                        text3: 'For the latter, we have a login and signup page to arrive on the site.',
                        text4: 'Then, several information had to appear on the home page, including the last users to connect, the latest posts sorted by categories.',
                        text5: 'To learn more, I invite you to visit '
                    },
                    contact: {
                        title: 'Contact me ',
                        subTitle: 'Let\'s work together ',
                        placeHolder1: 'Name *',
                        placeHolder2: 'Company',
                        placeHolder3: 'Phone number',
                        placeHolder4: 'Email *',
                        placeHolder5: 'Your message *',
                        invalid: 'Please fill in all the blanks.',
                        invalid2: 'An error has occurred. Please try again.',
                        valid: 'Your message has been sent, I will answer you as soon as possible.',
                        buttonSend: 'Send'
                    },
                    footer: {
                        footerText: '© 2022-All rights reserved'
                    },
                }
            }
        }
    });

export default i18n;