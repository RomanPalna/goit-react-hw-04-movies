import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Searchbar from './SearchBar';
import fetchMovieQuery from '../../FilmAPI/filmSearchApi';
import s from './ViewsStyles.module.css';
import imgNotFound from '../../images/notFound.jpg';

export default function MoviesPage() {
  const [search, setSearch] = useState(null);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (!search) {
      return;
    }

    fetchMovieQuery(search).then(film => setFilms([...film.results]));
  }, [search]);

  const onSearch = query => {
    setSearch(query);
  };

  return (
    <>
      <Searchbar onSubmit={onSearch} />

      {films && (
        <div>
          <>
            <ul className={s.top}>
              {films.map(film => (
                <li key={film.id} className={s.galery__item}>
                  <Link to={`movies/${film.id}`} className={s.card__title}>
                    <img
                      alt={film.title}
                      src={
                        film.poster_path
                          ? `${'https://image.tmdb.org/t/p/w400'}${
                              film.poster_path
                            }`
                          : imgNotFound
                      }
                      width="280"
                    ></img>
                    <br />
                    {film.original_title || film.title}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        </div>
      )}
    </>
  );
}
