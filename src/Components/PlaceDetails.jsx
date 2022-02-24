import React from "react";
import { AiFillPhone } from 'react-icons/ai'
import { MdLocationPin } from 'react-icons/md'
import ReactStars from "react-rating-stars-component";

const PlaceDetails = ({ place }) => {
  return (
    <div className="card rounded overflow-hidden shadow-lg mb-3">
      <img
        class="w-full"
        src={
          place.photo
            ? place.photo.images.large.url
            : `https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
        }
        alt="Restorant IMG"
      ></img>

      <div className="cardContent px-6 py-4">

        <div className="font-bold text-xl">{place.name}</div>
        <div className="flex justify-between my-2 text-sm"> 
          <ReactStars count={5} size={24} edit={false} isHalf={true} value={Number(place.rating)} activeColor="#ffd700"/>
          <p className="text-zinc-900 m-0">Out Of {place.num_reviews} reviews</p>
        </div>
        <div className="flex justify-between my-2 text-sm">
          <p className="m-0">Price</p>
          <p className="text-zinc-900 m-0">{place.price_level}</p>
        </div>
        <div className="flex justify-between my-2 text-sm">
          <p className="m-0 mr-2">Ranking</p>
          <p className="text-zinc-900 m-0">{place.ranking}</p>
        </div>

        <div className="py-1">
          {place?.awards?.map((award) => (
            <div className="box flex justify-between my-1 items-center text-sm">
              <img src={award.images.small} />
              <p className="text-zinc-800 m-0">{award.display_name}</p>
            </div>
          ))}
        </div>

        <div class="py-2">
          {place?.cuisine?.map( ({name}) =>(
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
              {name}
            </span>
          ))}
        </div>
        
        {place.address && (
          <p className="m-0 mb-2 text-zinc-900 flex items-center justify-between mt-2 text-sm">
            <span className="text-lg mr-5"><MdLocationPin /></span> <span className="text-right">{place.address}</span>
          </p>
        )} 

        {place.phone && (
          <p className= "text-zinc-900 flex items-center justify-between text-sm m-0">
            <span className="text-lg"><AiFillPhone /></span> {place.phone}
          </p>
        )}

      </div>

      <div className="cardAction pb-4 px-8">
        <a className="text-sm mr-5 text-blue-800 cursor-pointer" onClick={ () => window.open(place.web_url, "_blank")}>TRIP ADVISOR</a>
        <a className="text-sm text-blue-800 cursor-pointer" onClick={ () => window.open(place.website, "_blank")}>WEBSITE</a>
      </div>

    </div>
  );
};

export default PlaceDetails;
