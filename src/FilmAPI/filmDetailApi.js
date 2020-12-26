const API_KEY = '212da8d7e84ef8a0df2f733afbf10d5d';
const MOVIE_DETAIL = 'https://api.themoviedb.org/3/movie/';

export default async function fetchMovieDetails(filmId) {
  const url = `${MOVIE_DETAIL}${filmId}?api_key=${API_KEY}`;

  const response = await fetch(url);
  const movie = await response.json();

  return movie;
}
