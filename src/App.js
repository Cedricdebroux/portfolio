import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Particles from "react-tsparticles";
import HomePage from './components/features/home';
import ContactMe from './components/features/contact';
import AboutMe from './components/features/aboutMe';
import Works from './components/features/works';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom'; 
import { CSSTransition } from 'react-transition-group';
import { Container, Navbar, Nav } from 'react-bootstrap'


const particlesInit = (main) => {
  console.log(main);

  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
};

const particlesLoaded = (container) => {
  console.log(container);
};

const routes = [
  { path: '/home', name: 'Acceuil', Component: HomePage },
  { path: '/about', name: 'A Propos de moi', Component: AboutMe },
  { path: '/works', name: 'Réalisations', Component: Works },
  { path: '/contact', name: 'Contactez moi', Component: ContactMe }
]
function App () {
    return (
       <Router>
         <>
          <Navbar bg="none" variant="dark" expand="md">
            <Container fluid>
              <Navbar.Brand href="/">D-clic-web</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="ml-auto my-2 my-lg-0"
                  style={{ maxHeight: '180px' }}
                  navbarScroll
                >
                  {routes.map(route => (
                        <Nav.Link
                          key={route.path}
                          as={NavLink}
                          to={route.path}
                          activeClassName="active"
                          exact
                        >
                          {route.name}
                        </Nav.Link>
                      ))}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
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
      </>
    </Router>
  )
}


const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
export default App;
