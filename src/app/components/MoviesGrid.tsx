import React, { Suspense } from "react";
import styles from "./MoviesGrid.module.css";
import ThumbsUpIcon from "./ThumbsUpIcon";
import Link from "next/link";
import MoviePoster from "./MoviePoster";

interface MoviesGridProps {
  movies: Promise<Result>;
}
const MoviesGrid = async ({ movies }: MoviesGridProps) => {
  const moviesData = await movies;
  // console.log(moviesData);

  return (
    <section className={styles.moviegrid}>
      {moviesData?.results?.map((movie: Movie) => {
        return (
          <Link
            className={styles.movielink}
            key={movie.id.toString()}
            href={`/movie/${movie.id.toString()}`}
            scroll={true}
          >
            <div className={styles.movie}>
              <Suspense fallback={<p>Loading Image...</p>}>
                <MoviePoster posterPath={movie.poster_path} />
              </Suspense>
              <div className={styles.content}>
                <div className={styles.data}>
                  <p>{movie.overview}</p>
                </div>
                <p className={styles.title}>{movie.title}</p>
                <div className={styles.metrics}>
                  <p>{movie.release_date}</p>
                  <div className={styles.rating}>
                    <ThumbsUpIcon />
                    <p>{movie.vote_count}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default MoviesGrid;
