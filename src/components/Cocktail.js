import React from 'react';
import { Link } from 'react-router-dom';

const Cocktail = ({
  idDrink,
  strDrink,
  strGlass,
  strCategory,
  strAlcoholic,
  strDrinkThumb,
}) => {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={strDrinkThumb} alt={strDrink}></img>
      </div>
      <div className='cocktail-footer'>
        <h3>{strDrink}</h3>
        <h4>{strGlass}</h4>
        <p>{strCategory}</p>
        <Link
          to={`/cocktail/${idDrink}`}
          className='btn btn-primary btn-details'
        >
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
