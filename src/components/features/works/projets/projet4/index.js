import React from "react";
import styles from "./Projet4.module.css";
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import back from '../../../../images/pictos/back.png';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import admin from '../../../../images/works/restaurant/admin.webp';
import footer from '../../../../images/works/restaurant/footer.webp';
import page1 from '../../../../images/works/restaurant/page1.webp';
import page2 from '../../../../images/works/restaurant/page2.webp';
import page3 from '../../../../images/works/restaurant/page3.webp';
import page4 from '../../../../images/works/restaurant/page4.webp';
import page5 from '../../../../images/works/restaurant/page5.webp';
import page6 from '../../../../images/works/restaurant/page6.webp';
import { withTranslation } from 'react-i18next';


function Projet4(props) {
  return (
    <div className="container">
      <Nav.Link as={NavLink} to="/works">
        <img src={back} alt="back" className={styles.back} width="47" heigh="30" />
      </Nav.Link>
      <div className={styles.containerProjet1}>
        <h1 className={styles.title}>{props.t('wordpress.title')}</h1>
        <h2 className={styles.subTitle}>
          {props.t('wordpress.subTitle')}
        </h2>
        <div className={styles.content}>
          <div className={styles.boxText}>
            <p className={styles.text}>
              {props.t('wordpress.text1')}
            </p>
            <p className={styles.text}>
              {props.t('wordpress.text2')}
            </p>
            <p className={styles.text}>
              {props.t('wordpress.text3')}
            </p>
            <p className={styles.text}>
              {props.t('wordpress.text4')}
            </p>
            <p className={styles.text}>
              {props.t('wordpress.text5')}
            </p>
            <a href="https://teamperfect.bout-de-creations.com/" target="blank">{props.t('wordpress.textLink')}</a>
          </div>
          <div className={styles.images}>
            <Splide
              options={{
                autoplay: true,
                rewind: true,
                gap: '1rem',
                type: 'loop',
                speed: 3000,
                interval: 1000,
              }}
            >
              <SplideSlide>
                <img className={styles.images} src={admin} alt="admin" width="480" heigh="320" />
              </SplideSlide>
              <SplideSlide>
                <img className={styles.images} src={footer} alt="footer" width="480" heigh="320" />
              </SplideSlide>
              <SplideSlide>
                <img className={styles.images} src={page1} alt="page1" width="480" heigh="320" />
              </SplideSlide>
              <SplideSlide>
                <img className={styles.images} src={page2} alt="page2" width="480" heigh="320" />
              </SplideSlide>
              <SplideSlide>
                <img className={styles.images} src={page3} alt="page3" width="480" heigh="320" />
              </SplideSlide>
              <SplideSlide>
                <img className={styles.images} src={page4} alt="page4" width="480" heigh="320" />
              </SplideSlide>
              <SplideSlide>
                <img className={styles.images} src={page5} alt="page5" width="480" heigh="320" />
              </SplideSlide>
              <SplideSlide>
                <img className={styles.images} src={page6} alt="page6" width="480" heigh="320" />
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
}


export default withTranslation()(Projet4);