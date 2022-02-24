import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { Nav } from 'react-bootstrap';
import styles from './Works.module.css';


export default function Works() {
  return (
    <>
    <div className="container">
    <div className={ styles.containerProjet1 }>
    <h1 className={styles.title}>
      Mes réalisations
    </h1>
    <Nav.Link as={NavLink} to="/works/job1">
      <div className={ styles.content }>
          <div className={ styles.boxText }>
            <h2 className={ styles.subTitle }>Projet 1</h2>

            <p className={ styles.text }>
              Lorem ipsum dolor sit amet, cof adipiscing elit.
            </p>
            <p className={ styles.text }>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className={ styles.text }>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className={ styles.text }>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className={ styles.images }>
            <img className={ styles.images } src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
          </div>
        </div>
    </Nav.Link>
    <Nav.Link as={NavLink} to="/works/job2">
    <div className={ styles.content }>
          <div className={ styles.boxText }>
            <h2 className={ styles.subTitle }>Projet 2</h2>

            <p className={ styles.text }>
              Lorem ipsum dolor sit amet, cof adipiscing elit.
            </p>
            <p className={ styles.text }>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className={ styles.text }>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className={ styles.text }>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className={ styles.images }>
            <img className={ styles.images } src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
          </div>
        </div>
    </Nav.Link>
    <Nav.Link as={NavLink} to="/works/job3">
    <div className={ styles.content }>
          <div className={ styles.boxText }>
            <h2 className={ styles.subTitle }>Projet 3</h2>

            <p className={ styles.text }>
              Lorem ipsum dolor sit amet, cof adipiscing elit.
            </p>
            <p className={ styles.text }>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className={ styles.text }>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className={ styles.text }>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className={ styles.images }>
            <img className={ styles.images } src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
          </div>
        </div>
    </Nav.Link>
    <Nav.Link as={NavLink} to="/works/job4">
    <div className={ styles.content }>
          <div className={ styles.boxText }>
            <h2 className={ styles.subTitle }>Projet 4</h2>

            <p className={ styles.text }>
              Lorem ipsum dolor sit amet, cof adipiscing elit.
            </p>
            <p className={ styles.text }>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className={ styles.text }>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className={ styles.text }>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className={ styles.images }>
            <img className={ styles.images } src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
          </div>
        </div>
    </Nav.Link>
    <Nav.Link as={NavLink} to="/works/job5">
      <div className={ styles.content }>
          <div className={ styles.boxText }>
            <h2 className={ styles.subTitle }>Projet 5</h2>

            <p className={ styles.text }>
              Lorem ipsum dolor sit amet, cof adipiscing elit.
            </p>
            <p className={ styles.text }>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className={ styles.text }>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className={ styles.text }>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className={ styles.images }>
            <img className={ styles.images } src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
          </div>
        </div>
    </Nav.Link>
    <Nav.Link as={NavLink} to="/works/job6">
    <div className={ styles.content }>
          <div className={ styles.boxText }>
            <h2 className={ styles.subTitle }>Projet 6</h2>

            <p className={ styles.text }>
              Lorem ipsum dolor sit amet, cof adipiscing elit.
            </p>
            <p className={ styles.text }>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className={ styles.text }>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className={ styles.text }>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className={ styles.images }>
            <img className={ styles.images } src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
          </div>
        </div>
    </Nav.Link>
    </div>
    </div>
    </>
  )
}