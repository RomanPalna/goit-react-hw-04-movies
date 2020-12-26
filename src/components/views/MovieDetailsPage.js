import { useState, useEffect } from 'react';
import { useParams, Route, NavLink, useRouteMatch } from 'react-router-dom';
import fatchFilmDetail from '../../FilmAPI/filmDetailApi';
import Loader from './loader';
import Cast from './Cast';
import Reviews from './Reviews';
import s from './ViewsStyles.module.css';

export default function MovieDetailsPage() {
  const [film, setFilm] = useState(null);

  const { url } = useRouteMatch();

  const { filmId } = useParams();

  useEffect(() => {
    fatchFilmDetail(filmId).then(setFilm);
  }, [filmId]);

  return film ? (
    <>
      <div className={s.detailsPage}>
        <img
          className={s.detailsImg}
          alt={film.title}
          src={`https://image.tmdb.org/t/p/w400${film.poster_path}`}
        ></img>
        <div className={s.detailsText}>
          <h1>{film.title}</h1>
          <p>Vote Average: {film.vote_average} / 10</p>
          <h2>Overview</h2>
          <p>{film.overview}</p>
          <h2>Ganres:</h2>
          <ul>
            {film.genres.map(ganre => (
              <li key={ganre.id}>{ganre.name}</li>
            ))}
          </ul>
        </div>
      </div>

      <ul className={s.navLink}>
        <h2>Additional information</h2>
        <li>
          <NavLink to={`${url}/cast`} className={s.card__title}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/reviews`} className={s.card__title}>
            Reviews
          </NavLink>
        </li>
      </ul>

      <Route path="/movies/:filmId/cast">
        <Cast />
      </Route>

      <Route path="/movies/:filmId/reviews">
        <Reviews />
      </Route>
    </>
  ) : (
    <Loader />
  );
}
