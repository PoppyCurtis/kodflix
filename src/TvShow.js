import React from 'react';
import { Link } from 'react-router-dom';

export default function TvShow(properties) {
  return (
    <Link to="/details" className="item">
      <img src={properties.logo} alt={`Picture of ${properties.name}`} />
      <div className='overlay'>
        <h1>{properties.name}</h1>
      </div>
    </Link>
  );
}

