import React from 'react';
import './CardCom.css';
import { Link, NavLink } from 'react-router-dom';

function CardCom({ name, flag, population, region, capital }) {
  return (
    <>
      <Link className="card_main" to={`/${name}`}>
        <img src={flag} alt="" />
        <div className="card_content">
          <h2>{name}</h2>
          <p>
            Population: <span>{population.toLocaleString('en-IN')}</span>
          </p>
          <p>
            Region: <span>{region}</span>
          </p>
          <p>
            Capital: <span>{capital}</span>
          </p>
        </div>
      </Link>
    </>
  );
}

export default CardCom;
