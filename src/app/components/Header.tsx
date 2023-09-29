import React from "react";
import NavBar from "./NavBar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <NavBar />
    </header>
  );
};

export default Header;
