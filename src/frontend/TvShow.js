import React from 'react';
import { Link } from 'react-router-dom';

export default function TvShow(properties) {
  return (
    <Link to={`/${properties.id}`} className='item'>
      <img src={require(`./common/images/${properties.id}.jpg`)} alt={`${properties.id}`} />
      <div className='overlay'>
        <h1>{properties.name}</h1>
      </div>
    </Link>
    
  );
}

