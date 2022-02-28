import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import styles from './Works.module.css';
import movieHome from '../../images/works/movies/home480.webp';
import webShop from '../../images/works/webshop/home480.webp';
import btc from '../../images/works/btc/btc480.webp';
import wordpress from '../../images/works/restaurant/restaurant480.webp';
import forum from '../../images/works/forum/forum480.webp';


export default function Works() {
  return (
    <>
      <div className="container">
        <div className={styles.containerProjet1}>
          <h1 className={styles.title}>
            Mes réalisations
          </h1>
          <Nav.Link as={NavLink} to="/works/movies">
            <div className={styles.content}>
              <div className={styles.boxText}>
                <h2 className={styles.subTitle}>Film</h2>

                <p className={styles.text}>
                  Ce projet fait avec React était l'occasion de me
                </p>
                <p className={styles.text}>
                  remettre au front-end avec un framework javascript.
                </p>
              </div>
              <div className={styles.images}>
                <img className={styles.images} src={movieHome} alt="movie home" />
              </div>
            </div>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/works/ecommerce">
            <div className={styles.content}>
              <div className={styles.boxText}>
                <h2 className={styles.subTitle}>E-commerce</h2>

                <p className={styles.text}>
                  E-commerce réalisé avec Symfony 5, PHP, Vue.
                </p>
                <p className={styles.text}>
                  Ce projet à été réalisé en entreprise, les images ont été
                </p>
                <p className={styles.text}>
                  floutées pour des raisons de confidentialité.
                </p>
              </div>
              <div className={styles.images}>
                <img className={styles.images} src={webShop} alt="E-commerce" />
              </div>
            </div>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/works/game">
            <div className={styles.content}>
              <div className={styles.boxText}>
                <h2 className={styles.subTitle}>Jeux</h2>

                <p className={styles.text}>
                  Jeu qui permet l'achat (fictif) d'arbres de la ville de Liège.
                </p>
                <p className={styles.text}>
                  Ce dernier a été réalisé avec React, NodeJS, MongoDB,
                </p>
                <p className={styles.text}>
                  Leaflet, OpenstreetMap.
                </p>
              </div>
              <div className={styles.images}>
                <img className={styles.images} src={btc} alt="btc" />
              </div>
            </div>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/works/restaurant">
            <div className={styles.content}>
              <div className={styles.boxText}>
                <h2 className={styles.subTitle}>Wordpress</h2>

                <p className={styles.text}>
                  Projet réalisé avec Wordpress, PHP.
                </p>
                <p className={styles.text}>
                  Chez BeCode dans le cadre de mon apprentissage.
                </p>
              </div>
              <div className={styles.images}>
                <img className={styles.images} src={wordpress} alt="restaurant" />
              </div>
            </div>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/works/forum">
            <div className={styles.content}>
              <div className={styles.boxText}>
                <h2 className={styles.subTitle}>Forum</h2>

                <p className={styles.text}>
                  Forum réalisé avec PHP, SQL, Bootstrap.
                </p>
                <p className={styles.text}>
                  Chez BeCode dans le cadre de mon apprentissage.
                </p>
              </div>
              <div className={styles.images}>
                <img className={styles.images} src={forum} alt="forum" />
              </div>
            </div>
          </Nav.Link>
        </div>
      </div>
    </>
  )
}