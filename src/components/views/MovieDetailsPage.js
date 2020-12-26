import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fatchFilmDetail from '../../FilmAPI/filmDetailApi';

export default function MovieDetailsPage() {
  const [film, setFilm] = useState(null);

  const { filmId } = useParams();

  useEffect(() => {
    fatchFilmDetail(filmId).then(setFilm);
  }, [filmId]);

  console.log(film);

  return (
    <div>
      <img
        alt={film.title}
        src={`https://image.tmdb.org/t/p/w400${film.poster_path}`}
      ></img>
      <div>
        <h1>{film.title}</h1>

        <p>Vote Average: {film.vote_average} / 10</p>
        <h2>Overview</h2>
        <p>{film.overview}</p>
      </div>
    </div>
  );
}
