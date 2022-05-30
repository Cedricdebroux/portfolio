import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import styles from './Works.module.css';
import movieHome from '../../images/works/movies/home480.webp';
import webShop from '../../images/works/webshop/home480.webp';
import btc from '../../images/works/btc/btc480.webp';
import wordpress from '../../images/works/restaurant/restaurant480.webp';
import forum from '../../images/works/forum/forum480.webp';
import { withTranslation } from 'react-i18next';


class Works extends Component {

  render() {
    return (
      <>
        <div className="container">
          <div className={styles.containerProjet1}>
            <h1 className={styles.title}>
            {this.props.t('works.title')}
            </h1>
            <Nav.Link as={NavLink} to="/works/movies">
              <div className={styles.content}>
                <div className={styles.boxText}>
                  <h2 className={styles.subTitle}>{this.props.t('works.subtitle')}</h2>

                  <p className={styles.text}>
                    {this.props.t('works.text1')}
                  </p>
                  <p className={styles.text}>
                    {this.props.t('works.text2')}
                  </p>

                </div>
                <div className={styles.images}>
                  <img className={styles.images} src={movieHome} alt="movie home" width="480" heigh="320" />
                </div>
              </div>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/works/ecommerce">
              <div className={styles.content}>
                <div className={styles.boxText}>
                  <h2 className={styles.subTitle}>{this.props.t('works.subTitle2')}</h2>

                  <p className={styles.text}>
                    {this.props.t('works.text3')}
                  </p>
                  <p className={styles.text}>
                    {this.props.t('works.text4')}
                  </p>
                  <p className={styles.text}>
                    {this.props.t('works.text5')}
                  </p>
                </div>
                <div className={styles.images}>
                  <img className={styles.images} src={webShop} alt="E-commerce" width="480" heigh="320" />
                </div>
              </div>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/works/game">
              <div className={styles.content}>
                <div className={styles.boxText}>
                  <h2 className={styles.subTitle}>{this.props.t('works.subTitle3')}</h2>

                  <p className={styles.text}>
                    {this.props.t('works.text6')}
                  </p>
                  <p className={styles.text}>
                    {this.props.t('works.text7')}
                  </p>
                  <p className={styles.text}>
                    {this.props.t('works.text8')}
                  </p>
                 
                </div>
                <div className={styles.images}>
                  <img className={styles.images} src={btc} alt="btc" width="480" heigh="320" />
                </div>
              </div>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/works/restaurant">
              <div className={styles.content}>
                <div className={styles.boxText}>
                  <h2 className={styles.subTitle}>{this.props.t('works.subTitle4')}</h2>
                  <p className={styles.text}>
                    {this.props.t('works.text9')}
                  </p>

                  <p className={styles.text}>
                    {this.props.t('works.text10')}
                  </p>
                 
                </div>
                <div className={styles.images}>
                  <img className={styles.images} src={wordpress} alt="restaurant" width="480" heigh="320" />
                </div>
              </div>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/works/forum">
              <div className={styles.content}>
                <div className={styles.boxText}>
                  <h2 className={styles.subTitle}>{this.props.t('works.subTitle5')}</h2>
                  <p className={styles.text}>
                    {this.props.t('works.text11')}
                  </p>
                  <p className={styles.text}>
                    {this.props.t('works.text12')}
                  </p>
                </div>
                <div className={styles.images}>
                  <img className={styles.images} src={forum} alt="forum" width="480" heigh="320" />
                </div>
              </div>
            </Nav.Link>
          </div>
        </div>
      </>
    )
  }
}
export default withTranslation()(Works);