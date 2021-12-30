import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='search'>Search your favorite cocktail</label>
          <input type='text' value={searchTerm} onChange={handleChange} />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
