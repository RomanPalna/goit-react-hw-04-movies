const API_KEY = '212da8d7e84ef8a0df2f733afbf10d5d';
const TRENDING_URL = 'https://api.themoviedb.org/3/trending/all/day';

export default async function trendingFilmApi(page) {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    page: page,
  });

  const url = `${TRENDING_URL}?${searchParams}`;

  const response = await fetch(url);
  const movies = await response.json();

  return movies;
}
