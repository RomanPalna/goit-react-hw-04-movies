import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import filmApi from '../../FilmAPI/FilmApi';

export default function MovieDetailsPage() {
  const [film, setFilm] = useState(null);

  const { filmId } = useParams();

  useEffect(() => {
    filmApi(filmId).then(setFilm);
  }, [filmId]);

  return <h1>{`Тут має бути фільм ${filmId}`}</h1>;
}
