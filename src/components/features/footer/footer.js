import React, { Component } from 'react';
import styles from './Footer.module.css';
import logoGit from '../../images/logoGithub.png';
import logoLinkedin from '../../images/logoLinkedin.png';
import logoMail from '../../images/logoMail.png';
import logoBadge from '../../images/logoBadge.png';
import LoadingFooter from '../../utils/LoadingFooter';
class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {
          content: null,
          loaded: false
        }
    
        setTimeout( () => {
          this.setState({
            loaded: true
          })
        }, 3000);
      }
    render() {
        return (
            <>
            { this.state.loaded ? (
                <div >
                    <div className={ styles.footerCustom }>
                        <p className={  styles.footerColor }>Cédric Debroux</p>
                        <p className={  styles.footerColor }>© 2022-Tous droits reservés</p>
                        <div className={ styles.footerLogo }>
                            <a href='https://github.com/Cedricdebroux' target="blank"><img className='mr-3' src={ logoGit } alt="logoGit"/></a>
                            <a href='https://www.linkedin.com/in/cedric-debroux/' target="blank"><img className='mr-3' src={ logoLinkedin } alt="logoLinkedin"/></a>
                            <a href='mailto:contact@cedric-debroux.be'><img className='mr-3' src={ logoMail } alt="logoMail"/></a>
                            <a href='https://api.badgr.io/public/collections/6d95526bbb76c6b3de1579e55e591307' target="blank"><img src={ logoBadge } alt="logoBadge"/></a>
                        </div>
                    </div>
                </div>
            ) :(
                <LoadingFooter />) }
            </>
        );
    }
}

export default Footer;