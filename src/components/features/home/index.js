import React, { Component } from "react";
import styles from './Home.module.css';

export default class HomePage extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <p className={ styles.title }>Home</p>
                </div>
            </>
        )
    }
}