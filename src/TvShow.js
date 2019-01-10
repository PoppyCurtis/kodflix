import React from 'react';
export default function TvShow(properties) {
  return (
    <div className="item">
      <img src={properties.logo} alt={`Picture of ${properties.name}`} />
      <div className='overlay'>
        <h1>{properties.name}</h1>
      </div>
    </div>
  );
}