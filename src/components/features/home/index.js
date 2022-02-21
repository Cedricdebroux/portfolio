import React, { Component } from "react";
import styles from './Home.module.css';
import logoReact from '../../images/logo192.png';
import logoVue from '../../images/logoVue.png';
import logoSf from '../../images/logoSfG.png';
import logoW from '../../images/logoWordpress.png';
import logoSass from '../../images/logoSass.png';
import logoBootstrap from '../../images/logoBootstrap.png';
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
                    <p className={ styles.titleAboutMe }>Après une reconversion professionelle réussie, ma passion est devenue mon travail.</p>
                    <button className={ styles.buttonAboutMe }>
                        <Nav.Link as={NavLink} className={ styles.navLinkMe } to="/about">À propos de moi</Nav.Link>
                    </button>
                </div>

                <div className={ styles.box1 }>
                    <p className={ styles.box1Title1 }>Compétences</p>
                    <p className={ styles.box1Texte1 }>Animé d'une curiosité intellectuelle, j'aime me tenir informé des dernières nouveautés.</p>
                    <p className={ styles.box1Texte2 }>Voici un aperçu des technologies que j'utilise actuellement.</p>
                    <div className={ styles.box1Logo }>
                        <p>Ici les logos des différentes technologies avec leur description, leurs utilisation et leurs liens</p>
                    </div>
                    <p className={ styles.box1Texte3 }>Pour l'instant, j'apprends</p>
                    <div className={ styles.box1Logo2 }>
                        <p>ici les logos des différentes technologies avec leur description, leurs utilisation et leurs liens</p>
                    </div>
                    <p className={ styles.box1Texte4 }>Celles qui suscitent ma curiosité</p>
                    <div className={ styles.box1Logo3 }>
                        <p>ici les logo des différentes technologies avec leur description, leur utilisation et leurs liens</p>
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