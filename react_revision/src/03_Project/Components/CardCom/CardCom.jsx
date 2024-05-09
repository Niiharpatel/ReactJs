import React from 'react';
import './CardCom.css';
import { Link } from 'react-router-dom';

function CardCom({ name, flag, population, region, capital, data }) {
  return (
    <>
      <Link className="card_main" to={`/${name}`} state={{ data }}>
        <div className="img_container">
          <img src={flag} alt="" />
        </div>
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
