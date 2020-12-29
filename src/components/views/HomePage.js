import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchFilm from '../../FilmAPI/trendFilmApi';
import Spinner from './loader';
import s from './ViewsStyles.module.css';

export default function HomePage() {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetchFilm(page)
      .then(film => setFilms([...films, ...film.results]))
      .finally(setIsLoading(false));
  }, [page]);

  console.log(isLoading);
  const loadMore = () => setPage(prevState => prevState + 1);

  return (
    <>
      <ul className={s.top}>
        {films.map(film => (
          <li key={film.id} className={s.galery__item}>
            <Link to={`movies/${film.id}`} className={s.card__title}>
              <img
                alt={film.title}
                src={`${'https://image.tmdb.org/t/p/w400'}${film.poster_path}`}
                width="280"
              ></img>
              <br />
              {film.original_title || film.title}
            </Link>
          </li>
        ))}
      </ul>
      <button type="buttton" onClick={loadMore} className={s.loadMore}>
        More films...
      </button>
    </>
  );
}
