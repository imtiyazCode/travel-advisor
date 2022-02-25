import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Map from './Components/Map';
import List from './Components/List';
// import PlaceDetails from './Components/PlaceDetails';
import { getPlacesData } from './api';

const App = () => {
  
  const [type, setType] = useState("restaurants");
  const [places, setPlaces] = useState([]);
  const [rating, setRating] = useState("");
  const [bounds, setBounds] = useState({ ne: 0, sw: 0 });
  const [cordinates, setCordinates] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredPlaces, setFilteredPlaces] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect( ()=>{
    const filteredPlaces = places.filter( (place)=> place.rating > rating);
    setFilteredPlaces(filteredPlaces)
  },[rating])

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(type, bounds.ne, bounds.sw)
      .then((data) => {

        console.log(data);
        setPlaces(data);
        setFilteredPlaces([])

        setIsLoading(false);
      })
  }, [type, bounds, cordinates])


  return (
    <>
      <Header setCordinates={setCordinates} />
      <div className='grid grid-cols-12 w-[100%] h-full'>
        <div className="col-span-12 md:col-span-4">
          <List places={ filteredPlaces.length? filteredPlaces: places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating} />
        </div>
        <div className="col-span-12 md:col-span-8">
          <Map setCordinates={setCordinates}
            setBounds={setBounds}
            cordinates={cordinates}
            places={filteredPlaces.length? filteredPlaces: places}
            setChildClicked={setChildClicked} />
        </div>
      </div>
    </>
  );
}

export default App;
