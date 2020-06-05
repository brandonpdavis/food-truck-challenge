import React, { useState } from 'react';
import Results from './Results';
import { getFoodTrucks } from '@brockmdavis/sfft-sdk';

const SearchParams = () => {
  const [long, setLong] = useState('-122.39');
  const [lat, setLat] = useState('37.79');
  const [pets, setPets] = useState([]);
  const [foodTrucks, setFoodTrucks] = useState([]);

  async function requestFoodTrucks() {
    const { data } = await getFoodTrucks(long, lat, '');
    setFoodTrucks(data || []);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestFoodTrucks();
        }}
      >
        <label htmlFor="longitude">
          Longitude
          <input id="longitude" value={long} placeholder="Longitude" onChange={(e) => setLong(e.target.value)} />
        </label>
        <label htmlFor="latitude">
          Latitude
          <input id="latitude" value={lat} placeholder="Latitude" onChange={(e) => setLat(e.target.value)} />
        </label>
        <button>Submit</button>
      </form>
      <Results foodtrucks={foodTrucks} />
    </div>
  );
};

export default SearchParams;
