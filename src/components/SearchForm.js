import React from 'react';
import { useGlobalContext } from '../store/context';

const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();

  return (
    <form className='search-form' onSubmit={e => e.preventDefault()}>
      <h2>Search Movies</h2>
      <input
        className='form-input'
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      {error.show && <div className='error'>Movies Not Found !</div>}
    </form>
  )
};

export default SearchForm;
