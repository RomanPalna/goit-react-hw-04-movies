import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleQueryChange = e => {
    e.preventDefault();
    setQuery(e.target.value.toLowerCase());
  };

  const handleQuerySubmit = e => {
    e.preventDefault();

    if (!query) {
      return toast.warning('Ей! Впиши что-то в строку поиска!');
    }

    onSubmit(query);

    setQuery('');
  };

  return (
    <form onSubmit={handleQuerySubmit}>
      <input type="text" value={query} onChange={handleQueryChange} />
      <button type="submit">Search Film</button>
    </form>
  );
}
