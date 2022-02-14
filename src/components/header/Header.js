import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return(
            <header className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">D-clic-web</a>
                <button className="navbar-toggler">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-5">
                      <NavLink to="/home" className="nav-link">Acceuil</NavLink> 
                    </li>
                    <li className="nav-item mr-5">
                    <NavLink to="/about" className="nav-link">A Propos de moi</NavLink> 
                    </li>
                    <li className="nav-item mr-5">
                    <NavLink to="/works" className="nav-link">Réalisations</NavLink>
                    </li>
                    <li className="nav-item mr-1">
                    <NavLink to="/contact" className="nav-link">Contactez moi</NavLink> 
                    </li>
                </ul>
                </div>
            </header>
         );
    }
}