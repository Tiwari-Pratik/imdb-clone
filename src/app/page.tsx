// import { Suspense } from "react";
import MoviesGrid from "./components/MoviesGrid";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h3 className={styles.now}>Now Playing in Theatres ....</h3>
      <MoviesGrid />
    </main>
  );
}
