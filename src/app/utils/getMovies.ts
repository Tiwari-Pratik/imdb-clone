export const getMovies = async (url: string) => {
  const res = await fetch(url, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${process.env.MOVIE_ACCESS_TOKEN}`,
    },
  });

  if (!res.ok) {
    throw new Error("Could not fetch movies");
  }

  const movies: Result = await res.json();

  return movies;
};
