import React from "react";
import styles from "./AboutMe.module.css";
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { saveAs } from "file-saver";
import Cv from '../../images/cv/cedric_debroux_cv.pdf';
import logoDart from '../../images/competences/logoDart.png';
import logoFlutter from '../../images/competences/logoFlutter.png';
import logoJava from '../../images/competences/logoJava.png';

export default function AboutMe () {
  const saveFile = () => {
    saveAs(
      Cv,
      "cedric_debroux.pdf"
    );
  };
    return (
      <>
        <div className={ styles.aboutMe}>
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
          <Nav.Link as={NavLink} className={ styles.navLink } to="/contact">
          <button className={ styles.formButton}>
              Contactez-moi
          </button>
          </Nav.Link>

          <h2 className={ styles.titleH }>
            À l'horizon
          </h2>
          <div className={ styles.logoHorizon }>
            <img className={ styles.logoH1 } src={logoDart} alt="logo Dart" width="30" heigh="30"/>
            <img className={ styles.logoH2 } src={logoFlutter} alt="logo Flutter" width="30" heigh="30"/>
            <img className={ styles.logoH3 } src={logoJava} alt="logo Java" width="30" heigh="30"/>
          </div>
          <p className={ styles.text }>
            Je suis toujours à la recherche d'un nouveau challenge et de nouveaux défis.
          </p>
          <p className={ styles.text }>
            Flutter, Dart , Java, sont les prochains langages que je souhaite approfondir.
          </p>
          <p className={ styles.text }>
            Flutter est un framework de développement web qui permet de créer des applications mobiles en utilisant le langage Dart.
            C'est suffisant pour éveiller ma curiosité, pour moi, il fait partie des frameworks incontournables à l'air du digital.
          </p>
          <p className={ styles.text }>
            Java est un langage de programmation orienté objet qui a fait ses preuves, étant très utilisé à travers le monde, je ne pouvais pas passer à côté. 
          </p>
          <p className={ styles.text }>
            Le monde du développement est en perpétuelle évolution, c'est ce qui me plait ! J'ai hâte de découvrir ce que l'avenir nous réserve.
          </p>
          <button onClick={saveFile} className={ styles.formButtonDown}>Télécharger mon CV</button>
        </div>
      </>
    );
}