import React from 'react';

export default function FoodTruck({ objectid, fooditems, locationdescription, address, applicant }) {
  let hero = 'http://placecorgi.com/300/300';
  return (
    <a href={`#`} className="foodtruck">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{applicant}</h1>
        <p>{fooditems}</p>
        <p>
          <strong>location:</strong> {address}
        </p>
        <p>{locationdescription}</p>
      </div>
    </a>
  );
}
