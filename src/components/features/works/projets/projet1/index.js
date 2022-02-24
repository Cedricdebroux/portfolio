import React from "react";
import styles from "./Projet1.module.css";
import { NavLink } from 'react-router-dom'; 
import { Nav } from 'react-bootstrap';
import back from '../../../../images/pictos/back.png';


function Projet1() {
  return (
   <div className="container">
     <Nav.Link as={NavLink} to="/works">
       <img src={back} alt="back" className={styles.back}/>
     </Nav.Link>
     <div className={ styles.containerProjet1 }>
        <h1 className={ styles.title }>Projet Film</h1>
        <h2 className={ styles.subTitle }>
          Projet React
        </h2>
        <div className={ styles.content }>
          <p className={ styles.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum soluta eius fugit atque, iste omnis corrupti laboriosam, commodi nobis placeat nihil, itaque non nesciunt voluptate delectus ea accusamus blanditiis architecto!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum soluta eius fugit atque, iste omnis corrupti laboriosam, commodi nobis placeat nihil, itaque non nesciunt voluptate delectus ea accusamus blanditiis architecto!  
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum soluta eius fugit atque, iste omnis corrupti laboriosam, commodi nobis placeat nihil, itaque non nesciunt voluptate delectus ea accusamus blanditiis architecto!  
          </p>
          <div className={ styles.images }>
          <img className={ styles.images } src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
          <img className={ styles.images } src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
          <img className={ styles.images } src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
          </div>
        </div>
        </div>
    </div>
  );
}


export default Projet1;