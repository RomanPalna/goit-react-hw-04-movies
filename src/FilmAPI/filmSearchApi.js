const API_KEY = '212da8d7e84ef8a0df2f733afbf10d5d';
const MOVIE_SEARCH = 'https://api.themoviedb.org/3/search/movie';

export default async function fetchMovieQuery(query) {
  const url = `${MOVIE_SEARCH}?api_key=${API_KEY}&query=${query}`;

  const response = await fetch(url);
  const movie = await response.json();

  return movie;
}
