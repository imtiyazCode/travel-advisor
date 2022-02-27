import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Map from './Components/Map';
import List from './Components/List';
import { getPlacesData, getWheatherData } from './api/travelAdvisorAPI';

const style = {
  containerGrid: `grid grid-cols-12 w-[100%] h-full`,
  listContainer: `col-span-12 md:col-span-4`,
  mapContainer: `col-span-12 md:col-span-8`
}

const App = () => {

  const [type, setType] = useState("restaurants");
  const [places, setPlaces] = useState([]);
  const [weather, setWeather] = useState([]);
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


  useEffect(() => {
    const filteredPlaces = places?.filter((place) => place.rating > rating);

    setFilteredPlaces(filteredPlaces)
  }, [rating])


  useEffect(() => {
    setIsLoading(true);
     
    getWheatherData(cordinates.lat, cordinates.lng)
      .then((data) => {
        setWeather(data);
      })

    getPlacesData(type, bounds.ne, bounds.sw)
      .then((data) => {

        setPlaces(data);
        setFilteredPlaces([])

        setIsLoading(false);
      })
  }, [type, bounds, cordinates])


  return (
    <>
      <Header setCordinates={setCordinates} />
      <div className={style.containerGrid}>
        <div className={style.listContainer}>
          <List places={filteredPlaces?.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating} />
        </div>
        <div className={style.mapContainer}>
          <Map setCordinates={setCordinates}
            setBounds={setBounds}
            cordinates={cordinates}
            places={filteredPlaces?.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
            weather={weather} />
        </div>
      </div>
    </>
  );
}

export default App;
