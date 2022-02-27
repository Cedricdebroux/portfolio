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


function Projet2() {
  return (
    <div className="container">
      <Nav.Link as={NavLink} to="/works">
        <img src={back} alt="back" className={styles.back} />
      </Nav.Link>
      <div className={styles.containerProjet1}>
        <h1 className={styles.title}>E-commerce</h1>
        <h2 className={styles.subTitle}>
          Symfony 5, PHP, Vue, Sylius.
        </h2>
        <div className={styles.content}>
          <div className={styles.boxText}>
            <p className={styles.text}>
              Celui-ci est le dernier gros projet d'entreprise que nous avons réalisé en équipe.
            </p>
            <p className={styles.text}>
              Il s'agit d'un site E-commerce complet.
            </p>
            <p className={styles.text}>
              J'y étais chargé de la partie Back-end avec le framework Symfony 5 ainsi que de la gestion des noms de domaine et de la mise en production.
            </p>
            <p className={styles.text}>
              Plusieurs Technologie ont été nécéssaire à l'élaborations de celui-ci, notament Symfony 5, PHP 8, Webpack-encore, VueJs, Doctrine, Easy admin, Twig, Stripe, MailJet.
            </p>
            <p className={styles.text}>
            Il a été réalisé en trois langues, Français, Néerlandais, Anglais.
            </p>
          </div>
          <div className={styles.images}>
            <Splide
              options={{
                autoplay: true,
                rewind: true,
                gap: '1rem',
                type: 'loop',
                speed: 2000,
                interval: 800,
              }}
            >
              <SplideSlide>
                <img className={styles.images} src={home} alt="webshop 1" />
              </SplideSlide>
              <SplideSlide>
                <img className={styles.images} src={page1} alt="page1" />
              </SplideSlide>
              <SplideSlide>
                <img className={styles.images} src={page2} alt="page2" />
              </SplideSlide>
              <SplideSlide>
                <img className={styles.images} src={page3} alt="page3" />
              </SplideSlide>
              <SplideSlide>
                <img className={styles.images} src={page4} alt="page4" />
              </SplideSlide>
              <SplideSlide>
                <img className={styles.images} src={page5} alt="page5" />
              </SplideSlide>
              <SplideSlide>
                <img className={styles.images} src={page6} alt="page6" />
              </SplideSlide>
              <SplideSlide>
                <img className={styles.images} src={page7} alt="page7" />
              </SplideSlide>
              <SplideSlide>
                <img className={styles.images} src={page8} alt="page8" />
              </SplideSlide>
              <SplideSlide>
                <img className={styles.images} src={page9} alt="page9" />
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Projet2;