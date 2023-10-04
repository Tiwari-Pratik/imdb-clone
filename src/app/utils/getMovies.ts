export const getMovies = async (url: string) => {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.MOVIE_ACCESS_TOKEN}`,
    },
    next: {
      revalidate: 14400,
    },
  });

  if (!res.ok) {
    throw new Error("Could not fetch movies");
  }

  const movies: Result = await res.json();

  return movies;
};
