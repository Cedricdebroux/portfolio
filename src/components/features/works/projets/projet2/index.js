import React from "react";
import styles from "./Projet2.module.css";
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import back from '../../../../images/pictos/back.png';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import page1 from '../../../../images/works/webshop/page1.webp';
import page2 from '../../../../images/works/webshop/page2.webp';
import page3 from '../../../../images/works/webshop/page3.webp';
import page4 from '../../../../images/works/webshop/page4.webp';
import page5 from '../../../../images/works/webshop/page5.webp';
import page6 from '../../../../images/works/webshop/page6.webp';
import page7 from '../../../../images/works/webshop/page7.webp';
import page8 from '../../../../images/works/webshop/page8.webp';
import page9 from '../../../../images/works/webshop/page9.webp';
import home from '../../../../images/works/webshop/home.webp';
import { withTranslation } from 'react-i18next';

function Projet2(props) {
  return (
    <div className="container">
      <Nav.Link as={NavLink} to="/works">
        <img src={back} alt="back" className={styles.back} width="47" heigh="30" />
      </Nav.Link>
      <div className={styles.containerProjet1}>
        <h1 className={styles.title}>
          {props.t('webshop.title')}
        </h1>
        <h2 className={styles.subTitle}>
          {props.t('webshop.subTitle')}
        </h2>
        <div className={styles.content}>
          <div className={styles.boxText}>
            <p className={styles.text}>
              {props.t('webshop.text1')}
            </p>
            <p className={styles.text}>
              {props.t('webshop.text2')}
            </p>
            <p className={styles.text}>
              {props.t('webshop.text3')}
            </p>
            <p className={styles.text}>
              {props.t('webshop.text4')}
            </p>
            <p className={styles.text}>
              {props.t('webshop.text5')}
            </p>
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
                <img className={styles.images} src={home} alt="webshop 1" width="480" heigh="320" />
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
              <SplideSlide>
                <img className={styles.images} src={page7} alt="page7" width="480" heigh="320" />
              </SplideSlide>
              <SplideSlide>
                <img className={styles.images} src={page8} alt="page8" width="480" heigh="320" />
              </SplideSlide>
              <SplideSlide>
                <img className={styles.images} src={page9} alt="page9" width="480" heigh="320" />
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
}


export default withTranslation()(Projet2);