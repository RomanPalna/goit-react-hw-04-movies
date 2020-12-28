import { useState } from 'react';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleQueryChange = e => {
    e.preventDefault();
    setQuery(e.target.value.toLowerCase());
  };

  const handleQuerySubmit = e => {
    e.preventDefault();

    if (!query) {
      return;
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
