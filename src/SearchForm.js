import React from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  const { search, setSearch, error } = useGlobalContext();

  return (
    <form className="search-form">
      <h2>search movies</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="form-input"
      />

      {error.show && <div className="error">{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
