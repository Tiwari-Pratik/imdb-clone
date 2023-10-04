import React from "react";
import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinnerSquare}>
        <div className={`${styles.square} ${styles.square1}`}></div>
        <div className={`${styles.square} ${styles.square2}`}></div>
        <div className={`${styles.square} ${styles.square3}`}></div>
      </div>
    </div>
  );
};

export default Loading;
