import React from 'react'
import GoogleMapReact from 'google-map-react';
import { ImLocation2 } from 'react-icons/im';
import ReactStars from "react-rating-stars-component";
import { mapStyles } from '../style/mapStyles';

const Map = ({ setBounds, setCordinates, cordinates, places, setChildClicked, weather }) => {

  return (
    <div className="mapContainer w-full h-[85vh]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={cordinates}
        center={cordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
        onChange={(e) => {
          setCordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => { setChildClicked(child) }}
      >
        {places?.map((place, i) => (
          <div className="absolute -translate-x-1/2 -translate-y-1/2 z-10 hover:z-20" lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}>

            {/* for medium size device */}
            <div className="hidden md:flex p-2 flex-col justify-center w-[100px] shadow-md bg-white rounded-md">
              <p className='m-0 mb-2 font-semibold'>{place.name}</p>
              <img src={
                place.photo
                  ? place.photo.images.large.url
                  : `https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
              }
                alt={place.name}
              />
              <ReactStars count={5} size={24} edit={false} isHalf={true} value={Number(place.rating)} activeColor="#ffd700"
              />
            </div>

            {/* For small size divice */}
            <div className="text-blue-800 md:hidden text-2xl">
              <ImLocation2 />
            </div>

          </div>
        ))}

        {weather?.list?.length && weather.list.map((data, i) => (
          <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
            <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} height="70px" />
          </div>
        ))}
      </GoogleMapReact >
    </div >
  )
}

export default Map