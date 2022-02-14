import React, { Component } from "react";
import styles from "./ContactMe.module.css";

export default class ContactMe extends Component {
    render() {
        return (
            <>
            <div>
                <p className={ styles.title }>Contactez moi</p>
            </div>
            </>
        )
    }
}