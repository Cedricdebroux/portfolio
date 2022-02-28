import React, { Component } from "react";
import styles from './Home.module.css';
import logoReact from '../../images/logo192.png';
import logoVue from '../../images/logoVue.png';
import logoSf from '../../images/logoSfG.png';
import logoW from '../../images/logoWordpress.png';
import logoSass from '../../images/logoSass.png';
import logoBootstrap from '../../images/logoBootstrap.png';
import logoReactC from '../../images/competences/logoReact.png';
import logoBootstrapC from '../../images/competences/logoBootstrap.png';
import logoSassC from '../../images/competences/logoSass.png';
import logoWpC from '../../images/competences/logoWordpress.png';
import logoVueC from '../../images/competences/logoVue.png';
import logoSfC from '../../images/competences/logoSymfony.png';
import logoPhpC from '../../images/competences/logoPhp.png';
import logoJavaC from '../../images/competences/logoJava.png';
import logoDart from '../../images/competences/logoDart.png';
import logoFlutterC from '../../images/competences/logoFlutter.png';
import logoNodeJsC from '../../images/competences/logoNodeJs.png'; 

import { NavLink } from 'react-router-dom'; 

import { Nav } from 'react-bootstrap'

class HomePage extends Component {
    render() {
        return (
            <>
            <div className={styles.welcomBox}>
                <div className={ styles.box }>
                    <p className={ styles.title }>Cédric Debroux</p>
                    <p className={ styles.subtitle }>Votre futur</p>
                    <p className={ styles.subtitle2 }>Développeur Web Full Stack</p>
                </div>

                <img src={logoReact} alt='logo react' className={styles.logoReact} />
                <img src={logoVue} alt='logo react' className={styles.logoVue} />
                <img src={logoSf} alt='logo react' className={styles.logoSf} />
                <img src={logoW} alt='logo react' className={styles.logow} />
                <img src={logoSass} alt='logo react' className={styles.logoSass} />
                <img src={logoBootstrap} alt='logo react' className={styles.logoBootstrap} />
            </div>

                <div className={ styles.boxAboutMe }>
                    <div className={ styles.boxAboutMe2 }>
                        <p className={ styles.titleAboutMe }>« Choisis un travail que tu aimes, et tu n’auras pas à travailler un seul jour dans ta vie ».</p>
                        <a href="https://fr.wikipedia.org/wiki/Confucius" target="blank" className={ styles.textCitationLink }><p className={ styles.textCitation }>- CONFUCIUS -</p></a>
                    </div>
                    <button className={ styles.buttonAboutMe }>
                        <Nav.Link as={NavLink} className={ styles.navLinkMe } to="/about">À propos de moi</Nav.Link>
                    </button>
                </div>

                <div className={ styles.box1 }>
                    <div className={ styles.box1Text }>
                        <h2 className={ styles.box1Title1 }>Compétences</h2>
                        <p className={ styles.box1Texte1 }>Animé d'une curiosité intellectuelle, j'aime me tenir informé des dernières nouveautés.</p>
                        <p className={ styles.box1Texte2 }>Voici un aperçu des technologies que j'utilise actuellement.</p>
                        <button className={ styles.buttonAboutMe}>
                        <Nav.Link as={NavLink} className={ styles.navLinkMe } to="/works">Réalisations</Nav.Link>
                        </button>
                    </div>
                    <div className={ styles.box1Logo }>
                        <ul className={ styles.box1Ul}>
                            <li>
                                <img src={logoReactC} alt='logo react' className={styles.logoReactC} />
                                <p>React</p>
                            </li>
                            <li>
                                <img src={logoVueC} alt='logo vue' className={styles.logoReactC} />
                                <p>Vue</p>
                            </li>
                            <li>
                                <img src={logoSfC} alt='logo symfony' className={styles.logoReactC} />
                                <p>Symfony</p>
                            </li>
                            <li>
                                <img src={logoWpC} alt='logo wordpress' className={styles.logoReactC} />
                                <p>Wordpress</p>
                            </li>
                            <li>
                                <img src={logoSassC} alt='logo sass' className={styles.logoReactC} />
                                <p>Sass</p>
                            </li>
                            <li>
                                <img src={logoBootstrapC} alt='logo bootstrap' className={styles.logoReactC} />
                                <p>Bootstrap</p>
                            </li>
                            <li>
                                <img src={logoPhpC} alt='logo php' className={styles.logoReactC} />
                                <p>PHP</p>
                            </li>
                            <li>
                                <img src={logoNodeJsC} alt='logo node js' className={styles.logoReactC} />
                                <p>Node JS</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={ styles.box1Learn }>
                    <p className={ styles.box1Texte3 }>Pour l'instant, j'apprends</p>
                    <div className={ styles.box1Logo2 }>
                        <ul className={ styles.box1LearnUl}>
                            <li>
                                <img src={logoJavaC} alt='logo java' className={styles.logoReactC} />
                                <p>Java</p>
                            </li>
                            <li>    
                                <img src={logoDart} alt='logo dart' className={styles.logoReactC} />
                                <p>Dart</p>
                            </li>
                            <li>
                                <img src={logoFlutterC} alt='logo node js' className={styles.logoReactC} />
                                <p>Flutter</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={ styles.box2 }>
                    <div className={ styles.boxTitle }>
                    <p className={ styles.box2Title }>Vous voulez en savoir plus ?</p>
                    </div>
                    <button className={ styles.formButton}>
                        <Nav.Link as={NavLink} className={ styles.navLink } to="/contact">Contactez-moi</Nav.Link>
                    </button>
                </div>
                
            </>
        )
    }
}
export default HomePage;