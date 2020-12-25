import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import filmApi from '../../FilmAPI/FilmApi';
import s from './ViewsStyles.module.css';

export default function HomePage() {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    filmApi(page).then(film => setFilms([...films, ...film.results]));
  }, [page]);

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
