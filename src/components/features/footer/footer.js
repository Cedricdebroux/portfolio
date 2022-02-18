import React, { Component } from 'react';
import styles from './Footer.module.css';

class Footer extends Component {
    render() {
        return (
            <>
                <div className="fixed-bottom">
                    <div className={ styles.footerCustom }>
                        <p className={  styles.footerColor }>D-clic-web</p>
                        <p className={  styles.footerColor }>© 2022-Tous droits reservés</p>
                        <p className={  styles.footerColor }>Cédric Debroux - 2020</p>
                    </div>
                </div>
            </>
        );
    }
}
export default Footer;