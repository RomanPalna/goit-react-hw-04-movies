import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fatchFilmDetail from '../../FilmAPI/filmDetailApi';
import Loader from './loader';
import s from './ViewsStyles.module.css';

export default function MovieDetailsPage() {
  const [film, setFilm] = useState(null);

  const { filmId } = useParams();

  useEffect(() => {
    fatchFilmDetail(filmId).then(setFilm);
  }, [filmId]);

  console.log(film);

  return film ? (
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
  ) : (
    <Loader />
  );
}
