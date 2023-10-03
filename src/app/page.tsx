// import { Suspense } from "react";
import MoviesGrid from "./components/MoviesGrid";
import { getMovies } from "./utils/getMovies";
import styles from "./page.module.css";

const Home = async () => {
  const nowPlayingUrl =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1/";
  const moviesPlaying = getMovies(nowPlayingUrl);
  // console.log(moviesPlaying);

  return (
    <main className={styles.main}>
      <h3 className={styles.now}>Now Playing in Theatres ....</h3>
      <MoviesGrid movies={moviesPlaying} />
    </main>
  );
};

export default Home;
