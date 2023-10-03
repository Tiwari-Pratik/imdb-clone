import styles from "./page.module.css";
import Image from "next/image";
import ThumbsUpIcon from "../../components/ThumbsUpIcon";
import { getBase64Image } from "@/app/utils/Base64Image";

const getMovie = async (id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${process.env.MOVIE_ACCESS_TOKEN}`,
      },
    }
  );

  const movie: FullMovie = await res.json();

  return movie;
};

interface MovieProps {
  params: {
    movieId: string;
  };
}

const MoviePage = async ({ params: { movieId } }: MovieProps) => {
  const movieData = await getMovie(movieId);
  const base64ImageUrl = await getBase64Image(
    `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
  );
  return (
    <section className={styles.movieCard}>
      <div className={styles.posterContainer}>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
          alt="Movie Poster"
          // width={500}
          // height={500}
          className={styles.poster}
          fill={true}
          placeholder="blur"
          blurDataURL={base64ImageUrl}
        />
      </div>
      <p className={styles.title}>{movieData.title}</p>
      <div className={styles.overview}>
        <p>{movieData.overview}</p>
      </div>
      <div className={styles.genres}>
        Genres:{"  "}
        {movieData.genres.map((genre, index, genres) => (
          <span key={genre.id}>
            {genre.name}
            {index !== genres.length - 1 ? ", " : ""}{" "}
          </span>
        ))}
      </div>
      <div className={styles.productions}>
        Production:{"  "}
        {movieData.production_companies.map(
          (production, index, productions) => (
            <span key={production.id}>
              {production.name}
              {index !== productions.length - 1 ? ", " : ""}{" "}
            </span>
          )
        )}
      </div>
      <div className={styles.metrics}>
        <p>Status: {movieData.status}</p>
        <p>Release date: {movieData.release_date}</p>
        <div className={styles.rating}>
          <ThumbsUpIcon />
          <p>{movieData.vote_count.toString()}</p>
        </div>
        <p>Popularity: {movieData.popularity.toString()}</p>
        <p>Duration: {movieData.runtime} minutes</p>
        <p>
          Gross Income:{" "}
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(movieData.revenue)}
        </p>
      </div>
    </section>
  );
};

export default MoviePage;
