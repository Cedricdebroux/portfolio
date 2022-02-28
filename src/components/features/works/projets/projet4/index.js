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


function Projet4() {
  return (
   <div className="container">
     <Nav.Link as={NavLink} to="/works">
       <img src={back} alt="back" className={styles.back}/>
     </Nav.Link>
     <div className={ styles.containerProjet1 }>
        <h1 className={ styles.title }>Wordpress</h1>
        <h2 className={ styles.subTitle }>
          Projet client Wordpress sur le thème d'un restaurant.
        </h2>
        <div className={ styles.content }>
          <div className={ styles.boxText }>
            <p className={ styles.text}>
            Ce projet a été réalisé en équipe dans le cadre de ma formation chez Becode.  
            </p>
            <p className={ styles.text}>
            L'enjeu était de réaliser un projet client avec comme thème le restaurant. 
            </p>
            <p className={ styles.text}>
            Les images et la mise en page étaient imposées. 
            </p>
            <p className={ styles.text}>
            Pour la réalisation de celui-ci, nous avons utilisé wordpress et Acf.
            </p>
            <p className={ styles.text}>
            Comme nous l'aurions fait pour un vrai client, uniquement certaine option de la partie "admin" était accessible pour le client et il avait la possibilité d'éditer son site en fonction des changements dans les menus par exemple.  
            </p>
            <a href="https://teamperfect.bout-de-creations.com/" target="blank">Le restaurant</a>
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
                <img className={ styles.images } src={ admin } alt="admin"/>
              </SplideSlide>
              <SplideSlide>
                <img className={ styles.images } src={ footer } alt="footer"/>
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
              <SplideSlide>
                <img className={ styles.images } src={ page4 } alt="page4"/>
              </SplideSlide>
              <SplideSlide>
                <img className={ styles.images } src={ page5 } alt="page5"/>
              </SplideSlide>
              <SplideSlide>
                <img className={ styles.images } src={ page6 } alt="page6"/>
              </SplideSlide>
            </Splide>
          </div>
        </div>
        </div>
    </div>
  );
}


export default Projet4;