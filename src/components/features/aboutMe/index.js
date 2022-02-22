import React from "react";
import styles from "./AboutMe.module.css";
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { saveAs } from "file-saver";
import Cv from '../../images/cv/cedric_debroux.pdf';

export default function AboutMe () {
  const saveFile = () => {
    saveAs(
      Cv,
      "cedric_debroux.pdf"
    );
  };
    return (
      <>
        <div>
          <h1 className={ styles.title }>
            Il était une fois
          </h1>
          <p className={ styles.text }>
            Fruit des années 80, passioné par le monde numérique depuis mon enfance.
          </p>
          <p className={ styles.text }>
           Mes premiers pas dans le monde de l'informatique se sont faits sur une machine tournant sous DOS et depuis je suis resté addicte.
          </p>
          <p className={ styles.text }>
            Après une reconversion professionnelle réussie dans le développement web, je prends plaisir à évoluer dans ce nouvel environement en perpétuel changement.
          </p>

          <h2 className={ styles.title }>
            Aujourd'hui
          </h2>
          <p className={ styles.text }>
           Je suis avide de découvrir de nouvelles technologies et de m'y perfectionner grâce à mon besoin d'apprendre au quotidien.
          </p>
          <p className={ styles.text }>
            Mes capacités de communication et d'adaptation viennent de ma nature empathique.
          </p>
          <p className={ styles.text }>
            Étant autonome et proactif, j'aime prendre des initiatives pour atteindre mes objectifs. 
          </p>
          <p className={ styles.text }>
            Le travail en équipe représente toujours une opportunité d'échange et de découverte <em>"Seul, on va plus vite, ensemble, on va plus loin"</em>.
          </p>
          <p className={ styles.text }>
            Je serai ravi de vous rencontrer pour vous en dire plus.
          </p>
          <button className={ styles.formButton}>
              <Nav.Link as={NavLink} className={ styles.navLink } to="/contact">Contactez-moi</Nav.Link>
          </button>
          <button onClick={saveFile} className={ styles.formButtonDown}>Télécharger mon CV</button>
          {/* contactez-moi ! bouton  */}


          <h2 className={ styles.title }>
            À l'horizon
          </h2>
        </div>
      </>
    );
}