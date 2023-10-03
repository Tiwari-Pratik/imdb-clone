import React from "react";
import styles from "./MoviePoster.module.css";
import Image from "next/image";
import { getBase64Image } from "@/app/utils/Base64Image";

interface MoviePosterProps {
  posterPath: string;
}

const MoviePoster = async ({ posterPath }: MoviePosterProps) => {
  const base64ImageUrl = await getBase64Image(
    `https://image.tmdb.org/t/p/w500/${posterPath}`
  );
  return (
    <div className={styles.poster}>
      <Image
        alt="movie poster"
        src={`https://image.tmdb.org/t/p/original/${posterPath}`}
        // width={200}
        // height={200}
        fill={true}
        className={styles.image}
        placeholder="blur"
        blurDataURL={base64ImageUrl}
      />
    </div>
  );
};

export default MoviePoster;
