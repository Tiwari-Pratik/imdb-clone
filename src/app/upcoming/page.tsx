import MoviesGrid from "../components/MoviesGrid";
import { getMovies } from "../utils/getMovies";
import styles from "./page.module.css";

const UpComing = async () => {
  const upcomingUrl =
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1/";
  const moviesUpComing = getMovies(upcomingUrl);
  // console.log(moviesPlaying);

  return (
    <main className={styles.main}>
      <h3 className={styles.upcoming}>Up Coming Movies in Theatres ....</h3>
      <MoviesGrid movies={moviesUpComing} />
    </main>
  );
};

export default UpComing;
