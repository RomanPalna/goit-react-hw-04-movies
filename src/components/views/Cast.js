import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovieCredits from '../../FilmAPI/filmCreditsApi';
import Spinner from './loader';
import imgNotFound from '../../images/notFound.jpg';
import s from './ViewsStyles.module.css';

export default function Cast() {
  const [credits, setCredits] = useState(null);
  const { filmId } = useParams();

  useEffect(() => {
    fetchMovieCredits(filmId).then(setCredits);
  }, [filmId]);

  return credits ? (
    <ul className={s.creditsPage}>
      {credits.cast.map(credit => (
        <li key={credit.id} className={s.creditItem}>
          <img
            src={
              credit.profile_path
                ? `https://image.tmdb.org/t/p/w400${credit.profile_path}`
                : imgNotFound
            }
            alt={credit.original_name}
            width="200"
          ></img>
          <h3>Original name: {credit.original_name}</h3>
          <p>Character: {credit.character}</p>
        </li>
      ))}
    </ul>
  ) : (
    <Spinner />
  );
}
