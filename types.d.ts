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

interface FullMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_count: number;
  vote_average: number;
  release_date: string;
  adult: boolean;
  genres: Genre[];
  popularity: number;
  production_companies: Production[];
  revenue: number;
  runtime: number;
  status: string;
}

interface Genre {
  id: number;
  name: string;
}

interface Production {
  id: number;
  logo_path: string;
  name: string;
}

type Result = {
  results: Movie[];
};
