import MoviesGrid from "@/app/components/MoviesGrid";
import { getMovies } from "@/app/utils/getMovies";
import React from "react";

interface SearchProps {
  searchParams: { [key: string]: string };
}

const SearchPage = async ({ searchParams }: SearchProps) => {
  const searchTerm = searchParams.searchTerm;

  const moviesSearchUrl = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=true&language=en-US&page=1`;

  const searchedMovies = getMovies(moviesSearchUrl);

  return <MoviesGrid movies={searchedMovies} />;
};

export default SearchPage;
