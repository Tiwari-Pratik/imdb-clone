interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_count: number;
  vote_average: number;
  release_date: string;
  adult: boolean;
}

type Result = {
  results: Movie[];
};
