import React, { Component } from "react";
import styles from "./AboutMe.module.css";

export default class AboutMe extends Component {
  render() {
    return (
      <>
        <div>
          <p className={ styles.title }>A propos de moi</p>
        </div>
      </>
    );
  }
}