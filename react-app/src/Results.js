import React from 'react';
import FoodTruck from './FoodTruck';

const Results = ({ foodtrucks }) => {
  return (
    <div className="search">
      {foodtrucks.length === 0 ? (
        <h1>No Food Trucks Found</h1>
      ) : (
        foodtrucks.map((foodtruck) => (
          <FoodTruck
            key={foodtruck.objectid}
            fooditems={foodtruck.fooditems}
            applicant={foodtruck.applicant}
            locationdescription={foodtruck.locationdescription}
            address={foodtruck.address}
          />
        ))
      )}
    </div>
  );
};

export default Results;
