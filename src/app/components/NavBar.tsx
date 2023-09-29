import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.link} href="/">
        Home
      </Link>
      <Link className={styles.link} href="/about">
        About
      </Link>
      <Logo />
    </nav>
  );
};

export default NavBar;
