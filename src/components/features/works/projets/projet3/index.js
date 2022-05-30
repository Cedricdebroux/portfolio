import React from "react";
import styles from "./Projet3.module.css";
import { NavLink } from 'react-router-dom'; 
import { Nav } from 'react-bootstrap';
import back from '../../../../images/pictos/back.png';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import gameLog from '../../../../images/works/btc/gamelog.webp';
import login from '../../../../images/works/btc/login.webp';
import nameThree from '../../../../images/works/btc/nameThree.webp';
import page1 from '../../../../images/works/btc/page1.webp';
import scoreboard from '../../../../images/works/btc/scoreboard.webp';
import signup from '../../../../images/works/btc/signup.webp';
import { withTranslation } from 'react-i18next';

function Projet3(props) {
  return (
   <div className="container">
     <Nav.Link as={NavLink} to="/works">
       <img src={back} alt="back" className={styles.back} width="47" heigh="30"/>
     </Nav.Link>
     <div className={ styles.containerProjet1 }>
        <h1 className={ styles.title }>{props.t('game.title')}</h1>
        <h2 className={ styles.subTitle }>
          {props.t('game.subtitle')}
        </h2>
        <div className={ styles.content }>
          <div className={ styles.boxText }>
            <p className={ styles.text}>
              {props.t('game.text1')}
            </p>
            <p className={ styles.text}>
              {props.t('game.text2')}
            </p>
            <p className={ styles.text}>
              {props.t('game.text3')}
            </p>
            <p className={ styles.text}>
              {props.t('game.text4')}
            </p>
            <p className={ styles.text}>
              {props.t('game.text5')}
            </p>
            <p className={ styles.text}>
              <a href="https://btc-liege.herokuapp.com/" target="blank">{props.t('movie.textLink')}</a>
            </p>
            <p className={ styles.text}>
            {props.t('game.textLink2')}<a href="https://github.com/the-botanists/mwenbwa"  target="blank">GitHub.</a> 
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
                <img className={ styles.images } src={ gameLog } alt="gamelog" width="480" heigh="320"/>
              </SplideSlide>
              <SplideSlide>
                <img className={ styles.images } src={ login } alt="login" width="480" heigh="320"/>
              </SplideSlide>
              <SplideSlide>
                <img className={ styles.images } src={ nameThree } alt="name three" width="480" heigh="320"/>
              </SplideSlide>
              <SplideSlide>
                <img className={ styles.images } src={ page1 } alt="page1" width="480" heigh="320"/>
              </SplideSlide>
              <SplideSlide>
                <img className={ styles.images } src={ scoreboard } alt="score board" width="480" heigh="320"/>
              </SplideSlide>
              <SplideSlide>
                <img className={ styles.images } src={ signup } alt="signup" width="480" heigh="320"/>
              </SplideSlide>
            </Splide>
          </div>
        </div>
        </div>
    </div>
  );
}


export default withTranslation()(Projet3);