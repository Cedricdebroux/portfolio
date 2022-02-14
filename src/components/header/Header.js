import React, { Component } from 'react';

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
                      Acceuil 
                    </li>
                    <li className="nav-item mr-5">
                     A Propos de moi 
                    </li>
                    <li className="nav-item mr-5">
                     Réalisations 
                    </li>
                    <li className="nav-item mr-1">
                     Contactez moi 
                    </li>
                </ul>
                </div>
            </header>
         );
    }
}