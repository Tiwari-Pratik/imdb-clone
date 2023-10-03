import MoviesGrid from "../components/MoviesGrid";
import { getMovies } from "../utils/getMovies";
import styles from "./page.module.css";

const TopRated = async () => {
  const topRatedUrl =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1/";
  const moviesToprated = getMovies(topRatedUrl);
  // console.log(moviesPlaying);

  return (
    <main className={styles.main}>
      <h3 className={styles.topRated}>Top Rated Movies in Theatres ....</h3>
      <MoviesGrid movies={moviesToprated} />
    </main>
  );
};

export default TopRated;
