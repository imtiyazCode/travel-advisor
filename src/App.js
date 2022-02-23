import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Map from './Components/Map';
import List from './Components/List';
// import PlaceDetails from './Components/PlaceDetails';
import { getPlacesData } from './api';

const App = () => {

  const [bounds, setBounds] = useState({ne:0, sw:0});
  const [cordinates, setCordinates] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    getPlacesData(bounds.ne, bounds.sw)
      .then((data) => {

        console.log(data);
        setPlaces(data);
      })
  }, [bounds, cordinates])

  const [places, setPlaces] = useState([]);

  return (
    <>
      <Header />
      <div className='grid grid-cols-12 w-[100%] h-full'>
        <div className="col-span-12 md:col-span-4">
          <List places={places}/>
        </div>
        <div className="col-span-12 md:col-span-8">
          <Map setCordinates={setCordinates} setBounds={setBounds} cordinates={cordinates}/>
        </div>
      </div>
    </>
  );
}

export default App;
