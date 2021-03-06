import React, { Component } from 'react';
import './App.css';
import Particles from "react-tsparticles";
import HomePage from './components/features/home';
import ContactMe from './components/features/contact';
import AboutMe from './components/features/aboutMe';
import Works from './components/features/works';
import Loading from './components/utils/Loading';
import Projet1 from './components/features/works/projets/projet1/';
import Projet2 from './components/features/works/projets/projet2/';
import Projet3 from './components/features/works/projets/projet3/';
import Projet4 from './components/features/works/projets/projet4/';
import Projet5 from './components/features/works/projets/projet5/';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Container, Nav, Navbar } from 'react-bootstrap'
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import logoCed from './components/images/logoCed.png';



import { withTranslation } from 'react-i18next';


const particlesInit = (main) => {


  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
};

const particlesLoaded = (container) => {

};

const lngs = {
  fr: { nativeName: 'Fr' },
  en: { nativeName: 'En' }
};
const routes = [
  { path: '/home', name: 'Accueil', Component: HomePage },
  { path: '/about', name: 'À propos de moi', Component: AboutMe },
  { path: '/works', name: 'Réalisations', Component: Works },
  { path: '/contact', name: 'Contactez-moi', Component: ContactMe }


]


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null,
      loaded: false
    }

    setTimeout(() => {
      this.setState({
        loaded: true
      })
    }, 3000);
  }
  render() {
    const { i18n } = this.props;

    return (
      <Router>
        <ScrollToTop>
          {this.state.loaded ? (
            <>
              <div className="mb-5">

                <Navbar collapseOnSelect fixed="top" variant="dark" expand="md" className='navBarBg'>
                  <Container fluid>
                    <Navbar.Brand className='logo-accueil' href="/">
                      <img src={logoCed} alt="logo" className='logo-ced' />
                      {/* <p>{this.props.t('description.part2')}</p> appelle du texte selon langue choisie i18n */}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="navbarScroll">
                      <Nav
                        className="me-auto"
                        style={{ maxHeight: '200px' }}
                        navbarScroll
                      >
                        <NavLink to='/home' className="nav-link" activeClassName="active">{this.props.t('navBar.home')}</NavLink>
                        <NavLink to='/about' className="nav-link" activeClassName="active">{this.props.t('navBar.about')}</NavLink>
                        <NavLink to='/works' className="nav-link" activeClassName="active">{this.props.t('navBar.works')}</NavLink>
                        <NavLink to='/contact' className="nav-link" activeClassName="active">{this.props.t('navBar.contact')}</NavLink>

                        <div className='boxLanguage'>
                          {Object.keys(lngs).map((lng) => (
                            <button className="language" key={lng} style={{ color: this.props.i18n.resolvedLanguage === lng ? '#fff' : 'rgba(255,255,255,.5)', textDecorationLine: this.props.i18n.resolvedLanguage === lng ? 'underline' : 'none' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                              {lngs[lng].nativeName}
                            </button>
                          ))}
                        </div>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
              </div>
              <Container className="container">
                {routes.map(({ path, Component }) => (
                  <Route key={path} exact path={path}>
                    {({ match }) => (
                      <CSSTransition
                        in={match != null}
                        timeout={300}
                        classNames="page"
                        unmountOnExit
                      >
                        <div className="page">
                          <Component />
                        </div>
                      </CSSTransition>
                    )}

                  </Route>
                ))}
                <Redirect to="/home" />
              </Container>
              <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                  background: {
                    color: {
                      value: "#0d0a28",
                    },
                  },
                  fullScreen: {
                    enable: true,
                    zIndex: -1
                  },
                  fpsLimit: 120,
                  interactivity: {
                    events: {
                      onClick: {
                        enable: true,
                        mode: "push",
                      },
                      onHover: {
                        enable: true,
                        mode: "attract",
                      },
                      resize: true,
                    },
                    modes: {
                      bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 40,
                      },
                      push: {
                        quantity: 4,
                      },
                      repulse: {
                        distance: 200,
                        duration: 0.4,
                      },
                    },
                  },
                  particles: {
                    color: {
                      value: "#12606a",
                    },
                    links: {
                      color: "#12606a",
                      distance: 150,
                      enable: true,
                      opacity: 0.5,
                      width: 1,
                    },
                    collisions: {
                      enable: true,
                    },
                    move: {
                      direction: "none",
                      enable: true,
                      outMode: "bounce",
                      random: true,
                      speed: 1,
                      straight: true,
                    },
                    gravity: {
                      acceleration: 0,
                      enable: true,
                      maxSpeed: 1,
                    },
                    number: {
                      density: {
                        enable: true,
                        area: 4000,
                      },
                      value: 120,
                    },
                    opacity: {
                      value: 0.5,
                    },
                    shape: {
                      type: "circle",
                    },
                    size: {
                      random: true,
                      value: 5,
                    },
                  },
                  detectRetina: true,
                }}
              />

              <Route path="/works/movies" component={Projet1}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                  >
                    <div className="page">
                      <Projet1 />
                    </div>
                  </CSSTransition>
                )}
              </Route>
              <Route path="/works/ecommerce" component={Projet2}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                  >
                    <div className="page">
                      <Projet2 />
                    </div>
                  </CSSTransition>
                )}
              </Route>
              <Route path="/works/game" component={Projet3}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                  >
                    <div className="page">
                      <Projet3 />
                    </div>
                  </CSSTransition>
                )}
              </Route>
              <Route path="/works/restaurant" component={Projet4}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                  >
                    <div className="page">
                      <Projet4 />
                    </div>
                  </CSSTransition>
                )}
              </Route>
              <Route path="/works/forum" component={Projet5}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                  >
                    <div className="page">
                      <Projet5 />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            </>
          ) : (
            <Loading />)}
        </ScrollToTop>
      </Router>

    )
  }
}



export default withTranslation()(App);
