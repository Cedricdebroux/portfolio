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


function Projet3() {
  return (
   <div className="container">
     <Nav.Link as={NavLink} to="/works">
       <img src={back} alt="back" className={styles.back} width="47" heigh="30"/>
     </Nav.Link>
     <div className={ styles.containerProjet1 }>
        <h1 className={ styles.title }>Jeu en React</h1>
        <h2 className={ styles.subTitle }>
          Acheter les arbres de la ville de Liège.
        </h2>
        <div className={ styles.content }>
          <div className={ styles.boxText }>
            <p className={ styles.text}>
            Dans une carte de Liège, il y a des arbres. Chaque arbre a une valeur (qui est le produit de son diamètre par sa hauteur, arrondi vers le haut).
            </p>
            <p className={ styles.text}>
            Lorsqu'un joueur entre dans le jeu, il doit créer un compte, recevra une couleur aléatoire (qui peut être modifiée dans le profil) et recevra trois arbres aléatoires gratuits (Et quelques feuilles bonus, selon la formule : [feuilles totales des joueurs] / [nombre de joueurs]).
            </p>
            <p className={ styles.text}>
            Toutes les quinze minutes dans la vraie vie, chaque joueur recevra une quantité de feuilles égale au total de chacun de ses arbres.
            </p>
            <p className={ styles.text}>
            Chaque heure dans la vraie vie, chaque joueur perd la moitié de ses feuilles.
            </p>
            <p className={ styles.text}>
            Chaque fois qu'il le souhaite, un joueur peut acheter un arbre.
            </p>
            <p className={ styles.text}>
              <a href="https://btc-liege.herokuapp.com/" target="blank">Une partie ?</a>
            </p>
            <p className={ styles.text}>
            Pour les détails rendez-vous sur <a href="https://github.com/the-botanists/mwenbwa"  target="blank">GitHub.</a> 
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


export default Projet3;