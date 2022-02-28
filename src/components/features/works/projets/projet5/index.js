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


function Projet5() {
  return (
   <div className="container">
     <Nav.Link as={NavLink} to="/works">
       <img src={back} alt="back" className={styles.back}/>
     </Nav.Link>
     <div className={ styles.containerProjet1 }>
        <h1 className={ styles.title }>Forum</h1>
        <h2 className={ styles.subTitle }>
          Un forum complet en PHP
        </h2>
        <div className={ styles.content }>
          <div className={ styles.boxText }>
            <p className={ styles.text}>
            Ce projet a été réalisé en équipe dans le cadre de ma formation chez Becode.
            </p>
            <p className={ styles.text}>
            L'enjeu était de réaliser un forum complet en PHP.
            </p>
            <p className={ styles.text}>
            Pour ce dernier, nous avons une page de login et signup à l'arriver sur le site.
            </p>
            <p className={ styles.text}>
            Ensuite, plusieurs informations devaient apparaître sur la page d'accueil, notamment les derniers utilisateurs connecter, les derniers posts classés par catégories.
            </p>
            <p className={ styles.text}>
            Pour en savoir plus je vous invite à visiter le <a href="https://github.com/Sanamanel/Forum" target="blank">GitHub</a>.
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
                <img className={ styles.images } src={ login } alt="login"/>
              </SplideSlide>
              <SplideSlide>
                <img className={ styles.images } src={ page1 } alt="page1"/>
              </SplideSlide>
              <SplideSlide>
                <img className={ styles.images } src={ page2 } alt="page2"/>
              </SplideSlide>
              <SplideSlide>
                <img className={ styles.images } src={ page3 } alt="page3"/>
              </SplideSlide>
            </Splide>
          </div>
        </div>
        </div>
    </div>
  );
}


export default Projet5;