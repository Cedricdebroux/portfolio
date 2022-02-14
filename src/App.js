import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Particles from "react-tsparticles";
import HomePage from './components/features/home';
import ContactMe from './components/features/contact';
import AboutMe from './components/features/aboutMe';
import Works from './components/features/works';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; 


const particlesInit = (main) => {
  console.log(main);

  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
};

const particlesLoaded = (container) => {
  console.log(container);
};
class App extends Component {
  render() {
    return (
       <Router>
         <Header />
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
                  enable: false,
                  mode: "repulse",
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
         <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/contact" component={ContactMe} />
            <Route path="/about" component={AboutMe} />
            <Route path="/works" component={Works} />
            <Redirect from="/" to="/home" />
          </Switch>
        </Router>
    )
  }
}

export default App;
