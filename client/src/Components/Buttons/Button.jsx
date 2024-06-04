import React from 'react'
import styles from "./Button.module.css";

export const Button = (props) => {
    const{text} = props;
  return (
    <div>
        <button className={styles.logInButton}>{text}</button>
    </div>
  )
}
