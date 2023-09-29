import React from "react";
import styles from "./MoviesGrid.module.css";
import Image from "next/image";
import ThumbsUpIcon from "./ThumbsUpIcon";

const getMovies: () => Promise<Result> = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1/",
    {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${process.env.MOVIE_ACCESS_TOKEN}`,
      },
    }
  );

  const movies: Result = await res.json();

  return movies;
};
const MoviesGrid = async () => {
  const moviesPlaying = await getMovies();
  console.log(moviesPlaying);
  return (
    <section className={styles.moviegrid}>
      {moviesPlaying.results.map((movie: Movie) => {
        return (
          <div key={movie.id} className={styles.movie}>
            <div className={styles.poster}>
              <Image
                alt="movie poster"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                // width={200}
                // height={200}
                fill={true}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <div className={styles.data}>
                <p>{movie.overview}</p>
              </div>
              <p className={styles.title}>{movie.title}</p>
              <div className={styles.metrics}>
                <p>{movie.release_date}</p>
                <p className={styles.rating}>
                  <ThumbsUpIcon />
                  {movie.vote_count}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default MoviesGrid;
