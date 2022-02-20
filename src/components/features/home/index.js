import React, { Component } from "react";
import styles from './Home.module.css';
import logoReact from '../../images/logo192.png';
import logoVue from '../../images/logoVue.png';
import logoSf from '../../images/logoSfG.png';
import logoW from '../../images/logoWordpress.png';
import logoSass from '../../images/logoSass.png';
import logoBootstrap from '../../images/logoBootstrap.png';
import ContactMe from "../../features/contact";
import { NavLink } from 'react-router-dom'; 

import { Nav } from 'react-bootstrap'

const routes = [
    { path: '/contact', name: 'Contactez-moi', Component: ContactMe }
  ]

class HomePage extends Component {
    render() {
        return (
            <>
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

                <div className={ styles.box1 }>
                    <p className={ styles.box1Title1 }>Compétences</p>
                    <p className={ styles.box1Texte1 }>Animé d'une curiosité intellectuelle, j'aime me tenir informé des dernières nouveautés.</p>
                    <p className={ styles.box1Texte2 }>Voici un apercu des technologies que j'utilise</p>
                    <div className={ styles.box1Logo }>
                        <p>ici les logo des différentes technologies avec leur description, leur utilisation et leur liens</p>
                    </div>
                    <p className={ styles.box1Texte3 }>Pour l'instant, j'apprend</p>
                    <div className={ styles.box1Logo2 }>
                        <p>ici les logo des différentes technologies avec leur description, leur utilisation et leur liens</p>
                    </div>
                    <p className={ styles.box1Texte4 }>Celles qui succite ma curiosité</p>
                    <div className={ styles.box1Logo3 }>
                        <p>ici les logo des différentes technologies avec leur description, leur utilisation et leur liens</p>
                    </div>
                </div>

                <div className={ styles.box2 }>
                    <div className={ styles.boxTitle }>
                    <p className={ styles.box2Title }>Vous voulez en savoir plus ?</p>
                    </div>
                    <button className={ styles.formButton}>
                        {routes.map(route => (
                        <Nav.Link
                        key={route.path}
                        as={NavLink}
                        to={route.path}
                        activeClassName="active"
                        exact
                        className={ styles.navLink }
                        >
                                {route.name}
                        </Nav.Link>
                            ))} 
                    </button>
                </div>
                
            </>
        )
    }
}
export default HomePage;