import React, { Component } from "react";
import styles from "./AboutMe.module.css";
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { saveAs } from "file-saver";
import Cv from '../../images/cv/cedric_debroux_cv.pdf';
import logoDart from '../../images/competences/logoDart.png';
import logoFlutter from '../../images/competences/logoFlutter.png';
import logoJava from '../../images/competences/logoJava.png';
import { withTranslation } from 'react-i18next';

class AboutMe extends Component {
  render() {
    const saveFile = () => {
      saveAs(
        Cv,
        "cedric_debroux.pdf"
      );
    };
    return (
      <>
        <div className={styles.aboutMe}>
          <h1 className={styles.title}>
            {this.props.t('aboutMe.title')}
          </h1>
          <p className={styles.text}>
            {this.props.t('aboutMe.text1')}
          </p>
          <p className={styles.text}>
            {this.props.t('aboutMe.text2')}
          </p>
          <p className={styles.text}>
            {this.props.t('aboutMe.text3')}
          </p>

          <h2 className={styles.title}>
            {this.props.t('aboutMe.title2')}
          </h2>
          <p className={styles.text}>
            {this.props.t('aboutMe.text4')}
          </p>
          <p className={styles.text}>
            {this.props.t('aboutMe.text5')}
          </p>
          <p className={styles.text}>
            {this.props.t('aboutMe.text6')}
          </p>
          <p className={styles.text}>
            {this.props.t('aboutMe.text7')}<em>{this.props.t('aboutMe.text7Em')}</em>.
          </p>
          <p className={styles.text}>
            {this.props.t('aboutMe.text8')}
          </p>
          <Nav.Link as={NavLink} className={styles.navLink} to="/contact">
            <button className={styles.formButton}>
              {this.props.t('home.buttonContactMe')}
            </button>
          </Nav.Link>

          <h2 className={styles.titleH}>
            {this.props.t('aboutMe.title3')}
          </h2>
          <div className={styles.logoHorizon}>
            <img className={styles.logoH1} src={logoDart} alt="logo Dart" width="30" heigh="30" />
            <img className={styles.logoH2} src={logoFlutter} alt="logo Flutter" width="30" heigh="30" />
            <img className={styles.logoH3} src={logoJava} alt="logo Java" width="30" heigh="30" />
          </div>
          <p className={styles.text}>
            {this.props.t('aboutMe.text9')}
          </p>
          <p className={styles.text}>
            {this.props.t('aboutMe.text10')}
          </p>
          <p className={styles.text}>
            {this.props.t('aboutMe.text11')}
          </p>
          <p className={styles.text}>
            {this.props.t('aboutMe.text12')}
          </p>
          <p className={styles.text}>
            {this.props.t('aboutMe.text13')}
          </p>
          <button onClick={saveFile} className={styles.formButtonDown}>{this.props.t('aboutMe.download')}</button>
        </div>
      </>
    );
  }
}

export default withTranslation()(AboutMe);