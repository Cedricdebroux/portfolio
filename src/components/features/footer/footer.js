import React, { Component } from 'react';
import styles from './Footer.module.css';
import logoGit from '../../images/logoGithub.png';
import logoLinkedin from '../../images/logoLinkedin.png';
import logoMail from '../../images/logoMail.png';
import logoBadge from '../../images/logoBadge.png';
class Footer extends Component {
    render() {
        return (
            <>
                <div >
                    <div className={ styles.footerCustom }>
                        <p className={  styles.footerColor }>D-clic-web</p>
                        <p className={  styles.footerColor }>© 2022-Tous droits reservés</p>
                        <div className={ styles.footerLogo }>
                            <a href='https://github.com/Cedricdebroux'><img className='mr-3' src={ logoGit } alt="logoGit"/></a>
                            <a href='https://www.linkedin.com/in/cedric-debroux/'><img className='mr-3' src={ logoLinkedin } alt="logoLinkedin"/></a>
                            <a href='mailto:cedric@debroux.ovh'><img className='mr-3' src={ logoMail } alt="logoMail"/></a>
                            <a href='https://api.badgr.io/public/collections/6d95526bbb76c6b3de1579e55e591307'><img src={ logoBadge } alt="logoBadge"/></a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Footer;