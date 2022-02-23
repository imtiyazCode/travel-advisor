import React from 'react'

const PlaceDetails = ({ place }) => {
  return (
    <div className='card rounded overflow-hidden shadow-lg mb-3'>
      <img class="w-full" src={place.photo? place.photo.images.large.url : `https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`} alt="Restorant IMG"></img>
      <div className="cardContent px-6 py-4">
        <div className="font-bold text-xl mb-2">{place.name}</div>
        <div className="flex justify-between">
          <p>Price</p>
          <p className='mb-1 text-zinc-900'>{place.price_level}</p>
        </div>
        <div className="flex justify-between">
          <p>Ranking</p>
          <p className='mb-1 text-zinc-900'>{place.ranking}</p>
        </div>
        {place?.awards?.map( (award) => {
          <div className="box flex justify-between my-1 items-center">
              <img src={award.images.small} />
              <p className='text-zinc-800 text-sm'>{award.display_name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default PlaceDetails