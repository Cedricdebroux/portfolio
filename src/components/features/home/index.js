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

import { withTranslation } from 'react-i18next';

class HomePage extends Component {
    render() {
        
        return (
            <>
            <div className={styles.welcomBox}>
                <div className={ styles.box }>
                    <h1 className={ styles.title }>Cédric Debroux</h1>
                    <p className={ styles.subtitle }>{this.props.t('home.subTitle')}</p>
                    <p className={ styles.subtitle2 }>{this.props.t('home.subTitle2')}</p>
                </div>
                <div className={styles.boxImg}>
                    <img src={logoReact} alt='logo react' className={styles.logoReact} width="90" heigh="90" />
                    <img src={logoVue} alt='logo react' className={styles.logoVue} width="90" heigh="90" />
                    <img src={logoSf} alt='logo react' className={styles.logoSf} width="90" heigh="90" />
                    <img src={logoW} alt='logo react' className={styles.logow} width="90" heigh="90" />
                    <img src={logoSass} alt='logo react' className={styles.logoSass} width="90" heigh="90" />
                    <img src={logoBootstrap} alt='logo react' className={styles.logoBootstrap} width="90" heigh="90" />
                </div>
            </div>

                <div className={ styles.boxAboutMe }>
                    <div className={ styles.boxAboutMe2 }>
                        <p className={ styles.titleAboutMe }>{this.props.t('home.titleAboutMe')}</p>
                        <a href="https://fr.wikipedia.org/wiki/Confucius" target="blank" className={ styles.textCitationLink }><p className={ styles.textCitation }>- CONFUCIUS -</p></a>
                    </div>
                    <Nav.Link as={NavLink} className={ styles.navLinkMe } to="/about">
                    <button className={ styles.buttonAboutMe }>
                        {this.props.t('home.buttonAboutMe')}
                    </button>
                    </Nav.Link>
                </div>

                <div className={ styles.box1 }>
                    <div className={ styles.box1Text }>
                        <h2 className={ styles.box1Title1 }>{this.props.t('home.box1Title1')}</h2>
                        <p className={ styles.box1Texte1 }>{this.props.t('home.box1Texte1')}</p>
                        <p className={ styles.box1Texte2 }>{this.props.t('home.box1Texte2')}</p>
                        <Nav.Link as={NavLink} className={ styles.navLinkMe } to="/works">
                        <button className={ styles.buttonAboutMe}>
                        {this.props.t('home.buttonAchievements')}
                        </button>
                        </Nav.Link>
                    </div>
                    <div className={ styles.box1Logo }>
                        <ul className={ styles.box1Ul}>
                            <li>
                                <img src={logoReactC} alt='logo react' className={styles.logoReactC} width="34" heigh="30" />
                                <p>React</p>
                            </li>
                            <li>
                                <img src={logoVueC} alt='logo vue' className={styles.logoReactC} width="35" heigh="30" />
                                <p>Vue</p>
                            </li>
                            <li>
                                <img src={logoSfC} alt='logo symfony' className={styles.logoReactC} width="30" heigh="30" />
                                <p>Symfony</p>
                            </li>
                            <li>
                                <img src={logoWpC} alt='logo wordpress' className={styles.logoReactC} width="30" heigh="30" />
                                <p>Wordpress</p>
                            </li>
                            <li>
                                <img src={logoSassC} alt='logo sass' className={styles.logoReactC} width="40" heigh="30" />
                                <p>Sass</p>
                            </li>
                            <li>
                                <img src={logoBootstrapC} alt='logo bootstrap' className={styles.logoReactC} width="30" heigh="30" />
                                <p>Bootstrap</p>
                            </li>
                            <li>
                                <img src={logoPhpC} alt='logo php' className={styles.logoReactC} width="52" heigh="28" />
                                <p>PHP</p>
                            </li>
                            <li>
                                <img src={logoNodeJsC} alt='logo node js' className={styles.logoReactC} width="30" heigh="33" />
                                <p>Node JS</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={ styles.box1Learn }>
                    <p className={ styles.box1Texte3 }>{this.props.t('home.box1Texte3')}</p>
                    <div className={ styles.box1Logo2 }>
                        <ul className={ styles.box1LearnUl}>
                            <li>
                                <img src={logoJavaC} alt='logo java' className={styles.logoReactC} width="30" heigh="41" />
                                <p>Java</p>
                            </li>
                            <li>    
                                <img src={logoDart} alt='logo dart' className={styles.logoReactC} width="30" heigh="30" />
                                <p>Dart</p>
                            </li>
                            <li>
                                <img src={logoFlutterC} alt='logo node js' className={styles.logoReactC} width="30" heigh="37,5" />
                                <p>Flutter</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={ styles.box2 }>
                    <div className={ styles.boxTitle }>
                    <p className={ styles.box2Title }>{this.props.t('home.box2Title')}</p>
                    </div>
                    <Nav.Link as={NavLink} className={ styles.navLink } to="/contact">
                    <button className={ styles.formButton}>
                        {this.props.t('home.buttonContactMe')}
                    </button>
                    </Nav.Link>
                </div>
                
            </>
        )
    }
}
export default withTranslation()(HomePage)