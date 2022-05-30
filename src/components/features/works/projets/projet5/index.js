import React from "react";
import styles from "./Projet5.module.css";
import { NavLink } from 'react-router-dom'; 
import { Nav } from 'react-bootstrap';
import back from '../../../../images/pictos/back.png';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import login from '../../../../images/works/forum/login.webp';
import page1 from '../../../../images/works/forum/page1.webp';
import page2 from '../../../../images/works/forum/page2.webp';
import page3 from '../../../../images/works/forum/page3.webp';
import { withTranslation } from 'react-i18next';


function Projet5(props) {
  return (
   <div className="container">
     <Nav.Link as={NavLink} to="/works">
       <img src={back} alt="back" className={styles.back} width="47" heigh="30"/>
     </Nav.Link>
     <div className={ styles.containerProjet1 }>
        <h1 className={ styles.title }>{props.t('forum.title')}</h1>
        <h2 className={ styles.subTitle }>
          {props.t('forum.subTitle')}
        </h2>
        <div className={ styles.content }>
          <div className={ styles.boxText }>
            <p className={ styles.text}>
              {props.t('forum.text1')}
            </p>
            <p className={ styles.text}>
              {props.t('forum.text2')}
            </p>
            <p className={ styles.text}>
              {props.t('forum.text3')}
            </p>
            <p className={ styles.text}>
              {props.t('forum.text4')}
            </p>
            <p className={ styles.text}>
            {props.t('forum.text5')}<a href="https://github.com/Sanamanel/Forum" target="blank">GitHub</a>.
            </p>
          </div>
          <div className={ styles.images }>
            <Splide 
               options={ {
                  autoplay: true,
                  rewind: true,
                  gap   : '1rem',
                  type  : 'loop',
                  speed : 3000,
                  interval : 1000,
              } }
            >
              <SplideSlide>
                <img className={ styles.images } src={ login } alt="login" width="480" heigh="320"/>
              </SplideSlide>
              <SplideSlide>
                <img className={ styles.images } src={ page1 } alt="page1" width="480" heigh="320"/>
              </SplideSlide>
              <SplideSlide>
                <img className={ styles.images } src={ page2 } alt="page2" width="480" heigh="320"/>
              </SplideSlide>
              <SplideSlide>
                <img className={ styles.images } src={ page3 } alt="page3" width="480" heigh="320"/>
              </SplideSlide>
            </Splide>
          </div>
        </div>
        </div>
    </div>
  );
}


export default withTranslation()(Projet5);