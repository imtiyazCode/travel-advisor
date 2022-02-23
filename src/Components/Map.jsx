import React from 'react'
import GoogleMapReact from 'google-map-react';
import { ImLocation2 } from 'react-icons/im';

const Map = ({ setBounds, setCordinates, cordinates }) => {

  return (
    <div className="mapContainer w-full h-[85vh]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDuvYmAzQPERwiSZS05IzQ_9dgso__myGI" }}
        defaultCenter={cordinates}
        center={cordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          setCordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={''}
      >

      </GoogleMapReact>
    </div>
  )
}

export default Map