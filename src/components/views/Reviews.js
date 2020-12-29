import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovieDetails from '../../FilmAPI/filmRewievsApi';
import Spinner from './loader';
// import noReview from '../../images/noReview.jpg';
// import s from './ViewsStyles.module.css';

export default function Reviews() {
  const [rewievs, setRewievs] = useState(null);
  const { filmId } = useParams();

  useEffect(() => {
    fetchMovieDetails(filmId).then(setRewievs);
  }, [filmId]);

  console.log(rewievs);

  return rewievs ? (
    <ul>
      {rewievs.results.map(result => (
        <li key={result.id}>
          <h3>Author: {result.author}</h3>
          <p>{result.content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <Spinner />
  );
}
