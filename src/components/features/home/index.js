import React, { Component } from "react";
import styles from './Home.module.css';
import logoReact from '../../images/logo192.png';
import logoVue from '../../images/logoVue.png';
import logoSf from '../../images/logoSfG.png';

export default class HomePage extends Component {
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
                
            </>
        )
    }
}