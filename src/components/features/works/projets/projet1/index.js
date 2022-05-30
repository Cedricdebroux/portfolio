import React from "react";
import styles from "./Projet1.module.css";
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import back from '../../../../images/pictos/back.png';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import page1 from '../../../../images/works/movies/page1.webp';
import page2 from '../../../../images/works/movies/page2.webp';
import page3 from '../../../../images/works/movies/page3.webp';
import page4 from '../../../../images/works/movies/page4.webp';
import { withTranslation } from 'react-i18next';


function Projet1(props) {

  return (
    <div className="container">
      <Nav.Link as={NavLink} to="/works">
        <img src={back} alt="back" className={styles.back} width="47" heigh="30" />
      </Nav.Link>
      <div className={styles.containerProjet1}>
        <h1 className={styles.title}>{props.t('movie.title')}</h1>
        <h2 className={styles.subTitle}>
          {props.t('movie.subTitle')}
        </h2>
        <div className={styles.content}>
          <div className={styles.boxText}>
            <p className={styles.text}>
              {props.t('movie.text1')}
            </p>
            <p className={styles.text}>
              {props.t('movie.text2')}
            </p>
            <p className={styles.text}>
              {props.t('movie.text3')}
            </p>
            <p className={styles.text}>
              {props.t('movie.text4')}
            </p>
            <p className={styles.text}>
              {props.t('movie.text5')}
            </p>
            <p className={styles.text}>
              <a href="https://movies.cedric-debroux.be/" target="blank">{props.t('movie.textLink')}</a>
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
                <img className={styles.images} src={page1} alt="page 1 movies" width="480" heigh="320" />
              </SplideSlide>
              <SplideSlide>
                <img className={styles.images} src={page2} alt="page2 movies" width="480" heigh="320" />
              </SplideSlide>
              <SplideSlide>
                <img className={styles.images} src={page3} alt="page3 movies" width="480" heigh="320" />
              </SplideSlide>
              <SplideSlide>
                <img className={styles.images} src={page4} alt="page4 movies" width="480" heigh="320" />
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
}


export default withTranslation()(Projet1);