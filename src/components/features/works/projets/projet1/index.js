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


function Projet1() {
  return (
   <div className="container">
     <Nav.Link as={NavLink} to="/works">
       <img src={back} alt="back" className={styles.back}/>
     </Nav.Link>
     <div className={ styles.containerProjet1 }>
        <h1 className={ styles.title }>Projet Film</h1>
        <h2 className={ styles.subTitle }>
           React
        </h2>
        <div className={ styles.content }>
          <div className={ styles.boxText }>
            <p className={ styles.text}>
              Après plusieurs mois passés sur Symfony, c'était l'occasion pour moi de me remettre à un frameworks javascript front-end.
            </p>
            <p className={ styles.text}>
              J'ai pris beaucoup de plaisir à réaliser celui-ci.
            </p>
            <p className={ styles.text}>
              Il a été réalisé en React avec notament Formik, React-Router, Axios et Bootstrap.
            </p>
            <p className={ styles.text}>
              Il a une barre de recherche fonctionelle avec la selection de la langue du film à afficher dans le résultat, et un ajout au favoris de vos films préférés.
            </p>
            <p className={ styles.text}>
              Pour l'instant, il n'est pas encore relié à une base de données, mais ce projet est encore amené à évoluer.
            </p>
          </div>
          <div className={ styles.images }>
            <Splide 
               options={ {
                  autoplay: true,
                  rewind: true,
                  gap   : '1rem',
                  type  : 'loop',
                  speed : 2000,
                  interval : 800,
              } }
            >
              <SplideSlide>
                <img className={ styles.images } src={page1} alt="page 1 movies"/>
              </SplideSlide>
              <SplideSlide>
                <img className={ styles.images } src={page2} alt="page2 movies"/>
              </SplideSlide>
              <SplideSlide>
                <img className={ styles.images } src={page3} alt="page3 movies"/>
              </SplideSlide>
              <SplideSlide>
                <img className={ styles.images } src={page4} alt="page4 movies"/>
              </SplideSlide>
            </Splide>
          </div>
        </div>
        </div>
    </div>
  );
}


export default Projet1;